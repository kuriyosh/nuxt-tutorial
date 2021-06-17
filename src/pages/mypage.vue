<template>
  <div class="container">
    <h1 class="title">this is mypage</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ALL_SAMPLE_DATA from "~/graphql/query/ALL_SAMPLE_DATA";

export default Vue.extend({
  middleware: "auth",
  async created() {
    const datas = await this.$apollo.query({ query: ALL_SAMPLE_DATA });
  },
});
</script>