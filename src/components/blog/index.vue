<template>
    <!-- <el-scrollbar> -->
        <h1> 博客文章列表页</h1>
        <!-- <el-menu default-active="2" router>
            <el-menu-item index="blog/detail">主页</el-menu-item>
        </el-menu> -->
        <!-- <RouterView /> -->

        <el-button type="primary" @click="clickAddBlog = true">添加文章</el-button>
        <div class="content" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
            <div class="everyOne" v-for="i in count" :key="i" @click="clickBlogPage(i)">
                <p class="title"> title{{ i }} </p>
                <p class="blogContent"> content{{ i }} </p>
            </div>
            <p v-if="loading">Loading...</p>
        </div>

    <addBlog v-if="clickAddBlog" @closeAdd="clickCloseAdd" @submit="submit" />
    <el-backtop :right="100" :bottom="100" class="backtop">
        <el-icon><Top /></el-icon>
        <p style="font-size: 10px;">回到顶部</p>
    </el-backtop>

</template>


<script setup>
import { RouterView } from 'vue-router';
import { computed, ref, watch } from 'vue'
import { ElMessage } from 'element-plus';
import { useRouter, useRoute } from 'vue-router';
import addBlog from './components/add.vue'
 
const router = useRouter()
const route = useRoute()
const clickAddBlog = ref(false)

// 每次加载count条数据
const count = ref(10)
// 总共数据条数
const totalCount = ref(25)

// 当前已经加载的数据条数
const currentCount = ref(0)
const loading = ref(false)
const noMore = computed(() => currentCount.value > totalCount.value)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    try{
        currentCount.value = count.value
        currentCount.value += 5
        if (currentCount.value > totalCount.value) {
            console.log('本次加载，没有其他数据了！')
            currentCount.value += 1
            return
        }else{
            count.value = currentCount.value
        }
    }finally{
        loading.value = false
    }
  }, 2000)
}

function clickBlogPage(i){
    console.log('clickBlogPage')
    console.log(i)

    // 调用接口，打开新标签页，跳转到博客详情页
    const tagert = router.resolve({
        'name': 'blogDetail',
        'query': {
            'index': i,
            'title': 'title'+i,
        }
    })
    window.open(tagert.href, '_blank')
}    


watch(
    () => noMore.value,
    (newVal) =>{
    if (newVal) {
        ElMessage.warning('没有更多数据了')
    }
})
  

function clickCloseAdd() {
    clickAddBlog.value = false
}

function submit(data) {
    console.log(data)
    clickAddBlog.value = false
}



</script>



<style lang="scss" scoped>

.content {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 200px;
    width: 60%;

    align-items: center;
    justify-content: center;

    .everyOne {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: green;
        color: white;
        height: 150px;
        margin: 10px;
        border-radius: 10px;
    }

    .everyOne:hover {
        cursor: pointer;
    }

    .title {
        margin-top: 20px;
        margin-left: 15%;
        font-size: 30px;
    }

    .blogContent {
        margin-top: 10px;
        margin-left: 15%;
        font-size: 20px;
    }
   
}

.backtop {
    display: flex;
    flex-direction: column;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    cursor: pointer;
}
.backtop:hover {
    background-color: #409eff;
    color: white;
}


</style>
