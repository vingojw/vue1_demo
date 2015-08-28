- webapp/               # webapp根目录
  - src/                # 开发目录
    + css/              # css资源目录
    + img/              # webapp图片资源目录
    - js/               # webapp js&jsx资源目录
      - components/     # 标准组件存放目录
          - foo/        # 组件foo
            + css/      # 组件foo的样式
            + js/       # 组件foo的逻辑
            + tmpl/     # 组件foo的模板
            index.js    # 组件foo的入口
          + bar/        # 组件bar
      + lib/            # 第三方纯js库
      ...               # 根据项目需要任意添加的代码目录
    + tmpl/             # webapp前端模板资源目录
    a.html              # webapp入口文件a
    b.html              # webapp入口文件b
  - build/              # 编译输出目录，即发布目录
  + mock/               # 假数据目录
  app.js                # 本地server入口
  routes.js             # 本地路由配置
  webpack.config.js     # webpack配置文件
  gulpfile.js           # gulp任务配置
  package.json          # 项目配置
  README.md             # 项目说明