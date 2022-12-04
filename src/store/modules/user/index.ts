import { defineStore } from "pinia";
// import { AppState } from "./types";

export default defineStore("user", {
	state: () => ({
		name: "海星吧",
		avatar: "https://assets.codepen.io/32887/herman.svg",
		email: "596178924@qq.com",
		phone: "15581609046",
		age: "24",
		sex: "boy",
		auth: "*",
	}),
	getters: {
		userInfo: (state) => state,
	},
    actions:{

    }
});
