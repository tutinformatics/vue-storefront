<template>
    <div id="app">
        <header>
            <HeaderComponent/>
        </header>
        <div class="container">
            <Sidebar/>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from "./components/HeaderComponent.vue";
    import Sidebar from "./components/Sidebar";


    export default {
        name: "App",
        components: {
            HeaderComponent,
            Sidebar
        }
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 10px;
    }
    .sf-button {
        --button-background: #03c2fc;
        border-radius: 10px;
        margin-left: -200px;
    }

    .sf-search-bar {
        width: 700px;
        height:50px;
    }

    h {
        font-size: 30px;
        margin-left: -550px;
    }

    p {
        margin-left: -650px;
        text-decoration: underline;
    }
    .sf-menu-item__label {
        font-size: 20px;
        text-align: center;
        color: black;
    }

    .sf-sidebar__aside {
        background-color: #03c2fc;
        width: 17%;
    }
    .sf-product-card {
        margin-left: 50px;
        --product-card-min-width: 40px;
    }

    .sf-heading__title {
        margin-top: -30px;
        font-size: 50px;
    }

    .sf-heading__subtitle {
        text-align: right;
        margin-top: -25px;
        font-size: 20px;
    }

    .sf-list__item {
        text-decoration: underline;
    }

    .sf-header__circle-icon--is-active {
        background-color: #03c2fc;
    }

    .sf-product-card__title {
        font-size: 25px;
    }


</style>
