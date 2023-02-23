<template>
  <div class="home">
    <!-- <HelloWorld msg="testUse"/> -->
    <el-row>
      <el-col :span="2">
        时间戳:
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-input
          placeholder="请输入内容"
          v-model="input"
          clearable>
        </el-input>
        </div>
      </el-col>
      <el-button v-on:click="convertTimestamp">转换(长度=>{{input_len}})</el-button>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          {{output}}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// const axios = require('axios').default;

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      input: '',
      output: ''
    }
  },
  computed: {
    input_len: function() {
      return this.input.length
    }
  },
  methods: {
    convertTimestamp: function () {
      console.log(`input -> ${this.input}`)
      // this.axios.get('http://localhost:3300/aaa/cccc?a=1&c=2&time-type=1&time-str=2')
      this.axios.get(`/api/aaa/cccc?a=1&c=2&time-type=1&time-str=${this.input}`)
      .then(resp => {
        console.log(`resp -> ${JSON.stringify(resp)}`)
        console.log(`resp.dat -> ${resp.data}`)
        this.output = resp.data
      })
      .catch(error => console.log(`error => ${error}`))
      .then(() => console.log('always exec...'))
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