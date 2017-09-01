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