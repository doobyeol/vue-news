<template>
  <div>
    <ul class="news-list">
      <li v-for="(news, idx) in fetchedNews" :key="idx" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ news.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="news.url">{{ news.title }}</a>
          </p>
          <small class="link-text"
            >{{ news.time_ago }} by
            <router-link :to="`/user/${news.user}`" class="link-text">
              {{ news.user }}
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
    ...mapGetters(["fetchedNews"]),
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(23, 173, 123);
}

.news-title {
  margin: 0;
}

.link-text {
  color: rgb(110, 110, 110);
}
</style>
