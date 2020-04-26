<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.userLoginId}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{currentUser.token.substring(0, 20)}} ... {{currentUser.token.substr(currentUser.token.length - 20)}}
    </p>
    <p>
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