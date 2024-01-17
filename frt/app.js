

// Define your routes
const routes = [
    { path: '/home', component: home },
    { path: '/employee', component: employee },
    { path: '/department', component: department }
];

// Create a router instance
const router = new VueRouter({
    routes
});

// Create a Vue instance and mount it to the DOM
const app = new Vue({
    router
}).$mount('#app');
