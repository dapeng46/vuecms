import Vue from 'vue'
import Vuex from 'vuex'
import { getUserData } from './../Api/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // newsData:{},
    userZt: false,
    userData: {},
    // bannerData:{},
    // staffData:{},
    // varietyData:{},
    // infoData:{},
  },
  mutations: {
    getUserData: function (state, data) {
      getUserData(data).then(value => {
        if (value.data === 'ok') {
          state.userData = data;
          data._this_.$message.success('恭喜登录成功');
          window.sessionStorage.setItem('token', 'ok')
          data._this_.$router.push('/home');
        } else {
          data._this_.$message.error('用户名或密码错误');
        }
      })
    },
  },
  actions: {
    //设置延迟
  },
  modules: {
    //设置程序块
  }
})
