export default function ImageSlot({ title, note, className = "", tone = "#c9c0b3" }) {
  return (
    <div
      className={`photo-grain image-slot flex min-h-72 flex-col justify-between text-ink ${className}`}
      style={{ "--slot-color": tone }}
    >
      <div className="flex items-center justify-between p-5 text-xs uppercase tracking-[0.22em] text-ink/42">
        <span>Image</span>
        <span>Replace</span>
      </div>
      <div className="p-5">
        <p className="font-serif text-2xl text-ink/82">{title}</p>
        <p className="mt-2 max-w-xs text-sm leading-6 text-ink/55">{note}</p>
      </div>
    </div>
  );
}
