<template>
    <div class="nav">
        <router-link to ="/Home">Home</router-link>
        <router-link to ="/add">Add</router-link>
        <router-link to ="/update">Update</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
 
</template>

<script>
export default{
    name: 'HeaderPage',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'login' });
        }
    }
}   

</script>

<style>
.nav {
    background-color:#d8a864;
    overflow: hidden;
}
.nav a {
    float: left;
    color : #f2f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 10px;
}
.nav a:hover {
    background-color: #ddd;
    color: black;
}
</style>