<script>
import { mapActions } from "vuex";

export default {
  name: "LoginView",
  methods: {
    ...mapActions(["addCreator", "addMember"]),
    async loginAsCreator() {
      window.open(
        `${process.env.VUE_APP_API_URL}/auth/github/callback`,
        "_self"
      );
    },
    async loginAsMember() {
      window.open(
        `${process.env.VUE_APP_API_URL}/auth/google/callback`,
        "_self"
      );
    },
  },
};
</script>

<template lang="pug"> 
.signUp
  .signUpWithGithub
    button(@click="loginAsCreator") Github  
  .signUpWithGoogle
    button(@click="loginAsMember") Google 
</template>
