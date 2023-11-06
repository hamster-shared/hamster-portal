<template>
  <div>
    <Collapse v-model:activeKey="activeKey" accordion expandIconPosition="right" ghost="true" @change="handleChange">
      <CollapsePanel v-for="item in navigationList" :key="item.id" class="my-[16px]">
        <template #header>
          <div class="flex">
            <div class="flex left">
              <img :src="item.introduce" class="w-[17px] h-[17px] mt-[6px] mr-[10px]" />
              <div class="collapse-header-title">{{ item.activityName }}</div>
            </div>
            <div class="collapse-header-line right"></div>
          </div>
        </template>
        <div v-for="it in item.children">
          <div class="text-[18px] text-[#A1A4BB] font-bold mb-[20px]">
            <span>{{ item.activityName }}</span>
            <span>&nbsp; - &nbsp;</span>
            <span>{{ it.activityName }}</span>
          </div>
          <div v-for="val in it.children">
            <div @click="changePage(val.path)">
              <div class="flex">
                <img :src="val.introduce" class="w-[34px] h-[34px] mr-[8px]" />
                <div class="text-[14px] text-[#ffffff] font-semibold leading-[34px]">{{ val.title }}</div>
                <img v-if="val.newFlag" src="~/assets/images/newTag.png" class="w-[34px] h-[16px] mt-[10px] ml-[8px]" />
              </div>
              <div class="text-[#79788F] text-[12px] leading-[15px] mt-[10px] mb-[10px]">{{ val.content }}</div>
              <div class="mb-[30px]">
                <span class="text-[#828CE7] text-[12px] font-semibold bg-[#ECEEFF] px-[15px] py-[2px] rounded-[10px] ">{{
                  val.version }}</span>
              </div>
            </div>

          </div>
        </div>
      </CollapsePanel>
    </Collapse>
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import { Collapse, CollapsePanel } from "ant-design-vue";
import { featuresCollapseDatas } from '../../layouts/Features.ts'
const { getImageURL } = useAssets()
const activeKey = ref([]);
const navigationList = ref([]);
const selectedData = ref([]);
const emits = defineEmits(['cancelModal']);
const handleChange = () => {
  emits("handleChange");
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
          item.children.forEach(it => {
            it.children.forEach(async val => {
              // val.children = await getMenuContentList(val.id);
              // console.log(val.children, 'hh')
            })
          })
        }
      })
    }
  })
}

const getMenuContentList = async (id) => {
  // const url = `/api/navbar/${id}/content`;
  // await $fetch(url, {
  //   method: "GET",
  // }).then(res => {
  //   if (res.code === 200) {
  //     // console.log(res, 'res')
  //     selectedData.value = res.data
  //   }
  // })
  // return selectedData.value
}

const changePage = (path) => {
  if (path == 'NA') {
    return
  } else {
    window.open(path)
  }
}

onBeforeMount(() => {
  getMenuList();
})
</script>
<style scoped>
:deep(.ant-collapse > .ant-collapse-item > .ant-collapse-header) {
  color: #A1A4BB;
  font-size: 16px;
  background-color: #000000;
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
  margin-bottom: 10px;
}

:deep(.ant-collapse-content) {
  background-color: #000000;
}

:deep(.anticon.anticon-right.ant-collapse-arrow) {
  position: absolute;
  top: 4px;
  right: 12px;
}

:deep(.ant-collapse-content-box) {
  padding: 4px 0 0 26px;
}

.collapse-header-img {
  vertical-align: middle;
  margin-right: 10px;
  margin-top: 4px;
}

.collapse-header-title {
  vertical-align: middle;
  margin-right: 12px;
}

.collapse-header-line {
  width: calc(100% - 100px);
  height: 1px;
  background-color: #9193A6;
  margin-top: 12px;
  margin-right: 38px;
  opacity: 0.5;
}

.left {
  flex: 0 0 auto;
}

.right {
  flex: 1 1 auto;
}
</style>