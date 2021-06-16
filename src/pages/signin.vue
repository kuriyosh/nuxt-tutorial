<template>
  <div class="container text-center">
    <b-field label="Username" type="is-danger" message="This email is invalid">
      <b-input v-model="signinEmail" type="email" maxlength="30"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input v-model="signinPass" type="password" password-reveal></b-input>
    </b-field>
    <b-button v-on:click="signIn()">SignIn</b-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      signinEmail: "",
      signinPass: "",
    };
  },
  methods: {
    async signIn() {
      try {
        const { user } = await this.$fire.auth.signInWithEmailAndPassword(
          this.signinEmail,
          this.signinPass
        );
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>>