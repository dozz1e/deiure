<template>
  <div id="basico">
    <Portada></Portada>
    <Descripcion></Descripcion>
    <Datos></Datos>
    <Extras></Extras>
    <Info></Info>
    <Servicios></Servicios>
    <Testimonios></Testimonios>
    <Mapa></Mapa>
  </div>
</template>

<script>
import Portada from "~/components/Portada"
import Info from "~/components/Info"
import Datos from "~/components/Datos"
import Extras from "~/components/Extras"
import Descripcion from "~/components/Descripcion"
import Servicios from "~/components/Servicios"
import Testimonios from "~/components/Testimonios"
import Mapa from "~/components/Mapa"

export default {
  components:{
    Portada,
    Descripcion,
    Servicios,
    Info,
    Testimonios,
    Extras,
    Datos,
    Mapa
  }
}
</script>