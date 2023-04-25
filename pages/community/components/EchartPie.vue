<template>
  <div :id="echartsId" class="w-[300px] md:w-[350px] h-[300px] md:h-[350px]"></div>
</template>
<script setup>
import * as echarts from 'echarts';
import { onMounted, toRefs } from "vue";

const props = defineProps({
  echartsData: Array,
  echartsId: {
    type:String,
    required:true
  },
  titleText: {
    type:String,
    required:true
  },
});
const { echartsData, echartsId, titleText } = toRefs(props);

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(echartsId.value));
  // 绘制图表
  myChart.setOption({
    title: {
      text: titleText.value,
      subtext: '',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      show: false,
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: echartsData.value,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  });
})



</script>
<style scoped lang="less"> 

</style>