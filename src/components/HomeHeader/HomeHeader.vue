<template>
	<div class="home-header">
		<div class="home-header__first">
			<div class="home-header__title">клієнти</div>
			<div class="home-header__humans">{{ userCount }} чоловік</div>
		</div>
		<div class="home-header__search">
			<img src="../../assets/icons/search.png" alt="" />
			<input
				v-model="searchQuery"
				type="search"
				name="search"
				placeholder="Пошук"
				id=""
			/>
		</div>
		<select
			v-model="selectedCategory"
			class="home-header__dropdown"
			name="Виберіть зі списку"
		>
			<option selected value="">Виберіть зі списку</option>
			<option value="1">Категорiя 1</option>
			<option value="2">Категорiя 2</option>
			<option value="3">Категорiя 3</option>
		</select>
		<button @click="generateUser()" class="home-header__add-btn" type="button">
			Додати <img src="../../assets/icons/plus.png" alt="" />
		</button>
	</div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref, watch } from 'vue';

export default {
	emits: ['updateUsers'],
	setup(props, { emit }) {
		const store = useStore();
		const searchQuery = ref('');
		const selectedCategory = ref('');

		const allUsers = computed(() => store.getters['users/allUsers']);
		const userCount = computed(() => store.getters['users/userCount']);

		const filteredUsers = computed(() => {
			return allUsers.value.filter((user) => {
				const matchesName = user.name
					.toLowerCase()
					.includes(searchQuery.value.toLowerCase());
				const matchesCategory = selectedCategory.value
					? user.category === Number(selectedCategory.value)
					: true;
				return matchesName && matchesCategory;
			});
		});

		const updateFilteredUsers = () => {
			emit('updateUsers', filteredUsers.value);
		};

		watch([searchQuery, selectedCategory, userCount], updateFilteredUsers, {
			immediate: true,
		});

		const generateUser = () => {
			store.dispatch('users/generateUser').then(() => {
				updateFilteredUsers();
			});
		};

		return {
			searchQuery,
			selectedCategory,
			generateUser,
			userCount,
		};
	},
};
</script>
<style lang="scss" scoped src="./home-header.scss" />
