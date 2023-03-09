<script>
import { mapActions } from "vuex";

export default {
  name: "SourceView",
  data() {
    return {
      isLoading: true,
      source: {},
    };
  },
  async mounted() {
    this.source = await this.getSourceById(this.$route.params.sourceId);
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["getSourceById"]),
  },
};
</script>

<template lang="pug">
p(v-if="isLoading") Yükleniyor...
div(v-else)
  h2 {{source.description}} 
  p {{source.creator.name}} tarafından yaratıldı

  ol 
    li(v-for="destTerm in source.destinationTerms")  
      h3 {{destTerm.description}} 
      p öneren : {{destTerm.memberSuggested.name}}
      p oy sayısı : {{destTerm.membersVoted.length}}
</template>
