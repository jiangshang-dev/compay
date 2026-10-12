import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: '首页 - 星辰科技', navLabel: '首页' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: { title: '关于我们 - 星辰科技', navLabel: '关于我们' }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/ProductsView.vue'),
    meta: { title: '产品与服务 - 星辰科技', navLabel: '产品服务' }
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import('../views/SolutionsView.vue'),
    meta: { title: '解决方案 - 星辰科技', navLabel: '解决方案' }
  },
  {
    path: '/cases',
    name: 'Cases',
    component: () => import('../views/CasesView.vue'),
    meta: { title: '客户案例 - 星辰科技', navLabel: '客户案例' }
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/NewsView.vue'),
    meta: { title: '新闻动态 - 星辰科技', navLabel: '新闻动态' }
  },
  {
    path: '/careers',
    name: 'Careers',
    component: () => import('../views/CareersView.vue'),
    meta: { title: '招贤纳士 - 星辰科技', navLabel: '加入我们' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: '联系我们 - 星辰科技', navLabel: '联系我们' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: '页面未找到 - 星辰科技' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title || '星辰科技'
})

export default router
