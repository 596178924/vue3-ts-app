<template>
	<div>
		home
		<AutoCounter :startAmount="0" :endAmount="20"></AutoCounter>
	</div>
</template>

<script setup lang="ts">
import AutoCounter from "@/components/AutoCounter/index.vue";
</script>

<style lang="less" scoped>
</style>
