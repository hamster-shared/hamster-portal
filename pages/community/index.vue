<template>
  <div :class="[$device.isMobile ? 'community-top-bg-phone' : 'community-top-bg']">
    <div class="container mx-auto px-5 py-[140px] md:py-[180px]">
      <div class="flex justify-center text-center">
        <div class="md:w-[760px]">
          <div class="text-[24px] md:text-[48px] leading-[36px] md:leading-[60px] font-extrabold font-family-extraBold mb-[20px]">Make it easier for developers to enter web3.0</div>
          <div class="text-[#999999] text-[16px] md:text-[21px] leading-[21px] md:leading-[30px] font-light font-family-light">Backed by a wealth of 480,000+ developer resources, Hamster has a deep understanding of the pain points of web3.0 development, and actively helps more web2.0 developers enter web3.0</div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-5">
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
  <div class="bg-[#000000] relative">
    <div class="community-bg-cost2">
    <img src="~/assets/images/community-bg-cost.png" class="h-full w-full absolute" />
      <div class="container mx-auto px-5 pb-[120px]">
        <div class="py-[100px] text-center flex justify-center">
          <div class="text-[48px] md:w-[700px] font-extrabold font-family-extraBold">Build your team quickly, worry-free and at low cost</div>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <div v-for="(item,key) in buildTeamList" :key="key" class="card-box-border">
            <div class="bg-[#000000] p-[50px] h-full rounded-[20px]">
              <div :class="[key==0?'card-text-css':'card-text-css2']" class="flex text-[32px] font-bold">{{ item.title }}</div>
              <div class="mt-[30px] mb-[40px] text-[18px] font-light font-family-Light leading-[20px]">{{ item.desc }}</div>
              <div class="community-border-t pt-[40px]">
                <div v-for="(subItem,subKey) in item.subList" :key="subKey" class="mb-[30px] flex">
                  <img src="~/assets/images/ecosystem-sub.png" class="h-[20px] w-[20px] mr-[10px]"/>
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
<script setup>
import EchartPie from './components/EchartPie.vue';
import EchartLineBar from './components/EchartLineBar.vue';

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

const buildTeamList = ref([
  { title: 'Flexible contract', desc: 'Hire independent informal contractors and freelancers . We handle payments and human resource management to reduce your workload', subList: [{ content: 'Sign compliant flexible employment agreements' }, { content: 'Support USD/token payments' }, { content: 'Mainland China employees can opt in for social insurance on demand' }, { content: 'Collect <label class="font-bold text-[#FFFFFF]">8-20% service fee</label> monthly' }] },
  { title: 'Full-time contract', desc: 'Quickly hire employees from around the world. We handle the entire recruiting process so you can focus on development of your business.', subList: [{ content: 'Sign employment contracts with hiring parties'}, { content: 'Support USD/token payments'}, { content: 'Junior position service fee: <label class="font-bold text-[#FFFFFF]">$415/person </label>'}, { content: 'Mid-level position service fee: <label class="font-bold text-[#FFFFFF]">$830/person </label>'}, { content: 'Senior position service fee: <label class="font-bold text-[#FFFFFF]">$1245/person </label>'}]}
]);
</script>
<style scoped lang="less"> 

  .community-top-bg{
    background: url("~/assets/images/community-top-bg.jpg") no-repeat center #000000;
    background-size: contain;
  }
  .community-top-bg-phone{
    background: url("~/assets/images/community-top-bg-phone.png") no-repeat center #000000;
    background-size: contain;
  }
  .box-div{
    background: #FEFEFE;
    box-shadow: 0px 12px 15px 0px rgba(63,71,157,0.14);
    border-radius: 12px;
  }
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
  .font-family-Light{
    font-family: Montserrat-Light, Montserrat;
  }
  .community-border-t{  
    border-top: 1px solid #3C3655;
  }
</style>