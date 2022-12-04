import { App } from "@vue/runtime-core";
import piniaInstall from "@/store";
import ComponentInstall from "@c/index";
import '@arco-design/web-vue/dist/arco.css';
export default function install(app: App) {
	app.use(piniaInstall);
	app.use(ComponentInstall)
}
