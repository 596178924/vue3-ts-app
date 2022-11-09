<template>
	<span>{{ displayedAmount }}</span>
</template>

<script setup lang="ts">
import { State } from "./typeHelper";
import { defineProps, defineEmits, withDefaults, reactive, onMounted, computed, watch, Ref } from "vue-demi";
const emits = defineEmits(["finished"]);
const props = withDefaults(
	defineProps<{
		startAmount?: number;
		endAmount: number;
		duration?: number;
		autoinit?: boolean;
		prefix?: string;
		suffix?: string;
		separator?: string;
		decimalSeparator?: string;
		decimals?: number;
	}>(),
	{
		startAmount: 0,
		endAmount: 0,
		duration: 3,
		autoinit: true,
		prefix: "",
		suffix: "",
		separator: ",",
		decimalSeparator: ".",
		decimals: 3,
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

watch(
	(): any => [props.startAmount, props.endAmount, props.duration],
	(): void => reset()
);
// watchEffect(():void=> reset(),[
//     props.startAmount,props.endAmount,props.duration
// ])
onMounted((): void => {
	state.currentAmount = props.startAmount;
	state.currentStartAmount = props.startAmount;
	state.currentDuration = props.duration * 1000;
	state.remaining = props.duration * 1000;

	console.log(props);

	if (props.autoinit) start();
	else state.paused = true;
});
const isCountingUp = computed((): boolean => props.endAmount > props.startAmount);
const displayedAmount = computed((): string => `${props.prefix}${formatedAmount.value}${props.suffix}`);

const formatedAmount = computed((): string => {
	const regex = /(\d+)(\d{3})/;
	let numberString: string = state.currentAmount.toFixed(props.decimals).toString();
	let numberArray: Array<string> = numberString.split(".");
	let numbers: string = numberArray[0];
	let decimals: string = numberArray.length > 1 ? props.decimalSeparator + numberArray[1] : "";
	let isNumber = !isNaN(parseFloat(props.separator));
	if (props.separator && !isNumber) {
		while (regex.test(numbers)) numbers = numbers.replace(regex, "$1" + props.separator + "$2");
	}
	return numbers + decimals;
});
function start(): void {
	cancelAnimation();
	state.currentStartAmount = props.startAmount;
	state.startTimestamp = null;
	state.currentDuration = props.duration * 1000;
	state.paused = false;
	state.animationFrame = window.requestAnimationFrame(counting);
	console.log(state);
}
function reset(): void {
	state.paused = false;
	state.startTimestamp = null;
	cancelAnimation();
	state.currentAmount = props.startAmount;
	if (props.autoinit) start();
	else state.paused = true;
}
function pause(): void {
	if (state.paused) return;
	cancelAnimation();
	state.paused = true;
}
function resume(): void {
	if (!state.paused) return;
	state.startTimestamp = null;
	state.currentDuration = +state.remaining;
	state.currentStartAmount = +state.currentAmount;
	state.animationFrame = window.requestAnimationFrame(counting);
	state.paused = false;
}
function counting(_timestamp: number): void {
	const timestamp: number  = _timestamp ? _timestamp : 0;
	console.log(timestamp);

	if (!state.startTimestamp) state.startTimestamp = timestamp;
	let progress: number = timestamp - state.startTimestamp;
	state.remaining = state.currentDuration - progress;
	console.log(progress);

	if (!isCountingUp.value) {
		const c: number =
			state.currentStartAmount -
			(state.currentStartAmount - props.endAmount) * (progress / state.currentDuration);
		console.log(c);

		state.currentAmount = c < props.endAmount ? props.endAmount : c;
	} else {
		const c: number =
			state.currentStartAmount +
			(props.endAmount - state.currentStartAmount) * (progress / state.currentDuration);
		console.log(c, progress , state.currentDuration);

		state.currentAmount = c > props.endAmount ? props.endAmount : c;
	}
	console.log(state.currentAmount);

	if (progress < state.currentDuration) state.animationFrame = window.requestAnimationFrame(counting);
	else emits("finished");
}
function cancelAnimation(): void {
	if (state.animationFrame) window.cancelAnimationFrame(state.animationFrame);
}
</script>
