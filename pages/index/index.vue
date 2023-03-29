<template>
  <DefaultLayout :showFooter="false" :showHeader="showHeader" :showHeaderBg="showHeaderBg">
      <div class="top-bg " :class="{'!bg-bottom' : $device.isMobile}">
        <div class="container mx-auto px-5">
          <div class="md:flex md:items-center relative">
            <div class="lg:w-3/5 pt-[100px] pb-[300px] md:py-[180px] text-center md:text-left">
              <div class="text-2xl font-extrabold md:text-[50px] md:leading-[74px] font-family-bold">
                Hamster empowers<br>
                Projects and developers in<br class="hidden md:in-block">
                web3 to build their dreams
              </div>
              <!-- <div><img :src="$device.isMobile ? getImageURL('hamster-slug-mobile.svg') : getImageURL('hamster-slug-pc.svg')" /></div> -->
              <div class="mt-5 mb-6 text-base md:text-2xl font-medium text-[#999999] font-family-medium">One-Stop infrastructure, development, operation and maintenance service platform for projects in Web3.0</div>
              <div class="hidden mb-6 md:block">
                <span class="text-[#999999] text-base font-light font-family-light">Investors</span>
                <img src="./images/waterdrip.png" class="w-[70px] h-[30px] inline-block ml-6"/>
                <img src="./images/stratified.png" class="w-[84px] h-[30px] inline-block ml-6"/>
              </div>
              <button class="btn-css" @click="gotoAline">Start Building</button>
            </div>
            <div class="flex justify-between pb-[30px] md:hidden">
              <span class="text-[#999999] text-base font-light font-family-light">Investors</span>
              <img src="./images/waterdrip.png" class="w-[70px] h-[30px] inline-block ml-6"/>
              <img src="./images/stratified.png" class="w-[84px] h-[30px] inline-block ml-6"/>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-5 mb-[60px] md:mb-[160px]">
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
          <img src="~/assets/images/solutions.png" class="w-full"/>
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
          <img src="~/assets/images/works.png" class="w-full"/>
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
          <img src="~/assets/images/ecology.png" class="w-full"/>
        </div>
      </div>
      <StartBuild></StartBuild>

      <div class="container mx-auto px-5">
        <div class="text-center mb-8 md:mb-0">
          <div class="area-title">Trending News</div>
          <div class="area-desc">We support various networks and power leading Web3 projects</div>
        </div>
        <div class="md:my-12 md:px-0">
          <div class="md:gap-6 md:grid md:grid-cols-12">
            <div class="flex flex-col flex-shrink-0 md:w-auto md:h-auto md:col-span-4 mb-10 md:mb-0" v-for="(newsItem, index) in news" :key="index">
              <img :src="newsItem.cover" />
              <div class="flex flex-col flex-1 pb-6">
                <div class="text-[26px] text-[#000000] my-7 md:my-[40px] font-family-regular font-normal leading-[32px]">Article Name</div>
                <span class="mb-[20px] flex-1 text-[#83848E] text-[18px] font-family-pf-light font-light leading-[25px]" :title="newsItem.title">{{ newsItem.title }}</span>
                <nuxt-link :to="newsItem.link" target="_blank">
                  <span class="text-[#5C64FF] text-[24px] md:text-[18px] font-family-regular font-normal">View more
                    <img :src="getImageURL('right.svg')" class="inline-block h-[19px] md:h-[14px]" />
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
  import {ref, onMounted, computed, onUnmounted} from 'vue'
  import DefaultLayout from "~/layouts/default.vue"
  import Footer from "~/layouts/-components/footer.vue"
  import StartBuild from "../company/StartBuild.vue";
  import 'vue3-carousel/dist/carousel.css'

  definePageMeta({
    layout: false
  })

  const { getImageURL } = useAssets()

  const showHeader = ref(true)
  const showHeaderBg = ref(false)

  const numberRollerNumber1 = ref(0)
  const numberRollerNumber2 = ref(0)
  const numberRollerNumber3 = ref(0)
  const numberRollerNumber4 = ref(0)
  const numberRollerNumber5 = ref(0)
  const numberRollerNumber6 = ref(0)

  const news = ref([]);
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

  const alineLink = computed(() => "https://develop.alpha.hamsternet.io/")
  const gotoAline = () => {
    window.location.href = alineLink.value
  }

  onMounted(()=>{
    // Init fullpage
    try {

      getEcology();
      getArticles();
    } catch (error) {
      console.log("Fullpage init error", error)
    }
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
</script>

<style lang="less" scoped>
  .transparent {
    opacity: 0
  }
  .force-transparent {
    opacity: 0 !important;
  }

  .top-bg{
    background: url("~/assets/images/top-bg.png") no-repeat 77% #000000;
    background-size: contain;
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
