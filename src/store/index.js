import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebase'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    libros:[],
    libro: {titulo: '', genero: '', id:''}
  },
  mutations: {

    setLibros(state, libros){
      state.libros = libros
    },
    
    setLibro(state, libro){
      state.libro = libro
    },
    elimarLibr(state, id){
      state.libros = state.libros.filter( doc => {
        return doc.id != id
      })
    }

  },
  actions: {
    getLibros({commit}){
      const libros = [];
      db.collection('libros').get()
      .then(snapshot => {
        snapshot.forEach( item => {
          // console.log(item.id)
          // console.log(item.data());
          let libro = item.data();
          libro.id = item.id;
          libros.push(libro);
        })
      })

      commit('setLibros', libros)
    },

    getLibro({commit}, id){
      db.collection('libros').doc(id).get()
      .then(doc => {
        let libro = doc.data()
        libro.id = doc.id 
        commit('setLibro', libro)
      })
    },

    editarLibro({commit}, libro){
      db.collection('libros').doc(libro.id).update({
        titulo: libro.titulo, genero: libro.genero
      })
        .then(()=> {
            router.push({ name: 'Inicio'})
        })

    },

    agregarLibro({commit}, libro){
      db.collection('libros').add({
        titulo: libro.titulo,
        genero: libro.genero
      })

      .then( doc => {
        console.log(doc.id);
        router.push({ name: 'Inicio'})
      })
      
    },
    eliminarLibro({commit, dispatch},id){
      db.collection('libros').doc(id).delete()
      .then( () => {
        console.log('Eliminado')
        // dispatch('getLibros')
        commit('elimarLibr', id)
      })
    }
    

  },
  modules: {
  }
})
