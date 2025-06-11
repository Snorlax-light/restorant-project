<template>
    <div >
        <img class="logo" src="../assets/restaurant-logo.jpg"/>
        <h1>Sign Up</h1>

        <div class="register">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
        </div>
       

    </div>
    


</template>

<script>
export default {
    name: 'SignUp'
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