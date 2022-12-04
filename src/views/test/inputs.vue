<template>
	<div class="view">
		home
		<!-- <auto-counter :startAmount="0" :endAmount="200" :duration="1"/> -->
		<!-- <input type="range" name="" value=""> -->
		<input type="range" class="range" min="0" max="100" step="10" value="20" />
		<input type="password" class="password" />
		<input type="date" class="date" />

		<input type="time" class="time" />
		<input type="color" class="color" />
		<input type="tel" class="tel" />
		<br>
		<input type="datetime-local" name="start_time" value="" />
	</div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.view{
	height: 200vh;
}
.range {
	display: block;

	appearance: none;
	height: 0.5rem;
	margin: 1rem;
	/* outline设置为零防止点到空白区域时会出现边框影响美观性问题 */
	// outline: 0;
	// border: 0;
	/* 背景色设置为渐变色，有兼容性问题谨慎使用 */
	background: linear-gradient(to right, rgb(238, 222, 217), rgb(200, 66, 67));
	border-radius: 0.5rem;
	/* 滑动块样式 */
	&::-webkit-slider-thumb {
		appearance: none;
		height: 1rem;
		width: 1rem;
		border-radius: 1rem;
		background-color: white;
		border: 0.15rem solid rgb(245, 95, 95);
	}
}
.color {
	border: 0;
	width:2rem;
	height: 2rem;
	padding: 0;
	&::-webkit-color-swatch-wrapper {
		background-color: #ffffff;
	}
	&::-webkit-color-swatch {
		width: 100%;
		height: 100%;
		border-radius: .25rem;
	}
}
.time {

}

.date {
	display: inline-block;
	width: 200px;
	font-size: 14px;

	/*控制编辑区域的*/
	&::-webkit-datetime-edit-fields-wrapper {
		background-color: #fff;
	}

	/*控制年月日这个区域的*/
	&::-webkit-datetime-edit-text {
		color: #b62d2d;
		padding: 10px;
	}

	/*这是控制年月日之间的斜线或短横线的*/
	&::-webkit-datetime-edit-year-field {
		color: #c30909;
	}

	/*控制年文字, 如2013四个字母占据的那片地方*/
	&::-webkit-datetime-edit-month-field {
		color: #3ef326;
	}

	/*控制月份*/
	&::-webkit-datetime-edit-day-field {
		color: #d6c319;
	}

	/*控制具体日子*/
	&::-webkit-inner-spin-button {
		cursor: pointer;
		display: none;
	}

	/*这是控制上下小箭头的*/
	&::-webkit-calendar-picker-indicator {
		/*这是控制下拉小箭头的*/
		border: 1px solid #ccc;
		border-radius: 4px;
		box-shadow: inset 0 1px #fff, 0 1px #eee;
		/* background-color: rgb(165, 65, 65); */
		background-image: -webkit-linear-gradient(top, #f5c9c9, #e6e6e6);
		color: #666;
		cursor: pointer;
	}

	&::-webkit-clear-button {
		/*控制清除按钮*/
		cursor: pointer;
	}
}
</style>
