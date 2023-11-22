<template>
  <div class="about">
    <el-row :gutter="20">
      <el-col :span="11">
        <div class="grid-content bg-purple">
          <el-input
            type="textarea"
            :autosize="{ minRows: 40}"
            placeholder="请输入内容"
            v-model="textarea1">
          </el-input>
        </div>
      </el-col>
      <el-col :span="11">
        <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
          <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
        <div class="grid-content bg-purple">
          <div v-if="!useExternal">
            <el-input
              type="textarea"
              :autosize="{ minRows: 40}"
              placeholder="请输入内容"
              v-model="textarea3">
            </el-input>
          </div>
          <div v-else>
            <About :extern_data="this.textarea3"/>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import 'vue-json-viewer/style.css'

  export default {
    name: 'SecretPage',
    data() {
      return {
        numberValidateForm: {
          age: ''
        },
        textarea1: '',
        textarea3: '',
        useExternal: false,
        textExt: `{"aa":1}`,
        content: "使用JsonViewer"
      };
    },
    methods: {
      resetForm: function () {
        this.textarea3 = ''
        this.textarea1 = ''
      },
      submitForm: function () {
        console.log(`textarea1: ${this.textarea1}`)
        const data = {
          crypt: this.textarea1
        }
        this.axios({
          url: '/api2/decrypt',
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        }).then(resp => {
          let resp_data = resp.data
          this.textarea3 = resp_data.result
        }).catch(error => console.log(`error => ${error}`))
      }
    }
  }
</script>
