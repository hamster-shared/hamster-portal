<template>
  <div class="free-bg py-[40px] md:py-[90px] text-center">
    <div class="container mx-auto px-5">
      <div class="flex justify-center">
        <img src="~/assets/images/logo.png" class="h-[60px]"/>
      </div>
      <div class="font-extrabold text-[16px] md:text-[36px] leading-[34px] md:leading-[74px] font-family-extraBold">Get started with Hamster </div>
      <div class=" mb-[20px] md:mb-[30px] text-[#FFFFFF] leading-[16px] md:leading-[35px] text-[10px] md:text-[18px] font-light md:font-medium font-family-medium">Build your dreams in Web3 with ease</div>
      <button class="btn-css !font-normal !text-[8px] md:!text-[14px]" @click="gotoAline">Start building for free</button>
      <!-- <div id="free-btn">
        <Transition name="free">
          <button v-if="showFreeBtn" class="btn-css" @click="gotoAline">Start building for free</button>
        </Transition>
      </div> -->
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

// function handleScroll() {
//   let freeBtnEle = document.getElementById("free-btn");
//   let freeBtnH = 50;  //freeBtnEle.clientHeight; //按钮的的高度
//   let freeTopH = freeBtnEle.offsetTop; //距离顶部的高度，包含滚动条
//   let windowH = window.screen.height; //显示屏高度 
//   let scrollH = document.body.scrollTop || document.documentElement.scrollTop; //滚动的高度
//   if (beforeScrollH.value < scrollH) { // 向下滚动
//     if (freeTopH - windowH + freeBtnH < scrollH) {
//       showFreeBtn.value = true;
//     }
//   } else { //向上滚动
//     if (freeTopH - windowH + freeBtnH < scrollH && scrollH < freeTopH - windowH + 2 * freeBtnH) {
//       showFreeBtn.value = false;
//     }
//   }
//   beforeScrollH.value = scrollH
// }
// onMounted(()=>{
//   window.addEventListener("scroll", handleScroll)
//   handleScroll();
// })
// onUnmounted(() => {
//   window.removeEventListener("scroll", handleScroll)
// })
</script>
<style lang="less" scoped>

.free-bg{
  background: url("~/assets/images/free-bg.png") no-repeat center ;
  background-size: 100% 100%;
}
</style>