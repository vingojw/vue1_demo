## Setup
``` bash
npm install
npm run dev
```

## 目录结构
<pre>
│  .gitignore          # 忽略无需git控制的文件  比如 node_modules
│  package.json        # 项目配置
│  readme.md           # 项目说明
│  index.html          # 首页
│  webpack.config.js   # webpack 配置文件
│
├─node_modules
└─src
    │  app.js          # 启动配置，配置路由，过滤器
    │  app.vue         # 主vue
    │  filters.js      # 过滤器
    │  routers.js      # 路由
    │
    ├─components       # 组件
    │      my-component.vue
    │
    ├─css              # 公用样式
    │      common.css
    │
    └─views            # 页面
            about.vue
            home.vue
            not-found.vue
</pre>

##学习参考：
[qingcheng](https://github.com/zerqu/qingcheng)

[vue-strap](https://github.com/yuche/vue-strap)

