<template>
  <div class="header">
    <div class="logo">Movie App</div>
    <Browse />
    <div class="search">
      <input v-model="valueS" type="text" placeholder value />
      <em class="fa fa-search icon" @click="getSearchData(valueS)"></em>
    </div>
    <div class="series">
      Series<input v-model="checked" class="series-check" type="checkbox" placeholder="series" />
    </div>
    <div class="user-image">
      <!-- <router-link to="/"><img src="../assets/user.png" alt="user" />
      </router-link> -->
      <img src="../assets/user.png" alt="user" @click="showSelector()"/>
    <!-- <select name="user" id="user-info" style="display:none" v-on:change="changeRoute($event)" class="selector-info"> -->
      <ul style="display:none" id="user-info"  class="selector-info" >
        <li><option value=" null"></option></li>
        <li><router-link to="/">Sign out</router-link></li>
        <li><option value="about">About</option></li>
      </ul>
  <!-- </select> -->
    </div>
  </div>
</template>

<script>
import Browse from './BrowseComp'
import { mapState } from 'vuex';
// import login from './LoginPage'
export default {
  name: "HeaderComp",
  components: {
    Browse
  },
  data() {
    return {
      valueS: "",
      checked: []
    };
  },
  watch:{
    checked(newChecked){
      console.log('checked===',newChecked);
      if(newChecked.length > 0 ){
        this.getSeries();
      }
    }
  },
  computed:{
    ...mapState({
      search: (state)=> state.search,
    })
  },
  methods: {
    getSearchData(value) {
      this.search=value.toLowerCase();
      this.$store.dispatch('searchDataApi', value.toLowerCase())
    },
    getSeries(){
      let series="series";
      this.$store.dispatch('getCommonTypeApi', series);
    },
    changeRoute(e){
      this.$router.push("/" + e.target.value);
      console.log(e.target.value)
    },
    showSelector(){
      let element= document.getElementById("user-info");
      // element.classList.toggle("selector-val");
      console.log('val==',element);
       if (element.style.display == 'block') {
            element.style.display = 'none';
        }
        else {
            element.style.display = 'block';
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  //background-color: #1a242f;
  background-image: linear-gradient(to right,black,red,black);
  height: 72px;
  padding: 0px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
  }

  .user-image,
  .user-image img {
    width: 38px;
    height: 38px;
    float: right;
  }
}

.search {
  float: right;
  color: #ffffff;

  .icon {
    margin: 2px;
  }
}

.series {
  color: #ffffff;
  .series-check{
    color: #ffffff;
  }
}
.selector-info{
  width: 50px;
  height: 20px;
  color: #ffffff;
  cursor: pointer;
  background-color: aqua;
}
</style>