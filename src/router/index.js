import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/news", // url
      component: NewsView, // url 주소로 갔을때 표시할 컴포넌트
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
  ],
});

export default router;
