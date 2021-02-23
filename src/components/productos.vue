<template lang="html">
  <section>
    <div class="productos">
      <div class="card" v-for="productos in productos" v-bind:key="productos.id">
        <div class="imgBx">
          <img v-bind:src="productos.Portada">
          <h2>{{productos.Nombre}}</h2>
        </div>
        <div class="content">
          <div class="price">
          <router-link v-bind:to="'/producto/'+productos.id">{{productos.Nombre}}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'productos',
    props: ["productos"],
    mounted () {
      
    },
    data () {
      return {
        disponible: "Disponible",
        pocasUnidades: "Pocas Unidades",
        noDisponible: "Producto Agotado"
      }
    },
    methods: {

    },
    computed: {
      stockDisponible: function(){
        if(productos.Stock > 10){
          return disponible;
        } else if(productos.Stock >=1 && productos.Stock <=10){
          return pocasUnidades;
        } else{
          return noDisponible;
        }
      }
    }
}


</script>

<style scoped lang="scss">
@import "../scss/abstracts/_variables.scss";
@import "../scss/abstracts/_mixins.scss";
  section {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    display: flex;
    justify-content: center;
    min-height: min-content;
    background: rgba(color(primary), 0.33);
    overflow: hidden;
    box-sizing: border-box;


    .productos{
      position: relative;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .card{
        position: relative;
        width: 350px;
        height: 400px;
        margin: 20px 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: color(secondary);
        border: 0.1vh solid black;
        }

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
            transition: 0.66s ease-in-out;
          }
          h2{
            color: color(secondary);
          }
        }

        .content{
          position: absolute;
          bottom: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          transition: 0.5s ease-in-out;
          
          .price{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px 15px;
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
              height: 26px;
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
                background: color(tertiary);
              }
            }
          }
        }
      }
    }
  

</style>