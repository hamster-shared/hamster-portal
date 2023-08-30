<template>
  <div class="bg-[#000000] relative">
    <div class="community-bg-cost2">
    <img src="~/assets/images/community-bg-cost.png" class="h-full w-full absolute" />
      <div class="container mx-auto px-5 pb-[100px] md:pb-[120px]">
        <div class="pt-[60px] pb-[50px] md:py-[100px] text-center flex justify-center">
          <div class="text-[24px] md:text-[48px] w-[260px] md:w-[700px] font-extrabold font-family-extraBold">Build your team quickly, worry-free and at low cost</div>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="(item,key) in buildTeamList" :key="key" class="card-box-border">
            <div class="bg-[#000000] p-[30px] md:p-[50px] h-full rounded-[20px]">
              <div :class="[key==0?'card-text-css':'card-text-css2']" class="flex text-[21px] md:text-[32px] font-bold">{{ item.title }}</div>
              <div class="mt-[20px] md:mt-[30px] mb-[30px] md:mb-[40px] text-[12px] md:text-[18px] font-light font-family-Light leading-[13px] md:leading-[20px]">{{ item.desc }}</div>
              <div class="community-border-t pt-[20px] md:pt-[40px] text-[12px] md:text-[16px]">
                <div v-for="(subItem,subKey) in item.subList" :key="subKey" class="mb-[20px] md:mb-[30px] flex leading-[15px] md:leading-[20px]">
                  <img src="~/assets/images/ecosystem-sub.png" class="h-[14px] w-[14px] md:h-[20px] md:w-[20px] mr-[10px]"/>
                  <div class="text-[#C5C5C5]" v-html="subItem.content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const buildTeamList = ref([
  { title: 'Flexible contract', desc: 'Hire independent informal contractors and freelancers . We handle payments and human resource management to reduce your workload', subList: [{ content: 'Sign compliant flexible employment agreements' }, { content: 'Support USD/token payments' }, { content: 'Mainland China employees can opt in for social insurance on demand' }, { content: 'Collect <label class="font-bold text-[#FFFFFF]">8-20% service fee</label> monthly' }] },
  { title: 'Full-time contract', desc: 'Quickly hire employees from around the world. We handle the entire recruiting process so you can focus on development of your business.', subList: [{ content: 'Sign employment contracts with hiring parties'}, { content: 'Support USD/token payments'}, { content: 'Junior position service fee: <label class="font-bold text-[#FFFFFF]">$415/person </label>'}, { content: 'Mid-level position service fee: <label class="font-bold text-[#FFFFFF]">$830/person </label>'}, { content: 'Senior position service fee: <label class="font-bold text-[#FFFFFF]">$1245/person </label>'}]}
]);
</script>
<style scoped lang="less">
  .community-bg-cost{
    background: url("~/assets/images/community-bg-cost.png") no-repeat center ;
    background-size: 100% 100%;
  }
  .card-box-border{
    border-radius: 20px;
    border: 2px solid transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 1),rgba(255,255,255,0.03)),linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.09));
    background-clip: padding-box, border-box;
    background-origin: border-box;
  }
  .card-text-css{
    background: linear-gradient(270deg, #5C64FF 0%, #00E5D7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .card-text-css2{
    background: linear-gradient(270deg, #8400DB 0%, #FE0086 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .community-border-t{  
    border-top: 1px solid #3C3655;
  }
  .font-family-Light{
    font-family: Montserrat-Light, Montserrat;
  }
</style>