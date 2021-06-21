<template>
  <div id="portada">
    <v-img sizes="(max-width: 1904px) 100vw, 1904px" :src="`/images/portada/1_rojo.${extension}`" :srcset="`/images/portada/1_rojo_w_600.${extension} 960w, /images/portada/1_rojo_w_960.${extension} 1264w, /images/portada/1_rojo_w_1264.${extension} 1904w`" alt="Fondo Corte de Apelaciones de Valparaíso">
      <v-container>
        <v-card flat color="transparent" dark>
          <h1 class="pb-5">Justicia a tu alcance</h1>
          <span>
            ¿Buscas una solución legal?
          </span>
          <div class="py-5">
            Contáctenos y obtén una asesoría gratuita
          </div>
          <v-btn href="https://wa.me/56951243549" color="#121212" class="py-7 px-5" link shaped target="_blank">
            Contáctenos
          </v-btn>
        </v-card>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['extension']),
  }
}
</script>

<style lang="sass">
#portada
  height: 100vh
  .v-image
    height: 100vh
  .v-responsive__content
    align-items: center
    display: flex
    font-size: 20px
    line-height: 1
    h1
      font-size: 56px
      line-height: 1.2
    span
      font-size: 24px
    .v-btn__content
      text-transform: capitalize
    @media (min-width: 960px)
      h1
        font-size: 72px
      span
        font-size: 32px
</style>