<template>
  <div class="free-bg py-[40px] md:py-[160px] text-center">
    <div class="container mx-auto px-5">
      <div class="font-extrabold text-[25px] md:text-[72px] leading-[74px] font-family-bold">Get started with Hamster </div>
      <div class="mt-[10px] md:mt-[80px] mb-[20px] md:mb-[40px] text-[#999999] text-[14px] md:text-[24px] font-light md:font-medium font-family-medium">Build your dreams in Web3 with ease</div>
      <div id="free-btn">
        <Transition name="free">
          <button v-if="showFreeBtn" class="btn-css" @click="gotoAline">Start building for free</button>
        </Transition>
      </div>
    </div>
  </div>
</template>
<script setup>

const showFreeBtn = ref(false);
const beforeScrollH = ref(0);
  
const alineLink = computed(() => "https://develop.alpha.hamsternet.io/")
const gotoAline = () => {
  window.location.href = alineLink.value
}

function handleScroll() {
  let freeBtnEle = document.getElementById("free-btn");
  let freeBtnH = 50;  //freeBtnEle.clientHeight; //按钮的的高度
  let freeTopH = freeBtnEle.offsetTop; //距离顶部的高度，包含滚动条
  let windowH = window.screen.height; //显示屏高度 
  let scrollH = document.body.scrollTop || document.documentElement.scrollTop; //滚动的高度
  if (beforeScrollH.value < scrollH) { // 向下滚动
    if (freeTopH - windowH + freeBtnH < scrollH) {
      showFreeBtn.value = true;
    }
  } else { //向上滚动
    if (freeTopH - windowH + freeBtnH < scrollH && scrollH < freeTopH - windowH + 2 * freeBtnH) {
      showFreeBtn.value = false;
    }
  }
  beforeScrollH.value = scrollH
}
onMounted(()=>{
  window.addEventListener("scroll", handleScroll)
  handleScroll();
})
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>
<style lang="less" scoped>

.free-bg{
  background: url("~/assets/images/free-bg.png") no-repeat center #000000;
  background-size: contain;
}
.free-enter-active{
  -webkit-animation: scaleS 2s 1;
  animation: scaleS 2s 1; 
}
@keyframes scaleS {
  
  0% {
    opacity: 0;
    transform: scale(0.2, 0.2);
  }
  100% {
    opacity: 100;
    transform: scale(1, 1);
  }
}
.free-leave-active{
  -webkit-animation: scaleH 2s 1;
  animation: scaleH 2s 1; 
}
@keyframes scaleH {
  
  0% {
    opacity: 100;
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    transform: scale(0.2, 0.2);
  }
}
</style>