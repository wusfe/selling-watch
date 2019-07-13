<template>
  <div id="contain">
    <div class="detail-top" id="detail-top">
      <h1>{{goods.name}}</h1>
    </div>
    <div class="line">
      <div class="line-desc">商品图片</div>
    </div>
    <mt-swipe :auto="4000" class="lun-bo">
      <mt-swipe-item v-for="(v, i) in goods.cover_imgs" :key="i">
        <img v-lazy="v" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!--限时抢购-->
    <div class="line">
      <div class="line-desc">限时抢购</div>
    </div>
    <div class="rush-buy">
      <div class="price-detail-container">
        <div class="price">¥<span>{{goods.price}}</span></div>
        <div class="price-old">
          <div>¥{{goods.original_price}}</div>
          <div>已售:{{goods.sold_num}}</div>
        </div>
      </div>
      <div class="time">
        <div>活动倒计时</div>
        <div>{{time}}</div>
      </div>
    </div>
    <a class="right-now-tobuy" href="#order" @click="rightOrder">立即抢购</a>
    <div class="line">
      <div class="line-desc">商品描述</div>
    </div>
    <div class="desc-items">
      <div class="activity-title"> ▼ 活动说明</div>
      <template v-for="(v, i) in goods.desc_items">
        <p v-if="v.type==='txt'">{{i+1 + '.'}}{{v.val}}</p>
        <div class="img" v-else-if="v.type==='img'">
          <img v-lazy="v.val" alt="">
        </div>
      </template>
      <div class="line" id="order">
        <div class="line-desc">立即下单</div>
      </div>
      <m-input label="订购数量" type="number" @changeOrderNum="changeOrderNum"></m-input>
      <m-input label="订单总价" type="">
        <span slot="content"><span class="order-c">￥</span><strong class="order-p">{{price}}</strong></span>
      </m-input>
      <m-input label="您的姓名" :cnt.sync="searchData.receiver"></m-input>
      <m-input label="手机号码" :cnt.sync="searchData.tel"></m-input>
      <m-input label="商品颜色" :cnt.sync="searchData.color" type="selectInput" noValue="选择颜色" :options="goods.color"
               v-if="goods.color && goods.color.length"></m-input>
      <m-input label="商品尺码" :cnt.sync="searchData.size" type="selectInput" no-value="选择尺码" :options="goods.size"
               v-if="goods.size && goods.size.length">>
      </m-input>
      <m-input label="选择地区" type="select" @changeArea="changeArea"></m-input>
      <m-input label="详细地址" type="textarea" required areatextRow="2" :textarea.sync="searchData.addr"></m-input>
      <m-input label="留言备注" type="textarea" areatextRow="2" :textarea.sync="searchData.remark"></m-input>
      <m-input label="支付方式" type="paymentmethod"></m-input>
      <div class="submit" @click="submit">确认提交</div>
      <div class="orders-item" v-if="show_orders.length">
        <ul id="orders-list">
          <li v-for="(v, i) in show_orders" :key="i">
            <div class="clear">
              <span class="float-left">{{v.name}}{{v.phone}}</span>
              <span class="float-right adress">{{v.province}}</span>
            </div>
            <div class="clear">
              <span class="float-right orderTime">{{v.time}}</span>
              <span>{{v.goods_name}}</span>
            </div>
          </li>
        </ul>
        <ul>
          <li v-for="(v, i) in show_orders" :key="i">
            <div class="clear">
              <span class="float-left">{{v.name}}{{v.phone}}</span>
              <span class="float-right adress">{{v.province}}</span>
            </div>
            <div class="clear">
              <span class="float-right orderTime">{{v.time}}</span>
              <span>{{v.goods_name}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="fadein clear" id="fadein">
      <img src="../assets/images/x1.png" alt="" class="float-left x1">
      <span clasa="msg">{{msg}}</span>
      <img src="../assets/images/x2.png" alt="" class="float-right x2">
    </div>

    <div class="foot-nav">
      <span @click="backTop">Top</span>
      <div>
        <!--          <router-link :to="{path:`/`, query:{source:$route.query.source}}" @click.native="backToHome" tag="span">返回首页</router-link>-->
        <span @click="openWeixin" class="wx">微信咨询
                <img src="../assets/images/code.jpg" alt="" class="code" v-if="showWx">
          </span>
        <a href="#order" class="rightAway" @click="rightOrder">立即下单</a>
      </div>
    </div>

  </div>
</template>

<script>
  import mInput from "@/components/m-input"
  import {details, order, write} from '../ajaxApi.js'
  import {dealTime} from '../utils/tools'
  import {Toast, Indicator} from 'mint-ui';

  export default {
    name: "detail",
    components: {
      mInput
    },
    data() {
      return {
        showWx: false,
        number: 1,
        unitPrice: '',
        price: '',
        msg: '',
        newest: [],
        goods: {},
        show_orders: [],
        time: '00:00:00',
        searchData: {
          goods_id: '',
          source: '',
          receiver: '',
          province: '',
          city: '',
          area: '',
          addr: '',
          tel: '',
          buy_num: 1,
          remark: '',
          color: '',
          size: ''
        }
      }
    },
    methods: {
      changeOrderNum(n) {
        this.price = (this.unitPrice * n).toFixed(2)
        //todo 购买数量
        this.searchData.buy_num = n
      },
      setMsg() {
        this.msg = '最新订单来自' + this.newest[0].province + this.newest[0].name + this.newest[0].phone
        let shift = this.newest[0]
        this.newest.shift()
        this.newest.push(shift)
      },
      getAttribute(target, attribute) {
        if (target.currentStyle) {
          //IE、Opera
          let k = target.currentStyle[attribute]
          if (k.indexOf('px') >= 0) {
            return Number(target.currentStyle[attribute].replace('px', ''))
          } else {
            return k
          }
        } else {
          //FF、chrome、safari
          let k = getComputedStyle(target, false)[attribute]
          if (k.indexOf('px') >= 0) {
            return Number(getComputedStyle(target, false)[attribute].replace('px', ''))
          } else {
            return k
          }
        }
      },
      moveList(interval = 10) {
        let z = () => {
          let s = setInterval(() => {
            var item = document.getElementById('orders-list')
            if (!item) {
              clearInterval(s)
              return
            }
            if (Math.abs(this.getAttribute(item, 'marginTop')) >= this.getAttribute(item, 'height')) {
              item.style.marginTop = 0 + 'px'
              clearInterval(s)
              z()
            } else {
              item.style.marginTop = this.getAttribute(item, 'marginTop') - 1 + 'px'
            }
          }, interval)
        }
        z()
      },
      toastFadein() {
        var that = this
        var toast = document.getElementById('fadein')
        if (!toast) {
          return
        }
        toast.style.display = 'block'
        //todo
        that.setMsg()
        // 速度
        //  1秒内进场
        let j = 5
        let jTimer = setInterval(() => {
          var toast = document.getElementById('fadein')
          if (!toast) {
            clearInterval(jTimer)
            return
          }
          let bottomPercent = this.getAttribute(toast, 'bottom') / window.innerHeight
          if (bottomPercent >= 0.7) {
            clearInterval(jTimer)
            //  停留2秒
            let zl = setTimeout(() => {
              // this.setMsg()
              clearTimeout(zl)
            }, 1000)
            let jjtime = setTimeout(() => {
              clearTimeout(jjtime)
              //  离场1秒
              let jjjtime = setInterval(() => {
                var toast = document.getElementById('fadein')
                if (!toast) {
                  clearInterval(jjjtime)
                  return
                }
                let b = this.getAttribute(toast, 'bottom') / window.innerHeight
                if (b >= 0.8) {
                  clearInterval(jjjtime)
                  toast.style.bottom = window.innerHeight * 0.5 + 'px'
                  // toast.style.display = 'none'
                  toast.style.opacity = 0
                  // 重复
                  let mn = setTimeout(() => {
                    clearTimeout(mn)
                    this.toastFadein()
                  }, 1000)
                } else {
                  let kl = (b - 0.7) / (0.8 - 0.7)
                  let opacityPercent = kl >= 1 ? 0 : 0.9 - kl
                  toast.style.bottom = this.getAttribute(toast, 'bottom') + 4 + 'px'
                  toast.style.opacity = opacityPercent
                }
              }, 20)
            }, 2000)
          } else {
            let opacityPercent = (bottomPercent - 0.5) / (0.7 - 0.5) >= 0.9 ? 0.9 : (bottomPercent - 0.5) / (0.7 - 0.5)
            toast.style.bottom = this.getAttribute(toast, 'bottom') + j + 'px'
            toast.style.opacity = opacityPercent
          }
        }, 20)
      },
      changeArea(n) {
        this.searchData.province = n[0]
        this.searchData.city = n[1]
        this.searchData.area = n[2]
      },
      submit() {
        const phone_reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        if (!this.searchData.receiver) {
         return Toast({
            message: '请填写你的姓名',
            position: 'middle',
            duration: 1000
          });
        }
        if (!this.searchData.tel) {
         return Toast({
            message: '请填写手机号码',
            position: 'middle',
            duration: 1000
          });
        }else {
          if(!phone_reg.test(this.searchData.tel)) {
            return Toast({
              message: '请填写正确手机号码',
              position: 'middle',
              duration: 1000
            });
          }
        }
        if (this.goods.color && this.goods.color.length) {
          if (!this.searchData.color) {
           return Toast({
              message: '请填写商品颜色',
              position: 'middle',
              duration: 1000
            });
          } else if (!this.searchData.size) {
           return Toast({
              message: '请填写商品尺码',
              position: 'middle',
              duration: 1000
            })
          } else if (!this.searchData.province) {
           return Toast({
              message: '请填写省份',
              position: 'middle',
              duration: 1000
            });
          } else if (!this.searchData.city) {
           return Toast({
              message: '请填写城市',
              position: 'middle',
              duration: 1000
            });
          } else if (!this.searchData.area) {
           return Toast({
              message: '请填写地区',
              position: 'middle',
              duration: 1000
            });
          } else if (!this.searchData.addr) {
           return Toast({
              message: '请填写详细地址',
              position: 'middle',
              duration: 1000
            });
          } else {
            Indicator.open()
            order(this.searchData).then(res => {
              Indicator.close()
              Toast({
                message: '下单成功',
                position: 'middle',
                duration: 1000
              });
              setTimeout(() => {
                sessionStorage.setItem('order', JSON.stringify(Object.assign({}, res.data, {id: this.searchData.goods_id})))
                this.$router.push({
                  path: '/order',
                  query: {
                    source: this.$route.query.source
                  }
                })
              }, 1000)
            })
          }
        } else if (!this.searchData.province) {
         return Toast({
            message: '请填写省份',
            position: 'middle',
            duration: 1000
          });
        } else if (!this.searchData.city) {
         return Toast({
            message: '请填写城市',
            position: 'middle',
            duration: 1000
          });
        } else if (!this.searchData.area) {
         return Toast({
            message: '请填写地区',
            position: 'middle',
            duration: 1000
          });
        } else if (!this.searchData.addr) {
         return Toast({
            message: '请填写详细地址',
            position: 'middle',
            duration: 1000
          });
        } else {
          Indicator.open()
          order(this.searchData).then(res => {
            Indicator.close()
            Toast({
              message: '下单成功',
              position: 'middle',
              duration: 1000
            });
            setTimeout(() => {
              sessionStorage.setItem('order', JSON.stringify(Object.assign({}, res.data, {id: this.searchData.goods_id})))
              this.$router.push({
                path: '/order',
                query: {
                  source: this.$route.query.source
                }
              })
            }, 1000)
          })
        }
      },
      backTop() {
        // document.documentElement.scrollTop = 0
        let c = document.getElementById('contain')
        c.scrollIntoView()
      },
      backToHome() {
        write({id: 10004})
      },
      openWeixin() {
        this.showWx = !this.showWx
      },
      rightOrder() {
        write({id: 10003})
        return false
      }
    },
    created() {
      this.$nextTick(() => {
        this.backTop()
      })
      let goods_id = this.$route.params.id
      Indicator.open()
      detail({goods_id}).then(res => {
        Indicator.close()
        this.goods = res.data.goods
        this.price = this.unitPrice = res.data.goods.price.toFixed(2)
        if (res.data.show_orders.length) {
          this.show_orders = res.data.show_orders
        }
        if (res.data.newest.length) {
          this.newest = res.data.newest
        }
        this.moveList(50)
        this.toastFadein()

        this.searchData.goods_id = res.data.goods.id

        let t = res.data.goods.remaining_sec
        document.title = res.data.goods.name
        this.timer = setInterval(() => {
          if (t === 0) {
            clearInterval(s)
            this.time = '00:00:00'
          } else {
            t -= 1
            this.time = dealTime(t)
          }


        }, 1000)
      })
      write({id: 10002})

    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer)
      }
    },
  }
</script>

<style scoped type="text/less" lang="less">
  .img {
    img {
      display: block;
      width: 100%;
    }
  }

  .detail-top {
    color: #fff;
    box-sizing: border-box;
    padding: 20px 40px;
    font-size: 31px;
    line-height: 58px;
    background: url("../assets/images/bg.jpg") no-repeat left top/ cover;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical; /*伸缩盒子的子元素排列：从上到下*/
    /* autoprefixer: on */
    font-weight: 900;
  }

  .line {
    border-bottom: 2px solid #ccc;

    .line-desc {
      box-sizing: border-box;
      font-size: 34px;
      position: relative;
      margin-left: 26px;
      padding: 26px 0 26px 20px;
      line-height: 1;
      color: #555;

      &:before {
        content: '';
        width: 6px;
        height: 35px;
        background: #EB5F3E;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);

      }
    }
  }

  .lun-bo {
    height: 625px;

    img {
      width: 100%;
      /*height: 625px;*/
      max-width: 100%;
      display: block;
      margin: 0 auto;
    }
  }

  .rush-buy {
    height: 108px;
    display: flex;

    .price-detail-container {
      height: 100%;
      background-color: #f61d4b;
      color: #fff;
      font-size: 28px;
      display: flex;
      align-items: center;
      padding-right: 30px;

      .price {
        span {
          font-size: 90px;
        }
      }

      .price-old {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-left: 4px;

        > div {
          &:nth-of-type(1) {
            font-size: 34px;
            text-decoration: line-through;
          }

          &:nth-of-type(2) {
            margin-top: 10px;
            background-color: #ca032e;
            padding: 8px;
            text-align: center;
          }
        }
      }
    }

    .time {
      flex: 1;
      height: 100%;
      background-color: #eee;
      text-align: center;
      font-size: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      > div {
        &:nth-of-type(1) {
          color: #f00;
        }

        &:nth-of-type(2) {
          color: #555;
          font-weight: bolder;
          margin-top: 8px;
        }
      }
    }
  }

  .right-now-tobuy {
    margin-top: 10px;
    background-color: #c60a1e;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
    font-size: 36px;
    letter-spacing: 2px;
  }

  .desc-items {
    margin: 0 20px 0 20px;
    padding-bottom: 110px;

    .order-c {
      font-size: 24px !important;
    }

    .order-p {
      font-size: 42px;
      color: #f60;
      font-weight: bold;
    }

    .activity-title {
      background-color: #EEE9E6;
      color: #6C594D;
      font-size: 36px;
      height: 60px;
      /*line-height: 60px;*/
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    p {
      font-size: 28px;
      color: rgb(85, 85, 85);
      line-height: 56px;
      vertical-align: middle;
    }
  }

  .submit {
    height: 92px;
    background-color: #D60810;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-top: 108px;
    font-size: 32.6px;
    margin-bottom: 20px;
  }

  .orders-item {
    height: 500px;
    padding: 0 14px;
    box-sizing: border-box;
    overflow: hidden;

    ul {
      min-height: 100%;
    }

    li {
      height: 200px;
      padding: 14px;
      box-sizing: border-box;
      font-size: 28px;
      border-bottom: 1px solid #ccc;
      color: #555;

      > div {
        line-height: 56px;
        height: 56px;
      }

      .adress {
        background-color: #D60810;
        color: #fff;
        padding: 2.8px 5.6px;
        border-radius: 5.6px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .orderTime {
        font-size: 24px;
        margin-left: 4px;
      }
    }
  }

  .fadein {
    position: fixed;
    left: 0;
    z-index: 9999;
    bottom: 50%;
    height: 80px;
    /*line-height: 80px;*/
    opacity: 0;
    display: none;

    img.x1 {
      width: 44px;
      border: 0;
    }

    img.x2 {
      width: 22px;
      border: 0;
    }

    span {
      float: left;
      background-color: #282828;
      color: #fff;
      font-size: 22px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .foot-nav {
    position: fixed;
    bottom: 0;
    height: 90px;
    width: 100%;
    left: 0;
    background-color: #D60810;
    display: flex;
    font-size: 28px;
    color: #fff;

    > span {
      width: 100px;
      height: 100%;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border-right: 2px dashed #f3f3f3;
      color: #fff;
      /*margin-right: 1px;*/
    }

    > div {
      height: 100%;
      flex: 1;
      display: flex;

      .wx {
        position: relative;
        .code {
          position: absolute;
          bottom: 92px;
          left: 50%;
          transform: translateX(-50%);
          /*width: 200px;*/
          height: 240px;
        }
      }

      > span, a {
        flex: 33.333%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        color: #fff;
        border-right: 2px dashed #f3f3f3;

        &.rightAway {
          border: 0;
        }
      }
    }
  }

</style>
