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
	// defineEmits,
	withDefaults,
	reactive,
	onMounted,
	computed,
} from "vue-demi";
// const emits = defineEmits(['update:modelValue'])
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

onMounted((): void => {
	state.currentAmount = props.startAmount;
	state.currentStartAmount = props.startAmount;
	state.currentDuration = props.duration * 1000;
	state.remaining = props.duration * 1000;
	if (props.autoinit) start();
	else state.paused = true;
});
const isCountingUp = computed((): boolean => props.endAmount > props.startAmount);
const displayedAmount = computed((): string=> `${props.prefix}${formatedAmount.value}${props.suffix}`)

const regex = /(\d+)(\d{3})/;
const formatedAmount = computed(():string=> {
let numberString: string = state.currentAmount.toFixed(props.decimals);
      numberString += '';
      let numberArray:Array<string> = numberString.split('.');
      let numbers: string = numberArray[0];
      let decimals: string = numberArray.length > 1 ? props.decimalSeparator + numberArray[1] : '';
      let isNumber = !isNaN(parseFloat(props.separator));

      if (props.separator && !isNumber) {
        while (regex.test(numbers)) numbers = numbers.replace(regex, '$1' + props.separator + '$2');
      }

      return numbers + decimals;
})
function start(): void {}
</script>

<style lang="scss" scoped></style>
