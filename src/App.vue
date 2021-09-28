<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Wallet from "./components/Wallet.vue";
</script>

<template>
  <div class="page mt-10 flex justify-center">
    <div class="main-wallet rounder-corner">
      <Wallet></Wallet>
    </div>
  </div>
</template>

<style>
.main-wallet {
  width: 40%;
  border: 1px solid #ccc;
}

</style>
