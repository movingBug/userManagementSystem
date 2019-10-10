<template>
  <div class="tablePage">
    <div class="other-btn-group">
      <button type="button" class="ivu-btn ivu-btn-circle">
        <!---->
        <i class="ivu-icon ivu-icon-android-add">+</i>
        <span>新增客户</span>
      </button>
      <button type="button" class="ivu-btn ivu-btn-circle">
        <!---->
        <!---->
        <span>今日跟进</span>
      </button>
      <!---->
      <div class="vc-button-group" style="float: right;">
        <button type="button" class="ivu-btn ivu-btn-ghost ivu-btn-circle">
          <!---->
          <i class="ivu-icon ivu-icon-ios-search" />
          <span>搜索</span>
        </button>
        <button
          type="button"
          class="ivu-btn ivu-btn-ghost ivu-btn-circle"
          style="margin-left: 8px;"
        >
          <!---->
          <i class="ivu-icon ivu-icon-ios-refresh-empty" />
          <span>重置</span>
        </button>
      </div>
    </div>
    <div class="tableContainer">
      <el-table
        :data="tableData"
        style="width: 100%;text-align:center;background-color: #f8f8f9;"
        max-height="640"
        class="tableData"
      >
        <el-table-column fixed prop="name" label="姓名" width="140" />
        <el-table-column prop="institution" label="地址" width="300" />
        <el-table-column v-if="isAlphaIns" prop="isAlphaIns" label="是否是Apha律所" width="200">是</el-table-column>
        <el-table-column v-else prop="isAlphaIns" label="是否是Apha律所" width="200">否</el-table-column>
        <el-table-column prop="position" label="职务" width="160" />
        <el-table-column prop="lengthOfPractice" label="职业年限" width="100" />
        <el-table-column prop="mobilePhone" label="手机号" width="200" />
        <el-table-column prop="gmtModify" label="最后更新时间" width="260" />
        <el-table-column prop="province" label="区域" width="300" />
        <el-table-column prop="partnerInviteStatus" label="邀请状态" width="200" />
        <el-table-column prop="partnerInviter" label="邀请人" width="100" />
        <el-table-column prop="partnerInviteRecord" label="邀请记录" width="200" />
        <!-- 有问题 -->
        <el-table-column prop="partnerLastContactTime" label="计划跟进日期" width="150" />
        <el-table-column v-if="isAlphaUser" prop="isAlphaUser" label="Alpha用户" width="100">是</el-table-column>
        <el-table-column v-else prop="isAlphaUser" label="Alpha用户" width="100">否</el-table-column>
        <el-table-column prop="astLoginTime" label="Alpha用户最近登陆时间" width="300" />
        <el-table-column prop="monthReqTimesStr" label="近一个月的使用次数" width="300" />
        <el-table-column v-if="isIcourtStudent" prop="isIcourtStudent" label="iCourt学员" width="300">是</el-table-column>
        <el-table-column v-else prop="isIcourtStudent" label="iCourt学员" width="300">否</el-table-column>
        <el-table-column prop="courseCount" label="参加课程次数" width="300" />
        <el-table-column prop="isLawCourseOnline" label="是否线上法学院" width="300" />
        <el-table-column prop="isUsaStudent" label="美国行学员" width="300" />
        <el-table-column prop="isFutureLaw" label="是否未来律所" width="300" />
        <el-table-column prop="tags" label="标签" width="300" />
        <el-table-column prop="remark" label="邀请级别" width="300" />
        <el-table-column prop="decisionPoint" label="决策点" width="300" />
        <el-table-column prop="telephone" label="橙子手机" width="300" />
        <el-table-column prop="joinActivityPersonNum" label="Alpha用户数" width="300" />
        <el-table-column prop="birthdayYear" label="出生日期" width="300" />
        <el-table-column prop="lastContactTime" label="最后联系时间" width="300" />
        <el-table-column prop="partnerJoinActivityId" label="参加时间" width="300" />
        <el-table-column prop="partnerJoinActivityPersonNum" label="参加人数" width="300" />
        <el-table-column prop="partnerChatGroup" label="所在群" width="300" />
        <el-table-column prop="partnerRemark" label="备注" width="300" />

        <el-table-column fixed="right" label="操作" width="210">

          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
            >查看</el-button>
            <el-button
              type="text"
              size="small"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
            >编辑</el-button>
            <el-button
              type="text"
              size="small"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
            >我来邀请</el-button>
            <el-button
              type="text"
              size="small"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
            >分配</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        background
        style="width: 100%;text-align:right;margin-top:20px"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script>
// import { tableData } from '../../api/invitation'
import data from './mock/index'
export default {
  components: {},
  props: {},

  /** *
   * name  姓名
   * institution  所在机构
   * isAlphaIns   是否是Apha律所
   * position     职务
   * partnerInviterTime   职业年限
   * mobilePhone      手机号
   * gmtModify    最后更新时间
   * areas: province + city + area   区域
   * partnerInviteStatus  邀请状态
   * partnerInviter   邀请人
   * partnerInviteRecord  邀请记录
   * isAlphaUser       是否是Apher用户
   * astLoginTime     最近登陆的时间
   * monthReqTimesStr  近一月的使用次数
   * isIcourtStudent   是否是Icourt的学员
   * courseCount      参加课程的次数
   * isLawCourseOnline   是否线上法学院
   * isUsaStudent        美国行学员
   * isFutureLaw          是否未来律所
   * tags             标签
   * remark         级别
   * decisionPoint   决策点
   * telephone        橙子手机
   * joinActivityPersonNum  用户数
   * birthdayYear: null    出生日期
   * lastContactTime    最后联系时间
   * partnerInviterTime  参加时间
  //  * partnerJoinActivityId
   * partnerJoinActivityPersonNum 参加人数
   * partnerChatGroup   所在群
   * partnerRemark  合伙人备注
   * ** */
  data() {
    return {
      tableData: data,
      currentPage4: 4
    }
  },
  computed: {},
  created() {
    // tableData()
    console.log(data, 'data-----')
    // data.map((item,index)=>{
    //    return {
    //        keys:item.baseId,
    //        name:item.name
    //    }
    // })
  },

  mounted() {},
  methods: {
    deleteRow(index, rows) {
      // rows.splice(index, 1);
      console.log(rows, 'rows---')
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped lang="scss">
.tablePage {
  width: 100%;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
}

.other-btn-group {
  margin: 20px 0;
  overflow: hidden;
}

.ivu-btn-circle,
.ivu-btn-circle-outline {
  border-radius: 32px;
}

.ivu-btn,
.ivu-btn:active,
.ivu-btn:focus {
  outline: 0;
}
.ivu-btn:active,
.ivu-btn:hover {
  border: 1px solid #f90;
  color: #f90;
  background: #fff;
}

.ivu-btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 1.5;
  user-select: none;
  padding: 6px 15px;
  font-size: 12px;
  color: #495060;
  background-color: #f7f7f7;
  border-color: #dddee1;
}

.ivu-btn > .ivu-icon {
  line-height: 1;
}
.ivu-icon {
  display: inline-block;
  font-family: "Ionicons";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
}

.tableContainer {
  width: 100%;
  height: 100%;
}

.tableContainer .tableData {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  background-color: #f8f8f9;
}

.tableContainer .tableData /deep/ .el-table::-webkit-scrollbar  {
  width: 0px;
}

.el-table thead,
.has-gutter {
  color: #000;
  font-weight: 500;
  background: #eee;
}

.el-table th {
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  background-color: #f8f8f9;
}

/* .tableData .tableLeft{
    border-right:5px solid #000;
} */
</style>
