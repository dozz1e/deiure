<template>
  <div id="datos">
    <v-container>
      <section>
        <v-col
          cols="12"
          sm="6"
          lg="3"
          v-for="(dat, index) in datos"
          :key="index"
        >
          <v-card flat class="pb-5">
            <v-card-title
              ><h2 class="pb-3">
                <span>0{{ index + 1 }}.</span> {{ dat.titulo }}
              </h2></v-card-title
            >
            <v-card-text v-html="dat.texto"></v-card-text>
          </v-card>
        </v-col>
      </section>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    datos: [
      {
        titulo: "Encuentra tu Abogado",
        texto:
          "Encontrar a un abogado de calidad puede ser difícil, pero nosotros tenemos abogados que harán todo lo posible para resolver tu problema y ganar tu caso.",
      },
      {
        titulo: "Soluciones Legales",
        texto:
          "Podemos darle soluciones a sus asuntos legales, como lo pueden ser los derechos familiares, laborales, civiles y de Isapres, entre otros.",
      },
      {
        titulo: "Tus Preguntas",
        texto:
          "Hay tantas cosas que quisieras preguntarle a un abogado. Y puedes obtener respuestas si te contactas para una consulta con uno de nuestros abogados.",
      },
      {
        titulo: "Consulta Gratis",
        texto:
          "Si te contactas con nosotros, te pondremos en contacto con uno de nuestros abogados para <strong>una consulta gratis</strong>.",
      },
    ],
  }),
};
</script>

<style lang="sass">
#datos
  h2
    font-size: 24px
    line-height: 1
    word-break: normal
    span
      color: #c93126
  @media (min-width: 600px)
    padding-bottom: 50px
</style>