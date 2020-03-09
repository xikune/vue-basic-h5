// const format = {
//   trimvvv (v) {
//     return v + 'vvv'
//   }
// }

export default {
  bind (el, binding, vnode) {
    // const {
    //   expression,
    //   arg,
    //   name
    // } = binding
    // const conver = format[arg] || (v => v);
    // let vm = vnode.context;
    // if (el.nodeName !== 'INPUT') {
    //   el = el.querySelector('input');
    // }
    // el.value = conver(vm[expression])
    // vm[`v_${name}_${expression}`] = el.value
    // vm.$watch(`${expression}`, function (newV) {
    //   el.value = conver(newV);
    //   // 记录转化后的值
    //   vm[`v_${name}_${expression}`] = el.value
    // })
    // el.oninput = function (e) {
    //   vm[expression] = e.target.value
    // }
  }
}
