<script>
import TsText from "@/components/ui/TsText.vue";
export default {
  name: "TsButton",
  props: {
    toLink: {
      default: "",
    },
    btnClass: {
      default: "btn",
    },
  },
  components: {
    TsText,
  },
};
</script>
<template lang="pug">
button(@click="$emit('onClick')" :class="btnClass")
    router-link(:to="toLink") 
        TsText.txt
            slot
</template>

<style scoped lang="postcss">
.btn {
  width: 40px;
  height: 40px;
  margin: 5px 0;
  border-radius: 99px;
  border: 1px solid rgb(var(--primary));
  background-color: white;
  font-weight: bold;

  .txt {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.btn:hover {
  background-color: rgb(var(--primary));
  transition: 0.7s;
  color: white;
}
.btnActive {
  width: 40px;
  height: 40px;
  margin: 5px 0;
  border-radius: 99px;
  border: 1px solid rgb(var(--primary));
  background-color: rgb(var(--primary));
  color: white;
  font-weight: bold;

  .txt {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
