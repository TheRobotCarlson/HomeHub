<template>

<v-app dark v-touch:swipe.bottom="swipeDown">
  <v-app-bar app v-if="navbarVisible" dark>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer 
    v-model="drawer"
    temporary 
    app
  >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            HomeHub
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.route"

        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


  <!-- Sizes your content based upon application components -->
  <v-content ma-0>

    <!-- Provides the application the proper gutter -->
    <v-container fluid ma-0>
      <router-view></router-view>
    </v-container>
  </v-content>

</v-app>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      selectedApp: 0,
      drawer: false,
      stopCountdown: true,
      timeout: 3000,
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', route: "/" },
          { title: 'Photos', icon: 'mdi-image', route: "/photos"},
          { title: 'Messages', icon: 'mdi-message-text', route: "/messages" },
          { title: 'Music', icon: 'mdi-music-note', route: "/music" },
          { title: 'Recipes', icon: 'mdi-food-apple', route: "/recipe" },
        ],
    }
  },
  methods: {
    startCountdown(){
      var rootThis = this;
      setTimeout(
        function(){ 
          if(rootThis.drawer && !rootThis.stopCountdown){
            rootThis.startCountdown();
          } else {
            if(rootThis.stopCountdown){
              rootThis.navbarVisible = true; 
            } else {
              rootThis.navbarVisible = false; 
            }
          }

        }, 
      this.timeout);
    },
    swipeDown () {
      this.navbarVisible = true;
      this.startCountdown();
    }
  },
  computed:{
    navbarVisible: {
        get: function () {
            return this.$root.navbarVisible;
        },
        set: function(newValue){
            this.$root.navbarVisible = newValue;
        }
    },
  },
  watch:{
    $route (to, from){
      console.log(to);
      if(to.path == "/photos"){
        this.stopCountdown = false;
        this.startCountdown();
      } else {
        this.navbarVisible = true;
        this.stopCountdown = true;
      }
    }
  } 
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
