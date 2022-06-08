<template>
  <!-- 首页头部内容 -->
  <div class="headbox flexcent">
    <!-- 中间的menu -->
    <div class="headmenu flexaic">
      <!-- logo -->
      <div class="logo" @click="tolink('/home')">
        <img src="../../assets/image/logo.png" :draggable="false" />
      </div>
      <!-- 定位 -->
      <div class="location"></div>
      <!-- 菜单 -->
      <div class="menu flexaic">
        <!-- 菜单tab -->
        <div
          class="tab"
          :class="{ changetab: index === tab }"
          v-for="(item, index) in menulist"
          :key="index"
          @click="tolink(item.path)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headbox", //首页头部内容
  data() {
    return {
      menulist: [
        {
          name: "首页",
          path: "/home",
        },
        {
          name: "职位",
          path: "/position",
        },
        {
          name: "公司",
          path: "/company",
        },
        {
          name: "百科",
          path: "/encyclopedias",
        },
      ], //
      tab: 0, //当前页的tab
    };
  },
  watch: {
    $route(to, from) {
      this.tab = this.menulist.findIndex((item) => item.path === to.path);
    },
  },
  methods: {
    //   跳转页面（不是当前页则刷新页面
    tolink(path) {
      // 如果在当前跳转进行刷新
      if (this.$route.path === path) {
        this.$router.go(0);
      } else {
        //   否则跳转到path
        this.$router.push({
          path: path,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
// 首页头部内容
.headbox {
  width: 100vw;
  height: 5vh;
  background-color: #ffffff;
  box-shadow: 0 1px 8px #ffffff0f;
}

// 屏幕按电脑进行百分比
@media screen and (max-width: 1199px) and (min-width: 769px) {
  // 首页头部内容
  .headbox {
    //   中间的menu
    .headmenu {
      height: 100%;
      width: 100vw;
      //   logo
      .logo {
        height: auto;
        width: 10%;
        cursor: pointer;
      }
      //   定位功能先注销
      .location {
        height: 100%;
        width: 11%;
      }
      .menu {
        flex: 1;
        .tab {
          font-size: 1.5vh;
          cursor: pointer;
          padding: 0 0.5%;
          margin: 0 0.5%;
        }
        .tab:hover {
          color: #00d7c6;
        }
        .changetab {
          color: #00d7c6;
        }
      }
    }
  }
}
// 屏幕按电脑进行百分比
@media screen and (min-width: 1200px) {
  // 首页头部内容
  .headbox {
    //   中间的menu
    .headmenu {
      height: 100%;
      width: 1200px;
      //   logo
      .logo {
        height: auto;
        width: 9%;
        cursor: pointer;
      }
      //   定位功能先注销
      .location {
        height: 100%;
        width: 11%;
      }
      .menu {
        flex: 1;
        .tab {
          font-size: 1.5vh;
          cursor: pointer;
          padding: 0 0.5%;
          margin: 0 0.5%;
        }
        .tab:hover {
          color: #00d7c6;
        }
        .changetab {
          color: #00d7c6;
        }
      }
    }
  }
}

// 手机
@media screen and (max-width: 768px) {
}
</style>