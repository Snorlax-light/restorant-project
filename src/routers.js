import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import SignUp from './components/SignUp.vue';
import LoginPage from './components/LoginPage.vue';
import AddPage from './components/AddPage.vue';
import UpdatePage from './components/UpdatePage.vue';

Vue.use(VueRouter);

const routes = [
    {
        name: 'Home',
        component: HomePage,
        path: '/Home'
    },
    {
        name: 'signup',
        component: SignUp,
        path: '/signup'
    },
    {
        name: 'login',
        component: LoginPage,
        path: '/login'
    },
     {
        name: 'Add',
        component: AddPage,
        path: '/add'
    }, {
        name: 'Update',
        component: UpdatePage,
        path: '/update'
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;