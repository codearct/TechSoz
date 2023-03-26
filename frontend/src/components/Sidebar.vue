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
    };
  },
  methods: {
    ...mapActions(["setLetter"]),
  },
  computed: {
    ...mapState(["letter", "isCreator"]),
  },
};
</script>

<template lang="pug">
.letters
    ul
      li(v-if="isCreator")
        TsButton(v-if="letter==crntLetter"
                toLink="/sources/create" 
                @onClick="setLetter()" btnClass="btnActive") +
        TsButton(v-else toLink="/sources/create" 
                @onClick="setLetter()") +  
      li(v-for="crntLetter in Array.from(letters)")
        TsButton(v-if="letter==crntLetter"
                toLink="/sources" 
                @onClick="setLetter(crntLetter)" btnClass="btnActive") {{crntLetter}}
        TsButton(v-else toLink="/sources" 
                @onClick="setLetter(crntLetter)") {{crntLetter}} 
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
