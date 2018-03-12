<template>
    <div class="post" v-if="movie">
        <div class="page-youtube" v-html="movie.youtube"></div>
        <div class="container">
            <div class="row page-timetable">
                <div class="col-12 col-lg-6 offset-xl-1 col-xl-5 page-timetable_title">Расписание сеансов кинотеатра:
                </div>
                <div class="col-4 col-lg-3 page-timetable_select">
                    <select v-model="selected" @change="selectCity(selected)">
                        <option v-for="(item, index) in cinema" v-bind:value="item.city.value">
                            {{ item.city.text }}
                        </option>
                    </select>
                </div>
                <div class="col-8 col-lg-3 page-button_group">
                    <button type="button" class="page-timetable_btn" @click="selectAll">Все</button>
                    <button type="button" class="page-timetable_btn" @click="select3D">3D</button>
                    <button type="button" class="page-timetable_btn" @click="select2D">2D</button>
                </div>
            </div>
            <div class="row page-cinema_calendar">
                <div v-for="day in days" class="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-1 page-cinema_date">
                    <div class="page-cinema_day">{{ day }}</div>
                    <div class="page-cinema_month">{{ month }}</div>
                </div>
            </div>
            <div class="row page-sessions">
                <div class="page-sessions_block">
                    <div class="page-sessions_city"> {{ cinema[selected].city.text }}</div>
                    <div class="page-cinema_sessions" v-for="session in filteredSessions">
                        <div class="session-row">
                            <span class="session-time">{{ session.time }}</span>
                            <span class="session-format">{{ session.format }}</span>
                        </div>
                        <div class="session-row">
                            <span class="session-place">{{ session.place }}</span>
                            <span class="session-tickets">{{ session.tickets }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row page-movie_content">
                <div class="col-12 col-md-5"><img :src="movie.content.posters[0]" :alt="movie.title"></div>
                <div class="col-12 col-md-7">
                    <div class="page-button_buy"><a href="">Купить билет</a></div>
                    <h2 class="page-movie_title">{{movie.title}}</h2>
                    <p>{{movie.description}}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-5">
                    <table class="page-movie_info">
                        <tr>
                            <td>год</td>
                            <td>{{ movie.content.year }}</td>
                        </tr>
                        <tr>
                            <td>страна</td>
                            <td>{{ movie.content.country }}</td>
                        </tr>
                        <tr>
                            <td>композитор</td>
                            <td><a href="#">{{ movie.content.composer }}</a></td>
                        </tr>
                        <tr v-for="producer in splitProducers">
                            <td>продюсер</td>
                            <td><a href="#">{{ producer }}</a></td>
                        </tr>
                        <tr v-for="writer in splitWriters">
                            <td>сценарист</td>
                            <td><a href="#">{{ writer }}</a></td>
                        </tr>
                        <tr>
                            <td>жанр</td>
                            <td>{{ movie.content.genre }}</td>
                        </tr>
                        <tr>
                            <td>бюджет</td>
                            <td>{{ movie.content.budget }}</td>
                        </tr>
                        <tr>
                            <td>возраст</td>
                            <td>{{ movie.content.PG }}</td>
                        </tr>
                        <tr>
                            <td>время</td>
                            <td>{{ movie.content.time }}</td>
                        </tr>
                    </table>
                </div>
                <div class="col-12 col-md-7">
                    <h2 class="slider-page_title page-movie_title">Кадры и постеры</h2>
                    <div class="slider-page">
                        <div v-for="poster in movie.content.posters" class="slider__item">
                            <img class="slider-img" :src="poster" alt="poster">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "movie-card",

        computed: {
            ...mapGetters([
                'movies',
                'cinema'
            ]),
            filteredSessions() {
                //Фильтрация фильмов по формату отображения
                let self = this;
                return this.sessions.filter(function (session) {
                    return session.format.indexOf(self.check) > -1
                })
            },
            splitProducers() {
                // Создание массива из строки Продюсеры
                return this.movie.content.producers.split(',')
            },
            splitWriters() {
                // Создание массива из строки со Сценаристами
                return this.movie.content.writers.split(',')
            },
            resource: function () {
                return this.$resource('https://jsonplaceholder.typicode.com/posts{/id}')
            }
        },
        data: function () {
            return {
                movie: null,
                selected: 0,
                days: [],
                month: '',
                check: '',
                endpoint: 'http://kino-teatr.ua:8081/services/api/genre/8?apiKey=pol1kh111',
                producers: [],
                writers: [],
                sessions: [],
                posters: [],
                key: 'pol1kh111',
                post: ''
            }
        },
        methods: {
            selectAll() {
                this.check = '';
            },
            select3D() {
                this.check = '3D';
            },
            select2D() {
                this.check = '2D';
            },
            selectCity(selected) {
                //Разбиение данных по городам
                let cinemaObj = this.cinema[selected].dates;
                for (let j = 0; j < cinemaObj.length; j++) {
                    if (cinemaObj[j].id == this.movie.id) {
                        this.days = cinemaObj[j].days.split(',');
                        this.month = cinemaObj[j].month;
                        this.sessions = cinemaObj[j].sessions;
                    }
                }
            },
            getFilmInfo: function () {
                //генерация аякс запроса
                this.$http.get('http://kino-teatr.ua:8081/services/api/film/48519?apiKey=pol1kh111').then(response => {
                    this.post = response.body;
                    console.log(this.post);
                }, function (error) {
                   console.log(error);
                })
            }
        },
        created() {
            //Хук для реактивного переключения городов
            let movieId = this.$route.params.id;
            this.movie = this.movies[movieId];
            this.selectCity(this.selected);
            this.getFilmInfo();
        },
        mounted() {
            $('.slider-page').slick({
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear'
            });

        }
    }
</script>

<style scoped>

</style>