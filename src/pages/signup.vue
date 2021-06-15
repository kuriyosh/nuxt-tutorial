<template>
  <div class="container text-center">
    <b-field label="Username" type="is-danger" message="This email is invalid">
      <b-input v-model="signupEmail" type="email" maxlength="30"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input v-model="signupPass" type="password" password-reveal></b-input>
    </b-field>
    <b-button v-on:click="signUp()">Button</b-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      signupEmail: "",
      signupPass: "",
    };
  },
  methods: {
    async signUp() {
      try {
        const { user } = await this.$fire.auth.createUserWithEmailAndPassword(
          this.signupEmail,
          this.signupPass
        );
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>>