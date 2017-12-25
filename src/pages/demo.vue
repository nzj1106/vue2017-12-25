<template>
  <div class="container" id="ee">
    <ul class="listCom list-arrow list-help">
    你好<div v-for="i in imgList">{{i}}</div>
    </ul>
  </div>
</template>
<script>
  //引入页面需要的数据
 /* import helpDatas from '../data/data.json';*/

  export default {
      data: {
          imgList:[],  //建一个空数组，用来保存调用接口获取的数据

          getImgUrl: ''  //存数据接口
      },

      created: function(){

        this.getImg();      //定义方法

      },

      methods: {

        getImg: function(){

          var that = this;

          that.$http({      //调用接口

            method:'GET',

            url:this.getImgUrl //this指data

          }).then(function(response){ //接口返回数据

            this.imgList=response.data;

          },function(error){
            console.log(error);

          })

        }

      }


      /*data () {
          return {
            items:helpDatas
          }
      }*/
  }
</script>
