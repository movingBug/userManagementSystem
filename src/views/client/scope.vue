<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-10 19:51:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-10 20:00:10
 -->
<template>
  <div class="MaxMinBox">
    <el-input v-model="data.model" :placeholder="data[0].pls" />
    <span>-</span>
    <el-input v-model="data.model" :placeholder="data[1].pls" />
  </div>
</template>
<script>
export default {
  name: 'Scope',
  props: {
    data: Array
  }
}
</script>

<style>
</style>
