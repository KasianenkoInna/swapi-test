<template>
    <div class="wrap-grid-attributes">
        <div v-for="starAttr of getStarshipAttr"
             :key="starAttr.key"
             class="grid-attribut">
            <div class="grid-attribut-key">{{starAttr.key}}</div>
            <div class="grid-attribut-value">{{starAttr.value}}</div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "StarshipAttributes",
        computed: mapGetters(['getStarshipAttr'])
    }
</script>
