import { defineConfig } from '@umijs/max';

export default defineConfig({
  // alias别名，Umi 内置了以下别名：
  // @，项目 src 目录
  // @@，临时目录，通常是 src/.umi 目录
  // umi，当前所运行的 umi 仓库目录
  alias: {},
  antd: {},
  model: {},
  request: {},
  // 开启文件hash后缀
  hash: true,
  // 启用 history 路由
  history: {
    type: 'browser'
  },
  // 指定react-router的base，部署到根目录时需要配置
  base: '/',
  // 指定webpack的publicPath，指向静态资源文件所在的路径
  publicPath: '/',
  // DefinePlugin 全局常量定义
  define: { FOO: 'bar' },
  // 配置图片文件是否走 base64 编译的阈值
  inlineLimit: 10000,
  // 配置额外的 meta 标签
  metas: [
    { name: 'keywords', content: 'umi, umijs' },
    { name: 'description', content: 'React framework.' },
  ],
  // 代理配置
  // proxy: {
  // '/api': {
  //   'target': 'http://jsonplaceholder.typicode.com/',
  //   'changeOrigin': true,
  //   'pathRewrite': { '^/api' : '' },
  // }
  // },
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      name: '首页',
      path: '/index',
      component: './Index',
    },
    {
      name: '登录',
      path: '/login',
      component: 'Login',
    },
    {
      name: '注册',
      path: '/register',
      component: 'Register',
    },
    {
      name: '旅客指南',
      path: '/guide',
      component: 'Guide',
    },
    {
      name: '关于无锡',
      path: '/about',
      component: 'About',
    },
    {
      name: '民宿列表',
      path: '/list',
      component: 'List',
    },
    {
      name: '民宿详情',
      path: '/detail',
      component: 'Detail',
    },
  ],
  npmClient: 'pnpm',
  //配置 <body> 中额外的 script 标签
  scripts: [''],
  //配置额外的 CSS
  styles: [],
  // 浏览器兼容
  targets: {
    ie: 11
  }
});

