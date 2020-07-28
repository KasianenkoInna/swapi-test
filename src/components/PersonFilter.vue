<template>
    <div>
        <div class="filter-title">
            <div class="filter-title-name">Pilots</div>
            <div class="filter-title-count">({{pilotsCount}})</div>
        </div>
        <Pilot
                v-for="pilot in allPilots"
                v-bind:pilot="pilot"
                :key="pilot.url">
        </Pilot>
        <div v-on:click="changeShowParam" class="show-hide-btn">
            <div v-if="isShown === false">View All</div>
            <div v-else>Hide</div>
        </div>
    </div>
</template>

<script>
    import Pilot from "./Pilot";
    import { mapGetters, mapActions, mapMutations } from 'vuex'

    export default {
        name: "PersonFilter",
        computed: mapGetters(['allPilots', 'pilotsCount', 'isShown']),
        methods: {
            ...mapActions(['getPeople']),
            ...mapMutations(['updateShownFilter']),
            changeShowParam() {
                this.updateShownFilter();
            }
        },
        mounted() {
            this.getPeople();
        },
        components: {Pilot}
    }
</script>

<style scoped>

</style>