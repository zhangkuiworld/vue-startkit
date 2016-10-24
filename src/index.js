let Vue = require('vue');
let VueRouter = require("vue-router");
let VueResource = require("vue-resource");
const helloVue = require('./views/hello.vue');
const worldVue = require('./views/world.vue');

import './less/index.less'

Vue.use(VueRouter);
Vue.use(VueResource);

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
