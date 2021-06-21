<template>
  <div id="info">
    <v-container>
      <v-row>
        <v-tabs
          v-model="tab"
          color="#c93126"
          mobile-breakpoint="600"
          class="pb-10"
        >
          <v-tabs-slider color="#c93126"></v-tabs-slider>
          <v-tab>Misión</v-tab>
          <v-tab>Visión</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="(inf, index) in info" :key="index">
            <v-card flat color="transparent">
              <v-row>
                <v-col cols="12" sm="6" class="d-flex align-center">
                  <v-card-text v-html="inf.texto"></v-card-text>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text>
                    <v-img
                      :src="`${inf.imagen}.${extension}`"
                      :srcset="`${inf.imagen}@1x.${extension} 960w, ${inf.imagen}@2x.${extension} 1264w, ${inf.imagen}@3x.${extension} 1904w`"
                      :alt="inf.titulo"
                    ></v-img>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    tab: null,
    info: [
      {
        titulo: "Misión",
        texto:
          "<h2><span>S</span>omos un estudio jurídico proactivo, cercano, con especialización en multiples áreas del derecho.</h2><br /> Esto conlleva a una atención personalizada a cada problema y con una mirada social e integral de las relaciones humanas.<br />Nuestro compromiso es dar el 100% a cada cliente, ya que agradecemos y valoramos la confianza que han puesto en nosotros.",
        imagen: "/images/info/1",
      },
      {
        titulo: "Visión",
        texto:
          "<h2><span>C</span>omo estudio jurídico buscamos unir el derecho con la comunidad.</h2><br /> Dando soluciones de fácil acceso y calidad, comprendemos la responsabilidad que los clientes ponen en nosotros para solucionar sus problemas por lo que nos caracteriza el compromiso y la responsabilidad.",
        imagen: "/images/info/2",
      },
    ],
  }),
  computed: {
    ...mapGetters(["extension"]),
  },
};
</script>

<style lang="sass">
#info
  background: #f9f9f9
  border-bottom: 1px solid #e2e2e2
  border-top: 1px solid #e2e2e2
  margin-top: 70px
  padding: 50px 0
  .v-item-group
    background: transparent
  .v-slide-group__content
    border-bottom: 1px solid #e2e2e2
  .v-card__title
    color: #c93126
    font-family: 'Adamina', sans-serif
    font-weight: bold
  .v-card__text
    h2
      font-size: 32px
      line-height: 1.3
      span
        background: #c93126
        color: #eee
        font-family: 'Adamina', sans-serif
        padding: 0 3px
  .v-image
    height: 250px
    @media (min-width: 960px)
      height: 400px
</style>