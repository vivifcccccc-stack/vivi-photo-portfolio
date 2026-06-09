import Image from "next/image";
import PhotoFrame from "@/components/PhotoFrame";

const galleries = [
  {
    label: "GIRLHOOD",
    slug: "girlhood",
    count: 31,
    vertical: [3, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 19, 22, 25, 26, 29, 30]
  },
  {
    label: "LIGHT",
    slug: "light",
    count: 20,
    vertical: [1, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20]
  },
  {
    label: "MEMORY",
    slug: "memory",
    count: 34,
    vertical: [2, 5, 6, 9, 13, 15, 18, 22, 23, 25, 27, 28, 31, 34]
  },
  {
    label: "SEA",
    slug: "sea",
    count: 13,
    vertical: [4, 6, 9, 10]
  },
  {
    label: "SUMMER",
    slug: "summer",
    count: 0,
    vertical: []
  }
];

const tones = ["#d8d3ca", "#c4c7bf", "#d1c8bc", "#b9b6ad", "#dcd7ce"];

function padNumber(value) {
  return String(value).padStart(2, "0");
}

function getPhotos(gallery) {
  return Array.from({ length: gallery.count }, (_, index) => {
    const number = index + 1;
    const orientation = gallery.vertical.includes(number) ? "vertical" : "horizontal";

    return {
      src: `/images/${gallery.slug}/${gallery.slug}-${padNumber(number)}.jpg`,
      orientation
    };
  });
}

function PhotoGallery({ gallery }) {
  const photos = getPhotos(gallery);

  if (photos.length === 0) {
    return (
      <div className="flex min-w-max items-start gap-12 pr-12">
        <PhotoFrame
          className="h-[78vh] shrink-0 md:h-[100vh]"
          tone={tones[galleries.findIndex((item) => item.slug === gallery.slug) % tones.length]}
          style={{ aspectRatio: "4 / 3" }}
        />
      </div>
    );
  }

  return (
    <div className="flex min-w-max items-start gap-12 pr-12">
      {photos.map((photo, index) => {
        const aspectRatio = photo.orientation === "vertical" ? "9 / 16" : "4 / 3";

        return (
          <figure
            key={photo.src}
            className="relative h-[78vh] shrink-0 overflow-hidden bg-stone md:h-[100vh]"
            style={{ aspectRatio }}
          >
            <Image
              src={photo.src}
              alt=""
              fill
              sizes={photo.orientation === "vertical" ? "57vh" : "134vh"}
              className="object-cover"
              quality={92}
              priority={index < 2}
            />
          </figure>
        );
      })}
    </div>
  );
}

export default function PhotographsPage() {
  return (
    <main className="min-h-screen overflow-hidden px-5 pb-0 pt-28 sm:px-8 md:px-0 md:pt-0">
      <div className="h-[calc(100vh-7rem)] overflow-x-auto overflow-y-hidden md:h-screen">
        {galleries.map((gallery) => (
          <section key={gallery.slug} id={gallery.slug} className="mb-20 scroll-mt-24 md:scroll-mt-0">
            <PhotoGallery gallery={gallery} />
          </section>
        ))}
      </div>
    </main>
  );
}
