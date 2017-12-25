<template lang="html">
  <div class="container">
     <div class="head">
        <yd-navbar title="商品详情">
          <router-link to="/" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
          </router-link>
          <router-link to="#" slot="right">
            <yd-icon name="phone1" size="25px" color="#777"></yd-icon>
          </router-link>
        </yd-navbar>
    </div>

    <div class="shopDetail">
            <section class="section-1">
                <div class="banner-wrap">
                  <div class="banner">
                    <yd-slider autoplay="3000">
                        <yd-slider-item>
                            <a href="http://www.ydcss.com">
                                <img src="https://product.jimistore.com/lease/8BXsbZPHP8RFZJMSjfH2dnjhQhzcYRkW">
                            </a>
                        </yd-slider-item>
                        <yd-slider-item>
                            <a href="http://www.ydcss.com">
                                <img src="https://product.jimistore.com/lease/NTdw2atc2Wjb2rWn3aQcnBwXsXK63x7a">
                            </a>
                        </yd-slider-item>
                        <yd-slider-item>
                            <a href="http://www.ydcss.com">
                                <img src="https://product.jimistore.com/lease/dKbZsSHbbMaAE2T2fXsa48ybfPT3axpP">
                            </a>
                        </yd-slider-item>
                    </yd-slider>
                  </div>
                </div>
               <div class="info">
                   <p class="name">iPhoneX 全新国行 全面创新</p>
                   <div class="price">
                       <div class="lf">
                           <i class="label">¥</i>
                           <i class="money">399.00</i>
                           <i class="unit">/月</i>
                       </div>
                       <div class="rt">
                           <p class="value">价值：8388元</p>
                       </div>
                   </div>
                   <p class="note">【年底最强福利】iPhoneX首月0元租.  最高能省价值9688元押金，12期免息，租转售金额以协议为准</p>
               </div>
               <div class="choose">
                  <yd-accordion>
                      <yd-accordion-item title="请选择：网络、颜色、内存、租期、增值服务">
                          <div style="padding: .24rem;">
                               <div class="opt-wrapper">
                                  <div class="opt-label">网络</div>
                                  <div class="opt-cont">
                                      <div class="hide-wrap">
                                          <button class="opt-item active">全网通</button>
                                      </div>
                                  </div>
                              </div>
                              <div class="opt-wrapper">
                                  <div class="opt-label">颜色</div>
                                  <div class="opt-cont">
                                      <div class="hide-wrap">
                                          <button class="opt-item">银色</button>
                                          <button class="opt-item">深空灰色</button>
                                      </div>
                                  </div>
                              </div>
                              <div class="opt-wrapper">
                                  <div class="opt-label">内存</div>
                                  <div class="opt-cont">
                                      <div class="hide-wrap">
                                          <button class="opt-item">64G</button>
                                          <button class="opt-item">256G</button>
                                      </div>
                                  </div>
                              </div>
                              <div class="opt-wrapper">
                                  <div class="opt-label">租用时间</div>
                                  <div class="opt-cont">
                                      <div class="hide-wrap">
                                      <select name="" id="" class="select">
                                        <option value="12">12</option>
                                        <option value="11">11</option>
                                        <option value="10">10</option>
                                      </select>
                                      <span class="sel-txt">个月</span>
                                      </div>
                                  </div>
                              </div>
                              <div class="serv-wrapper">
                                   <div class="serv-label">增值服务</div>
                                   <div class="serv-item active">
                                       <p class="serv-item-title">
                                          <input type="radio" name="radiobutton" value="意外保障¥398.00(必选)" checked>
                                           <i class="serv-name">
                                               意外保障&nbsp;¥398.00(必选)
                                           </i>
                                           <i class="serv-des">
                                               什么是意外保障？
                                           </i>
                                       </p>
                                   </div>
                              </div>
                          </div>
                      </yd-accordion-item>
                  </yd-accordion>
                </div>
            </section>
            <section class="section-2">
                  <yd-accordion>
                      <yd-accordion-item title="全新正品,顺丰包邮,售后无忧,收货须知">
                          <div style="padding: .24rem;">
                              <div class="des-list-item" v-for="i in serviceInfoList">
                                 <p class="des-item-title">{{i.title}}</p>
                                 <p class="des-item-cont">{{i.cont}}</p>
                             </div>
                          </div>
                      </yd-accordion-item>
                  </yd-accordion>
            </section>
        </div>

        <router-link to="shopinfo">
        <div class="yuyueBtn">
            <yd-button size="large" type="primary" shape="circle" bgcolor="#00adef" color="#fff">开始预约</yd-button>
        </div>
        </router-link>



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
      ]
    }
  }
}

</script>
<style scoped lang="css">

.container {background: #fff}
.lf {float: left;}
.rt {float: right;}
.shopDetail {margin:0 15px;}

.shopDetail .section-1 {
    margin: 5px auto;
    padding:0 10px;
}

.shopDetail .section-1, .shopDetail .section-2{
    width: 100%;
    height: auto;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background-color: #fff;
    overflow: hidden;
}
.shopDetail .info .name {
    padding-top: 8px;
    font-size: .35rem;
    color: #000;
}
.shopDetail .info .price {
    padding-top: 10px;
    overflow: hidden;
    font-size: .32rem;
}
.shopDetail .info .label {
    position: relative;
    top: 1px;
    color: #0be;
}

.shopDetail .info .lf i {
    float: left;
    margin-left: 0;
    vertical-align: top;
}

.shopDetail .info .money {
    font-size: 24px;
    background: -webkit-linear-gradient(#0be,#75f5f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 200;
}
.shopDetail .info .unit {
    margin-top: 3px;
    color: #999;
}
.shopDetail .info .value {
    margin-top: 3px;
    color: #666;
    font-size: 12px;
}
.shopDetail .info .note {
  font-size: 12px;
  color: #999;
  padding:5px 0 10px;
}

/* 选择规格 */
.shopDetail .choose .opt-wrapper {
    padding-top: 5px;
    margin-bottom: 4px;
    overflow: hidden;
}
.shopDetail .choose .opt-label {
    float: left;
    margin-left: 0;
    padding-top: 5px;
    width: 25%;
    min-height: .6rem;
    line-height: .6rem;
}
.shopDetail .choose .opt-cont {
    float: right;
    margin-right: 0;
    padding: 0 5px 0 0;
    width: 75%;
    text-align: right;
    overflow: hidden;
}
.shopDetail .choose .hide-wrap {
    float: right;
    margin-right: 0;
    padding-top: 5px;
    width: 105%;
}

.shopDetail .choose .opt-item {
    margin:0 0 .1rem .1rem;
    min-width: 1rem;
    min-height: .5rem;
    line-height: .5rem;
    border: 1px solid #fff;
    text-align: center;
    color: #999;
    font-size: .25rem;
    background-color: #fff;
}
.shopDetail .choose .opt-item.active {
    border: 1px solid #fff;
    color: #00B8FD;
    box-shadow: 0 0 8px rgba(0,184,253,.4);
    -webkit-border-radius: 4px;
    border-radius: 4px;
}
.shopDetail .choose .select{
  width: 1rem;
  height: .5rem;
  line-height: .5rem;
}

.shopDetail .choose .serv-wrapper{
  margin-top: 5px;
  padding-top: 8px;
  border-top: 1px solid #d9d9d9;
}

.shopDetail .choose .serv-wrapper .serv-des {
    float: right;
    margin-right: 0;
    color: #00B8FD;
}

/* 邮寄模块 */
.section-2 {padding: 0 10px;margin-top: 15px;}
.des-list-item { margin-top: 10px; }
.des-item-title {color: #333;font-size: 0.25rem;margin-bottom: 5px;}
.des-item-cont {color: #666;font-size: 0.2rem;}
/* 预约按钮 */
.yuyueBtn {margin:0 15px 20px;}

</style>

