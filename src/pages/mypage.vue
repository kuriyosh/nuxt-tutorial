<template>
  <div class="content-center w-full justify-center center">
    <h1 class="title text-center">this is mypage</h1>
    <div class="mt-5">
      <ul>
        <li class="mt-1 text-center" v-for="item in sampleDataList" :key="item">
          <p>title: {{ item.title }}</p>
          <p>description: {{ item.shortDescription }}</p>
        </li>
      </ul>
    </div>
    <div>
      <b-field label="title">
        <b-input v-model="formTitle"></b-input>
      </b-field>
      <b-field label="shortDescription">
        <b-input v-model="formShortDescription"></b-input>
      </b-field>
      <b-button v-on:click="uploadSampleData()">upload</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ALL_SAMPLE_DATA from "~/graphql/query/ALL_SAMPLE_DATA";
import ADD_SAMPLE_DATA from "~/graphql/query/ADD_SAMPLE_DATA";

export default Vue.extend({
  middleware: "auth",
  data: () => ({
    sampleDataList: [],
    formTitle: "",
    formShortDescription: "",
  }),
  async created() {
    this.sampleDataList = (
      await this.$apollo.query({ query: ALL_SAMPLE_DATA })
    ).data.pluralSampleData;
  },
  methods: {
    async uploadSampleData() {
      try {
        const res = await this.$apollo.mutate({
          mutation: ADD_SAMPLE_DATA,
          variables: {
            title: this.formTitle,
            shortDescription: this.formShortDescription,
          },
        });
        console.log(res);

        alert("uploaded");
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>