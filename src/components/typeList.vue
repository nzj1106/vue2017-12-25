<template lang="html">
    <div class="area-item">
            <div class="sub-title">
                <p>
                    <span class="area-header">热销榜单</span>
                    <i class="more">查看更多</i>
                </p>
                <p class="header-title">
                    别说你一台都没用过
                </p>
            </div>
            <div class="area-list">
                <div class="list-item-promotion">
                    <div class="promotion">
                        <img class="promotion-img" alt="热销榜单"  src="https://product.jimistore.com/index/sSbF8FzWPkQR8Rjp2rWE4JMKSAbNhDpB">
                        <p class="promotion-detail detail">热销榜单</p>
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
</template>

<script>
export default {
  data () {
    return {
        list:[
            {titl:你好,},
            {titl:你好,},
        ]

    }
  },
  components: {
  }
}



</script>
<style scoped lang="css">
.area-item {margin:10px 15px 50px;}
.area-item .sub-title {margin:10px 0;}
.area-item .sub-title p:first-child {overflow: hidden;height: 0.5rem;line-height: 0.5rem;}
.area-item .sub-title .area-header {float: left;font-size: 0.4rem;}
.area-item .sub-title .more {float: right;font-size: 0.2rem;color: #999;}
.area-item .sub-title .header-title{color: #b8b8b8;}

.promotion .fieldset,img {width: 100%;}
.area-list {overflow: hidden;}
.area-list .list-item {float: left;width: 50%;text-align: center;}
.area-list .list-item .leaseGoods {background: #f4f4f4;}
</style>
