<template>
    <div class="header">
        <div class="advertising-block">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="advertising-block_text">Покупайте электронные билеты и обходите очереди на кассах!
                        <span>отправляйтесь сразу в зал!</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="header-content">
                <div class="row">
                    <div class="col-7 col-sm-3 col-md-3 offset-md-1 col-lg-3 offset-lg-3 col-xl-2 offset-xl-4 header-search">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search">
                            <!--   <button class="btn btn-outline-success my-2 my-sm-0" type="submit"></button>-->
                        </form>
                    </div>
                    <div class="col-5 col-sm-3 col-md-3 col-lg-2 header-contacts">
                        <div>(048) 777­77­77</div>
                        <div>(097) 777­77­77</div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-5 col-lg-4 header-social">
                        <ul class="header-social_list">
                            <li class="social-item"><a href="https://vk.com/" class="social-link social__vk"></a></li>
                            <li class="social-item"><a href="" class="social-link social-link_fb"></a></li>
                            <li class="social-item"><a href="" class="social-link social-link_tw"></a></li>
                            <li class="social-item"><a href="" class="social-link social-link_vk"></a></li>
                            <li class="social-item"><a href="" class="social-link social-link_ok"></a></li>
                            <li class="social-item"><a href="" class="social-link social-link_goo"></a></li>
                            <li class="social-item"><a href="" class="social-link social-link_lk"></a></li>
                            <li class="social-item"><a href="" class="social-link social-link_add"></a></li>
                        </ul>
                    </div>
                </div>
                <div class="header-menu">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <router-link class="header-logo navbar-brand" to="/">Вкино</router-link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <router-link class="nav-link" to="/poster">Афиша<span
                                            class="sr-only">(current)</span></router-link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Расписание</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Скоро</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Кинотеатры</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Акции</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        О кинотеатре
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <router-link class="dropdown-item" to="/about-us/news">Новости</router-link>
                                        <a class="dropdown-item" href="#">Реклама</a>
                                        <a class="dropdown-item" href="#">Кафе</a>
                                        <a class="dropdown-item" href="#">Мобильные прил</a>
                                        <a class="dropdown-item" href="#">Контакты</a>
                                    </div>
                                </li>
                            </ul>
                            <div class="header-multilang">
                                <select class="custom-select">
                                    <option value="">Рус</option>
                                    <option value="">Анг</option>
                                    <option value="">Укр</option>
                                </select>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "header",
    }
</script>

<style scoped>

</style>