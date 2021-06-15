<template>
  <div class="container">
    <b-field label="Username" type="is-danger" message="This email is invalid">
      <b-input type="email" maxlength="30"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input type="password" password-reveal></b-input>
    </b-field>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>>