<template>
    <div>
      <h1>Counter</h1>
      <button @click="increment">Increment</button>
      <p>Current count: {{ count }}</p>
    </div>

    <div>
      <el-input v-model="inputContent.content"></el-input>
    </div>

    <!-- 动态引用组件，:key绑定组件实例，提升渲染效率 -->
    <component :is="ComMap[activeComponent]" :key="activeComponent" :comData="comData"></component>

    <!-- 点击按钮添加人员信息，@click.once控制按钮只能点一次 -->
    <el-button @click.once="alertComData">点击添加赵六人员信息</el-button>
</template>
  
<script setup>
import { reactive, ref, watch, watchEffect } from 'vue'
import { ComMap } from './index.js'

const activeComponent = ref('text')

const count = ref(0)
const inputContent = reactive({ content: '' })

function increment() {
    count.value++
}

// 模拟接口数据
const comData = ref([
  {
    'id': '1',
    'name': '张三',
    'age': 20
  },
  {
    'id': '2',
    'name':'李四',
    'age': 25
  }, 
  {
    'id': '3',
    'name': '王五',
    'age': 30
  }
])


watch(
  // () => count.value,
  // 可以直接监听count，因为count是响应式变量。
  count,
  (newValue, oldValue, onInvalidate) => {
  console.log(`oldValue: ${oldValue}, newValue: ${newValue}`)
})

watch(
  () => inputContent.content,
  // 监听回调函数，newValue为新值，oldValue为旧值，onInvalidate为一个函数，用于取消上一次监听时执行的副作用
  (newValue, oldValue, onInvalidate) => {
    console.log(`inputContent oldValue: ${oldValue}, newValue: ${newValue}`)
  },
  // immediate在最开始执行一次回调函数，后面在监听值变化时再执行回调函数
  // deep开始深度监听，用于监听多层嵌套的对象（监听使用reactive创建的对象默认是深度监听）。
  { immediate: true, deep: true }
)

// 监听数组对象值变化，开启深度监听。
watch(
  comData,
  (newValue, oldValue, onInvalidate) => {
    console.log(`comData oldValue: ${oldValue}, newValue: ${newValue}`)
    console.dir(newValue)
    console.dir(oldValue)
  },
  { deep: true }
)


// watchEffect(() => {
//   console.log('watchEffect', comData.value)
// })

function alertComData() {
  comData.value.push({ 'id': '4', 'name': '赵六', 'age': 26 })
}

</script>
  
<!-- <style scoped lang="scss"> -->
<style scoped>
  h1 {
    color: blue;
  }
</style>
  