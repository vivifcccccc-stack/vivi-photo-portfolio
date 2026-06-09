import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "vivi",
  description: "电影感、自然光、低饱和的个人摄影作品集网站。",
  icons: {
    icon: "/icon.jpg",
    apple: "/icon.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <div className="md:pl-72">
          {children}
        </div>
      </body>
    </html>
  );
}
