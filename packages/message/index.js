import Message from "./src/message.vue"
import {createApp, onUnmounted} from "vue"
const createCom = (com, props)=>{
    const app = createApp(com, {
      ...props
    })
    const divEle = document.createElement('div')
    document.body.appendChild(divEle)
    app.mount(divEle)
    onUnmounted(()=>{
      app.unmount(divEle)
      document.body.removeChild(divEle)  
    })
}
export default {
    Message, createCom
}