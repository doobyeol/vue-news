<template>
  <div>
    <ul class="news-list">
      <li v-for="(ask, idx) in fetchedAsk" :key="idx" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ ask.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <router-link :to="`item/${ask.id}`" class="link-text">
              {{ ask.user }}
            </router-link>
            <!-- <a :href="news.url">{{ news.title }}</a> -->
          </p>
          <small class="link-text"
            >{{ ask.time_ago }} by
            <router-link :to="`item/${ask.id}`" class="link-text">
              {{ ask.user }}
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
