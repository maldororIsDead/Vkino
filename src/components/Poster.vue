<template>
    <div class="poster">
        <div class="row">
            <aside class="col-12 col-sm-4 col-md-3 col-lg-2">
                <nav class="poster-nav">
                    <ul class="poster-nav_list">
                        <li class="poster-nav_item"><a href="#">Афиша</a></li>
                        <li class="poster-nav_item"><a href="#">Скоро</a></li>
                    </ul>
                </nav>
                <div><img src="" alt=""></div>
            </aside>
            <section class="col-12 col-sm-8 col-md-9 col-lg-10 poster-movies">
                <div class="row poster-movies_list">
                    <div v-for="(movie, index) in movies" class="movie-actual col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="poster-status">
                            {{ movie.rentalStatus ? "Сейчас в кино" : "c " + movie.datePremiere }}
                        </div>
                        <div class="poster-img">
                            <img :src="movie.src" :alt="movie.title">
                        </div>
                        <div class="poster-title">
                            <router-link :to="{name: 'movie', params: {id: index}}">
                                {{ (movie.title.length > 16) ? movie.title.slice(0, 16) + '...': movie.title }}
                            </router-link>
                        </div>
                        <div></div>
                        <div class="poster-link_buy"><a href="#">Купить</a></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <span></span>
                        <img src="" alt="">
                        <div class="poster-title"></div>
                        <a href="#" class="poster-button"></a>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2"></div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "poster.vue",
        computed: {
            ...mapGetters([
                'movies'
            ])
        },
    }
</script>

<style scoped>
    .poster {
        margin-top: 2rem;
        overflow: hidden;
    }

    .poster-nav_item {
        padding: 15px;
        margin-right: 30px;
        position: relative;
        background-color: #fff;
        border: 1px solid black;
    }

    .poster-nav_item:first-child:after {
        content: "";
        position: absolute;
        top: -1px;
        right: -17px;
        width: 0;
        height: 0;
        border-top: 27px solid transparent;
        border-left: 17px solid #fff;
        border-bottom: 27px solid transparent;
    }

    .poster-nav_item a {
        text-decoration: none;
        color: #000;
    }

    .poster-movies_list {
        padding: 15px;
    }

    .poster-img {
        justify-content: center;
        display: flex;
    }

    .poster-img img {
        border-radius: 10px;
        width: auto;
        max-height: 200px;
    }

    .movie-actual {
        margin-bottom: 3rem;
    }

    .poster-movies {
        background-color: #161e27;
        padding: 1rem;
    }

    .poster-title {
        text-align: center;
        color: #067b9d;
        font-weight: bold;
        text-decoration: underline;
        min-height: 3rem;
    }

    .poster-status {
        color: #fff;
        text-align: center;
        margin-bottom: 0.6rem;
    }

    .poster-link_buy {
        margin: 0.7rem 0;
        text-align: center;
    }

    .poster-link_buy a {
        padding: 6px 25px;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 15px;
        background: rgba(255, 203, 16, 1);
        background: -moz-linear-gradient(top, rgba(255, 203, 16, 1) 0%, rgba(255, 166, 0, 1) 51%, rgba(254, 137, 4, 1) 100%);
        background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255, 203, 16, 1)), color-stop(51%, rgba(255, 166, 0, 1)), color-stop(100%, rgba(254, 137, 4, 1)));
        background: -webkit-linear-gradient(top, rgba(255, 203, 16, 1) 0%, rgba(255, 166, 0, 1) 51%, rgba(254, 137, 4, 1) 100%);
        background: -o-linear-gradient(top, rgba(255, 203, 16, 1) 0%, rgba(255, 166, 0, 1) 51%, rgba(254, 137, 4, 1) 100%);
        background: -ms-linear-gradient(top, rgba(255, 203, 16, 1) 0%, rgba(255, 166, 0, 1) 51%, rgba(254, 137, 4, 1) 100%);
        background: linear-gradient(to bottom, rgba(255, 203, 16, 1) 0%, rgba(255, 166, 0, 1) 51%, rgba(254, 137, 4, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffcb10', endColorstr='#fe8904', GradientType=0);
    }
</style>