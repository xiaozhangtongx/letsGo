<!--
 * @Description: 地图层
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-12-29 22:53:41
-->
<template>
  <div id="container"></div>
</template>

<script>
export default {
  data() {
    return {
      ships: [],
    }
  },
  mounted() {
    var map = new AMap.Map('container', {
      zoom: 6,
    })
    var map,
      route,
      //基本地图加载
      map = new AMap.Map('container', {
        resizeEnable: true,
      })
    //绘制初始路径
    var path = []
    path.push([114.31158155, 30.59846674])
    path.push([119.981249, 30.195636])
    path.push([116.393776, 40.000106])
    map.plugin('AMap.DragRoute', function () {
      route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE) //构造拖拽导航类
      route.search() //查询导航路径并开启拖拽导航
    })
  },
}
</script>

.<style lang="less" scoped>
#container {
  width: 100%;
  height: 65vh;
  border-radius: 5px;
}
</style>
