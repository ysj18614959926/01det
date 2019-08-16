import Main from '@/components/main'
import parentView from '@/components/parent-view'
/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '',
    name: 'k8s管理',
    redirect: '/home',
    component: Main,
    meta: {
      icon: 'ios-stats',
      title: '集群管理'
    },
    children: [
      {
        path: '/home',
        name: '集群定义',
        meta: {
          icon: 'md-add',
          title: 'definition'
        },
        component: () => import('@/view/definition/index.vue')
      },
      {
        path: '/deploy',
        name: '集群部署',
        meta: {
          icon: 'md-add',
          title: 'deploy'
        },
        component: () => import('@/view/deploy/index.vue')
      },
      {
        path: '/habor',
        name: 'habor(app)',
        meta: {
          icon: 'md-add',
          title: 'haborApp'
        },
        component: () => import('@/view/habor/index.vue')
      }
    ]
  },
  {
    path: '/machine-manage',
    name: '机器管理',
    meta: {
      icon: 'ios-stats',
      title: '多级菜单'
    },
    component: Main,
    children: [
      {
        path: '',
        name: 'info',
        meta: {
          access: ['super_admin'],
          icon: 'md-add',
          showAlways: true,
          title: '二级-2'
        },
        component: parentView,
        children: [
          {
            path: 'asset-info',
            name: '机器资产信息',
            meta: {
              icon: 'md-add',
              title: '三级'
            },
            component: () => import('@/view/machine-manage/asset-info.vue')
          },
          {
            path: 'single-asset-info',
            name: '单机资产信息',
            meta: {
              icon: 'md-add',
              title: '三级'
            },
            component: () => import('@/view/machine-manage/single-asset-info.vue')
          },
          {
            path: 'machine-import',
            name: '机器导入页面',
            meta: {
              icon: 'md-add',
              title: '三级'
            },
            component: () => import('@/view/machine-manage/machine-import.vue')
          }
        ]
      },
      {
        path: 'machine-group',
        name: '机器group管理',
        meta: {
          access: ['super_admin'],
          icon: 'md-add',
          showAlways: true,
          title: '二级-2'
        },
        component: parentView,
        children: [
          {
            path: 'machine-check',
            name: '机器选择',
            meta: {
              icon: 'md-add',
              title: '三级'
            },
            component: () => import('@/view/machine-manage/machine-check.vue')
          },
          {
            path: 'add-group',
            name: '添加group',
            meta: {
              icon: 'md-add',
              title: '三级'
            },
            component: () => import('@/view/machine-manage/add-group.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
