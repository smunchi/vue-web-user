<template>
    <div id="app">
        <div id="nav">
            <router-link v-show="authenticated" to="/login" v-on:click="logout()" replace>Logout</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false
            }
        },    
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {            
                this.$router.replace({ name: "login" });

            }
        }
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 1024px;
        margin: auto;
    }
</style>