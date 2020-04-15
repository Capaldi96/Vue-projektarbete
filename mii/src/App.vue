<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">MII</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">
              <router-link to="/">View Projects</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/addProject">Add Project</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
             <b-nav-item-dropdown right>
            <!--  Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>Log in</em>
              </template>
              <b-dropdown-item href="#">Log In</b-dropdown-item>
              <b-dropdown-item href="#">Log Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>
<script>
  export default {
    data: () => ({
      loginState:false,
      loginMessage: 'Login',
    }),
    methods: {
      loginStatus(state){
        if(state == true){
          this.loginMessage = 'Login';
          this.loginState = false;
        } else{
          this.loginMessage = 'Logout';
          this.loginState = true;
        }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
