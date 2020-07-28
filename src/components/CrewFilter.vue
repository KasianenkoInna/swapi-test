<template>
    <div>
        <div class="filter-title">
            <div class="filter-title-name">Crew Size</div>
        </div>
        <div class="filter-range-wrapper">
            <input type="number" @keyup="updateCrewMinRange" :value='minCrewQuery'>
            <input type="number" @keyup="updateCrewMaxRange" :value='maxCrewQuery'>
        </div>
        <div class="filter-range-slider-wrapp">
            <div class="range-slider">
                <input  :value='minCrewQuery'
                        v-on:mouseup="updateCrewMinRange"
                        type="range" min="0" max="342953" step="1">
                <input v-on:mouseup="updateCrewMaxRange"
                       :value='maxCrewQuery'
                       type="range" min="0" max="342953" step="1">
            </div>
        </div>

    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import {helper} from "../api/helper";

    export default {
        name: "CrewFilter",
        props: {
            minCrewQuery: {
                type: Number,
                default() {
                    return 44;
                }
            },
            maxCrewQuery: {
                type: Number,
                default() {
                    return 44;
                }
            }
        },
        methods: {
            ...mapActions(['setQuery']),
            updateCrewMinRange (e) {
                this.setQuery({key: 'crewMinRange', value: helper.normalizeIntValue(e.target.value)});
            },
            updateCrewMaxRange (e) {
                this.setQuery({key: 'crewMaxRange', value: helper.normalizeIntValue(e.target.value)});
            }
        },

    }
</script>

<style scoped>

</style>