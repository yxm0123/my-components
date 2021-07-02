import Vue from 'vue'

export default function create(Compontent, props) {
  const Ctor = Vue.extend(Compontent)
  const comp = new Ctor({propsData: props});
  comp.$mount()

  // const vm = new Vue({
  //   render(h) {
  //     return h(Compontent,{props})
  //   }
  // }).$mount()

  // const comp = vm.$children[0];
  document.body.appendChild(comp.$el);

  comp.remove = () => {
    document.body.removeChild(comp.$el);
    comp.$destroy()
  }

  return comp
}