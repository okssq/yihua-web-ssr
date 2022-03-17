const routes = [
  {
    path: "/",
    component: () => import("pages/home"),
  },
  {
    path: "/contact-us",
    component: () => import("pages/contact-us"),
  },
  {
    path: "/about-us",
    component: () => import("pages/about-us"),
  },
  {
    path: '/product/gnss',
    component: () => import('pages/product/gnss')
  },
  {
    path: '/product/gnss/:pId',
    props: true,
    component: () => import('pages/product/gnss/all.vue')
  },
  {
    path: '/product/plan',
    component: () => import('pages/product/plan')
  },
  {
    path: '/product/plan/:pId',
    component: () => import('pages/product/plan/all.vue')
  },
  {
    path: '/product/smart',
    component: () => import('pages/product/smart')
  },
  {
    path: '/product/smart/:pId',
    props: true,
    component: () => import('pages/product/smart/all.vue')
  },
  //
  // {
  //   path: '/product/smart/:pId',
  //   component: () => import('pages/product/smart')
  // },
  {
    path: "/news",
    component: () => import("pages/news"),
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
