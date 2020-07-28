<template>
    <div class="content-table">
        <SortPanel />
        <div class="starships-table">
            <div v-for="starship in allStarships" :key="starship.url" class="starship-item">
                <router-link :to="{name: 'Starship', params: {id: starship.normalizedId}}">
                    <CellStarship :name="starship.name" :MGLT="starship.MGLT"/>
                    <div class="starship-item-full-name">{{starship.name}}</div>
                    <div class="starship-item-content">CR: {{starship.cost_in_credits}}</div>
                    <div class="starship-item-content">CREW: {{starship.crew}}</div>
                    <div class="starship-item-content">PSNGS: {{starship.passengers}}</div>
                </router-link>
            </div>
        </div>
        <ViewMoreStarships />
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import SortPanel from "./SortPanel";
    import CellStarship from './CellStarship'
    import ViewMoreStarships from "./ViewMoreStarships";

    export default {
        name: "StarshipsTable",
        computed: mapGetters(['allStarships']),
        methods: mapActions(['getStarships']),
        mounted() {
            this.getStarships();
        },
        components: {
            ViewMoreStarships,
            SortPanel,
            CellStarship
        }

    }
</script>

<style scoped>

</style>