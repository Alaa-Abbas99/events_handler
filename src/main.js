import Vue from 'vue'
import App from './components/App.vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
import { firebaseApp } from './firebaseApp'
import store from './store'

Vue.use(Router)


const router = new Router({
   mode: 'history', 
   routes: [
       {path: '/dashboard', component: Dashboard},
       {path: '/signin', component: Signin},
       {path: '/signup', component: Signup},
   ]
})

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        store.dispatch('signIn', user)
        router.push('/dashboard')
    } else{
        router.replace('/signin')
    }
})

new Vue({
   el: '#app',
   router,
   store,
   render: h => h(App)
})

