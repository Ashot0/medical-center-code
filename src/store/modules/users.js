import { v4 as uuidv4 } from 'uuid';

const getRandomName = () => {
	const names = [
		'Михайло',
		'Дмитро Михальцов',
		'Кармазіна Поліна',
		'Кармазіна Поліна',
		'Арахімія Кіра',
		'Мельникова Лариса',
		'Бархударова Анастасія',
		'Мазур Ірина',
		'heenal vijay vasu',
		'Сантьяго',
	];
	return names[Math.floor(Math.random() * names.length)];
};

const getRandomCategory = () => Math.floor(Math.random() * 3) + 1;

const getRandomPhoneNumber = () => {
	const prefix = '+380';
	const number = Math.floor(100000000 + Math.random() * 900000000);
	return `${prefix}${number}`;
};

const formatDate = (date) => {
	const d = new Date(date);
	const day = String(d.getDate()).padStart(2, '0');
	const month = String(d.getMonth() + 1).padStart(2, '0');
	const year = d.getFullYear();
	const hours = String(d.getHours()).padStart(2, '0');
	const minutes = String(d.getMinutes()).padStart(2, '0');

	return `${day}/${month}/${year} ${hours}:${minutes}`;
};

const state = () => ({
	users: [
		{
			id: 'sthshatahdahdha',
			name: 'Михайло',
			category: 1,
			phone: '+380682821305',
			addedDate: '15/08/2024 18:13',
		},
		{
			id: 'arharhthfnsjfnnssnsnf',
			name: 'Дмитро Михальцов',
			category: 1,
			phone: '+380935027231',
			addedDate: '15/08/2024 18:13',
		},
		{
			id: 'arhararfhadrhar',
			name: 'Кармазіна Поліна',
			category: 2,
			phone: '+380000075237',
			addedDate: '15/08/2024 18:13',
		},
		{
			id: 'arhadhfahrhadrh',
			name: 'Кармазіна Поліна',
			category: 1,
			phone: '+380971462382',
			addedDate: '15/08/2024 18:13',
		},
		{
			id: 'adrhrhadrhagadrgad',
			name: 'Арахімія Кіра',
			category: 2,
			phone: '+380004077432',
			addedDate: '15/08/2024 18:13',
		},
		{
			id: 'adrhdrhadrhadrh',
			name: 'Мельникова Лариса',
			category: 1,
			phone: '+380661441181',
			addedDate: '15/08/2024 18:13',
		},
		{
			id: 'ardhadrhdahrhadfrhadr',
			name: 'Бархударова Анастасія',
			category: 1,
			phone: '+971509402185',
			addedDate: '02/07/2024 11:49',
		},
		{
			id: 'asrgasgrsgasgasdg',
			name: 'Мазур Ірина',
			category: 2,
			phone: '+380672922772',
			addedDate: '15/08/2024 18:13',
		},
		{
			id: 'segasrgsdfgsrgagargrgasr',
			name: 'heenal vijay vasu',
			category: 1,
			phone: '+971544445324',
			addedDate: '23/05/2024 13:44',
		},
		{
			id: 'fsnuiofneiofnopsenmf',
			name: 'Сантьяго',
			category: 2,
			phone: '+380730139832',
			addedDate: '15/08/2024 18:13',
		},
	],
});

const mutations = {
	ADD_USER(state, user) {
		state.users.push(user);
	},
	DELETE_USER(state, userId) {
		state.users = state.users.filter((user) => user.id !== userId);
	},
};

const actions = {
	generateUser({ commit }) {
		const newUser = {
			id: uuidv4(),
			name: getRandomName(),
			category: getRandomCategory(),
			phone: getRandomPhoneNumber(),
			addedDate: formatDate(new Date()),
		};
		commit('ADD_USER', newUser);
	},
	deleteUser({ commit }, userId) {
		commit('DELETE_USER', userId);
	},
};

const getters = {
	allUsers: (state) => state.users,
	userCount: (state) => state.users.length,
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
