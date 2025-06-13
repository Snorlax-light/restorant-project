<template>
     <div >
        <img class="logo" src="../assets/restaurant-logo.jpg"/>
        <h1>Login</h1>

        <div class="login">
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <button>Login</button>
            <p>
                <router-link to="/signup">Sign Up</router-link>
            </p>
        </div>
       

    </div>
</template>

<script>
    export default{
        name: 'LoginPage',
    }
</script>