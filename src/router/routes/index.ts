import type { RouteRecordNormalized, RouteRecordRaw } from "vue-router";
import { REDIRECT_MAIN, NOT_FOUND_ROUTE } from "./base";

const modules = import.meta.glob("./modules/*.ts", { eager: true });
// const externalModules = import.meta.glob('./externalModules/*.ts', {
//   eager: true,
// });

function formatModules(_modules: any, result: RouteRecordNormalized[]) {
	Object.keys(_modules).forEach((key) => {
		const defaultModule = _modules[key].default;
		if (!defaultModule) return;
		const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule];
		result.push(...moduleList);
	});
	return result;
}
export const appRoutes: RouteRecordNormalized[] = formatModules(modules, []);
// const appExternalRoutes: RouteRecordNormalized[] = formatModules(externalModules, []);
// const routes = [...appRoutes, REDIRECT_MAIN, NOT_FOUND_ROUTE];
// export default routes;
