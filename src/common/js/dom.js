// DOM操作的一些方法集成
// 判断是否有className
export function hasClass(el, className) {
  // 开头或者空白字符在他前面，空白字符或者结束在他后面
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ') // 拆成空格分割的数组
  // console.log('addClass==el.className.split==', newClass)
  newClass.push(className)
  // console.log('newClass.push(className)==', newClass.push(className))
  el.className = newClass.join(' ')
  console.log('el.className = newClass.join -------', el.className)
}

// listview.vue中使用
export function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}

let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
