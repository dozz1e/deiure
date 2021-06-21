<template>
  <div id="extras">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" class="izq">
          <v-card flat tile dark>
            <v-img
              :src="`/images/extras/2.${extension}`"
              :srcset="`/images/extras/1@1x.${extension} 960w, /images/extras/1@2x.${extension} 1264w, /images/extras/1@3x.${extension} 1904w`"
              alt="Fondo Corte de Apelaciones de Valparaíso"
              height="350"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4" class="centro">
          <v-card flat tile color="gray darken-3" dark>
            <v-img
              src="/images/svg/2_alp.svg"
              height="350"
              alt="Fondo frase"
              class="d-flex align-center"
              position="220px 20px"
            >
              <span class="pa-5 text-center d-flex">
                Cada persona que entra por nuestra puerta es importante para
                nosotros.
              </span>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4" class="der">
          <v-card flat tile color="#c93126" dark>
            <v-img
              src="/images/svg/1_alp.svg"
              height="350"
              alt="Fondo menú secundario"
              class="d-flex align-center"
              position="220px 10px"
            >
              <menu posicion="flex-column"></menu>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Menu from "~/components/Menu";

export default {
  components: { Menu },
  computed: {
    ...mapGetters(["extension"]),
  },
};
</script>

<style lang="sass">
#extras
  @media (min-width: 600px)
    padding: 0 20px
  .izq
    padding-bottom: 0
    @media (min-width: 600px)
      padding: 0
  .der
    padding-top: 0
    a
      font-family: 'Adamina', sans-serif
      font-size: 1.5rem
  .centro
    padding-bottom: 0
    padding-top: 0
    .v-card
      span
        font-family: 'Adamina', sans-serif
        font-size: 1.5rem
  .der, .centro
    @media (min-width: 600px)
      padding: 0
    .v-image__image
      background-size: 150px
</style>