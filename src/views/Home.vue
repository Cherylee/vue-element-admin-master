<template>
  <div class="home">
    首页
    <el-button
          size="medium"
          type="primary"
          style="width:100%;"
          @click.native.prevent="logout"
        >
         退出登录
        </el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { test } from "@/api/test";
import { login } from "@/api/login";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    getTest() {
      test().then(res => {
        console.log(res);
      });
    },
    handlelogin(){
      this.$store
            .dispatch("Login", {'username':'admin','password':'123456'})
            .then(() => {
              console.log('登陆成功！')
            })
            .catch(() => {
              
            });
    },
    logout(){
      this.$store
            .dispatch("LogOut", '')
            .then(() => {
              console.log('退出成功！')
            })
            .catch(() => {
              
            });
    }
  }
};
</script>
