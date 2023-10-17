<template>
  <div class="h-screen relative" :class="[$device.isMobile ? 'about-top-bg-phone' : 'about-top-bg ']">
    <div class="container mx-auto px-5 pt-[140px] md:pt-[180px]">
      <div class="text-center">
        <div class="mb-[50px] text-[21px] leading-[25px] font-bold font-family-extraBold flex justify-center">
          <div class="text-color-css">OUR MISSION</div>
        </div>
        <div class="text-[16px] md:text-[24px] leading-[21px] md:leading-[35px] font-medium md:font-light text-[#FFFFFF] font-family-light flex justify-center">
          <div class="w-[286px] md:w-[780px]">The Hamster platform provides an automated blockchain development environment, middleware engines, and multi-language development templates to support cross-language, cross-chain development and lower barriers to entry. The platform features code auditing, private key leakage protection, auto-deployment, real-time monitoring and other capabilities to fully safeguard smart contract security. We are committed to unleashing developer creativity to drive massive blockchain technology adoption</div>
        </div>
      </div>
    </div>
    <div class="flex justify-center absolute bottom-[60px] w-full">
      <span class="text-[#999999] text-base font-light font-family-light">Investors</span>
      <img src="~/assets/images/waterdrip.png" class="h-[30px] mx-[26px]"/>
      <img src="~/assets/images/stratified.png" class="h-[30px]"/>
    </div>
  </div>
  <div class="container mx-auto px-5 mt-[60px] md-[30px] md:mt-[180px] md:mb-[140px]">
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
        <div class="text-color-css">10+ Grants & 11 EcoSystems</div>
      </div>
      <!-- <img v-if="$device.isMobile" src="~/assets/images/about-logos-phone.png" class="w-full"/>
      <img v-else src="~/assets/images/about-logos.png" class="w-full"/> -->
      <div class="flex flex-wrap justify-center md:w-full">
        <div v-for="(item, index) in 8" :key="index" :class="[item === 8 ? 'md:w-[9%]' : 'md:w-[13%]']" class="w-[25%]  flex justify-center items-center mb-[30px] md:mb-0">
          <img :src="getImageURL(`Grant-about-${item}.png`)" :class="[item === 7 ? 'h-[14px] md:h-[22px]' : item === 3 ? 'h-[22px] md:h-[36px]' : 'h-[26px] md:h-[42px]']"/>
        </div>
      </div>
      <div class="flex flex-wrap md:w-full justify-center mt-[20px] md:mt-[80px]">
        <div v-for="(item, index) in 11" :key="index" class="w-[25%] md:w-[14%] text-center mb-[30px] md:mb-[40px]">
          <div class="flex justify-center">
            <img :src="getImageURL(`Ethereum-${item}.png`)" class="h-[55px]"/>
          </div>
          <div class="text-[14px] md:text-[18px] text-[#40425C] leading-[30px] font-light">{{ ethereumText[index] }}</div>
        </div>
      </div>
    </div>
  </div>
  <StartBuild></StartBuild>
</template>
<script setup>
import StartBuild from "../index/components/StartBuild.vue";
import TransitionText from "./components/TransitionText.vue";

const { getImageURL } = useAssets()
const ethereumText = ref(['Ethereum','Polkadot','Sui','The Graph','Chainlink','BNB','Filecoin','Aptos','Scroll','Arbitrum','Moonbean']);
const dashboardList = ref([
  {title: 'Developers', number: '2K+'},
  {title: 'Workflows', number: '10K+'},
  {title: 'EcoSystems', number: '11'},
  {title: 'Templates', number: '30+'},
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
.about-key-img{
  @apply h-[175px];
}
</style>