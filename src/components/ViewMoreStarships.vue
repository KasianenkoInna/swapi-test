<template>
   <div v-if='allStarships.length > 5'>
        <div @click="setQueryParam" class="view-more-page-btn">
           VIEW MORE
           <img :src="require(`@/assets/img/arrows.svg`)">
       </div>
   </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "ViewMoreStarships",
        computed: mapGetters(['allStarships']),
        methods: {
            ...mapActions(['setQuery']),
            setQueryParam() {
                if (this.allStarships.length < 6) {
                    return;
                }
                let page = this.$store.getters.getAllQuery.page;
                const numOfPage = !page || page.length <= 0 ? 2 : page[0] + 1;
                this.setQuery({key: 'page', value: numOfPage});
            }

        }
    }
</script>

<style scoped>

</style>