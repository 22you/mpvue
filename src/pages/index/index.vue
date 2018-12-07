<template>
    <div class="container" @click="clickHandle">
        <div class="message">{{msg}}</div>
        <click-counter :init-num="10" @clicknum="handleClickNum"/>
    </div>
</template>
<script>
//导入文件
import ClickCounter from "@/components/click-counter";
export default {
  // 声明在当前组件下使用 counter-click 组件
  components: { ClickCounter },
  data() {
    return {
      msg: "hello"
    };
  },
  methods: {
    clickHandle() {
      this.msg = "clicked me!!!";
    },
    handleClickNum(data) {
      console.log(">>>>>>", data.num);
    }
  }
};
</script>
// scoped局部样式
<style scoped>
.message {
  color: red;
  padding: "10px";
  text-align: "center";
}
</style>