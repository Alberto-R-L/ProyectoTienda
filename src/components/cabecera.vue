<template lang="html">
  <section class="header-top">

    <nav class="nav">
      <div class="navbar">

        <div class="logo">

          <img src="Imagenes/logo.png" class="logo">
        </div>
        <div class="botones">
          <router-link to="/"><i class="fas fa-home navbutton"></i></router-link>
          <router-link to="/login"><i class="fas fa-user navbutton"></i></router-link>
           <router-link to="/carrito"><i class="fas fa-shopping-cart navbutton"></i></router-link>
          <a href=# v-on:click="logout"><i class="fas fa-sign-out-alt navbutton"></i></a>
        </div>
      </div>
    </nav>
  </section>

</template>

<script lang="js">
import {db} from "../db.js"
import firebase from "../db.js"

  export default  {
    name: 'cabecera',
    props: [],
    mounted () {
      firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
        }
      })
    },
    data () {
      return {
        products:[],
        user: {
          loggedIn: false
        }
      }
    },
    methods: {
      logout(){
        firebase.logout();
      },
    },
    firestore: {
      products: db.collection('productos')
    },
    computed: {
      authenticated(){
          return this.user.loggedIn
      },
      firstName(){
          if (this.user.data.displayName) {
            return this.user.data.displayName
          }
        return null
      }
    }
}


</script>

<style scoped lang="scss">
@import "../scss/abstracts/_variables.scss";
@import "../scss/abstracts/_mixins.scss";

  .header-top{
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    height: 25vh;
    display: grid;
    grid-template-columns: minmax(1fr, min-content) repeat(10, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-gap: 2rem;

    .nav{
      display: grid;
      grid-column: 1 / 10;
      grid-row: 1 / 2;
      
      .navbar{
        grid-column: 1 / 10;
        grid-row: 1 / 2;
        display: grid;
        grid-template-columns:  repeat(7, 1fr);
        grid-template-rows: repeat(1, min-content);
        grid-gap: 20vh;
        align-items: center;

        .links{
          grid-column: 1 / 2;
          grid-row: 1 / 2;
          justify-content: center;
          display: none;
          @include response(lg){
            display: block;
          }
          a{
            text-decoration: none;
            color: color(primary);
            font-size: size(xs);
            padding: 10px;

            &:hover{
              color: color(primary);
              background-color: rgba(color(primary), 0.4);
            }
          }
        }

        .logo{
          grid-column: 1 / 3;
          grid-row: 1 / 2;
          padding: 1rem;
          text-align: center;
          @include response(lg){
            grid-column: 1 / 6;
          }
          img {
              width:12rem;
              height: 100%;
              @include response(lg){
                width: 20rem;
              }
          }
        }

        .botones{
          grid-column: 5 / -1;
          grid-row: 1 / 2;
          display: flex;
          justify-content: space-evenly;
          text-align: center;
          font-size: size(sm);
          @include response(lg){
            grid-column: 6 / -1;
          }
          a{
            color: color(primary);
            cursor: pointer;
          }
        }
      }
    } 

  .navbutton{
    background-color: color(secondary);
    padding: 2vh;
    border: 0.1vh solid black;
    transition-duration: .2s;
  }

  .navbutton:hover{
    background-color: rgba(color(secondary), 0.75);
    border-radius: 50%;
    transition-duration: .2s;
  }

  .navbutton:active{
    background-color: rgba(color(primary), .6);
    transition-duration: .1s;
  }

    .menu{
      grid-column: 1 / 10;
      grid-row: 2 / 2;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(1, min-content);
      grid-gap: 2rem;
      align-items: center;
      min-height: 50px;
      
      .menu-desplegable{
        grid-column: 1 / -1;
        grid-row: 1 / 2;
        display: flex;
        justify-content: start;
        align-items: center;

        @include response(lg){
          justify-content: start;
          align-content: center;
        }

        ul{
          list-style: none;
          padding: 0;
          width: 90vw;
          @include response(lg){
            list-style: none;
            padding: 0;
          }
          li{
            float: left;
            width: 100%;
            text-align: center;

            @include response(lg){
              float: left;
              width: min-content;
              text-align: left;
            }

            a{
              color: color(primary);
              text-decoration: none;
              padding: 10px 15px;
              display: block;

              &:hover{
                border-bottom: 1px solid color(primary);
              }
            }
          }
        }
      }
      .buscador{
        display: grid;
        grid-column: 1 / -1;
        grid-row: 2 / 3;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        @include response(lg){
          grid-column: 8 / -1;
          grid-row: 1 / 2;
          margin-top: 20px;
        }

        a{
          cursor: pointer;
          font-size: size(xs);
          color: color(primary);
        }

        input[type=text]{
          border: 1px solid color(primary);
          font-family: 'Courier New', Courier, monospace;
          margin-right: 5px;
          font-size: size(xs);
        }
      }
    }
  }




</style>
