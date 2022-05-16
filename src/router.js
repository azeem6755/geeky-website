import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage'
import ContactMe from './components/ContactMe'
import MyProjects from './components/MyProjects'


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
      path: '/contact-me',
      name: 'ContactMe',
      component: ContactMe
    },
    {
      path: '/projects',
      name: 'Projects',
      component: MyProjects
    }
  ]
})
