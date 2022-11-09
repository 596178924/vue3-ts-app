<template>
	<div>
		home
		<auto-counter :startAmount="0" :endAmount="20" />
	</div>
</template>

<script lang="ts">
import AutoCounter from "@/components/AutoCounter/index.vue";
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
