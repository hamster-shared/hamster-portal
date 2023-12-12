<template>
  <div class="absolute top-0 inset-x-0 z-[100] md:z-[1000]  bg-black" :class="{ 'bg-opacity-0': curMenu === '' }">
    <div class="title-activity text-[12px] md:text-[14px]" @click="jumpNftActivity">
      Become a Blast developer quickly and enjoy the process with Hamster. Register now >>
    </div>
    <div class="m-auto mt-[66px] md:mt-[53px]">
      <div class="container px-5 mx-auto pb-[16px] font-light font-family-light">
        <div class="relative flex flex-row items-center justify-between text-center text-white">
          <div class="absolute logo">
            <nuxt-link to="/">
              <img class="h-4 md:h-[24px]" src="~/assets/images/header.png">
            </nuxt-link>
          </div>

          <div class="flex flex-row justify-center md:ml-auto">
            <img @click="showDropdownMenu" v-if="isMobile" class="h-4 ml-[82vw]" src="~/assets/images/head-menu-down.svg">
            <div v-else class="menu">
              <div class="">
                <div>
                  <div @mouseleave="menuMouseLeave('Features')" @mouseenter="subMenuDropdownShow = true"
                    :class="{ 'menu-dropdown-opened': subMenuDropdownShow }"
                    class="flex items-center px-4 menu-dropdown-hover h-[50px]">Features
                    <DownOutlined class="ml-2" />
                  </div>
                  <!-- :class="[subMenuDropdownShow === true ? 'block' : 'hidden']" @todo-->
                  <div 
                    class="sub-menu-dropdown absolute z-[999] text-[#00044C] text-[16px] font-medium font-family-medium pt-[10px] w-full left-[0]">
                    <div @mouseleave="subMenuMouseLeave('Features')" @mouseenter="subMenuMouseEnter('Features')"
                      class=" box-dropdown">
                      <div class="bg-[white] rounded-[5px] text-base">
                        <Menu></Menu>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative">
                <div @mouseleave="menuMouseLeave('Faucet')" @mouseenter="subMenuDropdownShowFaucet = true"
                  :class="{ 'menu-dropdown-opened': subMenuDropdownShowFaucet }"
                  class="flex items-center px-4 menu-dropdown-hover h-[50px]">Faucet
                  <DownOutlined class="ml-2" />
                </div>
                <div :class="[subMenuDropdownShowFaucet === true ? 'block' : 'hidden']"
                  class="sub-menu-dropdown absolute z-[999] text-[#00044C] text-[16px] font-medium font-family-medium w-[300px] pt-[10px] left-[0]">
                  <div @mouseleave="subMenuMouseLeave('Faucet')" @mouseenter="subMenuMouseEnter('Faucet')"
                    class="box-dropdown">
                    <div class="bg-[white] p-[30px] rounded-[5px] text-base">
                      <div v-for="(it, index) in faucetList" :key="it.name" @click="clickHref(it.address)">
                        <a :href="it.address" target="_blank" class="flex faucet-list"
                          :class="index === 1 ? 'mb-[20px] mt-[20px]' : ''">
                          <img :src="it.icon" class="w-[39px] h-[39px] mr-[20px]" />
                          <span class="text-[16px] text-[#051336] font-bold pt-[6px] ">{{
                            it.name
                          }}
                          </span>
                          <img src="@/assets/images/arrow.svg" class="w-[14px] ml-[10px] default-arrow" />
                          <img src="@/assets/images/arrow-blue.svg" class="w-[14px] ml-[10px] hover-arrow" />

                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a v-for="link in navLinks" :key="link.path" :class="{ 'menu-active': `/${curMenu}` === link.path }"
                  class="mx-4 menu-hover" @click="openNewUrl(link.title, link.path)" href="#">
                  {{ link.title }}
                </a>
              </div>
              <button class="ml-4 start-today !text-[14px]  h-[50px] !font-normal" @click="gotoAline">{{
                $t('header.menu1')
              }}</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showPhoneMenu" class="phone-menu-h inset-x-0 fixed z-[300] py-4 bg-black">
    <div class="title-activity text-[12px] md:text-[14px]" @click="jumpNftActivity">
      Become a Blast developer quickly and enjoy the process with Hamster. Register now >>
    </div>
    <div class="relative flex justify-start mt-[50px] px-5 ">
      <nuxt-link to="/">
        <img class="h-4 md:h-[24px]" src="~/assets/images/header.png">
      </nuxt-link>
      <div class="absolute right-[24px]" @click="closeDropdownMenu">
        <img class="h-[24px] ml-[36vw]" src="~/assets/images/menu-close.svg" />
      </div>
    </div>
    <div class="my-[20px] overflow-y-auto overscroll-contain phone-scroll-box px-5 " ref="phoneScrollBox">
      <div class="pb-[60px]">
        <div class="relative cursor-pointer select-none">
          <div class="h-[32px] text-base flex justify-between items-center hover:color-[#27FFB8]"
            @click="subMenuDropdownShow = !subMenuDropdownShow">
            <div>Features</div>
            <img src="~/assets/images/chervon-right.svg" class="w-6 h-6 ml-2"
              :class="{ 'rotate-dropdown-icon-mobile': subMenuDropdownShow }">
          </div>
          <div class="text-[#CECFD0] w-[100%]" v-if="subMenuDropdownShow">
            <Collapse :navigationList="navigationList" @handleChange="handleChange"></Collapse>
          </div>
          <div class="h-[32px] mt-[20px] mb-[20px] text-base flex justify-between items-center hover:color-[#27FFB8]"
            @click="subMenuDropdownShowFaucet = !subMenuDropdownShowFaucet">
            <div>Faucet</div>
            <img src="~/assets/images/chervon-right.svg" class="w-6 h-6 ml-2"
              :class="{ 'rotate-dropdown-icon-mobile': subMenuDropdownShowFaucet }">
          </div>
          <div class=" text-[#CECFD0] w-[100%]" v-if="subMenuDropdownShowFaucet">
            <div v-for="it in faucetList" :key="it.name">
              <a :href="it.address" class="flex mb-[30px]">
                <img :src="it.icon" class="w-[34px] h-[34px] mr-[10px]" />
                <span class="text-[16px] text-[#FFFFFF] pt-[4px]">{{ it.name }}
                </span>
                <img src="@/assets/images/arrow.svg" class="w-[14px] ml-[10px]" />
              </a>
            </div>
          </div>
        </div>
        <a v-for="link in navLinks" :key="link.path" :href="link.path">
          <div :class="{ 'menu-active': `/${curMenu}` === link.path }" class="phone-menu">
            <span>{{ link.title }}</span>
            <!-- <img src="~/assets/images/chervon-right.svg" /> -->
          </div>
        </a>
      </div>
      <button class="absolute bottom-[80px] start-today w-[100%] mt-6 !text-[14px] !font-normal header-start-today-btn"
        @click="gotoAline">
        {{ $t('header.menu1') }}
      </button>

    </div>
  </div>
</template>

<script setup>
import { computed, ref, onBeforeMount } from "vue"
import { DownOutlined } from '@ant-design/icons-vue';
import Menu from './menu.vue';
import Collapse from "./collapse.vue";
const props = defineProps({
  showHeader: {
    type: Boolean,
    default: true
  },
  showHeaderBg: {
    type: Boolean,
    default: false
  },
})

const navigationList = ref([]);
const selectedData = ref([]);

const faucetList = ref([]);

const { getImageURL } = useAssets()
const route = useRoute();
const { t, locale, availableLocales } = useI18n()
const localeOptions = availableLocales.map((lang) => {
  const name = t("general.langName", null, { locale: lang })
  return { name, value: lang }
})

const phoneScrollBox = ref();
const linkValue = ref('');
const alineLink = computed(() => linkValue.value + "/login")
const dashboardLink = computed(() => linkValue.value + "/middleware/dashboard")

const navLinks = computed(() => [
  { title: 'Incubator', path: "/incubator", target: '_self' },
  { title: 'Community', path: "/community", target: '_self' },
  { title: 'About', path: "/about", target: '_self' },
  { title: t('header.docs'), path: "https://hamsternet.io/docs/", target: '_bank' },
  // { title: 'News', path: "https://hamsternet.medium.com/", target: '_bank' },
])

const subMenuDropdownShow = ref(false) 
const subMenuDropdownHover = ref(false)
const subMenuDropdownShowFaucet = ref(false);
const subMenuDropdownHoverFaucet = ref(false);

const curMenu = ref('')

const device = useDevice()
const isMobile = device.value.isMobile
const showPhoneMenu = ref(false);

// Add `is-mobile` class to <html> tag
onMounted(() => {
  const rootClassList = document.querySelector("html").classList
  if (isMobile) {
    rootClassList.add("is-mobile")
  } else {
    rootClassList.remove("is-mobile")
  }
})


const getFaucetList = async () => {
  const url = '/api/navbar/faucet';
  await $fetch(url, {
    method: "GET",
  }).then(res => {
    if (res.code === 200) {
      console.log(res.data)
      faucetList.value = res.data
    }
  })
}

onBeforeMount(() => {
  getMenuList();
  getFaucetList();
})

const getMenuList = async () => {
  const url = '/api/navbar';

  await $fetch(url, {
    method: "GET",
  }).then(res => {
    if (res.code === 200) {
      res.data.forEach((item, idx) => {
        if (item.activityName === 'Features') {
          navigationList.value = item.children;
          item.children.forEach(it => {
            it.children.forEach(async val => {
              val.children = await getMenuContentList(val.id);
            })
          })
        }
      })
    }
  })
}

const getMenuContentList = async (id) => {
  const url = `/api/navbar/${id}/content`;
  await $fetch(url, {
    method: "GET",
  }).then(res => {
    if (res.code === 200) {
      selectedData.value = res.data
    }
  })
  return selectedData.value
}

const menuMouseLeave = (val) => {
  setTimeout(() => {
    if (val === 'Features') {
      subMenuDropdownShow.value = subMenuDropdownHover.value;
    } else {
      subMenuDropdownShowFaucet.value = subMenuDropdownHoverFaucet.value;
    }

  }, 100);
}


const showDropdownMenu = () => {
  showPhoneMenu.value = true;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.documentElement.style.overflow = 'hidden';
  // document.body.addEventListener("touchmove", handleMove, true, { passive: false })
}

const closeDropdownMenu = () => {
  showPhoneMenu.value = false;
  subMenuDropdownShow.value = false;
  subMenuDropdownShowFaucet.value = false;
  document.body.style.overflow = 'auto';
  document.body.style.position = 'static';
  document.documentElement.style.overflow = 'auto';
  // document.body.removeEventListener("touchmove", handleMove, true, { passive: false })
}

const handleMove = (event) => {
  event.preventDefault();
}


const handleChange = () => {
  phoneScrollBox.value.scrollTop = 0;
}


const subMenuMouseLeave = (val) => {
  if (val === 'Features') {
    subMenuDropdownShow.value = false;
    subMenuDropdownHover.value = false;
  } else {
    subMenuDropdownShowFaucet.value = false;
    subMenuDropdownHoverFaucet.value = false;
  }
}

const subMenuMouseEnter = (val) => {
  if (val === 'Features') {
    subMenuDropdownHover.value = true;
  } else {
    subMenuDropdownHoverFaucet.value = true
  }
}

function handleScroll() {
  console.log(document.body.scrollTop)

  // showPhoneMenu.value = false;
  // subMenuDropdownShow.value = false;
}

const gotoAline = function () {
  const w = window.open("about:blank");
  w.location.href = alineLink.value
}

const openNewUrl = (val, link) => {
  if (val === 'About' || val === 'Community' || val === 'Incubator') {
    window.location.href = link;
  } else {
    window.open(link);
  }
}

const jumpNftActivity = () => {
  // 无论生成和测试都是跳活动的线上网址
  // window.open('https://activity.hamsternet.io/')
  // window.location.href = '/community?location=2';
  window.location.href = "/email?show=register";
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, false)
  // handleScroll();

  curMenu.value = route.path.substring(1);

  if (window.location.href.indexOf('hamsternet.io') !== -1) {
    linkValue.value = "https://develop.alpha.hamsternet.io";
  } else {
    linkValue.value = "https://develop.hamster.newtouch.com";
  }
})

onUnmounted(() => {
  // window.removeEventListener("scroll", handleScroll)
})
</script>

<style>
.title-activity {
  width: 100%;
  background: linear-gradient(281deg, #BC006B 0%, #454CDA 100%);
  font-family: Montserrat-Regular, Montserrat;
  color: #FFFFFF;
  text-align: center;
  position: absolute;
  top: 0;
  z-index: 99999;
  cursor: pointer;
  padding: 8px 0;
  font-weight: bold;
}

.phone-menu-h {
  height: 100vh;
}

.phone-scroll-box {
  max-height: calc(100vh - 220px);
}

.choose-locale-active {
  @apply relative text-[#807D7C] bg-[#2E2A28];
}

.locale-dropdown {
  outline: none;

  .v-popper__arrow-container {
    @apply hidden;
  }

  .v-popper__inner {
    background: unset;
    border: unset;
    border-radius: unset;
    box-shadow: unset;
  }
}

.rotate-dropdown-icon {
  @apply rotate-180;
}

.rotate-dropdown-icon-mobile {
  @apply -rotate-90;
}



.drop-bg {
  background: rgba(255, 255, 255, 0.30141);
  border-radius: 4px;
}

.menu {
  @apply cursor-pointer text-[white] leading-[32px] flex items-center font-light;
  font-family: Montserrat-Light, Montserrat;
}

.menu-active {
  @apply text-white !important;
}

.menu-dropdown-opened,
.menu-dropdown-hover:hover {
  color: #5C64FF;

  svg path {
    fill: #5C64FF;
  }


}

.menu-dropdown-opened {
  font-family: Montserrat-Medium, Montserrat;
  font-weight: 500;
}

.menu-hover:hover {
  color: #5C64FF;
}

.box-dropdown {
  /* box-shadow: 0px 2px 10px 0px rgba(204, 204, 215, 0.65); */
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
}

.faucet-list .default-arrow {
  display: block;
}

.faucet-list .hover-arrow {
  display: none;
}

.faucet-list:hover span {
  color: #5C64FF;
}

.faucet-list:hover .default-arrow {
  display: none !important;

}

.faucet-list:hover .hover-arrow {
  display: block !important;
}

.box-top {
  width: 0px;
  height: 0px;
  overflow: hidden;
  border-width: 10px;
  margin-top: -10px;
  border-color: transparent transparent white transparent;
  border-style: dashed dashed solid dashed;
}

.header-start-today-btn {
  width: calc(100% - 40px);
}

.start-today,
.btn-css {
  border: 1px solid #5C64FF;
  padding: 8px 40px;
  background: #5C64FF;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  font-family: Montserrat-Bold, Montserrat;
}

.btn-css:hover {
  border-color: #6C73FF;
  background: #6C73FF;
}

.btn-css:active {
  border-color: #3F48FF;
  background: #3F48FF;
}

.btn-css:disabled {
  border-color: #D3D5FF;
  background: #D3D5FF;
}

@screen md {
  .menu-active {
    color: #5C64FF !important;
    font-weight: 500;
  }
}

.to-top {
  width: 0;
  height: 0;
  border-bottom: 8px solid rgba(255, 255, 255, 0.30141);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  margin-left: 44%;
}

.top-active {
  border-bottom-color: #2e2a28;
}

.top-focus {
  border-bottom-color: #a05e1c;
}

.phone-menu {
  @apply text-base md:text-[20px] my-[20px] flex justify-between items-center;
}

.menu-color {
  @apply text-[#807D7C];
}

.ant-menu-vertical.ant-menu-sub {
  padding: 20px !important;
  max-height: fit-content !important;
}

.ant-menu-opened {
  font-family: Montserrat-Medium, Montserrat;
  font-weight: 500;
  color: #5C64FF;

  svg path {
    fill: #5C64FF;
  }
}


.ant-popover-inner-content {
  padding: 0px;
}

.text-css-color {
  font-size: 24px;
  font-family: Montserrat-Bold, Montserrat;
  font-weight: bold;
  color: #5B7ED1;
  line-height: 29px;
  background: linear-gradient(221deg, #40ECE1 0%, #5C64FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
<style scoped lang="less">
@baseColor: #5C64FF;

:deep(.anticon-down) {
  transform: rotate(0deg);
  transition: all .3s, visibility 0s;
}

:deep(.ant-menu-submenu-open .anticon-down),
:deep(.menu-dropdown-opened .anticon-down),
:deep(.menu-dropdown-hover:hover .anticon-down) {
  transform: rotate(180deg);
}

:deep(.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after) {
  border-bottom: none;
}

:deep(.ant-menu-submenu-open),
:deep(.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover) {
  color: @baseColor;

  svg path {
    fill: @baseColor;
  }
}

:deep(.ant-menu) {
  color: #FFFFFF;
  background-color: transparent;
}

:deep(.ant-menu-horizontal) {
  border-bottom: none;
}
</style>
