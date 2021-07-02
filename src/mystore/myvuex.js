

let Vue
class Store {
  constructor(options) {
    this._vm = new Vue({
      data:{
        $$state: options.state
      }
    })
    this._mutations = options.mutations
    this._actions = options.actions
    // 锁死commit,dispatch函数this指向
    const store = this
    const {commit, dispatch} = store
    this.commit = function boundCommit(type, payload) {
      commit.call(store, type, payload)
    }
    this.dispatch = function boundDispatch(type, payload) {
      dispatch.call(store, type, payload)
    }
  }
  get state() {
    return this._vm._data.$$state
  }
  set state(v) {
    console.error('please use replaceState to reset state');
  }
  commit(type,payload) {
    const entory = this._mutations[type];
    if (!entory) {
      console.error('没有mutations')
    }
    entory(this.state,payload)
  }
  dispatch(type,payload) {
    const entory = this._actions[type];
    if (!entory) {
      console.error('没有actions')
    }
    entory(this, payload)
  }

}

function install(_vue) {
  Vue = _vue
  Vue.mixin({
    beforeCreate(){
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default { Store, install}