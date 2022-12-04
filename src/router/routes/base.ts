import { RouteRecordRaw } from "vue-router";

export const DEFAULT_LAYOUT = () => import("@/layout/index.vue");

export const REDIRECT_MAIN: RouteRecordRaw = {
	path: "/redirect",
	name: "redirectWrapper",
	component: DEFAULT_LAYOUT,
	meta: {
		hidden: true,
	},
	children: [
		{
			path: "/redirect/:path",
			name: 'Redirect',
			component: () => import("@/views/redirect/index.vue"),
			meta: {
				hidden: true,
			},
		},
	],
};

export const NOT_FOUND_ROUTE: RouteRecordRaw = {
	path: "/:pathMatch(.*)*",
	name: "notFound",
	component: () => import("@/views/not-found/index.vue"),
};
