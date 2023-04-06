<template>
<div >
  <div class=" bg-[#000000]" >
    <div class="container mx-auto px-5 abouts-top-bg pt-[140px] md:pt-[250px]">
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
  <div class="container mx-auto px-5 mt-[80px] md:mt-[200px]">
    <div id="dashboard-div">
      <div class="abouts-area-title text-center !mt-0 mb-[40px] md:mb-[120px]">Dashboard</div>
      <div class="md:grid md:grid-cols-5 text-center">
          <div>
            <div class="abouts-board-number">
                <span ref="boardNumberRef1">0</span>
            </div>
            <div class="abouts-board-text" @click="showBoardNumber">Developers</div>
            <div class="img-center">
              <div class="abouts-line"></div>
            </div>
          </div>
          <div>
            <div class="abouts-board-number">
                <span ref="boardNumberRef2">0</span>
            </div>
            <div class="abouts-board-text">Workflows</div>
            <div class="img-center">
              <div class="abouts-line"></div>
            </div>
          </div>
          <div>
            <div class="abouts-board-number">
                <span ref="boardNumberRef3">0</span>
            </div>
            <div class="abouts-board-text">EcoSystems</div>
            <div class="img-center">
              <div class="abouts-line"></div>
            </div>
          </div>
          <div>
            <div class="abouts-board-number">
                <span ref="boardNumberRef4">0</span>
            </div>
            <div class="abouts-board-text">Templates</div>
            <div class="img-center">
              <div class="abouts-line"></div>
            </div>
          </div>
          <div>
            <div class="abouts-board-number">
                <span ref="boardNumberRef5">0</span>
            </div>
            <div class="abouts-board-text">Blockchains</div>
            <div class="img-center">
              <div class="abouts-line !mb-0"></div>
            </div>
          </div>
      </div>
    </div>
    <div class="mt-[80px] md:mt-[140px]">
      <div class="abouts-area-title text-center !mt-0 mb-[40px] md:mb-[120px]">Key Advantages</div>
      <div class="md:grid md:grid-cols-3 md:gap-16 text-center">
        <div class="md:mb-0 mb-[80px]">
          <div class="img-center">
            <img src="~/assets/images/abouts-key-1.png" class="abouts-key-img"/>
          </div>
          <div class="abouts-area-desc">Dapps run at full speed and update iteratively through DevOps under automation technology </div>
        </div>
        <div class="md:mb-0 mb-[80px]">
          <div class="img-center">
            <img src="~/assets/images/abouts-key-2.png" class="abouts-key-img"/>
          </div>
          <div class="abouts-area-desc">~35% cost and 40% time of development are saved with support of Hamster Developer Toolkits</div>
        </div>
        <div>
          <div class="img-center">
            <img src="~/assets/images/abouts-key-3.png" class="abouts-key-img"/>
          </div>
          <div class="abouts-area-desc">Saves 30% extra for DApps using Hamster RPC service</div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-5 abouts-team-bg" :class="[$device.isMobile ?'abouts-team-bg-mobile' : 'abouts-team-bg-win']">
    <div class=" pt-[80px] md:pt-[140px]">
      <div class="text-center">
        <div class="abouts-area-title !mt-0 mb-[40px] md:mb-[120px]">Core Dev Team</div>
        <div class="abouts-area-desc w-full pb-[60px] md:pb-[140px] flex justify-center">
          <div class="md:w-[720px]">Formal Fintech listed company's most elite cloud computing & blockchain team, having been proved privacy professional in most sensitive Fintech DevOps: 6000+ DevOps & 1000+ Fintech Projects simultaneously in the past 20 yrs+.    </div>
        </div>
        <div class="abouts-area-title !mt-0 mb-[40px] md:mb-[120px]">5 Issued Grants & 8 EcoSystems </div>
        <div class="flex justify-evenly flex-wrap">
          <img src="~/assets/images/abouts-grant.png" class="abouts-logo-img1"/>
          <img src="~/assets/images/abouts-web3.png" class="abouts-logo-img1"/>
          <img src="~/assets/images/abouts-f.png" class="abouts-logo-img1"/>
          <img src="~/assets/images/abouts-starknet.png" class="abouts-logo-img1 mt-[30px] md:mt-0"/>
          <img src="~/assets/images/abouts-igorand.png" class="abouts-logo-img1 mt-[30px] md:mt-0"/>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-5 mb-[60px] md:mb-[180px]">
    <div class="text-center">
      <div class="md:flex mt-[30px] md:mt-[100px]">
        <div class="flex justify-between md:justify-around w-full md:w-1/2">
          <img src="~/assets/images/abouts-logo-1.png" class="abouts-logo-img2"/>
          <img src="~/assets/images/abouts-logo-2.png" class="abouts-logo-img2"/>
          <img src="~/assets/images/abouts-logo-3.png" class="abouts-logo-img2"/>
          <img src="~/assets/images/abouts-logo-4.png" class="abouts-logo-img2"/>
        </div>
        <div class="flex justify-between md:justify-around w-full md:w-1/2 mt-[30px] md:mt-0">
          <img src="~/assets/images/abouts-logo-5.png" class="abouts-logo-img2"/>
          <img src="~/assets/images/abouts-logo-6.png" class="abouts-logo-img2"/>
          <img src="~/assets/images/abouts-logo-7.png" class="abouts-logo-img2"/>
          <img src="~/assets/images/abouts-logo-8.png" class="abouts-logo-img2"/>
        </div>
      </div>
    </div>
  </div>
  
  <div class="relative mt-3 md:mt-12 md:w-[100%] md:h-auto md:mx-0 w-screen">
    <img v-if="!$device.isMobile" src="../index/images/moon.png" class="w-[100%] flag-planet"/>
    <img v-if="$device.isMobile" src="../index/images/mobile-moon.png" class="w-[100%]"/>
    <div class="absolute top-[55px] md:top-[10%] xl:top-[44%] md:left-[43%] left-[33%]">
      <img src="../index/images/pole.png" class="w-6 h-[80px] inline-block"/>
      <img src="../index/images/flag.png" class="flag flag-show flag-raise"/>
    </div>
  </div>
</div>
</template>
<script setup>
import anime from 'animejs/lib/anime.es.js';

const device = useDevice()
  
const boardNumberRef1 = ref(null)
const boardNumberRef2 = ref(null)
const boardNumberRef3 = ref(null)
const boardNumberRef4 = ref(null)
const boardNumberRef5 = ref(null)
const boardNumber1 = ref('1000+')
const boardNumber2 = ref(29)
const boardNumber3 = ref(8)
const boardNumber4 = ref('20+')
const boardNumber5 = ref('10+')
const showBoardNumber = () => {
  // handle number roller
  const boardNumbers = [
    { ref: boardNumberRef1, number: boardNumber1 },
    { ref: boardNumberRef2, number: boardNumber2 },
    { ref: boardNumberRef3, number: boardNumber3 },
    { ref: boardNumberRef4, number: boardNumber4 },
    { ref: boardNumberRef5, number: boardNumber5 },
  ]

  boardNumbers.forEach(item => {
    const number = item.number.value
    const renderedNumber = parseInt(item.ref.value.textContent)
    // Skip animation when number renderer
    if (!renderedNumber && number !== renderedNumber) {
      anime({
        targets: item.ref.value,
        innerHTML: [0, number],
        round: 1,
        easing: 'easeInOutExpo'
      })
    }
  })
}



function handleScroll() {
  let dashboardEle = document.getElementById("dashboard-div");
  let dashboardTopH = dashboardEle.offsetTop; //距离顶部的高度，包含滚动条
  let windowH = window.screen.height; //显示屏高度 
  let scrollH = document.body.scrollTop || document.documentElement.scrollTop; //滚动的高度
  const addH = device.value.isMobile ? 100 : 200;
  if (dashboardTopH + addH < scrollH + windowH) {
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

.abouts-top-bg{
  background: url("~/assets/images/abouts-top-bg.png") no-repeat center #000000;
  background-size: 100% 100%;
}
.abouts-team-bg{
  background: url("~/assets/images/abouts-team-bg.png") no-repeat center;
}
.abouts-team-bg-mobile{
  background-size: cover;
}
.abouts-team-bg-win{
  background-size: contain;
}
.flag {
    width: 60px;
    display: inline-block;
    margin-left: -14px;
    margin-top: -50px;
    opacity: 1;
    @media screen and (min-width: 768px) {
      margin-top: 0;
      opacity: 0;
    }
  }
  

  .flag-show {
    opacity: 1;
    transition: opacity 500ms;
  }

  .flag-raise {
    margin-top: -50px;
    transition: margin-top 1000ms;
  }
</style>
<style>
.abouts-area-title{
  @apply text-[#FFFFFF] text-[36px] font-extrabold md:text-[50px] leading-[74px] mt-[60px] md:mt-[80px];
  font-family: NotoSans-ExtraBold, NotoSans;
}

.abouts-area-desc{
  @apply text-[14px] mt-3 text-[#FFFFFF] md:text-[24px] leading-[28px] md:leading-[35px] md:mt-[20px] font-normal;
  font-family: NotoSans-Regular, NotoSans;
}
.abouts-board-number{
  @apply text-[72px] font-bold text-[#27FFB8] leading-[88px] h-[88px] mb-0 md:mb-[40px] flex justify-center;
  font-family: Montserrat-Bold, Montserrat;
}
.abouts-board-text{
  @apply text-[24px] font-normal leading-[35px] text-[#FFFFFF];
  font-family: NotoSans-Regular, NotoSans;
}
.abouts-line{
  @apply w-[32px] mt-[10px] md:mt-[30px] mb-[80px] md:mb-0;
  border: 3px solid #27FFB8;
}
.abouts-logo-img1{
  @apply h-[39px] md:h-[57px]
}
.abouts-logo-img2{
  @apply h-[54px] md:h-[60px]
}
/* .abouts-logo-img2:not(:first-child){
  @apply ml-8 md:ml-0;
} */
.abouts-key-img{
  @apply  h-[212px];
}
</style>

<style lang="less">
  // html.fp-enabled:not(.is-mobile) {
  //   body {
  //     background: url(~/assets/images/index-bg-top.png) left top no-repeat,
  //                 url(~/assets/images/index-bg-body.png) center center no-repeat,
  //                 #141212;
  //   }
  // }
  // html:not(.is-mobile) {
  //   body {
  //     background: url(~/assets/images/home-background.jpg) no-repeat #131313;
  //   }
  // }
</style>