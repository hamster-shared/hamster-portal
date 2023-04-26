<template>
  <div class="absolute inset-x-0 top-0 z-[100] md:z-[1000]  bg-black">
    <div class="m-auto">
      <div class="container mx-auto px-5 py-4 font-family-light font-light">
        <div class="relative flex flex-row items-center justify-between text-center text-white">
          <div class="absolute logo">
            <nuxt-link to="/">
              <img class="h-4 md:h-[24px]" src="~/assets/images/header.png">
            </nuxt-link>
          </div>

          <div class="flex flex-row justify-center md:ml-auto">
            <img @click="showPhoneMenu = true;" v-if="isMobile" class="h-4 ml-[82vw]"
              src="~/assets/images/head-menu-down.svg">
            <div v-else class="menu">
              <div>
                <div>
                  <div @mouseleave="menuMouseLeave"  @mouseenter="subMenuDropdownShow=true" :class="{'menu-dropdown-opened':subMenuDropdownShow}" class="flex items-center px-4 menu-dropdown-hover">Solutions<DownOutlined class="ml-2" /></div>
                  <div :class="[subMenuDropdownShow === true ? 'block' :'hidden']" class="absolute z-[999] text-[#00044C] text-[16px] font-medium font-family-medium pt-[10px]">
                    <div @mouseleave="subMenuMouseLeave" @mouseenter="subMenuMouseEnter" class=" box-dropdown w-max">
                      <div class="bg-[white] p-[20px] rounded-[5px] text-base">
                        <div class="pb-[20px] hover:text-[#5C64FF]">
                          <a href="/workflow" class="flex items-center mr-2" :class="{'menu-active' : `/${curMenu}` === '/workflow'}">
                            <img src="~/assets/images/solutions-workflow.svg" class="h-[40px] mr-4" />
                            Automated Workflow
                          </a>
                        </div>
                        <div class="hover:text-[#5C64FF]">
                          <a target="_blank" :href="dashboardLink" class="flex items-center mr-2">
                            <img src="~/assets/images/solutions-middleware.svg" class="h-[40px] mr-4" />
                            Middleware
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <VDropdown
                auto-hide
                v-model:shown="subMenuDropdownShow"
                :triggers="['click']"
                :distance="10"
                placement="bottom"
                popper-class="locale-dropdown"
                :skidding="16"
                @mouseover="subMenuDropdownShow=true"
              >
                <div class="cursor-pointer select-none">
                  <div
                    class="px-4 h-[32px] text-base flex justify-center items-center menu-dropdown-hover"
                    :class="{'menu-dropdown-opened': subMenuDropdownShow || `/${curMenu}` === '/workflow'}"
                  >
                    <div>Solutions</div>
                    <div class="h-2 ml-2" :class="{'rotate-dropdown-icon': subMenuDropdownShow}">
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.81261 0.348328L7.05525 5.59097L5.99459 6.65163L0.751953 1.40899L1.81261 0.348328Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.9452 5.59096L10.1878 0.348323L11.2485 1.40898L6.00586 6.65162L4.9452 5.59096Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <template #popper>
                  <div class=" box-dropdown max-w-[400px]">
                    <div class="bg-[white] p-[20px] rounded-[5px] text-base">
                      <div class="pb-[20px] hover:text-[#5C64FF]">
                        <a href="/workflow" class="flex items-center mr-2" :class="{'menu-active' : `/${curMenu}` === '/workflow'}">
                          <img src="~/assets/images/solutions-workflow.svg" class="h-[40px]" />
                          Automated Workflow
                        </a>
                      </div>
                      <div class="hover:text-[#5C64FF]">
                        <a target="_blank" :href="dashboardLink" class="flex items-center mr-2">
                          <img src="~/assets/images/solutions-middleware.svg" class="h-[40px]" />
                          Middleware
                        </a>
                      </div>
                    </div>
                  </div>
                </template>
              </VDropdown> -->
              <div>
                <a v-for="link in navLinks"
                  :key="link.path"
                  :class="{'menu-active' : `/${curMenu}` === link.path}"
                  class="mx-4 menu-hover"
                  :href="link.path"
                  :target="link.target"
                 >
                  {{ link.title }}
                </a>
              </div>
              <button class="ml-4 start-today !text-[14px] !font-normal" @click="gotoAline">{{ $t('header.menu1') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showPhoneMenu" 
    class="inset-x-0 top-0 fixed z-[300] py-4 px-6 bg-black">
    <div class="relative flex justify-start">
      <img class="h-4 md:h-[24px]" src="~/assets/images/header.png">
      <div class="absolute right-[-1px] top-0" @click="showPhoneMenu = false;">
        <img class="h-[24px] ml-[36vw]" src="~/assets/images/menu-close.svg" />
      </div>
    </div>
    <div class="my-[20px]">
      <div>
        <div class="relative cursor-pointer select-none" @click="subMenuDropdownShow = !subMenuDropdownShow">
          <div
            class="h-[32px] text-base flex justify-between items-center hover:color-[#27FFB8]">
            <div>Solutions</div>
            <img src="~/assets/images/chervon-right.svg" class="w-6 h-6 ml-2"
              :class="{'rotate-dropdown-icon-mobile': subMenuDropdownShow}">
          </div>
          <div class="text-[#CECFD0] w-[100%]" v-if="subMenuDropdownShow">
            <div class="my-4">
              <a href="/workflow">
                <span class="text-sm flex items-center">
                  <img src="~/assets/images/solutions-workflow.svg" class="h-[24px] mr-4" />
                  Automated Workflow
                </span>
              </a>
            </div>
            <div class="my-4">
              <a :href="dashboardLink">
                <span class="text-sm flex items-center">
                  <img src="~/assets/images/solutions-middleware.svg" class="h-[24px] mr-4" />
                  Middleware
                </span>
              </a>
            </div>
            <!-- <div class="my-4">
              <img src="~/assets/images/decentralized-computing-mobile.png" class="inline-block w-4 h-4"/>
              <span class="text-sm align-middle"> Decentralized Computing Power Network</span>
            </div> -->
          </div>
        </div>
        <a v-for="link in navLinks" :key="link.path" :href="link.path">
          <div :class="{'menu-active' : `/${curMenu}` === link.path}" class="phone-menu">
            <span>{{ link.title }}</span>
            <img src="~/assets/images/chervon-right.svg" />
          </div>
        </a>
      </div>
      <button class="start-today w-[100%] mt-6 !text-[14px] !font-normal" @click="gotoAline">
         {{ $t('header.menu1') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { Popover } from 'ant-design-vue'
// import { Menu , MenuItem, SubMenu } from 'ant-design-vue';
import { DownOutlined} from '@ant-design/icons-vue';

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


const { getImageURL } = useAssets()
const route = useRoute();
const { t, locale, availableLocales } = useI18n()
const localeOptions = availableLocales.map((lang) => {
  const name = t("general.langName", null, { locale: lang })
  return { name, value: lang }
})

const alineLink = computed(() => "https://develop.alpha.hamsternet.io/login")
const dashboardLink = computed(() => "https://develop.alpha.hamsternet.io/chainlink/dashboard")

const navLinks = computed(() => [
  // { title: 'Solutions', path: "/solutions", children: [] },
  // { title: t('header.dashboard'), path: '/dashboard' },
  // { title: 'Grant', path: "" }, //
  // { title: 'Pricing', path: "" }, //
  { title: 'About', path: "/about", target: '_self' },
  { title: t('header.docs'), path: "https://hamsternet.io/docs/", target: '_bank' },
  // { title: t('header.faucet'), path: "/faucet" },
  // { title: t('header.stake'), path: "/stake" },
  // { title: t('header.cross_chain'), path: "/cross_chain" },
  { title: 'News', path: "https://hamsternet.medium.com/", target: '_bank' },
])

const subMenuDropdownShow = ref(false)
const subMenuDropdownHover = ref(false)

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

const menuMouseLeave = () => {
  setTimeout(() => {
    subMenuDropdownShow.value = subMenuDropdownHover.value;
  }, 100);
}

const subMenuMouseLeave = () => {
  subMenuDropdownShow.value = false;
  subMenuDropdownHover.value = false;
}

const subMenuMouseEnter = () => {
  subMenuDropdownHover.value = true;
}

function handleScroll() {
  showPhoneMenu.value = false;
}

const gotoAline = function () {
  const w = window.open("about:blank");
  w.location.href = alineLink.value
}


onMounted(() => {
  window.addEventListener("scroll", handleScroll)
  handleScroll();

  curMenu.value = route.path.substring(1);
})
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style>
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

.menu-dropdown-opened,.menu-dropdown-hover:hover {
  color:#5C64FF;
  svg path {
    fill: #5C64FF;
  }
}
.menu-dropdown-opened{
  font-family: Montserrat-Medium, Montserrat;
  font-weight: 500;
}

.menu-hover:hover{
  /* font-family: Montserrat-Medium, Montserrat;
  font-weight: 500; */
  color:#5C64FF;
}

.box-dropdown{
  box-shadow: 0px 2px 10px 0px rgba(204,204,215,0.65);
}

.box-top{
  width:0px;
  height:0px;
  overflow:hidden;
  border-width:10px;
  margin-top: -10px;
  border-color:transparent transparent white transparent;
  border-style:dashed dashed solid dashed;
}

.start-today,.btn-css{
  border: 1px solid #5C64FF;
  padding: 8px 40px;
  background: #5C64FF;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  font-family: Montserrat-Bold, Montserrat;
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
.ant-menu-vertical.ant-menu-sub{
  padding: 20px !important;
  max-height: fit-content !important;
}
.ant-menu-opened{
  font-family: Montserrat-Medium, Montserrat;
  font-weight: 500;
  color: #5C64FF;
  svg path {
    fill: #5C64FF;
  }
}


.ant-popover-inner-content{
  padding: 0px;
}
</style>
<style scoped lang="less">
@baseColor: #5C64FF;
:deep(.anticon-down){
  transform: rotate(0deg);
  transition: all .3s, visibility 0s;
}
:deep(.ant-menu-submenu-open .anticon-down),:deep(.menu-dropdown-opened .anticon-down),
:deep(.menu-dropdown-hover:hover .anticon-down) {
  transform: rotate(180deg);
}
:deep(.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after){
  border-bottom: none;
}
:deep(.ant-menu-submenu-open),
:deep(.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover){
  color:@baseColor;
  svg path {
    fill: @baseColor;
  }
}
:deep(.ant-menu){
  color: #FFFFFF;
  background-color: transparent;
}
:deep(.ant-menu-horizontal){
  border-bottom: none;
}
</style>
