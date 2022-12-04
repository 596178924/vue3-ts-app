import type { RouteRecordNormalized } from "vue-router";

// enum DarkMode {
// 	"dark",
// 	"light",
// 	"",
// }
// enum Storage {
// 	'cookie',
// 	'sessionStorage',
// 	'localStorage',
// }

export interface AppState {
	storage?: string;
	darkMode?: string;
}
