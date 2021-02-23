<template lang="html">
  <section class="producto">
    <p>{{obtenerProducto(this.$route.params.id)}}</p>

    <!-- RECORDAR ARREGLAR ESTO-->
    <div class="containerProducto">
      <div class="fotosProducto">
        <div class="fotoPequeña">
          <img v-bind:src="producto.Imagen1" width="100%" height="100%">
        </div>
        <div class="fotoPequeña">
          <img v-bind:src="producto.Imagen2" width="100%" height="100%">
        </div>
        <div class="fotoPequeña">
          <img v-bind:src="producto.Imagen3" width="100%" height="100%">
        </div>
        <div class="fotoPequeña">
          <img v-bind:src="producto.Imagen4" width="100%" height="100%">
        </div>
      </div>
      <div class="fotoProducto">
        <div class="foto">
          <img v-bind:src="producto.Portada" width="100%" height="100%">
        </div>
      </div>
    </div>
    <div class="datosProducto">
      <h3><b>{{producto.Nombre}}</b></h3>
      <p>{{producto.Precio}} €</p>
      <p>{{producto.Descripcion}}</p>
      
      
      

      <router-link v-bind:to="'/carrito/'"><button v-on:click="agregarProducto">Añadir al carrito</button></router-link>
      <div class="devolucion">
        <i class="fas fa-dolly-flatbed"></i><br>
        <p><b>Entrega en 3-7 días laborables</b></p>
        <p>Envío estándar: 5€/Pedido</p>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import {db} from "../db.js"

  export default  {
    name: 'producto',
    props: [],
    mounted () {

    },
    data () {
      return {
        producto: [],
      }
    },
    methods: {
      obtenerProducto: function(id){
        db.collection('productos').doc(id).get().then( response => {
          if (response.exists) {
            this.producto = response.data();
          } else {
            console.log("No such document!");
          }
        });
      },
      agregarProducto: function(){
        db.collection('carrito').add({
          Nombre: this.producto.Nombre,
          Precio: this.producto.Precio,
        })
      }
    },
    computed: {

    },
    firestore: {
      productos: db.collection('productos'),
  },
}


</script>

<style scoped lang="scss">
@import "../scss/abstracts/_variables.scss";
@import "../scss/abstracts/_mixins.scss";
  section {
    grid-column: 1 / -1;
    grid-row: 2 / 4;

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(1, min-content);
    grid-gap: 2rem;

    .containerProducto{
      grid-column: 1 / 7;
      grid-row: 1 / 2;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;

      @include response(lg){
        flex-wrap: nowrap;
      }
      @include response(xl){
        flex-wrap: nowrap;
      }

      .foto{
        border: 0.1vh solid black;
        height: auto;
        height: 60vw;
        width: 200px;
        min-width: 225px;
        @include response(lg){
          max-height: 450px;
          margin-left: 5rem;
          width: 700px;
        }
        @include response(xl){
          
          height: 40vw;
          max-width: 800px;
        }
        img{
          display: block;

        }
      }

      .fotoPequeña{
        margin: 10px;
        width: 150px;
        min-width: 150px;
        max-height: 150px;
        min-height: 100px;
        border: 0.1vh solid black;
        @include response(lg){
          width: 200px;
          height: 150px;
        }
        img{
          display: block;
          object-fit: cover;
        }
      }
    }

    .datosProducto{
      grid-column: 1 / -1;
      grid-row: 2 / 3;
      margin-left: 5vh;
      margin-bottom: 3rem;
      @include response(sm){
        grid-row: 2 / 3;
      }
      @include response(lg){
        margin-left: 5vh;
        grid-row: 2 / 3;
        grid-column: 1 / -1;
      }
      @include response(xl){
        grid-column: 7 / -1;
        grid-row: 1 / 2;
      }

      p s{
        color: color(primary);
      }

      .valoracion{
        width: min-content;
        p{
          text-align: center;
          font-size: size(xs);
        }
        input[type="radio"]{
          display: none;
        }

        label{
          &:hover{
            color: color(quaternary);
          }
        }
      }
      .colores{
        display: flex;

        .color{
          border: 1px solid black;
          height: 150px;
          width: 100px;
          margin: 10px;

          img{
            object-fit: cover;
          }
        }
      }

      .talla{
        border: 1px solid black;
        width: 350px;
        height: 40px;
        margin-bottom: 10px;
      }

      button{
        background: rgba(color(tertiary), 0.2);
        width: 350px;
        height: 40px;
        border: 1px solid black;
      }

      .devolucion{
        border: 1px solid black;
        margin-top: 10px;
        padding: 10px;
        width: fit-content;
      }
    }
  }

  .valoracion label:hover ~ label {
    color: color(quaternary);
  }

  .valoracion input[type="radio"]:checked ~ label {
    color: color(quaternary);
  }
</style>
