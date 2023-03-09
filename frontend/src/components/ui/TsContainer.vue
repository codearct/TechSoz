<script>
export default {
  name: "TsContainer",
};
</script>

<template lang="pug">

.container
 slot

</template>

<style scoped lang="postcss">
.container {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}
</style>
