<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

/* eslint-disable */
export default {
  components: { ToolBar },
  compoents: {
    ToolBar,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: rgb(70, 70, 70);
  text-decoration: none;
}

a.router-link-active {
  text-decoration: underline;
}

a:hover {
  color: rgb(55, 150, 119);
  text-decoration: underline;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
