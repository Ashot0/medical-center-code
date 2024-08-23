<template>
	<div class="base-layout">
		<div class="base-layout__header">
			<Header />
		</div>
		<div class="base-layout__wrapper">
			<aside class="base-layout__aside"><Aside /></aside>
			<div class="base-layout__page">
				<main>
					<slot />
				</main>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Aside from '../../components/Aside/Aside.vue';
export default {
	components: {
		Header,
		Aside,
	},
	setup() {},
};
</script>

<style lang="scss" scoped src="./base-layout.scss" />
