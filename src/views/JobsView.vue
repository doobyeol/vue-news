<template>
  <div>
    <ul class="news-list">
      <li v-for="(jobs, idx) in fetchedJobs" :key="idx" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ jobs.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="jobs.url">{{ jobs.title }}</a>
          </p>
          <small class="link-text"
            >{{ jobs.time_ago }} by
            <router-link :to="`/user/${jobs.user}`" class="link-text">
              {{ jobs.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
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
