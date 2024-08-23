<template>
	<div class="home">
		<div class="home__header">
			<HomeHeader @updateUsers="handleUpdateUsers" />
		</div>
		<div class="home__wrapper">
			<UsersList :users="filteredUsers" />
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import UsersList from '../../components/UsersList/UsersList';
export default {
	name: 'HomeView',
	components: { HomeHeader, UsersList },
	setup() {
		const filteredUsers = ref([]);

		const handleUpdateUsers = (users) => {
			filteredUsers.value = users;
		};

		return {
			filteredUsers,
			handleUpdateUsers,
		};
	},
};
</script>

<style scoped lang="scss" src="./home-view.scss" />
