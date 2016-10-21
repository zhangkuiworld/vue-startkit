let Vue = require('vue');
let VueRouter = require("vue-router");
const helloVue = require('./views/hello.vue');
const worldVue = require('./views/world.vue');

Vue.use(VueRouter);

const routes = [
    {path:"/hello",component:helloVue},
    {path:"/world",component:worldVue}
];

const router = new VueRouter({
    routes:routes
});

const app = new Vue({
    router:router
}).$mount("#content");
