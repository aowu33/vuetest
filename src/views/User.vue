<template>
  <div class="manage">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
    >
      <!-- 用户的表单信息 -->
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :inline="true"
        :rules="rules"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-date-picker
            v-model="form.birth"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <div class="manage-header">
      <el-button @click="dialogVisible = true" type="primary">+ 新增</el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" >
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { roleList } from "../api";
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        age: "",
        sex: "",
        birth: "",
        addr: "",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        age: [{ required: true, message: "请输入年龄" }],
        sex: [{ required: true, message: "请输入性别" }],
        birth: [{ required: true, message: "请输入出生日期" }],
        addr: [{ required: true, message: "请输入地址" }],
      },
      tableData: [
        {date:'fgfggb',name:'vdfvdf',address:"vdvzdfrv"},
        {date:'fgfggb',name:'vdfvdf',address:"vdvzdfrv"},
        {date:'fgfggb',name:'vdfvdf',address:"vdvzdfrv"},
        {date:'fgfggb',name:'vdfvdf',address:"vdvzdfrv"},
        {date:'fgfggb',name:'vdfvdf',address:"vdvzdfrv"},
      ],
    };
  },
  methods: {
    //用户提交表单
    submit() {
      this.$refs.form.validate((valid) => {
        // 后续对表单数据的处理
        if (valid) {
          console.log(this.form, "from");
          //清空表单
          this.$refs.form.resetFields();
          //关闭弹窗
          this.dialogVisible = false;
        }
      });
    },
    // 弹窗关闭的时候
    handleClose() {
      this.$refs.form.resetFields();
      this.dialogVisible = false;
    },
    cancel() {
      this.handleClose();
    },
  },
  mounted() {
    //获取的列表的数据
    roleList().then((data) => {
      console.log(data);
    });
  },
};
</script>
<style></style>
