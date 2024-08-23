<template>
	<div class="users-list">
		<div class="users-list__header">
			<p>Ім’я/Нікнейм</p>
			<p>Категорія</p>
			<p>Телефон</p>
			<p>Дата оновлення</p>
		</div>
		<div class="users-list__wrapper">
			<UserBlock :user="user" v-for="user in $props.users" :key="user.id" />
		</div>
	</div>
</template>

<script>
import { useStore } from 'vuex';
import UserBlock from '../UserBlock/UserBlock.vue';
export default {
	components: {
		UserBlock,
	},

	props: {
		users: Array,
	},
	setup() {
		const store = useStore();

		const generateUser = () => store.dispatch('users/generateUser');
		return {
			generateUser,
		};
	},
};
</script>

<style lang="scss" scoped src="./users-list.scss" />
