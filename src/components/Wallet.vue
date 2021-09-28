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


</script>

<template>
  <div class="pt-10 mb-10 flex justify-center">
    <div class="flex-auto ">
      <dd class="text-center">Balance</dd>
      <h1 class="text-center text-4xl">{{ total }}</h1>
    </div>
  </div>


  <List>
    <ListItem @save="updateCoin" v-for="coin in coins" :key="coin.token" :coin="coin" />
  </List>
</template>
