<template>
  <div :class="[$device.isMobile ? 'community-top-bg-phone' : 'community-top-bg']">
    <div class="container mx-auto px-5 py-[140px] md:py-[180px]">
      <div class="flex justify-center text-center">
        <div class="md:w-[760px]">
          <div
            class="text-[24px] md:text-[48px] leading-[36px] md:leading-[60px] font-extrabold font-family-extraBold mb-[20px]">
            Make it easier for developers to enter web3.0</div>
          <div
            class="text-[#999999] text-[16px] md:text-[21px] leading-[21px] md:leading-[30px] font-light font-family-light">
            Backed by a wealth of 480,000+ developer resources, Hamster has a deep understanding of the pain points of
            web3.0 development, and actively helps more web2.0 developers enter web3.0</div>
        </div>
      </div>
    </div>
  </div>
  <div class="container px-5 mx-auto">
    <div class="md:flex relative -top-[80px] md:-top-[120px] p-5 md:p-10 box-div">
      <div class="md:w-[70%]">
        <EchartLineBar echartsId="developerPie"></EchartLineBar>
      </div>
      <div class="md:w-[30%] flex justify-center md:justify-end">
        <div>
          <EchartPie echartsId="jobPie" :echartsData="jobData" titleText="Job"></EchartPie>
          <EchartPie echartsId="skillPie" :echartsData="skillData" titleText="Skill"></EchartPie>
          <EchartPie echartsId="genderPie" :echartsData="genderData" titleText="Gender"></EchartPie>
        </div>
      </div>
    </div>
  </div>
  <Contract></Contract>
  <EmailSubscriptionVue></EmailSubscriptionVue>
</template>
<script setup>
import EchartPie from './components/EchartPie.vue';
import EchartLineBar from './components/EchartLineBar.vue';
import Contract from './components/Contract.vue';
import EmailSubscriptionVue from '~~/components/EmailSubscription.vue';
const route = useRoute();
const device = useDevice()
const isMobile = device.value.isMobile

const jobData = ref([
  { value: 88010, name: 'Back-end' },
  { value: 54762, name: 'QA' },
  { value: 40259, name: 'Front-end' },
  { value: 7602, name: 'PM' },
  { value: 7356, name: 'O&M' },
  { value: 4743, name: 'GUI' },
  { value: 4445, name: 'Mobile' },
  { value: 406, name: 'Others' }
])
const skillData = ref([
  { value: 13518, name: 'Python' },
  { value: 19, name: 'C' },
  { value: 107643, name: 'Java' },
  { value: 8142, name: 'C++' },
  { value: 12212, name: 'C#' },
  { value: 956, name: 'Visual Basic' },
  { value: 75746, name: 'JavaScript' },
  { value: 24372, name: 'SQL' },
  { value: 9937, name: 'PHP' },
  { value: 21, name: 'Groovy' },
  { value: 1201297, name: 'Others' }
]);
const genderData = ref([
  { value: 256775, name: 'Male' },
  { value: 79427, name: 'Female' },
  { value: 87686, name: 'Unknown' },
]);


function handleScroll() {
  let scrollH = document.body.scrollTop || document.documentElement.scrollTop; //滚动的高度
  console.log("scrollH:", scrollH);
}

onMounted(() => {
  if (route.query.location == 2) {
    setTimeout(() => {
      if (isMobile) {
        document.documentElement.scrollTop = 1420;
      } else {
        document.documentElement.scrollTop = 1295;
      }
    }, 100);

  }

})
</script>
<style scoped lang="less"> .community-top-bg {
   background: url("~/assets/images/community-top-bg.jpg") no-repeat center #000000;
   background-size: contain;
 }

 .community-top-bg-phone {
   background: url("~/assets/images/community-top-bg-phone.png") no-repeat center #000000;
   background-size: contain;
 }

 .box-div {
   background: #FEFEFE;
   box-shadow: 0px 12px 15px 0px rgba(63, 71, 157, 0.14);
   border-radius: 12px;
 }

 .font-family-Light {
   font-family: Montserrat-Light, Montserrat;
 }
</style>