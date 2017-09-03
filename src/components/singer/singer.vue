<template>
  <div class="singer" ref="singer">
    <!-- 从listview.vue传过来的数据$emit() -->
    <list-view @select="selectSinger" :data="singers" ref="list"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
import ListView from 'base/listview/listview'
import { getSingerList } from 'api/singer'
import { ERR_OK } from 'api/config'
// 引入一个Singer的类
import Singer from 'common/js/singer'
import { mapMutations } from 'vuex'
import { playlistMixin } from 'common/js/mixin'

const HOT_SINGER_LEN = 10
const HOT_NAME = '热门'

export default {
  mixins: [playlistMixin],
  data() {
    return {
      singers: []
    }
  },
  created() {
    this._getSingerList()
  },
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.singer.style.bottom = bottom
      this.$refs.list.refresh()
    },
    selectSinger(singer) {
      this.$router.push({
        path: `/singer/${singer.id}`
      })
      // 把数据放到vuex中管理。通过mutations往state写了一些东西
      this.setSinger(singer)
    },
    _getSingerList() {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singers = this._normalizeSinger(res.data.list)
          console.log('singer.vue中this:---', this)
        }
      })
    },
    _normalizeSinger(list) {
      // 定义一个嵌套数组数组
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      // forEach数组遍历，往map.hot.items添值
      // 引入一个Singer的类
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          }))
        }
        const key = item.Findex
        if (!map[key]) {     // map[key]????????????
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          name: item.Fsinger_name,
          id: item.Fsinger_mid
        }))
      })
      console.log('map[key]: ', map)

      // 为了得到有序列表，我们需要处理 map--------------排序
      let ret = []
      let hot = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      // 排序
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)  // concat() 方法用于连接两个或多个数组。
    },
    ...mapMutations({
      // 语法糖映射带setSinger，常量对应类似函数
      setSinger: 'SET_SINGER'
    })
  },
  components: {
    ListView
  }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
