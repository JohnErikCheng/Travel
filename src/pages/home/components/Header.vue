<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-back">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">
        &#xe632;
      </span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">
        &#xe615;
      </span>
    </div>
  </div>
</template>

<script>
  export default{
    name: "HomeHeader"
  }
</script>

<!-- 使用stylus样式
      scoped:设置的样式只在本组件有效，局部化的样式
      1rem = html font-size = 50px

      float:浮动 float/right
      flex:1 自动舒展开
  -->
<style lang="stylus" scoped>
  .header
    display flex
    line-height .86rem
    background #00bcd4
    color #fff
    .header-left
      width .64rem
      float left
      .icon-back
        text-align center
        font-size .4rem
    .header-input
      height .64rem
      line-height .64rem
      flex 1
      background #fff
      border-radius .1rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      color #ccc
    .header-right
      width 1.24rem
      float right
      text-align center
      .arrow-icon
        margin-left -.04rem
        font-size .24rem


</style>
