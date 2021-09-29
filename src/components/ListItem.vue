<script>
export default {
  props: ["coin"],
  methods: {
    twoDecimals(int) {
      return parseFloat(int).toFixed(2)
    }
  }
};
</script>

<template>
  <article class="p-4 flex space-x-4">
    <div class="flex items-center">
      <img
        :src="coin.icon"
        alt=""
        class="flex-none icon rounded-lg object-cover"
      />
    </div>
    <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
      <div class="flex">
        <a :href="`https://poocoin.app/tokens/${coin.token}`" target="_blank" class="title-font">
        {{ twoDecimals(coin.balance) }} {{ coin.symbol.toUpperCase() }}
      </a>
       <div class="flex-none mt-0.5 ml-3 font-thin text-md">
          <dd class="inline text-gray-400">~{{ coin.price }}</dd>
        </div>
      </div>
      
      <dl class="flex flex-wrap text-sm font-medium whitespace-pre">
        <div class="flex-none w-full mt-0.5 font-normal">
          <dd class="inline text-gray-400">$ {{ twoDecimals(coin.balance * coin.price) }}</dd>
        </div>
      </dl>
    </div>
 
    <hr />
  </article>
</template>

<style scoped>
.icon {
  height: 50px;
  aspect-ratio: auto 50 / 50;
  width: 50px;
}
.title-font {
  @apply text-lg font-semibold text-black mb-0.5;
}
</style>
