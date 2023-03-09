<script>
import { mapActions } from "vuex";

export default {
  name: "SignUpView",
  methods: {
    ...mapActions(["addCreator", "addMember"]),
    async signUpAsCreator() {
      const message = await this.addCreator();
      if (message) alert(message);
    },
    async signUpAsMember() {
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
    button(@click="signUpAsCreator") Github Kayıt 
  .signUpWithGoogle
    button(@click="signUpAsMember") Google Kayıt
</template>
