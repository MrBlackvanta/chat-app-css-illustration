import grinningOnPath from "@/assets/dog-image-1.webp";
import sittingOnSand from "@/assets/dog-image-2.webp";
import carryingStick from "@/assets/dog-image-3.webp";

const photos = [
  { image: grinningOnPath, alt: "A red retriever grinning on a woodland path" },
  {
    image: sittingOnSand,
    alt: "The same dog sitting on sand, wearing a collar",
  },
  {
    image: carryingStick,
    alt: "The same dog carrying a long stick through a wet forest",
  },
];

export default function PhotoStrip() {
  return (
    <div className="flex gap-2">
      {photos.map(({ image, alt }) => (
        <img
          key={image.src}
          src={image.src}
          alt={alt}
          width={40}
          height={40}
          className="size-10 rounded-bubble shadow-raised"
        />
      ))}
    </div>
  );
}
