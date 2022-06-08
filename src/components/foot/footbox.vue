<template>
  <!-- 首页尾部内容 -->
  <div class="footbox flexcent">
    <!-- 中间的menu -->
    <div class="footmenu flexaic">
      <!-- logo -->
      <div class="menubox menulogo">
        <img
          class="footlogo"
          src="../../assets/image/footlogo.png"
          :draggable="false"
        />
        <!-- 联系我们 -->
        <div class="intotitle">{{ footinfo.title }}</div>
        <!-- 公司名 -->
        <div class="menutitle">{{ footinfo.company }}</div>
        <!-- 邮箱 -->
        <div class="menutitle">邮箱:{{ footinfo.mailbox }}</div>
        <!-- 电话 -->
        <div class="menutitle">电话:{{ footinfo.phone }}</div>
      </div>
      <!-- 三个列表 -->
      <div class="menubox" v-for="(item, index) in footlist" :key="index">
        <div class="intotitle">{{ item.title }}</div>
        <div class="menutitle" v-for="(em, id) in item.menulist" :key="id">
          {{ em.name }}
        </div>
      </div>
      <!-- 二维码 -->
      <div class="qccode">
        <img src="../../assets/image/qccode.jpg" :draggable="false" />
      </div>
      <!-- 提示 -->
      <div class="official">
        <div class="intotitle">PicK实习公众号</div>
        <!-- 帮助功能 -->
        <div class="flexwarp">
          <div class="flexaic" v-for="(item, index) in helplist" :key="index">
            <div class="menutitle">{{ item.name }}</div>
            <div class="division" v-if="index % 3 !== 2">/</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footbox", //首页尾部内容
  data() {
    return {
      footinfo: {
        title: "联系我们",
        company: "内蒙古乐斯网络科技有限公司",
        mailbox: "youjiazhi@163.com",
        phone: "400-1234567",
      },
      footlist: [
        {
          title: "企业服务",
          menulist: [
            {
              name: "职位搜索",
              path: "",
            },
            {
              name: "新闻资讯",
              path: "",
            },
            {
              name: "有价职APP",
              path: "",
            },
            {
              name: "投资者关系",
              path: "",
            },
          ],
        },
        {
          title: "使用与帮助",
          menulist: [
            {
              name: "协议与规则",
              path: "",
            },
            {
              name: "隐私政策",
              path: "",
            },
            {
              name: "防骗指南",
              path: "",
            },
            {
              name: "使用帮助",
              path: "",
            },
          ],
        },
        {
          title: "公众服务",
          menulist: [
            {
              name: "找工作",
              path: "",
            },
            {
              name: "校招宝典",
              path: "",
            },
            {
              name: "学习职场知识",
              path: "",
            },
            {
              name: "免费求职咨询",
              path: "",
            },
          ],
        },
      ], //
      helplist: [
        {
          name: "简历优化",
          path: "",
        },
        {
          name: "面试指导",
          path: "",
        },
        {
          name: "免费咨询",
          path: "",
        },
        {
          name: "干活推荐",
          path: "",
        },
        {
          name: "实习咨询",
          path: "",
        },
        {
          name: "职位规划",
          path: "",
        },
      ],
    };
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
// 首页尾部内容
.footbox {
  width: 100vw;
  background-color: #000000;
}

// 屏幕按电脑进行百分比
@media screen and (max-width: 1199px) and (min-width: 769px) {
  // 首页尾部内容
  .footbox {
    //   中间的menu
    .footmenu {
      height: 100%;
      width: 100vw;
      padding: 2vh 2vw;
    }
  }
}
// 屏幕按电脑进行百分比
@media screen and (min-width: 1200px) {
  // 首页尾部内容
  .footbox {
    //   中间的menu
    .footmenu {
      height: 100%;
      width: 1200px;
      padding: 2vh 2vw;
      .footlogo {
        width: 50%;
        height: auto;
      }
      //   大标题
      .intotitle {
        font-size: 1.6vh;
        color: #ffffff;
        margin-bottom: 1vh;
      }
      //   小标题
      .menutitle {
        cursor: pointer;
        margin-top: 0.7vh;
        font-size: 1.4vh;
        color: #838c97;
      }
      .menutitle:hover {
        opacity: 0.7;
      }
      .division {
        font-size: 1.4vh;
        color: #838c97;
        margin: 0.7vh 0.1vw 0;
      }
      //   小格子
      .menubox {
        width: 18%;
      }
      .qccode {
        width: 10%;
        margin-right: 0.8vw;
      }
      .official {
        width: 18%;
      }
      .menulogo {
        .menutitle:hover {
          opacity: 1;
          cursor: default;
        }
      }
    }
  }
}

// 手机
@media screen and (max-width: 768px) {
}
</style>