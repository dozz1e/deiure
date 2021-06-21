<template>
  <v-list class="menu-basico d-flex pa-5" :class="posicion" color="transparent">
    <v-list-item v-for="(link, index) in links" :key="index" @click="scrollToElement(link.ruta)" class="d-flex align-center">
      <v-icon class="pr-3" v-if="'0' === iconos">{{ link.icono }}</v-icon>
      {{ link.nombre }}
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    posicion: {
      type: String,
      default: "flex-row"
    },
    iconos: {
      type: String,
      default: '0'
    }
  },
  data: () => ({
    links: [
      {
        nombre: 'Inicio',
        ruta: 'portada',
        icono: 'mdi-home-outline'
      },
      {
        nombre: 'Nosotros',
        ruta: 'info',
        icono: 'mdi-account-outline'
      },
      {
        nombre: 'Servicios',
        ruta: 'servicios',
        icono: 'mdi-briefcase-outline'
      },
      {
        nombre: 'Testimonios',
        ruta: 'testimonios',
        icono: 'mdi-book-outline'
      },
      {
        nombre: 'Contacto',
        ruta: 'foot',
        icono: 'mdi-email-multiple-outline'
      }
    ],
  }),
  methods:{
    scrollToElement(ruta) {
      this.$emit('close')
      if(process.client){
        const el = document.getElementById(ruta)
        if(el) {
          el.scrollIntoView({behavior: "smooth", block: "center"})
        }
      }
    }
  }
}
</script>

<style lang="sass">
.menu-basico .v-list-item--link:before
  background: transparent !important
</style>