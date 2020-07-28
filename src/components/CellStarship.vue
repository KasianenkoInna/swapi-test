<template>
    <div class="starship-item-wrapper">
        <div class="starship-item-name">{{ name | shortenName }}</div>
        <div class="starship-item-mglt">MGLT: {{MGLT}}</div>
    </div>
</template>

<script>
    import {starshipHelper} from '../view_helpers/starshipHelper';
    export default {
        name: "CellStarship",
        props: {
            name:{
                type: String,
                default() {
                    return '';
                }
            },
            MGLT: {
                type: String,
                default() {
                    return '';
                }
            }
        },
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