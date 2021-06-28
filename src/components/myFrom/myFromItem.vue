<template>
  <div class="my-from-item">
    <label v-if="label" class="item-label">{{label}}</label>
    <slot></slot>
    <div  v-if="error" class="msg">{{error}}</div>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      error:''
    }
  },
   mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      const rules = this.form.rules[this.prop];
      const value = this.form.model[this.prop];
      const schema = new Schema({[this.prop]: rules});
      return schema.validate({[this.prop]: value}, errors => {
        if (errors) {
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      })
    }
  }
}
</script>

<style>
.my-from-item{
  margin-bottom: 10px;
}
.item-label{
  display: inline-block;
}
  .msg{
    color: red;
    font-size: 12px;
  }
</style>