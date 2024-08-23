<template>
	<div class="user-block">
		<div class="user-block__name">
			<p class="user-block__name_sub-title user-block_phone">Ім’я/Нікнейм</p>
			{{ $props.user.name }}
		</div>
		<div class="user-block__category">
			<p class="user-block__category_sub-title user-block_phone">Категорія</p>
			категорія {{ $props.user.category }}
		</div>
		<div class="user-block__phone">
			<p class="user-block__phone_sub-title user-block_phone">Телефон:</p>
			{{ $props.user.phone }}
		</div>
		<div class="user-block__date">
			<p class="user-block__date_sub-title user-block_phone">Дата оновлення</p>
			{{ $props.user.addedDate }}
		</div>
		<button
			class="user-block__delete"
			@click="deleteUser($props.user.id)"
			type="button"
		>
			<img src="../../assets/icons/trash.png" alt="" srcset="" />
		</button>
	</div>
</template>

<script>
import { useStore } from 'vuex';
export default {
	props: {
		user: Object,
	},
	setup(props) {
		const store = useStore();

		const deleteUser = (userId) => store.dispatch('users/deleteUser', userId);
		return {
			deleteUser,
		};
	},
};
</script>

<style lang="scss" scoped src="./user-block.scss" />
