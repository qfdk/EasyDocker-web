const Layout = () => import("@/layout/index.vue");

export default {
  path: "/container",
  redirect: "/container/list",
  component: Layout,
  meta: {
    icon: "ri:cloudy-2-line",
    title: "Container",
    showLink: true,
    rank: 1
  },
  children: [
    {
      path: "/container/list",
      name: "Container",
      component: () => import("@/views/container/index.vue"),
      meta: {
        icon: "ri:server-line",
        title: "Container"
      }
    },
    {
      path: "/container/terminal",
      name: "Terminal",
      component: () => import("@/views/container/index.vue"),
      meta: {
        icon: "ri:terminal-box-fill",
        title: "Terminal"
      }
    }
  ]
} satisfies RouteConfigsTable;
