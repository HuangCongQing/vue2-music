import * as types from './mutation-types'

const mutations = {   // 修改到对象里面
  // 歌手详情
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag) {      // set playing_state
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {        // set fullsscreen
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, list) {          // set playlist
    state.playlist = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {      // set sequence list
    state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state, mode) {     // set play mode
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {    // set current index
    state.currentIndex = index
  },
  [types.SET_DISC](state, disc) {           // set Disc
    state.disc = disc
  },
  [types.SET_TOP_LIST](state, topList) {        // set top list
    state.topList = topList
  },
  [types.SET_SEARCH_HISTORY](state, history) {    // set search——history
    state.searchHistory = history
  },
  [types.SET_PLAY_HISTORY](state, history) {     // set play history
    state.playHistory = history
  },
  [types.SET_FAVORITE_LIST](state, list) {       // set favorate list
    state.favoriteList = list
  }
}

export default mutations