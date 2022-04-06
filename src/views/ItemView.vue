<template>
  <div>
    <p>name : {{ itemInfo.id }}</p>
    <p>title : {{ itemInfo.title }}</p>
    <p>{{ itemInfo.content }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    itemInfo() {
      return this.$store.state.item;
    },
  },
  created() {
    const itemId = this.$route.params.id;
    // axios.get(`https://api.hnqwa.com/v0/user/${this.$route.params.id}.json`);
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style></style>
