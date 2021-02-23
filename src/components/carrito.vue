<template lang="html">

  <section class="carrito">
    <h1>Carrito</h1>
    <table>
      <tr>
        <th>Cantidad</th>
        <th>Producto</th>
        <th>Precio</th>
        <th>SubTotal</th>
        <th></th>
      </tr>
      
      <tr v-for="producto in carrito" v-bind:key="producto.id">
        
        <td>{{producto.Nombre}}</td>
        <td>{{producto.Precio}}€</td>
        <td>{{subTotalProducto(producto.Precio)}}€</td>
        <td><button class="eliminar" v-on:click="eliminarProducto(producto)"><i class="fas fa-trash"></i></button></td>
      </tr>
      <tr>
        
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <router-link to="'../productos'"><input class="continuarCompra" type="button" value="Continuar Comprando"></router-link>
    <input class="realizarCompra" type="button" value="Realizar Compra">
  </section>

</template>

<script lang="js">
import {db} from "../db.js"

  export default  {
    name: 'carrito',
    props: [],
    mounted () {

    },
    data () {
      return {
        carrito: [],
        cantidad: 1,
        subTotal: 0,
      }
    },
    methods: {
      eliminarProducto: function(productoEliminar){
        db.collection('carrito')
        .doc(productoEliminar.id)
        .delete()
      },
      subTotalProducto: function(precioProducto){
        this.subTotal = precioProducto*this.cantidad;
        return this.subTotal;
      },
      totalProducto: function(){

      }
    },
    computed: {

    },
    firestore: {
      carrito: db.collection('carrito'),
  },
}


</script>

<style scoped lang="scss">
@import "../scss/abstracts/_variables.scss";
@import "../scss/abstracts/_mixins.scss";
  .carrito {
    grid-column: 1 / -1;
    grid-row: 2 / 4;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-gap: 2rem;
    h1{
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      font-size: size(md);
      margin: 0 15px;
    }
    table{
      grid-column: 1 / -1;
      grid-row: 2 / 3;
      width: 100%;
      th{
        width: 5rem;
        font-size: size(xs);
      }
      td{
        width: 5rem;
        text-align: center;
        font-size: size(xs);
        button{
          border-radius: 50%;
          font-size: size(sm);
          text-decoration: none;
          outline: none;
          padding: 5px 10px;
        }
      }
    }
    .continuarCompra{
      grid-column: 2 / 3;
      grid-row: 3 / 4;
      background-color: color(tertiary);
      color: rgba(color(primary),0.9);
      margin: 20px 0;
      cursor: pointer;
      font-size: size(xs);
    }
    .realizarCompra{
      grid-column: 9 / 10;
      grid-row: 3 / 4;
      background-color: color(quaternary);
      color: rgba(color(primary),0.9);
      margin: 20px 0;
      cursor: pointer;
      font-size: size(xs);
    }
  }
</style>
