export default {
  SET_NEWS(state, data) {
    state.news = data;
  },
  SET_JOBS(state, data) {
    state.jobs = data;
  },
  SET_ASK(state, data) {
    state.ask = data;
  },
  SET_USER(state, username) {
    state.user = username;
  },
  SET_ITEM(state, itemId) {
    state.item = itemId;
  },
};
