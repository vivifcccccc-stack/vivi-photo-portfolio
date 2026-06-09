export default function SectionIntro({ eyebrow, title, text, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`mx-auto max-w-3xl ${alignment}`}>
      <p className="text-xs uppercase tracking-[0.32em] text-moss">{eyebrow}</p>
      <h1 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
      {text ? <p className="mt-5 text-base leading-8 text-ink/62">{text}</p> : null}
    </div>
  );
}
