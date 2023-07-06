<template>
  <div class="bg-[#000000]">
    <div class="container mx-auto px-5">
      <div class="pt-[140px] md:pb-[450px] md:pt-[180px]" :class="[$device.isMobile ? 'hamgel-top-bg-phone' : 'hamgel-top-bg']">
        <div class="flex justify-center text-center">
          <div class="title-text">Help web3 projects raise funds and encourage more people to participate in its development.</div>
        </div>
        <div class="mt-[30px] flex justify-center text-center">
          <div class="text-[18px] w-[690px]">Hamgel is a web3 project support platform initiated by Hamster together with various ecosystems.Through funding, donations, bounty tasks, project roadshows and other means, Hamgel gathers project parties, developers, users, communities and investors to create the best development environment for web3 projects.</div>
        </div>
      </div>
      <div class="text-center text-[40px] font-bold">What is Hamgel Grants?</div>
      <div class="mt-[40px] flex justify-center text-center pb-[95px]">
        <div class="text-[18px] w-[640px]">Hamgel Grants refers to the funding pool of Hamster Foundation to provide grants. The grant program has at least two rounds per year to help worthy web3 projects that match the grant purposes.</div>
      </div>
      <div class="flex pb-[100px]">
        <div class="w-2/5 flex items-center">
          <div>
            <div class="card-title">Send your favorite project to the moon</div>
            <div class="card-desc mt-[20px]">very project you participate in will receive an extra portion of funding, and your personal donations have an amplified impact through the use of Quadratic Funding (QF) allocation mechanism.</div>
            <button class="mt-[40px] start-today !text-[14px] !font-normal">Support <label class="font-light">(Soon)</label></button>
          </div>
        </div>
        <div class="w-3/5 pl-[60px]">
          <img class="w-full" src="~/assets/images/Hamgel-pic.png">
        </div>
      </div>
      <div v-if="false">
        <div class="pb-[50px]">
          <div class="card-title mb-[50px]">How it works?</div>
          <div class="grid grid-cols-3 gap-36">
            <div>
              <div class="flex items-center">
                <img class="h-[39px] mr-[20px]" src="~/assets/images/hamgel-work-1.png">
                <div class="text-[18px]">1. Build a pool of funds</div>
              </div>
              <div class="card-desc">Hamster Foundation and other donors will send funds to the matching pool smart contract.</div>
            </div>
            <div>
              <div class="flex items-center">
                <img class="h-[39px] mr-[20px]" src="~/assets/images/hamgel-work-2.png">
                <div class="text-[18px]">2. Make a donation</div>
              </div>
              <div class="card-desc">Users make donations to projects they like.</div>
            </div>
            <div>
              <div class="flex items-center">
                <img class="h-[39px] mr-[20px]" src="~/assets/images/hamgel-work-3.png">
                <div class="text-[18px]">3. Allocate funds</div>
              </div>
              <div class="card-desc">Once the round ends, the smart contract will distribute funds from the matching pool to projects weighted by the amount of their contributions.</div>
            </div>
          </div>
        </div>
        <div class="hamgel-join-bg p-[50px]">
          <div class="join-title">Join the next round of funding list</div>
          <div class="card-desc mt-[10px]">If you are working on a meaningful web3 project that just happens to lack funding, apply to join the next round of funding list as soon as possible.</div>
          <button class="mt-[20px] start-today !text-[14px] !font-normal">Support <label class="font-light">(Soon)</label></button>
        </div>
        <div class="text-center text-[40px] font-bold mt-[150px]">What is Hamgel Bounty?</div>
        <div class="mt-[40px] flex justify-center text-center pb-[80px]">
          <div class="text-[18px] w-[720px]">Hamgel Bounty refers to the bounty program on Hamgel platform. Through Hamgel Bounty, project parties can get support more easily. On Hamgel Bounty, you only need to pay a certain amount of ERC20 tokens, then you can publish tasks such as code writing, event planning, content editing and research topics. Users who complete the tasks will receive the bounty as a reward.</div>
        </div>
        <img class="w-full" src="~/assets/images/hamgel-pic.png">
        <div class="text-center text-[40px] font-bold mt-[120px]">Project monitoring</div>
        <div class="mt-[40px] flex justify-center text-center pb-[80px]">
          <div class="text-[18px] w-[620px]">Hamgel will monitor projects in real time to reflect the actual situation of the projects as much as possible, in order to find the most outstanding and most in need of funding projects.</div>
        </div>
        <img class="w-full" src="~/assets/images/hamgel-pic.png">
        <div class="flex justify-center mt-[40px]">
          <div class="text-css-color">No project yet?</div>
        </div>
        <div class="text-center pb-[120px]">
          <button class="btn-css mt-[20px] md:mt-[40px]" @click="gotoAline">Start Building</button>
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

.hamgel-top-bg{
  background: url("~/assets/images/Hamgel-Banner-logo.png") no-repeat center #000000;
  background-size: contain;
}
.hamgel-top-bg-phone{
  background: url("~/assets/images/Hamgel-Banner-logo.png") no-repeat center #000000;
  background-size: contain;
}
.hamgel-join-bg{
  background: url("~/assets/images/Hamgel-pic.png") no-repeat center #000000;
  background-size: 100% 80%;
}
.title-text{
  width: 977px;
  height: 219px;
  font-size: 60px;
  font-family: Montserrat-Bold, Montserrat;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 73px;
  background: linear-gradient(137deg, #60638B 0%, #F9F9F9 18%, #FFFFFF 56%, #60638B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.card-title{
  font-size: 32px;
  font-family: Montserrat-Bold, Montserrat;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 39px;
}
.card-desc{
  font-size: 18px;
  font-family: Montserrat-Light, Montserrat;
  font-weight: 300;
  line-height: 30px;
}
.join-title{
  width: 629px;
  height: 44px;
  font-size: 36px;
  font-family: Montserrat-Bold, Montserrat;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 44px;
  background: linear-gradient(139deg, #60638B 0%, #F9F9F9 18%, #FFFFFF 55%, #60638B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>