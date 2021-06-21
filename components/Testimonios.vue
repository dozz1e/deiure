<template>
  <div id="testimonios" class="mt-10">
    <v-container>
      <h2 class="text-center">Testimonios</h2>
      <v-carousel cycle hide-delimiters :show-arrows="arrow" height="400">
        <v-carousel-item v-for="(test, index) in testimonios" :key="index">
          <div class="d-flex align-center justify-center">
            <v-card
              flat
              light
              height="400"
              width="500"
              class="d-flex flex-column align-center"
            >
              <v-card-title class="py-10" v-if="'' != test.avatar">
                <v-avatar size="70">
                  <v-img :src="test.avatar" :alt="test.nombre"></v-img>
                </v-avatar>
              </v-card-title>
              <v-card-text
                v-html="test.message"
                class="text-center"
              ></v-card-text>
              <v-card-title
                v-text="test.nombre"
                v-if="'' != test.nombre"
              ></v-card-title>
              <v-card-subtitle
                v-text="test.designation"
                v-if="'' != test.designation"
              ></v-card-subtitle>
            </v-card>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    arrow: false,
    testimonios: [
      {
        nombre: "Mauricio Alquinta",
        designation: "",
        avatar: "",
        message:
          "Mi experiencia con ustedes es excelente. Cómo te lo comenté una vez, después de intentar iniciar los trámites de divorcio con 4 abogados ustedes fueron los únicos que en un muy corto tiempo lograron hacerlo. Son 100% confiables, proactivos y prolijos en lo que hacen. Tienen una red increíble de asociados que interactúan con ustedes lo que los hace mucho más fuertes como estudio jurídico. Y lo más importante, no sacan provecho de las situaciones como otros colegas suyos.<br />Saludos y todo el éxito para ustedes, se lo merecen!!!",
      },
      {
        nombre: "Duilio Tossi",
        designation: "",
        avatar: "",
        message:
          "Me acerque a deiure abogados debido a que me despidieron en mi último empleo, no solo alcanzamos un exelente resultado si no que me sorprendió la calidad humana y profesional de sus integrantes.",
      },
      {
        nombre: "Marcela Zamora",
        designation: "",
        avatar: "",
        message:
          "Mi padre falleció el año pasado y decidimos con la familia regularizar toda la herencia para que no existieran problemas y disputas desagradables.<br />Nos comunicamos con Genaro y Camila debido a que nos habían recomendado su calidad profesional.<br />Agradezco enormente su manera de afrontar los problemas que surgieron en el camino y la fácil manera en que encontraron una solución, todo se resolvió sin problemas y en armonía,  una enorme labor profesional que incluso excedió a sus honorarios.",
      },
    ],
  }),
};
</script>

<style lang="sass">
#testimonios
  .v-card__text
    font-size: 24px
</style>