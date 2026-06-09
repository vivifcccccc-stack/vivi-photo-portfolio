# 自然电影摄影作品集

一个基于 Next.js + Tailwind CSS 的个人摄影作品集网站骨架，风格偏电影感、自然光、低饱和和高级留白。

## 本地运行

```bash
npm install
npm run dev
```

打开浏览器访问：

```text
http://localhost:3000
```

## 替换图片

当前项目使用 `components/ImageSlot.jsx` 作为图片占位。你后续可以把自己的图片放进 `public/images`，再把对应占位组件替换成 `next/image`。

示例：

```jsx
import Image from "next/image";

<Image
  src="/images/portrait-01.jpg"
  alt="自然光人像作品"
  width={1200}
  height={1600}
  className="h-full w-full object-cover"
/>
```

## 部署到 Vercel

1. 把项目推送到 GitHub。
2. 打开 [Vercel](https://vercel.com)，选择 `Add New Project`。
3. 选择这个 GitHub 仓库。
4. Framework Preset 选择 `Next.js`。
5. 保持默认构建命令 `npm run build`，输出目录无需填写。
6. 点击 `Deploy`。

之后每次推送到 GitHub，Vercel 会自动重新部署。
