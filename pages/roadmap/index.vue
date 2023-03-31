<template>
  <div class=" bg-[#000000]" :class="{'map-mobile-top-bg' : $device.isMobile}">
    <div :class="{'map-top-bg' : !$device.isMobile}" class="container mx-auto px-5  pt-[80px] md:pt-[200px] pb-[70px] md:pb-[125px]">
      
      <Transition duration="9000" name="map">
      <div class="relative" v-if="show">
        <img v-if="$device.isMobile" src="~/assets/images/roadmap-mobile-line.png" class="w-[70%] absolute mobile-line" />
        <img v-else src="~/assets/images/roadmap-line.png" class="w-full absolute top-[140px] roadmap-line" />
        
          <div v-if="$device.isMobile">
            <div class="flex flex-wrap">
              <div class="pt-[80px]">
                <div class="map-line-year up-title">{{ mapList[0].title }}</div>
                <div class="map-line-text w-[45%] up-desc">{{ mapList[0].desc }}</div>
              </div>
              <div class="map-mobile-right-div">
                <div class="map-line-year w-full up-title1">{{ mapList[1].title }}</div>
                <div class="map-line-text w-[45%] up-desc1">{{ mapList[1].desc }}</div>
              </div>
              <div>
                <div class="map-line-year up-title2">{{ mapList[2].title }}</div>
                <div class="map-line-text w-[45%] up-desc2">{{ mapList[2].desc }}</div>
              </div>
              <div class="map-mobile-right-div">
                <div class="map-line-year w-full up-title3">{{ mapList[3].title }}</div>
                <div class="map-line-text w-[45%] up-desc3">{{ mapList[3].desc }}</div>
              </div>
              <div class="pt-[5px]">
                <div class="map-line-year up-title4">{{ mapList[4].title }}</div>
                <div class="map-line-text w-[45%] up-desc4">{{ mapList[4].desc }}</div>
              </div>
              <div class="map-mobile-right-div pt-[15px]">
                <div class="map-line-year w-full up-title5">{{ mapList[5].title }}</div>
                <div class="map-line-text w-[45%] up-desc5">{{ mapList[5].desc }}</div>
              </div>
              <div class="pt-[15px]">
                <div class="map-line-year up-title6">{{ mapList[6].title }}</div>
                <div class="map-line-text w-[45%] up-desc6">{{ mapList[6].desc }}</div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="flex items-end">
              <div class="ml-[100px]">
                <div class="map-line-text w-[220px] up-desc">{{ mapList[0].desc }}</div>
                <div class="map-line-year up-title">{{ mapList[0].title }}</div>
              </div>
              <div class="ml-[90px]">
                <div class="map-line-text w-[240px] up-desc2">{{ mapList[2].desc }}</div>
                <div class="map-line-year up-title2">{{ mapList[2].title }}</div>
              </div>
              <div class="ml-[80px]">
                <div class="map-line-text w-[240px] up-desc4">{{ mapList[4].desc }}</div>
                <div class="map-line-year up-title4">{{ mapList[4].title }}</div>
              </div>
            </div>
            <div class="flex mt-[140px]">
              <div class="ml-[210px]">
                <div class="map-line-year down-title1">{{ mapList[1].title }}</div>
                <div class="map-line-text w-[235px] down-desc1">{{ mapList[1].desc }}</div>
              </div>
              <div class="ml-[110px]">
                <div class="map-line-year down-title3">{{ mapList[3].title }}</div>
                <div class="map-line-text w-[220px] down-desc3">{{ mapList[3].desc }}</div>
              </div>
              <div class="ml-[100px]">
                <div class="map-line-year down-title5">{{ mapList[5].title }}</div>
                <div class="map-line-text w-[240px] down-desc5">{{ mapList[5].desc }}</div>
              </div>
            </div>
            <div class="flex justify-end">
                <div class="mr-[220px]">
                  <div class="map-line-text up-desc6">{{ mapList[6].desc }}</div>
                  <div class="map-line-year up-title6">{{ mapList[6].title }}</div>
                </div>
            </div>
          </div>
          <div class="text-[21px] text-[#6E6E6E] leading-[35px] font-bold flex justify-center md:pl-[180px] pt-[65px] md:pt-[52px] more-text">More…</div>
        </div>
      </Transition>
    </div>
  </div>

  <StartBuild></StartBuild>
</template>
<script setup>
import StartBuild from "../index/components/StartBuild.vue";

const mapList = reactive([
  {title: '2021', desc: 'Start Hamster Project Publish White Paper Complete Shared Computing Power Model'},
  {title: '2022 Q1 - Q3', desc: 'Complete Hamster Client of shared Computing Power Get Web3 Foundation Grant Participate in Web3.0 Bootcamp'},
  {title: '2022 Q4', desc: 'Release MVP Version of Decentralized Computing Power Release Alpha Version of Hamster DevOps Platform'},
  {title: '2023 Q2', desc: 'Release Beta Version of Hamster DevOps Platform'},
  {title: '2023 Q3', desc: 'Finalize Business Model Support DAO Governance Launch Testnet'},
  {title: '2023 Q4', desc: 'Release Commercial Version of Hamster DevOps Platform'},
  {title: '2024 Q1', desc: 'Launch Mainnet '},
]);

const show = ref(false);
onMounted(() => {
  show.value = true;
})
</script>
<style scoped lang="less">
.map-enter-from .roadmap-line{
  transform: translateX(-35px);
  opacity: 0;
}
.map-enter-from .mobile-line{
  transform: translateY(-35px);
  opacity: 0;
}
.map-enter-from [class*='up-title'],
.map-enter-from [class*='up-desc'],
.map-enter-from .more-text
{
  transform: translateY(35px);
  opacity: 0;
}
.map-enter-from [class*='down-title'],
.map-enter-from [class*='down-desc']
{
  transform: translateY(-35px);
  opacity: 0;
}
.map-enter-active [class*='title'],
.map-enter-active [class*='desc'],
.map-enter-active .roadmap-line,.map-enter-active .mobile-line,
.map-enter-active .more-text
{
  transition: all 0.8s ease-in-out;
}
.map-enter-active .up-desc,.map-enter-active .down-desc{
  transition-delay: 0.5s;
}
.map-enter-active [class*='title1']{
  transition-delay: 1s;
}
.map-enter-active [class*='desc1']{
  transition-delay: 1.5s;
}
.map-enter-active [class*='title2']{
  transition-delay: 2s;
}
.map-enter-active [class*='desc2']{
  transition-delay: 2.5s;
}
.map-enter-active [class*='title3']{
  transition-delay: 3s;
}
.map-enter-active [class*='desc3']{
  transition-delay: 3.5s;
}
.map-enter-active [class*='title4']{
  transition-delay: 4s;
}
.map-enter-active [class*='desc4']{
  transition-delay: 4.5s;
}
.map-enter-active [class*='title5']{
  transition-delay: 5s;
}
.map-enter-active [class*='desc5']{
  transition-delay: 5.5s;
}
.map-enter-active [class*='title6']{
  transition-delay: 6s;
}
.map-enter-active [class*='desc6']{
  transition-delay: 6.5s;
}
.map-enter-active [class*='title7']{
  transition-delay: 7s;
}
.map-enter-active [class*='desc7']{
  transition-delay: 7.5s;
}
.map-enter-active .more-text{
  transition-delay: 7s;
}




.map-top-bg{
  background: url("~/assets/images/roadmap-top-bg.png") no-repeat #000000;
  background-size: 70%;
  background-position: 43% 30%;
}
.map-mobile-top-bg{
  background: url("~/assets/images/roadmap-top-bg.png") no-repeat #000000;
  background-size: contain;
  background-position: 0 20%;
}
.map-line-bg{
  background: url("~/assets/images/roadmap-line.png") no-repeat center;
  background-size: 100% 100%;
}
</style>
<style>
.map-line-text{
  @apply font-light text-[14px] md:text-[18px] leading-[21px] md:leading-[24px] text-[#FFFFFF];
  font-family: Montserrat-Light, Montserrat;
}
.map-line-year{
  @apply font-bold text-[24px] leading-[35px] text-[#FFFFFF] md:my-[6px];
  font-family: Montserrat-Bold, Montserrat;
}
.map-mobile-right-div{
  @apply flex flex-wrap justify-end text-right;
}
</style>