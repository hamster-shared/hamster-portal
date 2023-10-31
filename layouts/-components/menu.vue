<template>
  <div class="flex menu">
    <Menu style="width: 456px" mode="inline" :openKeys="openKeys" v-model:selectedKeys="selectedKeys"
      @openChange="onOpenChange">
      <template #expandIcon></template>
      <SubMenu key="smartContract" disabled>
        <template #icon>
          <img src="../../assets/images/smartContract.png" class="w-[15px]" />
        </template>
        <template #title>Smart Contract</template>
        <MenuItem key="smartContractDevelopment">Development</MenuItem>
        <MenuItem key="smartContractSecureCode">Secure Code</MenuItem>
        <MenuItem key="smartContractSecureDeploy">Secure Deploy</MenuItem>
      </SubMenu>
      <SubMenu key="frontEnd" disabled>
        <template #icon>
          <img src="../../assets/images/frontEnd.png" class="w-[17px]" />
        </template>
        <template #title>Front End</template>
        <MenuItem key="frontEndDevelopment">Development</MenuItem>
        <MenuItem key="frontEndSecureCode">Secure Code</MenuItem>
        <MenuItem key="frontEndFastDeploy">Fast Deploy</MenuItem>
      </SubMenu>
      <SubMenu key="node" disabled>
        <template #icon>
          <img src="../../assets/images/node.png" class="w-[17px]" />
        </template>
        <template #title>Node</template>
        <MenuItem key="nodeDevelopment">Development</MenuItem>
        <MenuItem key="nodeSecureDeploy">Secure Deploy</MenuItem>
      </SubMenu>
      <SubMenu key="market" disabled>
        <template #icon>
          <img src="../../assets/images/market.png" class="w-[17px]" />
        </template>
        <template #title>Market</template>
        <MenuItem key="marketTemplateMarket">Template Market</MenuItem>
        <MenuItem key="marketMiddleware">Middleware</MenuItem>
      </SubMenu>
    </Menu>
    <div class="pl-[30px]">
      <div class="grid grid-cols-3 gap-8 ">
        <div v-for="item in smartContractDevelopment" :key="item.name" class="item ">
          <div class="flex">
            <img :src="item.img" class="w-[34px] mr-[8px]" />
            <div class="text-[#051336] text-[18px] font-bold">{{ item.title }}</div>
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
import { smartContractDevelopment, smartContractSecureCode, smartContractSecureDeploy } from '../../layouts/Features.ts'

const rootSubmenuKeys = ref(['smartContract', 'frontEnd', 'node', 'market']);
const openKeys = ref(['smartContract', 'frontEnd', 'node', 'market']);
const selectedKeys = ref(['smartContractDevelopment']);

// const data = `${selectedKeys.value[0]}`

// console.log(data, 'data')

const onOpenChange = (openKeys) => {
  let latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
  if (rootSubmenuKeys.value.indexOf(latestOpenKey) !== -1) {
    openKeys.value = openKeys;
  } else {
    openKeys.value = latestOpenKey ? [latestOpenKey] : [];
  }
};

// console.log(smartContractDevelopment)


</script>
<style scoped>
/* .menu .ant-menu {
  margin-top: 120px;
} */
.menu {
  cursor: default;
  align-items: start;
  text-align: left
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



/* .menu .ant-menu .ant-menu-item {
  color: #000000 !important;
} */
</style>