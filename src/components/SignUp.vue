<template>
    <div >
        <img class="logo" src="../assets/restaurant-logo.jpg"/>
        <h1>Sign Up</h1>

        <div class="register">
            <input type="text" v-model="name" placeholder="Name" />
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <button v-on:click="signUp">Sign Up</button>
            <p>
                <router-link to="/Login">Login</router-link>
            </p>
        </div>
       

    </div>
    


</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data()
    {
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post("http://localhost:3000/user",{
                name: this.name,
                email: this.email,
                password: this.password
            });

            console.warn(result);
            if(result.status === 201){
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push('/Home');
            }   
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
