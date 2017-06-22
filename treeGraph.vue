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
    <div>
      <d3tree id="treeGraph" ref="tree" :data="treeData">
      </d3tree>
    </div>
  </div>
</template>
<script>
  import D3tree from './svg/subtree.vue'
  export default {
    data () {
      return {
        formInline: {
          item1: '',
          item2: ''
        },
        treeData: {
          "name": "Top Level",
          "children": [
            {
              "name": "Level 2: A",
              "children": [
                { "name": "Son of A" },
                { "name": "Daughter of A" }
              ]
            },
            { "name": "Level 2: B" }
          ]
        }
      }
    },
    components: {
      D3tree
    },
    mounted () {
    },
    methods: {

    }
  }
</script>
<style>
.node circle {
  fill: #fff;
  stroke: steelblue;
  stroke-width: 3px;
}

.node text { font: 12px sans-serif; }

.node--internal text {
  text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
}

.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 2px;
}
</style>

