<template>
    <main>
        <section>
            <div class="container">
                <div class="slider-block">
                    <div class="slider__item">
                        <img class="slider-img" src="src/assets/slide-1.jpg" alt="Тор">
                        <div class="slider-title">Тор повелитель молота и молнии</div>
                    </div>
                    <div class="slider__item">
                        <img class="slider-img" src="src/assets/slide-2.jpg" alt="Тор">
                        <div class="slider-title">Тор повелитель молота и молнии</div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="films-block films-block_actual">
                <div class="container">
                    <h3 class="films-block_title">Смотрите сегодня, {{ today }}</h3>
                    <div class="row films-block_movies">
                        <div v-for="(movie, index) in moviesActual" class="movie-actual col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div class="movie-img">
                                <img :src="movie.src" :alt="movie.title">
                            </div>
                            <div class="movie-title"><router-link :to="{name: 'movie', params: {id: index}}">{{ movie.title }}</router-link></div>
                            <div class="movie-link"><a href="#">Купить билет</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="films-block films-block_premiere">
                <div class="container">
                    <h3 class="films-block_title">Смотрите скоро</h3>
                    <div class="row films-block_movies">
                        <div v-for="(movie, index) in moviesPremiere" class="movie-actual col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <div class="movie-img">
                                <img :src="movie.src" :alt="movie.title">
                            </div>
                            <div class="movie-title"><router-link :to="{name: 'movie', params: {id: index}}">{{ movie.title }}</router-link></div>
                            <div ></div>
                            <div class="movie-date">{{ movie.datePremiere }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="news-block">
                <div class="container">
                    <h3 class="news-title films-block_title">Новости и Акции</h3>
                    <div class="news-image">
                        <div class="slider-home-news">
                            <div v-for="item in news" class="slider__item">
                                <img class="slider-img" :src="item.img" :alt="item.title">
                            </div>
                        </div>
                    </div>
                    <div class="news-banner">
                        <a href=""><img src="" alt=""></a>
                    </div>
                    <div class="news-text">
                        <h4 class="news-text_title">СЕО текст</h4>
                        <p class="ceo-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at cursus sapien, ut rutrum neque.
                            Maecenas at iaculis odio, eget suscipit lorem. Praesent eleifend ac mi a aliquam.
                            Ut convallis, mi vitae pulvinar suscipit, quam tellus suscipit nisi, vel venenatis tellus dui vitae libero.
                            Maecenas eu lectus in massa feugiat pulvinar. Fusce eros mi, euismod sed aliquam eu, porta quis metus.
                            In placerat, nisl in facilisis molestie, nibh nisi placerat enim, vel faucibus nunc odio et metus.
                            Aliquam tincidunt molestie sollicitudin. Nulla vel eleifend nunc. Donec imperdiet id velit ac facilisis.
                            Integer dapibus fringilla purus. In tristique odio ac sem eleifend, at ultrices nulla aliquam.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "home",
        computed: {
            ...mapGetters([
                'movies',
                'news'
            ]),
            today() {
            //Расчёт текущей даты
                let date = new Date();
                return date.toLocaleString("ru",
                    { month: 'long', day: 'numeric' });
            },
            moviesActual() {
            //Фильтрация массива по текущему прокату
                return this.movies.filter(function (movie) {
                    if (movie.rentalStatus === true)
                        return movie
                })
            },
            moviesPremiere() {
            //Фильтрация массива по будущим премьерам
                return this.movies.filter(function (movie) {
                    if (movie.rentalStatus === false)
                        return movie
                })
            }
        },
        mounted() {
         //Хук для реактивности встроенного jquery-слайдера
            $('.slider-block').slick({
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear'
            });
            $('.slider-home-news').slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }
    }
</script>

<style scoped>

</style>