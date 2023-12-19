<template>
  <div class="py-[16px] px-[45px] border border-solid border-x-0 border-t-0 border-[#EBECF4] flex">
    <div v-for="item in navigationList" :key="item.id" class="mr-[30px]">
      <div class="flex justify-center items-center px-[20px] py-[5px] hover:bg-[#F3F3F3] rounded-[19px]" :class="{'selectedOne' : levelOne == item.activityName}" @click="selectedOneClick(item)">
        <img :src="item.introduce" class="w-[17px] h-[17px] mr-[10px]" />
        <div class="text-[14px] font-medium text-[#000000] ">{{ item.activityName }}</div>
      </div>
    </div>
  </div>
  <div class="flex menu-nav px-[30px] pt-[20px] pb-[50px]">
    <div class="menu-nav-title">
      <div v-for="val in navChildrenList">
        <div :class="selectedKeys === val.id ? 'selectedCss' : ''" @click="selectedClick(val)"
          class="menu-nav-item-title text-[16px] text-[#051336] font-semibold cursor-pointer hover:text-[#3B4DF0] w-[196px] mb-[8px]">
          {{
            val.activityName }}</div>
      </div>
      <!-- <div v-for="item in navigationList" :key="item.id">
        <div class="flex h-[42px] leading-[42px]">
          <img :src="item.introduce" class="w-[17px] h-[17px] mt-[12px] mr-[10px]" />
          <div class="text-[16px] text-[#A1A4BB] ">{{ item.activityName }}</div>
        </div>

        <div v-for="val in item.children">
          <div :class="selectedKeys === val.id ? 'selectedCss' : ''" @click="selectedClick(item.activityName, val)"
            class="menu-nav-item-title text-[16px] text-[#051336] font-semibold cursor-pointer hover:text-[#3B4DF0] w-[196px] mb-[8px]">
            {{
              val.activityName }}</div>
        </div>
      </div> -->
    </div>
    <div class="pl-[16px]" v-if="levelTwo">
      <navigation :levelOne="levelOne" :levelTwo="levelTwo"></navigation>
      <div class="grid grid-cols-3 gap-2 ">
        <div v-for="item in selectedData" :key="item.name" class="item ">
          <div @click="changePage(item.path)">
            <div class="flex items-center">
              <img :src="item.introduce" class="w-[34px] h-[34px] mr-[8px]" />
              <div class="text-[#051336] text-[16px] font-bold">{{ item.title }}</div>
              <img v-if="item.newFlag" src="~/assets/images/newTag.png" class="w-[34px] h-[16px] ml-[8px]" />
            </div>

            <div class="text-[#79788F] text-[12px] leading-[15px] mt-[10px] mb-[10px]">{{ item.content }}</div>
            <div>
              <span class="text-[#828CE7] text-[12px] font-semibold bg-[#E5E7FF] px-[15px] py-[2px] rounded-[10px]">{{
                item.version
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue';
import { featuresDatas } from '../../layouts/Features.ts'
import navigation from './navigation.vue';

const { getImageURL } = useAssets()

const selectedKeys = ref('')
// const selectedData = ref(featuresDatas[0].data);
const selectedData = ref([]);
const levelOne = ref('Smart Contract');
const levelTwo = ref('Development');

const navigationList = ref([]);
const navChildrenList = ref([]);
const selectedOneClick = (item) => {
  levelOne.value = item.activityName;
  navChildrenList.value = item.children;
  levelTwo.value = item.children[0].activityName;
  selectedKeys.value = item.children[0].id;
  getMenuContentList(selectedKeys.value);
}
const selectedClick = (val) => {
  selectedKeys.value = val.id;
  // levelOne.value = name;
  levelTwo.value = val.activityName;
  getMenuContentList(val.id)
}


const getMenuList = async () => {
  const url = '/api/navbar';

  await $fetch(url, {
    method: "GET",
  }).then(res => {
    if (res.code === 200) {
      res.data.forEach((item, idx) => {
        if (item.activityName === 'Features') {
          navigationList.value = item.children;
          navigationList.value.forEach((it, k) => {
            if (k == 0 ) {
              levelOne.value = it.activityName;
              navChildrenList.value = it.children;
              selectedKeys.value = it.children[0].id
            }
          })
          // selectedKeys.value = navigationList.value[0].children[0].id;
          getMenuContentList(selectedKeys.value);
        }
      })
    }
  })
}

const getMenuContentList = async (id) => {
  selectedData.value = []
  const url = `/api/navbar/${id}/content`;
  await $fetch(url, {
    method: "GET",
  }).then(res => {
    if (res.code === 200) {
      selectedData.value = res.data
    }
  })
}

const changePage = (path) => {
  if (path == 'NA') {
    return
  } else {
    window.open(path, '_blank')
  }
}

onBeforeMount(() => {
  getMenuList();
})


</script>
<style scoped>
.menu-nav {
  cursor: default;
  align-items: start;
  text-align: left;
}

.menu-nav-title:not(:first-child) {
  margin-top: 10px;
}

.menu-nav-item-title {
  height: 42px;
  line-height: 42px;
  padding: 0 32px 0;
  border-radius: 10px;
}

.selectedCss {
  background-color: #EAECFF;
  color: #3B4DF0;
}

.menu-nav :deep(.ant-menu) {
  font-size: 18px;
  color: #051336;
  font-weight: bold;
}

.menu-nav :deep(.ant-menu-submenu-title .ant-menu-title-content) {
  font-size: 16px;
}

:deep(.ant-menu-inline) {
  border-right-width: 0;
}

.item {
  cursor: pointer;
  padding: 20px;
  border-radius: 10px;
}

.item:hover {
  background: linear-gradient(136deg, #EDEFFF 0%, #FFF5FE 100%);
}

.menu-nav :deep(.ant-menu-inline .ant-menu-item::after) {
  border: none;

}

.menu-nav :deep(.ant-menu-light .ant-menu-item:hover) {
  color: #3B4DF0;
}

:deep(.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected) {
  border-radius: 10px;
  background-color: #EAECFF;
  color: #3B4DF0;
}
.selectedOne{
  background: #000000;
  div{
    color: #FFFFFF;
  }
}
</style>