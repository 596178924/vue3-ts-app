<template>
	<div class="view">
		<button class="button" v-rippler>按钮</button>
		<button class="button" v-rippler>水波纹</button>
	</div>
</template>

<script setup lang="ts">

const vRippler: any = {
	mounted(el: HTMLElement) {
		el.addEventListener("click", appendRipple as any, false);
	},
	unmounted(el: HTMLElement) {
		el.removeEventListener("click", appendRipple as any, false);
	},
};
function appendRipple(e: MouseEvent): void {
	const target = e.target as HTMLElement;
	let x = e.pageX - target.offsetLeft;
	let y = e.pageY - target.offsetTop;
	const waveDom = document.createElement("span");
	waveDom.setAttribute("class", " ripple");
	waveDom.style.left = `${x}px`;
	waveDom.style.top = `${y}px`;
	target.appendChild(waveDom);
	setTimeout(() => target.removeChild(waveDom), 1000);
}
</script>

<style lang="less" scoped>
.view {
	display: grid;
	place-items: center;
}
</style>
<style lang="less">
.button {
	overflow: hidden;
	padding: 20px 40px;
	border: none;
	border-radius: 100px;
	background-image: linear-gradient(90deg, #0acffe, #495aff);
	color: #fff;
	font-weight: bold;
	letter-spacing: 10px;
	position: relative;
	&:nth-child(2) {
		background-image: linear-gradient(90deg, #ed6ea0, #ec8c69);
	}
}

.ripple {
	background-color: #fff;
	border-radius: 50%;
	pointer-events: none;
	position: absolute;
	transform: translate(-50%, -50%);
	animation: animate 1s ease-out infinite;
}
@keyframes animate {
	0% {
		width: 0;
		height: 0;
		opacity: 0.5;
	}
	100% {
		width: 100vmin;
		height: 100vmin;
		opacity: 0;
	}
}
</style>
