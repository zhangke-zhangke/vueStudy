<template>
    <!-- <img src="@/assets/imgs/logo.ico" alt="logo"> -->
    <div id="mainPage">
        <div id="nav-menu">
            <el-menu 
            :default-active="'2'" 
            @select="handleSelect"
            mode="horizontal"
            text-color="#fff"
            active-text-color="#ffd04b"
            background-color="#545c64"
            unique-opened
            menu-trigger="hover"
            router
            collapse-transition
            >
                <el-menu-item index="/word">word</el-menu-item>
                <el-sub-menu index="2">
                    <template #title>excel</template>
                    <el-menu-item index="21">menu2-1</el-menu-item>
                    <el-menu-item index="22">menu2-2</el-menu-item>
                    <el-menu-item index="23">menu2-3</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="3" target="_blank">pdf</el-menu-item>
                <el-sub-menu index="4">
                    <template #title>img</template>
                    <el-menu-item index="41">remove_watermark</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="5" target="_blank">mp3</el-menu-item>
                <el-menu-item index="6" target="_blank">translate</el-menu-item>

                <!-- <div class="me">
                    <p>关于</p>
                    <p>帮助</p>
                    <p>反馈</p>
                    <p>联系方式</p>
                </div> -->
                <a href="http://www.baidu.com" class="right-item">关于</a>
            </el-menu>
        </div>
        <div id="mainContent">
            <!-- <routerView></routerView> -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
    import { RouterView } from 'vue-router';


</script>

<style scoped>
#mainPage {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;

    #nav-menu {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        /* z-index: 1000; */
    }

    #mainContent {
        flex: auto;
        margin-top: 60px; /* 根据菜单高度调整 */
        padding: 20px;
        min-height: calc(100vh - 60px); /* 确保内容区域占满剩余空间 */
    }

}

.right-item {
  margin-right: 0px;
  margin-left: auto; /* 将“关于”按钮推到右侧 */
}



</style>