<template>
  <div>
    <input :type="type" :value="value" v-bind="$attrs" @input="onInput">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default:''
    }
  },
  data() {
    return {

    }
  },
  methods:{
    onInput(e) {
      this.$emit('input', e.target.value)
      console.log(this.$parent, 56565)
       // 触发校验
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style>

</style>