<template>
  <div v-if="false" :class="[$device.isMobile ? 'email-top-bg-phone' : 'email-top-bg']">
    <div class="container mx-auto px-5 md:h-screen md:flex md:items-center">
      <div class="pt-[130px] md:pt-0">
        <div class="md:flex md:px-[5%]">
          <div class="md:w-[45%] flex items-center">
            <div>
              <div class="text-center md:text-left">
                <div class="mt-[10px] mb-[20px] text-[24px] md:text-[48px] leading-[36px] md:leading-[60px] font-extrabold font-family-extraBold text-[#FFFFFF]">Hamster empowers web3.0 Explorer to build their dreams</div>
              </div>
            </div>
          </div>
          <div class="md:w-[45%] flex justify-end">
            <div class="mt-[50px] mb-[60px] md:mb-0 md:mt-[80px]">
              <div class="flex justify-center">
                <img src="~/assets/images/email-icon.png" class="w-[40px] h-[40px] mr-[10px]"/>
                <div class="text-color-css text-[18px] md:text-[24px] font-bold mb-[25px]">Talk to us</div>
              </div>
              <div class="rounded-[13px] bg-[#FFFFFF] px-[30px] md:px-[40px] py-[10px]  text-[#151210] text-[14px] font-family-regular">
                <div class="form-label"><span class="text-[#FF4A4A] mr-2">*</span>Your Name</div>
                <input @change="checkFormData('name')" type="text" name="name" v-model="formData.name" placeholder="Please enter Your Name" autocomplete="off" />
                <div class="form-label"><span class="text-[#FF4A4A] mr-2">*</span>Email Address</div>
                <input :class="{'input-error':emailErr}" @change="checkFormData('email')" type="text" name="email" v-model="formData.email" placeholder="Please enter Email Address" autocomplete="off" />
                <div v-if="emailErr" class="input-error-label">Email formal error !</div>
                <div class="form-label"><span class="text-[#FF4A4A] mr-2">*</span>Social Account</div>
                <div class="flex">
                  <div class="relative !w-[40%]">
                  <div class="select-div !rounded-r-none" :class="{'select-active' : showOptions.socialPlatform}" @click="showOptions.socialPlatform = !showOptions.socialPlatform">{{ optionLabel.socialPlatform }}
                    <img src="~/assets/images/select-down.svg" class="w-[15px] up-tran"/>
                  </div>
                  <div class="option-div" v-if="showOptions.socialPlatform" @touchstart="optionEnter" @touchend="optionLeave" @mouseleave="optionLeave"  @mouseenter="optionEnter">
                    <div @click="setOptionVal(item, 'socialPlatform')" v-for="(item,index) in optionsSocial" :key="index" :value="item.value" :class="{'option-active':item.value==formData.socialPlatform}">{{ item.label }}</div>
                  </div>
                </div>
                <input @change="checkFormData('socialAccount')" class="!w-[60%] !rounded-l-none" type="text" name="socialAccount" v-model="formData.socialAccount" placeholder="Your Account..." autocomplete="off" />
                </div>
                <div class="form-label">Topic</div>
                <textarea name="middlewareInformation" maxlength="200" v-model="formData.middlewareInformation" rows="2" placeholder=""></textarea>
                
                <button class="btn-css my-[10px] w-full text-white" :disabled="isDisabled" @click="handleSubmit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-error md:w-auto w-[90%] md:top-[100px] top-[70px]" v-if="isShowError">
    <div class="flex items-center py-[15px] px-[20px]">
      <div>“You have submitted middleware information before, please do not submit it repeatedly.”</div>
      <div class="ml-[20px] cursor-pointer" @click="isShowError = false">X</div>
    </div>
  </div>
  <div class="modal-bg" v-if="isShowModal">
    <div class="modal-div py-[30px] md:px-[46px] px-[30px] md:w-[500px] w-[80%]">
      <div class="flex justify-center">
        <img src="~/assets/images/submit-suc.svg" class="h-[82px] w-[82px]"/>
      </div>
      <div class="my-[15px] font-bold">Friendly reminder</div>
      <div class="text-[14px]">Thank you for submitting the information. Our team will contact you by email within three business days. Please pay attention to checking your email.</div>
      <button class="btn-css mt-[30px] text-white" @click="isShowModal = false">Got it</button>
    </div>
  </div>
</template>
<script setup lang="ts">

  const device = useDevice()
  const isDisabled = ref(true);
  const emailErr = ref(false);
  const isShowModal = ref(false);
  const isShowError = ref(false);
  const isOptionMouse = ref(false);
  const showOptions = reactive({
    'socialPlatform': false,
  });
  const optionLabel = reactive({
    'socialPlatform': "Twitter",
  });
  const formData = reactive({
    name: '',
    email: '',
    socialPlatform: 'Twitter',
    socialAccount: '',
    middlewareInformation: '',
  })
  const optionsSocial = ref([
    {value: 'Twitter', label: 'Twitter'},
    {value: 'Discord', label: 'Discord'},
    {value: 'Telegram', label: 'Telegram'},
    {value: 'Youtube', label: 'Youtube'},
    {value: 'Others', label: 'Others'},
  ]);
  const setOptionVal = (obj: any, column: string) => {
    optionLabel[column] = obj.label;
    formData[column] = obj.value;
    showOptions[column] = false;
    isOptionMouse.value = false;
    checkFormData(column);
  }
  const checkEmpty = (inputVal: string) => {
    if (inputVal != '' && inputVal != null) {
      return true;
    }
    return false;
  }
  const checkFormData = (column: string) => {
    if (column === 'email' && checkEmpty(formData.email)) {
      var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
      if (!reg.test(formData.email)){
        //邮箱格式错误
        emailErr.value = true;
      } else {
        emailErr.value = false;
      }
    }
    if (checkEmpty(formData.name) && checkEmpty(formData.email) && checkEmpty(formData.socialAccount)) {
      isDisabled.value = false;
    } else {
      isDisabled.value = true;
    }
  }
const handleSubmit = async () => {
  const url = '/JoinMiddleware';
  await $fetch(url, {
    method: "POST",
    body: JSON.stringify(formData)
  }).then((res) => {
    console.log('res:', res)
    isShowModal.value = true;
  }).catch((err) => {
    console.log(err)
    isShowError.value = true;
  })
}
  const optionLeave = () => {
    isOptionMouse.value = false;
  }
  const optionEnter = () => {
    isOptionMouse.value = true;
  }
  const handleMouseDown = () => {
    if (isOptionMouse.value === false) {
      Object.keys(showOptions).forEach(key => {
        showOptions[key] = false;
      });
    }
  } 
  onMounted(() => {
    if (device.value.isMobile) {
      window.addEventListener("touchstart", handleMouseDown)
    } else {
      window.addEventListener("mousedown", handleMouseDown)
    }
  })
  onUnmounted(() => {
    if (device.value.isMobile) {
      window.removeEventListener("touchstart", handleMouseDown)
    } else {
      window.removeEventListener("mousedown", handleMouseDown)
    }
  })
</script>
<style lang="less" scoped>

.email-top-bg{
  background: url("~/assets/images/email-top-bg.png") no-repeat center ;
  background-size: 100% 100%;
}
.email-top-bg-phone{
  background: url("~/assets/images/email-top-bg.png") no-repeat center ;
  background-size: 100% 100%;
}
.text-color-css{
  background: linear-gradient(221deg, #00E5D6 0%, #5C64FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.select-div{
  line-height: 37px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.option-div{
  position: absolute;
  z-index: 99;
  background: #FFFFFF;
  box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.06);
  border: 1px solid #E4E7ED;
  width: 100%;
  max-height: 240px;
  overflow: auto;
  border-radius: 8px;
  color: #606266;
  div{
    line-height: 34px;
    cursor: pointer;
    padding: 0 16px;
    &:hover{
      background-color: #F5F5F5;
      color: #000000;
    }
  }
}
.option-active,.option-div div:active{
  background: #E8E9FA;
  color: #5C64FF;
  font-weight: 500;
}
:deep(input),:deep(select),:deep(textarea),.select-div{
  background: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #EBEBEB;
  width: 100%;
  outline: none;
  font-weight: 300;
  font-family: Montserrat-Light, Montserrat;
}
:deep(input),:deep(select),.select-div{
  height: 37px;
  padding: 0 16px;
}
:deep(textarea){
  padding: 10px 16px;
}
:deep(input:hover),:deep(select:hover),:deep(textarea:hover),.select-div:hover{
  border-color: #B2B2B2;
}
:deep(input:focus),:deep(select:focus),:deep(textarea:focus),.select-div:active{
  border-color: #5C64FF;
}
.up-tran {
  transform: rotate(0deg);
  transition: all .3s, visibility 0s;
}
.select-active .up-tran {
  transform: rotate(180deg);
}
::-webkit-input-placeholder,
:-moz-placeholder,
::-moz-placeholder,
:-ms-input-placeholder {
  color: #C3C4C7;
}
.input-error{
  border-color: #F52222;
}
.input-error-label{
  color: #FF4A4A;
  font-size: 12px;
}
.form-label{
  margin-top: 10px;
  margin-bottom: 5px;
}
.modal-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.3);
  z-index: 999;
}
.modal-div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  background: #FFFFFF;
  box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.06);
  border-radius: 13px;
  border: 1px solid #E4E7ED; 
  color: #000000;
  text-align: center;
}
.modal-error{
  background: rgba(246, 102, 43, .9);
  position: fixed;
  left: 50%;
  transform: translate(-50%,0);
  -webkit-transform: translate(-50%,0);
  -moz-transform: translate(-50%,0);
  z-index: 999;
  color: #FFFFFF;
  font-size: 14px;
  border-radius: 13px;
}
</style>