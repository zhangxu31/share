<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline numen-margin">
      <el-form-item>
        <el-select v-model="formInline.item1" placeholder="条件一">
          <el-option label="选项一" value="shanghai"></el-option>
          <el-option label="选项二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="formInline.item2" placeholder="条件二">
          <el-option label="选项一" value="shanghai"></el-option>
          <el-option label="选项二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div id="treeGraph">

    </div>
  </div>
</template>
<script>
  import * as d3 from 'd3';
  export default {
    data () {
      return {
        formInline: {
          item1: '',
          item2: ''
        },
        dataset : [10, 20, 30, 40, 33, 24, 12, 5],
        rectHeight : 25,
        width: 300,
        height: 300
      }
    },
    mounted () {
      this.init();
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      },
      init () {
        let vm = this;
        let rectPadding = 4;
        let padding = {left:30, right:30, top:20, bottom:20};

        // 创建画布
        let svg = d3.select("#treeGraph")     //选择文档中的body元素
          .append("svg")
          .attr("width", this.width)       //设定宽度
          .attr("height", this.height);    //设定高度

        //x轴的比例尺
        let xScale = d3.scaleBand()
            .domain(d3.range(vm.dataset.length))
            .range([0, this.width - padding.left - padding.right]);
        //y轴的比例尺
        let yScale = d3.scaleLinear()
            .domain([0,d3.max(vm.dataset)])
            .range([this.height - padding.top - padding.bottom, 0]);

        //定义x轴
        let xAxis = d3.axisBottom()
            .scale(xScale);

        //定义y轴
        let yAxis = d3.axisLeft()
            .scale(yScale);

        //添加矩形元素
        let rects = svg.selectAll(".MyRect")
            .data(vm.dataset)
            .enter()
            .append("rect")
            .attr("class","MyRect")
            .attr("transform","translate(" + padding.left + "," + padding.top + ")")
            .attr("x", function(d,i){
                return xScale(i) + rectPadding/2;
            } )
            .attr("y",function(d){
                return yScale(d);
            })
            .attr("width", xScale.bandwidth() - rectPadding )
            .attr("height", function(d){
                return vm.height - padding.top - padding.bottom - yScale(d);
            })
            .attr("fill","steelblue")
            .on("click",function(){
              d3.select(this).attr("fill","red");
            });

        //添加文字元素
        let texts = svg.selectAll(".MyText")
            .data(vm.dataset)
            .enter()
            .append("text")
            .attr("class","MyText")
            .attr("transform","translate(" + padding.left + "," + padding.top + ")")
            .attr("x", function(d,i){
                return xScale(i) + rectPadding/2-5;
            } )
            .attr("dx",function(){
                return (xScale.bandwidth() - rectPadding)/2;
            })
            .attr("dy",function(d){
                return 20;
            })
            .text(function(d){
                return d;
            })
            .attr("y",function(d){
                let min = yScale.domain()[0];
                return yScale(min);
            })
            .transition()
            .delay(function(d,i){
                return i * 200;
            })
            .duration(2000)
            .ease(d3.easeLinear)
            .attr("y",function(d){
                return yScale(d);
            });

        //添加x轴
        svg.append("g")
          .attr("class","axis")
          .attr("transform","translate(" + padding.left + "," + (this.height - padding.bottom) + ")")
          .call(xAxis);

        //添加y轴
        svg.append("g")
          .attr("class","axis")
          .attr("transform","translate(" + padding.left + "," + padding.top + ")")
          .call(yAxis);

      }
    }
  }
</script>
<style lang="scss">
  .demo-form-inline {
    .el-input {
      width: 100px;
    }
  }
.axis path,
.axis line{
    fill: none;
    stroke: black;
    shape-rendering: crispEdges;
}
.axis text {
    font-family: sans-serif;
    font-size: 11px;
}
</style>

