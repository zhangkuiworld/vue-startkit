let Vue = require('vue');
let VueRouter = require("vue-router");
let VueResource = require("vue-resource");
const helloVue = require('./views/hello.vue');
const worldVue = require('./views/world.vue');
const welcomeVue = require('./views/welcome.vue');

import './less/index.less'

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    {path:"/hello",component:helloVue},
    {path:"/world",component:worldVue},
    {path:"/*",component:welcomeVue}
];

const router = new VueRouter({
    routes:routes
});

new Vue({
    router:router,
    /*components:{
        'welcome-view':welcomeVue
    }*/
}).$mount("#content");
