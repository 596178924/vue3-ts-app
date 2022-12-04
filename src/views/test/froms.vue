<template>
	<div class="view">
		<form action="#" autocomplete="off" name="login" accept-charset="UTF-8">
			<div class="form-content">
				<label for="name"> 用户名: </label>
				<input
					:ref="(e) => bindRef(e, 'name')"
					type="text"
					name="name"
					id="name"
					v-model="formState.name"
					placeholder="请输入姓名"
					autocomplete="off"
					pattern="^\d{3,8}$"
					required
				/><br />
				<label for="email">邮箱:</label>
				<input
					:ref="(e) => bindRef(e, 'email')"
					type="email"
					name="email"
					id="email"
					v-model="formState.email"
					placeholder="请输入邮箱"
					required
				/><br />
				<label for="age">年龄:</label>
				<input
					:ref="(e) => bindRef(e, 'age')"
					type="number"
					name="age"
					id="age"
					min="18"
					max="100"
					v-model="formState.age"
					placeholder="请输入年龄"
					required
				/><br />
				<label for="password"> 密码： </label>
				<input
					:ref="(e) => bindRef(e, 'password')"
					type="password"
					name="password"
					id="password"
					v-model="formState.password"
					placeholder="请输入密码"
					autocomplete="off"
					required
				/><br />
			</div>
			<div class="flex flex-row-reverse items-center">
				<button type="button" @click="submitForm">提交</button>
				<input type="reset" @click="resetFormState" />
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
import { reactive, shallowReactive, Ref, onMounted, VNode } from "vue-demi";
interface FormState {
	name: string | undefined;
	email: string | undefined;
	age: number | unknown;
	password: string | undefined;
}
const formState = reactive<FormState>({
	name: "132456",
	email: "596178924@qq.com",
	age: null,
	password: "123123",
});
interface FormRefs {
	name: HTMLInputElement | null;
	email: HTMLInputElement | null;
	age: HTMLInputElement | null;
	password: HTMLInputElement | null;
}
const formRefs = shallowReactive<FormRefs>({
	name: null,
	email: null,
	age: null,
	password: null,
});
/**
 * badInput: false
 * customError: false
 * patternMismatch: false 是否匹配pattern验证模式规则
 * rangeOverflow: false
 * rangeUnderflow: false 内容小于min
 * stepMismatch: false 用于判断输入的值符不符合step特性所推算出的规则
 * tooLong: false 内容大于maxlength超长
 * tooShort: false
 * typeMismatch: false 输入的值和type类型匹配不匹配
 * valid: false
 * valueMissing: true 内容为空
 */
function submitForm() {
	const validity = formRefs.age?.validity;
	if(validity?.tooLong) {
		formRefs.age?.setCustomValidity('tooLong')
	}
	console.dir(validity);
}
function resetFormState() {
	for (let i in formState) {
		formState[i] = "";
	}
}
onMounted(() => {
	console.log(formRefs);
});
function bindRef(e: any, _refName: string) {
	formRefs[_refName] = e;
}
</script>

<style lang="less" scoped>
.view {
	form,
	input,
	button {
		border-radius: 4px;
		border: 1px solid #000;
	}
	form {
		width: 400px;
		margin: 50px auto;
		padding: 10px;
	}
	.form-content input {
		margin: 0 0 10px 0;
		min-width: 300px;
	}
	input {
		padding: 4px 10px;
	}
	label {
		display: inline-block;
		width: 4rem;
	}
	button {
		background-color: #ff0;
		padding: 4px 10px;
		margin: 0 10px;
	}
}
</style>
