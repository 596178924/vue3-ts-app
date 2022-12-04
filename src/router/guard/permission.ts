import type { NavigationGuardNext, RouteLocationNormalized,  } from 'vue-router';
import NProgress from 'nprogress'; // progress bar

export default async function setupPermissionGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  next()
  NProgress.done();
}
