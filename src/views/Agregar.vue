<template>
    <div>
        <h1>Agregar nuevo libro</h1>
        <form class="form-inline flex-column align-items-start"
        submit.prevent="agregarLibro({titulo: titulo, genero:genero}) ">
            <input class="form-control w-100 mb-3 mt-3" type="text" v-model="titulo" placeholder="Titulo">
            <input class="form-control w-100 mb-3" type="text" v-model="genero" placeholder="Genero">
            <button class="btn btn-primary btn-block">Agregar</button>
        </form>
        {{genero}}
    </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    name: 'Agregar',
    data(){
        return{
            titulo: '', genero: ''
        }
    },
    methods: {
        ...mapActions(['agregarLibro'])
    },
}
</script>