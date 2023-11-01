<template>
  <div class="flex menu">
    <Menu style="width: 233px" mode="inline" :openKeys="openKeys" v-model:selectedKeys="selectedKeys"
      @openChange="onOpenChange" @click="handleClick">
      <template #expandIcon></template>
      <SubMenu key="Smart Contract" disabled>
        <template #icon>
          <img src="../../assets/images/smartContract.png" class="w-[15px]" />
        </template>
        <template #title>Smart Contract</template>
        <MenuItem key="smartContractDevelopment" dataKey="Development">Development</MenuItem>
        <MenuItem key="smartContractSecureCode" dataKey="Secure Code">Secure Code</MenuItem>
        <MenuItem key="smartContractSecureDeploy" dataKey="Secure Deploy">Secure Deploy</MenuItem>
      </SubMenu>
      <SubMenu key="Front End" disabled>
        <template #icon>
          <img src="../../assets/images/frontEnd.png" class="w-[17px]" />
        </template>
        <template #title>Front End</template>
        <MenuItem key="frontEndDevelopment" dataKey="Development">Development</MenuItem>
        <MenuItem key="frontEndSecureCode" dataKey="Secure Code">Secure Code</MenuItem>
        <MenuItem key="frontEndFastDeploy" dataKey="Fast Deploy">Fast Deploy</MenuItem>
      </SubMenu>
      <SubMenu key="Node" disabled>
        <template #icon>
          <img src="../../assets/images/node.png" class="w-[17px]" />
        </template>
        <template #title>Node</template>
        <MenuItem key="nodeDevelopment" dataKey="Development">Development</MenuItem>
        <MenuItem key="nodeSecureDeploy" dataKey="Secure Deploy">Secure Deploy</MenuItem>
      </SubMenu>
      <SubMenu key="Market" disabled>
        <template #icon>
          <img src="../../assets/images/market.png" class="w-[17px]" />
        </template>
        <template #title>Market</template>
        <MenuItem key="marketTemplateMarket" dataKey="Template Market">Template Market</MenuItem>
        <MenuItem key="marketMiddleware" dataKey="Middleware">Middleware</MenuItem>
      </SubMenu>
    </Menu>
    <div class="pl-[30px]">
      <navigation :levelOne="levelOne" :levelTwo="levelTwo"></navigation>
      <div class="grid grid-cols-3 gap-2 ">
        <div v-for="item in selectedData" :key="item.name" class="item ">
          <div class="flex">
            <img :src="item.img" class="w-[34px] h-[34px] mr-[8px]" />
            <div class="text-[#051336] text-[18px] font-bold">{{ item.title }}</div>
            <img v-if="item.isNew" src="../../assets/images/newTag.png" class="w-[34px] h-[16px] mt-[10px] ml-[8px]" />
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
import { Menu, SubMenu, MenuItem } from 'ant-design-vue';
import { featuresDatas } from '../../layouts/Features.ts'
import navigation from './navigation.vue';

const rootSubmenuKeys = ref(['Smart Contract', 'Front End', 'Node', 'Market']);
const openKeys = ref(['Smart Contract', 'Front End', 'Node', 'Market']);
const selectedKeys = ref(['smartContractDevelopment']);
const selectedData = ref(featuresDatas[0].data);
const levelOne = ref('Smart Contract');
const levelTwo = ref('Development');

const onOpenChange = (openKeys) => {
  let latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
  if (rootSubmenuKeys.value.indexOf(latestOpenKey) !== -1) {
    openKeys.value = openKeys;
  } else {
    openKeys.value = latestOpenKey ? [latestOpenKey] : [];
  }
};

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