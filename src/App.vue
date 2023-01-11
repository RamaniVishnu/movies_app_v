<template>
  <div id="app" :class="this.MovieList ? '' : 'sample'">
    <router-view />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <Hello />
    <Header />
    <Home />
    <Footer /> -->
  </div>
</template>


<script>
//import Hello from './components/HelloWorld.vue';
// import Header from './components/HeaderComp'
// import Home from './components/HomeComp.vue';
// import Footer from './components/FooterComp.vue'
import { mapState } from "vuex";
//import background from '../src/assets/Background.png';
export default {
  name: "App",
  // components:{
  //   //Hello,
  //   Header,
  //   Home,
  //   Footer
  // },
  created() {
    // skyblue ="skyblue";
    var black = "black";
    // var pink="pink";
    var red = "red";
    //var white ="white";
    //document.body.style.backgroundImage= "linear-gradient(to left  ,"+black+","+red+","+black+","+ pink +","+black+")";
    document.body.style.backgroundImage =
      "linear-gradient(to right ," + black + "," + red + "," + black + ")";
    // document.body.style.backgroundImage="url(.../assets/LoginPage.jpg)";
    this.$store.dispatch("fetchData", { name: "batman", type: "movie" });
  },
  computed: {
    ...mapState({
      MovieList: (state) => state.movies,
    }),
  },
  methods: {},
};
</script>


<style lang="scss">
.material {
  //background-image: url('../src/assets/BackgroundThree.jpg');
  //background-color: 	#101010;
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  // background: #0f171e;
  //background-image: linear-gradient(to right, rgba(183, 238, 238, 0.644), rgb(22, 16, 16));
}
a {
  text-decoration: none;
}

.container {
  margin: 0px 40px;
}
.sample {
  display: none;
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid blue;
  border-bottom: 16px solid blue;
  margin: auto;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
