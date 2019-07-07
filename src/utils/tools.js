export default {
  trim: (obj, is_global) => {
    let result
    result = obj.replace(/(^\s+)|(\s+$)/g, "")
    if (is_global == "g")
      result = result.replace(/\s/g, "")
    return result
  },
  /**
   * @description 为空返回指定字符 emptyToChar(val, chart)
   */
  emptyToChar: (row, column, chart) => {
    let _chart = chart ? chart : '-'
    if (row[column.property] === "") return _chart
    else return row[column.property]
  },
  getHost: () => {
    return window.location.protocol + "//" + window.location.host
  },
  paramsToStr(params) {
    let str = ''
    for (let k in params) {
      str += `${k}=${params[k]}`
    }
    return str
  }
}

/**
 * @description 绑定事件 on(element, event, handler)
 */
// export const on = (function () {
//   if (document.addEventListener) {
//     return function (element, event, handler) {
//       if (element && event && handler) {
//         element.addEventListener(event, handler, false)
//       }
//     }
//   } else {
//     return function (element, event, handler) {
//       if (element && event && handler) {
//         element.attachEvent('on' + event, handler)
//       }
//     }
//   }
// })()
/**
 * @description 解绑事件 off(element, event, handler)
 */
// export const off = (function () {
//   if (document.removeEventListener) {
//     return function (element, event, handler) {
//       if (element && event) {
//         element.removeEventListener(event, handler, false)
//       }
//     }
//   } else {
//     return function (element, event, handler) {
//       if (element && event) {
//         element.detachEvent('on' + event, handler)
//       }
//     }
//   }
// })()

/*向下找到符合条件最近的一个组件*/
export const findComponentDownward = (context, componentName) => {
  let childrens = context.$children
  let children = null
  if (childrens.length) {
    for (const child of childrens) {
      if (child.$options.name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) break
      }
    }
  }
  return children
}

export const dealTime = (second)=> {
  var dd,hh,mm,ss;
  second = typeof second === 'string' ? parseInt(second) : second;
  if(!second || second < 0){
    return;
  }
  //天
  dd = second / (24 * 3600) | 0;
  second = Math.round(second) - dd * 24 * 3600;
  //小时
  hh = second / 3600 | 0;
  second = Math.round(second) - hh * 3600;
  //分
  mm = second / 60 | 0;
  //秒
  ss = Math.round(second) - mm * 60;
  if(Math.round(dd) < 10){
    dd = dd > 0 ? '0' + dd : '';
  }
  if(Math.round(hh) < 10){
    hh = '0' + hh;
  }
  if(Math.round(mm) < 10){
    mm = '0' + mm;
  }
  if(Math.round(ss) < 10){
    ss = '0' + ss;
  }
  if(parseInt(dd) > 0) {
    return dd + '天' + hh + ':' + mm + ':' + ss;
  }else {
    return hh + ':' + mm + ':' + ss;
  }
}

export const getPar = function (par){
  //获取当前URL
  var local_url = document.location.href;
  //获取要取得的get参数位置
  var get = local_url.indexOf(par +"=");
  if(get == -1){
    return '';
  }
  //截取字符串
  var get_par = local_url.slice(par.length + get + 1);
  //判断截取后的字符串是否还有其他get参数
  var nextPar = get_par.indexOf("&");
  if(nextPar != -1){
    get_par = get_par.slice(0, nextPar);
  }
  return get_par;
}
