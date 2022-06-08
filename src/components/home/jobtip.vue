<template>
  <!-- 职位标签 -->
  <div class="jobtip">
    <!-- 第一行 -->
    <div class="flexaic jobbox">
      <!-- 工作名称 -->
      <div class="jobname">{{ jobdata.jobname }}</div>
      <!-- 对话框 -->
      <div class="newsicon">
        <!-- 图标 -->
      </div>
      <!-- 薪资 -->
      <div class="flexaic salary">
        <div>{{ jobdata.salary }}</div>
        <div v-if="jobdata.frequency">·{{ jobdata.frequency }}</div>
      </div>
    </div>
    <!-- 第二行 -->
    <div class="flexaic jobbox">
      <!-- 标签 -->
      <div class="placetips">{{ jobdata.place }}</div>
      <div class="placetips">{{ jobdata.experience }}</div>
      <div class="placetips">{{ jobdata.education }}</div>
    </div>
    <!-- 第三行 -->
    <div class="info flexaic">
      <!-- 公司图标 -->
      <div></div>
      <!-- 公司名 -->
      <div class="name">{{ jobdata.name }}</div>
      <!-- 公司分类 -->
      <div class="degree">{{ jobdata.type }}</div>
      <!-- 分隔符 -->
      <div class="plitline">|</div>
      <!-- 公司类型 -->
      <div class="degree">{{ jobdata.degree }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jobtip", //职位标签
  props: {
    jobdata: {
      type: [Object],
    },
  },
  data() {
    return {};
  },
  created() {
    console.log(this.jobdata);
  },
};
</script>

<style lang="less" scoped>
// 屏幕按电脑进行百分比
@media screen and (min-width: 769px) {
  // 职位标签
  .jobtip {
    cursor: pointer;
    width: 32.3%;
    margin: 0.5vh 0.5%;
    background-color: #ffffff;
    border-radius: 1vh;
    padding-top: 2vh;
    overflow: hidden;
    .jobbox {
      padding: 0 2vh;
      // 工作名称
      .jobname {
        font-size: 1.6vh;
      }
      // 图标
      .newsicon {
        flex: 1;
      }
      .salary {
        font-size: 1.6vh;
        color: #f2241d;
      }
      // 标签
      .placetips {
        margin: 1vh 0.4vw 1vh 0;
        padding: 0.1vh 0.6vw;
        background-color: #e8edee;
        border-radius: 0.4vh;
      }
    }

    .info {
      padding: 1.2vh 2vh;
      background: linear-gradient(90deg, #e0f1f2 0%, #edf2f0 100%);
      .name {
        flex: 1;
        font-size: 0.8vh;
      }
      .degree {
        font-size: 1vh;
      }
      .plitline {
        margin: 0 0.3vw;
        font-size: 0.6vh;
        color: #bec2c3;
      }
    }
  }
  .jobtip:hover{
    box-shadow: 0 0 10px #00000022;
  }
}

// 手机
@media screen and (max-width: 768px) {
}
</style>