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
    path: '/product/gnss/list',
    props: true,
    component: () => import('pages/product/gnss/list.vue')
  },
  {
    path: '/product/plan',
    component: () => import('pages/product/plan')
  },
  {
    path: '/product/plan/list',
    component: () => import('pages/product/plan/list.vue')
  },
  {
    path: '/product/smart',
    component: () => import('pages/product/smart')
  },
  {
    path: '/product/smart/list',
    props: true,
    component: () => import('pages/product/smart/list.vue')
  },
  {
    path: "/news",
    component: () => import("pages/news"),
  },
  {
    path: "/news/:id",
    props: true,
    component: () => import("pages/news/detail.vue"),
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
