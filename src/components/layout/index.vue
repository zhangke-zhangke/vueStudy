<template>
    <el-container style="height: 100vh;">
        <el-header style="background-color: green; display: flex;">
            <!-- <el-row>
                <el-col :span="1" style="color: white;">logo</el-col>
            </el-row> -->
            <h2 style="margin-top: 10px;">我是logo</h2>
            <el-button primary style="margin-left: auto; margin-top: 10px; color: black;" @click="logout">退出</el-button>
        </el-header>
        <el-container>
            <el-aside style="background-color: black; width: 200px;">
                <el-menu router :default-active="activeIndex" >
                    <template v-for="(route, index) in layoutRoutes[0].children" :key="index">
                        <el-menu-item :index="route.path" >
                            <el-icon>
                                <component :is="route.meta.icon"></component>
                            </el-icon>
                            <span slot="title">{{route.meta.title}}</span>
                            <h1>{{ index }}</h1>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <el-main style="background-color: pink;">
                <RouterView></RouterView>
            </el-main>
        </el-container>
    </el-container>

    

</template>


<script setup>
import { RouterView } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
import { layoutRoutes } from '@/router/routerMap.js';
import { onBeforeMount, onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { ElMessage } from 'element-plus';


const route = useRoute();
const router = useRouter();

const userStore = useUserStore();

const activeIndex = '/layout/default';


// 假的一个登录检验
const isLogin = ref(route.query.isLogin ? route.query.isLogin : false)
function logout() {
    isLogin.value = false;
    router.push('/');
}


// onMounted(
//     () => {
//         if (userStore.userName === ''){
//             ElMessage.error('请先登录')
//             router.push('/')
//         }else{
//             console.log(userStore.userName)
//         }
//     }
// )

</script>




