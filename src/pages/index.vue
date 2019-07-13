<template>
  <div class="index">
    <mt-swipe :auto="0" class="banner_swipe">
      <mt-swipe-item class="el_swipe_item">1</mt-swipe-item>
      <mt-swipe-item class="el_swipe_item">2</mt-swipe-item>
      <mt-swipe-item class="el_swipe_item">3</mt-swipe-item>
    </mt-swipe>
    <mt-swipe :auto="0" class="goods_swipe">
      <mt-swipe-item v-for="i in 4">
        <div class="el_swipe_slide">
          <div class="el_left">
            <img src="../assets/img/ic_shoes.png"/>
          </div>
          <div class="el_right">
            <div class="el_name">耐克Nike 伦敦三代网面透气轻便休 闲男女运动鞋</div>
            <span class="el_price">¥ 698.00    </span>
            <span class="el_price_o">¥12059</span>
          </div>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <div class="el_session">
      <div class="el_session_header">
        <div class="el_session_left"></div>
        <div class="el_session_center">NIKE</div>
        <div class="el_session_right"></div>
      </div>
      <div class="el_session_content" v-for="i in 2">
        <div class="el_block">
          <img src="../assets/img/ic_nike.png"/>
        </div>
        <div class="el_blocks">
          <div class="el_bocks_in">
            <div class="el_blocks_name">
              耐克Nike 伦敦三代 网面透气轻便休闲 男女运动鞋
            </div>
            <div class="el_price">
              <span class="el_price_n">¥ 698.00  </span>
              <span class="el_price_o">¥12059</span>
            </div>
            <div class="el_button"><img src="../assets/img/ic_more.png"/></div>
          </div>
        </div>
      </div>
    </div>


    <div class="el_session">
      <div class="el_session_header">
        <div class="el_session_left"></div>
        <div class="el_session_center">Adidas</div>
        <div class="el_session_right"></div>
      </div>
      <div class="el_session_content" v-for="i in 2">
        <div class="el_blockl">
          <div class="el_bocks_ins">
            <div class="el_blocks_name">
              耐克Nike 伦敦三代 网面透气轻便休闲 男女运动鞋
            </div>
            <div class="el_price">
              <span class="el_price_n">¥ 698.00  </span>
              <span class="el_price_o">¥12059</span>
            </div>
            <div class="el_button">
              <img src="../assets/img/ic_more.png"/>
            </div>
          </div>
        </div>
        <div class="el_blockr">
          <img src="../assets/img/ic_nike.png"/>
        </div>
      </div>
    </div>
    <div class="el_session">
      <img src="../assets/img/ic_instructions.png"/>
    </div>
    <div class="el_session">
      <img src="../assets/img/ic_explain.png"/>
    </div>
    <div class="el_session">
      <div class="el_session_header">
        <div class="el_session_left"></div>
        <div class="el_session_center">售后服务</div>
        <div class="el_session_right"></div>
      </div>
      <div class="el_session_last">
        <div class="el_side">
          <div><img src="../assets/img/ic_wxCode.png"/></div>
          <div>扫一扫添加微信</div>
        </div>
        <div class="el_side">
          <div><img src="../assets/img/ic_phone.png"/></div>
          <div>18948788829</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    components: {},
    computed: {},
    watch: {},
    created() {
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../style/commom.less";
  @import "../style/commom.css";

  .banner_swipe {
    height: 375px;
    .el_swipe_item {
      color: #fff;
      &:nth-child(1) {
        background: url("../assets/images/1.png") 0 0 no-repeat;
        background-size: cover;
      }
      &:nth-child(2) {
        background: url("../assets/images/2.png") 0 0 no-repeat;
        background-size: cover;
      }
      &:nth-child(3) {
        background: url("../assets/images/3.png") 0 0 no-repeat;
        background-size: cover;
      }
      &:nth-child(4) {
        background: url("../assets/images/4.png") 0 0 no-repeat;
        background-size: cover;
      }

    }
  }

  .goods_swipe {
    height: 240px;
    margin: 38px;
    .mint-swipe-indicator.is-active {
      color: @activeColor;
    }
    .el_swipe_slide {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .el_left {
        img {
          width: 171px;
          height: 88px;
        }
      }
      .el_right {
        margin-left: 33px;
        .el_name {
          font-size: 25px;
          color: rgba(51, 51, 51, 1);
          line-height: 50px;
        }
        .el_price {
          font-size: 25px;
          font-weight: 400;
          color: @activeColor;
          line-height: 34px;
        }
        .el_price_o {
          font-size: 25px;
          font-weight: 400;
          color: @lineColor;
          text-decoration: line-through;
        }
      }

    }
  }

  .el_session {
    padding: 33px;
    .el_session_header {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 10px;
      .el_session_left, .el_session_right {
        width: 33.33%;
        height: 2px;
        border: 2px solid @fontColor;
      }
      .el_session_center {
        font-size: 33px;
        font-weight: 500;
        line-height: 33px;
      }
    }
    .el_session_content {
      position: relative;
      margin: 67px 0;
      height: 446px;
      .el_block {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        display: inline-block;
        width: 390px;
        height: 390px;
        border: 1px dashed @lineColor;
      }
      .el_blockl {
        position: absolute;
        left: 0;
        top: 0;
        width: 383px;
        height: 383px;
        border: 1px solid @lineColor;
        font-size: 27px;
        line-height: 41px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        padding: 2px;
      }
      .el_blocks {
        width: 383px;
        height: 383px;
        border: 1px solid @lineColor;
        font-size: 27px;
        line-height: 41px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 62px;
        right: 0;
      }
      .el_blockr {
        width: 383px;
        height: 383px;
        border: 1px dashed @lineColor;
        font-size: 27px;
        line-height: 41px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 62px;
        right: 0;
        z-index: 10;
      }
      .el_bocks_in {
        padding: 0 32px 0 123px;
      }
      .el_bocks_ins {
        padding: 0 123px 0 32px;
      }
      .el_blocks_name {
        text-align: justify;
        font-size: 27px;
        line-height: 41px;
      }
      .el_price {
        font-size: 25px;
        line-height: 34px;
        margin: 6px 0 22px 0;
        .el_price_n {
          color: @activeColor;
        }
        .el_price_o {
          color: @lineColor;
          text-decoration: line-through;
          font-size: 18px;
          line-height: 24px;
        }
      }
      .el_button {
        text-align: center;
      }
    }
    .el_session_last {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .el_side {
        width: 50%;
        text-align: center;
        font-size: 27px;
        line-height: 27px;
        img {
          width: 152px;
          height: 152px;
          margin: 31px;
        }
      }
    }
  }

</style>
