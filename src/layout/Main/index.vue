<template>
	<div id="main" class="main">
		<!-- <RouterView v-slot="{ Component, route }">
			<template v-if="Component">
				<Transition mode="out-in" :name="route.meta.transition || 'fade'">
						<Suspense>
							<component :is="Component"></component>
							<template #fallback> 正在加载... </template>
						</Suspense>
				</Transition>
			</template>
		</RouterView> -->
		<RouterView v-slot="{ Component, route }">
			<Transition :name="route.meta.transition" mode="out-in">
				<component :is="Component" />
			</Transition>
		</RouterView>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.main {
	padding: theme("spacing.3");
}
</style>
