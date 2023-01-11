<template>
<div class="movie-page">
    <div class="movie-detail">
      <div class="movie-title">
        {{Details.Title}}
      </div>
      <div class="sub-bio">
        <div class="sub-released">{{Details.Released}}</div>
        <div class="sub-rating"><em class="fa fa-star" aria-hidden="true"> {{Details.imdbRating}}</em></div>
        <div class="sub-genre">{{Details.Genre}}</div>
    <div class="sub-director">{{Details.Director}}</div>
  </div>
    </div>
    <div class="movie-plot-img">
      <div class="plot">
        <p class="m-p"> {{Details.Plot}} </p>
        </div>
        <div class="mov-img">
          <img :src="Details.Poster" alt="img" />
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"movieDetail",
    data(){
      return {
      }
    },
    props:{
      idValue:{
      type: String,
    }
    },
    computed:{
      ...mapState({
        Details: (state) => state.movieDetails
      })
    },
    methods:{
      // getID(){
      //   let id = this.$route.params.id;
      //   console.log('id valuue in cop',id)
      // }
    }
}
</script>

<style lang="scss" scoped>
.movie-page{
  width:80%;
  margin: auto;
.movie-detail{
  display: flex;
  flex-direction: column;
    padding-top: 50px;
  .movie-title{
    color:wheat;
    font-size: 40px;
  }

  .sub-bio{
    display: flex;
    color:wheat;
    font-size: 20px;
    // width: 70%;
    max-width: 75%;
    justify-content: space-between;
    margin-top: 10px;

    .sub-released{

    }

    .sub-rating{

    }

    .sub-genre{

    }

    .sub-director{

    }
  }
}

.movie-plot-img{
  display: flex;
  margin-top: 20px;
  .plot{
    color: white;
  }
  .m-p{
    width: 80%;
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
    font-family: Sourse sans-serif;
  }
}
}
</style>