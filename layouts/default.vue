<template>
  <v-app dark>
    <v-app-bar id="menu" flat app dark :hide-on-scroll="$vuetify.breakpoint.mobile" :color="0 < offsetTop ? '#272727' : 'transparent'">
      <v-container class="d-flex align-center">
        <v-img src="/images/logos/logo-blanco.png" alt="Logo De Iure" height="50" position="left" contain></v-img>
        <v-spacer />
        <Menu v-if="$vuetify.breakpoint.lgAndUp" iconos="1"></Menu>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="$vuetify.breakpoint.mobile" />
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed app right disable-resize-watcher>
      <v-img src="/images/logos/logo-negro.png" alt="Logo De Iure" height="50" contain class="mt-5"></v-img>
      <Menu posicion="flex-column" @close="drawer = false"></Menu>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
    <Foot></Foot>
  </v-app>
</template>

<script>
import { mapActions } from "vuex"
import Menu from "~/components/Menu"
import Foot from "~/components/Foot"

export default {
  components: { Menu, Foot },
  data () {
    return {
      drawer: false,
      offsetTop: 0
    }
  },
  beforeMount(){
    this.setIOS()
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    ...mapActions(['setIOS']),
    onScroll() {
      this.offsetTop = window.scrollY
    }
  }
}
</script>

<style lang="sass">
*
  font-family: 'Roboto', sans-serif
h1,h2,h3,h4,h5,h6
  font-family: 'Adamina', sans-serif
#menu
  .v-icon
    font-size: 32px
  @media (min-width: 960px)
    background: transparent
.v-main
  padding-top: 0 !important
</style>
