<template>
  <div class="flex menu">
    <div class="menu-nav-title">
      <div v-for="item in navigationList" :key="item.name">
        <div class="flex mb-[6px]">
          <img :src="getImageURL(`${item.srcName}.png`)" class="w-[17px] h-[17px] mt-[7px] mr-[10px]" />
          <div class="text-[16px] text-[#A1A4BB] ">{{ item.name }}</div>
        </div>

        <div v-for="val in item.data">
          <div :class="selectedKeys === val.type ? 'selectedCss' : ''" @click="selectedClick(item.name, val)"
            class="menu-nav-item-title text-[18px] text-[#051336] font-semibold cursor-pointer hover:text-[#3B4DF0] w-[200px] mb-[8px]">
            {{
              val.name }}</div>
        </div>
      </div>
    </div>
    <div class="pl-[30px]">
      <navigation :levelOne="levelOne" :levelTwo="levelTwo"></navigation>
      <div class="grid grid-cols-3 gap-2 ">
        <div v-for="item in selectedData" :key="item.name" class="item ">
          <div class="flex">
            <img :src="getImageURL(`${item.srcName}.png`)" class="w-[34px] h-[34px] mr-[8px]" />
            <div class="text-[#051336] text-[18px] font-bold">{{ item.title }}</div>
            <img v-if="item.isNew" src="~/assets/images/newTag.png" class="w-[34px] h-[16px] mt-[10px] ml-[8px]" />
          </div>

          <div class="text-[#79788F] text-[12px] leading-[15px] mt-[10px] mb-[10px]">{{ item.description }}</div>
          <div>
            <span class="text-[#828CE7] text-[12px] font-semibold bg-[#E5E7FF] px-[15px] py-[2px] rounded-[10px]">{{
              item.version
            }}</span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
// import { Menu, SubMenu, MenuItem } from 'ant-design-vue';
import { featuresDatas } from '../../layouts/Features.ts'
import navigation from './navigation.vue';

const { getImageURL } = useAssets()

const rootSubmenuKeys = ref(['Smart Contract', 'Front End', 'Node', 'Market']);
const openKeys = ref(['Smart Contract', 'Front End', 'Node', 'Market']);
// const selectedKeys = ref(['smartContractDevelopment']);
const selectedKeys = ref('smartContractDevelopment')
const selectedData = ref(featuresDatas[0].data);
const levelOne = ref('Smart Contract');
const levelTwo = ref('Development');

const navigationList = ref([
  { name: 'Smart Contract', srcName: 'smartContract', data: [{ name: 'Development', type: 'smartContractDevelopment' }, { name: 'Secure Code', type: 'smartContractSecureCode' }, { name: 'Secure Deploy', type: 'smartContractSecureDeploy' }] },
  { name: 'Front End', srcName: 'frontEnd', data: [{ name: 'Development', type: 'frontEndDevelopment' }, { name: 'Secure Code', type: 'frontEndSecureCode' }, { name: 'Fast Deploy', type: 'frontEndFastDeploy' }] },
  { name: 'Node', srcName: 'node', data: [{ name: 'Development', type: 'nodeDevelopment' }, { name: 'Secure Deploy', type: 'nodeSecureDeploy' }] },
  { name: 'Market', srcName: 'market', data: [{ name: 'Template Market', type: 'marketTemplateMarket' }, { name: 'Middleware', type: 'marketMiddleware' }] },
])

const selectedClick = (name, val) => {
  selectedKeys.value = val.type;
  featuresDatas.forEach(item => {
    if (item.name === val.type) {
      selectedData.value = item.data
    }
  })

  levelOne.value = name;
  levelTwo.value = val.name;
}

// const onOpenChange = (openKeys) => {
//   let latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
//   if (rootSubmenuKeys.value.indexOf(latestOpenKey) !== -1) {
//     openKeys.value = openKeys;
//   } else {
//     openKeys.value = latestOpenKey ? [latestOpenKey] : [];
//   }
// };

const handleClick = (val) => {
  const { item, key, keyPath } = val;
  featuresDatas.forEach(item => {
    if (item.name === key) {
      selectedData.value = item.data
    }
  })

  levelOne.value = keyPath[0];
  levelTwo.value = item.dataKey;

  // console.log(item, key, keyPath, 'val')
}


</script>
<style scoped>
.menu {
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

.menu :deep(.ant-menu) {
  font-size: 18px;
  color: #051336;
  font-weight: bold;
}

.menu :deep(.ant-menu-submenu-title .ant-menu-title-content) {
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

.menu :deep(.ant-menu-inline .ant-menu-item::after) {
  border: none;

}

.menu :deep(.ant-menu-light .ant-menu-item:hover) {
  color: #3B4DF0;
}

:deep(.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected) {
  border-radius: 10px;
  background-color: #EAECFF;
  color: #3B4DF0;
}
</style>