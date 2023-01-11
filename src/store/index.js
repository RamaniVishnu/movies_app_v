import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies:"",
    search:"harry",
    pagesData:"",
    movieDetails:"",
    englishMovies:'',
    tamilMovies:'',
    seriesList:'',
    teluguMovies:'',
    typeVal:'',
    name:'',
    loader: true
  },
  getters: {
  },
  mutations: {
    SET_MOVIE(state,movies){
      state.movies=movies;
      console.log('movies',movies);
    },
    SET_SEARCH(state,search){
      state.search =search;
      console.log('search=',search);
    },
    SET_PAGES(state,pagesData){
      state.pagesData = pagesData;
      console.log('inside store pages=',pagesData);
    },
    SET_MOVIE_DETAIL(state,movieDetails){
      state.movieDetails =movieDetails;
      console.log('inside store details=',movieDetails);
  },
  SET_ENGLISH_MOVIES(state, englishMovies){
    state.englishMovies = englishMovies;
    state.loader = false;
  },
  SET_TAMIL_MOVIES(state,tamilMovies){
    state.tamilMovies = tamilMovies
  },
  SET_TELUGU_MOVIES(state,teluguMovies){
    state.teluguMovies =teluguMovies
  },
  SET_SERIES_LIST(state,seriesList){
    state.seriesList =seriesList
  },
  SET_TYPE_VAL(state,values){
    const {name,type} = values;
    state.name = name;
    state.typeVal = type;
    console.log('name===',name);
    console.log('type===',type);
  }
},
  actions: {
    fetchData({ commit }, payload) {
      console.log('payload from app',payload);
      const {name,type} = payload;
      axios
        .get(`http://www.omdbapi.com?apiKey=53c800d&s=${name}&type=${type}`)
        .then((response) => {
          console.log(response.data.Search);
          console.log("pay",payload);
          let totalResults = response.data.totalResults;
          console.log('vallllllllll===',totalResults/10);
          totalResults =  totalResults/10 > 8 ? 8 : 2 ;
            commit("SET_PAGES",totalResults);
            commit("SET_TYPE_VAL",{name:name,type:type});
          console.log(' totalResults=', totalResults);

          
          console.log("result",response.data.totalResults);
          //context.commit("SET_DATA", response.data.Search);
          commit("SET_MOVIE", response.data.Search);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pageNumApi({commit},payload) {
      const {pageNum} =payload;
      //const search = this.state.search;
      //console.log('inside store',search);
      axios
      .get(`http://www.omdbapi.com?apiKey=53c800d&s=${this.state.name}&type=${this.state.typeVal}&page=${pageNum}`)
      .then((response)=>{
        commit("SET_MOVIE",response.data.Search);
      }).catch((err)=>{
        console.log(err)
      });
    },
    searchDataApi({commit},payload) {
      axios
      .get(`http://www.omdbapi.com?apiKey=53c800d&s=${payload}`)
      .then((response)=>{
        commit("SET_MOVIE",response.data.Search);
        commit("SET_SEARCH", payload);
        let totalResults = response.data.totalResults;
        totalResults =  totalResults/10 > 8 ? 8 : 3 ;
          commit("SET_PAGES",totalResults);
        console.log(' totalResults=', totalResults);
      }).catch((err)=>{
        console.log(err)
      });
    },
    getCommonTypeApi({commit},payload){
      console.log('search api value=',`http://www.omdbapi.com?apiKey=53c800d&s=${this.state.search}&type=${payload}`);
      axios
      .get(`http://www.omdbapi.com?apiKey=53c800d&s=${this.state.search}&type=${payload}`)
      .then((response)=>{
        commit("SET_MOVIE",response.data.Search);
        commit("SET_SEARCH", payload);
        let totalResults = response.data.totalResults;
        totalResults =  totalResults/10 > 8 ? 8 : 3 ;
          commit("SET_PAGES",totalResults);
        console.log(' totalResults=', totalResults);
      }).catch((err)=>{
        console.log(err)
      });
    },
    getMovieDetail({commit},payload){
      axios
      .get(`http://www.omdbapi.com?apiKey=53c800d&i=${payload}&plot=full`)
      .then((response)=>{
        commit("SET_MOVIE_DETAIL",response.data);
        // commit("SET_SEARCH", payload);
        // let totalResults = response.data.totalResults;
        // totalResults =  totalResults/10 > 8 ? 8 : 3 ;
        //   commit("SET_PAGES",totalResults);
        // console.log(' totalResults=', totalResults);
      }).catch((err)=>{
        console.log(err)
      });
    },

    getEnglishMovieApi({commit},payload){
      console.log('search api value=',`http://www.omdbapi.com?apiKey=53c800d&s='english'&type='movies`);
      axios
      .get(`http://www.omdbapi.com?apiKey=53c800d&s='english'&type=movie`)
      .then((response)=>{
        console.log('api english ====',response.data);
        commit("SET_ENGLISH_MOVIES",response.data.Search);
        commit("SET_TYPE_VAL","movie");
        console.log('english');
        console.log('payload',payload);
      }).catch((err)=>{
        console.log(err)
      });
    },
    getTamilMovieApi({commit},payload){
      console.log('search api value=',`http://www.omdbapi.com?apiKey=53c800d&s='english'&type='movies`);
      axios
      .get(`http://www.omdbapi.com?apiKey=53c800d&s='tamil'&type=movie`)
      .then((response)=>{
        console.log('api english ====',response.data);
        commit("SET_TAMIL_MOVIES",response.data.Search);
        commit("SET_TYPE_VAL","movie");
        console.log('english');
        console.log('payload',payload);
      }).catch((err)=>{
        console.log(err)
      });
    },
    getTeluguMovieApi({commit},payload){
      console.log('search api value=',`http://www.omdbapi.com?apiKey=53c800d&s='english'&type='movies`);
      axios
      .get(`http://www.omdbapi.com?apiKey=53c800d&s='telugu'&type=movie`)
      .then((response)=>{
        console.log('api english ====',response.data);
        commit("SET_TELUGU_MOVIES",response.data.Search);
        commit("SET_TYPE_VAL","movie")
        console.log('english');
        console.log('payload',payload);
      }).catch((err)=>{
        console.log(err)
      });
    },
    getSeriesListApi({commit},payload){
      console.log('search api value=',`http://www.omdbapi.com?apiKey=53c800d&s='english'&type=series`);
      axios
      .get(`http://www.omdbapi.com?apiKey=53c800d&s='harry'&type=series`)
      .then((response)=>{
        console.log('api english ====',response.data);
        commit("SET_SERIES_LIST",response.data.Search);
        commit("SET_TYPE_VAL","series");
        console.log('english');
        console.log('payload',payload);
      }).catch((err)=>{
        console.log(err)
      });
    },
  },
  modules: {
  }
})
