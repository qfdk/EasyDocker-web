import { $t } from "@/plugins/i18n";

const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Dashboard",
  component: Layout,
  redirect: "/dashboard",
  meta: {
    icon: "ep:home-filled",
    title: $t("menus.dashboard"),
    rank: 0
  },
  children: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("@/views/dashboard/index.vue"),
      meta: {
        title: $t("menus.dashboard")
      }
    }
  ]
} satisfies RouteConfigsTable;
