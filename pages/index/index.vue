<template>
  <DefaultLayout :showFooter="false" :showHeader="showHeader" :showHeaderBg="showHeaderBg">
      <div class=" top-bg-color" :class="[{'!bg-bottom' : $device.isMobile},[$device.isMobile ? 'top-bg-phone' : 'top-bg']]">
        <div class="container mx-auto px-5">
          <div class="md:flex md:items-center relative">
            <div class="lg:w-3/5 pt-[100px] pb-[300px] md:py-[180px] text-center md:text-left">
              <div class="text-2xl font-extrabold px-10 md:px-0 md:w-[500px] md:text-[50px] md:leading-[74px] font-family-extraBold">
                Hamster empowers web3 Explorer to build their dreams
              </div>
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
              <div class="area-desc w-[770px]">
                Hamster offers the integrated approach to build , test and run projects in web3.
                We provide the most flexible platform for developers to turn their blockchain ideas into reality.
              </div>
            </div>
          </div>
          <div :class="[$device.isMobile ? 'solutions-bg-phone my-[40px]' : 'solutions-bg']"> 
            <div class="flex relative h-[460px] md:h-[610px]">
              <div class="flex flex-wrap md:flex-nowrap justify-around h-[130px] md:h-auto mt-[85px] md:mt-[350px] ml-[92px] md:ml-[280px] w-[236px] md:w-[430px] text-center">
                <div class="md:ml-5 w-[45%] md:w-auto">
                  <div class="flex justify-center">
                    <img src="~/assets/images/template-market-logo.svg" class="w-[30px] md:w-[50px]">
                  </div>
                  <div class="solution-text text-[7px] leading-[10px] md:text-[14px] md:leading-[19px]">Template Market</div>
                </div>
                <div class="md:ml-5 w-[45%] md:w-auto">
                  <div class="flex justify-center">
                    <img src="~/assets/images/middleWare-logo.svg" class="w-[30px] md:w-[50px]">
                  </div>
                  <div class="solution-text text-[7px] leading-[10px] md:text-[14px] md:leading-[19px]">MiddleWare</div>
                </div>
                <div class="md:ml-5 cursor-pointer w-[45%] md:w-auto" @click="goWorkflow">
                  <div class="flex justify-center">
                    <img src="~/assets/images/automate-workflow-logo.svg" class="w-[30px] md:w-[50px]">
                  </div>
                  <div class="solution-text text-[7px] leading-[10px] md:text-[14px] md:leading-[19px]">Automate Workflow</div>
                </div>
                <div class="md:mx-5 cursor-pointer w-[45%] md:w-auto" @click="goDownload">
                  <div class="flex justify-center">
                    <img src="~/assets/images/decentralized-logo.svg" class="w-[30px] md:w-[50px]">
                  </div>
                  <div class="solution-text text-[7px] leading-[10px] md:text-[14px] md:leading-[19px]">Decentralized Computing Power</div>
                </div>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4 absolute w-[190px] md:w-[285px] right-[28px] md:right-[125px] bottom-[25px] md:bottom-[180px] text-center md:px-5">
                <div class="md:mr-2">
                  <div class="flex justify-center">
                    <img src="~/assets/images/contract-operation-logo.svg" class="w-[30px] md:w-[50px]">
                  </div>
                  <div class="solution-text text-[7px] leading-[10px] md:text-[14px] md:leading-[19px]">Contract Operation</div>
                </div>
                <div class="md:mr-2">
                  <div class="flex justify-center">
                    <img src="~/assets/images/service-operation-logo.svg" class="w-[30px] md:w-[50px]">
                  </div>
                  <div class="solution-text text-[7px] leading-[10px] md:text-[14px] md:leading-[19px]">Service Operation</div>
                </div>
                <div>
                  <div class="flex justify-center">
                    <img src="~/assets/images/data-monitoring-logo.svg" class="w-[30px] md:w-[50px]">
                  </div>
                  <div class="solution-text text-[7px] leading-[10px] md:text-[14px] md:leading-[19px]">Data monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="text-center">
            <div class="area-title !mt-0">How Hamster Works</div>
            <div class="flex justify-center">
              <div class="area-desc w-[770px]">
                ~35% cost and 40% time of development are saved with support of the Hamster Toolkit
              </div>
            </div>
          </div>
          <img v-if="$device.isMobile" src="~/assets/images/home-work-img-phone.png" class="w-full my-[40px]"/>
          <img v-else src="~/assets/images/home-work-img.png" class="w-full"/>
        </div>
        <div>
          <div class="text-center mb-[70px]">
            <div class="area-title !mt-0">Hamster Ecology</div>
            <div class="flex justify-center">
              <div class="area-desc">
                We support various networks and power leading Web3 projects
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="ecology-text w-[30%] md:w-[10%]">Infrastructure</div>
            <div class="scroll-content w-[70%] md:w-[90%]">
              <div class="scroll-infrastructure1 scroll-img">
                <img class="h-[35px] mx-5" v-for="(item, index) in 11" :key="index" :src="getImageURL(`Infrastructure-${item}.png`)"/>
              </div>
              <div class="scroll-infrastructure2 scroll-img">
                <img class="h-[35px] mx-5" v-for="(item, index) in 11" :key="index" :src="getImageURL(`Infrastructure-${item}.png`)"/>
              </div>
            </div>
          </div>
          <div class="flex mt-7">
            <div class="ecology-text w-[30%] md:w-[10%]">Defi</div>
            <div class="scroll-content w-[70%] md:w-[90%]">
              <div class="scroll-defi1 scroll-img">
                <img class="h-[35px] mx-5" v-for="(item, index) in 11" :key="index" :src="getImageURL(`DeFi-${item}.png`)"/>
              </div>
              <div class="scroll-defi2 scroll-img">
                <img class="h-[35px] mx-5" v-for="(item, index) in 11" :key="index" :src="getImageURL(`DeFi-${item}.png`)"/>
              </div>
            </div>
          </div>
          <div class="flex mt-7">
            <div class="ecology-text w-[30%] md:w-[10%]">NFT</div>
            <div class="scroll-content w-[70%] md:w-[90%]">
              <div class="scroll-NFT1 scroll-img">
                <img class="h-[50px] mx-5" v-for="(item, index) in 11" :key="index" :src="getImageURL(`NFT-${item}.png`)"/>
              </div>
              <div class="scroll-NFT2 scroll-img">
                <img class="h-[50px] mx-5" v-for="(item, index) in 11" :key="index" :src="getImageURL(`NFT-${item}.png`)"/>
              </div>
            </div>
          </div>
          <div class="flex mt-7">
            <div class="ecology-text w-[30%] md:w-[10%]">GameFi</div>
            <div class="scroll-content w-[70%] md:w-[90%]">
              <div class="scroll-GameFi1 scroll-img">
                <img class="h-[50px] mx-5" v-for="(item, index) in 10" :key="index" :src="getImageURL(`GameFi-${item}.png`)"/>
              </div>
              <div class="scroll-GameFi2 scroll-img">
                <img class="h-[50px] mx-5" v-for="(item, index) in 10" :key="index" :src="getImageURL(`GameFi-${item}.png`)"/>
              </div>
            </div>
          </div>
          <div class="md:flex md:justify-around mt-[60px] md:mt-[100px] text-center">
            <div class="md:flex md:text-left">
              <div class="num-title">260</div>
              <div class="num-desc md:ml-[10px]">Web3 Developersu<br>Use Hamster</div>
            </div>
            <div class="md:flex mt-[40px] md:mt-0">
              <div class="num-title">387</div>
              <div class="num-desc md:ml-[10px]">Contract/FrontEnd<br>Templates</div>
            </div>
            <div class="md:flex mt-[40px] md:mt-0">
              <div class="num-title">13K</div>
              <div class="num-desc md:ml-[10px]">Total MiddleWare<br>Requests</div>
            </div>
            <div class="md:flex mt-[40px] md:mt-0">
              <div class="num-title">27</div>
              <div class="num-desc md:ml-[10px]">Total Workflow<br>Executions</div>
            </div>
          </div>
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
  import StartBuild from "./components/StartBuild.vue";
import 'vue3-carousel/dist/carousel.css';
import 'animate.css';
  
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
  const goDownload = () => {
    window.open("https://hamsternet.io/download");
  }
  const goWorkflow = () => {
    window.open("/workflow");
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
  .top-bg-color{
    background-color: #000000;
  }
  .top-bg{
    background: url("~/assets/images/home-top-bg.jpg") no-repeat center #000000;
    // background: url("~/assets/images/home-top-bg.png") no-repeat 70% #000000;
    background-size: contain;
  }
  .top-bg-phone{
    background: url("~/assets/images/home-top-bg-phone.jpg") no-repeat center #000000;
    background-size: contain;
  }
  .solutions-bg{
    background: url("~/assets/images/home-solutions-bg.png") no-repeat center;
    background-size: 100% 100%;
  }
  .solutions-bg-phone{
    background: url("~/assets/images/home-solutions-bg-phone.png") no-repeat center;
    background-size: 100% 100%;
  }
  .solution-text{
    color: #DEDBFF;
    font-family: OpenSans;
    margin-top: 10px
  }

.ecology-text{
  font-weight: bold;
  line-height: 35px;
  text-align: right;
  color: #989898;
  margin-right: 20px;
}
.scroll-infrastructure1{
  animation-name: rollInfrastructure1;
}
.scroll-infrastructure2{
  animation-name: rollInfrastructure2;
}
@keyframes rollInfrastructure1{
  0%{left: 0px; top: 0px;}
  100%{left: 2183px; top: 0px;}
}
@keyframes rollInfrastructure2{
  0%{left: -2183px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
.scroll-defi1{
  animation-name: rollDefi1
}
.scroll-defi2{
  animation-name: rollDefi2;
}
@keyframes rollDefi1{
  0%{left: 2467px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
@keyframes rollDefi2{
  0%{left: 0px; top: 0px;}
  100%{left: -2467px; top: 0px;}
}
.scroll-NFT1{
  animation-name: rollNFT1;
}
.scroll-NFT2{
  animation-name: rollNFT2;
}
@keyframes rollNFT1{
  0%{left: 0px; top: 0px;}
  100%{left: 1852px; top: 0px;}
}
@keyframes rollNFT2{
  0%{left: -1852px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
.scroll-GameFi1{
  animation-name: rollGameFi1;
}
.scroll-GameFi2{
  animation-name: rollGameFi2;
}
@keyframes rollGameFi1{
  0%{left: 1783px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
@keyframes rollGameFi2{
  0%{left: 0px; top: 0px;}
  100%{left: -1783px; top: 0px;}
}
.num-title{
  font-size: 60px;
  font-family: Montserrat-Bold, Montserrat;
  font-weight: bold;
  color: #000000;
  line-height: 73px;
}
.num-desc{
  font-size: 14px;
  font-family: Montserrat-Medium, Montserrat;
  font-weight: 500;
  color: #40425C;
  display: flex;
  justify-content: center;
  align-items: center;
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
