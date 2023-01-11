<template>
    <div>
        <div v-if="loader">
            <p style="color:white;font-size:100px">Heefkafnjkabjkfjkabdkbjkajbjbjdbjdkbajkbjbdabk</p>
        </div>
        <Header />

        <Slider />

        <div class="movie-title">
            <div>Movies</div>
            <router-link to="/home" ><div>View All</div></router-link>
            </div>
        <div class="movie-container">
        <template  
        v-for="(item,index) in MovieList" >
       <router-link :to="'/movie/'+item.imdbID" :key="item.key"> <div class="movie-card"
        :key="index"
        @click="getMovieDetail(item.imdbID)">
        <img v-if="item.Poster !== 'N/A'"
        class="movie-img"
        :src="item.Poster"
        alt="image"
        :key="index"
        />
        <img v-else
        class="movie-img"
        src="../assets/filmy.jpg"
        alt="dummy-img"
        :key="index"
        />
            
        </div> </router-link>
        </template>
        </div>

        <div class="movie-title">
            <div>Series</div>
             <router-link to="/home" ><div @click="getViewAll('series')">View All</div></router-link>
            </div>
        <div class="movie-container">
        <template  
        v-for="(item,index) in seriesList" >
       <router-link :to="'/movie/'+item.imdbID" :key="item.key"> <div class="movie-card"
        :key="index"
        @click="getMovieDetail(item.imdbID)">
        <img v-if="item.Poster !== 'N/A'"
        class="movie-img"
        :src="item.Poster"
        alt="image"
        :key="index"
        />
        <img v-else
        class="movie-img"
        src="../assets/filmy.jpg"
        alt="dummy-img"
        :key="index"
        />
            
        </div> </router-link>
        </template>
        </div>



       <div class="movie-title">
            <div>English</div>
            <router-link to="/home"><div @click="getViewAll('english')">View All</div></router-link>
        </div>
        <div class="movie-container">
        <template  
        v-for="(item,index) in englishMovies" >
       <router-link :to="'/movie/'+item.imdbID" :key="item.key"> <div class="movie-card"
        :key="index"
        @click="getMovieDetail(item.imdbID)">
        <img v-if="item.Poster !== 'N/A'"
        class="movie-img"
        :src="item.Poster"
        alt="image"
        :key="index"
        />
        <img v-else
        class="movie-img"
        src="../assets/filmy.jpg"
        alt="dummy-img"
        :key="index"
        />
            
        </div> </router-link>
        </template>
        </div>



        <div class="movie-title">
            <div>Tamil</div>
            <router-link to="/home" ><div @click="getViewAll('tamil')">View All</div></router-link>
            </div>
        <div class="movie-container">
        <template  
        v-for="(item,index) in tamilMovies" >
       <router-link :to="'/movie/'+item.imdbID" :key="item.key"> <div class="movie-card"
        :key="index"
        @click="getMovieDetail(item.imdbID)">
        <img v-if="item.Poster !== 'N/A'"
        class="movie-img"
        :src="item.Poster"
        alt="image"
        :key="index"
        />
        <img v-else
        class="movie-img"
        src="../assets/filmy.jpg"
        alt="dummy-img"
        :key="index"
        />
            
        </div> </router-link>
        </template>
        </div>


        <div class="movie-title">
            <div>Telugu</div>
            <router-link to="/home" ><div @click="getViewAll('telugu')">View All</div></router-link>
            </div>
        <div class="movie-container">
        <template  
        v-for="(item,index) in teluguMovies" >
       <router-link :to="'/movie/'+item.imdbID" :key="item.key"> <div class="movie-card"
        :key="index"
        @click="getMovieDetail(item.imdbID)">
        <img v-if="item.Poster !== 'N/A'"
        class="movie-img"
        :src="item.Poster"
        alt="image"
        :key="index"
        />
        <img v-else
        class="movie-img"
        src="../assets/filmy.jpg"
        alt="dummy-img"
        :key="index"
        />
            
        </div> </router-link>
        </template>
        </div>
        <Footer/>
    </div>
</template>

<script>
 import Header from '../components/HeaderComp'
import Footer from '../components/FooterComp';
import { mapState } from 'vuex';
import Slider from './ImageSlider.vue'
export default {
    name:"HomePageTwo",
    data(){
        return {

        }
    },
    components:{
    //Hello,
    Header,
    Footer,
    Slider
  },
  watch: {

  },
  created(){
    this.$store.dispatch("getEnglishMovieApi");
    this.$store.dispatch("getTamilMovieApi");
    this.$store.dispatch("getTeluguMovieApi");
    this.$store.dispatch("getSeriesListApi");
  },
  computed:{
        ...mapState({
            MovieList: (state) => state.movies,
            englishMovies: (state) => state.englishMovies,
            tamilMovies: (state)=> state.tamilMovies,
            teluguMovies: (state)=> state.teluguMovies,
            seriesList: (state)=> state.seriesList,
            loader: (state) => state.loader
        }),
    },
    methods:{
        getMovieDetail(id){
            console.log('id-----',typeof id);
            this.$store.dispatch('getMovieDetail', id)

        },
        getViewAll(search){
            if(search === 'tamil'){
            this.$store.dispatch('fetchData',{name:search,type:'movie'});
            } else if(search ==='telugu'){
                this.$store.dispatch('fetchData',{name:search,type:'movie'});
            } else if (search === 'english') {
                this.$store.dispatch('fetchData',{name:search,type:'movie'});
            } else if( search === 'series') {
                this.$store.dispatch('fetchData',{name:'english',type:search});
            }

        }
    }
    
}
</script>

<style lang="scss" scoped>
.movie-container {
display: block;
// flex-wrap: wrap;
overflow-x: scroll;
white-space: nowrap;
margin-left: 30px;


    .movie-card {
    display: inline-block;
    margin: 2px;
    border: 1px solid black;
    height: 300px;
    width: 200px;

    .movie-img{
        height: 350px;
        width: 200px;
        &:hover{
        transform: scale(1.1);
        transition: all 0.3s;

    }
    }
    .movie-year, .movie-type {
        margin:auto;
    }
    }
}

    .movie-title{
        color:#ffffff;
       margin: 30px;
    font-size: 30px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    }
    ::-webkit-scrollbar {
  height: 10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px white; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: black; 
  border-radius: 10px;
}
</style>