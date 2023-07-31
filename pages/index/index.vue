<template>
  <DefaultLayout :showFooter="false" :showHeader="showHeader" :showHeaderBg="showHeaderBg">
      <div class=" top-bg-color" :class="[{'!bg-bottom' : $device.isMobile},[$device.isMobile ? 'top-bg-phone' : 'top-bg']]">
        <div class="container mx-auto px-5 h-screen flex ">
          <div class="md:flex md:items-center relative">
            <div class=" text-center md:text-left mt-[100px] md:mt-0">
              <div class="text-2xl font-extrabold px-10 md:px-0 md:w-[560px] md:text-[50px] md:leading-[74px] font-family-extraBold">
                Hamster empowers Web3.0 Explorer to build their dreams
              </div>
              <div class="mt-5 mb-6 text-[16px] md:text-[21px] md:w-[560px] leading-[21px] md:leading-[30px] font-medium md:font-light text-[#999999] ">One-stop Development Experience for Web3.0 Developers</div>
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
            <div class="area-title">Modular Blockchain Development Protocol</div>
            <div class="flex  justify-center">
              <div class="area-desc md:w-[770px]">
                Integrating AI and modular development into blockchain enables intelligent development, lowers the threshold, and advances blockchain technology
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
                Up to 35% of costs and 40% of development time is saved by using the Hamster Toolkit
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
                  <img class="ecology-img mx-5" v-for="(item, index) in 7" :key="index" :src="getImageURL(`Layer-${item}.png`)"/>
                </div>
                <div class="scroll-img" :class="[$device.isMobile ? 'scroll-one-phone2' : 'scroll-one2']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 7" :key="index" :src="getImageURL(`Layer-${item}.png`)"/>
                </div>
              </div>
              <div class="scroll-content my-[30px] md:my-[50px]">
                <div class="scroll-img" :class="[$device.isMobile ? 'scroll-two-phone1' : 'scroll-two1']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 9" :key="index" :src="getImageURL(`Infrastructure-${item}.png`)"/>
                </div>
                <div class="scroll-img" :class="[$device.isMobile ? 'scroll-two-phone2' : 'scroll-two2']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 9" :key="index" :src="getImageURL(`Infrastructure-${item}.png`)"/>
                </div>
              </div>
              <div class="scroll-content">
                <div class=" scroll-img" :class="[$device.isMobile ? 'scroll-three-phone1' : 'scroll-three1']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 5" :key="index" :src="getImageURL(`Security-${item}.png`)"/>
                  <img class="ecology-img mx-5" v-for="(item, index) in 5" :key="index" :src="getImageURL(`Security-${item}.png`)"/>
                </div>
                <div class=" scroll-img" :class="[$device.isMobile ? 'scroll-three-phone2' : 'scroll-three2']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 5" :key="index" :src="getImageURL(`Security-${item}.png`)"/>
                  <img class="ecology-img mx-5" v-for="(item, index) in 5" :key="index" :src="getImageURL(`Security-${item}.png`)"/>
                </div>
              </div>
              <div class="scroll-content mt-[30px] md:mt-[50px]">
                <div class=" scroll-img" :class="[$device.isMobile ? 'scroll-four-phone1' : 'scroll-four1']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 6" :key="index" :src="getImageURL(`Community-${item}.png`)"/>
                </div>
                <div class=" scroll-img" :class="[$device.isMobile ? 'scroll-four-phone2' : 'scroll-four2']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 6" :key="index" :src="getImageURL(`Community-${item}.png`)"/>
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
              <div class="num-desc md:ml-[10px]">Supported Networks</div>
            </div>
            <div class="md:flex md:text-left mt-[40px] md:mt-0">
              <div class="num-title">2K+</div>
              <div class="num-desc md:ml-[10px]">Workflow Executions</div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-5 mb-[60px] md:mb-[120px]">
        <div class="area-title text-center mb-[40px] md:mb-[100px]">Partner Quotes</div>
        <div class="md:relative overflow-hidden top-0 bottom-0 right-0 left-0 h-[478px] md:h-[321px]">
          <div v-if="!$device.isMobile" v-for="(item,key) in showQuotesList" :key="key">
            <div v-if="key === 0" @click="getQuotesName(item.imgName, key, 'card')" class="cursor-pointer scroll-fadeout-bg scroll-fadeout-left !w-[20%]"></div>
            <div v-if="key === 2" @click="getQuotesName(item.imgName, key, 'card')" class="cursor-pointer scroll-fadeout-bg scroll-fadeout-right !w-[20%]"></div>
          </div>
          <div id="div-quotes" class="quotes-scroll flex overflow-x-auto md:overflow-x-visible md:absolute h-[478px] md:h-[321px] md:-left-[40%] md:right-[40%]">
            <div class="w-full md:w-3/5 flex-none cursor-pointer" v-for="(item,key) in showQuotesList" :key="key" @click="getQuotesName(item.imgName, key, 'card')" :class="{'mr-[20px]' : key !== 5}">
              <div class="card-box-css md:mx-[20px] cursor-pointer p-[40px] md:p-[50px]" :class="[{'box-show-left' : !$device.isMobile && scrollQuotesL},{'box-show-right' : !$device.isMobile && scrollQuotesR}]">
                <img :src="getImageURL(`${item.imgName}.png`)" class="inline-block h-[38px]" />
                <div class="mt-[30px] md:mt-[20px] text-[#40425C] leading-[20px] font-medium">
                  {{ item.desc }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="$device.isMobile" class="mt-[40px] flex">
          <div v-for="item in 6" :id="`div-quotes-num${item}`" :class="{'add-item-style' : item === 1}" class="box-num-item"></div>
        </div>
        <div v-if="!$device.isMobile" class="relative overflow-hidden top-0 bottom-0 right-0 left-0 h-[50px] mt-[50px]">
          <div class="flex absolute h-[50px] w-[1000px] left-1/2 -ml-[500px] overflow-hidden">
            <div v-for="(item,key) in showQuotesImgList" :key="key" @click="getQuotesName(item.imgName, key, 'img')" :class="[key === 2 ? 'card-img-checked' : 'opacity-[18%]',{'box-show-left' : !$device.isMobile && scrollQuotesL},{'box-show-right' : !$device.isMobile && scrollQuotesR}]" class="card-img w-[200px] flex-none cursor-pointer">
              <div class="flex justify-center">
                <img :src="getImageURL(`${item.imgName}.png`)" class="inline-block h-[19px] md:h-[30px]" />
              </div>
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
              <img :src="newsItem.cover" class="h-[200px] w-full" />
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
  const device = useDevice()
  const isMobile = device.value.isMobile

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

  const quotesList = ref([
    {imgName: 'Quotes-Filecoin', desc: 'With abundant Web3 infrastructure capabilities, Hamster not only provides reliable and efficient data services for Filecoin, reduces the threshold for network usage and improves efficiency; its technology and business prospects are also trustworthy and have the prospect of long-term support for the prosperous development of the Filecoin ecosystem, and provide reliable assistance for the robust progress of the Filecoin community.'},
    {imgName: 'Quotes-Chainlink', desc: 'Hamster provides full-stack Web3 infrastructure services to support the development of the Chainlink ecosystem. The visualized tool Hamslink that it provides helps more developers to use Chainlink and promotes the development of Chainlink projects and thriving ecosystem.'},
    {imgName: 'Quotes-Dante', desc: 'Hamster has performed excellently by achieving cross-chain interoperability and strengthening the decentralized ecosystem. Its innovative technology and broad application prospects deserve attention and praise.'},
    {imgName: 'Quotes-KNN3', desc: 'Hamster has the prospect of becoming one of the most important infrastructure service providers in the Web3 ecosystem. Its technical strength, user experience and future planning in many aspects can meet KNN3\'s needs very well, and KNN3 is honored to reach a win-win cooperation relationship with Hamster.'},
    {imgName: 'Quotes-CESS', desc: 'Hamster\'s full-stack Web3 technology can help CESS store and access data more effectively. At the same time, data standardization and source deployment also help CESS\'s progress. Hamster has fully demonstrated its support for the CESS project.'},
    {imgName: 'Quotes-Admeta', desc: 'Hamster provides stable and efficient Middleware services. Through Hamster, more developers and community members can access and use AdMeta services, benefiting more developers.'},
  ]);
  const oldScrollNum = ref(0);
  const showQuotesImgList = ref([]);
  const showQuotesList = ref([]);
  const scrollQuotesL = ref(false);
  const scrollQuotesR = ref(false);
  const setQuotesList = () => {
    if (isMobile) {
      showQuotesList.value = quotesList.value 
    } else {
      showQuotesImgList.value = quotesList.value.slice(0, 5)
      showQuotesList.value = showQuotesImgList.value.slice(1, 4)
    }
  }
  const addQuotesScroll = () => {
    document.getElementById('div-quotes').addEventListener('scroll', (e) => {
      
      // e.target.scrollLeft 滚动条距离左边的距离（ps: 只有距离左边的和距离上面的距离，没有右边和下面的距离。）
      // e.target.clientWidth  客户端显示宽度，高度大概同理，当距离左边的长度等于滚动条长度减去显示宽度即滚动到了最右边
      

      let left = e.target.scrollLeft;
      let width = e.target.clientWidth;
      let divNum = Math.round(left / width);
      if (oldScrollNum.val > divNum) { //向左滑动
        document.getElementById('div-quotes-num'+(divNum+2)).classList.remove("add-item-style");
        document.getElementById('div-quotes-num'+(divNum+1)).classList.add("add-item-style");
      } else { //向右滑动
        document.getElementById('div-quotes-num'+divNum).classList.remove("add-item-style");
        document.getElementById('div-quotes-num'+(divNum+1)).classList.add("add-item-style");
      }
      oldScrollNum.val = divNum;
    })
  }
  const getQuotesName = (name, keyVal, type) => {
    if (!isMobile) {
      if (type === 'img' && keyVal < 2 || type === 'card' && keyVal < 1) {
        scrollQuotesR.value = true;
      } else {
        scrollQuotesL.value = true;
      }
      let curKey = 0;
      quotesList.value.filter(function (val, key) {
        if (val.imgName === name) curKey = key;
      })
      if (curKey - 2 < 0) {
        showQuotesImgList.value = quotesList.value.slice(4+curKey,6)
        quotesList.value.filter(function (val, key) {
          if (key < curKey + 3) {
            showQuotesImgList.value.push(val);
          } 
        })
      } else if (curKey - 2 < 2) {
        showQuotesImgList.value = quotesList.value.slice(curKey - 2 , 3 + curKey)
      } else {
        showQuotesImgList.value = quotesList.value.slice(curKey - 2 , 6)
        quotesList.value.filter(function (val, key) {
          if (key < 6-showQuotesImgList.value.length) {
            showQuotesImgList.value.push(val);
          } 
        }) 
      }
      showQuotesList.value = showQuotesImgList.value.slice(1, 4);
      
      setTimeout(() => {
        scrollQuotesL.value = false;
        scrollQuotesR.value = false;
      }, 500);
    }
  }

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

  const alineLink = ref('')
  const gotoAline = () => {
    window.open(alineLink.value);
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
      if (window.location.href.indexOf('hamsternet.io') !== -1) {
        alineLink.value = "https://develop.alpha.hamsternet.io";
      } else {
        alineLink.value = "https://develop.hamster.newtouch.com";
      }
      setQuotesList();
      addQuotesScroll();
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
  100%{left: 1110px; top: 0px;}
}
@keyframes scrollOne2{
  0%{left: -1110px; top: 0px;}
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
  100%{left: 779px; top: 0px;}
}
@keyframes scrollOnePhone2{
  0%{left: -779px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
.scroll-two1{
  animation-name: scrollTwo1
}
.scroll-two2{
  animation-name: scrollTwo2;
}
@keyframes scrollTwo1{
  0%{left: 1518px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
@keyframes scrollTwo2{
  0%{left: 0px; top: 0px;}
  100%{left: -1518px; top: 0px;}
}
.scroll-two-phone1{
  animation-name: scrollTwoPhone1
}
.scroll-two-phone2{
  animation-name: scrollTwoPhone2
}
@keyframes scrollTwoPhone1{
  0%{left: 1056px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
@keyframes scrollTwoPhone2{
  0%{left: 0px; top: 0px;}
  100%{left: -1056px; top: 0px;}
}
.scroll-three1{
  animation-name: scrollThree1;
}
.scroll-three2{
  animation-name: scrollThree2;
}
@keyframes scrollThree1{
  0%{left: 0px; top: 0px;}
  100%{left: 1802px; top: 0px;}
}
@keyframes scrollThree2{
  0%{left: -1802px; top: 0px;}
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
  100%{left: 1242px; top: 0px;}
}
@keyframes scrollThreePhone2{
  0%{left: -1242px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
.scroll-four1{
  animation-name: scrollFour1;
}
.scroll-four2{
  animation-name: scrollFour2;
}
@keyframes scrollFour1{
  0%{left: 1005px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
@keyframes scrollFour2{
  0%{left: 0px; top: 0px;}
  100%{left: -1005px; top: 0px;}
}
.scroll-four-phone1{
  animation-name: scrollFourPhone1;
}
.scroll-four-phone2{
  animation-name: scrollFourPhone2;
}
@keyframes scrollFourPhone1{
  0%{left: 699px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
@keyframes scrollFourPhone2{
  0%{left: 0px; top: 0px;}
  100%{left: -699px; top: 0px;}
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

.card-box-css{
  height: 100%;
  box-shadow: 0px 9px 10px 0px rgba(172,174,192,0.14);
  border-radius: 8px;
  border: 1px solid transparent;
  background-image: linear-gradient(#FEFEFE,#FEFEFE),linear-gradient(134deg, rgba(71, 77, 200, 1), rgba(50, 182, 177, 1));
  background-clip: padding-box, border-box;
  background-origin: border-box;
}
.box-num-item{
  width: 16.66%;
  height: 3px;
  background: #EAEAEA;
}
.add-item-style{
  background: #0A0A0A;
}
.card-img-checked{
  border-bottom: 3px solid #000000;
}
.quotes-scroll::-webkit-scrollbar {

  display: none; /*隐藏滚动条*/

}
.box-show-right{
  -webkit-animation: bounceR 500ms 1;
  animation: bounceR 500ms 1;
}
@keyframes bounceR {
  0% {
    transform: translate(-100%,0);
  }
  100% {
    transform: translateY(0);
  }
}
.box-show-left{
  -webkit-animation: bounceL 500ms 1;
  animation: bounceL 500ms 1;
}
@keyframes bounceL {
  0% {
    transform: translate(100%,0);
  }
  100% {
    transform: translateY(0);
  }
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
