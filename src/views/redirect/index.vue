<template>
	<div></div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const gotoPath: string = "/" + route.params.path;
console.log("刷新路由", gotoPath);
router.replace({ path: gotoPath });
</script>

<style scoped lang="less"></style>
