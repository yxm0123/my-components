<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide(){
    return {
      form: this
    }
  },
  props:{
    model: {
      type: Object,
      require: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate(cb) {
      const tasks = this.$children
      .filter(item => item.prop)
      .map(item => 
        item.validate()
      )
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  }
}
</script>

<style>

</style>