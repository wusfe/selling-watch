<template>
  <div class="minput">
    <div class="input-container" v-if="type === 'input'">
      <label class="row-label">
        <span class="require-icon">* </span>&nbsp;
        <span>{{label}}</span>
      </label>
      <div class="row-content">
        <input type="text" placeholder="" v-model="cnt" @input="changeCnt">
      </div>
    </div>
    <div class="input-container" v-if="!type">
      <label class="row-label">
        <span>{{label}}</span>
      </label>
      <div class="row-content">
        <div class="row-no-type">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
    <div class="input-container" v-if="type === 'number'">
      <label class="row-label">
        <span class="require-icon">* </span>&nbsp;
        <span>{{label}}</span>
      </label>
      <div class="row-content">
        <div class="row-num clear">
          <a href="javascript:void(0);" @click="reduce">-</a>
          <input type="number" min=1 max=3 @input="dealNumber" v-model="n">
          <a href="javascript:void(0);" @click="plus">+</a>
        </div>
      </div>

    </div>
    <div class="input-container" v-if="type === 'select'">
      <!-- <label class="row-label">
        <span class="require-icon">* </span>&nbsp;
        <span>{{label}}</span>
      </label> -->
      <div class="row-content clear" style="padding-left: 0">
        <!-- <div style="width: 100%;"> -->
        <div class="row-content__select-list" style="width: 100%;">
          <select v-model="citySelector.province" @change="changeprovince" class="select-a">
            <option value="">选择省份</option>
            <option :key="v.name" :value="v.name" v-for=" v in provice">{{v.name}}</option>
          </select>

          <select v-model="citySelector.city" @change="changeCity" class="select-a">
            <option value="">选择城市</option>
            <option :key="v.name" :value="v.name" v-for=" v in city">{{v.name}}</option>
          </select>
          <select v-model="citySelector.area" @change="changeArea" class="select-a float-right">
            <option value="">选择地区</option>
            <option :key="v" :value="v" v-for=" v in area">{{v}}</option>
          </select>
        </div>

      </div>
    </div>
    <div class="input-container" v-if="type === 'textarea'">
      <label class="row-label">
        <span class="require-icon" v-if="required">* </span>&nbsp;
        <span>{{label}}</span>
      </label>
      <div class="row-content">
        <textarea name="" id="" :rows="areatextRow" v-model="text" @input="changeText"></textarea>
      </div>
    </div>
    <div class="input-container" v-if="type === 'paymentmethod'">
      <label class="row-label">
        <span class="require-icon">* </span>&nbsp;
        <span>{{label}}</span>
      </label>
      <div class="row-content">
        <div class="method">
          <img src="../assets/images/payment-1.png" alt="">
          <span>货到付款</span>
        </div>
        <div class="tip">请开箱验货后再支付款项</div>
      </div>
    </div>
    <div class="input-container" v-if="type === 'selectInput'">
      <label class="row-label">
        <span class="require-icon">* </span>&nbsp;
        <span>{{label}}</span>
      </label>
      <div class="row-content clear">
        <div style="width: 100%;">
          <select v-model="cnt" @change="changeCnt" class="select-a">
            <option value="">{{noValue}}</option>
            <option :value="v" v-for=" v in options">{{v}}</option>
          </select>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import {proviceJson} from '@/utils/city.js'

  export default {
    name: "m-input",
    props: {
      type: {
        default: 'input'
      },
      label: [String, Number],
      required: {
        type: Boolean
      },
      areatextRow: {
        type: [String, Number],
        default: 1
      },
      noValue: [String, Number],
      options: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        citySelector: {
          province: '',
          city: '',
          area: ''
        },
        n: 1,
        provice: proviceJson,
        city: [],
        area: [],
        cnt: '',
        text: '',
      }
    },
    methods: {
      changeprovince() {
        let province = this.provice.find(item => {
          return item.name === this.citySelector.province
        })
        this.city = province ? province.city : []
        this.area = []
        this.citySelector.city = ''
        this.citySelector.area = ''
        this.$emit('changeArea', [this.citySelector.province, '', ''])
      },
      changeCity() {
        let city = this.city.find(item => {
          return item.name === this.citySelector.city
        })
        this.area = city ? city.districtAndCounty : []
        this.citySelector.area = ''
        this.$emit('changeArea', [this.citySelector.province, this.citySelector.city, ''])
      },
      changeArea() {
        this.$emit('changeArea', [this.citySelector.province, this.citySelector.city, this.citySelector.area])
      },
      reduce() {
        this.n = Number(this.n) - 1
        this.dealNumber()
      },
      plus() {
        this.n = Number(this.n) + 1
        this.dealNumber()
      },
      dealNumber() {
        if (!this.n) {
          this.n = 1
        } else {
          if (this.n > 100) {
            this.n = 100
          }
        }
        this.$emit('changeOrderNum', this.n)
      },
      changeCnt() {
        this.$emit('update:cnt', this.cnt)
      },
      changeText() {
        this.$emit('update:textarea', this.text)
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .minput {
    margin-top: 15px;
  }
  .input-container {
    position: relative;
    margin-top: 5.6px;

    .row-label {
      /*margin-top: 2px;*/
      /*transform: translateY(-50%);*/
      width: 140px;
      font-size: 28px;
      position: absolute;
      left: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: #333;

      .require-icon {
        color: #f60;
      }
    }

    .row-content {
      padding-left: 154px;
      position: relative;

      input {
        height: 56px;
        text-indent: 8.4px;
        width: 100%;
        color: #555555;
        border: 2px solid #cccccc;
        /*font-family: MicroSoft Yahei;*/
        outline: none;
        transition: all 0.2s linear 0s;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        font-size: 30.4px;
        border-radius: 5px;
        /*box-sizing: border-box;*/
      }

      .row-num {
        display: inline-block;

        a {
          float: left;
          border: 2px solid #ccc;
          width: 56px;
          height: 56px;
          font-size: 42px;
          color: #EB5F3E;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f4f4f4;
        }

        input {
          float: left;
          width: 112px;
          text-indent: 0;
          font-size: 42px;
          text-align: center;
          border-left-width: 0;
          border-right-width: 0;
          border-radius: 0;
          /*font-family: MicroSoft Yahei;*/
        }
      }

      .row-content__select-list{
        display: flex;
      }

      .select-a {
        // float: left;
        background-color: #fff;
        width: 33%;
        margin-left: 2%;
        height: 56px;
        color: #555555;
        border: 2px solid #cccccc;
        /*font-family: MicroSoft Yahei;*/
        outline: none;
        transition: all 0.2s linear 0s;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        font-size: 25px;
        border-radius: 5px;
         -moz-appearance:none; /* Firefox */
        -webkit-appearance:none; /* Safari and Chrome */
        appearance:none;
        /*text-align: center;*/
        &.float-right {
          float: right;
        }
        &:nth-of-type(1) {
          margin-left: 0;
        }
      }

      textarea {
        width: 100%;
        color: #555555;
        border: 2px solid #cccccc;
        outline: none;
        transition: all 0.2s linear 0s;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        font-size: 30.4px;
        box-sizing: border-box;
        border-radius: 5px;
      }

      .method {
        /*padding-left: 64px;*/
     /*   <!--!*background-image: url("../assets/images/payment.png");-->
        <!--background-repeat: no-repeat;-->
        <!--background-position: -396px -10px;*!-->*/
        /*display: inline-block;*/
        display: inline-block;
        background-color: #D60810;
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: flex-start;*/
        padding: 2px 8px;
        font-size: 26px;
        color: #fff;
        border: 1px solid #ccc;
        img {
          /*margin-right: 4px;*/
          vertical-align: middle;
        }

        /*padding: 2px 0;*/
        /*input {*/
        /*  border: 0;*/
        /*  font-size: 26px;*/
        /*  color: #fff;*/
        /*  background-color: transparent;*/
        /*}*/


      }
      .tip {
        position: absolute;
        left: 154px;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
        color: #c00;
        background-color: #fbeedf;
        padding: 22.4px;
        font-size: 28px;
        /*width: 100%;*/
        right: 0;
        line-height: 42px;
        border: 2px solid #eed3d7;
        margin-top: 10px;
      }
    }
  }

</style>
