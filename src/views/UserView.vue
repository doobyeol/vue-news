<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma :{{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
// import NewsView from "@/views/NewsView.vue";

export default {
  components: {
    // NewsView,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    // axios.get(`https://api.hnqwa.com/v0/user/${this.$route.params.id}.json`);
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>
