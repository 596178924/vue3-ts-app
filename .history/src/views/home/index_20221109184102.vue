<template>
	<div>
		<div class="container mx-auto px-4">home</div>
		<button class="btn" type="button">按钮</button>
		<p>name: {{ name }}</p>
		<p>age: {{ age }}</p>
		<p>sex: {{ sex }}</p>
		<p class="test">book: {{ book }}</p>
		<select class="bg-slate-500 px-4 py-3 rounded-full">
			<!-- ... -->
		</select>
	</div>
</template>

<script setup lang="ts">
import { ref, Ref } from "@vue/reactivity";
interface Book {
	name: String;
	price: Number;
}
const name: Ref<String> = ref("张嘉文");
const age = ref<Number>(20);
const sex = ref("男") as Ref<String>;
const book = ref<Book>({
	name: "钢铁是怎样练成的",
	price: 20,
});
</script>

<style lang="less" scoped>
@import "tailwindcss/components";
@layer components {
	.btn {
		@apply active:scale-90;
		padding: theme("spacing.2") theme("spacing.4");
		border-radius: theme("spacing.1");
		background: theme("colors.red.500");
		color: theme("colors.gray.50");
	}
}
</style>
