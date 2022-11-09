<template>
	<span>{{ displayedAmount }}</span>
</template>

<script>
export default {
	name: "auto-counter",
};
</script>
<script setup lang="ts">
import { Props, State } from "./typeHelper";
import {
	defineProps,
	defineEmits,
	withDefaults,
	reactive,
	onMounted,
	computed,
	watch,
	Ref,
} from "vue-demi";
const emits = defineEmits(['finished'])
const props = withDefaults(defineProps<Props>(), {
	startAmount: 0,
	endAmount: 0,
	duration: 0,
	autoinit: true,
	prefix: "",
	suffix: "",
	separator: ",",
	decimalSeparator: ".",
	decimals: 3,
});
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
	if (props.autoinit) start();
	else state.paused = true;
});
const isCountingUp = computed((): boolean => props.endAmount > props.startAmount);
const displayedAmount = computed((): string => `${props.prefix}${formatedAmount.value}${props.suffix}`);

const regex = /(\d+)(\d{3})/;
const formatedAmount = computed((): string => {
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
}
function reset(): void {
	state.paused = false;
	state.startTimestamp = null;
	cancelAnimation();
	state.currentAmount = props.startAmount;
	if (this.autoinit) start();
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
function counting(timestamp: number): void {
	state.timestamp = timestamp;
	if (!state.startTimestamp) state.startTimestamp = timestamp;
	let progress: number = timestamp - state.startTimestamp;
	state.remaining = state.currentDuration - progress;

	if (!this.isCountingUp) {
		state.currentAmount =
			state.currentStartAmount - (state.currentStartAmount - props.endAmount) * (progress / state.currentDuration);
		state.currentAmount = state.currentAmount < props.endAmount ? props.endAmount : state.currentAmount;
	} else {
		state.currentAmount =
			state.currentStartAmount + (props.endAmount - state.currentStartAmount) * (progress / state.currentDuration);
		state.currentAmount = state.currentAmount > props.endAmount ? props.endAmount : state.currentAmount;
	}

	if (progress < state.currentDuration) state.animationFrame = window.requestAnimationFrame(counting);
	else emits("finished");
}
function cancelAnimation(): void {
	if (state.animationFrame) window.cancelAnimationFrame(state.animationFrame);
}
</script>

<style lang="scss" scoped></style>
