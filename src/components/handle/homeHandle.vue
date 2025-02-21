<template>
    <el-container class="layout-container">
        <el-header class="header">
            <el-menu 
            :default-active="activeRoutePath"
            mode="horizontal"
            text-color="black"
            active-text-color="#ffd04b"
            background-color="white"
            unique-opened
            menu-trigger="hover"
            router
            collapse-transition
            >
                <img src="@/assets/imgs/logo.ico" alt="logo" @click="handleLogoClick">
                <el-menu-item index="/word">word</el-menu-item>
                <el-sub-menu index="/excel">
                    <template #title>excel</template>
                    <el-menu-item index="/excel1">menu2-1</el-menu-item>
                    <el-menu-item index="/excel2">menu2-2</el-menu-item>
                    <el-menu-item index="/excel3">menu2-3</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="/pdf">pdf</el-menu-item>
                <el-sub-menu index="/img">
                    <template #title>img</template>
                    <el-menu-item index="/img1">remove_watermark</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="/mp3">mp3</el-menu-item>
                <el-menu-item index="/translate">translate</el-menu-item>

                <div class="right-menu">
                <el-menu-item index="/record">历史记录</el-menu-item>
                <el-menu-item index="/about">关于</el-menu-item>
                <!-- <a href="http://www.baidu.com" class="right-item">关于</a> -->
              </div>
            </el-menu>
        </el-header>


        <el-container>
            <el-main>
                <div id="mainContent">
                    <router-view v-if="activeRoutePath !== '/handle'"></router-view>
                    <div v-else>
                        <h1>欢迎使用在线officeTools工具</h1>
                        <p>officeTools是一个基于vue的在线工具集，主要用于处理各种文件，如word、excel、pdf、图片、音频、视频等。</p>
                        <p>欢迎使用，有任何问题请联系作者：</p>
                        <p>作者：张可乐</p>
                    </div>
                </div>
            </el-main>
        </el-container>
    </el-container> 
</template>


<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()


const activeRoutePath = ref('/')

watch(
    () => route.path,
    (newPath) => {
        console.log(`route发生变化，新的路径是:${newPath}`)
        activeRoutePath.value = newPath;
    },
    { immediate: true }
)


function handleLogoClick(){
    console.log('logo被点击了')
    router.push('/handle')
}


</script>

<style scoped>
.layout-container {
    height: 100vh;
}

.header {
    margin-top: 0px;
    padding: 0px;
    height: 60px;
    width: 100%;
    display: flex;
}

.el-menu-item{
    padding-left: 30px;
}
.el-sub-menu {
    padding-left: 30px;
}

.mainContent {
    height: 100%;
    margin-top: 60px; /* 根据菜单高度调整 */
    padding: 20px;
    min-height: calc(100vh - 60px); /* 确保内容区域占满剩余空间 */
}

.right-menu {
  display: flex;
  margin-left: auto;
  margin-right: 40px;
}

.el-menu{
    width: 100%;
}

</style>