import { cloneDeep } from 'lodash'
import client from 'webpack-theme-color-replacer/client'
import forElementUI from 'webpack-theme-color-replacer/forElementUI'

export default {
  namespaced: true,
  state: {
    // 隐藏图片
    hidden: true
  },
  actions: {
  },
  mutations: {
    changeHidden(state) {
      console.log('changeHidden', state)
      state.hidden = !state.hidden;
    },
  }
}
