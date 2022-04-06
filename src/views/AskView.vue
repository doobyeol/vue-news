<template>
  <div>
    <p v-for="(ask, idx) in fetchedAsk" :key="idx">
      <!-- <a :href="ask.url">{{ ask.title }}</a> -->
      <router-link :to="`item/${ask.id}`">{{ ask.title }}</router-link>
      <small>{{ ask.time_ago }} , {{ ask.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
