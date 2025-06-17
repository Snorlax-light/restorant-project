<template>
    <div>
        <HeaderPage />
        <h1>Hello User, Welcome to the Update Page</h1>
    </div>

</template>

<script>
    import HeaderPage from './HeaderPage.vue';

    export default {
    name: 'UpdatePage',
    components: {
        HeaderPage
    },

    mounted(){
        let user = localStorage.getItem("user-info");
        if(!user){
            this.$router.push('/login');
        }
    }

}

</script>