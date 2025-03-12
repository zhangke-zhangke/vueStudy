

<template>

  <div>
    <p>{{ title }}</p>
    <p>{{ content }}</p>
  </div>

</template>



<script setup>


const props = defineProps({
  title: {
    type: String,
    default: 'default title'
  },
  content: {
    type: String,
    default: 'default content'
  }
})

const emits = defineEmits(['changeData', 'confimCommit'])

function confimCommit() {

}

</script>



