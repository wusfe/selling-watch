<template>
  <div class="details" id="page-top">
    <div class="el_session el_sessionHeader">
      <img v-bind:src="item" v-bind:key="item" v-for="item in goods.cover_imgs"/>

            <router-link :to="{path:`/order_search`, query:{source:$route.query.source}}">
                  <img class="ic_order" src="https://jzy-ebuy.oss-cn-shenzhen.aliyuncs.com/v2/detail/ic_order%403x.png" v-on:click="orderClick">

            </router-link>
    </div>
    <div class="el_session el_sessionTitle">
      <div>
        <div class="el_price">
          <span>￥{{ goods.price }}</span>
          <span class="el_price_o">￥ {{goods.original_price}}</span>
        </div>
        <div class="el_sold">已售：{{ goods.sold_num }}</div>
      </div>
      <div>
        <div class="el_timeTitle">活动倒计时</div>
        <div class="el_time">{{ time }}</div>
      </div>
    </div>
    <div class="el_session el_sessionName">
      {{ goods.name}}
    </div>
    <div class="el_session el_sessionTip">
      <img src="https://jzy-ebuy.oss-cn-shenzhen.aliyuncs.com/v2/detail/img_post%403x.png"/>
    </div>
    <div class="el_session">
      <img src="https://jzy-ebuy.oss-cn-shenzhen.aliyuncs.com/v2/detail/img_process%403x.png"/>
    </div>
    <div class="el_session">
      <div class="el_session_header">
        <div class="el_session_left"></div>
        <div class="el_session_center">商品描述</div>
        <div class="el_session_right"></div>
      </div>
    </div>
    <div class="el_session">
      <img v-bind:src="item.val" v-bind:key="item" v-for="item in goods.desc_items"/>
    </div>
    <div class="el_session" id="goto-order">
        <div class="el_session_header">
          <div class="el_session_left"></div>
          <div class="el_session_center">订单详情</div>
          <div class="el_session_right"></div>
        </div>
        <div id="order-details" style="border: 1px solid #e1e1e1">
          <div class="el_session_content">
            <div class="el_content_side">
              <img v-bind:src="item" v-bind:key="item" v-for="item in goods.cover_imgs"/>
            </div>
            <div class="el_content_side el_content_sideR">
              <div class="el_price">￥{{ goods.price }}</div>
              <div class="el_priceTxt">{{ goods.name}}</div>
            </div>
          </div>
          <div class="el_session_block">
            <div class="el_block_title">颜色分类</div>
            <ul class="color-list">
              <li v-bind:class="{ 'el_color': true, active: (item == searchData.color) }" v-bind:key="item" v-for="item in goods.color" v-on:click="changeColor(item)">
                <img v-bind:src="item" v-bind:key="item" v-for="item in goods.cover_imgs"/>
                <div class="el_option">{{ item }}</div>
              </li>
            </ul>
          </div>
          <div class="el_session_block">
            <div class="el_block_title">尺码</div>
            <ul>
              <li v-bind:class="{ 'el_li el_liD': true, active: (item == searchData.size) }" v-bind:key="item" v-for="item in goods.size" v-on:click="changeSize(item)">
                <div class="el_optionD">{{ item }}</div>
              </li>
            </ul>
          </div>
          <div class="el_session_block flex">
            <div style="font-size:15px;line-height:40px;">购买数量</div>
            <div class="flex flex-pack-center flex-1">
                    <m-input  class=" hide-label" type="number" @changeOrderNum="changeOrderNum"></m-input>
            </div>
            <div style="font-size:12px;line-height:40px;">应付价格<span style="color:#ff7400"> ￥{{price?price:'--'}}</span></div>
              <!--<div class="el_block_right">
                <img class="el_num" src="../assets/img/ic_reduce.png"/>
                <div class="el_numC">{{ searchData.buy_num }}</div>
                <img class="el_num" src="../assets/img/ic_plus.png"/>
              </div>-->
          </div>
          <div class="el_session el_sessionOrder">
            <div class="el_left">
              <span class="el_title">您的姓名</span>
              <span class="el_require">*</span>
            </div>
            <div class="el_right">
              <input class="el-input__inner" v-model="searchData.receiver" placeholder="请输入您的姓名"/>
            </div>
          </div>
          <div class="el_session el_sessionOrder">
            <div class="el_left">
              <span class="el_title">手机号码</span>
              <span class="el_require">*</span>
            </div>
            <div class="el_right">
              <input class="el-input__inner"  v-model="searchData.tel" placeholder="请输入您的手机号码"/>
              <div class="el_side">
                <input class="el-input__inner" v-model="searchData.v_code" placeholder="请输入验证码"/>
                <div v-if="count_down == 60" class="el_button" v-on:click="sendCode">获取验证码</div>
                <div v-if="count_down != 60" class="el_button" > {{count_down }}后重新获取</div>
              </div>
            </div>
          </div>
          <div class="el_session el_sessionOrder">
            <div class="el_left">
              <span class="el_title">选择地区</span>
              <span class="el_require">*</span>
            </div>
            <div class="el_right">
              <m-input type="select" @changeArea="changeArea"></m-input>
            </div>
          </div>
          <div class="el_session el_sessionOrder">
            <div class="el_left">
              <span class="el_title">详细地址</span>
              <span class="el_require">*</span>
            </div>
            <div class="el_right">
              <input class="el-textarea__inner" v-model="searchData.addr" placeholder="请输入您的详细地址"/>
            </div>
          </div>
          <div class="el_session el_sessionOrder">
            <div class="el_left">
              <span class="el_title">留言备注</span>
            </div>
            <div class="el_right">
              <input class="el-textarea__inner" v-model="searchData.remark" placeholder="请输入您的留言"/>
            </div>
          </div>
          <div class="el_session el_sessionOrder" style="display:-webkit-flex">
            <div class="el_left">
              <span class="el_title">支付方式</span>
            </div>

            <div style="width:auto" class="el_right el_pay">
              <img class="el_icon" src="https://jzy-ebuy.oss-cn-shenzhen.aliyuncs.com/v2/detail/ic_truck%403x.png"/>
              <div  class="el_iconPay">货到付款</div>
            </div>
            <div class="flex-1"></div>
          </div>
          <div class="el_session el_sessionPay">
            <div class="el-payButton" v-on:click="submit">提交订单</div>
          </div>
        </div>
      </div>
    <div v-if="showBottom">
      <div class="el_footer">
        <router-link :to="{path:`/`, query:{source:$route.query.source}}">
          <div style="border-right: 1px solid #e1e1e1" class="el_home" v-on:click="homeClick">
            <img style="position:relative;top:5px" src="https://jzy-ebuy.oss-cn-shenzhen.aliyuncs.com/v2/detail/ic-home%403x.png"/>
          </div>
        </router-link>
        <a class="el_call" href="tel:13282722159" v-on:click="telClick">电话咨询</a>
        <a href="#goto-order" class="el_pay_button" v-on:click="rightOrder">立即下单</a>
      </div>
      <div class="fadein clear" id="fadein">
        <img src="../assets/images/x1.png" alt="" class="float-left x1">
        <span clasa="msg">{{msg}}</span>
        <img src="../assets/images/x2.png" alt="" class="float-right x2">
      </div>
      <a href="#page-top" class="page-top" v-on:click="pageTopClick">
        <img src="https://jzy-ebuy.oss-cn-shenzhen.aliyuncs.com/v2/detail/ic-top%403x.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  import mInput from "@/components/m-input"
  import {details, orderRedis, order, write} from '../ajaxApi'
  import {dealTime} from '../utils/tools'
  import {Toast, Indicator} from 'mint-ui'

  const phone_reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;

  export default {
    data() {
      return {
      showBottom: true,
        msg: '',
        newest: [],
        goods: {},
        newest: [],
        show_orders: [],
        time: '00:00:00',
        count_down_timer: null,
        count_down: 60,
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
          size: '',
          v_code: ''
        }
      }
    },
    components: {
      mInput
    },
    computed:{


    },
    watch: {},
    created() {
    },
    mounted() {
      const goods_id = this.$route.params.id
      this.searchData.source = this.$route.query.source
      this.searchData.goods_id = goods_id


      if(goods_id){
        details(goods_id).then(res => {
          if(res.respond == 1){
            this.goods = res.data.goods
            this.newest = res.data.newest
            this.show_orders = res.data.show_orders


            this.searchData.color = this.goods.color ? this.goods.color[0] : ''

            console.log('goods', this.goods)
            if (res.data.newest.length) {
              this.newest = res.data.newest
            }
            // this.moveList(50)
            this.toastFadein()
            let t = res.data.goods.remaining_sec
            document.title = res.data.goods.name
            this.price = (this.goods.price * this.searchData.buy_num).toFixed(2)
            this.timer = setInterval(() => {
              if (t === 0) {
                clearInterval(s)
                this.time = '00:00:00'
              } else {
                t -= 1
                this.time = dealTime(t)
              }
            }, 1000)
          }

        })
      }
      write({id: 10002, goods_id})
      var _t = this;
      window.addEventListener('scroll', function() {
          if(Number(document.getElementById('order-details').offsetTop)  < Number(document.documentElement.scrollTop)){
            _t.showBottom = false
          } else {
            _t.showBottom = true
          }

       })
    },
    methods: {
      changeNum(){
        alert(3)
      },
      changeColor(color){
        this.searchData.color = (color == this.searchData.color) ? '' : color
      },
      changeSize(size){
      var _this = this;

        this.searchData.size = (size == this.searchData.size) ? '' : size;
          _this.price = (_this.goods.price * Number(document.getElementById('inputVal').value)).toFixed(2);

      },
      setMsg() {
        this.msg = '最新订单来自' + this.newest[0].province + this.newest[0].name + this.newest[0].phone
        let shift = this.newest[0]
        this.newest.shift()
        this.newest.push(shift)
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
      changeOrderNum(n) {
        this.price = (this.goods.price * n).toFixed(2)
        //todo 购买数量
        this.searchData.buy_num = n
      },
      sendCode(){

        if(this.count_down_timer) return;

        if(this.searchData.tel){
          if(!phone_reg.test(this.searchData.tel)){
            Toast({
              message: '请输入正确的手机号',
              position: 'middle',
              duration: 1000
            })
            return
          }
          orderRedis(this.searchData.tel).then(res => {
            if(res.respond == 1){
              this.countDown()
              console.log(res)
            }
          })
        }
      },
      countDown(){
        this.count_down_timer = setInterval(() => {
          if(this.count_down < 1){
            this.count_down = 60;
            clearInterval(this.count_down_timer)
            this.count_down_timer = null
          }else{
            --this.count_down
          }
        }, 1000)
      },
      changeArea(n) {
        this.searchData.province = n[0]
        this.searchData.city = n[1]
        this.searchData.area = n[2]
      },
      submit() {
        const phone_reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
        // const phone_reg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;

        write({id: 10007, goods_id: this.searchData.goods_id, params: this.searchData})
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
            }).catch(error => {
              Indicator.close()
              if(error.data && error.data.message && error.data.errorCode == 'won05'){
                Toast({
                  message: '验证码错误！',
                  position: 'middle',
                  duration: 1000
                });
              }
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
      rightOrder() {
        write({id: 10003, goods_id: this.searchData.goods_id })
        return false
      },
      telClick(){
        write({id: 10004})
        return false
      },
      homeClick(){
        write({id: 10005})
        return false
      },
      orderClick(){
        write({id: 10006})
        return false
      },
      pageTopClick(){
        return false
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../style/commom.less";
  @import "../style/commom.css";

  .page-top{
    position: fixed;
    right: 30px;
    bottom: 160px;
    width: 100px;
    height: 100px;
    border-radius: 50%;

     background-color: transparent;
    /* 1 */
    -webkit-text-decoration-skip: objects;

    -webkit-tap-highlight-color:#fff;
    /* 2 */

    &:active, &:visited, &:hover{
      background-color: #fff;
    }
  }

  .el-textarea__inner{
    font-size: 24px;
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

  .color-list{
    display: flex;
    flex-wrap: wrap;
  }

  .el_color{
    margin: 6px;
    display: flex;
    flex-shrink: 0;
    text-align: center;
    box-sizing: border-box;
    line-height: 68px;
    font-size: 24px;
    background-color: #ececec;

    img{
      height: 68px;
    }

    .el_option{
      width: 120px;
    }
  }

  .el_li{
    // margin: 0 !important;
    padding: 0 !important;
    width: 90px;
    background-color: #ececec;
    text-align: center;
    line-height: 68px;
  }
  .active{
    border: 1px solid #F37435 !important;
    background-color: #F37435;
    color: #fff;
  }

  .details {
    background-color: @bgColor;
    padding-bottom:80px;
  }

  .el_session {
    background-color: @witheColor;
    padding: 0 38px;
  }

  .el_sessionHeader {
    // height: 938px;
    position: relative;
    padding: 0;
    font-size: 0;
    .ic_order {
      position: absolute;
      top: 125px;
      right: 0;
      width: 111px;
      height: 67px;
    }
  }

  .el_sessionTitle {
    padding: 21px 33px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, rgba(253, 200, 48, 1) 0%, rgba(243, 115, 53, 1) 100%);
    .el_price {
      font-size: 33px;
      color: @witheColor;
      line-height: 38px;
      .el_price_o {
        font-size: 27px;
        color: @witheColor;
        line-height: 31px;
        text-decoration: line-through;
      }
    }
    .el_sold {
      margin-top: 10px;
      width: 163px;
      text-align: center;
      font-size: 25px;
      color: @activeColor;
      line-height: 34px;
      border-radius: 30px;
      background-color: @witheColor;
    }
    .el_timeTitle {
      font-size: 33px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 33px;
    }
    .el_time {
      text-align: center;
      margin-top: 10px;
      font-size: 29px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 33px;
    }
  }

  .el_sessionName {
    padding: 35px 34px;
    font-size: 29px;
    color: @titleColor;
    line-height: 42px;
  }

  .el_sessionTip {
    margin: 5px 0;
    padding: 34px 38px;
  }

  .el_session_header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 62px 0;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 20px;
    .el_content_side {
      width: 50%;
      text-align: center;
      img {
        width: 313px;
        height: 250px;
      }
      .el_price {
        font-size: 33px;
        color: @activeColor;
        line-height: 47px;
        margin-bottom: 27px;
      }
      .el_priceTxt {
        font-size: 27px;
        color: @titleColor;
        line-height: 39px;
        padding-left: 10px;
      }
    }
    .el_content_sideR {
      text-align: left;
      padding-left: 42px;
    }
  }

  .el_session_block {
    margin: 5px 20px;
    padding: 23px 0;
    border-bottom: 1px solid @borderBottomColor;
    .el_block_title {
      font-size: 27px;
      line-height: 39px;
      padding: 21px 0;
    }
    ul {
      overflow: hidden;
      .el_li {
        padding: 17px 32px;
        height: 68px;
        line-height: 68px;
        float: left;
        // display: flex;
        // align-items: center;
        justify-content: space-between;
        border: 1px solid @borderColor;
        margin: 0 32px 21px 0;
        &:last-child {
          margin-right: 0px;
        }
        img {
          width: 52px;
          height: 52px;
          margin-right: 24px;
        }
        .el_option {
          font-size: 25px;
          font-weight: 400;
          line-height: 34px;
        }
        .el_optionD {
          font-size: 25px;
          font-weight: 400;
          // line-height: 34px;
        }
      }
      .el_liD {
        margin: 0 18px 21px 0;
      }
    }

  }

  .el_session_side {
    margin: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid @borderBottomColor;
    padding: 25px 0;
    .el_block_left {
      font-size: 27px;
      line-height: 39px;
      padding: 21px 0;
    }
    .el_block_right {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .el_num {
        width: 44px;
        height: 44px;
      }
      .el_numC {
        padding: 4px 10px;
        margin: 0 12px;
        font-size: 28px;
        line-height: 39px;
        color: @titleColor;
        border: 2px solid @borderColor;
      }
    }

  }

  .el_sessionOrder {
    display: flex;
    // align-items: center;
    justify-content: space-between;
    padding: 25px 38px 0 38px;
    .el_left {
      width: 25%;
      .el_require {
        font-size: 27px;
        color: @activeColor;
        line-height: 39px;
      }
      .el_title {
        font-size: 27px;
        line-height: 39px;
      }
    }
    .el_right {
      width: 75%;
    }
    .el_side {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin:10px 0;
      .el-input__inner {
        width: 40%;
      }
      .el_button {
        font-size: 27px;
        color: @activeColor;
        line-height: 50px;
        padding:10px 21px;
        margin:10px 5px;
        border: 2px solid @borderColor;
        width:60%;
        text-align:center;
      }
    }
    .el_pay{
      width: 40%;
      font-size:25px;
      color:@witheColor;
      background-color: @activeColor;
      padding: 17px;
      line-height:25px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .el_icon{
        width: 39px;
        height: 33px;
        margin-right: 17px;
      }
    }
  }
  .el_sessionPay{
    padding: 73px 38px;
    .el-payButton{
      text-align: center;
      height:75px;
      background:linear-gradient(90deg,rgba(253,200,48,1) 0%,rgba(243,115,53,1) 100%);
      border-radius:38px;
      font-size:33px;
      font-weight:500;
      color:@witheColor;
      line-height:75px;
    }
  }

  .el_footer{
    height: 102px;
    line-height: 102px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size:33px;
    text-align: center;
    background-color: @witheColor;
    box-shadow:0px -2px 4px 0px rgba(0,0,0,0.1);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    .el_home{
      width: 115px;
      text-align: center;
      img{
        width: 48px;
        height: 45px;
      }
    }
    .el_call{
      color:@activeColor;
      width: 40%;
    }
    .el_pay_button{
      width: 70%;
      color:@witheColor;
      background:linear-gradient(270deg,rgba(243,116,53,1) 0%,rgba(252,187,49,1) 100%);
    }

  }
</style>
