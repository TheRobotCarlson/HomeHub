
<template>
<v-item-group multiple>
    <v-container>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.title"
          cols="12"
          md="4"
        >
          <v-item v-slot:default="{ active, toggle }">
            <router-link :to="item.route">

              <v-card
                :color="active ? 'primary' : ''"
                class="align-center justify-center"
                dark
                align-content-center
                @click="toggle"
              >
                <v-card-text>
                  <v-row align="center" justify="center">
                    <v-icon large>{{ item.icon }}</v-icon>
                  </v-row>
                </v-card-text>
                <v-card-title primary-title>
                  <v-row align="center" justify="center">
                    {{ item.title }}
                  </v-row>
                </v-card-title>
              </v-card>
            </router-link>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      randomNumber: 0,
      items: [
        // { title: 'Dashboard', icon: 'mdi-view-dashboard', route: "/" },
        { title: 'Photos', icon: 'mdi-image', route: "/photos"},
        { title: 'Messages', icon: 'mdi-message-text', route: "/messages" },
        { title: 'Music', icon: 'mdi-music-note', route: "/music" },
        { title: 'Recipes', icon: 'mdi-food-apple', route: "/recipe" },
      ],
    }
  },
  methods: {
    getRandomInt (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    getRandom () {
      // this.randomNumber = this.getRandomInt(1, 100)
      this.randomNumber = this.getRandomFromBackend()
    },
    getRandomFromBackend () {
      const path = `http://localhost:5000/api/random`
      axios.get(path)
      .then(response => {
        this.randomNumber = response.data.randomNumber
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  created () {
    this.getRandom()
  }
}
</script>
