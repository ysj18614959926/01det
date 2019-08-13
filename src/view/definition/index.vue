<template>
    <div>
        <div class="content">
            <div class="left">
              <i-form :model="formItem" :label-width="150">
                <Form-item label="名称:">
                  <i-input :value.sync="formItem.name" placeholder="请输入"></i-input>
                </Form-item>
                <Form-item label="k8s版本:">
                  <i-select :model.sync="formItem.version">
                    <i-option value="1.13.7" selected="selected">1.13.7(default)</i-option>
                    <i-option value="1.12.0">1.12.0</i-option>
                  </i-select>
                </Form-item>
                <Form-item label="docker版本:">
                  <i-select :model.sync="formItem.dockerVersion">
                    <i-option value="1.13.7" selected="selected">1.13.7(default)</i-option>
                    <i-option value="1.12.0">1.12.0</i-option>
                  </i-select>
                </Form-item>
                <Form-item label="docker部署路径:">
                  <i-input :value.sync="formItem.dockerPath" placeholder="请输入"></i-input>
                </Form-item>
                <Form-item>
                    <Radio :model.sync='formItem.registry'>外部registry</Radio>
                </Form-item>
                <Form-item label="http://">
                      <i-input :value.sync="formItem.url" placeholder="请输入"></i-input>
                </Form-item>
              </i-form>
            </div>
            <div class="right">
              <i-form :model="formItem" :label-width="180">
                <Form-item label="master集群:">
                  <i-select :model.sync="formItem.masterCluster">
                    <i-option value="machine-k8s-master0" selected="selected">machine-k8s-master0</i-option>
                    <i-option value="machine-k8s-gpu0" selected="selected">machine-k8s-gpu0</i-option>
                  </i-select>
                </Form-item>
                <Form-item label="slave集群：">
                  <i-select :model.sync="formItem.slaveCluster">
                    <i-option value="machine-k8s-master0" selected="selected">machine-k8s-master0</i-option>
                    <i-option value="machine-k8s-gpu0" selected="selected">machine-k8s-gpu0</i-option>
                  </i-select>
                </Form-item>
                <Form-item>
                    <Radio :model.sync='formItem.registry'>启用GPU</Radio>
                </Form-item>
                <Form-item label="GPU集群:">
                    <i-select :model.sync="formItem.gpuCluster">
                        <i-option value="machine-k8s-master0" selected="selected">machine-k8s-master0</i-option>
                        <i-option value="machine-k8s-gpu0" selected="selected">machine-k8s-gpu0</i-option>
                    </i-select>
                </Form-item>
                <Form-item label="网络:">
                    <i-select :model.sync="formItem.network">
                        <i-option value="A" selected="selected">A</i-option>
                        <i-option value="B" selected="selected">B</i-option>
                        <i-option value="C" selected="selected">C</i-option>
                    </i-select>
                </Form-item>
                <Form-item label="service-cluster-ip-range：">
                    <i-input :value.sync="formItem.ip" placeholder="请输入"></i-input>
                </Form-item>
                <Form-item label="kube_pods_subnet：">
                    <i-input :value.sync="formItem.subnet" placeholder="请输入"></i-input>
                </Form-item>
                <Form-item label="nodeport范围：">
                    <i-input :value.sync="formItem.nodeport" placeholder="请输入"></i-input>
                </Form-item>
                <Form-item>
                    <Radio :model.sync='formItem.registry'>启用ingress</Radio>
                </Form-item>
              </i-form>
            </div>
        </div>
        <div class="action">
            <i-button type="ghost" style="color: #666" size='large'>取消</i-button>
            <i-button type="ghost" style="color: #666" size='large'>确定</i-button>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      formItem: {
        name: 'k8s-cluster-0',
        version: '1.13.7(default)',
        dockerVersion: '1.13.7(default)',
        dockerPath: '',
        registry: false,
        url: '',
        masterCluster: '',
        slaveCluster: '',
        gpuCluster: '',
        network: 'A',
        ip: '10.254.0.0/16',
        subnet: '10.233.64.0/18',
        nodeport: ''
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
      padding-left: 20px;
      border-right: 1px solid #ccc;
      flex: 4;
      padding-right: 40px;
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
      flex: 6;
      margin-right: 40px;
      /* padding-left: 40px; */
      Form-item {
        height: 20px;
      }
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

</style>
