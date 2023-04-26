<template>
  <DefaultLayout :showFooter="false" :showHeader="showHeader" :showHeaderBg="showHeaderBg">
      <div class=" top-bg-color" :class="[{'!bg-bottom' : $device.isMobile},[$device.isMobile ? 'top-bg-phone' : 'top-bg']]">
        <div class="container mx-auto px-5 h-screen flex ">
          <div class="md:flex md:items-center relative">
            <div class=" text-center md:text-left mt-[100px] md:mt-0">
              <div class="text-2xl font-extrabold px-10 md:px-0 md:w-[560px] md:text-[50px] md:leading-[74px] font-family-extraBold">
                Hamster empowers Web3.0 Explorer to build their dreams
              </div>
              <div class="mt-5 mb-6 text-[16px] md:text-[21px] md:w-[560px] leading-[21px] md:leading-[30px] font-medium md:font-light text-[#999999] ">One-stop Toolkit and Middleware Platform for Web3.0 Developers</div>
              <div class="hidden mb-6 md:block">
                <span class="text-[#999999] text-base font-light font-family-light">Investors</span>
                <img src="./images/waterdrip.png" class="w-[70px] h-[30px] inline-block ml-6"/>
                <img src="./images/stratified.png" class="w-[84px] h-[30px] inline-block ml-6"/>
              </div>
              <button class="btn-css" @click="gotoAline">Start Building</button>
            </div>
            <div class="flex justify-between absolute bottom-[35px] w-full md:hidden">
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
            <div class="area-title">Hamster DevOps Solution</div>
            <div class="flex  justify-center">
              <div class="area-desc md:w-[770px]">
                Hamster offers the comprehensive approach to develop projects in Web3.0. We provide a developer-friendly platform for developers to build their blockchain ideas
              </div>
            </div>
          </div>
          <div :class="[$device.isMobile ? 'solutions-bg-phone my-[40px]' : 'solutions-bg']"> 
            <div class="flex relative h-[460px] md:h-[610px] justify-end"> 
              <div class=" w-[75%] md:w-full">
                <div class="flex md:block justify-center">
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-2 h-[130px] md:h-auto mt-[80px] md:mt-[350px] md:ml-[276px] w-[236px] md:w-[430px] text-center">
                    <div>
                      <div class="flex justify-center">
                        <img src="~/assets/images/template-market-logo.svg" class="w-[30px] md:w-[50px]">
                      </div>
                      <div class="solution-text">Template Market</div>
                    </div>
                    <div>
                      <div class="flex justify-center">
                        <img src="~/assets/images/middleWare-logo.svg" class="w-[30px] md:w-[50px]">
                      </div>
                      <div class="solution-text">Middleware</div>
                    </div>
                    <div class="cursor-pointer" @click="goWorkflow">
                      <div class="flex justify-center">
                        <img src="~/assets/images/automate-workflow-logo.svg" class="w-[30px] md:w-[50px]">
                      </div>
                      <div class="solution-text">Automated Workflow</div>
                    </div>
                    <div class="cursor-pointer" @click="goDownload">
                      <div class="flex justify-center">
                        <img src="~/assets/images/decentralized-logo.svg" class="w-[30px] md:w-[50px]">
                      </div>
                      <div class="solution-text">Decentralized Computing Power</div>
                    </div>
                  </div>
                </div>
                <div class="flex md:block justify-center">
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 md:absolute w-[190px] md:w-[285px] md:right-[125px] md:bottom-[180px] text-center md:px-5 mt-[95px] md:mt-0"> 
                    <div class="md:mr-2">
                      <div class="flex justify-center">
                        <img src="~/assets/images/contract-operation-logo.svg" class="w-[30px] md:w-[50px]">
                      </div>
                      <div class="solution-text">Contract Operation</div>
                    </div>
                    <div class="md:mr-2">
                      <div class="flex justify-center">
                        <img src="~/assets/images/service-operation-logo.svg" class="w-[30px] md:w-[50px]">
                      </div>
                      <div class="solution-text">Service Operation</div>
                    </div>
                    <div>
                      <div class="flex justify-center">
                        <img src="~/assets/images/data-monitoring-logo.svg" class="w-[30px] md:w-[50px]">
                      </div>
                      <div class="solution-text ">Data monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="text-center">
            <div class="area-title !mt-0">How Hamster works</div>
            <div class="flex justify-center">
              <div class="area-desc md:w-[770px]">
                Up to 35% of costs and 40% of development time is saved by using the Hamster Toolkit.
              </div>
            </div>
          </div>
          <img v-if="$device.isMobile" src="~/assets/images/home-work-img-phone.png" class="w-full my-[40px]"/>
          <img v-else src="~/assets/images/home-work-img.png" class="w-full"/>
        </div>
        <div>
          <div class="text-center mb-[60px] md:mb-[100px]">
            <div class="area-title !mt-0">Hamster Ecosystem</div>
            <div class="flex justify-center">
              <div class="area-desc md:w-[770px]">
                We support major blockchains and empower leading decentralized applications
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="w-[35%] md:w-[15%]">
              <div class="ecology-text">Layer 1&2</div>
              <div class="ecology-text  my-[30px] md:my-[50px]">Infrastructure</div>
              <div class="ecology-text">Security</div>
              <div class="ecology-text  mt-[30px] md:mt-[50px]">DAO&Community</div>
            </div>
            <div class="w-[65%] md:w-[85%] relative">
              <div class="scroll-fadeout-bg scroll-fadeout-left"></div>
              <div class="scroll-fadeout-bg scroll-fadeout-right"></div>
              <div class="scroll-content">
                <div class="scroll-img" :class="[$device.isMobile ? 'scroll-one-phone1' : 'scroll-one1']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 6" :key="index" :src="getImageURL(`Layer-${item}.png`)"/>
                </div>
                <div class="scroll-img" :class="[$device.isMobile ? 'scroll-one-phone2' : 'scroll-one2']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 6" :key="index" :src="getImageURL(`Layer-${item}.png`)"/>
                </div>
              </div>
              <div class="scroll-content my-[30px] md:my-[50px]">
                <div class="scroll-img" :class="[$device.isMobile ? 'scroll-two-phone1' : 'scroll-two1']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 8" :key="index" :src="getImageURL(`Infrastructure-${item}.png`)"/>
                </div>
                <div class="scroll-img" :class="[$device.isMobile ? 'scroll-two-phone2' : 'scroll-two2']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 8" :key="index" :src="getImageURL(`Infrastructure-${item}.png`)"/>
                </div>
              </div>
              <div class="scroll-content">
                <div class=" scroll-img" :class="[$device.isMobile ? 'scroll-three-phone1' : 'scroll-three1']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 8" :key="index" :src="getImageURL(`Security-${item}.png`)"/>
                </div>
                <div class=" scroll-img" :class="[$device.isMobile ? 'scroll-three-phone2' : 'scroll-three2']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 8" :key="index" :src="getImageURL(`Security-${item}.png`)"/>
                </div>
              </div>
              <div class="scroll-content mt-[30px] md:mt-[50px]">
                <div class=" scroll-img" :class="[$device.isMobile ? 'scroll-four-phone1' : 'scroll-four1']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 10" :key="index" :src="getImageURL(`Community-${item}.png`)"/>
                </div>
                <div class=" scroll-img" :class="[$device.isMobile ? 'scroll-four-phone2' : 'scroll-four2']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 10" :key="index" :src="getImageURL(`Community-${item}.png`)"/>
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex md:justify-around mt-[60px] md:mt-[100px] text-center">
            <div class="md:flex md:text-left">
              <div class="num-title">1K+</div>
              <div class="num-desc md:ml-[10px]">Web3.0 Developers<br>on Hamster</div>
            </div>
            <div class="md:flex md:text-left mt-[40px] md:mt-0">
              <div class="num-title">20+</div>
              <div class="num-desc md:ml-[10px]">Contract/FrontEnd<br>Templates</div>
            </div>
            <div class="md:flex md:text-left mt-[40px] md:mt-0">
              <div class="num-title">10+</div>
              <div class="num-desc md:ml-[10px]">Support Networks</div>
            </div>
            <div class="md:flex md:text-left mt-[40px] md:mt-0">
              <div class="num-title">2K+</div>
              <div class="num-desc md:ml-[10px]">Workflow Executions</div>
            </div>
          </div>
        </div>
      </div>
      <StartBuild></StartBuild>

      <div class="container mx-auto px-5">
        <div class="text-center mb-8 md:mb-0">
          <div class="area-title">Trending News</div>
          <div class="flex justify-center">
            <div class="area-desc md:w-[770px]">
              We support major blockchains and empower leading decentralized applications
            </div>
          </div>
        </div>
        <div class="md:my-12 md:px-0">
          <div class="md:gap-6 md:grid md:grid-cols-12">
            <div class="flex flex-col flex-shrink-0 md:w-auto md:h-auto md:col-span-4 mb-10 md:mb-0" v-for="(newsItem, index) in news" :key="index">
              <img :src="newsItem.cover" />
              <div class="flex flex-col flex-1 pb-6">
                <div class="text-[26px] text-[#000000] my-7 md:my-[40px] font-family-regular font-normal leading-[32px] show-line-2">{{ newsItem.title }}</div>
                <span class="mb-[20px] flex-1 text-[#83848E] text-[18px] font-family-pf-light font-light leading-[25px] show-line-4">{{ newsItem.text }}</span>
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
    // window.open("https://hamsternet.io/download");
    window.location.href = "/download";
  }
  const goWorkflow = () => {
    window.location.href = "/workflow";
  }

  onMounted(()=>{
    // Init fullpage
    try {

      // getEcology();
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
.scroll-one1{
  animation-name: scrollOne1;
}
.scroll-one2{
  animation-name: scrollOne2;
}
@keyframes scrollOne1{
  0%{left: 0px; top: 0px;}
  100%{left: 968px; top: 0px;}
}
@keyframes scrollOne2{
  0%{left: -968px; top: 0px;}
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
  100%{left: 678px; top: 0px;}
}
@keyframes scrollOnePhone2{
  0%{left: -678px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
.scroll-two1{
  animation-name: scrollTwo1
}
.scroll-two2{
  animation-name: scrollTwo2;
}
@keyframes scrollTwo1{
  0%{left: 1293px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
@keyframes scrollTwo2{
  0%{left: 0px; top: 0px;}
  100%{left: -1293px; top: 0px;}
}
.scroll-two-phone1{
  animation-name: scrollTwoPhone1
}
.scroll-two-phone2{
  animation-name: scrollTwoPhone2
}
@keyframes scrollTwoPhone1{
  0%{left: 905px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
@keyframes scrollTwoPhone2{
  0%{left: 0px; top: 0px;}
  100%{left: -905px; top: 0px;}
}
.scroll-three1{
  animation-name: scrollThree1;
}
.scroll-three2{
  animation-name: scrollThree2;
}
@keyframes scrollThree1{
  0%{left: 0px; top: 0px;}
  100%{left: 1442px; top: 0px;}
}
@keyframes scrollThree2{
  0%{left: -1442px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
.scroll-three-phone1{
  animation-name: scrollThreePhone1;
}
.scroll-three-phone2{
  animation-name: scrollThreePhone2;
}
@keyframes scrollThreePhone1{
  0%{left: 0px; top: 0px;}
  100%{left: 994px; top: 0px;}
}
@keyframes scrollThreePhone2{
  0%{left: -994px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
.scroll-four1{
  animation-name: scrollFour1;
}
.scroll-four2{
  animation-name: scrollFour2;
}
@keyframes scrollFour1{
  0%{left: 1656px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
@keyframes scrollFour2{
  0%{left: 0px; top: 0px;}
  100%{left: -1656px; top: 0px;}
}
.scroll-four-phone1{
  animation-name: scrollFourPhone1;
}
.scroll-four-phone2{
  animation-name: scrollFourPhone2;
}
@keyframes scrollFourPhone1{
  0%{left: 1154px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
@keyframes scrollFourPhone2{
  0%{left: 0px; top: 0px;}
  100%{left: -1154px; top: 0px;}
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

.show-line-2{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.show-line-4{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
</style>

<style scoped>
.solution-text{
  @apply text-[7px] leading-[14px] md:text-[14px] md:leading-[19px] mt-[5px] md:mt-[10px];
  color: #DEDBFF;
  font-family: OpenSans;
}
.ecology-text{
  @apply text-[9px] md:text-[16px] leading-[30px] md:leading-[50px] ;
  font-weight: bold;
  text-align: right;
  color: #989898;
  padding-right: 20px;
}
.ecology-img{
  @apply h-[30px] md:h-[50px];
}
</style>
