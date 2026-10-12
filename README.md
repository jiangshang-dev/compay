# 星辰科技 · 企业官网模板

一套可直接改文案上线的 Vue 3 企业官网。首页、关于、产品、方案、案例、新闻、招聘、联系我们都已接好，换掉示例数据就能用。

[![Star](https://img.shields.io/github/stars/jiangshang-dev/compay?style=social)](https://github.com/jiangshang-dev/compay)
[![Vue 3](https://img.shields.io/badge/Vue-3-42b883)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff)](https://vite.dev/)

## 先 Star，再 Clone

开源不是白嫖。代码可以免费拿走，Star 是你唯一需要付出的东西。

**Clone 之前，先点右上角的 Star。** 不 Star 就拉走，等于白用。

[点这里 Star 本仓库](https://github.com/jiangshang-dev/compay)

Star 之后再执行下面的命令。

## 快速开始

```bash
# 1. 打开 https://github.com/jiangshang-dev/compay ，先点 Star
# 2. 再克隆
git clone git@github.com:jiangshang-dev/compay.git
cd compay
npm install
npm run dev
```

浏览器打开终端里打印的本地地址即可预览。

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 本地开发 |
| `npm run build` | 打包到 `dist/` |
| `npm run preview` | 预览打包结果 |

需要 Node.js 18 及以上。

## 页面

| 路径 | 页面 |
| --- | --- |
| `/` | 首页：主视觉、能力介绍、数据、合作伙伴、产品、行动号召 |
| `/about` | 关于我们 |
| `/products` | 产品与服务 |
| `/solutions` | 解决方案 |
| `/cases` | 客户案例 |
| `/news` | 新闻动态 |
| `/careers` | 招贤纳士 |
| `/contact` | 联系我们 |

未知路径会进入 404 页。

## 改成你的公司

文案和数据都集中在 `src/data/`，不用在页面里到处找字符串。

| 文件 | 改什么 |
| --- | --- |
| `src/data/navigation.js` | 导航、页脚、公司名、口号、电话、邮箱、地址 |
| `src/data/products.js` | 产品 |
| `src/data/solutions.js` | 解决方案 |
| `src/data/cases.js` | 客户案例 |
| `src/data/news.js` | 新闻 |
| `src/data/jobs.js` | 招聘岗位 |
| `src/data/team.js` | 团队 |
| `index.html` | 页面标题和 SEO 描述 |

颜色和字号在 `src/assets/styles/variables.css`、`typography.css`。

## 技术栈

- Vue 3，`<script setup>`
- Vite
- Vue Router，路由懒加载
- 原生 CSS，滚动显现动画，无第三方 UI 库

## 目录

```text
src/
├── assets/styles/     全局样式
├── components/
│   ├── layout/        页头、页脚、容器
│   ├── sections/      首屏、统计、案例卡片、联系表单
│   └── ui/            按钮、卡片、标签
├── data/              站点文案，改这里
├── router/            路由
└── views/             页面
```

## 使用约定

- 二次开发、商用、放进自己的项目，都可以。
- 请保留仓库出处，并先给本仓库点 Star。
- 欢迎提 Issue 和 Pull Request。提之前同样先 Star。

仓库地址：[github.com/jiangshang-dev/compay](https://github.com/jiangshang-dev/compay)
