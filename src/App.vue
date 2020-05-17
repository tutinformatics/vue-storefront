<template>
    <div id="app">
        <div v-if="this.$store.state.auth.status.loggedIn">
        <header>
            <HeaderComponent/>
        </header>
        </div>
        
        <div class="container">
            <div v-if="this.$store.state.auth.status.loggedIn">
                <Sidebar/>
            </div>
            <div v-else>
                <span style="visibility: hidden">{{this.$router.push('/login')}}</span>
            </div>
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
        },
        computed: {
            currentUser() {
                return this.$store.state.auth.user;
            }
        },
        methods: {
            logOut() {
                this.$store.dispatch('auth/logout');
                this.$router.push('/login');
            }
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
    .create {
        --button-background: #03c2fc;
        border-radius: 10px;
        margin-left: -200px;
    }
    .order {
        --button-background: #03c2fc;
        border-radius: 10px;
        margin-left: -300px;
        margin-bottom: 25px;
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
        margin-top: 20px;
    }

    .sf-heading__title {
        margin-top: -50px;
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
        font-size: 20px;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    .sf-table__header {
        margin-left: 90px;
    }

    .sf-table__row {
        margin-left: 100px;
    }

    .sf-table__data {
        text-align: center;
    }

    .sf-section__content {
        margin-left: 90px;
    }


    .sf-input__wrapper {
        margin-top: 40px;
        margin-left: 150px;
    }

    .sf-breadcrumbs {
        margin-left: 100px;
    }
    .jumbotron {
        margin-left: 150px;
    }

    .token {
        margin-left: -325px;
    }
    .details {
        margin-left: -575px;
    }

    .id {
        margin-left: -705px;
    }
    .welcome {
        margin-left: -285px;
    }

</style>
