<template>
  <div>
    <el-row :gutter="20">
     <el-col :span="11"><div class="grid-content bg-purple">
       <el-input
      type="textarea"
      :autosize="{ minRows: 40}"
      placeholder="请输入内容"
      v-model="textarea1">
    </el-input>
       </div></el-col>
  <el-col :span="2">
    <div class="grid-content bg-purple">
      <el-button v-on:click="reverseMessage">json格式化</el-button>
    </div>
    <div class="grid-content bg-purple">
      <el-button v-on:click="strMessageToJson">字符串json</el-button>
    </div>
  </el-col>
  <el-col :span="11">
    <div class="grid-content bg-purple">
      <el-input
      type="textarea"
      :autosize="{ minRows: 40}"
      placeholder="请输入内容"
      v-model="textarea3">
  </el-input>
    </div>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'JsonFormat',
  data() {
    return {
      textarea1: '',
      textarea3: ''
    }
  },
  methods: {
    reverseMessage: function () {
      let jsonP = JSON.parse(this.textarea1)
      this.textarea3 = JSON.stringify(jsonP, null, 4)
      // jText = JSON.parse(jText);
      //     var inner_json_format = JSON.stringify(jText, null, 4);
      //     json_out.textContent = inner_json_format;
    },
    strMessageToJson: function () {
      console.log(`input -> ${this.textarea1}`)
      this.axios({
        url: '/api/aaa/cccc?json-str=111',
        method: 'post',
        headers: {
          'Content-Type': 'plain/text'
        },
        data: this.textarea1
      }).then(resp => {
        let resp_data = resp.data
        this.textarea3 = JSON.stringify(resp_data, null, 4)
      }).catch(error => console.log(`error => ${error}`))
      // // this.axios.get(`/api/aaa/cccc?json-str=111`)
      // .then(resp => {
      //   console.log(`resp -> ${JSON.stringify(resp)}`)
      //   console.log(`resp.dat -> ${resp.data}`)
      //   this.output = resp.data
      // })
      // .catch(error => console.log(`error => ${error}`))
      // .then(() => console.log('always exec...'))
    }
  }
}
</script>

<style>
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>