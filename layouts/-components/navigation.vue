<template>
  <div class="text-[#A1A4BB] text-[16px] pl-[20px] leading-[42px] flex">
    <div>{{ levelOne }}</div>
    <div>&nbsp; - &nbsp;</div>
    <div>{{ levelTwo }}</div>
  </div>
</template>
<script setup>
import { toRefs } from 'vue';
const props = defineProps({
  levelOne: {
    type: String,
    default: '',
  },
  levelTwo: {
    type: String,
    default: '',
  },
})

const { levelOne, levelTwo } = toRefs(props);

</script>
<style scoped></style>