import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 text-sm text-ink/54 md:flex-row md:items-center md:justify-between">
        <p>Vivi Photo, natural cinematic stories.</p>
        <div className="flex gap-5">
          <Link href="/portfolio" className="hover:text-ink">作品</Link>
          <Link href="/pricing" className="hover:text-ink">约拍</Link>
          <Link href="/contact" className="hover:text-ink">联系</Link>
        </div>
      </div>
    </footer>
  );
}
