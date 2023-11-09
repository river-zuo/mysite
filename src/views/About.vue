<template>
  <div class="about">
    <json-viewer
      :value="JSON.parse(jdata)"
      :expand-depth="5"
      copyable
      :show-array-index=false
    ></json-viewer>

  </div>
</template>

<script>
import 'vue-json-viewer/style.css'
export default {
  name: 'AboutPage',
  data() {
    return {
      jdata: this.extern_data
    }
  },
  props: {
    "extern_data": {type: String, default: `{}`}
  }
}
</script>
