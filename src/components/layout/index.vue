<template>
    <el-container style="height: 100vh;">
        <el-header style="background-color: green;">
            <!-- <el-row>
                <el-col :span="1" style="color: white;">logo</el-col>
            </el-row> -->
            <h2 style="margin-top: 10px;">我是logo</h2>
        </el-header>
        <el-container>
            <el-aside style="background-color: black; width: 200px;">
                <el-menu router :default-active="activeIndex" >
                    <template v-for="(route, index) in layoutRoutes[0].children">
                        <el-menu-item :index="route.path" >
                            <el-icon>
                                <component :is="route.meta.icon"></component>
                            </el-icon>
                            <span slot="title">{{route.meta.title}}</span>
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

const route = useRoute();
const router = useRouter();

const activeIndex = '/layout/default';

</script>




