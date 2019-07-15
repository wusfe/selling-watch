<template>
  <div class="index">
    <mt-swipe :auto="3000" class="banner_swipe">
      <mt-swipe-item class="el_swipe_item" v-bind:key="index" v-for="(item, index) in banner_swipe">
        <img :src="item" alt="">
      </mt-swipe-item>
      <!-- <mt-swipe-item class="el_swipe_item">1</mt-swipe-item>
      <mt-swipe-item class="el_swipe_item">2</mt-swipe-item>
      <mt-swipe-item class="el_swipe_item">3</mt-swipe-item> -->
    </mt-swipe>
    <mt-swipe :auto="0" class="goods_swipe" style="background:#fff">
      <mt-swipe-item v-bind:key="index" v-for="(item, index) in best">
        <router-link :to="{path:`/details/${item.id}`, query:{source:$route.query.source}}">
          <div class="el_swipe_slide">
            <div class="el_left">
              <img v-bind:src="item.cover"/>
            </div>
            <div class="el_right">
              <div class="el_name">{{ item.name }}</div>
              <span class="el_price">¥ {{ item.price }}    </span>
              <span class="el_price_o">¥ {{ item.original_price}}</span>
            </div>
          </div>
        </router-link>
      </mt-swipe-item>
    </mt-swipe>

    <div class="el_session" v-bind:key="idx" v-for="(brand, idx) in brands">
      <div class="el_session_header">
        <div class="el_session_left"></div>
        <div class="el_session_center">{{brand.name}}</div>
        <div class="el_session_right"></div>
      </div>
      <div class="el_session_content" v-bind:key="item.id" v-for="item in brand.list">
        <div class="el_block">
          <img :src="item.cover"/>
        </div>
        <div class="el_blocks">
          <div class="el_bocks_in">
            <div class="el_blocks_name">
              {{ item.name }}
            </div>
            <div class="el_price">
              <span class="el_price_n">¥ {{ item.price }}  </span>
              <span class="el_price_o">¥ {{ item.original_price }}</span>
            </div>
            <router-link :to="{path:`/details/${item.id}`, query:{source:$route.query.source}}">
              <a :href="'/details/' + item.id">
                <div class="el_button">
                  查看更多 >>
                </div>
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>


    <!--<div class="el_session">
      <div class="el_session_header">
        <div class="el_session_left"></div>
        <div class="el_session_center">Adidas</div>
        <div class="el_session_right"></div>
      </div>
      <div class="el_session_content" v-for="i in [1,2]">
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
    </div>-->
    <div class="el_session">
      <img src="https://jzy-ebuy.oss-cn-shenzhen.aliyuncs.com/v2/list/img_purchase%403x.png"/>
    </div>
    <div class="el_session">
      <img src="https://jzy-ebuy.oss-cn-shenzhen.aliyuncs.com/v2/list/img_process%403x.png"/>
    </div>
    <div class="el_session">
      <div class="el_session_header">
        <div class="el_session_left"></div>
        <div class="el_session_center">售后服务</div>
        <div class="el_session_right"></div>
      </div>
      <div class="el_session_last">
        <div class="el_side">
          <div><img src="https://jzy-ebuy.oss-cn-shenzhen.aliyuncs.com/v2/list/img_wechat%403x.png"/></div>
          <div>扫一扫添加微信</div>
        </div>
        <div class="el_side">
          <div><img src="https://jzy-ebuy.oss-cn-shenzhen.aliyuncs.com/v2/list/img_phone%403x.png"/></div>
          <div>13282722159</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {list, write} from '../ajaxApi'
  export default {
    data() {
      return {
        banner_swipe:[
          'https://jzy-ebuy.oss-cn-shenzhen.aliyuncs.com/v2/list/banner/img_banner_00.png',
          'https://jzy-ebuy.oss-cn-shenzhen.aliyuncs.com/v2/list/banner/img_banner_01.png'
        ],
        best : [],
        brands: []
      }
    },
    components: {},
    computed: {},
    watch: {},
    created() {
    },
    mounted() {
      list().then(res => {
        if(res.respond == 1){
          this.best = res.data.best
          this.brands = res.data.brands
          console.log('brands', this.brands)
        }
      })

      write({id: 10001})
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "../style/commom.less";
  @import "../style/commom.css";

  .banner_swipe {
    height: 375px;
    .mint-swipe-item{
      img{
        width: 100%;
        height: 100%;
      }
    }


    // .el_swipe_item {
    //   color: #fff;
    //   &:nth-child(1) {
    //     background: url("../assets/images/1.png") 0 0 no-repeat;
    //     background-size: cover;
    //   }
    //   &:nth-child(2) {
    //     background: url("../assets/images/2.png") 0 0 no-repeat;
    //     background-size: cover;
    //   }
    //   &:nth-child(3) {
    //     background: url("../assets/images/3.png") 0 0 no-repeat;
    //     background-size: cover;
    //   }
    //   &:nth-child(4) {
    //     background: url("../assets/images/4.png") 0 0 no-repeat;
    //     background-size: cover;
    //   }

    // }
  }
  .mint-swipe-indicators{
    .mint-swipe-indicators {
      background-color: red;
    }
  }
  //  .mint-swipe-indicators {
  //    background-color: red;
  //     // .mint-swipe-indicator {
  //     //   width: 8px !important;
  //     //   height: 8px !important;
  //     //   border-radius: 50% !important;
  //     //   background-color: #E5E5E5 !important;

  //     //   &.is-active {
  //     //     background-color: #FED54A;
  //     //   }
  //     // }
  //   }

  .goods_swipe {
    height: 240px;
    margin: 38px;
    .mint-swipe-indicator.is-active {
      color: @activeColor;
    }
    .el_swipe_slide {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .el_left {
        img {
          width: 164px;
          height: 84px;
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
        background-color: #fff;
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
        line-height: 56px;
        color: #fff;
        text-align: center;
        background-color: #F37435;
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
