import PhotoFrame from "@/components/PhotoFrame";
import { sitePath } from "@/site-path";

const filmVideos = [
  {
    src: "/videos/film-01.mov",
    aspectRatio: "16 / 9",
    className: "h-[62vh] min-h-[24rem] max-h-[44rem]"
  },
  {
    src: "/videos/film-03.mp4",
    aspectRatio: "16 / 9",
    className: "h-[62vh] min-h-[24rem] max-h-[44rem]"
  },
  {
    src: "/videos/film-04.mp4",
    aspectRatio: "9 / 16",
    className: "h-[72vh] min-h-[32rem] max-h-[52rem]"
  }
];

const filmFrames = [
  ["h-[78vh] min-h-[36rem] w-[min(28rem,62vw)]", "#d9d0c4"],
  ["h-[58vh] min-h-[28rem] w-[min(30rem,68vw)]", "#bdb8ad"]
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-auto px-5 pb-16 pt-28 sm:px-8 md:pt-12">
      <section className="flex min-w-max items-start gap-12 md:gap-20">
        <div className="w-10 shrink-0 md:w-16" />
        {filmVideos.map((video) => (
          <div
            key={video.src}
            className={`${video.className} shrink-0 overflow-hidden bg-stone`}
            style={{ aspectRatio: video.aspectRatio }}
          >
            <video
              src={sitePath(video.src)}
              className="h-full w-full object-cover"
              loop
              controls
              playsInline
              preload="metadata"
            />
          </div>
        ))}
        {filmFrames.map(([className, tone], index) => (
          <PhotoFrame key={index} className={className} tone={tone} />
        ))}
      </section>
    </main>
  );
}
