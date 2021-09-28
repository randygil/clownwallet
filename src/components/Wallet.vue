<script setup>
import List from "./List.vue";
import ListItem from "./ListItem.vue";

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const coins = computed(function () {
  return store.state.coins;
})

const total = computed(function () {
  return store.state.total;
})

function updateCoin (coin) {
  store.dispatch('updateCoin', coin)
}

function resetCoins () {
  store.dispatch('resetCoins')
}

store.dispatch('updateTotal')


</script>

<template>
  <div class="pt-10 mb-10 flex justify-center">
    <div class="flex-auto ">
      <dd class="text-center">Balance</dd>
      <h1 class="text-center text-4xl">{{ total }} USDT</h1>
    </div>
  </div>


  <List>
    <ListItem @save="updateCoin" v-for="coin in coins" :key="coin.token" :coin="coin" />
  </List>
  <div class="mt-3 p-3 flex justify-end">
    <button class="btn btn-blue" @click="resetCoins">Reiniciar</button>
  </div>

</template>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>