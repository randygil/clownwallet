<script>
export default {
  props: ["coin"],
  data: () => ({
    editMode: false
  }),
  methods: {
   save() {
      this.editMode = false;
      this.$emit("save", this.coin);
   }
  },
 
};
</script>

<template>
  <article @dblclick="editMode = true" class="p-4 flex space-x-4">
    <div class="flex items-center">
      <img
        src="https://s2.coinmarketcap.com/static/img/coins/64x64/11422.png"
        alt=""
        class="flex-none icon rounded-lg object-cover"
      />
    </div>
    <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
      <h2 v-if="!editMode" class="title-font">
        {{ coin.balance }} {{ coin.name }}
      </h2>
      <div class="flex" v-else>
        <input
          class="
            title-font
            shadow
            appearance-none
            border
            rounded
            w-16
            py-1
            px-3
            text-gray-700
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          type="text"
          v-model="coin.balance"
        />
        <h3 class="title-font ml-3 mt-1">{{ coin.name }}</h3>
      </div>
      <dl class="flex flex-wrap text-sm font-medium whitespace-pre">
        <div class="flex-none w-full mt-0.5 font-normal">
          <dd class="inline text-gray-400">$ {{ coin.balanceUSDT }}</dd>
        </div>
      </dl>
    </div>
    <div class="flex" v-if="editMode">
      <a href="" @click.prevent="save">Save</a>
      <a href="" @click.prevent="editMode = false">X</a>
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
