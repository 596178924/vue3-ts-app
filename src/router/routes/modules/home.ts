import { DEFAULT_LAYOUT } from "../base";
import { RouteRecordRaw } from "vue-router";
export default {
	path: "/",
	name: "Home_layout",
	redirect:'/index',
	component: DEFAULT_LAYOUT,
	children: [
		{
			path: "/index",
			name: "Homepage",
			component: () => import("@/views/home/index.vue"),
			beforeRouteLeave(to: any, from: any) {
				const answer = window.confirm("Do you really want to leave? you have unsaved changes!");
				if (!answer) return false;
			},
		},
		{
			path: "/about",
			name: "About",
			component: () => import("@/views/about/index.vue"),
		},
	],
} as RouteRecordRaw;
