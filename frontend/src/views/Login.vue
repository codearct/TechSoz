<script>
import { mapActions } from "vuex";
import TsText from "@/components/ui/TsText.vue";
import TsLoginButton from "@/components/ui/TsLoginButton.vue";

export default {
  name: "LoginView",
  components: {
    TsText,
    TsLoginButton,
  },
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
.login
  TsLoginButton(src="https://developers.google.com/identity/images/g-logo.png" 
                title="Google" 
                @onClick="loginAsMember")
  TsLoginButton(src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-1.png&r=0&g=0&b=0" 
                title="Github"
                @onClick="loginAsCreator")
</template>

<style scoped lang="postcss">
.login {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
