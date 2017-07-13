export const routes = [
  {
    path: '/',
    redirect: { name: 'index' },
    components: require('@/components/body-contents'),
    children: [
      { path: 'index', name: 'index', components: require('@/pages/index') },
      { path: 'login', name: 'Login', components: require('@/pages/login') },
      { path: 'terms', name: 'Terms', components: require('@/pages/terms') },
      { path: 'notice-list', name: 'Notice-list', components: require('@/pages/notice-list'), meta: { isLastPage: true } },
      { path: 'promotions', name: 'Promotions', components: require('@/pages/promotions') },
      { path: 'promotions/detail/:legend', name: 'Promotions-detail', components: require('@/pages/promotions/detail'), meta: { isLastPage: true } },
      { path: 'register', name: 'Register', components: require('@/pages/register') }
    ]
  },

  { path: '*', redirect: { name: 'index' } }
]
