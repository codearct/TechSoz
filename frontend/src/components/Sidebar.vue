<script>
import { mapActions, mapState } from "vuex";
import TsButton from "@/components/ui/TsButton.vue";

export default {
  name: "TsSidebar",
  components: {
    TsButton,
  },
  data() {
    return {
      letters: "abcdefghijklmnopqrstuvwxyz",
      isCreatorLoggedIn: true,
    };
  },
  methods: {
    ...mapActions(["setLetter"]),
    sendLetter(crntLetter) {
      this.setLetter(crntLetter);
    },
  },
  computed: {
    ...mapState(["letter"]),
  },
};
</script>

<template lang="pug">
.letters
    ul
      li(v-if="isCreatorLoggedIn")
        TsButton(v-if="letter==crntLetter"
                toLink="/sources/create" 
                @onClick="sendLetter()" btnClass="btnActive") +
        TsButton(v-else toLink="/sources/create" 
                @onClick="sendLetter()") +  
      li(v-for="crntLetter in Array.from(letters)")
        TsButton(v-if="letter==crntLetter"
                toLink="/sources" 
                @onClick="sendLetter(crntLetter)" btnClass="btnActive") {{crntLetter}}
        TsButton(v-else toLink="/sources" 
                @onClick="sendLetter(crntLetter)") {{crntLetter}} 
</template>

<style scoped lang="postcss">
.letters {
  height: 100vh;
  border-right: 1px solid rgb(var(--secondary));
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
}
li {
  margin-left: auto;
  margin-right: auto;
}
</style>
