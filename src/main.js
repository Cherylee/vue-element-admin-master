import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import test from "./mock/test.js"

Vue.config.productionTip = false;

test({mock: true});// 关闭mock数据改为false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
