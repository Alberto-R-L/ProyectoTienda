<template lang="html">

  <div class="pie">
    

    <div class="redesSociales">
      <div><a href="#"><i class="fab fa-facebook-square"></i></a></div>
      <div><a href="#"><i class="fab fa-instagram-square"></i></a></div>
      <div class="copyright">Copyright 2021</div>
    </div>

  </div>

</template>

<script lang="js">

  export default  {
    name: 'pie',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
@import "../scss/abstracts/_variables.scss";
@import "../scss/abstracts/_mixins.scss";
  .pie {
    justify-content: space-between;
    background-color: (rgba(color(primary), 0.4));
  }
    .redesSociales{
      @include navigation();
      @include response(lg){
        grid-column: 8 / 10;
      }
    }
  
  
</style>
