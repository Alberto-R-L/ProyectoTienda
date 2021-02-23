<template lang="html">
  <section>


      <div class="novedades">
        <div class="media">
  <img class="media-object" src="Imagenes/flex.jpg" height="150vh">
  <div class="media-body">
    <h3 class="media-heading">Piezas Flexibles!</h3>
    <p>Imprime una pieza de tamaño pequeño-mediano de un material especial, ya sea TPE, Nylon etc</p>
  </div>
</div>

      <div class="media">
  <img class="media-object" src="Imagenes/uav.jpg" height="150vh">
  <div class="media-body">
    <h3 class="media-heading">Piezas Grandes</h3>
    <p>Impresion grande, de tamaños superiores a los 25x25x25cm, util para piezas de tamaños mayores pero con menor precision de impresion.</p>
  </div>
</div>

      <div class="media">
  <img class="media-object" src="Imagenes/rc.jpg" height="150vh">
  <div class="media-body">
    <h3 class="media-heading">Impresion Conjunta</h3>
    <p>Imprime un objeto que requiere de varias piezas, alternando precio dependiendo del tamaño y material del plastico usado</p>
  </div>
</div>



      </div>


    <section class="products">
      <div class="productos">
        <div class="card" v-for="producto in productos" v-bind:key="producto.id">
          <div class="imgBx">
            <img v-bind:src="producto.Portada">
            <h2>{{productos.Nombre}}</h2>
          </div>
            <div class="price">
              <h3>Precio: </h3>
                <span>{{producto.Precio}}€</span>
            </div>
            <router-link v-bind:to="'/producto/'+producto.id"><button v-bind:disabled="botonDeshabilitado(producto.Stock)">Buy Now</button></router-link>
        </div>
      </div>
    </section>
  </section>

</template>

<script lang="js">
import {db} from "../db.js"

  export default  {
    name: 'main',
    props: [],
    mounted () {

    },
    data () {
      return {
        productos: [],
        disponible: "Disponible"
      }
    },
    methods: {

      botonDeshabilitado: function(stock){
        if (stock > 1){
          return false;
        } else{
          return true;
        }
      }
    },
    computed: {

    },
    firestore: {
      productos: db.collection('productos'),
    }
}


</script>

<style scoped lang="scss">
@import "../scss/abstracts/_variables.scss";
@import "../scss/abstracts/_mixins.scss";
section{
  grid-column: 1 / -1;
  grid-row: 2 / 4;

  display: grid;
  grid-template-columns: minmax(10rem, 1fr) repeat(7, minmax(min-content, 16rem)) minmax(10rem, 1fr);
  grid-template-columns: minmax(1fr, min-content) repeat(10, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-gap: 2rem;
}
.banner{
  text-align: center;
padding: 10vh;
width: 70vh;
position: absolute;
top: 20vh;
object-fit: cover;
}

.novedades{
  display: grid;
  @include response(lg){
grid-template-columns: 30rem 30rem 30rem;
  grid-gap: 2rem;
  margin: 2rem;
  height: 30vh;
  }
}
.media {
    display: flex;
    align-items: flex-start;
    background: #F6F3EB;
    padding: 1em;
    border-radius: 3px;
    max-width: 30em;
    border: 0.1vh solid black;
  }
  .media-object {
    margin-right: 1em;
  }
  .media-body {
    flex: 1;
  }
  .media-heading {
    margin: 0 0 .5em;
  }

.products {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    display: flex;
    justify-content: center;
    min-height: min-content;
    background: rgba(color(primary), 0.8);
    overflow: hidden;
    box-sizing: border-box;

    .productos{

      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      background-color: rgba(color(tertiary), 1);
      

      .card{
        position: relative;
        width: 350px;
        height: 400px;
        margin: 20px 40px;
        padding:1vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: rgba(color(primary), 0.5);
        border: 0.1vh solid black;




        .imgBx{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 20px;
          transition: 0.5s ease-in-out;
          text-align: center;
          img{
            max-width: 100%;
            margin: 0 0 20px;
            transition: 0.5s ease-in-out;
          }
          h2{
            color: color(secondary);
          }
        



          .price{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px 20px;
            h3{
                color: color(secondary);
                font-weight: 300;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-right: 10px;
            }
            span{
              width: min-content;
              height: min-content;
              padding: 2px;
              text-align: center;
              line-height: 24px;
              display: inline-block;
              color: color(primary);
              background: color(secondary);
              border-radius: 4px;
              font-size: size(xs);
              margin: 0 5px;
              margin-right: 10px;
              font-weight: 500;
              transition: 0.5s;
              cursor: pointer;
              &:hover{
                background: color(secondary);
              }
            }
          }

        }
      }
    }
  }
</style>
