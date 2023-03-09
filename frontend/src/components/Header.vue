<script>
import TsContainer from "@/components/ui/TsContainer.vue";
import TsText from "@/components/ui/TsText.vue";
import { mapActions } from "vuex";
export default {
  name: "MainHeader",
  data() {
    return {
      isLogin: false,
    };
  },
  components: {
    TsContainer,
    TsText,
  },
  methods: {
    ...mapActions(["setLetter"]),
    sendLetter() {
      this.setLetter("a");
    },
  },
};
</script>

<template lang="pug">
header.header 
    TsContainer.header-inner
        router-link(to="/sources" class="logo" @click="sendLetter()") TechSöz
        form.search
            input(type="text" placeholder="sözcük ara")
        nav.navigation
            TsText(v-if="isLogin") mayarch
            router-link(to="/signup" v-else) 
              TsText kayıt ol
            router-link(to="/sources" v-if="isLogin") 
              TsText çıkış yap
            router-link(to="/login" v-else) 
              TsText giriş yap
</template>

<style scoped lang="postcss">
@custom-media --tablet (min-width: 980px);
.header {
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: white;
  border-bottom: 1px solid rgb(var(--secondary));
  height: 60px;
}
.header-inner {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  height: var(--header-height);
  @media (--tablet) {
    height: 0;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.logo {
  margin: 0 5px;
  font-size: 1.5rem;
  font-weight: bold;
  @media (--tablet) {
    margin: 0;
  }
}
.search {
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 59px;
  background-color: white;
  border-top: 1px solid rgb(var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  input {
    width: 215px;
    height: 28px;
    border: 1px solid rgb(var(--secondary));
    border-radius: 4px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (--tablet) {
    position: static;
  }
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  * {
    font-weight: bold;
    margin: 0 5px;
    @media (--tablet) {
      margin: 0 20px;
    }
  }
}
</style>
