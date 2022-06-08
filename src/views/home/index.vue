<template>
  <!-- 首页内容 -->
  <div class="home flexcent">
    <!-- 中间的内容 -->
    <div class="centbox">
      <!-- 搜索栏 -->
      <div class="secrach">
        <el-input
          placeholder="请输入内容"
          v-model="input"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <!-- 简历分析 -->
      <resume />
      <!-- 精选职位 -->
      <choice />
    </div>
  </div>
</template>

<script>
import resume from "../../components/home/resume.vue"; //简历分析
import choice from "../../components/home/choice.vue"; //精选职位

// 首页内容
export default {
  name: "home", //首页内容
  components: {
    resume, //简历分析
    choice, //精选职位
  },
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="less" scoped>
// 屏幕按电脑进行百分比
@media screen and (max-width: 1199px) and (min-width: 769px) {
  // 首页内容
  .home {
    .centbox {
      width: 100vw;
      .secrach {
        padding: 2vh 2vw;
      }
    }
  }
}
// 屏幕按电脑进行百分比
@media screen and (min-width: 1200px) {
  // 首页内容
  .home {
    .centbox {
      width: 1200px;
      .secrach {
        padding: 2vh 2vw;
      }
    }
  }
}

// 手机
@media screen and (max-width: 768px) {
}
</style>