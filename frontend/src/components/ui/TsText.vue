<script>
export default {
  name: "TsText",
  props: {
    tag: {
      default: "span",
    },
    size: {
      default: "normal",
      validator: function (value) {
        return ["normal", "small", "xsmall", "xxsmall"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<template lang="pug">
component(:is="tag",:class="size")
    slot 
</template>

<style lang="postcss">
.normal {
  font-size: 16px;
}
.small {
  font-size: 12px;
}
.xsmall {
  font-size: 11px;
}
.xxsmall {
  font-size: 10px;
}
</style>
