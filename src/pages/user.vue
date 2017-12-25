<template>
<div class="container user">
 <!-- <common-top title="用户中心"></common-top>
  <div class="userBox">
    <div class="user-til">会员中心</div>
    <ul class="cen_member">
      <li v-for="item in cenMember"><a href="">{{item.text}}</a></li>
    </ul>
  </div>
  <div class="userBox">
    <div class="user-til">卖家管理</div>
    <ul class="cen_seller">
      <li v-for="item in cenSeller"><a href="">{{item.text}}</a></li>
    </ul>
  </div>
  <div class="userBox">
    <div class="user-til">供应商中心</div>
    <ul class="cen_Suppliers">
      <li v-for="item in cenSuppliers"><a href="">{{item.text}}</a></li>
    </ul>
  </div>
  <common-footer></common-footer>-->
  <yd-navbar title="用户中心">
    <router-link to="/" slot="left">
      <yd-navbar-back-icon></yd-navbar-back-icon>
    </router-link>
  </yd-navbar>
  <yd-cell-group title="会员中心">
    <yd-cell-item arrow href="#" type="link">
      <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
      <span slot="left">我的订单</span>
      <span slot="right">查看全部订单</span>
    </yd-cell-item>
    <yd-cell-item arrow href="#" type="link">
      <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
      <span slot="left">地址管理</span>
    </yd-cell-item>
    <yd-cell-item arrow href="#" type="link">
      <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
      <span slot="left">邀请链接</span>
    </yd-cell-item>
    <yd-cell-item arrow href="#" type="link">
      <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
      <span slot="left">我的足迹</span>
    </yd-cell-item>
    <yd-cell-item arrow href="#" type="link">
      <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
      <span slot="left">我的收藏</span>
    </yd-cell-item>
    <yd-cell-item arrow href="#" type="link">
      <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
      <span slot="left">我的优惠券</span>
    </yd-cell-item>
  </yd-cell-group>

  <yd-cell-group title="卖家中心">
    <yd-cell-item arrow href="#" type="link">
      <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
      <span slot="left">我的订单</span>
      <span slot="right">查看全部订单</span>
    </yd-cell-item>
    <yd-cell-item arrow href="#" type="link">
      <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
      <span slot="left">分类管理</span>
    </yd-cell-item>
    <yd-cell-item arrow href="#" type="link">
      <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
      <span slot="left">商品管理</span>
    </yd-cell-item>
    <yd-cell-item arrow href="#" type="link">
      <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
      <span slot="left">优惠券管理</span>
    </yd-cell-item>

  </yd-cell-group>

  <yd-cell-group title="供应商中心">
    <yd-cell-item arrow href="#" type="link">
      <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
      <span slot="left">我的订单</span>
      <span slot="right">查看全部订单</span>
    </yd-cell-item>
    <yd-cell-item arrow href="#" type="link">
      <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
      <span slot="left">商品管理</span>
    </yd-cell-item>
  </yd-cell-group>
  <div style="position: fixed;bottom: 0;width: 100%;left: 0;z-index: 999">
    <yd-tabbar>
      <yd-tabbar-item title="首页" link="/">
        <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="分类" link="/classify">
        <yd-icon name="type" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="/cart">
        <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="个人中心" link="/user">
        <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </div>
</div>

</template>


<script>
  export default{
    data(){
      return {
          cenMember: [
              {text:'我的订单'},
              {text:'我的优惠券'},
              {text:'我的收藏'},
              {text:'我的足迹'},
              {text:'我的消息'}
          ],
          cenSeller: [
              {text:'我的订单1'},
              {text:'我的优惠券'},
              {text:'我的收藏'},
              {text:'我的足迹'},
              {text:'我的消息'}
          ],
          cenSuppliers: [
              {text:'我的订单2'},
              {text:'我的优惠券'},
              {text:'我的收藏'},
              {text:'我的足迹'},
              {text:'我的消息'}
          ]
      }
    }
  }


</script>
<style lang="css" scoped>
 /* .user .userBox {
    margin: 0.5rem;
    padding:0 0.5rem;
    background: #fff;
    border:1px solid #f5f5f5;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    box-shadow:3px 3px 10px 2px #ccc;
  }
  .user .user-til {
    color: #888;
    font-size: 0.7rem;
    border-bottom: 1px solid #ccc;
    padding:0.5rem 0 ;
  }
  .userBox ul li {
    height:1.5rem;
    line-height:1.5rem;
  }
  .user a{
    color: #666;
    font-size: 0.7rem;
  }*/
</style>
