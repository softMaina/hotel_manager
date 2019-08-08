<template>
  <div id="app">
     <nav class="navbar navbar-expand-lg navbar-light shadow">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link active" to='/'>Home <span class="sr-only">(current)</span></router-link>
            <router-link class="nav-item nav-link" to="/menus">Menu</router-link>
            <router-link class="nav-item nav-link" to="/events">Events</router-link>
            <router-link class="nav-item nav-link" to="/rooms">Rooms</router-link>
            <router-link class="nav-item nav-link" to="/tables">Table Reservations</router-link>
          </div>
        </div>
      </nav>

    <router-view/>

  </div>
</template>

<script>
// import sidebar from './components/shared/sidebarComponent';
import $ from  'jquery'
var bootstrap = require('bootstrap')
export default {
  name: 'app',
  mounted(){
   
  }
}
</script>

<style>
@import './assets/bootstrap.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
