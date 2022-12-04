import type { Router, LocationQueryRaw, NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import NProgress from "nprogress"; // progress bar

// import { useUserStore } from "@/store";
// import { isLogin } from "@/utils/auth";

export default function setupUserLoginInfoGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
	NProgress.start();
		next()
}
