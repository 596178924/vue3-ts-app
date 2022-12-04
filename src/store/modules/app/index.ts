import { defineStore } from "pinia";
import defaultSettings from "@/config/settings.json";
import { AppState } from "./types";

export default defineStore("app", {
	state: (): AppState => ({
		...defaultSettings,
	}),
});
