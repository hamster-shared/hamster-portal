<template>
  <TransitionGroup
    tag="ul" class="flex"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter">
    <li
      v-for="(item,index) in boardNumber"
      :key="index"
      :data-index="index+3"
    >
      {{ item }}
    </li>
  </TransitionGroup>
</template>
<script setup>
import gsap from 'gsap';

const props = defineProps({
    boardNumber: Array,
});
const { boardNumber } = toRefs(props);
console.log("boardNumber:",boardNumber.value);

const onBeforeEnter = (el) => {
  gsap.to(el, {
    opacity: 0,
    y: 90,
    height: 0
  })
}
const onEnter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    transition: 'all',
    y: 0,
    ease: 'out',
    delay: el.dataset.index * 0.1,
    onComplete: done
  })
}
</script>
<style></style>