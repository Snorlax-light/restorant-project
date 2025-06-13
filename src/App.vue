<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
 
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 .logo {
        width: 100px;
    }
    .register, .login {
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
    }

    .register input, .login input {
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
