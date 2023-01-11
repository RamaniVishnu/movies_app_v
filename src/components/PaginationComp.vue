<template>
  <div class="pagenum">
  <div class="page"
  v-for="n in this.pages"
  :key="n">
  <div class="page-n"
  @click="getPageData(n)">
    {{n}}
  </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return {
            num: 8,
            search:'',
        }
    },
    computed:{
        ...mapState({
            pages: (state)=> state.pagesData,
        })
    },
    methods:{
    getPageData(pageNum) {
        console.log('pages===',this.pages);
        this.$store.dispatch("pageNumApi",{pageNum:pageNum});
    }
    }

}
</script>

<style lang="scss" scoped>
.pagenum{
    width: 60%;
    height: 40px;
    margin: auto;
    display: flex;
        min-width: 400px;
    justify-content: space-evenly;
    

    .page {
        flex-direction: row;
        background-color: #ffffff;
        margin-left: 30px;
    width: 40px;
    margin-right: 30px;
    }
    .page-n{
        display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    cursor: default;
    }
}
</style>