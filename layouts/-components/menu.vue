<template>
  <div class="flex menu-nav">
    <div class="menu-nav-title">
      <div v-for="item in navigationList" :key="item.id">
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
      </div>
    </div>
    <div class="pl-[16px]">
      <navigation :levelOne="levelOne" :levelTwo="levelTwo"></navigation>
      <div class="grid grid-cols-3 gap-2 ">
        <div v-for="item in selectedData" :key="item.name" class="item ">
          <div @click="changePage(item.path)">
            <div class="flex">
              <img :src="item.introduce" class="w-[34px] h-[34px] mr-[8px]" />
              <div class="text-[#051336] text-[16px] font-bold">{{ item.title }}</div>
              <img v-if="item.newFlag" src="~/assets/images/newTag.png" class="w-[34px] h-[16px] mt-[10px] ml-[8px]" />
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

const navigationList = ref([])

const selectedClick = (name, val) => {
  selectedKeys.value = val.id;
  levelOne.value = name;
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
          selectedKeys.value = navigationList.value[0].children[0].id;
          getMenuContentList(navigationList.value[0].children[0].id);
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
  padding: 0 20px 0;
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
</style>