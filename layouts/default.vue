<template>
  <div :class="[showContent===true?'block':'hidden']" class=" text-white">
    <Head>
      <Title>{{ $t('meta.title') }}</Title>
      <Meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <Link rel="shortcut icon" type="image/png" :href="getImageURL('logo.png')" />
      <Link href='https://fonts.googleapis.com/css?family=Noto+Sans' rel='stylesheet' type='text/css'/>
    </Head>
    <Header :showHeader="showHeader" :showHeaderBg="showHeaderBg" />
    <div>
      <slot />
    </div>
    <Footer v-if="showFooter" />
  </div>
</template>

<script setup>
  import { onMounted } from "vue"
  import Header from "./-components/header.vue"
  import Footer from "./-components/footer.vue"

  defineProps({ 
    showFooter: {
      type: Boolean,
      default: true
    },
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
  const { t } = useI18n()

  const showContent = ref(false)

  // For metas
  const { host } = useRequestHeaders()
  const websiteBaseUrl = host ? (host.startsWith("localhost") ? "http://" : "https://") + host : ""
  const metaImage = websiteBaseUrl + getImageURL('search-show-mini.png')

  useHead({
    meta: [
      { name: 'description', itemprop: 'description', content: t('meta.introduced') },
      { name: 'keywords', content: ' hamster, hamsternet, hamster network, hamster block, hamster blockchain' },
      { itemprop: 'image', content: metaImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@Hamsternetio' },
      { name: 'twitter:creator', content: '@Hamsternetio' },
      { name: 'twitter:image', content: metaImage },
      { name: 'twitter:image:alt', content: t('meta.introduced') },
      { property: 'og:description', content: t('meta.introduced') },
      { property: 'og:url', content: 'https://hamsternet.io/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: metaImage },
      { property: 'og:image:alt', content: t('meta.introduced') },
      { property: 'og:locale', content: 'en' },
      { property: 'og:site_name', content: 'Hamster' },
      { property: 'og:title', content: t('meta.title') },
    ]
  })

  onMounted(() => {
    showContent.value = true;
  })
</script>

<style>
  body {
    @apply text-[16px];
    /* background-color: #141212; */
    &::-webkit-scrollbar {
      width: 0;
    }
    
  }
  .main-margin {
    @apply px-[6%];
  }
  .text-ellipsis {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .text-line-2{
    -webkit-line-clamp: 2;
  }
  .text-line-3{
    -webkit-line-clamp: 3;
  }
  .news-top-bg{
    background: url('~/assets/images/news-top.png') no-repeat top;
    background-size: contain;
  }
  .news-detail-top-bg{
    background: url('~/assets/images/news-details-top.png') no-repeat top;
    background-size: contain;
  }
  .company-top-bg{
    background: url('~/assets/images/company-top-bg.png') no-repeat top;
    background-size: contain;
  }
  .download-top-bg{
    background: url('~/assets/images/download-top.png') no-repeat top;
    background-size: contain;
  }
  .bg-div-style{
    @apply flex justify-center items-center h-[180px] sm:h-[280px] md:h-[340px] lg:h-[480px] xl:h-[600px];
  }
  .bg-div-text-style{
    @apply text-center font-bold text-[22px] md:text-[26px] lg:text-[36px] xl:text-[45px] leading-[30px] md:leading-[50px] w-[200px] lg:w-[350px] mt-[80px] sm:mt-0;
  }
  .border-color2 {
    box-sizing: border-box;
    padding: 1px;
    border-radius: 16px;
    background-image: -webkit-linear-gradient(to bottom, #bda48a 0%, #141212 90%);
    background-image: -moz-linear-gradient(to bottom, #bda48a 0%, #141212 90%);
    background-image: linear-gradient(to bottom, #bda48a 0%, #141212 90%);
  }
  .img-center {
    @apply flex items-center justify-center;
  }
  .fp-watermark{
    display: none;
  }
  .font-family-bold{
    font-family: Montserrat-Bold, Montserrat;
  }
  .font-family-extraBold{
    font-family: Montserrat-ExtraBold, Montserrat;
  }
  .font-family-medium{
    font-family: Montserrat-Medium, Montserrat;
  }
  .font-family-light{
    font-family: Montserrat-Light, Montserrat;
  }
  .font-family-regular{
    font-family: Montserrat-Regular, Montserrat;
  }
  .font-family-pf-light{
    font-family: PingFangSC-Light, PingFang SC;
  }
  .area-title{
    @apply text-[#00044C] text-[25px] font-extrabold md:text-[48px] leading-[30px] md:leading-[60px] mt-[60px] md:mt-[80px];
    font-family: Montserrat-ExtraBold, Montserrat;
  }

  .area-desc{
    @apply text-sm mt-[30px] text-[#40425C] md:text-2xl md:mt-6 font-light;
    font-family: Montserrat-Light, Montserrat;
  }
  
  .text-color-css{
    background: linear-gradient(221deg, #40ECE1 0%, #5C64FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Montserrat-Bold, Montserrat;
    width: max-content;
  }

  .scroll-content{
    @apply h-[30px] md:h-[50px];
    overflow: hidden;
    position: relative;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  .scroll-img{
    height: 100%;
    width: 100%;
    display: flex;
    position: absolute;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 30s;
  }
  .scroll-fadeout-bg{
    position: absolute;
    width: 10%;
    height: 100%;
    z-index: 9;
  }
  .scroll-fadeout-left{
    background: linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0) 100%);
  }
  .scroll-fadeout-right{
    background: linear-gradient(270deg, #FFFFFF 0%, rgba(255,255,255,0) 100%);
    right: 0;
  }
  ::-webkit-scrollbar {
    /* 设置竖向滚动条的宽度 */
    width: 5px;
    /* 设置横向滚动条的高度 */
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    /* //滑块部分 */
    border-radius: 35px;
    background-color: rgba(144,147,153,.3);
  }
  ::-webkit-scrollbar-track {
    /* //轨道部分 */
    background-color: rgba(144,147,153,.3);
    border-radius: 35px;
  }
</style>
<style lang="less">
  // Base style
  html {
    font-family: "Noto Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 
                 "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", 
                 "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    
  }

  @screen lg {
    .container {
      max-width: 1216px;
    }
  }

  /* about antdv's style*/
  /*  message error and success*/
  .ant-message-custom-content {
    .anticon{
      vertical-align: text-bottom;
    }
  }
</style>
