<template>
  <div class="details">
    <div class="el_session el_sessionHeader">
      <img src="../assets/img/ic_shoes_details.png"/>
      <img class="ic_order" src="../assets/img/ic_order.png">
    </div>
    <div class="el_session el_sessionTitle">
      <div>
        <div class="el_price">
          <span>￥689.00</span>
          <span class="el_price_o">￥1560</span>
        </div>
        <div class="el_sold">已售：762</div>
      </div>
      <div>
        <div class="el_timeTitle">活动倒计时</div>
        <div class="el_time">23:51:26</div>
      </div>
    </div>
    <div class="el_session el_sessionName">
      阿迪达斯Adidas yeezy boost 350v2侃爷椰子白满天 星男女跑鞋
    </div>
    <div class="el_session el_sessionTip">
      <img src="../assets/img/ic_tip.png"/>
    </div>
    <div class="el_session">
      <img src="../assets/img/ic_instructions.png"/>
    </div>
    <div class="el_session">
      <img src="../assets/img/ic_describe.png"/>
    </div>
    <div class="el_session">
      <div class="el_session_header">
        <div class="el_session_left"></div>
        <div class="el_session_center">立即下单</div>
        <div class="el_session_right"></div>
      </div>
      <div class="el_session_content">
        <div class="el_content_side">
          <img src="../assets/img/ic_nike.png"/>
        </div>
        <div class="el_content_side el_content_sideR">
          <div class="el_price">￥963.00</div>
          <div class="el_priceTxt">选择颜色分类；尺码</div>
        </div>
      </div>
      <div class="el_session_block">
        <div class="el_block_title">颜色分类</div>
        <ul>
          <li class="el_li" v-for="i in 3">
            <img src="../assets/img/ic_nike.png"/>
            <div class="el_option">粉色</div>
          </li>
        </ul>
      </div>
      <div class="el_session_block">
        <div class="el_block_title">尺码</div>
        <ul>
          <li class="el_li el_liD" v-for="i in 12">
            <div class="el_optionD">35.5</div>
          </li>
        </ul>
      </div>
      <div class="el_session_side">
        <div class="el_block_left">购买数量</div>
        <div class="el_block_right">
          <img class="el_num" src="../assets/img/ic_reduce.png"/>
          <div class="el_numC">1222</div>
          <img class="el_num" src="../assets/img/ic_plus.png"/>
        </div>
      </div>
    </div>

    <div class="el_session el_sessionOrder">
      <div class="el_left">
        <span class="el_require">*</span>
        <span class="el_title">您的姓名</span>
      </div>
      <div class="el_right">
        <input class="el-input__inner" placeholder="请输入您的姓名"/>
      </div>
    </div>
    <div class="el_session el_sessionOrder">
      <div class="el_left">
        <span class="el_require">*</span>
        <span class="el_title">手机号码</span>
      </div>
      <div class="el_right">
        <input class="el-input__inner" placeholder="请输入您的手机号码"/>
        <div class="el_side">
          <input class="el-input__inner" placeholder="请输入验证码"/>
          <div class="el_button">获取验证码</div>
        </div>
      </div>
    </div>
    <div class="el_session el_sessionOrder">
      <div class="el_left">
        <span class="el_require">*</span>
        <span class="el_title">选择地区</span>
      </div>
      <div class="el_right">
        <input class="el-input__inner" placeholder="请输入您的姓名"/>
      </div>
    </div>
    <div class="el_session el_sessionOrder">
      <div class="el_left">
        <span class="el_require">*</span>
        <span class="el_title">详细地址</span>
      </div>
      <div class="el_right">
        <textarea class="el-textarea__inner" placeholder="请输入您的详细地址"/>
      </div>
    </div>
    <div class="el_session el_sessionOrder">
      <div class="el_left">
        <span class="el_title">留言备注</span>
      </div>
      <div class="el_right">
        <textarea class="el-textarea__inner" placeholder="请输入您的详细地址"/>
      </div>
    </div>
    <div class="el_session el_sessionOrder">
      <div class="el_left">
        <span class="el_title">支付方式</span>
      </div>
      <div class="el_right el_pay">
       <img class="el_icon" src="../assets/img/ic_truck.png"/>
        <div  class="el_iconPay">货到付款</div>
      </div>
    </div>
    <div class="el_session el_sessionPay">
      <div class="el-payButton">立即下单</div>
    </div>

    <div class="el_footer">
        <div class="el_home">
          <img src="../assets/img/ic_home.png"/>
        </div>
      <div class="el_call">电话咨询</div>
      <div class="el_pay_button">立即下单</div>
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

  .details {
    background-color: @bgColor;
    padding-bottom:80px;
  }

  .el_session {
    background-color: @witheColor;
    padding: 0 38px;
  }

  .el_sessionHeader {
    height: 938px;
    padding: 0;
    position: relative;
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
        float: left;
        display: flex;
        align-items: center;
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
          line-height: 34px;
        }
      }
      .el_liD {
        margin: 0 18px 21px 0;
      }
    }

  }

  .el_session_side {
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
    align-items: center;
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
        width: 60%;
      }
      .el_button {
        font-size: 27px;
        color: @activeColor;
        line-height: 39px;
        padding:10px 21px;
        margin:10px 5px;
        border: 2px solid @borderColor;
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
      width: 40%;
      color:@witheColor;
      background:linear-gradient(270deg,rgba(243,116,53,1) 0%,rgba(252,187,49,1) 100%);
    }
  }

</style>
