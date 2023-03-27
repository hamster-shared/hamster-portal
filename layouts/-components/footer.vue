<template>
  <div class="bg-[#000000]">

    <div class="container mx-auto py-20 ">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[200px] mb-[60px]">
        <div>
          <img class="h-[20px] md:h-[32px]" src="~/assets/images/header.png">
          <span class="inline-block mt-4 mb-8 text-lg md:text-lg md:mt-7 md:mb-10 text-[#999999]"><!--md:mr-20-->
            One-Stop infrastructure,development, <br>
            operation and maintenance service <br>
            platform for projects in Web3.0
          </span>
          <div class="md:flex items-center">
            <!-- <img :src="getImageURL('aptos-grant.png')" class="h-[64px] md:h-[67px] mr-8 md:mr-12"/>
            <img class="h-[64px] md:h-[75px]" src="~/assets/images/web3_foundation.png" /> -->
            <div class="flex items-center mb-8 md:mb-0">
              <img :src="getImageURL('aptos-grant.png')" class="w-[45%] mr-[10%] md:mr-[6.3%]"/>
              <img :src="getImageURL('web3_foundation.png')" class="w-[45%] md:mr-[3.3%]" />
            </div>
            <div class="flex items-center">
              <img :src="getImageURL('algorand.png')" class="w-[45%] mr-[10%] md:ml-[3.3%] md:mr-[6.3%]"/>
              <img :src="getImageURL('starknet.png')" class="w-[45%]" />
            </div>
          </div>
        </div>

        <div class="flex md:justify-end md:items-end ">
          <div class="flex flex-col text-base md:mr-16">
            <span class="inline-block mb-5 cursor-pointer md:hover:text-[#27FFB8]" @click="skipNewUrl('about')">About</span>
            <!-- <span class="md:hover:text-[#27FFB8] cursor-pointer">Grant</span> -->
            <span class="inline-block mb-5 md:hover:text-[#27FFB8] cursor-pointer">Careers</span>
            <span class="md:hover:text-[#27FFB8] cursor-pointer">Roadmap</span>
          </div>
          <div class="flex flex-col text-base ml-[40px] md:ml-0">
            <div class="inline-block mb-5 cursor-pointer md:hover:text-[#27FFB8]" @click="skipNewUrl('docs')">
              Docs
              <!-- <img class="w-[18px] inline-block" :src="getImageURL('transmit.svg')" /> -->
            </div>
            <div class="inline-block mb-5 cursor-pointer md:hover:text-[#27FFB8]" @click="skipNewUrl('github')">
              Github
              <!-- <img class="w-[18px] inline-block" :src="getImageURL('transmit.svg')" /> -->
            </div>
            <div class="cursor-pointer md:hover:text-[#27FFB8]" @click="skipNewUrl('news')">
              News
              <!-- <img class="w-[18px] inline-block" :src="getImageURL('transmit.svg')" /> -->
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between pt-[30px] text-[#999999] border-line">
        <div class="flex">
          <div class="inline-block text-base">Hamster Ltd.</div>
          <div class="text-sm md:mx-[40px] md:text-base md:w-[300px]">
            Harbour Plaza, 103 South Church Street Grand Cayman, Cayman Islands
          </div>
          <div>
            <div class="inline-block text-sm md:text-base">+49 17647 082974</div>
            <div class="text-sm md:text-base">Email: hamster@hamsternet.io</div>
          </div>
        </div>
        <div class="flex mt-5">
          <img src="~/assets/images/footer-twitter.png" @click="skipNewUrl('twitter')" class="h-6 cursor-pointer" />
          <img src="~/assets/images/footer-discord.png" @click="skipNewUrl('discord')" class="h-6 mx-[60px] cursor-pointer" />
          <img src="~/assets/images/footer-telegram.png" @click="skipNewUrl('telegram')" class="h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { getImageURL } = useAssets()

const skipNewUrl = (val) => {
  if (val === 'github') {
    window.open('https://github.com/hamster-shared')
  } else if (val === 'about') {
    // window.open('/company')
  } else if (val === 'news') {
    window.open('https://hamsternet.medium.com/')
  }else if (val === 'twitter') {
    window.open('http://twitter.com/Hamsternetio')
  }else if (val === 'discord') {
    window.open('https://discord.gg/qMWUvs7jkV')
  }else if (val === 'telegram') {
    window.open('https://t.me/hamsternetio')
  } else {
    window.open('https://hamsternet.io/docs/')
  }
}

</script>

<style scoped>
  .font-site-links{
    font-family: 'Open Sans' !important;
    font-weight: 700;
  }
  .font-family-style {
    font-family: 'Open Sans' !important;
    font-weight: 400;
  }
  .footer-sub {
    @apply text-[#807D7C] leading-8;
  }
  .border-line{
    border-top: 1px solid #363636;
  }
</style>
