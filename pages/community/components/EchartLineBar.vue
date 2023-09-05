<template>
  <div :id="echartsId" class="w-[300px] md:w-[800px] h-[300px] md:h-[600px]"></div>
</template>
<script setup>
import * as echarts from 'echarts';
import { onMounted, toRefs } from "vue";

const props = defineProps({
  echartsId: {
    type:String,
    required:true
  },
});
const { echartsId } = toRefs(props);
const colors = ['#5C64FF', '#91CC75'];

const device = useDevice()
const isMobile = device.value.isMobile;
const xAxisData = ref(['Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21', 'Oct-21', 'Nov-21', 'Dec-21', 'Jan-22', 'Feb-22', 'Mar-22', 'Apr-22', 'May-22','Jun-22','Jul-22','Aug-22','Sep-22','Oct-22','Nov-22','Dec-22','Jan-23','Feb-23','Mar-23','Apr-23']);
const monthAbbr = ref(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
const baseNumber = ref(189649);
const monthlyGrowthData = ref([ 0, 15175, 9911, 7854, 9509, 9723, 9856, 6991, 6442, 3932, 8875, 13165, 11696, 13010, 16297, 15475, 13356, 15212, 11390, 12535, 7915, 4814, 3771, 4300, 2863 ,2400 , 3600, 79117,8621]) 
const totalNumber = ref([]);
const baseYear = ref(2023);
const baseMonth = ref(4);

onMounted(() => {
  setGrowthData();
  setEchartInit();
})

const setGrowthData = () => {
  const timeOne = new Date()
  const year = timeOne.getFullYear();
  // const month = timeOne.getMonth(); //不显示当前月份数据
  const month = 8; //数组需要手动赋值，同时赋值月份
  let yearAbbr = year.toString().substring(2, 4);
  if (year === baseYear.value && month > baseMonth.value || year > baseYear.value) {
    if (year > baseYear.value) {
      let tempYear = year - baseYear.value;
      for (let i = 0; i <= tempYear; i++) {
        yearAbbr = (baseYear.value + i).toString().substring(2, 4);
        if (i === 0) {
          setNewData(baseMonth.value, 12, yearAbbr);
        } else if(i === tempYear){
          setNewData(0, month, yearAbbr);
        } else {
          setNewData(0, 12, yearAbbr);
        }
      }
    } else { 
      setNewData(baseMonth.value, month, yearAbbr);
    }
    setTotalNumber();
    let tempMonth = (year - baseYear.value) * 12 + (month - baseMonth.value);
    monthlyGrowthData.value.splice(0, tempMonth)
    xAxisData.value.splice(0, tempMonth)
    totalNumber.value.splice(0, tempMonth)
  } else {
    setTotalNumber();
  }
}

const setNewData = (start, end, yearAbbr) => {
  for (let i = start; i < end; i++) {
    xAxisData.value.push(monthAbbr.value[i] + '-' + yearAbbr);
    //每月提供具体数据，不需要计算
    // let random = (Math.random() * (1.3 - 0.7) + 0.7).toFixed(1);
    // monthlyGrowthData.value.push(parseInt(3000*random));
  }
}

const setTotalNumber = () => {
  let total = baseNumber.value;
  monthlyGrowthData.value.forEach((ele, index) => {
    total += ele;
    totalNumber.value.push(total);
  });
}

const setShowNumber = (value) => {
  let valLen = value.toString().length;
  if (value.toString().length > 3) {
    return value.toString().substring(0,valLen-3) + 'K';
  } else {
    return value;
  }
}

const setEchartInit = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(echartsId.value));
  // 绘制图表
  myChart.setOption({
    color: colors,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    grid: {
      right: isMobile ? "16%": "10%",
      left: isMobile ? "16%": "6%"
    },
    toolbox: {
      feature: {
        dataView: { show: false, readOnly: false },
        restore: { show: false },
        saveAsImage: { show: false }
      }
    },
    legend: {
      width: 'auto', //图例宽度
      height: 'auto', //图例高度
      data: ['Total Developers','Monthly growth']
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        // prettier-ignore
        data: xAxisData.value
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Monthly growth',
        position: 'right',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[0]
          }
        },
        axisLabel: {
          // formatter: '{value}'
          formatter: function (value, index) {
            return setShowNumber(value);
          }
        }
      },
      {
        type: 'value',
        name: 'Total Developers',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[1]
          }
        },
        axisLabel: {
          // formatter: '{value}'
          formatter: function (value, index) {
            return setShowNumber(value);
          }
        }
      }
    ],
    series: [
      {
        name: 'Monthly growth',
        type: 'bar',
        data: monthlyGrowthData.value,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#BDB2FB' },
            { offset: 1, color: '#5C64FF' }
          ])
        },
      },
      {
        name: 'Total Developers',
        type: 'line',
        yAxisIndex: 1,
        data: totalNumber.value,
        itemStyle: {
          color: colors[1]
        },
      }
    ]
  });
  window.onresize = function () { // 自适应大小
    myChart.resize();
  };
}

</script>
<style scoped lang="less"> 

</style>