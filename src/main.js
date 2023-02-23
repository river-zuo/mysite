import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


// import tinymce from 'tinymce/tinymce'
// import 'tinymce/tinymce'

// import Editor from '@tinymce/tinymce-vue'
// import 'tinymce/themes/modern/theme'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAxios, axios)

// Vue.use(tinymce)
// Vue.use(Editor)

new Vue({
    router,
    axios,
    render: h => h(App)
}).$mount('#app')