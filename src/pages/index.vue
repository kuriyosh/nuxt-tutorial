<template>
  <div class="flex content-center w-full justify-center center">
    <div>
      <Logo />
      <h1 class="title text-center mt-5">nuxt-tutorial</h1>
      <div class="mt-5">
        <ul>
          <li class="mt-1 text-center" v-for="item in testArray" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    testArray: ["test1", "test2", "test3"],
  }),
});
</script>
