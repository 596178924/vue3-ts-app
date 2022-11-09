<template>
	<div>
		home
		<AutoCounter :startAmount="0" :endAmount="20"></AutoCounter>
	</div>
</template>

<script lang="ts">
import AutoCounter from "@/components/AutoCounter";
import { defineComponent } from "vue-demi";
export default defineComponent({
	name: 'home',
	components:{
		AutoCounter
	},
})
</script>

<style lang="less" scoped>
</style>
