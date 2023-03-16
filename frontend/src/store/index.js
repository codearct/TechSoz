import { createStore } from "vuex";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default createStore({
  state: {
    letter: "a",
  },
  getters: {},
  mutations: {
    SET_LETTER(state, letter) {
      state.letter = letter;
    },
  },
  actions: {
    setLetter({ commit }, letter) {
      commit("SET_LETTER", letter);
    },
    async getSources() {
      const request = await axios.get("/sources");
      return request.data;
    },
    async getSourceById(ctx, sourceId) {
      const request = await axios.get(`/sources/${sourceId}`);
      return request.data;
    },
    async addCreator() {
      const response = await axios.get("/auth/login/success", {
        withCredentials: true,
      });
      return response.data.message;
    },
    async addMember() {
      const response = await axios.get("/auth/login/success", {
        withCredentials: true,
      });
      return response.data.message;
    },
  },
  modules: {},
});
