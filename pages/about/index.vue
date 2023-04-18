<template>
  <div :class="[$device.isMobile ? 'about-top-bg-phone' : 'about-top-bg']">
    <div class="container mx-auto px-5 pt-[140px] md:pt-[250px]">
      <div class="text-center">
        <div class="mb-[50px] text-[24px] md:text-[50px] leading-[36px] md:leading-[74px] font-extrabold font-family-bold text-[#FFFFFF]">About Hamster</div>
        <div class="text-[16px] md:text-[24px] leading-[21px] md:leading-[35px] font-medium text-[#999999] font-family-medium flex justify-center">
          <div class="md:mx-[60px]">One-Stop infrastructure, Developer Toolkit DevOps Framework in Web3.0, achieving automatic code/contract writing, build, check, deployment and more, empowering projects in Web3.0 to improve their coding and delivery speed, quality and efficiency, as well as product reliability & safety.</div>
        </div>
      </div>
      <div class="flex justify-center pt-[90px] md:pt-[200px] pb-[40px] md:pb-[60px]">
        <span class="text-[#999999] text-base font-light font-family-light">Investors</span>
        <img src="~/assets/images/waterdrip.png" class="h-[30px] mx-[26px]"/>
        <img src="~/assets/images/stratified.png" class="h-[30px]"/>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-5 mt-[60px] md:mt-[180px]">
    <div>
      <div class="area-title text-center !mt-0 mb-[40px] md:mb-[100px]">Dashboard</div>
      <div id="dashboard-div" class="md:grid md:grid-cols-5 text-center">
          <div>
            <div class="about-board-number">
              <TransitionText :boardNumber="boardNumber1"></TransitionText>
            </div>
            <div class="about-board-text" @click="showBoardNumber">Developers</div>
          </div>
          <div>
            <div class="about-board-number">
              <TransitionText :boardNumber="boardNumber2"></TransitionText>
            </div>
            <div class="about-board-text">Workflows</div>
          </div>
          <div>
            <div class="about-board-number">
              <TransitionText :boardNumber="boardNumber3"></TransitionText>
            </div>
            <div class="about-board-text">EcoSystems</div>
          </div>
          <div>
            <div class="about-board-number">
              <TransitionText :boardNumber="boardNumber4"></TransitionText>
            </div>
            <div class="about-board-text">Templates</div>
          </div>
          <div>
            <div class="about-board-number">
              <TransitionText :boardNumber="boardNumber5"></TransitionText>
            </div>
            <div class="about-board-text !mb-0">Blockchains</div>
          </div>
      </div>
    </div>
    <div class="mt-[60px] md:mt-[180px]">
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
  </div>
  <div class="about-team-bg" :class="[$device.isMobile ?'about-team-bg-mobile' : 'about-team-bg-win']">
    <div class="container mx-auto px-5 pt-[60px] md:pt-[180px]">
      <div class="text-center">
        <div class="area-title !mt-0 mb-[40px] md:mb-[100px]">Core Dev Team</div>
        <div class="area-desc w-full pb-[60px] md:pb-[180px] flex justify-center">
          <div class="md:w-[720px]">Formal Fintech listed company's most elite cloud computing & blockchain team, having been proved privacy professional in most sensitive Fintech DevOps: 6000+ DevOps & 1000+ Fintech Projects simultaneously in the past 20 yrs+.    </div>
        </div>
        <div class="area-title !mt-0 mb-[40px] md:mb-[100px]">5 Issued Grants & 8 EcoSystems </div>
        <div class="flex justify-evenly flex-wrap">
          <img src="~/assets/images/about-grant.png" class="about-logo-img1"/>
          <img src="~/assets/images/about-web3.png" class="about-logo-img1"/>
          <img src="~/assets/images/about-f.png" class="about-logo-img1"/>
          <img src="~/assets/images/about-starknet.png" class="about-logo-img1 mt-[30px] md:mt-0"/>
          <img src="~/assets/images/about-igorand.png" class="about-logo-img1 mt-[30px] md:mt-0"/>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-5 mb-[60px] md:mb-[180px]">
    <div class="text-center">
      <div class="flex flex-wrap mt-[30px] md:mt-[80px] justify-between">
        <img src="~/assets/images/about-logo-1.png" class="about-logo-img2"/>
        <img src="~/assets/images/about-logo-2.png" class="about-logo-img2"/>
        <img src="~/assets/images/about-logo-3.png" class="about-logo-img2"/>
        <img src="~/assets/images/about-logo-4.png" class="about-logo-img2"/>
        <img src="~/assets/images/about-logo-5.png" class="about-logo-img2"/>
        <img src="~/assets/images/about-logo-6.png" class="about-logo-img2"/>
        <img src="~/assets/images/about-logo-7.png" class="about-logo-img2"/>
        <img src="~/assets/images/about-logo-8.png" class="about-logo-img2"/>
      </div>
    </div>
  </div>
  <StartBuild></StartBuild>
</template>
<script setup>
import StartBuild from "../index/components/StartBuild.vue";
import TransitionText from "./components/TransitionText.vue";

const boardNumberList = ref(['1000+', '29', '8', '20+', '10+'])
const boardNumber1 = ref([])
const boardNumber2 = ref([])
const boardNumber3 = ref([])
const boardNumber4 = ref([])
const boardNumber5 = ref([])
const showBoardNumber = () => {
  boardNumber1.value = boardNumberList.value[0].split('')
  boardNumber2.value = boardNumberList.value[1].split('')
  boardNumber3.value = boardNumberList.value[2].split('')
  boardNumber4.value = boardNumberList.value[3].split('')
  boardNumber5.value = boardNumberList.value[4].split('')
}



function handleScroll() {
  let dashboardEle = document.getElementById("dashboard-div");
  let dashboardH = dashboardEle.clientHeight; //div的的高度
  let dashboardTopH = dashboardEle.offsetTop; //距离顶部的高度，包含滚动条
  let windowH = window.screen.height; //显示屏高度 
  let scrollH = document.body.scrollTop || document.documentElement.scrollTop; //滚动的高度
  if (dashboardTopH - windowH + dashboardH < scrollH) {
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
</style>
<style>
.about-board-number{
  @apply text-[72px] font-bold text-[#5C64FF] leading-[88px] h-[88px] mb-0 md:mb-[20px] flex justify-center;
  font-family: Montserrat-Bold, Montserrat;
}
.about-board-text{
  @apply text-[24px] font-light leading-[35px] text-[#40425C] mb-[50px] md:mb-0;
  font-family: Montserrat-Light, Montserrat;
}
.about-logo-img1{
  @apply h-[58px] md:h-[97px]
}
.about-logo-img2{
  @apply h-[66px] md:h-[107px]
}
.about-logo-img2:not(:first-child){
  @apply ml-1 md:ml-0;
}
.about-key-img{
  @apply md:h-[200px] h-[60px];
}
</style>