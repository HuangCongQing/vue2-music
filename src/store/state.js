import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  singer: {},     // 歌手的数据
  playing: false,   // 播放和暂停
  fullScreen: false,   // 是否全屏
  playlist: [],      // 播放列表
  sequenceList: [],   // 即将播放，顺序列表（顺序，单曲播放，随机播放）
  mode: playMode.sequence,
  currentIndex: -1,       // 当前播放的那首歌
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state