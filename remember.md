# vue2播放器记录

标签（空格分隔）： 未分类

---

* alias 配置别名

* 解决移动端300ms延迟
` "fastclick": "^1.0.6",`

![image.png](http://upload-images.jianshu.io/upload_images/4340772-2adac9265b3f6f48.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

[web移动端事件总结](http://www.jianshu.com/p/6f85e957a725)
* jsonp使用，跨域
*  indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。如果要检索的字符串值没有出现，则该方法返回 -1。

* Eslint

```
Warnings:
  2  http://eslint.org/docs/rules/quotes

You may use special comments to disable some warnings.
Use // eslint-disable-next-line to ignore the next line.
Use /* eslint-disable */ to ignore all warnings in a file.

```

* 修改build下的目录，所以要重启一下项目

* [slot内容分发](https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8-Slot-%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9)

* 大多数显示器的刷新频率是60Hz，相当于每秒钟重绘60次。大多数浏览器都会对重绘 ... 因此最平滑动画的最佳循环间隔是1000ms/60，约等于17ms
[vue中mounted函数中添加setTimeout有什么作用](https://segmentfault.com/q/1010000010219425ttps://segmentfault.com/q/1010000010219425)
官方文档说的很明白使用this.$nextTick就是为了解决dom渲染的问题, 竟然还去用setTimeout:

```
mounted(){
    this.$nextTick(() => {
        //这里的代码会在dom渲染完毕运行
        this._setSliderWidth()
        this._initDots()
        this._initSlider()
     })
}
```

[nextTick文档](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97)

* 使用keep-AliveDOM缓存到内存中，不会重新请求

* jsonp报500，由于host和Referer校验
    代理请求

* flex布局-flex-direction: column

* scroll一定要保证数据是渲染好的

* LazyLoad懒加载
 **[vue-lazyload](https://github.com/hilongjw/vue-lazyload)**

* loading组件

* 垂直居中`transform: translateY(-50%)`

## 歌手页面开发问题（左侧歌手列表，右侧字母列表）

此页面 类似联系人列表

0. 嵌套数组
1. 联动（滑动歌手，对应字母高亮）
2. 点击字母，歌手自动到某位置
3. 左侧歌手向上下滑动时，对应部分的字母固定不变
4. 字母排序问题（sort()）

* [es6 javascript对象方法Object.assign()](http://blog.csdn.net/qq_30100043/article/details/53422657)
后面参数会覆盖前面参数

* [forEach 方法 (Array) (JavaScript)](http://www.cnblogs.com/joyco773/p/6113748.html)

*引入类
 [ES6入门 —— Class和Module](http://blog.csdn.net/u014695532/article/details/51815025)

* 排序
.sort()
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
[JS知识点：js中sort()方法的用法，参数以及排序原理](https://segmentfault.com/a/1190000000410506)

* concat() 方法用于连接两个或多个数组。

*　[js 数组 map方法](http://www.cnblogs.com/xuan52rock/p/4460949.html)

*　[HTML5触摸事件(touchstart、touchmove和touchend)](http://blog.csdn.net/fuqinyijiu/article/details/41315123)

＊ref
>ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素; 如果用在子组件上，引用就指向组件实例:
当 v-for 用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组。

* vue中在date和props中会检测数据的变化，create()不会

* parseInt(this.touch.anchorIndex) + delta
不能字符串相加，要转成整型
