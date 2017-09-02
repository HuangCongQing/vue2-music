<template>
  <div class="recommend" ref="recommend">
    <!-- :data="discList"绑定scroll.vue中data函数变化，有数据了，触发watch -->
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <!-- 加了一个v_if判断，确保slot中有数据 -->
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <!-- 轮播图,用了slot插槽 -->
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <!-- class="needsclick",解决fastclick冲突问题 ，若不添加，则点击不能跳转链接-->
                <img @load="loadImage" :src="item.picUrl" class="needsclick">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li @click="selectItem(item)" v-for="item in discList" class="item">
              <div class="icon">
                <!-- <img width="60" height="60" :src="item.imgurl"> -->
                <img width="60" height="60" v-lazy="item.imgurl">
              </div>
              <div class="text">
                <!-- v-html会对字符做转义 -->
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 下拉加载 -->
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

 <script type="text/ecmascript-6">
/* eslint-disable */
import Slider from 'base/slider/slider'
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import { getRecommend, getDiscList } from 'api/recommend'
import { playlistMixin } from 'common/js/mixin'
import { ERR_OK } from 'api/config'
import { mapMutations } from 'vuex'

export default {
  mixins: [playlistMixin],
  data() {
    return {
      recommends: [],
      discList: []
    }
  },
  created() {
    this._getRecommend()

    this._getDiscList()
  },
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''

      this.$refs.recommend.style.bottom = bottom
      this.$refs.scroll.refresh()
    },
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true
        this.$refs.scroll.refresh()
      }
    },
    // 点击进入路由
    selectItem(item) {
      this.$router.push({
        path: `/recommend/${item.dissid}`
      })
      this.setDisc(item)
    },
    _getRecommend() {
      // 获取轮播图数据，引用recommend.js中的函数
      getRecommend().then((res) => {
        // ERR_OK ====0,语义化
        if (res.code === ERR_OK) {
          console.log(" ----轮播图数据----- ", res.data.slider)
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList() {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          console.log('-------歌单数据--------', res.data.list)
          this.discList = res.data.list
        }
      })
    },
    ...mapMutations({
      setDisc: 'SET_DISC'
    })
  },
  components: {
    Slider,
    Loading,
    Scroll
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
      // 垂直居中
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>