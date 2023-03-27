<template>
  <DefaultLayout :showFooter="false" :showHeader="showHeader" :showHeaderBg="showHeaderBg">
      <div class="top-bg bg-[#000000]">
        <div class="container mx-auto">
          <div class="md:flex md:items-center relative">
            <div class="md:w-3/5 py-[180px]">
              <div class="text-2xl font-extrabold md:text-[50px] md:leading-[74px]">
                <div>Hamster empowers</div>
                <div>Projects and developers in</div>
                <div>web3 to build their dreams</div>
              </div>
              <!-- <div><img :src="$device.isMobile ? getImageURL('hamster-slug-mobile.svg') : getImageURL('hamster-slug-pc.svg')" /></div> -->
              <div class="mt-5 mb-6 text-sm md:text-2xl font-medium text-[#999999]">One-Stop infrastructure, development, operation and maintenance service platform for projects in Web3.0</div>
              <div class="hidden mb-6 md:block">
                <span class="text-[#999999] text-base font-light">Investors</span>
                <img src="./images/waterdrip.png" class="w-[70px] h-[30px] inline-block ml-6"/>
                <img src="./images/stratified.png" class="w-[84px] h-[30px] inline-block ml-6"/>
              </div>
              <div class="">
                <button class="btn-css" @click="gotoAline">Start Building</button>
              </div>
            </div>
            <div class="md:w-2/5">
            </div>
            <div class="flex justify-between px-6 md:hidden">
              <span class="text-[#738A92] text-base font-bold">Investors</span>
              <img src="./images/waterdrip.png" class="w-[84px] h-[36px]"/>
              <img src="./images/stratified.png" class="w-[101px] h-[36px]"/>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto mb-[160px]">
        <div>
          <div class="text-center">
            <div class="area-title">Hamster DevOps Solutions</div>
            <div class="flex  justify-center">
              <div class="area-desc w-[700px]">
                Hamster offers the integrated approach to build , test and run projects in web3.
                We provide the most flexible platform for developers to turn their blockchain ideas into reality.
              </div>
            </div>
          </div>
          <img src="./images/moon.png" class="w-full"/>
        </div>
        <div>
          <div class="text-center">
            <div class="area-title">How Hamster Works</div>
            <div class="flex justify-center">
              <div class="area-desc w-[770px]">
                ~35% cost and 40% time of development are saved with support of the Hamster Toolkit
              </div>
            </div>
          </div>
          <img src="./images/moon.png" class="w-full"/>
        </div>
        <div>
          <div class="text-center">
            <div class="area-title">Hamster Ecology</div>
            <div class="flex justify-center">
              <div class="area-desc">
                We support various networks and power leading Web3 projects
              </div>
            </div>
          </div>
          <img src="./images/moon.png" class="w-full"/>
        </div>
      </div>
      
      <div id="free-btn-div" class="bg-[#000000] py-[160px] text-center">
        <div class="container mx-auto">
          <div class="font-extrabold text-[72px]">Get started with Hamster </div>
          <div class="mt-[80px] mb-[40px] text-[#999999] text-[24px]">Build your dreams in Web3 with ease</div>
          <button id="free-btn" :class="freeBtnClass" class="btn-css" @click="gotoAline">Start building for free</button>
        </div>
      </div>

      <div class="container mx-auto">
        <div class="text-center">
          <div class="area-title">Trending News</div>
          <div class="area-desc">We support various networks and power leading Web3 projects</div>
        </div>
        <div class="px-6 my-6 overflow-x-auto md:my-12 md:px-0 news-overflow-scrollbar">
          <div class="flex gap-6 md:grid md:grid-cols-12">
            <div class="w-[214px] flex flex-col flex-shrink-0 md:w-auto md:h-auto col-span-4" v-for="(newsItem, index) in news" :key="index">
              <img :src="newsItem.cover" />
              <div class="flex flex-col flex-1 pb-6 pl-6 pr-5">
                <div class="text-[26px] text-[#000000] my-[40px]">Article Name</div>
                <span class="mb-[20px] flex-1 text-[#83848E] text-[18px]" :title="newsItem.title">{{ newsItem.title }}</span>
                <nuxt-link :to="newsItem.link" target="_blank">
                  <span class="text-[#5C64FF] text-[18px]">View more
                    <img :src="getImageURL('right.svg')" class="inline-block h-[14px]" />
                  </span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
  </DefaultLayout>
</template>

<script setup>
import {ref, reactive, onMounted, computed, onUnmounted} from 'vue'
  import { Carousel, Pagination, Slide } from 'vue3-carousel'
  import lottie from "lottie-web"
  import anime from 'animejs/lib/anime.es.js';
  import DefaultLayout from "~/layouts/default.vue"
  import Footer from "~/layouts/-components/footer.vue"
  import { UfoAnimation } from "~/utils/animateUtil/ufoAnimation"
  import ufojson from "../../assets/json/ufo.json"
  import 'vue3-carousel/dist/carousel.css'

  definePageMeta({
    layout: false
  })

  const { getImageURL, getAssets } = useAssets()

  const showHeader = ref(true)
  const showHeaderBg = ref(false)

  const numberRollerRef1 = ref(null)
  const numberRollerRef2 = ref(null)
  const numberRollerRef3 = ref(null)
  const numberRollerRef4 = ref(null)
  const numberRollerRef5 = ref(null)
  const numberRollerRef6 = ref(null)
  const numberRollerNumber1 = ref(0)
  const numberRollerNumber2 = ref(0)
  const numberRollerNumber3 = ref(0)
  const numberRollerNumber4 = ref(0)
  const numberRollerNumber5 = ref(0)
  const numberRollerNumber6 = ref(0)

  const freeBtnClass = ref();
  const news = ref([]);
  const device = useDevice()
  const fullpageRef = ref()
  const fullpageMobileOptions = {
    autoScrolling: false,
    fitToSection: false,
    scrollOverflow: false,
    verticalCentered: false,
    paddingTop: "4rem",
  }

  const fullpageExtraOptions = device.value.isMobile ? fullpageMobileOptions : {}
  // const fullpageExtraOptions = fullpageMobileOptions;
  const fullpageOptions = {
    ...fullpageExtraOptions,
    scrollBar: true,
    licenseKey: "gplv3-license",
    beforeLeave( origin, destination, direction, trigger ) {
      showHeader.value = direction === 'up'
      showHeaderBg.value = !destination.isFirst
      // Run UFO animation by fullpage
      // ufoAnimation.animate(origin, destination, direction)
      if (destination.index === 0) {
        freeBtnClass.value = 'free-btn-show';
      }
    },
    afterLoad(origin, destination, direction, trigger) {
      if (destination.index === 0) {
        freeBtnClass.value = 'free-btn-hidden';
      }
      // handle fullpage scroll
      // ecology and number roller section index is：2
      if (destination.index === 2) {
        // handle ecology
        handleEcologyExhibit()

        // handle number roller
        const numberRollers = [
          { ref: numberRollerRef1, number: numberRollerNumber1 },
          { ref: numberRollerRef2, number: numberRollerNumber2 },
          { ref: numberRollerRef3, number: numberRollerNumber3 },
          { ref: numberRollerRef4, number: numberRollerNumber4 },
          { ref: numberRollerRef5, number: numberRollerNumber5 },
          { ref: numberRollerRef6, number: numberRollerNumber6 },
        ]

        numberRollers.forEach(item => {
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
    }
  }

  const ufoRef = ref(null)
  const animateUfoRef = ref(null)
  const ufoAnimation = new UfoAnimation(animateUfoRef, ufoRef)

  // carousels
  // autoplay interval
  const carouselsAutoPlay = ref(5000)
  const carouselsCurrentIndex = ref(0)
  const carouselsCurrentSlide = computed(() => carousels[carouselsCurrentIndex.value] || {})
  const carousels = [
    {
      name: "James Bayly",
      desc: "Head Of Business Development at SubQuery & OnFinality",
      comment: "No information available",
      src: getImageURL('usinghamster-one.png')
    },
    {
      name: "Zhangsan",
      desc: "abcdefg",
      comment: "No information available 2",
      src: getImageURL('usinghamster-two.png')
    },
    {
      name: "Lisi",
      desc: "hijklmn",
      comment: "No information available 3",
      src: getImageURL('usinghamster-three.png')
    }
  ]

  // carousels autoplay interval is 3000ms
  const handleSlideStart = (slideData) => {
    const { slidingToIndex, slidesCount } = slideData
    carouselsCurrentIndex.value = slidesCount > slidingToIndex ? slidingToIndex : 0
  }
  const handleSlidePrev = (slideData) => {
    const { currentSlide, slidesCount, slideTo, prev } = slideData
    if (currentSlide == 0) {
      slideTo(slidesCount)
    } else {
      prev()
    }
  }
  const handleSlideNext = (slideData) => {
    const { currentSlide, slidesCount, slideTo, next } = slideData
    if (currentSlide + 1 == slidesCount) {
      slideTo(0)
    } else {
      next()
    }
  }

  // handle ecology
  const ecologyTimer = ref(null)
  const ecologyTypes = ["Infrastructure", "Defi", "GameFi", "NFT"]
  const currentEcologyTypeIndex = ref(0)
  const currentEcologyType = computed(() => ecologyTypes[currentEcologyTypeIndex.value])
  const currentEcologyImages = computed(() => {
    const allEcologyAssets = getAssets("ecology")
    const currentEcologyAssets = []

    Object.entries(allEcologyAssets).forEach(([key, asset]) => {
      if (key.startsWith(currentEcologyType.value)) {
        currentEcologyAssets.push(asset)
      }
    })

    return currentEcologyAssets
  })
  const handleEcologyExhibit = () => {
    if (ecologyTimer.value) { return }

    const handler = () => {
      const newEcologyTypeIndex = currentEcologyTypeIndex.value + 1
      currentEcologyTypeIndex.value =
        newEcologyTypeIndex < ecologyTypes.length
        ? newEcologyTypeIndex
        : 0
    }

    ecologyTimer.value = setInterval(handler, 3000)
  }

  const emailInfo = ref('')

  const sendEmail = async () => {
    const url = '/hamster/email'
    const data = {
      "email": emailInfo.value
    }
    await $fetch(url, {
      method: "POST",
      body: data
    }).then((res) => {
      console.log('res:', res)
    }).catch((err) => {
      console.log(err)
    })
  }

  const alertEmailInfo = ref('')
  const hamsterSendEmail = ()=>{
    let myreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (myreg.test(emailInfo.value)){
      sendEmail()
      alertEmailInfo.value = 'Thank you for your attention'
    } else if(emailInfo.value == ''){
      alertEmailInfo.value = 'This field cannot be empty'
    } else{
      alertEmailInfo.value = 'Please enter the correct format of email'
    }
  }

  const flagRef = ref(null)
  const handleFlagRaise = () => {
    flagRef.value.classList.add("flag-show")
    setTimeout(() => flagRef.value.classList.add("flag-raise"), 500)
  }

  const alineLink = computed(() => "https://develop.alpha.hamsternet.io/")
  const gotoAline = () => {
    window.location.href = alineLink.value
  }

  onMounted(()=>{
    // Init fullpage
    try {
      window.addEventListener("scroll", handleScroll)
      handleScroll();

      getEcology();
      getArticles();
    } catch (error) {
      console.log("Fullpage init error", error)
    }

    // Run lottie animation
    lottie.loadAnimation({
        container: ufoRef.value,//选择渲染dom
        renderer: "svg",//渲染格式
        loop: false,//循环播放
        autoplay: true,//是否i自动播放,
        animationData: ufojson,//渲染动效json
    });
  })

  const getEcology = async () => {
    const url = '/hamster/ecology'
    await $fetch(url, {
      method: "GET",
    }).then((res) => {
      numberRollerNumber1.value = res.projects
      numberRollerNumber2.value = res.chainNetworks
      numberRollerNumber3.value = res.contracts
      numberRollerNumber4.value = res.deployments
      numberRollerNumber5.value = res.templates
      numberRollerNumber6.value = res.tools

    }).catch((err) => {
      console.log(err)
    })
  }

  const getArticles = async () => {
    const url = '/articles'
    await $fetch(url, {
      method: "GET",
    }).then((res) => {
      news.value = res.data;
      if (news.value.length > 3) {
        news.value.length = 3; //显示3条数据
      }
    }).catch((err) => {
      console.log(err)
    })
}
  
const beforeScrollH = ref(0);
function handleScroll() {
  let freeBtnEle = document.getElementById("free-btn");
  let freeBtnH = freeBtnEle.clientHeight; //按钮的的高度
  let freeTopH = freeBtnEle.offsetTop; //距离顶部的高度，包含滚动条
  let freeDivH = document.getElementById("free-btn-div").clientHeight; //div的高度
  let windowH = window.screen.height; //显示屏高度 
  let scrollH = document.body.scrollTop || document.documentElement.scrollTop; //滚动的高度
  console.log("freeBtnH:",freeBtnH);
  console.log("freeDivH:",freeDivH);
  console.log("windowH:",windowH);
  console.log("freeBtnClass:", freeBtnClass.value);
  console.log("scrollH:", scrollH);
  console.log("freeTopH:",freeTopH);
  console.log("temp:",scrollH + windowH);
  console.log("tempD:",freeTopH + freeBtnH);
  // freeBtnClass.value = "";
  if (beforeScrollH.value < scrollH) { // 向下滚动
    if (freeTopH < scrollH + windowH < freeTopH + freeBtnH) {
      freeBtnClass.value = 'free-btn-show';
    }
  } else { //向上滚动
    if (freeTopH < scrollH + windowH < freeTopH + freeBtnH) {
      freeBtnClass.value = 'free-btn-hidden';
    }
  }
  beforeScrollH.value = scrollH
  setTopBgValue();
}
function setTopBgValue() {
  // if (topVal.value > 0) {
  //   topBgShow.value = true
  // } else {
  //   topBgShow.value = false
  // }
}

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style lang="less" scoped>
  .transparent {
    opacity: 0
  }
  .force-transparent {
    opacity: 0 !important;
  }

  .top-bg{
    background: url("~/assets/images/top-bg.jpg") no-repeat 77% #000000;
    background-size: contain;
  }

  .area-title{
    @apply text-[#00044C] text-[32px] leading-[44px] font-extrabold md:text-[48px] md:leading-[74px];
  }

  .area-desc{
    @apply text-base mt-3 text-[#40425C] md:text-2xl md:mt-6;
  }

  
.free-btn-show{
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
.free-btn-hidden{
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

  .devops-bg{
    background: radial-gradient(111.94% 125.64% at -11.86% 57.81%, rgba(109, 197, 160, 0.1147) 0%, rgba(14, 14, 19, 0) 100%);
  }
  .trending-bg{
    background: linear-gradient(180deg, #21342B 0%, #141414 100%);
  }
  .subscription {
    background: linear-gradient(180deg, #131C17 0%, #151616 100%);
    color: #AFC6C8;
    font-size: 16px;
    border: 1px solid #203E42;
    &:focus-visible {
      outline: none;
    }
  }
  .subscription-mobile {
    background: linear-gradient(180deg, #131C17 0%, #151616 100%);
    color: #AFC6C8;
    font-size: 14px;
    border: 1px solid #203E42;
    &:focus-visible {
      outline: none;
    }
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

  .flag-planet {
    // transform: scale(2);
    @media screen and (min-width: 768px) {
      transform: scale(1);
    }
  }

  .using-imgbg {
    background: linear-gradient(180deg, #1E2723 0%, #161817 100%);
  }

  .ecology-center{
    border: 0.3px solid rgba(255, 255, 255, 0.7);
    filter: drop-shadow(0px 0px 17px rgba(29, 60, 45, 0.25));
    border-radius: 50%;
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%)
  }
  .ecology-level-one{
    border: 0.3px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0px 0px 23px rgba(27, 41, 36, 0.25);
    border-radius: 50%;
    position: absolute;
    z-index: 90;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    .animation-rotate{
      animation: rotation 8s linear infinite;
    }
  }

  .ecology-level-two{
    border: 0.3px solid rgba(255, 255, 255, 0.4);
    filter: drop-shadow(0px 4px 15px rgba(32, 64, 27, 0.25));
    border-radius: 50%;
    position: absolute;
    z-index: 80;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    .animation-rotate{
      animation: rotation 8s linear infinite;
    }
  }

  .ecology-fade-enter-active,
  .ecology-fade-leave-active {
      transition: opacity 1s ease;
  }

  .ecology-fade-leave,
  .ecology-fade-enter-to {
      opacity: 1;
  }

  .ecology-fade-enter-from,
  .ecology-fade-leave-to {
      opacity: 0;
  }

  @keyframes rotation {
    0% {
      -webkit-transform: rotate(0deg);
      transform:rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform:rotate(360deg);
    }
  }

  :deep(.carousel) {
    .carousel__item {
      min-height: 200px;
      width: 100%;
      background-color: var(--vc-clr-primary);
      color: var(--vc-clr-white);
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .carousel__pagination {
      margin-top: 20px;
    }
    .carousel__pagination-button::after {
      background-color: #48514B;
      width: 100%;
    }
    .carousel__pagination-button:hover::after ,
    .carousel__pagination-button--active::after {
      background-color: #27FFB8 !important;
      width: 100%;
    }
    .carousel__pagination-item {
      width: 33%;
      .carousel__pagination-button {
        width: 100%;
      }
    }
    .carousel__slide  {

    }
    .carousel__prev ,
    .carousel__next  {
      box-sizing: content-box;
      color: white;
      background: #27392D;
      height: 49px;
      width: 40px;
    }
  }

  .using-navigation {
    position: absolute;
    top: 102%;
    left: 18px;
    width: 100px;
  }
  .using-numprogress{
    position: absolute;
    bottom: -3px;
    right: 20px;
    z-index: 100;
    color: red !important;
  }

  .news-overflow-scrollbar::-webkit-scrollbar{
    display: none;
  }

  .ufo-onepage{
    margin-top: -220px;
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
  // html.fp-enabled:not(.is-mobile) {
  //   body {
  //     background: url(~/assets/images/home-background.jpg) no-repeat #131313;
  //   }
  // }
</style>
