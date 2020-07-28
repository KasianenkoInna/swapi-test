<template>
    <div class="filter-pilot-wrapper"
         v-bind:class="{ active: pilot.checked}"
         v-on:click="addQuery">
        <input type="checkbox" v-model="pilot.checked">
        <span class="filter-pilot-name">{{ pilot.name }}</span>

    </div>
</template>

<script>
    import {helper} from "../api/helper";
    import { mapActions, mapGetters} from 'vuex'

    export default {
        name: "Pilot",
        props: {
            pilot: {
                type: Object,
                required: true
            }
        },
        computed: mapGetters(['getAllQuery']),
        methods: {
            ...mapActions(['addQueryToArray', 'removeQueryFromArray', 'getPeople']),
            addQuery() {
                const query = this.getAllQuery;
                const pilotId = helper.getHumanIdByUrl(this.pilot.url);
                if (query.pilots && query.pilots.indexOf(pilotId) > -1) {
                    this.removeQueryFromArray({key: 'pilots', value: pilotId});
                } else {
                    this.addQueryToArray({key: 'pilots', value: pilotId});
                }
                this.getPeople();
            }
        }

    }
</script>

<style scoped>

</style>