<template>
    <div class="content-wrapper">
        <div class="promo-banner-footer">
            <div class="contact-form-footer">
                <input type="email" placeholder="EMAIL">
                <input type="number" placeholder="PHONE">
                <div class="confirm-contact-form-footer">GET YOUR 20% OFF COUPON</div>
            </div>
            <img :src="require(`@/assets/img/starship1.svg`)">
        </div>
        <Header />
    </div>
</template>

<script>
    import Header from "./Header";
    export default {
        name: "Footer",
        components: {Header}
    }
</script>

<style scoped>

</style>