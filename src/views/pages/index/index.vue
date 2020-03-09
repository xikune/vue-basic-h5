<template>
  <div class="home">
    <img alt="Vue logo"
         src="assets/logo.png">
    <!-- <div>
      <input type="text"
             v-both:dd="inputValue"
             placeholder="请输入"></div>
    <div>
      <van-button plain
                  hairline
                  type="info"
                  @click="changeInputvalue">修改</van-button>
      <van-button plain
                  hairline
                  type="info"
                  @click="printInputvalue">输出</van-button>
    </div>
    <div><input type="text"
             :value="getValue()"
             placeholder="请输入"></div> -->
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      inputValue: '55'
    }
  },
  watch: {
    inputValue (newV) {
      console.log('inputValue changed', newV)
    }
  },
  created () {
    // axios.get('/mock/user').then((res) => {
    //   console.log(res);
    // });
    // axios.get('/mock/home').then((res) => {
    //   console.log(res);
    // });
    // axios.get('/api/users').then((res) => {
    //   console.log(res);
    // });
  },
  methods: {
    changeInputvalue () {
      this.inputValue = '666666'
    },
    printInputvalue () {
      console.log(this.inputValue)
      console.log(this.v_both_inputValue)
    },
    getValue () {
      return '111'
    }
  }
}
</script>
