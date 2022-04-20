<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div><i class="fa-solid fa-user"></i></div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.id}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">{{ fetchedItem.time_ago }}</div>
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content">
        <!-- {{ fetchedItem.content }} -->
      </div>
    </section>
    <!-- <p>name : {{ fetchedItem.id }}</p>
    <p>title : {{ fetchedItem.title }}</p>
    <p>{{ fetchedItem.content }}</p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedItem"]),
    // itemInfo() {
    //   return this.$store.state.item;
    // },
  },
  created() {
    const itemId = this.$route.params.id;
    // axios.get(`https://api.hnqwa.com/v0/user/${this.$route.params.id}.json`);
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
