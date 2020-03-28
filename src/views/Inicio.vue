<template>
  <div>
      <h1>lista de tareas</h1>
      <router-link :to="{name: 'Agregar'}">
             <button class="btn btn-success btn-block">Agregar</button>
      </router-link>
      <ul class="list-group mt-5">
        <li class="list-group-item"
        v-for="item of libros" :key="item.id">
          {{item.id}} - {{item.titulo}} - {{item.genero}}

          <div class="float-right">
            <router-link :to="{name: 'Editar' , params:{id: item.id }}">
              <button class="btn btn-primary ml-5">Editar</button>
            </router-link>

            <button class="btn btn-danger ml-2 "
            @click="eliminarLibro(item.id)" >Eliminar</button>
          </div>


        </li>
      </ul>
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {
  name: 'Inicio',
  methods:{
    ...mapActions(['getLibros','eliminarLibro'])
  },
  created(){
    this.getLibros()
  },
  computed:{
    ...mapState(['libros'])
  }

}
</script>