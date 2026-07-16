import "./globals.css";

export const metadata = {
  title: "怒江毅辉建筑装饰有限责任公司｜让空间更有温度",
  description:
    "怒江毅辉建筑装饰有限责任公司官方网站，展示企业文化、发展历程、通知事务、宣传视频与联系方式。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
