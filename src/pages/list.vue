<template>
  <div id="clist">
    <mt-swipe :auto="4000" class="lun-bo">
      <mt-swipe-item>
        <img src="../assets/images/1.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/2.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/3.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/4.png" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="amz-ou-watch">
      <img src="../assets/images/amz-ou-watch.png" alt="">
    </div>
    <div class="activity-top">
      <img src="../assets/images/activity.gif" alt="">
    </div>
    <div class="activity-list-container">
      <router-link :to="{path:`/detail/${v.id}`, query:{source:$route.query.source}}" class="c" v-for="(v, i) in best"
                   :key="i">
        <div class="activity-list-item">
          <div class="list">
            <div class="cover">
              <img v-lazy="v.cover" alt="">
            </div>

            <div class="price">
              <div class="title">{{v.name}}</div>
              <div class="price-desc-container">
                <div class="price-desc">√原价：<span>{{v.original_price}}</span></div>
                <div class="price-desc">√折扣：{{v.discount}}</div>

                <div class="price-desc">√节省：{{v.original_price - v.price}}</div>
              </div>
              <div class="today-price-container clear">
                <div>今日特价</div>
                <div>¥{{v.price}}</div>
              </div>
            </div>
          </div>
          <div class="rushBuy">立即抢购</div>
        </div>
      </router-link>

      <div v-for="(m, n) in brands">
        <div class="brandName">
          <div></div>
          <span>{{m.name}}</span>
          <div></div>
        </div>
        <router-link :to="{path:`/detail/${v.id}`, query:{source:$route.query.source}}" v-for="(v, l) in m.list"
                     class="c" :key="l">
          <div class="activity-list-item">
            <div class="list">
              <div class="cover">
                <img v-lazy="v.cover" alt="">
              </div>
              <div class="price">
                <div class="title">{{v.name}}</div>
                <div class="price-desc-container">
                  <div class="price-desc">√原价：<span>{{v.original_price}}</span></div>
                  <div class="price-desc">√折扣：{{v.discount}}</div>

                  <div class="price-desc">√节省：{{v.original_price - v.price}}</div>
                </div>
                <div class="today-price-container clear">
                  <div>今日特价</div>
                  <div>¥{{v.price}}</div>
                </div>
              </div>
            </div>
            <div class="rushBuy">立即抢购</div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="try">
      <img src="../assets/images/try.gif" alt="">
    </div>
    <div class="discount">
      <img src="../assets/images/discount.png" alt="">
    </div>
    <div class="risk">
      <img src="../assets/images/risk.png" alt="">
    </div>
    <div class="care-free-shopping">
      <img src="../assets/images/care-free-shop.png" alt="">
    </div>
    <div class="quality-testing">
      <img src="../assets/images/quality-testing.png" alt="">
    </div>
    <div class="brand-authorization">
      <img src="../assets/images/brand-authorization.png" alt="">
    </div>
  </div>
</template>

<script>
  import {list, write} from '../ajaxApi.js'
  import {Indicator} from 'mint-ui';

  export default {
    name: "list",
    data() {
      return {
        best: [],
        brands: []
      }
    },
    methods: {
      backTop() {
        let c = document.getElementById('clist')
        c.scrollIntoView()
      }
    },
    //todo 节省
    mounted() {
      document.title = '欧表国际【1折】限时秒杀'
      this.$nextTick(() => {
        this.backTop()
      })
      Indicator.open();
      list().then(res => {
        Indicator.close();
        this.best = res.data.best
        this.brands = res.data.brands
      })
      write({id: 10001})
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .brandName {
    text-align: center;
    color: #fff;
    font-size: 28px;
    margin: 10px 25px 25px;
    display: flex;
    align-items: center;

    span {
      margin: 0 20px;
    }

    > div {
      flex: 12px;
      height: 2px;
      background: rgba(255, 255, 255, 0.1);
    }
  }

  .lun-bo {
    height: 420px;

    img {
      width: 100%;
      display: block;
    }
  }

  .amz-ou-watch {
    img {
      width: 100%;
      display: block;
    }
  }

  .activity-top {
    img {
      width: 100%;
      display: block;
    }
  }

  .try, .risk, .discount, .care-free-shopping, .quality-testing, .brand-authorization {
    img {
      width: 100%;
      display: block;
    }
  }

  .activity-list-container {
    .c {
      height: 408px;
      display: inline-block;
    }

    background-color: #44138d;

    .activity-list-item {
      position: relative;

      .rushBuy {
        background-color: blue;
        position: absolute;
        padding: 15px 38px;
        border-radius: 50px;
        left: 50%;
        transform: translateX(-50%);
        bottom: -27px;
        font-size: 32px;
        letter-spacing: 2px;
        font-weight: bolder;
        background-image: -webkit-linear-gradient(to bottom right, #fa1755, #8e32c6);
        background-image: -moz-linear-gradient(to bottom right, #fa1755, #8e32c6);
        background-image: linear-gradient(to bottom right, #fa1755, #8e32c6);
        animation: rushBuy 0.5s infinite linear;
        @keyframes rushBuy {
          from {
            color: #fff136;
          }
          to {
            color: #fff;
          }
        }
      }

      height: 358px;
      background-color: #fff;
      box-sizing: border-box;
      margin: 0 18px 0;
      padding: 12px;
      border-radius: 60px;
      background-image: -webkit-linear-gradient(to bottom right, #fa1755, #8e32c6);
      background-image: -moz-linear-gradient(to bottom right, #fa1755, #8e32c6);
      background-image: linear-gradient(to bottom right, #fa1755, #8e32c6);

      .list {
        border-radius: 60px;
        height: 100%;
        background-color: #fff;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        overflow: hidden;
        .cover {
          width: 280px;
          height: 280px;
          margin-left: 20px;
          margin-right: 10px;
          /*margin-right: 50px;*/
          /*margin-left: 60px;*/
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            max-width: 100%;
            max-height: 100%;
          }
        }

        .price {
          flex: 1;
          height: 100%;
          padding: 28px 7.5px 0 0;
          box-sizing: border-box;

          .title {
            color: #53038a;
            font-size: 32px;
            font-weight: bold;
            line-height: 42px;
            letter-spacing: 3px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical; /*伸缩盒子的子元素排列：从上到下*/
            /* autoprefixer: on */
          }

          .price-desc-container {
            margin: 10px 0;
            padding-left: 22.5px;

            .price-desc {
              &:nth-of-type(1) {
                span {
                  text-decoration: line-through;
                  font-weight: bolder;
                  vertical-align: middle;
                }
              }

              color: #53038a;
              font-size: 30px;
              font-weight: bold;
              margin: 7.5px 0;
            }
          }

        }

        .today-price-container {
          height: 60px;
          border-radius: 15px;
          overflow: hidden;
          display: inline-block;

          > div {
            float: left;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            padding: 0 20px;

            &:nth-of-type(1) {
              background-color: #53038a;
              color: #fff;
              /*letter-spacing: 3px;*/
            }

            &:nth-of-type(2) {
              color: #53038a;
              background-color: #fff136;
              font-weight: bolder;
            }
          }
        }
      }
    }
  }

</style>
