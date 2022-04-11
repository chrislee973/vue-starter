function lazyLoad(view) {
  return () => import(`./views/${view}.vue`);
}

export const routes = [
  { path: "/", component: lazyLoad("Home"), meta: { title: "Home" } },
  { path: "/about", component: lazyLoad("About"), meta: { title: "About" } },
];
