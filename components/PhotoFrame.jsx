export default function PhotoFrame({ className = "", tone = "#d8d3ca", style = {} }) {
  return (
    <div
      className={`photo-grain image-slot ${className}`}
      style={{ "--slot-color": tone, ...style }}
      aria-label="预留照片位置"
    />
  );
}
