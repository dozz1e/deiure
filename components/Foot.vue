<template>
  <div id="foot" class="pt-5">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" class="d-flex align-center">
          <v-card flat tile color="transparent" dark>
            <v-img height="50" src="/images/logos/logo-blanco.png" alt="Logo De Iure" contain position="left" class="ml-3"></v-img>
            <v-card-text>
              El asesoramiento jurídico del área de práctica del derecho de los derechos civiles es la aplicación de principios abstractos del derecho a los hechos concretos del caso del cliente.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <Menu posicion="flex-column"></Menu>
        </v-col>
        <v-col cols="12" sm="5" class="d-flex flex-column justify-center">
          <h3 class="pl-5">Información Contacto</h3>
          <Contacto posicion="flex-column"></Contacto>
        </v-col>
      </v-row>
    </v-container>
    <v-footer class="d-flex justify-center align-center">
      <span>De Iure &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
import Menu from "~/components/Menu"
import Contacto from '~/components/Contacto.vue'

export default {
  components: { Menu, Contacto }
}
</script>

<style lang="sass">
#foot
  background: #212121
  color: #eee
  .v-list
    a, a i, .v-list-item, .v-list-item i
      color: #eee !important
      line-height: 1.2
  .v-footer
    background: #212121
    border-top: 1px solid #424242
    color: #eee
</style>