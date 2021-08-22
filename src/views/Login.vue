<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="email" v-model="input.email" placeholder="Email" />
        <br/>
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <br/>
        <button type="button" v-on:click="login()">Login</button>
        <br/>
        <router-link to="/register" class="navbar-brand">Register</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    email: "",
                    password: ""
                }            
            }
        },
        methods: {
            login() {
                    if(this.input.email != "" && this.input.password != "") {
                            axios.post('http://127.0.0.1:8000/api/v1/auth/login', { 
                                email:this.input.email, 
                                password:this.input.password
                            })
                            .then(res => {
                                console.log(res);
                                this.$emit("authenticated", true);
                                this.$router.push({name: 'dashboard'});
                                this.$router.replace({ name: "secure" });
                            }).catch(err => {
                            console.log(err);
                        })                
                    }
                }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: 200x auto auto auto;    
        padding: 20px;
    }
</style>