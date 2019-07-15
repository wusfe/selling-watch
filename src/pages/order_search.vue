/**
 * Created by xiezhenzhong on 19/7/14.
 */

<template>
<div class="wrap">
   <!--<div class="flex input-txt">
        <div>您的姓名</div>
        <div class="flex-1">
        <input v-model="searchName" type="text" placeholder="请输入">
        </div>
   </div> -->
   <div style="margin: 20px 0" class="flex input-txt">
           <div>手机号码</div>
           <div class="flex-1">
           <input v-model="searchTel" type="text" placeholder="请输入">
           </div>
      </div>
      <div class="search-btn"  v-on:click="searchOrder"> 查 询</div>


      <div v-if="order.length>0 && order[0]!=''" class="flex ord-title">
          <div class="flex-1 flex flex-v flex-pack-center">
              <div class="line">
               </div>
          </div>
          <div class="txt">订单详情</div>
          <div class="flex-1 flex flex-v flex-pack-center">
                        <div class="line">
                         </div>
                    </div>
      </div>


      <div v-if="order.length>0 && order[0]!=''" v-for="item in order"  class="order-detail-wrap">
           <div   class="flex one-list">
               <div>订单编号:</div>
               <div class="flex-1 content">{{item.order_no}}</div>
               <div style="color:#FF7400">{{item.status==0 ? '未发货' :'已发货'}}</div>
           </div>
           <div   class="flex one-list">
                          <div>商品颜色:</div>
                          <div class="flex-1 content">{{item.color?item.color:'--'}}</div>
              </div>
              <div   class="flex one-list">
                                        <div>商品尺码:</div>
                                        <div class="flex-1 content">{{item.size?item.size:'--'}}</div>
               </div>
               <div   class="flex one-list">
                                                       <div>订单数量:</div>
                                                       <div class="flex-1 content">{{item.buy_num}}</div>
                </div>
              <div   class="flex one-list">
                                        <div>订单总价:</div>
                                        <div class="flex-1 content">{{item.total_price}}元</div>
                </div>
                <div   class="flex one-list">
                                                       <div>您的姓名:</div>
                                                       <div class="flex-1 content">{{item.receiver}}</div>
                 </div>
                  <div   class="flex one-list">
                                                                        <div>支付方式:</div>
                                                                        <div class="flex-1 content">货到付款</div>
                  </div>
      </div>
</div>




</template>
<script>
  import {search} from '../ajaxApi'
  import {Toast, Indicator} from 'mint-ui'

export default {
    name: "order_search",
    data() {
      return {
        searchTel: '',
        searchName: '',
        order: ['']
      }
    },
    created() {

    },
    search(tel){


    },
    mounted() {



    },
    methods:{
       searchOrder(){
       if(!this.searchTel) {
            Toast({
                         message: '请输入正确的手机号',
                         position: 'middle',
                         duration: 1000
                       })
                       return;
           }
           let param = {
                  tel: this.searchTel
               }
            search(param).then(res => {
                                               let Arr = [];

                                   if(res.respond == 1){

                                   for(let key  in res.data){
                                    Arr.push(res.data[key]);

                                   }
                                   }

                                   this.order = Arr;
                                 })
       }

    }
  }
</script>
<style>
body,html{
  background: #ffffff;
}
.wrap{
   padding: 60px 30px;
}
input{
    background:none;
    outline:none;
    border:1px solid #979797;
    padding:0 10px;
    box-sizing:border-box;
}
.input-txt{
    font-size: 26px;
    height: 56px;
    line-height:56px;
}
.input-txt input {
   width:98.5%;
   display:block;
   color: #333333;
   line-height:56px;
   margin-left: 10px;
}

.search-btn{
    background:#FDC830;
    height:72px;
    text-align:center;
    line-height:72px;
    color:#FFFFFF;
    border-radius: 10px;
    font-size: 48px;
}

.ord-title{
   color: #333;
   font-size: 15px;
   margin: 50px 0;
}
.ord-title  .txt{
  padding: 0 10px;
/*line-height:50px;*/
/*height:50px;*/
  font-size: 33px;
  font-weight: 500;
  line-height: 33px;
}
.line{
   height: 2px;
   border: 2px;
   background: #333;
}

.order-detail-wrap{
   border: 1px solid #979797;
   font-size: 26px;
   color:#555;
   margin-top:3px;
}
.one-list{
   margin: 30px 15px;
   line-height: 40px;

}
.one-list .content{
padding-left: 20px;
}
</style>
