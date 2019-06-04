<template>
  <div id="app">
    <router-view/>
    <div class="item">
      <div class="item-list" @click="huan('/home')" :class="{active : this.$route.path === '/home'}">
        <i class="el-icon-s-home"></i>
        <br>
        <span>首页</span>
      </div>
      <div class="item-list" @click="huan('/list')" :class="{active : this.$route.path === '/list'}">
        <i class="el-icon-s-operation"></i>
        <br>
        <span>分类</span>
      </div>
      <div class="item-list" @click="huan('/car')" :class="{active : this.$route.path === '/car'}">
        <i class="el-icon-shopping-cart-full"></i>
        <br>
        <span>购物车</span>
      </div>
      <div class="item-list" @click="huan('/user')" :class="{active : this.$route.path === '/user'}">
        <i class="el-icon-user-solid"></i>
        <br>
        <span>未登录</span>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
}
.item {
  margin-left: -8px;
  margin-bottom: 5px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: border-box;
}
.item .item-list {
  flex: 1;
  justify-content: space-between;
  align-items: stretch;
  align-content: flex-end;
  text-align: center;
}
.item .item-list i {
  font-size: 32px;
}
.item .item-list span {
}
.active{
  color: red;
}
</style>



<script>
export default {
  name: "app",
  methods:{
    huan(push){
      this.$router.replace(push)
    }
  }
};
</script>


