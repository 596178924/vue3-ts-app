<template>
	<div class="view">
		<!-- <button class="btn-4">BUTTON</button> -->
		<!-- <button class="btn-5">
			<span></span>
			this btn
		</button> -->
	</div>
</template>

<script setup lang="ts">
// import { ref } from "vue-demi";
</script>

<style lang="less" scoped>
.view {
	height: 100vh;
	background-color: #333;
	display: grid;
	place-items: center;
}
.btn {
	border: 3px solid #fff;
	padding: 40px 80px;
	font-size: 32px;
	position: relative;
}
.btn-4 {
	color: yellow;
	// border: 3px solid #fff;
	width: 200px;
	height: 80px;
	font-size: 24px;
	position: relative;
	text-transform: uppercase;
	transition: 0.5s, color 0.3s ease 0.3s;
	z-index: 0;
	&:active {
		color: rgb(0, 0, 0);
		&::before,
		&::after {
			opacity: 1;
		}
		&::before {
			left: 50%;
			box-shadow: 30px 0 0 #ff0;
			transform: translate(-50%, -50%);
		}
		&::after {
			right: 50%;
			box-shadow: -30px 0 0 #ff0;
			transform: translate(50%, -50%);
		}
		& > span {
			transform: scale(1);
			transition-delay: 0.4s;
		}
	}
	&::before,
	&::after {
		content: "";
		position: absolute;
		top: 50%;
		width: 20px;
		height: 20px;
		background-color: #ff0;
		border-radius: 50%;
		transform: translateY(-50%);
		transition: 0.3s;
		z-index: -1;
		opacity: 0;
	}
	&::before {
		left: 0;
		box-shadow: -100px 0 0 #ff0;
	}
	&::after {
		right: 0;
		box-shadow: 100px 0 0 #ff0;
	}
	& > span {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #ff0;
		border-radius: 8px;
		transform: scale(0);
		transition: 0.3s;
		z-index: -1;
	}
}
.btn-3 {
	color: tomato;
	border: 3px solid tomato;
	padding: 40px 80px;
	font-size: 32px;
	position: relative;
	transition: 0.3s;
	overflow: hidden;
	z-index: 0;
	&:active {
		color: #fff;
		&::before {
			// border-radius: 0;
			transform: scale(1);
		}
	}
	&::before {
		content: "";
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		transition: 0.3s;
		border-radius: 500px 0;
		position: absolute;
		background-color: tomato;
		transform: scale(0);
	}
}
.btn-2 {
	color: #fff;
	border: 3px solid #fff;
	padding: 40px 80px;
	font-size: 32px;
	transition: 0.3s;
	overflow: hidden;
	position: relative;
	&::before,
	&::after {
		content: "";
	}
	&:active {
		background-color: #f44336;
		&::before {
			transform: translate(100%, 50px) rotate(45deg);
		}
	}
	&::before {
		background-color: #fff;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
		position: absolute;
		transition: 0.3s;
		transform: translate(-100%, 50px) rotate(45deg);
	}
}
.btn-1 {
	height: 100px;
	width: 300px;
	padding: 20px 40px;
	font-size: 25px;
	border: 2px solid #f00;
	position: relative;
	overflow: hidden;
	transition: color 0.3s;
	z-index: 0;
	&:active {
		color: #fff;
		&::after {
			transform: rotateY(90deg);
		}
		&::before {
			transform: rotateX(90deg);
		}
	}
	&::before,
	&::after {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: -1;
		transform-origin: 50% 50%;
		background-color: #fff;
		transition: transform 0.3s ease-in-out;
	}
}
</style>
