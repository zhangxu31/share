import OriginData from '../components/NetDiagnose/OriginData.vue'
import EditRow from '../components/NetDiagnose/EditRow.vue'
import Navigator from '../components/Home/Navigator.vue'
import testTree from '../components/TreeMenu/testTree.vue'
import treeGraph from '../components/TreeMenu/treeGraph.vue'

/* module.exports = [
  {
    path: '/',
    component: OriginData
  },
  {
    path: '/test/edit/:row_index',
    name: 'edit',
    component: EditRow
  }
] */

let netRoutes = [
  {
    path: '/net/',
    name: 'diagnose',
    component: OriginData
  },
  {
    path: '/net/edit/:row_index',
    name: 'edit',
    component: EditRow
  }
]

let otherRoutes = [
  {
    path: '/',
    name: 'home',
    component: Navigator
  }
]

let treeRoutes = [
  {
    path: '/tree/',
    name: 'testTree',
    component: testTree
  }
]

let treeGraphRoutes = [
  {
    path: '/treeGraph/',
    name: 'treeGraph',
    component: treeGraph
  }
]

export { netRoutes, otherRoutes, treeRoutes, treeGraphRoutes }
