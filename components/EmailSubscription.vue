<template>
  <div class="email-sub py-[40px] md:py-[90px] px-5">
    <img src="~/assets/images/emailSub.png" class="w-[50px] mx-auto" />
    <div class="font-extrabold text-[18px] md:text-[36px] leading-[34px] md:leading-[74px] ">
      <span class="font-extrabold email-title font-family-extraBold"> Never
        Miss an updates</span>

    </div>
    <div
      class="mb-[20px] md:mb-[30px] text-[#FFFFFF] leading-[16px] md:leading-[35px] text-[12px] md:text-[18px] font-thin font-family-medium">
      Stay up to date on our product features and latest updates.
    </div>
    <div class="flex justify-center">
      <div class="relative w-[285px] mr-[20px]">
        <input placeholder="Enter your Email address" type="text" v-model="addressValue"
          :class="{ 'input-error': emailErr }" />
        <div v-if="emailErr" class="input-error-label text-[14px] ">{{ errMessage }}</div>
      </div>
      <button
        class="sen-btn-css py-[8px] px-[12px] min-w-[140px] md:px-[40px] !text-[11px] md:!text-[14px] font-bold mf:h-[47px]"
        @click="sendEmailAddress" :disabled="isLoading">SEND ME
        UPDATES</button>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from "vue";
import { message } from 'ant-design-vue';
const addressValue = ref('');
const errMessage = ref('');
const emailErr = ref(false);
const isLoading = ref(false);


const sendEmailAddress = async () => {
  if (!addressValue.value) {
    emailErr.value = true;
    errMessage.value = 'Please Enter Your Email！'
  } else {
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (!reg.test(addressValue.value)) {
      //邮箱格式错误
      emailErr.value = true;
      errMessage.value = 'Email formal error !'
    } else {
      emailErr.value = false;
      isLoading.value = true;
      // 调接口
      const url = '/api/subscribe/email';
      const data = {
        email: addressValue.value
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then((response) => response.json())
        .then((data) => {
          isLoading.value = false;
          console.log("Success:", data);
          if (data.code === 200) {
            message.success('Subscription successful, thank you for your interest!')
          } else {
            message.error(data.message)
          }
        })
        .catch((error) => {
          isLoading.value = false;
          console.error("Error:", error);
        });
    }
  }
}

</script>
<style lang='less' scoped>
.email-sub {
  background: url("~/assets/images/free-bg.png") no-repeat center;
  background-size: 100% 100%;
  text-align: center;
}

.email-title {
  background-image: -webkit-linear-gradient(114deg, #5C64FF 0%, #00E5D7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.input-error-label {
  color: #FF2900;
  position: absolute;
  top: 46px;
  left: 0;
}

.sen-btn-css {
  border: 1px solid #5C64FF;
  background: #5C64FF;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  font-family: Montserrat-Bold, Montserrat;
}

.sen-btn-css:hover {
  background: #5C64FF;
}

:deep(input) {
  width: 100%;
  background: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #EBEBEB;
  outline: none;
  // font-weight: 300;
  font-size: 14px;
  font-family: Montserrat-Light, Montserrat;
  color: #000000;
}

:deep(input) {
  height: 39px;
  padding: 0 16px;
}


:deep(input:hover) {
  border-color: #B2B2B2;
}

:deep(input:focus) {
  border-color: #5C64FF;
}
</style>