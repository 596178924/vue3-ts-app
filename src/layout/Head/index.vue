<template>
	<div id="head">
        <router-link to="/index">Home</router-link>
        <router-link to="/about1">About</router-link>
        <button @click="changeDark()">
            切换模式
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";
import { useDark, useToggle } from "@vueuse/core"
const isDark = useDark({
  selector: 'body',
  attribute: 'arco-theme',
  valueDark: 'dark',
  valueLight: '',
})
const changeDark = useToggle(isDark)
</script>

<style lang="less" scoped>
#head {
	height: theme("spacing.10");
}
</style>
