export default {
  setIOS({commit}){
		const aux = ['iPad Simulator','iPhone Simulator','iPod Simulator','iPad','iPhone','iPod'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
		let ext = 'jpg'
		if(!aux)
			ext = 'webp'
		commit('SET_EXTENSION', ext)
	}
}