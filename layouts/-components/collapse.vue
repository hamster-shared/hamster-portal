<template>
  <div>
    <Collapse v-model:activeKey="activeKey" accordion expandIconPosition="right" ghost="true">
      <CollapsePanel v-for="item in featuresCollapseDatas" :key="item.title">
        <template #header>
          <div class="flex">
            <div class="flex left">
              <img :src="item.img" class="collapse-header-img w-[15px] h-[15px]" />
              <div class="collapse-header-title">{{ item.title }}</div>
            </div>

            <div class="collapse-header-line right"></div>
          </div>

        </template>
        <div v-for="it in item.children">
          <div class="text-[18px] text-[#A1A4BB] font-bold mb-[20px]">
            <span>{{ item.title }}</span>
            <span>&nbsp; - &nbsp;</span>
            <span>{{ it.name }}</span>
          </div>
          <div v-for="val in it.data">
            <div class="flex">
              <img :src="val.img" class="w-[34px] h-[34px] mr-[8px]" />
              <div class="text-[14px] text-[#ffffff] font-semibold leading-[34px]">{{ val.title }}</div>
              <img v-if="val.isNew" src="../../assets/images/newTag.png" class="w-[34px] h-[16px] mt-[10px] ml-[8px]" />
            </div>
            <div class="text-[#79788F] text-[12px] leading-[15px] mt-[10px] mb-[10px]">{{ val.description }}</div>
            <div class="mb-[30px]">
              <span class="text-[#828CE7] text-[12px] font-semibold bg-[#ECEEFF] px-[15px] py-[2px] rounded-[10px] ">{{
                val.version }}</span>
            </div>
          </div>
        </div>
      </CollapsePanel>
    </Collapse>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Collapse, CollapsePanel } from "ant-design-vue";
import { featuresCollapseDatas } from '../../layouts/Features.ts'

// console.log(featuresCollapseDatas, 'data')

const activeKey = ref([]);
</script>
<style scoped>
:deep(.ant-collapse > .ant-collapse-item > .ant-collapse-header) {
  color: #A1A4BB;
  font-size: 16px;
  background-color: #000000;
  padding-left: 0px;
  padding-right: 0px;
  display: block;
}

:deep(.ant-collapse-content) {
  background-color: #000000;
}

.collapse-header-img {
  vertical-align: middle;
  margin-right: 8px;
  margin-top: 6px;
}

.collapse-header-title {
  vertical-align: middle;
  margin-right: 8px;
}

.collapse-header-line {
  width: calc(100% - 100px);
  height: 1px;
  background-color: #9193A6;
  margin-top: 12px;
  margin-right: 36px;
}

.left {
  flex: 0 0 auto;
}

.right {
  flex: 1 1 auto;
}
</style>