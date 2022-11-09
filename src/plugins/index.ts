import { App } from "@vue/runtime-core";
import piniaInstall from "@/store";
export default function install(app: App) {
	app.use(piniaInstall);
}
