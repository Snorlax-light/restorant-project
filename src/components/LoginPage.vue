<template>
     <div >
        <img class="logo" src="../assets/restaurant-logo.jpg"/>
        <h1>Login</h1>

        <div class="login">
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <button v-on:click="login">Login</button>
            <p>
                <router-link to="/signup">Sign Up</router-link>
            </p>
        </div>
       

    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        name: 'LoginPage',
        data() {
            return {
                email: '',
                password: ''
            }
        },

        methods: {
            async login() {
                let result = await axios.get('http://localhost:3000/user', {
                    email: this.email,
                    password: this.password
                })
                if(result.status === 200)
                {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push('/Home');
                } else {
                    alert("Invalid credentials");
                }
                console.warn(result);
                
            }
        },
        mounted(){
            let user = localStorage.getItem("user-info");
            if(user){
                this.$router.push('/Home');
        }
    }
    }
</script>