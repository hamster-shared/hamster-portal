<template>
  <div class=" bg-[#000000]" :class="{'map-mobile-top-bg' : $device.isMobile}">
    <div :class="{'map-top-bg' : !$device.isMobile}" class="container mx-auto px-5  pt-[80px] md:pt-[200px] pb-[70px] md:pb-[125px]">
      <div class="relative">
        <img v-if="$device.isMobile" src="~/assets/images/roadmap-mobile-line.png" class="w-[70%] absolute" />
        <img v-else src="~/assets/images/roadmap-line.png" class="w-full absolute top-[140px]" />
        <div v-if="$device.isMobile">
          <div class="flex flex-wrap">
            <div class="pt-[80px]">
              <div class="map-line-year">{{ mapList[0].title }}</div>
              <div class="map-line-text w-[45%]">{{ mapList[0].desc }}</div>
            </div>
            <div class="map-mobile-right-div">
              <div class="map-line-year w-full">{{ mapList[1].title }}</div>
              <div class="map-line-text w-[45%]">{{ mapList[1].desc }}</div>
            </div>
            <div>
              <div class="map-line-year">{{ mapList[2].title }}</div>
              <div class="map-line-text w-[45%]">{{ mapList[2].desc }}</div>
            </div>
            <div class="map-mobile-right-div">
              <div class="map-line-year w-full">{{ mapList[3].title }}</div>
              <div class="map-line-text w-[45%]">{{ mapList[3].desc }}</div>
            </div>
            <div class="pt-[5px]">
              <div class="map-line-year">{{ mapList[4].title }}</div>
              <div class="map-line-text w-[45%]">{{ mapList[4].desc }}</div>
            </div>
            <div class="map-mobile-right-div pt-[15px]">
              <div class="map-line-year w-full">{{ mapList[5].title }}</div>
              <div class="map-line-text w-[45%]">{{ mapList[5].desc }}</div>
            </div>
            <div class="pt-[15px]">
              <div class="map-line-year">{{ mapList[6].title }}</div>
              <div class="map-line-text w-[45%]">{{ mapList[6].desc }}</div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="flex items-end">
            <div class="ml-[100px]">
              <div class="map-line-text w-[220px]">{{ mapList[0].desc }}</div>
              <div class="map-line-year">{{ mapList[0].title }}</div>
            </div>
            <div class="ml-[90px]">
              <div class="map-line-text w-[240px]">{{ mapList[2].desc }}</div>
              <div class="map-line-year">{{ mapList[2].title }}</div>
            </div>
            <div class="ml-[80px]">
              <div class="map-line-text w-[240px]">{{ mapList[4].desc }}</div>
              <div class="map-line-year">{{ mapList[4].title }}</div>
            </div>
          </div>
          <div class="md:flex mt-[140px]">
            <div class="ml-[210px]">
              <div class="map-line-year">{{ mapList[1].title }}</div>
              <div class="map-line-text w-[235px]">{{ mapList[1].desc }}</div>
            </div>
            <div class="ml-[110px]">
              <div class="map-line-year">{{ mapList[3].title }}</div>
              <div class="map-line-text w-[220px]">{{ mapList[3].desc }}</div>
            </div>
            <div class="ml-[100px]">
              <div class="map-line-year">{{ mapList[5].title }}</div>
              <div class="map-line-text w-[240px]">{{ mapList[5].desc }}</div>
            </div>
          </div>
          <div class="flex justify-end">
              <div class="mr-[220px]">
                <div class="map-line-text">{{ mapList[6].desc }}</div>
                <div class="map-line-year">{{ mapList[6].title }}</div>
              </div>
          </div>
        </div>
        <div class="text-[21px] text-[#6E6E6E] leading-[35px] font-bold flex justify-center md:pl-[180px] pt-[65px] md:pt-[52px]">More…</div>
      </div>
    </div>
  </div>

  <StartBuild></StartBuild>
</template>
<script setup>
import StartBuild from "../company/StartBuild.vue";

const mapList = reactive([
  {title: '2021', desc: 'Start Hamster Project Publish White Paper Complete Shared Computing Power Model'},
  {title: '2022 Q1 - Q3', desc: 'Complete Hamster Client of shared Computing Power Get Web3 Foundation Grant Participate in Web3.0 Bootcamp'},
  {title: '2022 Q4', desc: 'Release MVP Version of Decentralized Computing Power Release Alpha Version of Hamster DevOps Platform'},
  {title: '2023 Q2', desc: 'Release Beta Version of Hamster DevOps Platform'},
  {title: '2023 Q3', desc: 'Finalize Business Model Support DAO Governance Launch Testnet'},
  {title: '2023 Q4', desc: 'Release Commercial Version of Hamster DevOps Platform'},
  {title: '2024 Q1', desc: 'Launch Mainnet '},
]);
</script>
<style scoped lang="less">
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