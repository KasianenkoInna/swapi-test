<template>
    <div class="wrap-star-intro">
        <div class="star-intro">
            <div class="star-intro-name">{{starship.name}}</div>
            <div>model: {{starship.model}}</div>
            <div>manufacturer: {{starship.manufacturer}}</div>
            <div>starship_class: {{starship.starship_class}}</div>
        </div>
        <CellStarship :name="starship.name" :MGLT="starship.MGLT"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {starshipHelper} from '../view_helpers/starshipHelper';
    import CellStarship from "./CellStarship";
    export default {
        name: "DescStarship",
        components: {CellStarship},
        computed: mapGetters(['starship']),
        filters: {
            shortenName(value) {
                if (value === undefined) {
                    return '';
                }
                return starshipHelper.shortenName(value)
            }
        }
    }
</script>

<style scoped>

</style>