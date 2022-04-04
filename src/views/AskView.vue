<template>
  <div>
    <div v-for="(ask, idx) in ask" :key="idx">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index";

export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => (this.ask = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
