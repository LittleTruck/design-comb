﻿<template>
    <nav class="navBar">
        <ul class="navBar_link">
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
<!--            <router-link :to="{path: `/user_data.html`, query: {-->
<!--                            u: sleepUser.account-->
<!--                        }}">-->
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
