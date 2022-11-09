<template>
    <div>
        <p>name: {{name}}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "@vue/reactivity";
interface Book {
    name: String,
    price: Number
}
const name: Ref<String> = ref('张嘉文')
const age = ref<Number>(20)
const sex = ref('男') as Ref<String>
const book = ref<Book>({
    name: '钢铁是怎样练成的',
    price: 20
})
</script>

<style lang='less' scoped>
</style>
