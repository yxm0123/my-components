<template>
  <div>
    <myFrom :model="fromData" :rules="rules" ref="rulesFrom">
      <myFromItem label="用户名" prop="userName">
        <myInput type="type" v-model="fromData.userName" placeholder="请输入用户名"></myInput>
      </myFromItem>
      <myFromItem label="密码" prop="passWord">
        <myInput type="type" v-model="fromData.passWord" placeholder="请输入密码"></myInput>
      </myFromItem>
      <myFromItem>
        <button @click="submit">提交</button>
      </myFromItem>
    </myFrom>
  </div>
</template>

<script>
import myInput from './myInput.vue';
import myFromItem from './myFromItem.vue';
import myFrom from './myFrom.vue';
// import create from '../../utils/create.js';
// import Notic from '../Notic.vue'

export default {
  inheritAttrs: false,
  components: {
    myInput,
    myFromItem,
    myFrom

  },
  data() {
    return {
      type: '',
      label: '用户名',
      fromData: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [{ required: true, message: "请输入用户名" }],
        passWord: [{ required: true, message: "请输入密码" }]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.rulesFrom.validate(isValid => {
        this.$notice({
          title:'消息提示',
          message: isValid? '成功':'失败',
        }).show()
        // create(Notic, {
        //   title:'消息提示',
        //   message: isValid? '成功':'失败',
        // }).show()
      })
    }
  }

}
</script>

<style>

</style>