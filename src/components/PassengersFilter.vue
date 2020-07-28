<template>
    <div>
        <div class="filter-title">
            <div class="filter-title-name">Passengers Capacity</div>
        </div>
        <div class="filter-range-wrapper">
            <input type="number" @keyup="updatePsngrsMinRange" :value='minPsngsQuery'>
            <input type="number" @keyup="updatePsngrsMaxRange" :value='maxPsngsQuery'>
        </div>
        <div class="filter-range-slider-wrapp">
            <div class="range-slider">
                <input  :value='minPsngsQuery'
                        v-on:mouseup="updatePsngrsMinRange"
                        type="range" min="0" max="843342" step="1">
                <input v-on:mouseup="updatePsngrsMaxRange"
                       :value='maxPsngsQuery'
                       type="range" min="0" max="843342" step="1">
            </div>
        </div>

    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {helper} from "../api/helper";
    export default {
        name: "PassengersFilter",
        props: {
            minPsngsQuery: {
                type: Number,
                default() {
                    return 0;
                }
            },
            maxPsngsQuery: {
                type: Number,
                default() {
                    return 1000;
                }
            }
        },
        methods: {
            ...mapActions(['setQuery']),
            updatePsngrsMinRange (e) {
                this.setQuery({key: 'psngrsMinRange', value: helper.normalizeIntValue(e.target.value)});
            },
            updatePsngrsMaxRange (e) {
                this.setQuery({key: 'psngrsMaxRange', value: helper.normalizeIntValue(e.target.value)});
            }
        }
    }
</script>

<style scoped>

</style>