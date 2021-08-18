
<template>
<!-- learn css layout -->
<!-- https://zh.learnlayout.com/index.html -->
<!-- learn css layout -->
  <div id="lay">
    <!-- <h1>blog {{laymsg}}</h1> -->
    <div class="fitem">
      <MainPlant/>
    </div>
    <div class="fitem">
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
  /* #lay {
    display: flex;
  } */
  .fitem {
    background-color: aquamarine;
    display: inline;
  }
</style>
