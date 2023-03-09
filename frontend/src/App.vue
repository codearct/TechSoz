<script>
import MainHeader from "@/components/Header.vue";
import TsContainer from "@/components/ui/TsContainer.vue";
import TsSidebar from "@/components/Sidebar.vue";

export default {
  name: "app",
  components: {
    MainHeader,
    TsContainer,
    TsSidebar,
  },
};
</script>

<template lang="pug">
MainHeader
main.main
  TsContainer.container
    TsSidebar.sidebar
    .mainbar 
      router-view 
</template>

<style scoped lang="postcss">
.main {
  padding-top: 20px;
  .container {
    display: grid;
    grid-template-columns: 1fr 5fr;
    height: 100%;
    align-items: center;
  }
}
</style>
