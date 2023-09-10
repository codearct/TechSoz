<script>
import TsText from "@/components/ui/TsText.vue";
export default {
  name: "TsLoginButton",
  props: {
    src: {
      default: "",
    },
    title: {
      default: "",
    },
  },
  components: {
    TsText,
  },
};
</script>
<template lang="pug">
.loginWith(@click="$emit('onClick')")
    .contentWrapper
      .logoWrapper 
        img(:src="src")
      span.textContainer 
        TsText(size="normal") {{title}}
</template>

<style scoped lang="postcss">
.loginWith {
  margin: 10px;
  display: inline-block;
  width: 240px;
  height: 50px;
  border-radius: 99px;
  border: 1px solid rgb(var(--primary));
  background-color: white;
  font-weight: bold;
  .contentWrapper {
    height: 100%;
    width: 100%;
    border: 1px solid transparent;
  }
  .logoWrapper {
    background: white;
    width: 48px;
    height: 48px;
    border-radius: 100px;
    display: inline-block;
  }

  img {
    padding: 15px;
    width: 18px;
    height: 18px;
  }
  .textContainer {
    line-height: 48px;
    vertical-align: top;
    border: none;
    display: inline-block;
    text-align: center;
    width: 150px;
  }
}
.loginWith:hover {
  cursor: pointer;
  background-color: rgb(var(--primary));
  transition: 0.7s;
  color: white;
}
.loginWith:active {
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
