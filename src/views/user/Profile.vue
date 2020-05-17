<template>
    <div class="container">
        <header class="jumbotron">
            <h3>
                <strong>{{currentUser.userLoginId}}</strong> Profile
            </h3>
        </header>
        <h1 class="welcome">Hello {{currentUser.userLoginId}}, welcome back!</h1>
        <p class="details"><b>Here are your login details</b></p>
        <p class="token">
            <strong>Token:</strong>
            {{currentUser.token.substring(0, 20)}} ... {{currentUser.token.substr(currentUser.token.length - 20)}}
        </p>
        <p class="id">
            <strong>Id:</strong>
            {{currentUser.userLoginId}}
        </p>
        <button @click="handleLogout">Logout</button>

    </div>
</template>

<script>
    export default {
        name: 'Profile',
        computed: {
            currentUser() {
                return this.$store.state.auth.user;
            }
        },
        mounted() {
            if (!this.currentUser) {
                this.$router.push('/login');
            }
        },
        watch: {
            currentUser: function() {
                if (!this.currentUser) {
                    this.$router.push('/login');
                }
            }
        },
        methods: {
            handleLogout() {
                this.$store.dispatch('auth/logout');
            }
        }
    };
</script>
