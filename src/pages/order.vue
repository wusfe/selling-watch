<template>
  <div class="order">
    <h1>
      <img src="../assets/images/success.png" alt="">
      提交成功
    </h1>
    <div class="order-inner">
      <ul>
        <li>
          <label>订单编号：</label>
          <span>{{orderDetail.order_no}}</span>
        </li>
        <li>
          <label>商品名称：</label>
          <span>{{orderDetail.goods_name}}</span>
        </li>
        <li>
          <label>订购数量：</label>
          <span>{{orderDetail.buy_num}}</span>
        </li>
        <li>
          <label>订购总价：</label>
          <span class="price">{{orderDetail.total_price}}</span>
        </li>
        <li>
          <label>您的姓名：</label>
          <span>{{orderDetail.receiver}}</span>
        </li>
        <li>
          <label>手机号码：</label>
          <span>{{orderDetail.tel}}</span>
        </li>
        <li>
          <label>商品颜色：</label>
          <span>{{orderDetail.color}}</span>
        </li>
        <li>
          <label>商品尺寸：</label>
          <span>{{orderDetail.size}}</span>
        </li>
        <li>
          <label>选择地区：</label>
          <span>{{orderDetail.province}} {{orderDetail.city}} {{orderDetail.area}}</span>
        </li>
        <li>
          <label>详细地址：</label>
          <span>{{orderDetail.addr}}</span>
        </li>
        <li>
          <label>留言备注：</label>
          <span>{{orderDetail.remark}}</span>
        </li>
        <li>
          <label>支付方式：</label>
          <span>货到付款</span>
        </li>
      </ul>
    </div>
    <div class="back">
      <router-link :to="{path: `/detail/${orderDetail.id}`, query: {source:$route.query.source}}" tag="a">返回上页</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "order",
    data() {
      return {
        orderDetail: {}
      }
    },
    created() {
      let orderDetail = sessionStorage.getItem('order')?JSON.parse(sessionStorage.getItem('order')): {}
      this.orderDetail = orderDetail
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .order {
    min-height: 100vh;
    background-color: #f5f5f5;
  }

  h1 {
    padding: 30px;
    color: #fff;
    font-size: 50px;
    text-align: center;
    background-color: #0e9ed3;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      vertical-align: middle;
      width: 64px;
      height: 64px;
    }
  }

  .order-inner {
    padding: 20px;
    box-sizing: border-box;

    ul {
      li {
        font-size: 28px;
        color: #333;
        /*height: 56px;*/

        span {
          font-size: 32px;
        }

        line-height: 56px;

        label {
          display: inline-block;
        }

        span {
          display: inline-block;

          &.price {
            font-weight: bold;
          }
        }
      }
    }
  }

  .back {
    margin-top: 100px;

    a {
      width: 100%;
      background-color: #f60;
      border: 2px solid #f5f5f5;
      color: #fff;
      padding: 14px 0;
      font-size: 32px;
      height: 76px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
