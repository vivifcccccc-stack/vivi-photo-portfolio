const contacts = [
  ["WeChat", "vivifcccccc_"],
  ["Rednote", "vivifcccccc_98"],
  ["Email", "863315594@qq.com"]
];

export default function ContactPage() {
  return (
    <main className="min-h-screen px-5 pb-20 pt-32 sm:px-8 md:pt-24">
      <section className="mx-auto max-w-xl text-center text-[13px] leading-9 tracking-[0.12em] text-ink/72">
        <h1 className="mb-12 text-[13px] font-normal uppercase tracking-[0.3em] text-ink">CONTACT</h1>
        <div className="border-y border-ink/10 py-8">
          {contacts.map(([label, value]) => (
            <div key={label} className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:text-left">
              <p className="text-[12px] uppercase tracking-[0.26em] text-ink/42">{label}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-[12px] leading-8 text-ink/52">
          For personal photography, travel stories and quiet brand visuals.
        </p>
      </section>
    </main>
  );
}
