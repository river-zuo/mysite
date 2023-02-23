<template>

  <div id="mp">
    mainplant
    <div id="editor">

    </div>
  </div>
</template>

<script>
import wangedit from 'wangeditor'
export default {
  name: 'mainplant',
  data: function() {
    return {
      content: '<p>html content</p>'
    }
  },
  methods: {
    setup(editor) {
      console.log(editor)
    }
  },
  mounted: function() {
    const editor = new wangedit('#editor')
    editor.create()
  }
}
</script>

<style scoped>
  
</style>
