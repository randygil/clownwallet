
import axios from 'axios'
import { createStore } from 'vuex'
// Get coins from localStorage
const defaultCoins = [
  {
    name: 'BNB',
    symbol: 'BNB',
    price: 0,
    coingeckoId: 'binancecoin',
    provider: 'coingecko',
    balanceUSDT: 0,
    balance: 0,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'
  },
  {
  name: "PVU",
  symbol: 'pvu',
  token: "0x31471e0791fcdbe82fbf4c44943255e923f1b794",
  provider: 'pancakeswap',
  icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11130.png',
  balance: 0,
  price: 0,
  balanceUSDT: 0
},
{
  name: "WANAKA",
  symbol: 'wana',
  token: "0x339c72829ab7dd45c3c52f965e7abe358dd8761e",
  provider: 'pancakeswap',
  icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11422.png',
  balance: 0,
  price: 0,
  balanceUSDT: 0
},
{
  name: 'CARS',
  symbol: 'cars',
  token: '0x1228fb5ef4c98cabd696ba1bd4819e050389d21a',
  provider: 'pancakeswap',
  icon: 'https://cryptocarsworld.com/static/media/logo.a40b8269.png',
  balance: 0,
  price: 0,
  balanceUSDT: 0
},
{
  name: 'THG',
  symbol: 'thg',
  token: '0x9fd87aefe02441b123c3c32466cd9db4c578618f',
  provider: 'pancakeswap',
  icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11926.png',
  balance: 0,
  price: 0,
  balanceUSDT: 0
},
]

const coinStorage = JSON.parse(localStorage.getItem('coins'))
const coins = coinStorage || defaultCoins
const store = createStore({
    state: {
      coins, 
      total: 0
    },
    mutations: {
      updateCoin (state, coin) {
        const index = state.coins.findIndex(c => c.symbol === coin.symbol)
        if (index > -1) {
          state.coins[index] = coin
        }
        
      },
      updateCoins(state, coins) {
        state.coins = coins
        localStorage.setItem('coins', JSON.stringify(state.coins))
      },
      updateTotal (state, total) {
        state.total = total
      }
    },
    actions:{
      resetCoins({commit}) {
        commit('updateCoins', defaultCoins)
      },
      updateCoin ({ commit, dispatch }, coin) {
        commit('updateCoin', coin)
        dispatch('updateTotal')
      },
      async updateTotal ({ commit, dispatch, state }) {
       const coins = await Promise.all(state.coins.map(async (coin) => {
          const price = await dispatch('getPrice', coin.symbol)
          const priceToFixed = parseFloat(price).toFixed(2)
          return { ...coin, price: priceToFixed, balanceUSDT: (coin.balance * coin.price).toFixed(2) }
        }))
        const total = coins.reduce((total, coin) => total + parseFloat(coin.balanceUSDT), 0).toFixed(2)
        commit('updateTotal', total)
        commit('updateCoins', coins)
      },
      async getPrice ({ commit, state }, symbol) {
        const coin = state.coins.find(c => c.symbol === symbol)
        let price
        if (coin.provider === 'pancakeswap') {
          const { data } = (await axios.get(`https://api.pancakeswap.info/api/v2/tokens/${coin.token}`)).data
          price = data.price
        } else if (coin.provider === 'coingecko') {
          const { data } = (await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin.coingeckoId}`))
          price = data[0].current_price
        }
        return price
      }
    }
  })

export default store