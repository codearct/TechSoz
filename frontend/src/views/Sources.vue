<script>
import { mapActions, mapState } from "vuex";
import TsText from "@/components/ui/TsText.vue";

export default {
  name: "SourcesView",
  components: {
    TsText,
  },
  data() {
    return {
      sources: [],
      isLoading: true,
    };
  },
  async mounted() {
    const message = await this.addCreator();
    if (message) alert(message);
    this.sources = await this.getSources();
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["getSources", "addCreator"]),
  },
  computed: {
    ...mapState(["letter"]),
  },
};
</script>

<template lang="pug">
.sources
h1 Kaynak Kelimeler {{letter}}
  p(v-if="isLoading") Yükleniyor... 
  h2(v-else) Toplam kaynak kelime sayısı {{sources.length}}.

    ol 
      li(v-for="source in sources")
        a(:href ="`/sources/${source._id}`") {{source.description}}
</template>

<style scoped lang="postcss">
@custom-media --tablet (min-width: 980px);
h1 {
  color: red;
  @media (--tablet) {
    color: blue;
  }
}
</style>
