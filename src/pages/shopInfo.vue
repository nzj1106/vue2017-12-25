<template lang="html">
  <div class="container">
     <div class="head">
        <yd-navbar title="商品信息">
          <router-link to="/" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
          </router-link>
          <router-link to="#" slot="right">
            <yd-icon name="phone1" size="25px" color="#777"></yd-icon>
          </router-link>
        </yd-navbar>
    </div>

    <yd-tab>
        <yd-tab-panel label="图文详情">
          <div class="tab-cont">
              <div class="imgDetail" style="">
                <div class="imgWrap" v-for='i in detailImgList'>
                    <img  :src='i.src'>
                </div>
            </div>
          </div>
        </yd-tab-panel>
        <yd-tab-panel label="商品参数">
          <div class="tab-cont">
            <div class="infoDetail" v-for="i in infoDetail">
                <div class="til">{{i.til}}</div>
                <div class="cont">
                    <div class="infoItem" v-for="m in i.poolList">
                      <span class="name">{{m.name}}</span>
                      <span class="content">{{m.content}}</span>
                    </div>
                </div>
            </div>
          </div>
        </yd-tab-panel>
        <yd-tab-panel label="用户评论">
          <div class="tab-cont">
            时间是一切财富中最宝贵的财富。
          </div>
        </yd-tab-panel>
    </yd-tab>

  </div>
</template>

<script>
export default {
  data () {
    return {
      radio1: '啦啦啦',
      details:[
        {name:"坚果Pro2 全新国行 强劲性能1",price:"111",subTil:"别说你一台都没用过",src:"https://product.jimistore.com/lease/E6Gy8MCcNjijXCrmQCwxNDKt822jKSWF",},
        {name:"坚果Pro2 全新国行 强劲性能2",price:"222",subTil:"Cover渣队友第一选择",src:"https://product.jimistore.com/index/6KnTsN43j5BtGCNfmECfSJBH73RGk5zc",},
        {name:"坚果Pro2 全新国行 强劲性能3",price:"333",subTil:"不是一手又怎样",src:"https://product.jimistore.com/index/3awpZS73XzRfTQBwk8wGGzF4BsGTCcF3",},
        {name:"坚果Pro2 全新国行 强劲性能4",price:"444",subTil:"Apple,先于时代",src:"https://product.jimistore.com/index/xMmcJEXCP8Rm8tBZtRtexdPJzApybMws",},
        {name:"坚果Pro2 全新国行 强劲性能5",price:"555",subTil:"不是名模，我有名模手机",src:"https://product.jimistore.com/index/db2MGNDemBQbj5AdXiZd6DKWAEGFtKKb",},
        {name:"坚果Pro2 全新国行 强劲性能6",price:"666",subTil:"这样花，就能活出一朵花",src:"https://product.jimistore.com/index/aPNxkEjNpRpDxMDDSN7TBpBK48MWwmxY",}
      ],
      serviceInfoList:[
        {title:"全新正品",cont:"全新正品，品质保障，让您租得省心，用得放心！",},
        {title:"顺丰包邮",cont:"我们选择顺丰速运，并承诺为每个包裹保价，让等待无忧。",},
        {title:"售后无忧",cont:"意外保障，免费维修，让租赁没有后顾之忧！",},
        {title:"收获须知",cont:"收货时需提供一张身份证正反面复印件以确认本人收货，并交由快递小哥寄回机蜜存档。",}
      ],
      detailImgList:[
        {src:'https://product.jimistore.com/lease/hktTZidtStwbMdxEEkzf36z2iFdYtmdM'},
        {src:'https://product.jimistore.com/lease/6Xbd364wCTNS8fkXhC23ERTSbQKPtYkf'},
        {src:'https://product.jimistore.com/lease/T2HjTAcJAHGRHG5GCccCweEGbESek8c4'},
        {src:'https://product.jimistore.com/lease/rb8imtHY5y4E7kBFSE4C7iZcKseRXnwY'},
        {src:'https://product.jimistore.com/lease/ti4WJKTHPRcwcdCHmaTGTNtyFWR2rzn2'},
      ],
      infoDetail:[
        {til:'基本参数',poolList:[{name:'手机类型',content:'4G手机，3G手机，智能手机，拍照手机，快充手机，游戏手机'},],},
        {til:'屏幕',poolList:[{name:'手机类型',content:'4G手机，3G手机，智能手机，拍照手机，快充手机，游戏手机'},]},
        {til:'网络',poolList:[{name:'手机类型',content:'4G手机，3G手机，智能手机，拍照手机，快充手机，游戏手机'},]},
        {til:'硬件',poolList:[{name:'手机类型',content:'4G手机，3G手机，智能手机，拍照手机，快充手机，游戏手机'},]},
        {til:'摄像头',poolList:[{name:'手机类型',content:'4G手机，3G手机，智能手机，拍照手机，快充手机，游戏手机'},]},
        {til:'外观',poolList:[{name:'手机类型',content:'4G手机，3G手机，智能手机，拍照手机，快充手机，游戏手机'},]}
      ]
    }
  }
}

</script>
<style>
  .tab-cont{
    margin:10px 15px 20px;
    -webkit-border-radius: 12px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
  }
  .tab-cont .imgWrap img {
    width: 100%;
  }

</style>
