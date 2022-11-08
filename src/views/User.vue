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
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
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
      <el-button type="primary" @click="handleAdd">+ 新增</el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="birth" label="birth" value-formet="yyyy-DD">
        </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="sex" label="性别">
          <template slot-scope="scope">
            <span v-if="scope.row.sex === 1">男</span>
            <span v-else>女</span>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄"> </el-table-column>
        <el-table-column prop="addr" label="地址"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button sizi="mini" @click="handeEdit(scope.row)"
              >编辑</el-button
            >
            <el-button type="danger" sizi="mini" @click="handeDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="prev, pager, next" :total="total"> </el-pagination>
    </div>
  </div>
</template>
<script>
import { delUser } from "../api";
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
        { birth: "2013", name: "路飞", addr: "vdvzdfrv", sex: 1, age: 19 },
        { birth: "2014", name: "索隆", addr: "vdvzdfrv", sex: 1, age: 19 },
        { birth: "2015", name: "娜美", addr: "vdvzdfrv", sex: 2, age: 19 },
        { birth: "2016", name: "乔巴", addr: "vdvzdfrv", sex: 1, age: 19 },
        { birth: "2017", name: "山治", addr: "vdvzdfrv", sex: 1, age: 19 },
      ],
      modalType: 0, //0新增 1编辑
      total:0,//当前总条数
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
    //编辑
    handeEdit(row) {
      console.log();
      this.modalType = 1;
      this.dialogVisible = true;
      //对当前行数据进行深拷贝
      this.form = JSON.parse(JSON.stringify(row));
    },
    handleAdd(row) {
      this.modalType = 0;
      this.dialogVisible = true;
    },
    //删除
    handeDelete() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          //重新获取列表接口
          // ...
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  mounted() {
    //获取的列表的数据
    // delUser().then((data) => {
    //   console.log(data);
    // });
  },
};
</script>
<style></style>
