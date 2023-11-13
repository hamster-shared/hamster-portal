<template>
  <DefaultLayout :showFooter="false" :showHeader="showHeader" :showHeaderBg="showHeaderBg">
      <div class=" top-bg-color" :class="[{'!bg-bottom' : $device.isMobile},[$device.isMobile ? 'top-bg-phone' : 'top-bg']]">
        <div class="container mx-auto px-5 md:h-screen flex ">
          <div class="md:flex md:items-center relative md:mt-[80px]">
            <div class=" mt-[110px] md:mt-0">
              <div class="text-2xl font-extrabold md:w-[970px] md:text-[50px] md:leading-[74px] font-family-extraBold">
                Build Web3.0 collaboratively with the power of AI, fast.
              </div>
              <div class="mt-5 mb-6 text-[16px] md:text-[21px] md:w-[500px] leading-[21px] md:leading-[30px] font-medium md:font-light text-[#999999] ">One-stop Development Automation Experience with Process Safety and Privacy</div>
              <div v-if="false" class="hidden mb-[35px] md:block">
                <div class="flex ">
                  <div class="logo-title font-family-light">
                    <!-- <div>Investors:</div> -->
                    <div class="mt-4">Grants:</div>
                  </div>
                  <div>
                    <!-- <div>
                      <img src="./images/waterdrip.png" class="h-[30px] inline-block ml-4"/>
                      <img src="./images/stratified.png" class="h-[23px] inline-block ml-4"/>
                    </div> -->
                    <div class="mt-4">
                      <img src="~/assets/images/Grant-1.png" class="h-[24px] inline-block ml-4"/>
                      <img src="~/assets/images/Grant-2.png" class="h-[27px] inline-block ml-4"/>
                      <img src="~/assets/images/Grant-3.png" class="h-[27px] inline-block ml-4"/>
                      <img src="~/assets/images/Grant-4.png" class="h-[18px] inline-block ml-4"/>
                      <img src="~/assets/images/Grant-5.png" class="h-[23px] inline-block ml-4"/>
                    </div>
                    <div class="mt-4">
                      <img src="~/assets/images/Grant-6.png" class="h-[23px] inline-block ml-4"/>
                      <img src="~/assets/images/Grant-7.png" class="h-[16px] inline-block ml-6"/>
                      <img src="~/assets/images/Grant-8.png" class="h-[20px] inline-block ml-6"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="md:flex">
                <button class="btn-css" @click="gotoAline">Start Building</button>
                <button class="btn-css text-left md:text-center !px-[20px] md:!px-[40px] mt-[30px] md:mt-0 md:ml-[20px] !text-[#5C64FF] !bg-transparent hover:!text-[#6C73FF] active:!text-[#3F48FF]" @click="gotoEmail">Join Hamster AI Agent Freelancer Platform Waitinglist</button>
              </div>
              <div class="mt-[60px] md:mt-[70px] text-[14px] md:text-[16px] font-light font-family-light">Powered by 29yrs fintech experience elite & 6000+ IT engineers of listed company</div>
              <div class="md:flex">
                <div class="top-card-border flex items-center">
                  <div class="top-card-title top-card-title-color1">52K+</div>
                  <div class="top-card-content whitespace-nowrap">Deployed Contracts</div>
                </div>
                <div class="top-card-border pt-[12px] pb-[20px] md:py-0 md:ml-[30px] md:flex">
                  <div class=" flex items-center">
                    <div class="top-card-title top-card-title-color2">10+</div>
                    <div class="top-card-content">Grants</div>
                  </div>
                  <div class="flex flex-wrap items-center">
                    <div v-for="(item, index) in 8" :key="index"  class="md:w-auto md:ml-[20px] h-[24px] md:mt-0 mt-[20px] flex item-center justify-center" :class="{ 'ml-[5%]' : $device.isMobile && item != 1 && item != 5},[item == 3 ? 'w-[35%]' : item == 4 ? 'w-[16%]' : item == 7 ? 'w-[30%]' : 'w-[17%]']">
                      <img :src="getImageURL(`Grant-top-${item}.png`)" class="h-auto w-auto"/> 
                    </div>
                  </div>
                </div>
              </div>
              <div class="md:flex md:pb-0 pb-[50px]"> 
                <div class="top-card-border flex items-center">
                  <div class="top-card-title top-card-title-color2">620K+</div>
                  <div class="top-card-content whitespace-nowrap">IT Candidates</div>
                </div>
                <div class="top-card-border pt-[12px] pb-[20px] md:py-0 md:ml-[30px] md:flex">
                  <div class=" flex items-center">
                    <div class="top-card-title top-card-title-color1">11</div>
                    <div class="top-card-content">EcoSystems</div>
                  </div>
                  <div class="flex flex-wrap items-center">
                    <div v-for="(item, index) in 11" :key="index"  class="w-[12.5%] md:w-auto h-[35px] md:mt-0 mt-[20px] flex item-center justify-center" :class="{ 'ml-[5%]' : $device.isMobile && item != 1 && item != 7},{'ml-[23px]': !$device.isMobile}">
                      <img :src="getImageURL(`EcoSystems-top-${item}.png`)" class="h-full w-auto"/> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="false" class="absolute bottom-[13px] w-full md:hidden">
              <!-- <div class="flex justify-center items-center">
                <div class="logo-title font-family-light">Investors:</div>
                <img src="./images/waterdrip.png" class="h-[20px] inline-block ml-[16px]"/>
                <img src="./images/stratified.png" class="h-[20px] inline-block ml-[16px]"/>
              </div> -->
              <div class="flex flex-wrap mt-[8px] justify-center ">
                <div class="logo-title font-family-light">Grant:</div>
                <div>
                  <div>
                    <img src="~/assets/images/Grant-1.png" class="h-[17px] inline-block ml-[16px]"/>
                    <img src="~/assets/images/Grant-2.png" class="h-[17px] inline-block ml-[16px]"/>
                    <img src="~/assets/images/Grant-3.png" class="h-[17px] inline-block ml-[16px]"/>
                    <img src="~/assets/images/Grant-4.png" class="h-[13px] inline-block ml-[16px]"/>
                    <img src="~/assets/images/Grant-5.png" class="h-[16px] inline-block ml-[16px]"/>
                  </div>
                  <div class=" mt-[5px]">
                    <img src="~/assets/images/Grant-6.png" class="h-[16px] inline-block ml-[16px]"/>
                    <img src="~/assets/images/Grant-7.png" class="h-[11px] inline-block ml-[16px]"/>
                    <img src="~/assets/images/Grant-8.png" class="h-[13px] mt-[1.5px] inline-block ml-[16px]"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :class="{'automation-bg' : !$device.isMobile}">
        <div class="container mx-auto px-5 pb-[60px] md:pb-[160px]">
          <div>
            <div class="text-center">
              <div class="area-title pt-[60px] md:pt-[80px] !mt-0">What Hamster Provides</div>
              <div v-if="false" class="flex  justify-center">
                <div class="area-desc md:w-[600px]">
                  Web3.0 + AI super middleware engine & data-driven incubation platform
                </div>
              </div>
              <div class="mt-[40px] md:mt-[20px] flex justify-center">
                <div :class="{ 'hidden' : $device.isMobile}" class="flex border border-solid border-[#E4E8FD] cursor-pointer rounded-[19px] text-[16px] text-[#000000] leading-[30px] px-[4px] py-[3px]">
                  <div :class="{ 'tab-checked' : providesIndex === 1}" @click="setProvidesValue(1)" class="tab-init">For Developers</div>
                  <div :class="{ 'tab-checked' : providesIndex === 2}" @click="setProvidesValue(2)" class="tab-init">For Ecosystems</div>
                </div>
                <div :class="{ 'hidden' : !$device.isMobile}" class="tab-checked tab-phone-init">For Developers</div>
              </div>
            </div>
          </div>
          <div class="mt-[40px] md:grid md:grid-cols-3 md:gap-[30px]">
            <div v-if="providesIndex === 1 || $device.isMobile" v-for="(item,key) in automationList" :key="key" :class="[{'mt-[30px] md:mt-0' : key !== 0},{'group automation-card' : !$device.isMobile}]" class="relative h-[365px] md:h-[370px] provides-card">
              <img :src="getImageURL(`automation-icon-${key+1}.png`)" class="provides-logo"/> 
              <div class="provides-title">{{ item.title }}</div>
              <div class="provides-desc">{{ item.desc }}</div>
              <div class="provides-btn md:hidden group-hover:block" @click="gotoPorject">
                <div class="flex items-center">
                  <div class="automation-text-color">Start building for free</div>
                  <img src="~/assets/images/right-color.svg" class="h-[12px] ml-[10px]"/>
                </div>
              </div>
            </div>
            <div :class="{ 'hidden' : !$device.isMobile}" class="mt-[50px] flex justify-center">
              <div class="tab-checked tab-phone-init text-center">For Ecosystems</div>
            </div>
            <div v-if="providesIndex === 2 || $device.isMobile" v-for="(item,key) in ecosystemsList" :key="key" :class="[{'group automation-card' : !$device.isMobile}]" class="mt-[30px] md:mt-0 relative h-[525px] md:h-[500px] provides-card">
              <img :src="getImageURL(`ecosystem-icon-${key+1}.png`)" class="provides-logo"/> 
              <div class="provides-title">{{ item.title }}</div>
              <div class="provides-desc">{{ item.desc }}</div>
              <div v-for="(subItem,subKey) in item.subList" :key="subKey" class="provides-sub">
                <img src="~/assets/images/ecosystem-sub.png" class="h-[20px] w-[20px] mr-[10px]"/>
                <div>{{ subItem.content }}</div>
              </div>
              <div class="provides-btn left-[20px] flex items-center" @click="goEmail">
                <div class="automation-text-color">Talk to us</div>
                <img src="~/assets/images/right-color.svg" class="h-[12px] ml-[10px]"/>
              </div>
              <div v-if="key < 2" @click="gotoViewExample(key)" class="provides-btn !bottom-[30px] md:!bottom-[20px] right-[20px] view-btn flex justify-center items-center">
                <img v-if="key == 0" src="~/assets/images/ecosystem-video0.png" class="h-[20px] mr-[10px]"/>
                <img v-if="key == 1" src="~/assets/images/ecosystem-video.png" class="h-[20px] mr-[10px]"/>
                View example
              </div>
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
                Integrating AI and modular development into blockchain enables intelligent development, lowers the threshold, and advances blockchain technology.
              </div>
            </div>
          </div>
          <div :class="[$device.isMobile ? 'solutions-bg-phone my-[40px]' : 'solutions-bg']"> 
            <div class="flex relative h-[320px] md:h-[610px] justify-start"> 
              <div class=" w-[95%] md:w-full">
                <div class="flex md:block justify-center">
                  <div class="grid grid-cols-4 md:grid-cols-7 gap-2 pt-[130px] md:pt-[350px] md:ml-[20px] lg:ml-[380px] w-[300px] md:w-[690px] lg:w-[630px] text-center">
                    <div v-for="(item, index) in protocolList" :key="index" :class="item.class" @click="handleProtocol(item.title)">
                      <div class="flex justify-center">
                        <img :src="getImageURL(`${item.imgName}.svg`)" class="w-[26px] md:w-[50px]">
                      </div>
                      <div class="solution-text">{{ item.title }}</div>
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
            <div class="w-[35%] md:w-[16%]">
              <div class="ecology-text">Layer 1&2</div>
              <div class="ecology-text  my-[30px] md:my-[50px]">Infrastructure</div>
              <div class="ecology-text">Security</div>
              <div class="ecology-text  my-[30px] md:my-[50px]">DAO&Community</div>
              <div class="ecology-text !leading-[14px] md:!leading-[50px]">Supported Hackathon</div>
            </div>
            <div class="w-[65%] md:w-[84%] relative">
              <div class="scroll-fadeout-bg scroll-fadeout-left"></div>
              <div class="scroll-fadeout-bg scroll-fadeout-right"></div>
              <div class="scroll-content">
                <div class="scroll-img" :class="[$device.isMobile ? 'scroll-one-phone1' : 'scroll-one1']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 10" :key="index" :src="getImageURL(`Layer-${item}.png`)"/>
                </div>
                <div class="scroll-img" :class="[$device.isMobile ? 'scroll-one-phone2' : 'scroll-one2']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 10" :key="index" :src="getImageURL(`Layer-${item}.png`)"/>
                </div>
              </div>
              <div class="scroll-content my-[30px] md:my-[50px]">
                <div class="scroll-img" :class="[$device.isMobile ? 'scroll-two-phone1' : 'scroll-two1']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 10" :key="index" :src="getImageURL(`Infrastructure-${item}.png`)"/>
                </div>
                <div class="scroll-img" :class="[$device.isMobile ? 'scroll-two-phone2' : 'scroll-two2']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 10" :key="index" :src="getImageURL(`Infrastructure-${item}.png`)"/>
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
              <div class="scroll-content my-[30px] md:my-[50px]">
                <div class=" scroll-img" :class="[$device.isMobile ? 'scroll-four-phone1' : 'scroll-four1']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 6" :key="index" :src="getImageURL(`Community-${item}.png`)"/>
                </div>
                <div class=" scroll-img" :class="[$device.isMobile ? 'scroll-four-phone2' : 'scroll-four2']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 6" :key="index" :src="getImageURL(`Community-${item}.png`)"/>
                </div>
              </div>
              <div class="scroll-content">
                <div class=" scroll-img" :class="[$device.isMobile ? 'scroll-five-phone1' : 'scroll-five1']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 3" :key="index" :src="getImageURL(`Hackathon-${item}.png`)"/>
                  <img class="ecology-img mx-5" v-for="(item, index) in 3" :key="index" :src="getImageURL(`Hackathon-${item}.png`)"/>
                </div>
                <div class=" scroll-img" :class="[$device.isMobile ? 'scroll-five-phone2' : 'scroll-five2']">
                  <img class="ecology-img mx-5" v-for="(item, index) in 3" :key="index" :src="getImageURL(`Hackathon-${item}.png`)"/>
                  <img class="ecology-img mx-5" v-for="(item, index) in 3" :key="index" :src="getImageURL(`Hackathon-${item}.png`)"/>
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex md:justify-around mt-[60px] md:mt-[100px] text-center">
            <div class="md:flex md:text-left">
              <div class="num-title">2K+</div>
              <div class="num-desc md:ml-[10px]">Web3.0 Developers<br>on Hamster</div>
            </div>
            <div class="md:flex md:text-left mt-[40px] md:mt-0">
              <div class="num-title">30+</div>
              <div class="num-desc md:ml-[10px]">Contract/FrontEnd<br>Templates</div>
            </div>
            <div class="md:flex md:text-left mt-[40px] md:mt-0">
              <div class="num-title">10+</div>
              <div class="num-desc md:ml-[10px]">Supported Networks</div>
            </div>
            <div class="md:flex md:text-left mt-[40px] md:mt-0">
              <div class="num-title">10K+</div>
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
            <div class="w-full md:w-3/5 flex-none cursor-pointer" v-for="(item,key) in showQuotesList" :key="key" @click="getQuotesName(item.imgName, key, 'card')" :class="{'mr-[20px]' : key !== 4}">
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
          <div v-for="item in 5" :id="`div-quotes-num${item}`" :class="{'add-item-style' : item === 1}" class="box-num-item"></div>
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

  const providesIndex = ref(1);

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
    // {imgName: 'Quotes-KNN3', desc: 'Hamster has the prospect of becoming one of the most important infrastructure service providers in the Web3 ecosystem. Its technical strength, user experience and future planning in many aspects can meet KNN3\'s needs very well, and KNN3 is honored to reach a win-win cooperation relationship with Hamster.'},
    {imgName: 'Quotes-CESS', desc: 'Hamster\'s full-stack Web3 technology can help CESS store and access data more effectively. At the same time, data standardization and source deployment also help CESS\'s progress. Hamster has fully demonstrated its support for the CESS project.'},
    {imgName: 'Quotes-Admeta', desc: 'Hamster provides stable and efficient Middleware services. Through Hamster, more developers and community members can access and use AdMeta services, benefiting more developers.'},
  ]);
  const automationList = ref([
    { title: 'Team collaboration', desc: 'Hamster provides powerful automated secure development flow services including version control, permission management, workflow management, etc., supporting global developers to collaboratively develop, deploy and manage smart contract and DApp code based on the same project. ' },
    { title: 'Cross-chain development', desc: 'Hamster supports multiple public chain ecosystems including Ethereum, Aptos, Starknet, Sui, ICP, Cosmos, etc., and provides rich templates and sample codes to help developers choose different public chains to deploy and debug smart contracts.' },
    { title: 'Front-loaded auditing', desc: 'Hamster integrates contract security audits into the automated workflows prior to deployment, deeply embedding security into every line of code and every facet of the DApp, and provides security references for crowdfunding platforms/exchanges before token offerings of large ecosystems.' },
    { title: 'Keyless smart deployment', desc: 'Hamster enables visual configuration of smart contract deployment, unified management of contract dependencies, private key security and cross-chain deployment, etc., eliminating worries about script maintenance vulnerabilities. ' },
    { title: 'Contract monitoring and alerting', desc: 'Hamster provides comprehensive contract operation and maintenance. It monitors contract invocations through behavior and threshold monitoring, sends alerts, and ensures contract security.' },
    { title: 'Massive developer resources', desc: 'Hamster has already gathered 480,000 Web2.0 developers who are waiting to enter Web3.0. ' },
  ]);
  const ecosystemsList = ref([
    { title: 'ALineEDU', desc: 'Based on Hamster\'s ALine, Hamster provides a series of gamified educational services to attract more developers into the corresponding ecosystem.', subList: [{ content: 'Customize gamification tasks based on Hamster ALine' }, { content: 'Jointly issued NFTs together with the ecosystems' }]},
    { title: 'ALineHack', desc: 'ALineHack is a comprehensive service product to empower hackathons for the ecosystems, helping developers complete the competition with high quality and efficiency.', subList: [{ content: 'A series of educational services based on Hamster ALine' }, { content: 'The entire planning, promotion, and holding of the hackathon' }, { content: 'Hackathon training and mentoring for developers' }]},
    { title: 'ALineHack+', desc: 'ALineHack+ is a comprehensive service product for hackerhouse empowerment chain ecosystem, which helps developers complete their demos efficiently and provides infrastructure and resources for subsequent incubation.', subList: [{ content: 'A series of educational services based on Hamster ALine' }, { content: 'The entire planning, promotion, and holding of the hackerhouse' }, { content: 'Hackerhouse training and mentoring for developers' }]},
  ]);
  const protocolList = ref([
    {imgName: 'template-market-logo', title: 'Template Market', class: ''},
    {imgName: 'middleWare-logo', title: 'Middleware', class: 'cursor-pointer'},
    {imgName: 'automate-workflow-logo', title: 'ALine', class: 'cursor-pointer'},
    {imgName: 'decentralized-logo', title: 'Decentralized Computing Power', class: 'cursor-pointer'},
    {imgName: 'contract-operation-logo', title: 'Contract Operation', class: ''},
    {imgName: 'service-operation-logo', title: 'Service Operation', class: ''},
    {imgName: 'data-monitoring-logo', title: 'Data monitoring', class: ''},
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
         // quotesList 注释了一条，将 slice(4+curKey,6) 改为 slice(3+curKey,5)
        showQuotesImgList.value = quotesList.value.slice(3+curKey,5)
        quotesList.value.filter(function (val, key) {
          if (key < curKey + 3) {
            showQuotesImgList.value.push(val);
          } 
        })
      } else if (curKey - 2 < 1) { // quotesList 注释了一条，将 < 2 改为 < 1
        showQuotesImgList.value = quotesList.value.slice(curKey - 2 , 3 + curKey)
      } else {
        // quotesList 注释了一条，将 slice(curKey - 2, 6) 改为 slice(curKey - 2, 5)
        showQuotesImgList.value = quotesList.value.slice(curKey - 2, 5);
        let lenVal = showQuotesImgList.value.length;
        quotesList.value.filter(function (val, key) {
          if (key < 5-lenVal) {
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
  const gotoEmail = () => {
    window.location.href = "/email?show=topic";
  }
  const gotoPorject = () => {
    window.open(alineLink.value+"/projects");
  }
  const gotoViewExample = (key) => {
    if (key == 1) {
      window.open("https://www.youtube.com/watch?v=FeMMujzI2U0");
    } else {
      window.open("https://activity-example.hamsternet.io/");
    }
  }
  const goDownload = () => {
    // window.open("https://hamsternet.io/download");
    window.location.href = "/download";
  }
  const goWorkflow = () => {
    window.location.href = "/workflow";
  }
  const goEmail = () => {
    window.location.href = "/email";
  }
  const handleProtocol = (title) => {
    if (title === 'Decentralized Computing Power') {
      goDownload();
    } else if (title === 'ALine') {
      goWorkflow();
    } else if (title === 'Middleware') {
      window.location.href = "/Middleware";
    }
  }
  
  const setProvidesValue = (val) => {
    providesIndex.value = val;
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
  .tab-checked{
    background: linear-gradient(132deg, #E9E7FA 0%, #FAEAF8 100%);
    border-radius: 19px;
  }
  .tab-phone-init{
    color: #000000;
    font-size: 14px;
    font-weight: bold;
    line-height: 30px;
    height: 30px;
    width: 150px;
  }
  .tab-init{
    width: 200px;
    font-weight: bold;
  }
  .tab-init:hover{ 
    color: #898989;
  }
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
    background: url("~/assets/images/home-top-bg-1.jpg") no-repeat center #000000;
    // background: url("~/assets/images/home-top-bg.png") no-repeat 70% #000000;
    background-size: 100% 100%;
  }
  .top-bg-phone{
    background: url("~/assets/images/home-top-bg-phone-1.jpg") no-repeat center #000000;
    background-size: 100% 100%;
  }
  
  .top-card-border{
    // position: relative;
    overflow: hidden;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(255,255,255,0.5);
  }
  .top-card-title{
    display: flex;
    font-size: 30px;
    font-family: Montserrat-Bold, Montserrat;
    font-weight: bold;
    color: #FFFFFF;
    margin-right: 10px;
  }
  .top-card-title-color1{
    background: linear-gradient(270deg, #5C64FF 0%, #00E5D7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .top-card-title-color2{
    background: linear-gradient(270deg, #B600DE 0%, #FB00D9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .top-card-content{
    font-size: 14px;
    font-weight: 300;
    font-family: Montserrat-Light, Montserrat;
  }
  .automation-bg{
    background: url("~/assets/images/automation-bg.png") no-repeat center;
    background-size: 100%;
  }
  .automation-card:hover{
    height: 100%;
    box-shadow: 0px 5px 12px 0px rgba(72,77,168,0.13);
    border-radius: 12px;
    border: 2px solid transparent;
    background-image: linear-gradient(#FEFEFE,#FEFEFE),linear-gradient(133deg, rgba(88, 114, 251, 1), rgba(69, 213, 230, 1));
    background-clip: padding-box, border-box;
    background-origin: border-box;
  }
  .automation-text-color{
    display: flex;
    height: 20px;
    font-size: 16px;
    font-family: Montserrat-Bold, Montserrat;
    font-weight: bold;
    color: #5B7ED1;
    line-height: 19px;
    background: linear-gradient(221deg, #00D3C6 0%, #5C64FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .solutions-bg{
    background: url("~/assets/images/home-solutions-bg.png") no-repeat center;
    background-size: 100% auto;
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
  100%{left: 1588px; top: 0px;}
}
@keyframes scrollOne2{
  0%{left: -1588px; top: 0px;}
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
  100%{left: 1114px; top: 0px;}
}
@keyframes scrollOnePhone2{
  0%{left: -1114px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
.scroll-two1{
  animation-name: scrollTwo1
}
.scroll-two2{
  animation-name: scrollTwo2;
}
@keyframes scrollTwo1{
  0%{left: 1681px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
@keyframes scrollTwo2{
  0%{left: 0px; top: 0px;}
  100%{left: -1681px; top: 0px;}
}
.scroll-two-phone1{
  animation-name: scrollTwoPhone1
}
.scroll-two-phone2{
  animation-name: scrollTwoPhone2
}
@keyframes scrollTwoPhone1{
  0%{left: 1170px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
@keyframes scrollTwoPhone2{
  0%{left: 0px; top: 0px;}
  100%{left: -1170px; top: 0px;}
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
.scroll-five1{
  animation-name: scrollFive1;
}
.scroll-five2{
  animation-name: scrollFive2;
}
@keyframes scrollFive1{
  0%{left: 0px; top: 0px;}
  100%{left: 976px; top: 0px;}
}
@keyframes scrollFive2{
  0%{left: -976px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
.scroll-five-phone1{
  animation-name: scrollFivePhone1;
}
.scroll-five-phone2{
  animation-name: scrollFivePhone2;
}
@keyframes scrollFivePhone1{
  0%{left: 0px; top: 0px;}
  100%{left: 684px; top: 0px;}
}
@keyframes scrollFivePhone2{
  0%{left: -684px; top: 0px;}
  100%{left: 0px; top: 0px;}
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
  // width: 16.66%;
  width: 20%;
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
.top-card-border{
  @apply px-[20px] md:px-[30px] min-h-[70px] md:min-h-[50px] mt-[30px] md:mt-[20px] rounded-[10px] md:rounded-[100px];
}
.logo-title{
  @apply text-[#999999] text-base font-light;
}
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

.provides-card{
  @apply text-[#000000] border border-solid border-[#F1F3FE] bg-[#FFFFFF] rounded-[8px] md:rounded-[12px] p-[20px];
}
.provides-logo{
  @apply md:w-[50px] w-[70px] h-[70px] md:h-[50px];
}
.provides-title{
  @apply my-[10px] text-[16px] md:text-[18px] font-bold leading-[30px];
}
.provides-desc{
  @apply font-light leading-[20px] text-[14px] md:text-[16px] text-[#474959];
  font-family: Montserrat-Light, Montserrat;
}
.provides-sub{
  @apply flex mt-[20px] text-[#474959] leading-[20px];
  font-family: Montserrat-Regular, Montserrat;
}
.provides-btn{
  @apply absolute bottom-[40px] md:bottom-[30px] cursor-pointer leading-[20px];
}
.view-btn{
  background: #FFFFFF;
  box-shadow: 0px 5px 15px 0px rgba(182,184,212,0.3);
  border-radius: 20px;
  width: 179px;
  height: 40px;
  font-weight: 600;
}
</style>
