<template>
  <div class="bg-[#010314]">
    <div :class="[$device.isMobile ? 'hamgel-top-bg-phone' : 'hamgel-top-pic']">
      <div class="container mx-auto px-5" :class="{'hamgel-top-bg' : !$device.isMobile }">
        <div class="pt-[100px] pb-[300px] md:pb-[450px] md:pt-[180px]">
          <div class="flex justify-center text-center">
            <div class="title-text font-extrabold md:font-bold w-[357px] md:w-[977px] text-[24px] md:text-[60px] leading-[29px] md:leading-[73px]">Help web3 projects raise funds and encourage more people to participate in its development.</div>
          </div>
          <div class="mt-[20px] md:mt-[30px] flex justify-center text-center">
            <div class="text-[16px] md:text-[18px] w-[318px] md:w-[690px]">Hamgel is a web3 project support platform initiated by Hamster together with various ecosystems.Through funding, donations, bounty tasks, project roadshows and other means, Hamgel gathers project parties, developers, users, communities and investors to create the best development environment for web3 projects.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-5"> 
      <div class="text-center text-[25px] md:text-[40px] font-bold">What is Hamgel Grants?</div>
      <div class="mt-[30px] md:mt-[40px] flex justify-center text-center pb-[95px]">
        <div class="text-[14px] md:text-[18px] md:w-[640px]">Hamgel Grants refers to the funding pool of Hamster Foundation to provide grants. The grant program has at least two rounds per year to help worthy web3 projects that match the grant purposes.</div>
      </div>
      <div class="md:flex mb-[40px] md:pb-[100px]">
        <img v-if="$device.isMobile" class="w-full mb-[20px]" src="~/assets/images/hamgel-moon-phone.png">
        <div class="md:w-2/5 flex items-center">
          <div>
            <div class="card-title">Send your favorite project to the moon</div>
            <div class="card-desc mt-[10px] md:mt-[20px]">Every project you participate in will receive an extra portion of funding, and your personal donations have an amplified impact through the use of Quadratic Funding (QF) allocation mechanism.</div>
            <button disabled="true" class="mt-[30px] md:mt-[40px] start-today !text-[14px] !font-normal">Support <label class="font-light">(Soon)</label></button>
          </div>
        </div>
        <div v-if="!$device.isMobile" class="w-3/5 pl-[60px]">
          <img class="w-full" src="~/assets/images/hamgel-moon.png">
        </div>
      </div>
      <div>
        <div class="pb-[40px] md:pb-[50px]">
          <div class="card-title mb-[40px] md:mb-[50px]">How it works?</div>
          <div class="md:grid md:grid-cols-3 gap-36">
            <div class="mb-[20px]">
              <div class="flex items-center">
                <img class="h-[39px] mr-[20px]" src="~/assets/images/hamgel-work-1.png">
                <div class="text-[16px] md:text-[18px]">1. Build a pool of funds</div>
              </div>
              <div class="card-desc mt-[10px] md:mt-0">Hamster Foundation and other donors will send funds to the matching pool smart contract.</div>
            </div>
            <div class="mb-[20px]">
              <div class="flex items-center">
                <img class="h-[39px] mr-[20px]" src="~/assets/images/hamgel-work-2.png">
                <div class="text-[16px] md:text-[18px]">2. Make a donation</div>
              </div>
              <div class="card-desc mt-[10px] md:mt-0">Users make donations to projects they like.</div>
            </div>
            <div class="mb-[20px]">
              <div class="flex items-center">
                <img class="h-[39px] mr-[20px]" src="~/assets/images/hamgel-work-3.png">
                <div class="text-[16px] md:text-[18px]">3. Allocate funds</div>
              </div>
              <div class="card-desc mt-[10px] md:mt-0">Once the round ends, the smart contract will distribute funds from the matching pool to projects weighted by the amount of their contributions.</div>
            </div>
          </div>
        </div>
        <div class="hamgel-join-bg p-[20px] md:p-[50px] md:text-left text-center">
          <div class="join-title font-extrabold md:font-bold md:w-[629px] text-[21px] md:text-[36px] leading-[25px] md:leading-[44px]">Join the next round of funding list</div>
          <div class="card-desc mt-[10px]">If you are working on a meaningful web3 project that just happens to lack funding, apply to join the next round of funding list as soon as possible.</div>
          <button disabled="true" class="mt-[20px] start-today !text-[14px] !font-normal">Support <label class="font-light">(Soon)</label></button>
        </div>
        <div class="text-center text-[25px] md:text-[40px] font-extrabold md:font-bold mt-[100px] md:mt-[150px]">What is Hamgel Bounty?</div>
        <div class="mt-[30px] md:mt-[40px] flex justify-center text-center">
          <div class="text-[14px] md:text-[18px] w-[720px]">Hamgel Bounty refers to the bounty program on Hamgel platform. Through Hamgel Bounty, project parties can get support more easily. On Hamgel Bounty, you only need to pay a certain amount of ERC20 tokens, then you can publish tasks such as code writing, event planning, content editing and research topics. Users who complete the tasks will receive the bounty as a reward.</div>
        </div>
        <img v-if="$device.isMobile" class="w-full -mt-[60px]" src="~/assets/images/hamgel-bounty-phone.png">
        <img v-else class="w-full -mt-[70px]" src="~/assets/images/hamgel-bounty.png">
        <div class="text-center text-[25px] md:text-[40px] font-extrabold md:font-bold md:mt-[120px] my-[30px] md:mb-[80px]">Project monitoring</div>
        <div :class="{'hamgel-monit-bg' : !$device.isMobile}">
          <div class="text-[14px] md:text-[18px] font-medium md:font-normal md:w-[370px] md:pt-[258px] md:pb-[202px] md:pl-[57px]">Hamgel will monitor projects in real time to reflect the actual situation of the projects as much as possible, in order to find the most outstanding and most in need of funding projects.</div>
        </div>
        <img v-if="$device.isMobile" class="w-full mt-[40px] pb-[60px]" src="~/assets/images/hamgel-monit-phone.png">
        <div v-if="!$device.isMobile">
          <div class="flex justify-center mt-[40px]">
            <div class="text-css-color">No project yet?</div>
          </div>
          <div class="text-center pb-[120px]">
            <button class="btn-css mt-[20px] md:mt-[40px]" @click="gotoAline">Start Building</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

const alineLink = ref('')
const gotoAline = () => {
  window.open(alineLink.value);
}

onMounted(()=>{
  if (window.location.href.indexOf('hamsternet.io') !== -1) {
    alineLink.value = "https://develop.alpha.hamsternet.io";
  } else {
    alineLink.value = "https://develop.hamster.newtouch.com";
  }
})
</script>
<style scoped lang="less">

.hamgel-top-pic{
  background: url("~/assets/images/Hamgel-Banner-bg.png") no-repeat center #010314;
  background-size: 100% 100%;
}
.hamgel-top-bg{
  background: url("~/assets/images/Hamgel-Banner-logo.png") no-repeat center 88%;
  background-size: 80% auto;
  background-position-x: 22%;
}
.hamgel-top-bg-phone{
  background: url("~/assets/images/Hamgel-Banner-logo-phone.png") no-repeat bottom #010314;
  background-size: contain;
}
.hamgel-join-bg{
  background: linear-gradient(180deg, #010314 0%, #030528 100%);
  border-radius: 8px;
  border: 1px solid transparent;
  background-image: linear-gradient(180deg, #010314 0%, #030528 100%),linear-gradient(90deg, rgba(92, 100, 255, 1), rgba(64, 236, 225, 1)) ;
  background-clip: padding-box, border-box;
  background-origin: border-box;
}
.hamgel-monit-bg{
  background: url("~/assets/images/hamgel-monit.png") no-repeat center #010314;
  background-size: 100% 100%;
}
.title-text{
  font-family: Montserrat-Bold, Montserrat;
  color: #FFFFFF;
  background: linear-gradient(137deg, #60638B 0%, #F9F9F9 18%, #FFFFFF 56%, #60638B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.card-title{
  font-family: Montserrat-Bold, Montserrat;
}
.card-desc{
  font-family: Montserrat-Light, Montserrat;
  font-weight: 300;
}
.join-title{
  font-family: Montserrat-Bold, Montserrat;
  color: #FFFFFF;
  background: linear-gradient(139deg, #60638B 0%, #F9F9F9 18%, #FFFFFF 55%, #60638B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
<style scoped>
.card-title{
  @apply text-[18px] md:text-[32px] font-extrabold md:font-bold text-[#FFFFFF]
}
.card-desc{
  @apply text-[14px] md:text-[18px]
}
</style>