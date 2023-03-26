import { createStore } from "vuex";
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default createStore({
  state: {
    letter: "a",
    isLogin: false,
    isCreator: false,
    user: {},
  },
  getters: {},
  mutations: {
    SET_LETTER(state, letter) {
      state.letter = letter;
    },
    SET_LOGIN(state, isLogin) {
      state.isLogin = isLogin;
    },
    SET_CREATOR(state, isCreator) {
      state.isCreator = isCreator;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    setLetter({ commit }, letter) {
      commit("SET_LETTER", letter);
    },
    async logOut({ commit }) {
      window.open(`${process.env.VUE_APP_API_URL}/auth/logout`, "_self");
      commit("SET_LOGIN", false);
    },
    async getSources() {
      const response = await axios.get("/sources");
      return response.data;
    },
    async getSourceById(ctx, sourceId) {
      const response = await axios.get(`/sources/${sourceId}`);
      return response.data;
    },
    async getUser({ commit }) {
      const response = await axios.get("/auth/login/success", {
        withCredentials: true,
      });
      if (response.status === 200) {
        commit("SET_LOGIN", true);
        const user = response.data.user;
        commit("SET_USER", user);
        if ("createdTerms" in user) commit("SET_CREATOR", true);
        return response.data;
      }
      return response.data;
    },
  },
  modules: {},
});
