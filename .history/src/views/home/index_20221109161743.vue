<template>
	<div>
		home
		<button disabled>按钮</button>
		<p>name: {{ name }}</p>
		<p>age: {{ age }}</p>
		<p>sex: {{ sex }}</p>
		<p>book: {{ book }}</p>
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
@selectors: blue, green, red;

each(@selectors, {
  .color-@{value} {
    color: @value;
  }
});
.set-2() {
  one: blue;
  two: green;
  three: red;
}
.colors {
  // Call mixin and iterate each rule
  each(.set-2(), .(@v, @k, @i) {
    @{k}-@{i}: @v;
  });
}
</style>
