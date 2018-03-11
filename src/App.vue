<template>
    <div id="app">
        <app-header></app-header>
        <main>
            <router-view></router-view>
            <div class="empty"></div>
        </main>
        <footer>
            <app-footer></app-footer>
        </footer>
    </div>
</template>

<script>
    import AppHeader from './components/Header';
    import AppFooter from './components/Footer';


    import {mapGetters} from 'vuex';
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
            }
        },
        methods: {

        },
        computed: {
            ...mapGetters([
                'movies',
                'news'
            ])
        },
        components: {
            AppHeader,
            AppFooter
        }
    }
</script>

<style>

</style>
