<template>
  <div id="app" :class="{'layout-collapsed': collapsed}">
    <header class="layout-header">
      <div class="login">
        <el-dropdown>
          <span class="el-dropdown-link">
            <label>你好，{{ user_name }}</label>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><a @click="logout">登出</a></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="menu-bar">
          <a @click="zToggleMenu()"><i class="icon icon-bars"></i></a>
      </div>
    </header>
    <div class="container-fluid">
      <div class="layout-content">
        <div class="layout-sidebar">
          <div style="height:60px;" class="home_title_link">
            <router-link :to="{ name: 'home'}">
              <h1>NUMEN</h1>
              <h2>NUMEN</h2>
            </router-link>
          </div>
          <div>
            <v-menu :collapsed="collapsed" :unique-opened="false" :router="true">
              <v-submenu index="1">
                  <template slot="title"><i class="icon icon-bars"></i>核心链路</template>
                  <v-menu-item index="/graph/banma">Banma核心调用链</v-menu-item>
                  <v-menu-item index="/graph/waimai">Waimai核心调用链</v-menu-item>
                  <v-menu-item index="/graph/flight">Flight核心调用链</v-menu-item>
                  <v-menu-item index="/graph/hotel">Hotel核心调用链</v-menu-item>
                  <v-menu-item index="/graph/meishi">Meishi核心调用链</v-menu-item>
                  <v-menu-item index="/graph/movie">Movie核心调用链</v-menu-item>
                  <v-menu-item index="/graph/pay">Pay核心调用链</v-menu-item>
                  <v-menu-item index="/graph/web">Web核心调用链</v-menu-item>
                  <v-menu-item index="/graph/wpt">Wpt核心调用链</v-menu-item>
                  <v-menu-item index="/graph/zc">Zc核心调用链</v-menu-item>
                  <v-menu-item index="/graph/bb">Bb核心调用链</v-menu-item>
                  <v-menu-item index="/graph/giant">Giant核心调用链</v-menu-item>
                  <v-menu-item index="/graph/hbdata">Hbdata核心调用链</v-menu-item>
                  <v-menu-item index="/graph/ia">Ia核心调用链</v-menu-item>
                  <v-menu-item index="/graph/nlpml">Nlpml核心调用链</v-menu-item>
                  <v-menu-item index="/graph/sjst">Sjst核心调用链</v-menu-item>
                  <v-menu-item index="/graph/train">Train核心调用链</v-menu-item>
                  <v-menu-item index="/graph/travel">Travel核心调用链</v-menu-item>
                  <v-menu-item index="/graph/trip">Trip核心调用链</v-menu-item>
                  <v-menu-item index="/graph/tower">Tower核心调用链</v-menu-item>
                  <v-menu-item index="/graph/dataapp">Dataapp核心调用链</v-menu-item>
                  <v-menu-item index="/graph/adp">Adp核心调用链</v-menu-item>
                  <v-menu-item index="/graph/recsys">Recsys核心调用链</v-menu-item>
                  <v-menu-item index="/graph/config">配置</v-menu-item>
              </v-submenu>
              <v-submenu index="2">
                  <template slot="title"><i class="icon icon-bars"></i>全量链路</template>
                  <v-menu-item index="/graph/not_core_link/">节点调用关系</v-menu-item>
                  <v-menu-item index="/graph/operations/">报警信息集</v-menu-item>
                  <v-menu-item index="/graph/call_screen/">调用链screen</v-menu-item>
              </v-submenu>
              <v-submenu index="3">
                  <template slot="title"><i class="icon icon-bars"></i>红盘链路</template>
                  <v-menu-item index="/graph/red/">红盘节点调用关系</v-menu-item>
              </v-submenu>
              <v-submenu index="4">
                  <template slot="title"><i class="icon icon-bars"></i>网络诊断</template>
                  <v-menu-item index="/net/">诊断记录</v-menu-item>
              </v-submenu>
              <v-submenu index="5">
                  <template slot="title"><i class="icon icon-bars"></i>新增栏目</template>
                  <v-menu-item index="/tree/">子栏目1</v-menu-item>
                  <v-menu-item index="/treeGraph/">子栏目2</v-menu-item>
              </v-submenu>
            </v-menu>
          </div>
        </div>
        <div class="layout-main" :style="{display: layout_main_display}">
          <router-view></router-view>
        </div>
        <div class="layout-main" id="error_content" :style="{display: error_content_display}">
          <p>后台程序挂了，请大象扫描二维码联系解决</p>
          <img src="./assets/images/erweima.png">
        </div>
      </div>
    </div>
    <footer class="layout-footer">&copy;2017 SRE</footer>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'app',
    data () {
      return {
        user_name: '',
        collapsed: false,
        redirect_url: '',
        layout_main_display: '',
        error_content_display: 'none'
      }
    },
    mounted () {
      this.getProfile()
    },
    methods: {
      zToggleMenu () {
        this.collapsed = !this.collapsed
      },
      logout () {
        // 后端接口清除登录状态
        this.logOut()
      },
      getProfile () {
        $.ajax({
          url: '/api/dns/get_login_info/',
          type: 'GET',
          dataType: 'json',
          success: (data) => {
            if (data.username !== null & data.username !== '') {
              this.$store.dispatch('setUserName', data.username)
              this.user_name = this.$store.getters.getUserName
              this.redirect_url = data.redirect_url
            } else {
              window.location.href = data.redirect_url
            }
          },
          error: (data) => {
            this.layout_main_display = 'none'
            this.error_content_display = ''
          }
        })
      },
      logOut () {
        window.location.href = '/api/dns/logout/'
      }
    }
  }
</script>
<style>
.login {
  display: block;
  padding-top: 20px;
  float: right;
  margin: 0;
}
.home_title_link .router-link-active {
  color: #fff;
  text-decoration: none;
}
</style>
