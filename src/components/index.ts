import skeleton from "./Skeleton/index.vue"
import autoCounter from "./AutoCounter/index.vue"
import { App } from "vue-demi"
export default {
    install(app: App) {
        app.component(autoCounter.name, autoCounter)
        app.component(skeleton.name, skeleton)
    }
}
