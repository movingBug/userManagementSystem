<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-10-10 20:57:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-10-10 21:01:16
 -->
<template>
  <el-form ref="form" :model="form" class="topInputList">
    <el-form-item v-for="item in initValList" :key="item.id" class="translate-wrap">
      <div class="translate-box">
        <label v-text="item.name" />
        <el-input v-if="item.type===typelist.ipt" v-model="item.model" :placeholder="item.pls" />
        <el-select
          v-else-if="item.type===typelist.dieselete"
          v-model="value"
          :placeholder="item.pls"
        >
          <el-option
            v-for="list in item.datalist"
            :key="list.id"
            :label="item.value"
            :value="list.value"
          />
        </el-select>
        <el-date-picker
          v-else-if="item.type === typelist.singleTime"
          v-model="value"
          cell-class-name="input-class"
          align="right"
          type="date"
          :placeholder="item.pls"
        />
        <el-date-picker
          v-else-if="item.type===typelist.time"
          v-model="value2"
          class="timeSelece"
          :placeholder="item.pls"
          type="daterange"
          align="right"
          :picker-options="pickerOptions"
          size="mini"
        />
        <Scope v-else-if="item.type===typelist.arr" :data.sync="item.list" />
        <!-- <div class="MaxMinBox">
            <el-input v-model="item.model" :placeholder="item.list[0].pls"></el-input>
            <span>-</span>
            <el-input v-model="item.model" :placeholder="item.list[1].pls"></el-input>
        </div>-->
        <el-select v-else-if="item.type===typelist.selete" :placeholder="item.pls" multiple>
          <el-option v-for="(listI,index) in item.list" :key="index" :value="listI.name" />
        </el-select>
      </div>
    </el-form-item>
  </el-form>
</template>
<script>
import Scope from './scope'
export default {
  components: {
    Scope
  },
  data() {
    return {
      nickName: '',
      schoolName: '',
      phoneNum: '',
      duty: '',
      typelist: {
        ipt: 'ipt',
        dieselete: 'dieselete',
        singleTime: 'singleTime',
        time: 'time',
        arr: 'arr',
        selete: 'selete'
      },
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      initValList: [
        {
          name: '姓名',
          id: 1,
          pls: '请输入姓名',
          type: 'ipt',
          model: 'nickName'
        },
        {
          name: '所在机构',
          id: 2,
          pls: '请输入所在机构',
          type: 'ipt',
          model: 'schoolName'
        },
        {
          name: '手机号',
          id: 3,
          pls: '请输入手机号',
          type: 'ipt',
          model: 'phoneNum'
        },
        {
          name: '职务',
          id: 4,
          pls: '请输入职务',
          type: 'selete',
          model: 'duty',
          list: [
            { name: '主任' },
            { name: '副主任' },
            { name: '合伙人' },
            { name: '执行主任' },
            { name: '高级合伙人' },
            { name: '管理合伙人' },
            { name: '团队负责人' },
            { name: '律师' },
            { name: '实习生' },
            { name: '行政' },
            { name: '财务' },
            { name: '法务负责人' },
            { name: '法务' },
            { name: '总经理（总裁）' },
            { name: '副总经理' },
            { name: '人力资源总监' },
            { name: '财务总监' },
            { name: '营销总监' },
            { name: '市场总监' },
            { name: '销售总监' },
            { name: '生产总监' },
            { name: '运营总监' },
            { name: '技术总监' },
            { name: '总经理助理' },
            { name: '人力资源经理' },
            { name: '人力资源助理' },
            { name: '人力资源专员' },
            { name: '招聘主管' },
            { name: '预算主管' },
            { name: '会计主管' },
            { name: '前台' },
            { name: '物业主管' },
            { name: '法律事务主管' },
            { name: '法律顾问' },
            { name: '其他' },
            { name: '无' }
          ]
        },
        {
          name: '课程次数',
          type: 'arr',
          id: 5,
          list: [
            {
              pls: '最小',
              id: 520
            },
            {
              pls: '最大',
              id: 5522
            }
          ]
        },
        {
          name: '是否Alpha用户',
          id: 6,
          pls: '请选择Alpha用户',
          type: 'dieselete',
          datalist: [
            {
              id: 5555,
              value: '是'
            },
            {
              id: 4444,
              value: '否'
            }
          ]
        },
        {
          name: '是否iCourt学员',
          id: 7,
          pls: '是否iCourt学员',
          type: 'dieselete',
          datalist: [
            {
              id: 525,
              value: '是'
            },
            {
              id: 333,
              value: '否'
            }
          ]
        },
        {
          name: '上过的课程',
          id: 9,
          pls: '请选择上过的课程',
          type: 'selete',
          list: [
            {
              name: '证据'
            },
            {
              name: '可视化'
            },
            {
              name: '报价可视化'
            },
            {
              name: '出庭'
            },
            {
              name: '谈判'
            },
            {
              name: '写作'
            },
            {
              name: '演讲'
            },
            {
              name: 'iMBA'
            },
            {
              name: 'iMBc'
            },
            {
              name: '大数据'
            },
            {
              name: '心理学'
            },
            {
              name: '互联网'
            },
            {
              name: '法律逻辑'
            },
            {
              name: '合同审查'
            },
            {
              name: '模拟法庭'
            },
            {
              name: '其他'
            },
            {
              name: '律师管理私董会'
            },
            {
              name: '合伙人私董会'
            },
            {
              name: '阿尔法体验日'
            },
            {
              name: '报价'
            },
            {
              name: '客户管理'
            },
            {
              name: '诉讼逆转'
            },
            {
              name: '法律顾问'
            },
            {
              name: '尽职调查'
            },
            {
              name: '建设工程法律实务'
            },
            {
              name: '法律服务专业升级与可视化报价'
            },
            {
              name: '公开课'
            },
            {
              name: '美国行'
            },
            {
              name: '活动'
            },
            {
              name: '主任年会'
            },
            {
              name: '助教'
            },
            {
              name: '满天星'
            },
            {
              name: '实验'
            },
            {
              name: '未来律所'
            },
            {
              name: '法务总监年会'
            },
            {
              name: '欧洲行'
            },
            {
              name: '未来出庭大律师'
            }
          ]
        },
        {
          name: '课程名',
          id: 10,
          pls: '请输入课程名',
          type: 'ipt'
        },
        {
          name: '选择省',
          id: 11,
          pls: '请选择选择省',
          type: 'selete'
        },
        {
          name: '选择市',
          id: 12,
          pls: '请选择选择市',
          type: 'selete'
        },
        {
          name: '选择区县',
          id: 13,
          pls: '请选择选择区县',
          type: 'selete'
        },
        {
          name: '选择标签',
          id: 14,
          pls: '请选择标签',
          type: 'selete',
          list: [
            { name: '大数据报告' },
            { name: 'A++校友' },
            { name: '橙三分享' },
            { name: '团队宝' },
            { name: 'Alpha天使用户' },
            { name: '校友股东' },
            { name: 'Alpha团长' },
            { name: '课程团长' },
            { name: '课程老师' },
            { name: 'Alpha老师' },
            { name: '项目模板' },
            { name: '课程冠军' },
            { name: '全报学员' },
            { name: 'iCourter' },
            { name: '匠心计划' },
            { name: '团购学员' },
            { name: '活动对接人' },
            { name: '超级合伙人' },
            { name: '校友会会长' },
            { name: 'EGLA联盟' },
            { name: '中世联盟' },
            { name: '文库' },
            { name: '第一批' },
            { name: 'LEGALBAND律界俊杰30强' },
            { name: 'LEGALBAND资产管理10强' },
            { name: '201701-03Alpha' },
            { name: '文库1205' },
            { name: '青训营' },
            { name: '尽调待邀请' }
          ]
        },
        {
          name: '是否为排除标签中所选',
          id: 15,
          pls: '请选择是否为排除标签中所选',
          type: 'dieselete',
          datalist: [
            {
              id: 951,
              value: '是'
            },
            {
              id: 853,
              value: '否'
            }
          ]
        },
        {
          name: '邀请状态',
          id: 16,
          pls: '请选择邀请状态',
          type: 'selete',
          list: [
            {
              name: '已联系'
            },
            {
              name: '加微信'
            },
            {
              name: '要名额'
            },
            {
              name: '已同意'
            },
            {
              name: '已拒绝'
            },
            {
              name: '已参加'
            },
            {
              name: '未参加'
            }
          ]
        },
        {
          name: '邀请时间筛选',
          id: 18,
          pls: '请选择邀请时间筛选',
          type: 'time'
        },
        {
          name: '跟进记录',
          id: 19,
          pls: '请输入跟进记录',
          type: 'ipt'
        },
        {
          name: '最后联系时间',
          id: 20,
          pls: '请选择最后联系时间',
          type: 'singleTime'
        },
        {
          name: '邀请级别',
          id: 21,
          pls: '请选择邀请级别',
          type: 'selete',
          list: [
            { name: '无' },
            { name: 'A' },
            { name: 'B' },
            { name: 'C' },
            { name: 'D' }
          ]
        },
        {
          name: '橙子手机',
          id: 22,
          pls: '请输入橙子手机',
          type: 'ipt'
        },
        {
          name: '所在群',
          id: 23,
          pls: '请输入所在群',
          type: 'ipt'
        },
        {
          name: '备注',
          id: 24,
          pls: '请输入备注',
          type: 'ipt'
        },
        {
          name: '执业年限',
          type: 'arr',
          id: 25,
          list: [
            {
              pls: '最小',
              id: 5
            },
            {
              pls: '最大',
              id: 50
            }
          ]
        },
        {
          name: '出生日期',
          id: 26,
          pls: '请选择出生日期',
          type: 'time'
        },
        {
          name: '是否参加活动',
          id: 27,
          pls: '请选择是否参加活动',
          type: 'dieselete',
          datalist: [
            {
              id: 859,
              value: '是'
            },
            {
              id: 778,
              value: '否'
            }
          ]
        },
        {
          name: '活动类型',
          id: 28,
          pls: '请选择活动类型',
          type: 'selete',
          list: [
            {
              name: '未来律所'
            },
            {
              name: '未来律所+财税年会'
            },
            {
              name: '美国行'
            },
            {
              name: '集训营'
            },
            {
              name: '财税年会'
            },
            {
              name: '智能法顾'
            },
            {
              name: '专业年会'
            },
            {
              name: 'iCourt内部活动'
            },
            {
              name: '日本行'
            },
            {
              name: '欧洲行'
            },
            {
              name: '泰国行'
            },
            {
              name: '南极行'
            },
            {
              name: '大中台'
            },
            {
              name: '大中台私董会'
            },
            {
              name: '股税特训营'
            }
          ]
        },
        {
          name: '是否签到',
          id: 29,
          pls: '请选择是否签到',
          type: 'dieselete',
          datalist: [
            {
              id: 963,
              value: '是'
            },
            {
              id: 741,
              value: '否'
            }
          ]
        },
        {
          name: '参加时间',
          id: 30,
          pls: '请选择参加时间',
          type: 'selete'
        },
        {
          name: '是否购买该产品',
          id: 31,
          pls: '请选择是否购买该产品',
          type: 'dieselete',
          datalist: [
            {
              id: 852,
              value: '是'
            },
            {
              id: 753,
              value: '否'
            }
          ]
        },
        {
          name: '产品类型',
          id: 32,
          pls: '请选择产品类型',
          type: 'selete',
          list: [
            { name: '平台版' },
            { name: '大中台' },
            { name: '团队版' },
            { name: '美国行' },
            { name: '欧洲行' },
            { name: '智能法顾' },
            { name: '证据智能系统' },
            { name: '课程' },
            { name: '快调' },
            { name: '法税系统' },
            { name: '团队宝' },
            { name: '产品论坛' },
            { name: '诉讼逆转系统' },
            { name: '现场' },
            { name: 'DayOne' },
            { name: '日本行' },
            { name: 'D币系统' }
          ]
        },
        {
          name: '产品名称',
          id: 33,
          pls: '请选择产品名称',
          type: 'selete',
          list: [
            {
              activityId: 1012,
              name: '美国行-199期',
              type: '美国行'
            },
            {
              activityId: 1013,
              name: '欧洲行-10期',
              type: '欧洲行'
            },
            {
              activityId: 1014,
              name: '美国行1人10日游',
              type: '美国行'
            },
            {
              activityId: 1015,
              name: '可视化-ly-test',
              type: '可视化'
            },
            {
              activityId: 1016,
              name: 'Mike旅游团',
              type: '美国行'
            },
            {
              activityId: 1017,
              name: 'miki活动',
              type: '美国行'
            },
            {
              activityId: 1018,
              name: '陆遥0928',
              type: '其他'
            },
            {
              activityId: 1019,
              name: '美国行-行不行',
              type: '美国行'
            },
            {
              activityId: 1020,
              name: '美国行-到底行不行',
              type: '美国行'
            },
            {
              activityId: 1022,
              name: '02未来律所',
              type: '未来律所'
            },
            {
              activityId: 1023,
              name: '123未来律所',
              type: '未来律所'
            },
            {
              activityId: 1024,
              name: '102未来律所测试',
              type: '未来律所'
            },
            {
              activityId: 1025,
              name: '智能法顾',
              type: '智能法顾'
            },
            {
              activityId: 1026,
              name: '五里河乡-吃大席杯美国行活动',
              type: '美国行'
            },
            {
              activityId: 1027,
              name: '测试头像',
              type: '美国行'
            },
            {
              activityId: 1028,
              name: '证据智能系统',
              type: '证据智能系统'
            },
            {
              activityId: 1029,
              name: '证据智能系统2',
              type: '证据智能系统'
            },
            {
              activityId: 1030,
              name: 'meiguoss',
              type: '美国行'
            },
            {
              activityId: 1031,
              name: 'wdddcs2',
              type: '美国行'
            },
            {
              activityId: 1032,
              name: '1210',
              type: '平台版'
            },
            {
              activityId: 1033,
              name: '孙悦1219',
              type: '美国行'
            },
            {
              activityId: 1034,
              name: '美国行产品001',
              type: '美国行'
            },
            {
              activityId: 1035,
              name: '美国行产品002',
              type: '美国行'
            },
            {
              activityId: 1036,
              name: '智能法税系统',
              type: '法税系统'
            },
            {
              activityId: 1038,
              name: '美国行',
              type: '美国行'
            },
            {
              activityId: 1039,
              name: 'Day1',
              type: 'DayOne'
            },
            {
              activityId: 1040,
              name: 'Day2',
              type: 'DayOne'
            },
            {
              activityId: 1041,
              name: 'Day3',
              type: 'DayOne'
            },
            {
              activityId: 1042,
              name: 'Day4',
              type: 'DayOne'
            },
            {
              activityId: 1043,
              name: '美国行-TEST',
              type: '美国行'
            },
            {
              activityId: 1044,
              name: '美国行-测试001',
              type: '美国行'
            },
            {
              activityId: 1045,
              name: '美国行-DEMO-01',
              type: '美国行'
            },
            {
              activityId: 1046,
              name: '测试美国行产品',
              type: '美国行'
            },
            {
              activityId: 1047,
              name: '测试产品',
              type: '美国行'
            },
            {
              activityId: 1048,
              name: '美国行测试002',
              type: '美国行'
            },
            {
              activityId: 1049,
              name: '美国行-0417',
              type: '美国行'
            },
            {
              activityId: 1050,
              name: '美国行0419',
              type: '美国行'
            },
            {
              activityId: 1051,
              name: '20190420',
              type: '美国行'
            },
            {
              activityId: 1052,
              name: '美国行0420',
              type: '美国行'
            },
            {
              activityId: 1053,
              name: '美国行0420001',
              type: '美国行'
            },
            {
              activityId: 1054,
              name: '美国行0419002',
              type: '美国行'
            },
            {
              activityId: 1055,
              name: '美国行0429003',
              type: '美国行'
            },
            {
              activityId: 1056,
              name: '美国行0420004',
              type: '美国行'
            },
            {
              activityId: 1057,
              name: '欧洲行测试',
              type: '欧洲行'
            },
            {
              activityId: 1058,
              name: '测试产品名称--后台',
              type: '欧洲行'
            },
            {
              activityId: 1059,
              name: '欧洲行测试2',
              type: '欧洲行'
            },
            {
              activityId: 1060,
              name: '欧洲行123',
              type: '欧洲行'
            },
            {
              activityId: 1061,
              name: '日本行测试1',
              type: '日本行'
            },
            {
              activityId: 1062,
              name: '1237',
              type: '大中台'
            },
            {
              activityId: 1063,
              name: 'dazhongtai',
              type: '大中台'
            },
            {
              activityId: 1064,
              name: 'D币系统',
              type: 'D币系统'
            },
            {
              activityId: 1065,
              name: '大大中台',
              type: '大中台'
            },
            {
              activityId: 1066,
              name: 'hh',
              type: '平台版'
            },
            {
              activityId: 1067,
              name: '大中台QQQ',
              type: '大中台'
            },
            {
              activityId: 1069,
              name: 'CCCCQQQ',
              type: '美国行'
            },
            {
              activityId: 1070,
              name: 'CCCCQQQ2',
              type: '美国行'
            },
            {
              activityId: 1071,
              name: 'CCCCQQQ3',
              type: '美国行'
            },
            {
              activityId: 1072,
              name: 'CCCCQQQ4',
              type: '美国行'
            },
            {
              activityId: 1073,
              name: 'CCCCQQQ7',
              type: '美国行'
            },
            {
              activityId: 1074,
              name: '团队版',
              type: '团队版'
            }
          ]
        },
        {
          name: '最近一次登录时间',
          id: 34,
          pls: '请选择最近一次登录时间',
          type: 'time'
        },
        {
          name: '跟进人',
          id: 35,
          pls: '请选择跟进人',
          type: 'selete',
          list: [
            {
              name: '张三'
            },
            {
              name: '李四'
            },
            {
              name: '王五'
            },
            {
              name: 'ssss'
            },
            {
              name: '张斌'
            },
            {
              name: '唐家'
            },
            {
              name: '王凯'
            },
            {
              name: '王宇'
            },
            {
              name: '王明龙'
            },
            {
              name: '网四川'
            },
            {
              name: '王五'
            },
            {
              name: 'ssss'
            },
            {
              name: '张斌'
            },
            {
              name: '唐家'
            },
            {
              name: '王凯'
            },
            {
              name: '王宇'
            },
            {
              name: '王明龙'
            },
            {
              name: '网四川'
            },
            {
              name: '王五'
            },
            {
              name: 'ssss'
            },
            {
              name: '张斌'
            },
            {
              name: '唐家'
            },
            {
              name: '王凯'
            },
            {
              name: '王宇'
            },
            {
              name: '王明龙'
            },
            {
              name: '网四川'
            }
          ]
        },
        {
          name: '计划跟进时间',
          id: 36,
          pls: '请选择计划跟进时间',
          type: 'time'
        },
        {
          name: '近一个月使用次数',
          id: 37,
          pls: '请选择近一个月使用次数',
          type: 'selete',
          list: [
            {
              name: '高'
            },
            {
              name: '中'
            },
            {
              name: '低'
            },
            {
              name: '无'
            }
          ]
        },
        {
          name: '新增邀请日期',
          id: 38,
          pls: '请选择新增邀请日期',
          type: 'time'
        }
      ]
    }
  }
}
</script>
