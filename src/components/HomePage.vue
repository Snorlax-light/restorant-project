<template>
    <div>
        <HeaderPage />
        <h1>Hello User, Welcome to the Home Page</h1>
        <table>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>contact</td>
                <td>address</td>
            </tr>
            <tr v-for="item in restaurant" :key="item.id"> 
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.contact}}</td>
                <td>{{item.address}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import HeaderPage from './HeaderPage.vue';
    import axios from 'axios'; 
    export default {
    name: 'HomePage',
     components: {
        HeaderPage
    },
    data(){
        return {
            name: '',
            restaurant: [] 
        }
    },
    async mounted(){
        let user = localStorage.getItem("user-info");
        if(!user){ 
            this.$router.push('/login');
            return;
        }
        this.name = JSON.parse(user).name;
    
        let result = await axios.get("http://localhost:3000/restaurant");
        console.warn(result)
        this.restaurant = result.data;
    }
}
</script>

<style>
    table {
        border-collapse: collapse;
        width: 80%;
        margin: 20px auto;
    }
    
    td {
        width: 160px;
        height: 40px;
        text-align: center;
        border: 1px solid #ddd;
        padding: 8px;
    }
</style>