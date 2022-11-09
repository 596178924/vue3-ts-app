<template>
	<span>{{ displayedAmount }}</span>
</template>

<script>
export default {
    name: "auto-counter",
}
</script>
<script setup lang="ts">
import { Props, State } from "./typeHelper";
import {
	defineProps,
	// defineEmits,
	withDefaults,
	reactive,
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

</script>

<style lang="scss" scoped></style>
