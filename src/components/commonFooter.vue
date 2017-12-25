<template lang="html">
  <div class="footer">
    <ul class="footer-cont">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="add">分类</router-link></li>
        <li><router-link to="detail">购物车</router-link></li>
        <li><router-link to="user">我的</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .footer {
    height: 1.8rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid #ccc;
    background-color: #fff;
  }
  .footer-cont li {
    float: left;
    width: 25%;
    height: 1.8rem;
    text-align: center;
  }
  .footer-cont li:active {
    background-color: #ccc;
  }
  .footer-cont:after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
  .footer-cont li a {
    font-size: 0.8rem;
    color: #666;
    display: inline-block;
    height: 1.8rem;
    line-height: 1.8rem;
  }
</style>
