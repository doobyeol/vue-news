<template>
  <div>
    <p v-for="(jobs, idx) in fetchedJobs" :key="idx">
      <a :href="jobs.url">{{ jobs.title }}</a>
      <small>{{ jobs.time_ago }} , {{ jobs.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedJobs"]),
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>
