<template>
  <v-list class="contacto d-flex" :class="posicion" color="transparent">
    <v-list-item v-for="(link, index) in links" :key="index" class="d-flex align-center">
      <v-icon class="pr-3">{{ link.icono }}</v-icon>
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
    }
  },
  data: () => ({
    links: [
      {
        nombre: 'www.deiureabogados.cl',
        icono: 'mdi-web'
      },
      {
        nombre: 'contacto@deiureabogados.cl',
        icono: 'mdi-email-outline'
      },
      {
        nombre: 'telefóno: +56 951243549 / +56 981882740',
        icono: 'mdi-cellphone'
      },
      {
        nombre: 'Traslavina 60, oficina 1301 Viña del Mar',
        icono: 'mdi-google-maps'
      }
    ],
  })
}
</script>