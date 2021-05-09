import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result: "",
    allresult: [],
  },
  mutations: {
    scancode(state, payload) {
      state.result = payload;
      state.allresult.push(payload);
    },
  },
  actions: {
    async scancode(context, payload) {
      try {
        const coded = await fetch(
          `https://api.allorigins.win/get?url=https://www.qrtag.net/api/qr_4.png?url=${payload}`,
          { headers: {}, credentials: "same-origin" }
        );
        const gotcode = await coded.json();
        const tagged = gotcode.status.url;
        console.log(tagged);
        context.commit("scancode", tagged);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
  getters: {
    getCurrentTag: (state) => state.result,
    getAllTag: (state) => state.allresult,
  },
});
