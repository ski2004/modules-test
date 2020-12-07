<template>
  <div>{{name}}-page
    <div class="container-fluid py-2">
      <nav aria-label="Demo of Bootstrap 4 Navigation">
        <ul class="pagination">
          <li class="page-item"
            @click="pageDet()" style="z-index:2;">
            <a class="page-link">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a></li>
          <li>
          <div>
            <div style="width: 239px;overflow:hidden;" id="pageSize">
              <ul class="pagination" id="pagination-demo"  style="transform:translateX(0px)" >
                <li :class="['page-item',(now_page)===i+1 ?'active':'']" v-for="(item , i) in list" :key="i" @click="pageSize(i+1)">
                  <a class="page-link">{{ i+1 }}</a></li>
              </ul>
            </div>
          </div>
        </li>
          <li class="page-item" @click="pageAdd()" style="z-index:2;">
            <a class="page-link">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a></li>
        </ul>
      </nav>
    </div>
  </div>  
</template>

<script>
import _fill from "lodash/fill"
import $ from 'jquery'

export default {
  name:"test1",
  props: {
    name: {
      type: String,
      default: 'GGGGG'
    },
    max: {
      type: Number,
      default: function() {
        return 6;
      }
    },
  },
  data: function() {
    return {
      min: 0,
      now_page:1, // 當下頁面
      list:[]
    };
  },
  created() {
    this.list = _fill(Array(this.max),0)
    // console.log(">>>>>",_fill(Array(3), 2))
  },
  watch:{

  },

  methods:{
    pageSize(page) {
      this.pageLine(page)
    },
    pageLine(page){
      var w = 34 // 每格的寬度
      var bef_posx = $('#pagination-demo').css('transform').split(/[()]/)[1].split(',')[4];
      var num = 0 ;
      if( this.now_page > page  ){
        num =  w *  (this.now_page - page) 
      }else{
        num =  -1 * w *  ( page - this.now_page ) 
      }
        console.log("width", $('#pagination-demo').css('width') )
        // console.log(bef_posx,page)
        var max_width = (Number( $('#pagination-demo').css('width').replace("px","") ) + w * 3 ) * -1   
        var size = num + Number(bef_posx)
        size = (size > 0)? 0 : size 
        console.log("max_width",max_width,$('#pagination-demo').css('width'),size)
        size = (size < max_width)? max_width : size 
      if(  page > this.min + 3 ) {
        // num += 64
        console.log("A:",size)
        document.getElementById("pagination-demo").style.transform = "translateX("+ size+"px)"
      }else if( page <= this.min + 3 ){
        size = 0 
        console.log("B:",size)
        document.getElementById("pagination-demo").style.transform = "translateX("+ size+"px)"
      }

      var after_posx = $('#pagination-demo').css('transform').split(/[()]/)[1].split(',')[4];
      console.log("after",after_posx,num)
      
      this.now_page = page 
    },
    //
    pageAdd(){
      // console.log('++',this.now_page)
      if( this.now_page+1 > this.max ) return
      this.pageSize(parseInt(this.now_page)+1)
    },
    pageDet(){
      if( this.now_page-1 <= this.min ) return
      this.pageSize(parseInt(this.now_page)-1)
    }
  }
}
</script>
<style lang="scss" scoped>
div{
  color:blue;
}
// .active{
// background-color:aquamarine;
// }
</style>