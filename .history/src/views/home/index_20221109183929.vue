<template>
	<div>
		<div class="container mx-auto px-4">home</div>
		<button class="btn" type="button">按钮</button>
		<p>name: {{ name }}</p>
		<p>age: {{ age }}</p>
		<p>sex: {{ sex }}</p>
		<p class="test">book: {{ book }}</p>
		<article class="prose lg:prose-xl">
			<h1>Garlic bread with cheese: What the science tells us</h1>
			<p>
				For years parents have espoused the health benefits of eating garlic bread with cheese to their
				children, with the food earning such an iconic status in our culture that kids will often dress up as
				warm, cheesy loaf for Halloween.
			</p>
			<p>
				But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
				springing up around the country.
			</p>
		</article>
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
