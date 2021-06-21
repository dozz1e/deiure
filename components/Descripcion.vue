<template>
  <div id="descripcion">
    <v-container class="d-flex align-center justify-center">
      <v-card height="400" flat class="d-flex align-center flex-column justify-center">
        <v-card-title class="pb-3">justicia a tu alcance</v-card-title>
        <span class="text-center">
          Somos un estudio jurídico ubicado en el corazón de Viña del Mar que provee asesoría y soluciones legales, de forma cercana y personalizada a la necesidades de cada uno de nuestros clientes.
        </span>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
#descripcion
  span
    font-family: 'Adamina', sans-serif
    font-size: 1.4rem
    line-height: 1.2
    @media (min-width: 600px)
      font-size: 1.8rem
  .v-card
    width: 500px
    .v-card__title
      color: #999
      font-family: 'Adamina', sans-serif
      font-style: italic
    @media (min-width: 760px)
      width: 700px
    @media (min-width: 960px)
      width: 800px
</style>