<template>
  <div class="h-screen relative" :class="[$device.isMobile ? 'about-top-bg-phone' : 'about-top-bg ']">
    <div class="container mx-auto px-5 pt-[140px] md:pt-[180px]">
      <div class="text-center">
        <div class="mb-[50px] text-[21px] leading-[25px] font-bold font-family-extraBold flex justify-center">
          <div class="text-color-css">OUR MISSION</div>
        </div>
        <div class="text-[16px] md:text-[24px] leading-[21px] md:leading-[35px] font-medium md:font-light text-[#FFFFFF] font-family-light flex justify-center">
          <div class="md:w-[796px]">One-Stop infrastructure, Developer Toolkit DevOps Framework in Web3.0, achieving automatic code/contract writing, build, check, deployment and more, empowering projects in Web3.0 to improve their coding and delivery speed, quality and efficiency, as well as product reliability & safety</div>
        </div>
      </div>
    </div>
    <div class="flex justify-center absolute bottom-[60px] w-full">
      <span class="text-[#999999] text-base font-light font-family-light">Investors</span>
      <img src="~/assets/images/waterdrip.png" class="h-[30px] mx-[26px]"/>
      <img src="~/assets/images/stratified.png" class="h-[30px]"/>
    </div>
  </div>
  <div class="container mx-auto px-5 my-[60px] md:my-[180px]">
    <div>
      <div class="area-title text-center !mt-0 mb-[40px] md:mb-[100px]">Dashboard</div>
      <div id="dashboard-div" class="md:grid md:grid-cols-5 text-center">
          <div v-for="(item, index) in dashboardList" :key="index">
            <div class="about-scroll-content">
              <div class="scroll-text about-board-number" :class="[{'scroll-up':showDashboardNumber}]" :style="'transition-delay:'+(index+1)+'00ms'">{{ item.number }}</div>
            </div>
            <div class="about-board-text" @click="showBoardNumber">{{ item.title }}</div>
          </div>
          <!-- <div>
            <div class="about-board-number">
              <TransitionText :boardNumber="boardNumber1"></TransitionText>
            </div>
            <div class="about-board-text" @click="showBoardNumber">Developers</div>
          </div> -->
      </div>
    </div>
    <div class="mt-[60px] md:mt-[120px]">
      <div class="area-title text-center !mt-0 mb-[40px] md:mb-[100px]">Key Advantages</div>
      <div class="md:grid md:grid-cols-3 md:gap-16 text-center">
        <div class="md:mb-0 mb-[60px]">
          <div class="img-center">
            <img src="~/assets/images/about-key-1.svg" class="about-key-img"/>
          </div>
          <div class="area-desc">Dapps run at full speed and update iteratively through DevOps under automation technology </div>
        </div>
        <div class="md:mb-0 mb-[60px]">
          <div class="img-center">
            <img src="~/assets/images/about-key-2.svg" class="about-key-img"/>
          </div>
          <div class="area-desc">~35% cost and 40% time of development are saved with support of Hamster Developer Toolkits</div>
        </div>
        <div>
          <div class="img-center">
            <img src="~/assets/images/about-key-3.svg" class="about-key-img"/>
          </div>
          <div class="area-desc">Saves 30% extra for DApps using Hamster RPC service</div>
        </div>
      </div>
    </div>
    <div class="pt-[60px] md:pt-[120px]">
      <div class="text-center md:text-left flex">
        <div class="w-1/2 hidden md:inline-block">
          <img src="~/assets/images/about-team-img.png" class="w-full"/>
        </div>
        <div class="md:w-1/2 md:pl-[70px] flex items-center">
          <div>
            <div class="area-title !mt-0 mb-[40px] md:mb-[20px]">Core Dev Team</div>
            <img src="~/assets/images/about-team-img.png" class="w-full inline-block md:hidden"/>
            <div class="area-desc flex justify-center">
            Formal Fintech listed company's most elite cloud computing & blockchain team, having been proved privacy professional in most sensitive Fintech DevOps: 6000+ DevOps & 1000+ Fintech Projects simultaneously in the past 20 yrs+
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[60px] md:mt-[120px]">
      <div class="text-[12px] md:text-[24px] font-bold flex justify-center !mt-0 mb-[40px] md:mb-[100px]">
        <div class="text-color-css">5 Issued Grants & 8 EcoSystems</div>
      </div>
      <img v-if="$device.isMobile" src="~/assets/images/about-logos-phone.png" class="w-full"/>
      <img v-else src="~/assets/images/about-logos.png" class="w-full"/>
      <!-- <div class="md:flex justify-around">
        <div class="flex justify-around md:w-3/5">
          <img src="~/assets/images/Issued-Grants-1.png" class="about-logo-img1"/>
          <img src="~/assets/images/Issued-Grants-2.png" class="about-logo-img1"/>
          <img src="~/assets/images/Issued-Grants-3.png" class="about-logo-img1"/>
        </div>
        <div class="flex justify-around md:w-2/5 mt-[50px] md:mt-0">
          <img src="~/assets/images/Issued-Grants-4.png" class="about-logo-img1"/>
          <img src="~/assets/images/Issued-Grants-5.png" class="about-logo-img1"/>
        </div>
      </div>
      <div class="md:flex justify-around mt-[50px] md:mt-[80px]">
        <div class="flex md:w-1/2 justify-around">
          <img src="~/assets/images/EcoSystems-1.png" class="about-logo-img2"/>
          <img src="~/assets/images/EcoSystems-2.png" class="about-logo-img2"/>
          <img src="~/assets/images/EcoSystems-3.png" class="about-logo-img2"/>
          <img src="~/assets/images/EcoSystems-4.png" class="about-logo-img2"/>
        </div>
        <div class="flex justify-around md:w-1/2 mt-[50px] md:mt-0">
          <img src="~/assets/images/EcoSystems-5.png" class="about-logo-img2"/>
          <img src="~/assets/images/EcoSystems-6.png" class="about-logo-img2"/>
          <img src="~/assets/images/EcoSystems-7.png" class="about-logo-img2"/>
          <img src="~/assets/images/EcoSystems-8.png" class="about-logo-img2"/>
        </div>
      </div> -->
    </div>
  </div>
  <StartBuild></StartBuild>
</template>
<script setup>
import StartBuild from "../index/components/StartBuild.vue";
import TransitionText from "./components/TransitionText.vue";

const dashboardList = ref([
  {title: 'Developers', number: '1K+'},
  {title: 'Workflows', number: '2K+'},
  {title: 'EcoSystems', number: '8'},
  {title: 'Templates', number: '20+'},
  {title: 'Blockchains', number: '10+'},
])
const showDashboardNumber = ref(false);
const showBoardNumber = () => {
  showDashboardNumber.value = true;
}



function handleScroll() {
  let dashboardEle = document.getElementById("dashboard-div");
  let dashboardH = dashboardEle.clientHeight; //div的的高度
  let dashboardTopH = dashboardEle.offsetTop; //距离顶部的高度，包含滚动条
  let windowH = window.screen.height; //显示屏高度 
  let scrollH = document.body.scrollTop || document.documentElement.scrollTop; //滚动的高度
  console.log("left:", dashboardTopH);
  console.log("right:",scrollH + windowH);
  if (dashboardTopH < scrollH + windowH) {
    showBoardNumber();
  }
}
onMounted(()=>{
  window.addEventListener("scroll", handleScroll)
})
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>
<style lang="less" scoped>

.about-top-bg{
  background: url("~/assets/images/about-top-bg.jpg") no-repeat center;
  background-size: 100% 100%;
}
.about-top-bg-phone{
  background: url("~/assets/images/about-top-bg-phone.jpg") no-repeat center;
  background-size: 100% 100%;
}
.about-team-bg{
  background: url("~/assets/images/about-team-bg.png") no-repeat center;
}
.about-team-bg-mobile{
  background-size: cover;
}
.about-team-bg-win{
  background-size: contain;
}

.about-scroll-content{
  overflow: hidden;
  margin: auto;
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
.scroll-text{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 88px;
}
.scroll-up{
  top: 0px;
  transition: top 1s;
}

</style>
<style>
.about-scroll-content{
  @apply h-[73px] md:h-[88px];
}
.about-board-number{
  @apply text-[60px] md:text-[72px] font-bold text-[#000000] leading-[73px] md:leading-[88px] h-[73px] md:h-[88px] flex justify-center;
  font-family: Montserrat-Bold, Montserrat;
}
.about-board-text{
  @apply text-[14px] md:text-[21px] font-medium md:font-bold leading-[20px] md:leading-[25px] text-[#40425C] md:text-[#959595] mb-[50px] md:mb-0 mt-0 md:mt-[20px];
  font-family: Montserrat-Bold, Montserrat;
}
.about-logo-img1{
  @apply h-[32px] md:h-[45px]
}
.about-logo-img2{
  @apply h-[37px] md:h-[53px]
}
.about-key-img{
  @apply h-[175px];
}
</style>