<template>
    <div class="filter-wrapper">
        <PersonFilter :getAllQuery="getAllQuery"/>
        <CrewFilter :minCrewQuery="minCrewQuery" :maxCrewQuery="maxCrewQuery"/>
        <PassengersFilter :minPsngsQuery="minPsngsQuery" :maxPsngsQuery="maxPsngsQuery"/>
    </div>
</template>

<script>
    import PersonFilter from "./PersonFilter";
    import CrewFilter from "./CrewFilter";
    import PassengersFilter from "./PassengersFilter";
    import {mapGetters} from "vuex"

    export default {
        name: "Filters",
        components: {
            PersonFilter,
            CrewFilter,
            PassengersFilter
        },
        computed: mapGetters(['minPsngsQuery', 'maxPsngsQuery', 'minCrewQuery', 'maxCrewQuery', 'getAllQuery']),
    }
</script>

<style scoped>

</style>