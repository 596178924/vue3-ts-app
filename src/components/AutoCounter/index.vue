<template>
	<span>{{ displayedAmount }}</span>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, reactive, onMounted, computed, watch, Ref, nextTick } from "vue-demi";
defineOptions({
	name: "AutoCounter",
});
const emits = defineEmits(["finished"]);
interface AutoCounterProps {
	startAmount?: number; //初始值
	endAmount: number; //结束值
	duration?: number; //持续时间
	autoinit?: boolean; //载入后自动
	prefix?: string; //前缀
	suffix?: string; //后缀
	separator?: string; //分割
	decimalSeparator?: string; //小数点
	decimals?: number; //小数后几位
}
const props = withDefaults(defineProps<AutoCounterProps>(), {
	startAmount: 0,
	endAmount: 0,
	duration: 3,
	autoinit: true,
	prefix: "",
	suffix: "",
	separator: ",",
	decimalSeparator: ".",
	decimals: 0,
});
interface State {
	timestamp: number;
	startTimestamp: number|null|undefined;
	currentStartAmount: number;
	currentAmount: number;
	currentDuration: number;
	paused: boolean;
	remaining: number;
	animationFrame: number;
}
const state = reactive<State>({
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
	(): any => [props.startAmount, props.endAmount],
	(): void => reset()
);
onMounted((): void => {
	nextTick((): void => {
		state.currentAmount = props.startAmount;
		state.currentStartAmount = props.startAmount;
		state.currentDuration = durationTime.value * 1000;
		state.remaining = durationTime.value * 1000;
		if (props.autoinit) start();
		else state.paused = true;
	});
});
const isCountingUp = computed((): boolean => props.endAmount > props.startAmount);
const displayedAmount = computed((): string => `${props.prefix}${formatedAmount.value}${props.suffix}`);
const durationTime = computed((): number => {
	return props.duration >= 1 ? props.duration : 1;
});
const formatedAmount = computed((): string => {
	const regex = /(\d+)(\d{3})/;
	const numberString: string = state.currentAmount.toFixed(props.decimals).toString();
	const numberArray: Array<string> = numberString.split(".");
	let numbers: string = numberArray[0];
	const decimals: string = numberArray.length > 1 ? props.decimalSeparator + numberArray[1] : "";
	const isNumber = !isNaN(parseFloat(props.separator));
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
	const timestamp: number = _timestamp ? _timestamp : 0;
	if (!state.startTimestamp) state.startTimestamp = timestamp;
	const progress: number = timestamp - state.startTimestamp;
	state.remaining = state.currentDuration - progress;
	const divProgress = progress / state.currentDuration;
	if (!isCountingUp.value) {
		const c: number = state.currentStartAmount - (state.currentStartAmount - props.endAmount) * divProgress;
		state.currentAmount = c < props.endAmount ? props.endAmount : c;
	} else {
		const c: number = state.currentStartAmount + (props.endAmount - state.currentStartAmount) * divProgress;
		state.currentAmount = c > props.endAmount ? props.endAmount : c;
	}
	if (progress < state.currentDuration) state.animationFrame = window.requestAnimationFrame(counting);
	else emits("finished");
}
function cancelAnimation(): void {
	if (state.animationFrame) window.cancelAnimationFrame(state.animationFrame);
}
</script>
