<template>
  <div>
    <div><h3>游记攻略</h3></div>
    <div>
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="游记标题"
        sub-title="This is a subtitle"
      >
        <template slot="extra">
          <a-avatar style="color: #f56a00; backgroundcolor: #fde3cf"></a-avatar>
          <div><a-icon type="form" /></div>
          <div class="icons-list">
            <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
          </div>
        </template>
        <template slot="footer">
        </template>
        <div class="content">
          <div class="main">
            <a-descriptions size="small" :column="2">
              <a-descriptions-item label="时间">
                xxxx年xx月xx日
              </a-descriptions-item>
              <a-descriptions>
                <a-button :size="small"
                  ><a-icon type="vertical-align-bottom" />行程地图</a-button
                >
              </a-descriptions>
              <a-descriptions-item label="途径">
                xxx>xxx>xxx
              </a-descriptions-item>
              <a-descriptions-item label="行程">
                Gonghu Road>Xihu District>Hangzhou>Zhejiang>China
              </a-descriptions-item>
            </a-descriptions>
            <template>
              <a-card style="width: 100%">
                <p>Card content</p>
                更多<a-icon type="double-right" /><a-icon type="double-right" />
              </a-card>
            </template>
          </div>
          <div class="bb">
            <div class="bb1">p1</div>
            <div class="bb2">p2</div>
            <div class="bb3">p3</div>
          </div>
        </div>
        </a-page-header>
        <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="游记标题"
        sub-title="This is a subtitle"
      >
        <template slot="extra">
          <a-avatar style="color: #f56a00; backgroundcolor: #fde3cf"></a-avatar>
          <div><a-icon type="form" /></div>
          <div class="icons-list">
            <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
          </div>
        </template>
        <template slot="footer">
        </template>
        <div class="content">
          <div class="main">
            <a-descriptions size="small" :column="2">
              <a-descriptions-item label="时间">
                xxxx年xx月xx日
              </a-descriptions-item>
              <a-descriptions>
                <a-button :size="small"
                  ><a-icon type="vertical-align-bottom" />行程地图</a-button
                >
              </a-descriptions>
              <a-descriptions-item label="途径">
                xxx>xxx>xxx
              </a-descriptions-item>
              <a-descriptions-item label="行程">
                Gonghu Road>Xihu District>Hangzhou>Zhejiang>China
              </a-descriptions-item>
            </a-descriptions>
            <template>
              <a-card style="width: 100%">
                <p>Card content</p>
                更多<a-icon type="double-right" /><a-icon type="double-right" />
              </a-card>
            </template>
          </div>
          <div class="bb">
            <div class="bb1">p1</div>
            <div class="bb2">p2</div>
            <div class="bb3">p3</div>
          </div>
        </div>
        </a-page-header>
    </div>
    <div>
            <a-pagination
              show-size-changer
              :default-current="3"
              :total="500"
              @showSizeChange="onShowSizeChange"
            />
            <br />
          </div>
  </div>
</template>

<style>
tr:last-child td {
  padding-bottom: 0;
}
#components-page-header-demo-responsive .content {
  display: flex;
}
#components-page-header-demo-responsive .ant-statistic-content {
  font-size: 20px;
  line-height: 28px;
}
@media (max-width: 576px) {
  #components-page-header-demo-responsive .content {
    display: block;
  }

  #components-page-header-demo-responsive .main {
    width: 100%;
    margin-bottom: 12px;
  }

  #components-page-header-demo-responsive .extra {
    width: 100%;
    margin-left: 0;
    text-align: left;
  }
}
</style>
<script>
export default {
  data() {
    return {
      pageSize: 20,
      current: 4,
    };
  },
  watch: {
    pageSize(val) {
      console.log("pageSize", val);
    },
    current(val) {
      console.log("current", val);
    },
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    },
  },
};
</script>
<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
.bb {
  height: 25vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.bb1 {
  height: 25vh;
  width: 30%;
  border: 1px solid rgb(0, 0, 0);
}
.bb2 {
  height: 25vh;
  width: 30%;
  border: 1px solid rgb(0, 0, 0);
}
.bb3 {
  height: 25vh;
  width: 30%;
  border: 1px solid rgb(0, 0, 0);
}
</style>