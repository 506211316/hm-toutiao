<template>
  <div>
    <!-- 头部筛选部分 -->
    <el-card>
      <!-- 头部 -->
      <div slot="header">
        <my-bread>内容管理</my-bread>
      </div>
      <!-- size属性是可以设置表单内控件的大小，small为小 -->
      <el-form label-width="80px" size="small">
        <!-- 单选框 -->
        <el-form-item label="状态：">
          <el-radio-group v-model="reqParams.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- select下拉菜单 -->
        <el-form-item label="频道：">
          <el-select v-model="value" placeholder="请选择">
            <!-- v-for循环遍历channelOptions，key唯一性，label数据名字，value数据的id -->
            <el-option
              v-for="item in channelOptions"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 日期 -->
        <el-form-item label="日期：">
          <el-date-picker
            v-model="dateArr"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 内部部分 -->
    <el-card>
      <!-- 内容显示 -->
      <el-table :data="tableData">
        <!-- prop是从tableData中获取的数据的名字 -->
        <el-table-column prop="title" label="标题"></el-table-column>
      </el-table>
      <!-- 分页效果 -->
      <el-pagination class="page" background layout="prev, pager, next, total" :total="1000"></el-pagination>
    </el-card>
  </div>
</template>

<script>
// 导入插槽面包屑组件
// import MyBread from '../../components/my-bread'
export default {
  // 注册这个插槽组件
  // components: { MyBread },
  data () {
    return {
      // 下拉菜单显示的内容
      value: '',
      // 设置接口的参数
      reqParams: {
        // 默认为null，选择全部
        status: null,
        begin_pubdate: null,
        end_pubdate: null
      },
      // 接受服务器传输的数据，暂时定义一个占位值
      channelOptions: [{ id: 1, name: 'javascript' }],
      // 因为v-model不能传两个值，所以定义一个时间数组，根据下标获取对应的时间，0为开始时间，1为结束时间
      dateArr: [],
      // 把接收到的数据渲染到表格中
      tableData: [{ title: '标题。。。。' }, { title: '标题。。。。' }]
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  text-align: center;
}
</style>
