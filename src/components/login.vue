<template lang="html">

  <section class="iniciarSesion">
    <div class="login">
      <h3>Inicio de Sesión</h3>
      <p>Inicia sesion para poder comprar y añadir a la cesta</p>
      <form class="formularioLogin">
        <label>Mail</label><br>
        <input type="email"><br>
        <label>Contraseña</label><br>
        <input type="password">
        <button class="iniciar">Iniciar Sesión </button><br>
        <a href="">¿Has olvidado la contraseña?</a><br>
        <button class="iniciarGoogle" type="button" v-on:click="loginGoogle">Inicar sesion <img src="Imagenes/google.png" width="25vh"></button><br>
        <button class="iniciarGoogle" type="button" v-on:click="loginFacebook">Inicar sesion <img src="Imagenes/facebook.png" width="25vh"></button><br>
      </form>
    </div>
    <div class="registrarse">
      <p>¿Es tu primera vez?</p>
      <a href="#"><button class="iniciar">Registrate Ahora <img src="Imagenes/mail.png" width="25vh"></button></a>
    </div>
  </section>

</template>

<script lang="js">
import firebase from "../db.js"
  export default  {
    name: 'login',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      loginGoogle(){
        firebase.loginGoogle();
      },
      logoutGoogle(){
        firebase.logoutGoogle();
      },
      loginFacebook(){
        firebase.loginFacebook();
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
@import "../scss/abstracts/_variables.scss";
@import "../scss/abstracts/_mixins.scss";
  .iniciarSesion {
    grid-column: 1 / -1;
    grid-row: 2 / 4;
    text-align: center;

    .login{
      border: 1px solid black;
      width: 500px;
      height: min-content;
      margin: 0 auto;
      padding: 15px 30px;

      .formularioLogin {
        input{
          margin: 10px 0px;
          font-size: size(sm);
        }
        .iniciar{
          background-color: color(tertiary);
          color: rgba(color(primary),0.9);
          margin: 20px 0;
          cursor: pointer;
          font-size: size(xs);
        }
        .iniciarGoogle{
          background-color: rgb(78, 89, 252);
          color: rgba(color(tertiary),0.9);
          margin: 20px 0;
          cursor: pointer;
          font-size: size(xs);
        }
        .iniciarFacebook{
          background-color: rgb(70, 79, 207);
          color: rgba(color(tertiary),0.9);
          margin: 20px 0;
          cursor: pointer;
          font-size: size(xs);
        }
        a{
          text-decoration: none;
          color: color(primary);
        }
      }
    }

    .registrarse{
      border: 1px solid black;
      width:  500px;
      height: min-content;
      margin: 0 auto;
      padding: 15px 30px;
      text-align: center;

      button{
        font-size: size(xs);
      }
    }
  }
</style>
