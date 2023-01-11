<template>
<div>
    <select name="user" id="browse-info" v-on:change="changeRoute($event)" class="selector-info">
    <option value="Browse" selected disabled hidden>Browse</option>
    <optgroup label="Genre">
        <option value="Series">Series</option>
        <option value="Game">Game</option>
        <option value="Movie">Movies</option>
    </optgroup>
    <optgroup label="Languages">
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Spanish">Spanish</option>
        <option value="Tamil">Tamil</option>
        <option value="Telugu">Telugu</option>
    </optgroup>
    </select>
</div>
</template>

<script>
export default {
  name: "BrowseComp",
  components: {},
  computed: {},
  methods: {
    changeRoute(e) {
        console.log(e.target.value === 'Series');
        if((e.target.value === "Series") || (e.target.value ==="Game") || (e.target.value ==="Movie")) {
      this.getCommonTypeApi(e.target.value.toLowerCase());
        } else {
            this.getSearchData(e.target.value.toLowerCase());
        }
    },
    getCommonTypeApi(type) {
    return this.$store.dispatch("getCommonTypeApi", type);
    },
    getSearchData(value) {
    return this.$store.dispatch('searchDataApi', value.toLowerCase())
    },
  }
};
</script>

<style>
</style>