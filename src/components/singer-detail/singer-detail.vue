<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list'
  import {getSingerDetail} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'   // 对应getters中的singer
      ])
    },
    data() {
      return {
        songs: []
      }
    },
    created() {
      this._getDetail()
    },
    methods: {
      _getDetail() {
        // 如果刷新了，没获取到数据，则回到歌手页面
        if (!this.singer.id) {
          this.$router.push('/singer')
          return
        }
        // 获取歌手详情信息
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            console.log('获取的原汁原味songs:', res.data.list)
            this.songs = this._normalizeSongs(res.data.list)
            console.log('信息Songs:', this.songs)
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          // 判断musicData.songid && musicData.albummid是必有的
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))      // import {createSong} from 'common/js/song'
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>