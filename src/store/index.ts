import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import useAppStore from "./modules/app";
import useUserStore from "./modules/user";
const store = createPinia();
store.use(piniaPluginPersist);
export { useAppStore, useUserStore };
export default store;
