const paragraphs = [
  "你好，我是 Vivi。",
  "一个出生于 1998 年的女孩。",
  "眼睛是我的取景框，而摄影，是我理解世界的方式。",
  "我喜欢去不同的地方，看不同的人，感受不同的文化，也倾听那些被风吹散在路上的故事。",
  "比起刻意设计的画面，我更在意那些稍纵即逝的瞬间：一个眼神、一束光、一阵风，或是某个无法复刻的情绪。",
  "这些年，我带着相机不断行走，也慢慢发现，真正打动人的从来不是完美，而是真实。",
  "所以我喜欢用镜头记录人与世界相遇的样子，把生活拍成一部自然电影。",
  "希望有一天，当你翻开这些影像时，也能看见属于自己的故事。"
];

export default function AboutPage() {
  return (
    <main className="min-h-screen px-5 pb-20 pt-32 sm:px-8 md:pt-24">
      <section className="mx-auto max-w-xl text-[13px] leading-8 tracking-[0.08em] text-ink/72">
        <h1 className="mb-12 text-[13px] font-normal uppercase tracking-[0.3em] text-ink">ABOUT</h1>
        <div className="space-y-5">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
