import { CreateAppFunction } from "vue";
import piniaInstall from "@/store";
export default function install(app: CreateAppFunction<Element>) {
	app.use(piniaInstall);
}
