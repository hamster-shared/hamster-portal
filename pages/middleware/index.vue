<template>
  <div :class="[$device.isMobile ? 'ware-top-bg-phone' : 'ware-top-bg']">
    <div class="container mx-auto px-5 md:flex md:items-center md:mt-[30px] h-screen flex ">
      <div class="relative">
        <div class="flex mt-[80px] md:mt-0">
          <img src="~/assets/images/solutions-middleware.svg" class="h-[40px] md:h-[50px]"/>
          <div class="text-[14px] md:text-[24px] font-bold text-[#676767] leading-[40px] md:leading-[50px] ml-[10px] font-family-bold">Middleware</div>
        </div>
        <div class="md:flex">
          <div class="md:w-[65%] text-center md:text-left">
            <div class="mt-[10px] mb-[20px] text-[24px] md:text-[48px] leading-[36px] md:leading-[60px] font-extrabold font-family-extraBold text-[#00044C]">One-stop middleware service platform</div>
            <div class="text-[16px] md:text-[24px] leading-[21px] md:leading-[30px] font-light text-[#40425C] font-family-light md:w-[500px]">
            Comprehensive / convenient / visual
            </div>
          </div>
        </div>
        <div class="md:mt-[20px] text-center md:text-left w-full absolute md:static bottom-[35px]">
            <button class="btn-css " @click="gotoAline">Get Started</button>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-5 text-center">
    <div class="flex justify-center">
      <div class="area-title md:!text-[40px] md:w-[800px]">Miwaspace: Find the middleware you need most</div>
    </div>
  </div>
  <div :class="{'ware-space-bg-phone': !$device.isMobile}">
    <div class="container mx-auto px-5 text-center">
      <div v-if="!$device.isMobile" class="flex justify-center mb-[100px]">
        <div class="area-desc md:w-[780px]">{{ subDesc.miwaspace }}</div>
      </div>
      <img v-if="$device.isMobile" src="~/assets/images/Middleware-space-phone.png" class="w-full mt-[30px]" />
      <img v-else src="~/assets/images/Middleware-space.png" class="w-full" />
      <div v-if="$device.isMobile" class="flex justify-center mb-[30px]">
        <div class="area-desc md:w-[780px]">{{ subDesc.miwaspace }}</div>
      </div>
      <button class="btn-css " @click="moreMiddleware">View more</button>
    </div>
  </div>
  <div class="container mx-auto px-5 text-center">
    <div class="area-title md:!text-[40px]">Middleware combined with project construction, efficient and convenient</div>
    <div v-if="!$device.isMobile" class="flex justify-center">
      <div class="area-desc md:w-[780px]">{{ subDesc.miwabuid }}</div>
    </div>
    <div class="flex justify-center">
      <video src="~/assets/video/middleware-build.mp4" autoplay muted loop class="w-[90%] my-[40px] md:my-[60px]"></video>
    </div>
    <div v-if="$device.isMobile" class="flex justify-center">
      <div class="area-desc !mt-0 mb-[20px]">{{ subDesc.miwabuid }}</div>
    </div>
    <div class="flex justify-center">
      <div class="text-css-color">No project yet?</div>
    </div>
    <button class="btn-css mt-[20px] md:mt-[40px]" @click="gotoAline">Start Building</button>
  </div>
  <div class="container mx-auto px-5 text-center">
    <div class="flex justify-center">
      <div class="area-title md:!text-[40px] md:w-[980px]">Middleware usage strategy to help you explore more possibilities in web3</div>
    </div>
    <div v-if="!$device.isMobile" class="flex justify-center">
      <div class="area-desc md:w-[780px]">{{ subDesc.miwausage }}</div>
    </div>
    <div class="flex justify-center">
      <img src="~/assets/images/middleware-usage.png" class="w-[90%]" />
    </div>
    <div v-if="$device.isMobile" class="flex justify-center">
      <div class="area-desc">{{ subDesc.miwausage }}</div>
    </div>
  </div>
  <div class="container mx-auto px-5 text-center mb-[70px] md:mb-[180px]">
    <div class="flex justify-center">
      <div>
        <div class="area-title md:!text-[40px]">Join our middleware open platform</div>
        <div v-if="!$device.isMobile" class="area-desc">{{ subDesc.miwajoin }}</div>
      </div>
    </div>
    <div class="relative mt-[30px] md:mt-[80px]">
      <div class="scroll-fadeout-bg scroll-fadeout-left"></div>
      <div class="scroll-fadeout-bg scroll-fadeout-right"></div>
      <div class="scroll-content">
        <div class="scroll-img" :class="[$device.isMobile ? 'scroll-one-phone1' : 'scroll-one1']">
          <img class="logo-img mx-5" v-for="(item, index) in 6" :key="index" :src="getImageURL(`Middleware-logo1-${item}.png`)"/>
        </div>
        <div class="scroll-img" :class="[$device.isMobile ? 'scroll-one-phone2' : 'scroll-one2']">
          <img class="logo-img mx-5" v-for="(item, index) in 6" :key="index" :src="getImageURL(`Middleware-logo1-${item}.png`)"/>
        </div>
      </div>
      <div class="scroll-content my-[30px] md:my-[50px]">
        <div class="scroll-img" :class="[$device.isMobile ? 'scroll-two-phone1' : 'scroll-two1']">
          <img class="logo-img mx-5" v-for="(item, index) in 5" :key="index" :src="getImageURL(`Middleware-logo2-${item}.png`)"/>
          <img v-if="!$device.isMobile" class="logo-img mx-5" v-for="(item, index) in 5" :key="index" :src="getImageURL(`Middleware-logo2-${item}.png`)"/>
        </div>
        <div class="scroll-img" :class="[$device.isMobile ? 'scroll-two-phone2' : 'scroll-two2']">
          <img class="logo-img mx-5" v-for="(item, index) in 5" :key="index" :src="getImageURL(`Middleware-logo2-${item}.png`)"/>
          <img v-if="!$device.isMobile" class="logo-img mx-5" v-for="(item, index) in 5" :key="index" :src="getImageURL(`Middleware-logo2-${item}.png`)"/>
        </div>
      </div>
    </div>
    <div v-if="$device.isMobile" class="flex justify-center">
      <div class="area-desc">{{ subDesc.miwajoin }}</div>
    </div>
    <button class="btn-css mt-[30px] md:mt-[80px]" @click="goSubmit">Submit your middleware</button>
  </div>
</template>
<script setup>

const { getImageURL } = useAssets()

const subDesc = ref({
  'miwaspace': 'Miwaspace is a middleware marketplace that aggregates common middleware solutions in the market to meet your needs in all aspects.',
  'miwabuid': 'Middleware extensions are deeply integrated with project construction, helping your project develop rapidly in both breadth and depth.',
  'miwausage': 'Regularly release middleware combination practices, innovative practices, excellent case studies and other usage strategies to easily expand the unlimited possibilities of your project.',
  'miwajoin' : 'To maximize your exposure to web3 developers and gain more benefits'
});

const alineLink = ref('')
const middlewareLink = computed(() => alineLink.value + "/chainlink/miwaspace?key=1")
const gotoAline = () => {
  window.open(alineLink.value);
}
const moreMiddleware = () => {
  window.open(middlewareLink.value);
}
const goSubmit = () => {
  window.location.href = '/middleware/submit';
}
onMounted(()=>{
  if (window.location.href.indexOf('hamsternet.io') !== -1) {
    alineLink.value = "https://develop.alpha.hamsternet.io";
  } else {
    alineLink.value = "https://develop.hamster.newtouch.com";
  }
})
</script>
<style lang="less" scoped>
.ware-top-bg{
  background: url("~/assets/images/middleware-top-bg.png") no-repeat 80% #FFFFFF;
  // background-size: contain;
  background-size: auto 90%;
}
.ware-top-bg-phone{
  background: url("~/assets/images/middleware-top-bg-phone.png") no-repeat center 76% #FFFFFF;
  background-size: contain;
}
.ware-space-bg-phone{
  background: url("~/assets/images/middleware-space-bg.png") no-repeat center #FFFFFF;
  background-size: 100% 100%;
}
.text-css-color{
  font-size: 24px;
  font-family: Montserrat-Bold, Montserrat;
  font-weight: bold;
  color: #5B7ED1;
  line-height: 29px;
  background: linear-gradient(221deg, #40ECE1 0%, #5C64FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.scroll-one1{
  animation-name: scrollOne1;
}
.scroll-one2{
  animation-name: scrollOne2;
}
@keyframes scrollOne1{
  0%{left: 0px; top: 0px;}
  100%{left: 1159px; top: 0px;}
}
@keyframes scrollOne2{
  0%{left: -1159px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
.scroll-one-phone1{
  animation-name: scrollOnePhone1;
}
.scroll-one-phone2{
  animation-name: scrollOnePhone2;
}
@keyframes scrollOnePhone1{
  0%{left: 0px; top: 0px;}
  100%{left: 791px; top: 0px;}
}
@keyframes scrollOnePhone2{
  0%{left: -791px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
.scroll-two1{
  animation-name: scrollTwo1
}
.scroll-two2{
  animation-name: scrollTwo2;
}
@keyframes scrollTwo1{
  0%{left: 1958px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
@keyframes scrollTwo2{
  0%{left: 0px; top: 0px;}
  100%{left: -1958px; top: 0px;}
}
.scroll-two-phone1{
  animation-name: scrollTwoPhone1
}
.scroll-two-phone2{
  animation-name: scrollTwoPhone2
}
@keyframes scrollTwoPhone1{
  0%{left: 667px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
@keyframes scrollTwoPhone2{
  0%{left: 0px; top: 0px;}
  100%{left: -667px; top: 0px;}
}
</style>
<style scoped>

.logo-img{
  @apply h-[30px] md:h-[50px];
}
</style>