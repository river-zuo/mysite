<template>
  <div id="calendar">
    <el-calendar v-model="value">

    </el-calendar>
  </div>
</template>

<script>
export default {
    name: 'calendar',
    data() {
      return {
        value: new Date()
      }
    },
    watch: {
      value: function(newV, oldV) {
        console.log(`oldV is:[${oldV}], newV is:[${newV}]`)
      }
    }
}
</script>

<style scoped>
  
</style>
