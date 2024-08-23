<template>
	<div class="aside">
		<div class="aside__links">
			<div class="aside__link">
				<img
					class="aside__link-icon"
					src="../../assets/icons/scan.svg"
					alt=""
				/>
				<p class="aside__link-text">Сканер</p>
			</div>
			<div class="aside__link">
				<img
					class="aside__link-icon"
					src="../../assets/icons/users.svg"
					alt=""
				/>
				<p class="aside__link-text">Співробітники</p>
			</div>
			<div class="aside__link">
				<img
					class="aside__link-icon"
					src="../../assets/icons/user-plus.svg"
					alt=""
				/>
				<p class="aside__link-text">Клієнти</p>
			</div>
			<div class="aside__link">
				<img
					class="aside__link-icon"
					src="../../assets/icons/Barbell.svg"
					alt=""
				/>
				<p class="aside__link-text">Вправи</p>
				<p class="aside__link-text_subtext">Категорії</p>
			</div>
			<div class="aside__link aside__link_mt-17">
				<img
					class="aside__link-icon"
					src="../../assets/icons/image.svg"
					alt=""
				/>
				<p class="aside__link-text">Банери</p>
			</div>
		</div>
		<div class="aside__log-out">
			<img
				class="aside__log-out-icon"
				src="../../assets/icons/log-out.png"
				alt=""
			/>
			<p class="aside__log-out-text">Вийти</p>
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

<style lang="scss" scoped src="./aside.scss" />
