import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import SignUp from './components/SignUp.vue';
import LoginPage from './components/LoginPage.vue';

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
        name: 'Login',
        component: LoginPage,
        path: '/Login'
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;