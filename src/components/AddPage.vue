<template>
    <div>
        <HeaderPage />
        <h1>Hello User, Welcome to the Add Page</h1>
    </div>

</template>

<script>
    import HeaderPage from './HeaderPage.vue';

    export default {
    name: 'AddPage',
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