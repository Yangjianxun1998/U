<template>
  <!-- 精选职位 -->
  <div class="choice">
    <!-- 精选职位标题 -->
    <div class="flexcent title">精选职位</div>
    <!-- tab切换 -->
    <div class="tabmenu flexaic">
      <div
        :class="{ chagetab: tab === index }"
        class="tabcent flexdcn"
        v-for="(item, index) in joblist"
        :key="index"
        @click="tab = index"
      >
        <div>{{ item.menu }}</div>
        <div class="change" />
      </div>
    </div>
    <!-- 职位推荐 -->
    <div class="flexwarp">
      <!-- 职位标签 -->
      <jobtip v-for="(item, index) in joblist[tab].job" :key="index" :jobdata="item"/>
    </div>
  </div>
</template>

<script>
import { joblist } from "../../views/home/json/job.json";
// 职位标签
import jobtip from "./jobtip";
export default {
  name: "choice", //精选职位
  components: {
    jobtip, //职位标签
  },
  data() {
    return {
      joblist: joblist,
      tab: 0, //当前选中
    };
  },
};
</script>

<style lang="less" scoped>
// 屏幕按电脑进行百分比
@media screen and (min-width: 769px) {
  // 精选职位
  .choice {
    padding: 0 3.5%;
    margin-bottom: 5vh;
    // 精选职位标题
    .title {
      margin: 4vh 0;
      font-size: 4vh;
      font-weight: 700;
    }
    // tab切换
    .tabmenu {
      height: 5vh;
      width: 100%;
      background-color: #ffffff;
      margin-bottom: 2vh;
      .tabcent {
        width: 10%;
        font-size: 1.6vh;
        color: #9da0a1;
        cursor: pointer;
        .change {
          margin-top: 0.5vh;
          width: 0;
          height: 4px;
          background-color: #998553;
        }
      }
      .chagetab {
        color: #998553;
        .change {
          width: 50%;
        }
      }
      .tabcent:hover {
        opacity: 0.8;
      }
    }
  }
}

// 手机
@media screen and (max-width: 768px) {
}
</style>