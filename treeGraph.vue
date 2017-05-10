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
        treeData : [
        {
          "name": "Top Level",
          "parent": "null",
          "children": [
            {
              "name": "Level 2: A",
              "parent": "Top Level",
              "children": [
                {
                  "name": "Son of A",
                  "parent": "Level 2: A"
                },
                {
                  "name": "Daughter of A",
                  "parent": "Level 2: A"
                }
              ]
            },
            {
              "name": "Level 2: B",
              "parent": "Top Level"
            }
          ]
        }
      ]
      }
    },
    mounted () {
      this.init();
    },
    methods: {

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

