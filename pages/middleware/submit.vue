<template>
  <div :class="[$device.isMobile ? 'submit-top-bg-phone' : 'submit-top-bg']">
    <div class="container mx-auto px-5 h-screen md:flex md:items-center">
      <div>
        <div class="md:flex px-[5%]">
          <div class="md:w-[45%] flex items-center">
            <div>
              <div class="flex mt-[80px] md:mt-0">
                <img src="~/assets/images/solutions-middleware.svg" class="h-[40px] md:h-[50px]"/>
                <div class="text-[14px] md:text-[16px] font-bold text-[#000000] leading-[40px] md:leading-[50px] ml-[10px] font-family-bold text-color-css">Middleware</div>
              </div>
              <div class="text-center md:text-left">
                <div class="mt-[10px] mb-[20px] text-[24px] md:text-[48px] leading-[36px] md:leading-[60px] font-extrabold font-family-extraBold text-[#FFFFFF]">Join the Hamster Middleware Open Platform</div>
              </div>
            </div>
          </div>
          <div class="md:w-[45%] flex justify-end">
            <div class="rounded-[13px] bg-[#FFFFFF] p-[20px] mt-[80px]">
              <Form :model="formData" ref="formRef" :rules="formRules">
                <FormItem name="name" label="Your Name" required>
                  <Input placeholder="Please enter Your Name" v-model:value="formData.name" />
                </FormItem>
                <FormItem name="email" label="Email Address" required>
                  <Input placeholder="Please enter Email Address" v-model:value="formData.email" />
                </FormItem>
                <FormItem name="account" label="Social Account" required>
                  <InputGroup compact>
                    <Select v-model:value="formData.social" :options="optionsSocial" style="width: 30%"></Select>
                    <Input placeholder="Please enter Social Account" v-model:value="formData.account" style="width: 70%"  />
                  </InputGroup>
                </FormItem>
                <FormItem name="miwaCategory" label="Middleware Category" required>
                  <Select :options="optionsCategory" placeholder="Please enter Middleware Category" v-model:value="formData.miwaCategory"></Select>
                </FormItem>
                <FormItem name="desc" label="Middleware Information">
                  <Textarea placeholder="Such as positioning, goals, functions, etc, controlled within 200 words" v-model:value="formData.desc" :auto-size="{ minRows: 2, maxRows: 5 }"></Textarea>
                </FormItem>
                <button class="btn-css w-full text-white" :class="{'!bg-[#D3D5FF] !border-[#D3D5FF]': !isSubmit }" @click="handleSubmit">Submit</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { Button, Input, Select, Textarea, Form, FormItem, InputGroup, message } from 'ant-design-vue';

  const isSubmit = ref(false);
  const formData = reactive({
    name: '',
    email: '',
    social: 'Twitter',
    account: '',
    miwaCategory: '',
    desc: '',
  })
  const optionsSocial = ref([
    {value: 'Twitter', label: 'Twitter'},
    {value: 'Discord', label: 'Discord'},
    {value: 'Telegram', label: 'Telegram'},
    {value: 'Youtube', label: 'Youtube'},
    {value: 'Others', label: 'Others'},
  ]);
  const optionsCategory = ref([
    {value: '', label: 'Make a selection'},
    {value: 'RPC', label: 'RPC'},
    {value: 'Oracle', label: 'Oracle'},
    {value: 'Security audit', label: 'Security audit'},
    {value: 'Index query', label: 'Index query'},
    {value: 'API', label: 'API'},
    {value: 'Storage', label: 'Storage'},
    {value: 'DEFI', label: 'DEFI'},
    {value: 'DAO', label: 'DAO'},
    {value: 'DID', label: 'DID'},
    {value: 'Others', label: 'Others'},
  ]);
  const formRef = ref();
  const formRules = computed(() => ({
  }));
  const handleSubmit = async() => {
    await formRef.value?.validate();
    
    try {
      message.success('This is successed!')
    } catch(error) {
      console.log('error',error)
      message.error('This is failed!')
    } finally {
      // isLoadingControl.isLoadingAllowButton = false
    }
  }
</script>
<style lang="less" scoped>

.submit-top-bg{
  background: url("~/assets/images/Middleware-submit-bg.png") no-repeat center ;
  background-size: 100% 100%;
}
.submit-top-bg-phone{
  background: url("~/assets/images/Middleware-submit-bg-phone.png") no-repeat center ;
  background-size: 100% 100%;
}
.text-color-css{
  background: linear-gradient(221deg, #00E5D6 0%, #5C64FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
:deep(.ant-input),:deep(.ant-select:not(.ant-select-customize-input) .ant-select-selector){
  border-radius: 8px;
  height: 37px;
}
:deep(.ant-select-single .ant-select-selector .ant-select-selection-item), :deep(.ant-select-single .ant-select-selector .ant-select-selection-placeholder) {
  line-height: 35px;
}
:deep(.ant-input-group.ant-input-group-compact > .ant-select:first-child > .ant-select-selector){
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
:deep(.ant-input-group.ant-input-group-compact > *:last-child){
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
:deep(.ant-form-item){
  margin-bottom: 16px;
}
</style>