<template>
  <!-- 简历分析 -->
  <div class="resume flexaic">
    <!-- 左边的简历分析 -->
    <div class="analysis">
      <!-- 标题 -->
      <div class="title">简历解析</div>
      <!-- 切换按钮 -->
      <div class="flexcent">
        <div
          :class="{ changeanal: analys }"
          @click="analys = true"
          class="analtab flexcent"
        >
          极速解析
        </div>
        <div
          :class="{ changeanal: !analys }"
          @click="analys = false"
          class="analtab flexcent"
        >
          精准解析
        </div>
      </div>
      <!-- 上传菜单 -->
      <div class="flexcent upload">上传</div>
      <!-- 功能模块 -->
      <div class="flexcent">
        <div class="portray">简历解析</div>
        <div class="portray">人物画像</div>
      </div>
    </div>
    <!-- 右边的菜单 -->
    <div class="rightbox flexaic">
      <!-- 大功能模块 -->
      <div class="matching">
        <!-- 人物匹配 -->
        <div class="flexcent figure">人物匹配</div>
        <!-- 简历制作 -->
        <div class="flexcent fabrication">简历制作</div>
      </div>
      <!-- 小功能模块 -->
      <div class="ablebook">
        <!-- 校招宝典 -->
        <div class="flexcent">校招宝典</div>
        <!-- 必修课程 -->
        <div class="flexcent">必修课程</div>
        <!-- 每日一练 -->
        <div class="flexcent">每日一练</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resume", //简历分析
  data() {
    return {
      analys: true,
    };
  },
};
</script>

<style lang="less" scoped>
// 屏幕按电脑进行百分比
@media screen and (min-width: 769px) {
  // 简历分析
  .resume {
    padding: 0 3.5%;
    margin-top: 2vh;
    // 简历分析
    .analysis {
      // height: ;
      width: 40%;
      padding: 1.85vh;
      background-color: #ffffff;
      border-radius: 1.2vh;
      // 标题
      .title {
        font-size: 1.8vh;
        font-weight: 700;
        margin-bottom: 1.5vh;
      }
      // 按钮
      .analtab {
        border-radius: 0.3vh;
        font-size: 1.4vh;
        padding: 0.1vh 0.5vw;
        border: 1px solid #7e8182;
        cursor: pointer;
      }
      .analtab:active {
        opacity: 0.8;
      }
      .changeanal {
        color: #ffffff;
        background-color: #2530c7;
        border-color: #2530c7;
      }
      // 上传
      .upload {
        margin: 2vh 2vw;
        height: 15vh;
        background-color: #d8dddf;
      }
      // 人物画像
      .portray {
        font-size: 1.4vh;
        padding: 0.4vh 0.5vw;
        margin: 0 0.2vw;
        color: #ffffff;
        background-color: #2530c7;
        cursor: pointer;
        border-radius: 0.4vh;
      }
      .portray:active {
        opacity: 0.8;
      }
    }
    .rightbox {
      flex: 1;
      height: 31vh;
      background-color: #ffffff;
      margin-left: 3vw;
      border-radius: 1.2vh;
      // 大功能模块
      .matching {
        width: 66.66%;
        height: 100%;
        border-right: 0.3vw solid #f2f4f7;
        .figure {
          height: 66.66%;
          border-bottom: 0.4vh solid #f2f4f7;
        }
        .fabrication {
          height: 33.33%;
        }
      }
      // 小功能模块
      .ablebook {
        flex: 1;
        height: 100%;
        .flexcent {
          height: 33.33%;
          border-bottom: 0.4vh solid #f2f4f7;
        }
      }
      .flexcent{
        cursor: pointer;
      }
      .flexcent:hover{
        box-shadow: 0 0 20px #0000000f;
      }
    }
  }
}

// 手机
@media screen and (max-width: 768px) {
}
</style>