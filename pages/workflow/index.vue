<template>
  <div :class="[$device.isMobile ? 'wk-top-bg-phone' : 'wk-top-bg']">
    <div class="container mx-auto px-5 md:flex md:items-center h-screen flex">
      <div class="relative">
        <div class="flex mt-[80px] md:mt-0">
          <img src="~/assets/images/solutions-workflow.svg" class="h-[40px] md:h-[50px]"/>
          <div class="text-[14px] md:text-[24px] font-bold text-[#676767] leading-[40px] md:leading-[50px] ml-[10px] font-family-bold">Workflow</div>
        </div>
        <div class="md:flex">
          <div class="md:w-[55%] text-center md:text-left">
            <div class="mt-[10px] mb-[20px] text-[24px] md:text-[48px] leading-[36px] md:leading-[60px] font-extrabold font-family-extraBold text-[#00044C]">Make your Project from idea to production easily</div>
            <div class="text-[16px] md:text-[24px] leading-[21px] md:leading-[30px] font-light text-[#40425C] font-family-light md:w-[500px]">
            Makes it easy to automate all your web3.0 project workflows. Check, build, and deploy your code right from code repository by Hamster
            </div>
          </div>
        </div>
        <div class="md:mt-[20px] text-center md:text-left w-full absolute md:static bottom-[35px]">
            <button class="btn-css " @click="gotoAline">Get Started</button>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-5">
    <div class="workflow-area-div">
      <div class="md:flex">
        <div class="md:w-2/5 flex items-center md:pr-[40px]">
          <div>
            <div class="area-title !mt-0">Quickly start web3 project</div>
            <img v-if="$device.isMobile" src="~/assets/images/workflow-start.png" class="w-full mt-[40px]" />
            <div class="area-desc">Get Start your Own Contract/FrontEnd quickly with best practices from partners and the community.</div>
          </div>
        </div>
        <div v-if="!$device.isMobile" class="md:w-3/5 md:pl-[30px]">
          <img src="~/assets/images/workflow-start.png" class="w-full" />
        </div>
      </div>
    </div>
    <div class="workflow-area-div">
      <div class="md:flex">
        <div v-if="!$device.isMobile" class="md:w-2/3 md:pr-[40px]">
          <img src="~/assets/images/workflow-build.png" class="w-full" />
        </div>
        <div class="md:w-1/3 flex items-center">
          <div>
            <div class="area-title !mt-0">Automate build web3 project</div>
            <img v-if="$device.isMobile" src="~/assets/images/workflow-build.png" class="w-full mt-[40px]" />
            <div class="area-desc">Set up tasks and combine them to automate all your software development workflows for saving time and cost.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="workflow-area-div">
      <div class="md:flex">
        <div class="md:pr-[80px] md:w-1/3 md:pt-[50px]">
          <div>
            <div class="area-title !mt-0">Secure web3 project</div>
            <img v-if="$device.isMobile" src="~/assets/images/workflow-secure.gif" class="w-full mt-[40px]" />
            <div class="area-desc">Combines multiple state-of-art security scanning engines into Hamster workflow, securing every aspect of your web3 project</div>
          </div>
        </div>
        <div v-if="!$device.isMobile" class="md:w-2/3">
          <img src="~/assets/images/workflow-secure.gif" class="w-full" />
        </div>
      </div>
    </div>
    <div class="workflow-area-div">
      <div class="md:flex">
        <div v-if="!$device.isMobile" class="md:w-2/3 md:pr-[80px]">
          <img src="~/assets/images/workflow-manage.png" class="w-full" />
        </div>
        <div class="md:w-1/3 flex items-center">
          <div>
            <div class="area-title !mt-0">Manage web3 project </div>
            <img v-if="$device.isMobile" src="~/assets/images/workflow-manage.png" class="w-full mt-[40px]" />
            <div class="area-desc">A deployment workflow designed for you to ship contracts on-chain effortlessly</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-[70px] md:mb-[180px] workflow-area-div">
      <div class="font-bold mb-[45px] md:mb-[100px] text-[#5B7ED1] text-[16px] md:text-[24px] leading-[19px] md:leading-[29px] flex justify-center">
        <div class="text-color-css">Trusted by best teams</div>
      </div>
      <div class="scroll-content relative">
        <div class="scroll-fadeout-bg scroll-fadeout-left"></div>
        <div class="scroll-fadeout-bg scroll-fadeout-right"></div>
        <div class="scroll-team1 scroll-img">
          <img class="h-[35px] mx-5" v-for="(item, index) in 8" :key="index" :src="getImageURL(`best-teams-${item}.png`)"/>
        </div>
        <div class="scroll-team2 scroll-img">
          <img class="h-[35px] mx-5" v-for="(item, index) in 8" :key="index" :src="getImageURL(`best-teams-${item}.png`)"/>
        </div>
      </div>
    </div>
  </div>
  <StartBuild></StartBuild>
</template>
<script setup>
import StartBuild from "../index/components/StartBuild.vue";


const { getImageURL } = useAssets()



const alineLink = computed(() => "https://develop.alpha.hamsternet.io/")
const gotoAline = () => {
  window.open(alineLink.value);
}
</script>

<style lang="less" scoped>

.wk-top-bg{
  background: url("~/assets/images/workflow-top-bg.jpg") no-repeat center #FFFFFF;
  background-size: contain;
}
.wk-top-bg-phone{
  background: url("~/assets/images/workflow-top-bg-phone.jpg") no-repeat center #FFFFFF;
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
.scroll-team1{
  animation-name: rollTeam1;
}
.scroll-team2{
  animation-name: rollTeam2;
}
@keyframes rollTeam1{
  0%{left: 0px; top: 0px;}
  100%{left: 1307px; top: 0px;}
}
@keyframes rollTeam2{
  0%{left: -1307px; top: 0px;}
  100%{left: 0px; top: 0px;}
}
</style>
<style>
.workflow-area-div{
  @apply mt-[60px] md:mt-[180px] text-center md:text-left;
}
</style>