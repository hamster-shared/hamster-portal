<template>
  <div class="wk-top-bg">
    <div class="container mx-auto px-5 pt-[200px] pb-[170px]">
      <img src="~/assets/images/wf-label.png" class="h-[40px]"/>
      <div class="text-center">
        <div class="mt-[10px] mb-[20px] text-[65px] leading-[74px] font-extrabold text-[#00044C]">Make your Project from idea to production easily</div>
        <div class="text-[24px] leading-[35px] font-medium text-[#42445E] flex justify-center">
          <div class="w-[720px]">Makes it easy to automate all your web3.0 project workflows. Check, build, and deploy your code right from code repository by Hamster </div>
        </div>
        <button class="btn-css mt-[50px]" @click="gotoAline">Get Started</button>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-5">
    <div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="area-title">Quickly start web3 project</div>
          <div class="area-desc">Get Start your Own Contract/FrontEnd quickly with best practices from partners and the community.</div>
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
  background-size: cover;
}
</style>