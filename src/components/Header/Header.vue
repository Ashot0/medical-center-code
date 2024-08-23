<template>
	<div class="header">
		<div class="header__logo">
			<img class="header__logo-img" src="@/assets/Logo.png" alt="" />
			<p class="header__logo-text">Medical Center</p>
		</div>

		<div class="header__user">
			<p class="header__user-text">
				Привiт, <span class="header__user-text_strong">Адмiн</span>
			</p>
			<img
				class="header__user-avatar"
				src="@/assets/Images/avatar.png"
				alt=""
			/>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped src="./header.scss" />
