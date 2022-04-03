<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
    <router-link to="/item">Item</router-link>
    <router-link to="/user">User</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  color: white;
  background-color: rgb(44, 177, 133);
  display: flex;
  padding: 8px;
}
.header a {
  color: white;
  margin: 0 10px;
}
.header a:active {
  color: rgb(22, 92, 65);
}
</style>
