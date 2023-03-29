<template>
  <div class="wk-top-bg">
    <div class="container mx-auto px-5 pt-[140px] md:pt-[200px] pb-[100px] md:pb-[170px]">
      <img src="~/assets/images/wf-label.png" class="h-[27px] md:h-[40px]"/>
      <div class="text-center">
        <div class="mt-[10px] mb-[20px] text-[24px] md:text-[65px] leading-[36px] md:leading-[74px] font-extrabold font-family-bold text-[#00044C]">Make your Project from idea to production easily</div>
        <div class="text-[16px] md:text-[24px] leading-[21px] md:leading-[35px] font-medium text-[#42445E] font-family-medium flex justify-center">
          <div class="w-[720px]">Makes it easy to automate all your web3.0 project workflows. Check, build, and deploy your code right from code repository by Hamster </div>
        </div>
        <button class="btn-css mt-[50px]" @click="gotoAline">Get Started</button>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-5 mt-[100px]">
    <div class="relative">
      <div :class="{'bg-box right-0' : !$device.isMobile}"></div>
      <div class="md:flex md:pt-[152px] pb-[56px]">
        <div class="md:w-[500px]">
          <div class="area-title !mt-0">Quickly start web3 project</div>
          <div class="area-desc">Get Start your Own Contract/FrontEnd quickly with best practices from partners and the community.</div>
        </div>
        <div class="flex justify-center my-[40px] md:my-0">
          <img src="~/assets/images/workflow-start.png" class="h-[180px] md:h-[348px]" />
        </div>
        <div class="overflow-x-auto  wf-overflow-scrollbar">
          <div class="w-auto flex flex-shrink-0 md:inline-block md:w-[240px] md:px-[14px]">
            <div class="wf-start-bg-box wf-start-text">NFTs</div>
            <div class="wf-start-text">DeFi</div>
            <div class="wf-start-text">GameFi</div>
            <div class="wf-start-text">DAO</div>
            <div class="wf-start-text">GameFi</div>
            <div class="wf-start-text">DAO</div>
          </div>
        </div>
      </div>
    </div>
    <div :class="{'build-bg' : !$device.isMobile}">
      <div class="md:flex">
        <div class="md:w-1/2"></div>
        <div class="md:w-[500px] wf-area-div">
          <div class="area-title !mt-0">Automate build web3 project</div>
          <div class="area-desc">Set up tasks and combine them to automate all your software development workflows for saving time and cost.</div>
        </div>
        <img src="~/assets/images/workflow-build.png" :class="[$device.isMobile ?'inline-block' : 'hidden']" class="w-full" />
      </div>
    </div>
    <div>
      <div class="md:flex">
        <div class="md:mr-[80px] wf-area-div">
          <div class="area-title !mt-0">Secure web3 project</div>
          <div class="area-desc">Combines multiple state-of-art security scanning engines into Hamster workflow, securing every aspect of your web3 project</div>
        </div>
        <img src="~/assets/images/workflow-secure.png" class="w-full md:w-auto md:h-[677px]" />
      </div>
    </div>
    <div>
      <div class="flex flex-wrap md:flex-nowrap">
        <img src="~/assets/images/workflow-manage.png" class="w-full md:w-auto md:h-[677px]" />
        <div class="md:ml-[80px] wf-area-div order-first md:order-last">
          <div class="area-title !mt-0">Manage Web3 Project </div>
          <div class="area-desc">A deployment workflow designed for you to ship contracts on-chain effortlessly</div>
        </div>
      </div>
    </div>
    <div class="mb-[70px] md:mb-[100px]">
      <div class="font-family-bold font-extrabold mb-[45px] md:mb-[60px] text-[#00034C] text-[16px] md:text-[24px] leading-[19px] md:leading-[74px] text-center">Trusted by best teams</div>
      <div v-if="!$device.isMobile" class="flex justify-between">
          <img src="~/assets/images/team-grant.png" class="wf-team-img" />
          <img src="~/assets/images/team-foundation.png" class="wf-team-img" />
          <img src="~/assets/images/team-f.png" class="wf-team-img" />
          <img src="~/assets/images/team-igorand.png" class="wf-team-img" />
          <img src="~/assets/images/team-starknet.png" class="wf-team-img" />
      </div>
      <div v-else>
        <div class="flex justify-between mb-[20px]">
          <img src="~/assets/images/team-grant.png" class="wf-team-img" />
          <img src="~/assets/images/team-foundation.png" class="wf-team-img" />
          <img src="~/assets/images/team-igorand.png" class="wf-team-img" />
        </div>
        <div class="flex justify-evenly">
          <img src="~/assets/images/team-f.png" class="wf-team-img" />
          <img src="~/assets/images/team-starknet.png" class="wf-team-img" />
        </div>
      </div>
    </div>
  </div>
  <StartBuild></StartBuild>
</template>
<script setup>
import StartBuild from "../company/StartBuild.vue";
</script>

<style lang="less" scoped>

.wk-top-bg{
  background: url("~/assets/images/workflow-top-bg.png") no-repeat center;
  background-size: 100% 100%;
}
.bg-box{
  background: #1E28ED;
  box-shadow: 0px 2px 1183px 41px #212CFF;
  opacity: 0.1;
  filter: blur(50px);
  width: 52%;
  height: 100%;
  position: absolute;
}
.build-bg{
  background: url("~/assets/images/workflow-build.png") no-repeat left;
  background-size: contain;
}

.wf-overflow-scrollbar::-webkit-scrollbar{
  display: none;
}
</style>
<style>

.wf-start-bg-box{
  @apply w-[120px] md:w-[212px] h-[61px] md:h-[47px];
  background: linear-gradient(133deg, #5C64FF 0%, #EAE1FF 100%);
  border-radius: 7px;
  opacity: 0.86;
  backdrop-filter: blur(38px);
  color: #FFFFFF !important;
}
.wf-start-text{
  @apply flex-shrink-0 w-[120px] md:w-auto md:pl-[33px] text-center md:text-left text-[21px] md:text-[34px] leading-[61px] md:leading-[47px];
  font-family: Montserrat-Bold, Montserrat;
  font-weight: bold;
  color: #30325C; 
}
.wf-start-text:not(:first-child){
  @apply md:mt-[47px] ml-[20px] md:ml-0;
}
.wf-area-div{
  @apply text-center md:text-left mt-[70px] md:mt-[200px] md:mb-[160px];
}
.wf-team-img{
  @apply h-[30px] md:h-[60px];
}
</style>