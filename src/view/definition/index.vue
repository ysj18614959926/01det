<template>
    <div>
        <div class="content">
            <div class="left">
              <i-form :model="form_item" :label-width="120">
                <Form-item label="*名称:">
                  <Input v-model="form_item.name" placeholder="k8s-cluster-0"></Input>
                </Form-item>
                <Form-item label="*k8s版本:">
                    <Select v-model="form_item.version" :placeholder='k8sVersion[0]'>
                        <Option :value="item" v-for='item in k8sVersion' :key='item'>{{item}}</Option>
                        <!-- <Option value="1.12.0">1.12.0</Option> -->
                    </Select>
                </Form-item>
                <Form-item label="*docker版本:">
                    <Select v-model="form_item.dockerVersion" :placeholder='form_item.dockerVersion'>
                        <Option value="1.13.7">1.13.7(default)</Option>
                        <Option value="1.12.0">1.12.0</Option>
                    </Select>
                </Form-item>
                <Form-item label="*docker部署路径:">
                    <Input v-model="form_item.dockerPath" placeholder="请输入"></Input>
                </Form-item>
              </i-form>
            </div>
            <div class="right">
              <i-form :model="form_item" :label-width="120">
                <Form-item label="*master节点组:">
                    <Select v-model="form_item.masterCluster">
                        <Option value="machine-k8s-master0">machine-k8s-master0</Option>
                        <Option value="machine-k8s-gpu0">machine-k8s-gpu0</Option>
                    </Select>
                </Form-item>
                <Form-item label="*node节点组：">
                    <Select v-model="form_item.nodeCluster">
                        <Option value="machine-k8s-master0">machine-k8s-master0</Option>
                        <Option value="machine-k8s-gpu0">machine-k8s-gpu0</Option>
                    </Select>
                </Form-item>
                <Form-item label="*etcd节点组：">
                    <Select v-model="form_item.etcdCluster">
                        <Option value="machine-k8s-master0">machine-k8s-master0</Option>
                        <Option value="machine-k8s-gpu0">machine-k8s-gpu0</Option>
                    </Select>
                </Form-item>
                <Form-item label="gpu节点组:">
                    <Select v-model="form_item.gpuCluster">
                        <Option value="machine-k8s-master0">machine-k8s-master0</Option>
                        <Option value="machine-k8s-gpu0">machine-k8s-gpu0</Option>
                    </Select>
                </Form-item>
              </i-form>
            </div>
        </div>
        <div class="content bottom">
            <i-form :model="form_item" :label-width="160" class="left">
                <Form-item label="*网络类型:">
                    <Select v-model="form_item.network">
                        <Option value="flannel">flannel</Option>
                        <Option value="calico">calico</Option>
                    </Select>
                </Form-item>
                <Form-item label="*service-cluster-ip-range：">
                    <Input v-model="form_item.ip" placeholder="请输入"></Input>
                </Form-item>
                <Form-item label="*kube_pods_subnet：">
                    <Input v-model="form_item.subnet" placeholder="请输入"></Input>
                </Form-item>
            </i-form>
            <i-form :model="form_item" :label-width="120" class="right">
                <Form-item label="*kubelet_root_dir:">
                    <Input v-model="form_item.rootDir" placeholder="请输入"></Input>
                  </Form-item>
                <Form-item label="*nodeport范围：">
                    <Input v-model="form_item.nodeport" placeholder="请输入"></Input>
                </Form-item>
                <Form-item>
                  <template>
                    <Checkbox v-model="form_item.ingress">启用ingress</Checkbox>
                  </template>
                </Form-item>
            </i-form>
        </div>
        <div class="action">
          <i-button style="color: #666" size='large' @click='handelSubmit'>确定</i-button>
            <i-button style="color: #666" size='large'>取消</i-button>
        </div>

    </div>
</template>
<script>
export default {
  data () {
    return {
      form_item: {
        name: '',
        version: ['1.13.7', '1.12.0'],
        dockerVersion: '1.13.7',
        dockerPath: '',
        masterCluster: '',
        nodeCluster: '',
        etcdCluster: '',
        gpuCluster: '',
        network: 'flannel',
        ip: '10.254.0.0/16',
        subnet: '10.233.64.0/18',
        nodeport: '8000-32767',
        ingress: false,
        rootDir: ''
      },
      k8sVersion: ['1.13.7', '1.12.0']
    }
  },
  methods: {
    handelSubmit () {
      let sum = 0
      for (var key in this.form_item) {
        if (this.form_item[key] === '') {
          this.$Message.error(key + '不能为空', 1)
          sum++
        }
      }
      if (sum === 0) {
        console.log('发送请求')
      }
    }
  }
}

</script>

<style lang="less" scoped>
  .content {
    font-size: 14px;
    display: flex;
    .left {
      background-color: #FCFCFC;
      padding: 20px;
      margin-right: 10px;
      flex: 1;
      item {
        display: flex;
        width: 100%;

        label {
          flex: 3;
        }

        input {
          flex: 7;
          padding-left: 10px;
        }

      }

    }

    .right {
      padding: 20px;
      margin-left: 10px;
      background-color: #FCFCFC;
      flex: 1;
    }
  }
  .action {
      display: flex;
      justify-content: center;
      margin-right: 60px;
      button {
          padding:10px 30px;
          margin:30px;
      }
  }
  .bottom {
    margin-top: 20px;
    background-color: #FCFCFC;
  }
</style>
