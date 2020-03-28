<template>
    <div>
        <form class="form-inline flex-column align-items-start"
        action="" @submit.prevent="editarLibro(libro)">
            <input  class="form-control w-100 mb-3 mt-3" type="text" v-model="libro.titulo">
            <input class="form-control w-100 mb-3" type="text" v-model="libro.genero">
            <button class="btn btn-primary btn-block">Editar</button>
        </form>
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {
    name: 'Editar',
    data(){
        return{
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getLibro', 'editarLibro'])
    },
    created(){
        this.getLibro(this.id)
    },
    computed:{
        ...mapState(['libro'])
    }
}
</script>