
<template>
<!-- learn css layout -->
<!-- https://zh.learnlayout.com/index.html -->
<!-- learn css layout -->
  <div id="lay">
    <!-- <h1>blog {{laymsg}}</h1> -->
    <div id="mp">
      <MainPlant/>
    </div>
    <div id="calendar">
      <Calendar/>
    </div>
    <div class="fitem">
      <Summary/>
    </div>
  </div>
</template>

<script>
import MainPlant from '@/components/MainPlant.vue'
import Calendar from '@/components/Calendar.vue'
import Summary from '@/components/Summary.vue'

export default {
  name: 'layout',
  props: {
    laymsg: String
  },
  components: {
    MainPlant,
    Calendar,
    Summary
  }
}
</script>

<style>
  #mp {
    max-width: 600px;
    margin: 0 auto;
  }
  #calendar {
    max-width: 400px;
    max-height: 200px;
    float: right;
    margin: 0 0 1em 1em;
  }
</style>
