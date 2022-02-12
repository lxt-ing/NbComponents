import Hello from './hello'
import Message from "./message"
const components = [Hello]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}


export default {
  install,
  Hello
}