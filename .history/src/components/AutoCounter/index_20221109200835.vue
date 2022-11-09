<template>
	<span>{{ displayedAmount }}</span>
</template>

<script setup lang="ts">
import { State } from "./typeHelper";
import { defineProps, defineEmits, withDefaults, reactive } from "vue-demi";
// const emits = defineEmits(['update:modelValue'])
// const props = defineProps({
//    s:{type:String}
// })
const props = withDefaults(
	defineProps<{
		startAmount?: Number | undefined;
		endAmount: Number;
		duration?: Number;
		autoinit?: Boolean;
		prefix?: String;
		suffix?: String;
		separator?: String;
		decimalSeparator?: String;
		decimals?: String;
	}>(),
	{
				endAmount: 0,

	}
);

const state: State = reactive({
	timestamp: 0,
	startTimestamp: 0,
	currentAmount: 0,
	currentStartAmount: 0,
	currentDuration: 0,
	paused: false,
	remaining: 0,
	animationFrame: 0,
});
</script>

<style lang="scss" scoped></style>
