<template>
    <div >
        <img class="logo" src="../assets/restaurant-logo.jpg"/>
        <h1>Sign Up</h1>

        <div class="register">
            <input type="text" v-model="name" placeholder="Name" />
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <button v-on:click="signUp">Sign Up</button>
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
                alert("User registered successfully")
                localStorage.setItem("user-info", JSON.stringify(result.data))
            }   
        }
    }

}


</script>

<style>
    .logo {
        width: 100px;
    }
    .register {
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
    }

    .register input {
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }

    button {
        padding: 10px;
        border-radius: 5px;
        border: none;
        background-color: #d8a864;
        color: white;
        cursor: pointer;
    }   
</style>