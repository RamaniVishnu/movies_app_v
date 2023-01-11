<template>
<div>
        <!-- <Slider /> -->
        <!-- old code  -->
        <div class="movie-container">
        <template  
        v-for="(item,index) in MovieList" >
       <router-link :to="'/movie/'+item.imdbID" :key="item.key"> 
       <div class="movie-card"
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
        <div><h2 class="movie-title">{{item.Title}}</h2></div>
        <div class="movie-title">
            <div class="movie-year"><p>{{item.Year}}</p></div>
            <div class="movie-type"><p>{{item.Type}}</p></div>
        </div>
        </div>
        </router-link>
        </template>
        </div>
        <Pagination />
</div>
</template>

<script>
import { mapState } from 'vuex';
import Pagination from './PaginationComp.vue';

// import MovieDetail from './MovieDetails.vue'
export default {
    name:"HomeComp",
    data(){
        return {
            itemNum:[]
        }
    },
    provide(){
        return {
            itemNum: this.itemNum
        }
    },
    components:{
        Pagination,
        // MovieDetail
    },
    computed:{
        ...mapState({
            MovieList: (state) => state.movies,
        }),
    },
    methods:{
        getMovieDetail(id){
            console.log('id-----',typeof id);
            this.$store.dispatch('getMovieDetail', id)

        },
        addToCart(id){
            return this.itemNum.push(id);
        }
    }
    
}
</script>

<style lang="scss" scoped>
.home-topic{
    width:120px;
    height:50px;
    font-size: 35px;
    font-weight: 700;
    color: whitesmoke;
    margin: 20px 0 0 52px;
}
.home-cards{
    display: flex;
    width: 92%;
        margin: auto;
    flex-wrap: wrap;

    .card{
            display: flex;
    flex-direction: column;
    margin-right: 5px;

    }
    .home-title{
        width:200px;

    }
}
















// old code 

.movie-container {
display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .movie-card {
        margin: 50px 10px 10px 10px;
    width: 280px;
    height: 350px;
    background: #181818;

    .movie-img{
        height: 250px;
        width: 280px;
        margin: 0px;
    }
    .movie-title{
        color:#ffffff;
        display:flex;
        justify-content: center;
        font-size: 18px;
    margin-top: 5px;
    margin: 5px 0 0 10px;
    }
    .movie-year, .movie-type {
        display:flex;   
        margin:auto;
    }
    }
}







// new style code from linkedin working fine
// .movie-container{
//     position: relative;
//     width: 320px;
//     height: 450px;
//     background-color: #fff;
//     border-radius: 20px;
//     box-shadow: 0 15px 35px rgba(0,0,0,0.25);
//     overflow: hidden;

//     .movie-card{
//         position: relative;
//         overflow: hidden;

//         img {
//             width:100%;
//         }
//     }

//      .movie-card::before{
//         content: '';
//         position: absolute;
//         bottom: -180px;
//         width: 100%;
//         height: 100%;
//         background: linear-gradient(0deg, #1064a6 50%,transparent);
//         transition: 0.5s;
//         z-index: 1;
//     }
// }

// .movie-container:hover .movie-card::before {
//     bottom: 0px;
// }

// .movie-container:hover .movie-card{
//     img {
//         transform: translate(-50px);
//         filter:blur(5px);
//     }
// }


</style>