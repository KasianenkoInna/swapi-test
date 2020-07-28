<template>
    <div class="header-bord-wrapper">
        <div class="header-bord-text">{{text}}</div>
        <img :src="require(`@/assets/img/image.svg`)">
    </div>
</template>

<script>
    export default {
        name: "PromoBanner",
        props: {
            text: {
                type: String,
                default() {
                    return ''
                }
            }
        }
    }
</script>

<style scoped>

</style>