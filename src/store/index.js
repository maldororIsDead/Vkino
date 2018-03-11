import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
	state: {

		movies : require('./movies.json'),
		cinema : require('./sessions.json'),
        news: require('../store/news.json')
     	/*movies: [{
            id: 'fds',
            title: 'dsfs',
            img: 'f',
            rentalStatus: true
		}]*/

	},
	getters: {
		movies(state) {
            return state.movies;
		},
		cinema(state) {
            return state.cinema;
		},
        news(state) {
            return state.news;
        }
	},
	mutations: {

	},
	actions: {

	},

});