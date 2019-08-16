<template>
    <div>
        <upload-excel></upload-excel>
        <Table :columns="tableHead" :data="data1"></Table>
    </div>
</template>
<script>
import uploadExcel from '@/components/upload-excel/index.vue'
export default {
  components: {
    uploadExcel
  },
  data () {
    return {
      // 表头数据
      tableHead: [
        {
          title: '机器名',
          key: 'name'
        },
        {
          title: '机器IP',
          key: 'ip'
        },
        {
          title: 'cpu',
          key: 'cpu'
        },
        {
          title: 'mem',
          key: 'mem'
        },
        {
          title: 'disk',
          key: 'disk'
        },
        {
          title: 'ssd',
          key: 'ssd'
        },
        {
          title: 'gpu',
          key: 'gpu'
        },
        {
          title: '网卡',
          key: 'nic'
        },
        {
          title: '加密卡',
          key: 'ndec'
        },
        {
          title: '编辑',
          key: 'edit',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '修改'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      // 表格中模拟数据
      data1: [{
        name: 'host1',
        ip: '192.168.1.2',
        cpu: 'cpu1',
        mem: 'mem1',
        disk: 'disk1',
        ssd: 'ssd1',
        gpu: 'gpu1',
        nic: 'nic1',
        ndec: 'ndec1' // 加密卡
      },
      {
        name: 'host2',
        ip: '192.168.1.3',
        cpu: 'cpu2',
        mem: 'mem2',
        disk: 'disk2',
        ssd: 'ssd2',
        gpu: 'gpu2',
        nic: 'nic2',
        ndec: 'ndec2', // 加密卡
        edit: '编辑'
      },
      {
        name: 'host2',
        ip: '192.168.1.3',
        cpu: 'cpu2',
        mem: 'mem2',
        disk: 'disk2',
        ssd: 'ssd2',
        gpu: 'gpu2',
        nic: 'nic2',
        ndec: 'ndec2', // 加密卡
        edit: '编辑'
      },
      {
        name: 'host2',
        ip: '192.168.1.3',
        cpu: 'cpu2',
        mem: 'mem2',
        disk: 'disk2',
        ssd: 'ssd2',
        gpu: 'gpu2',
        nic: 'nic2',
        ndec: 'ndec2', // 加密卡
        edit: '编辑'
      },
      {
        name: 'host2',
        ip: '192.168.1.3',
        cpu: 'cpu2',
        mem: 'mem2',
        disk: 'disk2',
        ssd: 'ssd2',
        gpu: 'gpu2',
        nic: 'nic2',
        ndec: 'ndec2', // 加密卡
        edit: '编辑'
      },
      {
        name: 'host2',
        ip: '192.168.1.3',
        cpu: 'cpu2',
        mem: 'mem2',
        disk: 'disk2',
        ssd: 'ssd2',
        gpu: 'gpu2',
        nic: 'nic2',
        ndec: 'ndec2', // 加密卡
        edit: '编辑'
      },
      {
        name: 'host2',
        ip: '192.168.1.3',
        cpu: 'cpu2',
        mem: 'mem2',
        disk: 'disk2',
        ssd: 'ssd2',
        gpu: 'gpu2',
        nic: 'nic2',
        ndec: 'ndec2', // 加密卡
        edit: '编辑'
      },
      {
        name: 'host2',
        ip: '192.168.1.3',
        cpu: 'cpu2',
        mem: 'mem2',
        disk: 'disk2',
        ssd: 'ssd2',
        gpu: 'gpu2',
        nic: 'nic2',
        ndec: 'ndec2', // 加密卡
        edit: '编辑'
      },
      {
        name: 'host2',
        ip: '192.168.1.3',
        cpu: 'cpu2',
        mem: 'mem2',
        disk: 'disk2',
        ssd: 'ssd2',
        gpu: 'gpu2',
        nic: 'nic2',
        ndec: 'ndec2', // 加密卡
        edit: '编辑'
      }
      ]
    }
  },
  created () {
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      })
    },
    remove (index) {
      this.data6.splice(index, 1)
    }
  }
}
</script>
<style>
</style>
