<template>
  <div class="content-wrapper">
    <div class="promo-banner"><PromoBanner :text="text"/></div>
    <DescStarship />
  <StarshipAttributes/>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import PromoBanner from "../components/PromoBanner";
  import DescStarship from "../components/DescStarship";
  import StarshipAttributes from  '../components/StarshipAttributes'
  export default {
    name: 'Starship',
    computed: mapGetters(['starship']),
    methods: mapActions(['getStarshipById']),
    data() {
      return {
        text: 'PROFILE DESCRIPTION'
      }
    },
    components: {
      DescStarship,
      PromoBanner,
      StarshipAttributes
    },
    mounted() {
      this.getStarshipById(this.$route.params.id);
    }
  }
</script>