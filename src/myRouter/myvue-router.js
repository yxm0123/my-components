
let Vue
class VueRouter {
  constructor(options) {
    this.$coustomRouter = options;
    this.routeMap = {};
    this.$coustomRouter.routes.map(route => {
      this.routeMap[route.path] = route
    })
    Vue.util.defineReactive(this, 'current', '/')
    window.addEventListener('hashchange', this.onHashChange.bind(this))
  }
  onHashChange() {
    this.current = window.location.hash.slice(1)
  }
}
VueRouter.install = function(_vue) {
  Vue = _vue;
  Vue.mixin({
    beforeCreate(){
      if(this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })
  Vue.component('router-link', {
    props:{
      to: {
        type:String,
        default: ''
      }
    },
    render(h) {
      return h(
        'a',
        { attrs: { href:'#' + this.to} },
        this.$slots.default
      )
    }
  })
  Vue.component('router-view', {
    render(h) {
      const {routeMap, current}  = this.$router
      const comp = routeMap[current] ? routeMap[current].component : null
      return h(comp)
    }
  })
}

export default VueRouter