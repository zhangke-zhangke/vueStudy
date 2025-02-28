<template>

  <!-- <blogChildPage :title="bData.title" :content="bData.content" @updateTitle="updateTitle" @updateContent="updateContent" #title="子模板" /> -->

  <el-button @click="addFlag = true" class="addButton">Add Blog</el-button>
  <addPage v-if="addFlag" @submit="addBlog" @closeAdd="closeAdd" />

  <el-table :data="tableData" style="width: 100%" @row-click="inBlog">
    <!-- <el-table-column fixed="left" prop="index" label="Index" width="100"></el-table-column> -->
    <el-table-column fixed="left" prop="title" label="Title" width="100" />
    <el-table-column prop="content" label="Content" width="2000" />
    <el-table-column fixed="right" label="Action" width="200">
        <template #default="scope">
            <el-button @click="editBlog(scope.row.index)" style="background-color: #409eff; color: #fff;">编辑</el-button>
            <el-button @click="dropBlog(scope.row.index)" style="background-color: #409eff; color: #fff;">删除</el-button>
        </template>
    </el-table-column>
  </el-table>
  
</template>






<script setup>
import { reactive, ref } from 'vue';
import blogChildPage from '@/components/blogChildComponents/index.vue'
import addPage from '@/components/blogChildComponents/add.vue'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter();

const addFlag = ref(false);

// const bData = reactive({
//   title: 'Blog Main Page',
//   content: 'This is the main page of my blog.'
// });

const tableData = [
    { index: 0, title: 'Blog1', content: 'This is the first blog.', link: 'http://localhost:5173/#/blog/detail?index=0&title=Blog1' },
    { index: 1, title: 'Blog2', content: 'This is the second blog.', link: 'https://www.baidu.com' },
    { index: 2, title: 'Blog3', content: 'This is the third blog.' }
]



function addBlog(data) {
    addFlag.value = false;
    ElMessage.success(`Blog added ${data}`);
}


function closeAdd() {
    addFlag.value = false;
}


function inBlog(row) {
    // 跳转二级路由，不行。页面内容始终是此页面的。
    // router.push({ path: '/blog/detail', query: { index: row.index, title: row.title } });
    router.push({ path: '/blogDetail', query: { index: row.index, title: row.title } });
}








</script>





<style scoped>

.addButton {
    display: flex;
    margin-left: auto;
    /* width: 100%; */
    height: 40px;
    background-color: #409eff;
    color: #fff;
    /* border-radius: 4px; */
    /* margin-top: 20px; */
    /* cursor: pointer; */
}

.addButton:hover {
    background-color: #66b1ff;
}

</style>




