<template>
  <div class="container">
    <h1 class="title">this is mypage</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    middleware: 'auth'
})
</script>