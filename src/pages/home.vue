<template lang="html">
  <div class="container">
    <!-- 头部 -->
     <div class="head">
         <yd-navbar title="首页">
                <router-link to="#" slot="right">
                    <yd-icon name="phone1" size="25px" color="#777"></yd-icon>
                </router-link>
                <router-link to="#" slot="right">
                    <yd-icon name="ucenter-outline" size="25px" color="#777"></yd-icon>
                </router-link>
         </yd-navbar>
    </div>
    <!-- 下拉刷新 -->
    <!-- <yd-pullrefresh :callback="loadList" ref="pullrefreshDemo" > -->
    <!-- 轮播图 -->
    <div class="banner">
        <yd-slider autoplay="3000">
              <yd-slider-item>
                  <a href="http://www.ydcss.com">
                      <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
                  </a>
              </yd-slider-item>
              <yd-slider-item>
                  <a href="http://www.ydcss.com">
                      <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
                  </a>
              </yd-slider-item>
              <yd-slider-item>
                  <a href="http://www.ydcss.com">
                      <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
                  </a>
              </yd-slider-item>
        </yd-slider>
    </div>
    <!-- 分类 -->
    <div class="typeArea">
        <yd-grids-group :rows="5">
            <yd-grids-item v-for="i in typeArea">
                <img slot="icon" :src="i.src">
                <span slot="text">{{i.text}}</span>
            </yd-grids-item>
        </yd-grids-group>
    </div>

  <!-- 商品列表 -->
   <div class="area-item" v-for="i in list">
          <div class="sub-title">
                <p>
                    <span class="area-header">{{i.til}}</span>
                    <router-link to="/more">
                      <i class="more" v-on:click="goTypeList(i.id,i.name)">查看更多</i>
                    </router-link>
                </p>
                <p class="header-title">
                    {{i.subTil}}
                </p>
            </div>
            <div class="area-list">
                <div class="list-item-promotion">
                    <div class="promotion">
                        <img class="promotion-img" alt="热销榜单"   :src="i.src">
                        <p class="promotion-detail ">{{i.til}}</p>
                    </div>
                </div>
                <div class="list-item">
                    <div class="leaseGoods">
                        <div class="img-wrap">
                            <img src="https://product.jimistore.com/lease/72eMkKdnY7denWWysYd8EMMBbXGbsmf5" alt="iPhoneX 全新国行 全面创新">
                        </div>
                        <p class="title">iPhoneX 全新国行 全面创新</p>
                        <p class="detail">￥399/月起</p>
                    </div>
                </div>
                <div class="list-item">
                    <div class="leaseGoods">
                        <div class="img-wrap">
                            <img src="https://product.jimistore.com/lease/WKGmCtK6rXjjGDdFnF2kdAR5jwSDYs5H" alt="三星S8 全新国行 突破所限">
                        </div>
                        <p class="titl">三星S8 全新国行 突破所限</p>
                        <p class="detail">￥309/月</p>
                    </div>
                </div>
            </div>
    </div>
    <div>你好</div>
    <img src="../assets/image/noimg.png" height="800" width="800" alt="">

    <br>
    <br>
    <br>
    <br>
    <!-- </yd-pullrefresh> -->



<div style="padding-bottom:50px;"></div>
     <div style="position: fixed;bottom: 0;width: 100%;left: 0;z-index: 999;">
           <yd-tabbar>
               <yd-tabbar-item title="租赁" link="/">
                   <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
               </yd-tabbar-item>
               <yd-tabbar-item title="分类" link="/">
                   <yd-icon name="type" slot="icon" size="0.54rem"></yd-icon>
               </yd-tabbar-item>
               <yd-tabbar-item title="商品详情" link="/">
                   <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
               </yd-tabbar-item>
               <yd-tabbar-item title="个人中心" link="/">
                   <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
               </yd-tabbar-item>
           </yd-tabbar>
       </div>
  </div>
</template>

<script>


export default {
  // data(){
  //   return{
  //       imgList:[],//建一个空数组，用来保存调用接口获取的数据
  //       getImgUrl: '../data/data.json'//存储数据接口
  //   }
  // },
  // created:function(){
  //   this.getImg()//定义方法
  // },
  // methods:{
  //    getImg: function(){

  //         var that = this;

  //         that.$http({      //调用接口

  //           method:'GET',

  //           url:this.getImgUrl //this指data

  //         }).then(function(response){ //接口返回数据

  //           this.imgList=response.data; // promise的then成功之后，将response返回的数据data，保存到imgList数组里

  //         },function(error){

  //         })
  //   }

  // },
  data () {
    return {
      typeArea:[
        {text:"智能手机",src:"http://static.ydcss.com/ydui/img/logo.png"},
        {text:"电脑平板",src:"https://product.jimistore.com/index/sSbF8FzWPkQR8Rjp2rWE4JMKSAbNhDpB"},
        {text:"智能出行",src:"http://static.ydcss.com/ydui/img/logo.png"},
        {text:"智能硬件",src:"http://static.ydcss.com/ydui/img/logo.png"},
        {text:"智能家电",src:"http://static.ydcss.com/ydui/img/logo.png"}
      ],
      list:[
        {til:"热销榜单",subTil:"别说你一台都没用过",src:"https://product.jimistore.com/index/sSbF8FzWPkQR8Rjp2rWE4JMKSAbNhDpB",},
        {til:"游戏神机",subTil:"Cover渣队友第一选择",src:"https://product.jimistore.com/index/6KnTsN43j5BtGCNfmECfSJBH73RGk5zc",},
        {til:"二手精选",subTil:"不是一手又怎样",src:"https://product.jimistore.com/index/3awpZS73XzRfTQBwk8wGGzF4BsGTCcF3",},
        {til:"果粉专区",subTil:"Apple,先于时代",src:"https://product.jimistore.com/index/xMmcJEXCP8Rm8tBZtRtexdPJzApybMws",},
        {til:"女神优品",subTil:"不是名模，我有名模手机",src:"https://product.jimistore.com/index/db2MGNDemBQbj5AdXiZd6DKWAEGFtKKb",},
        {til:"优质生活",subTil:"这样花，就能活出一朵花",src:"https://product.jimistore.com/index/aPNxkEjNpRpDxMDDSN7TBpBK48MWwmxY",}

      ]
    }
  }

}


</script>
<style scoped lang="css">
.container {background: #fff;}

.head {position: fixed;top: 0;left:0;height: 50px;width: 100%;z-index: 999}

 .banner {
        margin: 1rem 20px 0;
        border-radius: 10px;
    }
    .banner img {
        width: 100%;
        height:100%;
        border-radius: 10px;
    }
.typeArea {margin:0 15px;}
.typeArea img {width:80%;height: 100%}
.typeArea .yd-grids-5 .yd-grids-item:not(:nth-child(5n)):before {border-right: none;}
.typeArea .yd-grids-item:after {border: none;}
.typeArea .yd-grids-txt span {font-size: 0.1rem;display: inline-block;margin-top: 0.1rem}

.area-item {margin:0px 15px;padding-top: 15px;}
.area-item .sub-title {margin:10px 0;}
.area-item .sub-title p:first-child {overflow: hidden;height: 0.5rem;line-height: 0.5rem;}
.area-item .sub-title .area-header {float: left;font-size: 0.35rem;}
.area-item .sub-title .more {float: right;font-size: 0.25rem;color: #999;}
.area-item .sub-title .header-title{color: #b8b8b8;}

.promotion .fieldset,img {width: 100%;}
.promotion-detail {height: 0.6rem;line-height: 0.6rem;font-size: 0.2rem;color: #333;}
.area-list {overflow: hidden;}
.area-list .list-item {float: left;width: 50%;text-align: center;}
.area-list .list-item:nth-child(even) .leaseGoods{  margin-right: 5px;}
.area-list .list-item:nth-child(odd) .leaseGoods{margin-left: 5px;}
.area-list .list-item .leaseGoods {background: #f4f4f4;}
</style>

