<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-button size="medium" type="primary" style="width:100%;"  @click.native.prevent="getTest" > 888</el-button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { test } from "@/api/test";

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
    }
  }
};
</script>
