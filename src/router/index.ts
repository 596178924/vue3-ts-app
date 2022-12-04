import { createRouter, createWebHistory } from "vue-router";
// import routes from "./routes";
import { appRoutes } from './routes';
import { REDIRECT_MAIN, NOT_FOUND_ROUTE } from './routes/base';
import createRouteGuard from './guard';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
	history: createWebHistory(),
	routes: [
		...appRoutes,
		REDIRECT_MAIN,
		NOT_FOUND_ROUTE
	],
	scrollBehavior: (to, from, savedPosition) => ({
		// el: "#main",
		top: 0,
	}),
});

createRouteGuard(router)

// router.afterEach((to, from) => {
// 	from.meta.transition = "fade";
// 	to.meta.transition = "slide-fade";
// });

export default router;
