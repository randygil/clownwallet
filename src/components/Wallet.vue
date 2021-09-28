<script setup>
import List from "./List.vue";
import ListItem from "./ListItem.vue";
// import store
import store from "../store";

// Get coins from store
const coins = store.state.coins;
const total = store.state.total;
const updateCoin = store.dispatch.bind(store, "updateCoin");
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
