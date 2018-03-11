<template>
    <div class="news">
        <div class="slider-news">
            <div class="slider__item">
                <img class="slider-img" src="src/assets/slide-1.jpg" alt="Тор">
                <div class="slider-title">Тор повелитель молота и молнии</div>
            </div>
            <div class="slider__item">
                <img class="slider-img" src="src/assets/slide-2.jpg" alt="Тор">
                <div class="slider-title">Тор повелитель молота и молнии</div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-9 news-block">
                <h1 class="news-title">Новости</h1>
                <div class="row">
                    <div v-for="item in news" class="col-12 col-xs-6 col-sm-6 col-md-4 news-item">
                        <a href="#"><img :src="item.img" :alt="item.title"></a>
                        <div class="news-item_title"><a href="#">{{ item.title }}</a></div>
                        <div class="news-item_date"><span>{{ item.date }}</span><span class="news-item_label">Guliver</span></div>
                        <div class="news-item_text">{{ item.text }}</div>
                    </div>
                </div>
            </div>
            <aside class="col-12 col-md-3 news-sidebar"></aside>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "news",
        data: function () {
            return {

            }
        },
        computed: {
            ...mapGetters([
                'news'
            ]),
        },
        mounted() {
            $('.slider-news').slick({
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
    .news {
        overflow: hidden;
    }
    .news-block {
        padding: 0.3rem 1.8rem;
        background: #172029;
    }
    .news-item {
        margin-top: 1rem;
    }
    .news-item_title {
        padding: 1rem 0;
        color: #0992c9;
        text-decoration: underline;
    }

    .news-item_title,
    .news-item_text {
        padding: 1rem 0;
    }

    .news-title,
    .news-item_date {
        color: #fff;
    }

    .news-item_text {
        color: #8993ac;
    }

    .news-item_date span,
    .news-item_label {
        border-radius: 10px;
        padding: 8px;
        line-height: 0.6;
    }

    .news-item_date span {
        background-color: #12151a;
    }
    .news-item_label {
        display: inline-block;
        margin-left: 10px;
        font-weight: bold;
        background: rgba(164,92,200,1);
        background: -moz-linear-gradient(top, rgba(164,92,200,1) 0%, rgba(193,90,241,1) 47%, rgba(193,90,241,1) 100%);
        background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(164,92,200,1)), color-stop(47%, rgba(193,90,241,1)), color-stop(100%, rgba(193,90,241,1)));
        background: -webkit-linear-gradient(top, rgba(164,92,200,1) 0%, rgba(193,90,241,1) 47%, rgba(193,90,241,1) 100%);
        background: -o-linear-gradient(top, rgba(164,92,200,1) 0%, rgba(193,90,241,1) 47%, rgba(193,90,241,1) 100%);
        background: -ms-linear-gradient(top, rgba(164,92,200,1) 0%, rgba(193,90,241,1) 47%, rgba(193,90,241,1) 100%);
        background: linear-gradient(to bottom, rgba(164,92,200,1) 0%, rgba(193,90,241,1) 47%, rgba(193,90,241,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a45cc8', endColorstr='#c15af1', GradientType=0 );
    }

    .news-sidebar {
        background: #fff;
    }
    
</style>