<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-09 15:49:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-10 21:01:46
 -->
<template>
  <div class="clientwrap">
    <From />
  </div>
</template>

<script>

import From from './from'
export default {
  components: {
    From
  },
  data() {
    return {
      value1: '',
      value2: ''
    }
  },
  mounted() {}
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.el-range-editor.el-input__inner {
  width: 200px;
  margin-left: 20px;
  height: 32px;
}
.input-class {
  color: red;
  width: 200px;
}
.clientwrap {
  width: 100%;
  height: auto;
}
.el-form-item {
  margin-bottom: 0;
}
.el-date-editor.el-input.el-input--default.el-input--prefix.el-input--suffix.el-date-editor--date {
  width: 200px;
}
.MaxMinBox {
  width: auto;
  display: inline-block;
  margin-left: 18px;
}
.MaxMinBox .el-input {
  width: 94px;
  margin-left: 2px;
}
.topInputList {
  width: 100%;
  height: auto;
  font-size: 12px;
  margin-left: 10px;
  margin-top: 20px;
}
.translate-wrap {
  display: inline-block;
  width: 25%;
  margin-top: 10px;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
}
.translate-box {
  display: inline-block;
}
.el-form-item__content {
  line-height: 18px;
}
.translate-box label {
  width: 110px;
  text-align: right;
  padding-right: 10px;
  font-size: 12px;
  color: #495060;
  font-weight: 500;
  display: inline-block;
}
.el-input {
  width: 200px;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  margin-left: 20px;
}
.timeSelece {
  width: 524px;
  height: 258px;
}
.el-input input {
  display: inline-block;
  width: 100%;
  height: 32px;
  line-height: 1.5;
  padding: 4px 7px;
  font-size: 12px;
  border: 1px solid #dddee1;
  border-radius: 4px;
  color: #495060;
  background-color: #fff;
  background-image: none;
  position: relative;
  cursor: text;
  transition: border 0.2s ease-in-out, background 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;
  outline: none;
}
.el-input input:hover {
  border-color: gold;
}
</style>
