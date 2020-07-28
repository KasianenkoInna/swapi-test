<template>
    <div class="content-wrapper">
        <div class="header-nav-wrapper">
            <div class="header-logo">
                <img :src="require(`@/assets/img/logotype.svg`)">
            </div>
            <div id="nav">
                <router-link to="/">List</router-link>
                <!--<router-link to="/starship"></router-link>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>
