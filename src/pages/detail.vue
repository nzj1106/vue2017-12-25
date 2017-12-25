<template lang="html">
  <div class="container">
     <div class="head">
        <yd-navbar title="热销榜单">
          <router-link to="/" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
          </router-link>
        </yd-navbar>
    </div>
    <div class="list">
          <div class="show-item-prom">
              <img alt="" src="https://product.jimistore.com/index/sSbF8FzWPkQR8Rjp2rWE4JMKSAbNhDpB">
          </div>
          <div v-for="item in details">
          <router-link to="/shop">
            <div class="show-item-good show-item-prom shadow_primary">
                <img class="bigPic" alt="坚果Pro2 全新国行 强劲性能" :src="item.src">
                <div class="slice">
                    <div class="txt">
                        <p class="name">{{item.name}}</p>
                        <p class="price">￥{{item.price}}/月起</p>
                    </div>
                </div>
            </div>
            </router-link>
          </div>
    </div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      details:[
        {name:"坚果Pro2 全新国行 强劲性能1",price:"111",subTil:"别说你一台都没用过",src:"https://product.jimistore.com/lease/E6Gy8MCcNjijXCrmQCwxNDKt822jKSWF",},
        {name:"坚果Pro2 全新国行 强劲性能2",price:"222",subTil:"Cover渣队友第一选择",src:"https://product.jimistore.com/index/6KnTsN43j5BtGCNfmECfSJBH73RGk5zc",},
        {name:"坚果Pro2 全新国行 强劲性能3",price:"333",subTil:"不是一手又怎样",src:"https://product.jimistore.com/index/3awpZS73XzRfTQBwk8wGGzF4BsGTCcF3",},
        {name:"坚果Pro2 全新国行 强劲性能4",price:"444",subTil:"Apple,先于时代",src:"https://product.jimistore.com/index/xMmcJEXCP8Rm8tBZtRtexdPJzApybMws",},
        {name:"坚果Pro2 全新国行 强劲性能5",price:"555",subTil:"不是名模，我有名模手机",src:"https://product.jimistore.com/index/db2MGNDemBQbj5AdXiZd6DKWAEGFtKKb",},
        {name:"坚果Pro2 全新国行 强劲性能6",price:"666",subTil:"这样花，就能活出一朵花",src:"https://product.jimistore.com/index/aPNxkEjNpRpDxMDDSN7TBpBK48MWwmxY",}
      ]
    }
  }
}

</script>
<style scoped lang="css">

.container {background: #fff}
.list {margin:0 15px;}
.list img {width: 100%}


.list .show-item-prom {width: 100%;-webkit-border-radius: .10667rem;border-radius: .10667rem;margin-bottom: .373333rem;overflow: hidden;}

.list .show-item-good {position: relative;margin-bottom: .373333rem;height: 2.3rem;}
.wrapper, .shadow_primary {box-shadow: 0 0 10px rgba(0,0,0,.2);border-radius: 6px;overflow: hidden;}
.list .show-item-good .bigPic {height: 100%;width: 60%;float: left;vertical-align: middle;}
.list .show-item-good .slice .txt .name {font-size: .3rem;color: #333;margin-bottom: .2rem;word-break: break-all;}
.list .show-item-good .slice .txt .price {font-size: .25rem;color: #06ebee;background-image: -webkit-linear-gradient(90deg,#06ebee,#06b2ee);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
.list .show-item-good .slice .txt {position: absolute;top: 50%;right: 0;-webkit-transform: translateY(-50%);transform: translateY(-50%);width: 40%;padding-left: .266667rem;}
</style>

