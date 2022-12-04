import type { Router } from "vue-router";
import { setRouteEmitter } from "@/utils/route-listener";
// import setupUserLoginInfoGuard from "./userLoginInfo";
// import setupPermissionGuard from "./permission";
import NProgress from "nprogress"; // progress bar


function setupPageGuard(router: Router) {
	router.beforeEach(async (to) => {
		// emit route change
		setRouteEmitter(to);
		console.log(to.path);
	});
}

export default function createRouteGuard(router: Router) {
	router.beforeEach(async (to, from, next) => {
		NProgress.start();
		// emit route change
		setRouteEmitter(to);
		// console.log(to.path);
		// setupUserLoginInfoGuard(to, from, next)
		// setupPermissionGuard(to, from, next)
		next();
	});
	router.afterEach(() => {
		NProgress.done();
	});
}
