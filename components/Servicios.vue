<template>
  <div id="servicios" class="py-15">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" lg="3" v-for="(serv,index) in servicios" :key="index">
          <v-card flat tile class="pb-5" height="300" color="transparent" dark>
            <v-img :src="`${serv.image}.${extension}`" :srcset="`${serv.image}@1x.${extension} 960w, ${serv.image}@2x.${extension} 1264w, ${serv.image}@3x.${extension} 1904w`" :alt="serv.titulo" height="300">
              <div v-if="!serv.ver" @mouseover="serv.ver = !serv.ver" class="normal-back">
                <v-card-title><h2 class="pb-3">{{serv.titulo}}</h2></v-card-title>
                <v-card-text v-text="serv.texto" class="text-center" v-if="$vuetify.breakpoint.mobile"></v-card-text>
              </div>
              <div v-if="$vuetify.breakpoint.lgAndUp && serv.ver" @mouseleave="serv.ver = !serv.ver" class="red-back">
                <v-card-title><h2 class="pb-3">{{serv.titulo}}</h2></v-card-title>
                <v-card-text v-text="serv.texto" class="text-center"></v-card-text>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    servicios: [
      {
        titulo: 'Derecho de Familia',
        texto: 'Divorcios, pensión de alimentos, relación directa y regular, cuidado personal, filiación, autorización salida del país.',
        image: '/images/servicios/1',
        ver: false
      },
      {
        titulo: 'Derecho Laboral',
        texto: 'Despido injustificado, nulidad del despido, pago de cotizaciones, declaración de relación laboral.',
        image: '/images/servicios/2',
        ver: false
      },
      {
        titulo: 'Derecho civil',
        texto: 'Redacción de contratos, arrendamiento, compraventa, estudio de títulos, herencias.',
        image: '/images/servicios/3',
        ver: false
      },
      {
        titulo: 'Alza plan de Isapre',
        texto: 'Frena el alza de tu plan de isapre de manera completamente gratuita.',
        image: '/images/servicios/4',
        ver: false
      },
    ]
  }),
  computed: {
    ...mapGetters(['extension']),
  }
}
</script>

<style lang="sass">
#servicios
  background: #121212
  .v-card
    transition: all .5s ease-in-out
    .v-card__title
      display: flex
      justify-content: center
      h2
        color: #eee //rgba(201,49,38)
        font-size: 26px
        line-height: 1.2
        word-break: break-word
        display: flex
        justify-content: center
        text-align: center
  .normal-back, .red-back
    display: flex
    flex-direction: column
    justify-content: center
    height: 300px
    width: 100%
  .red-back
    background: rgba(201,49,38,.8)
  .v-responsive__content
    align-items: center
    background: rgba(0,0,0,.7)
    display: flex
    flex-direction: column
    justify-content: center
</style>