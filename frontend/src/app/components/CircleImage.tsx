import Image, { StaticImageData } from "next/image";

export default function CircleImage({ image }: { image: StaticImageData }) {
  return <Image className="w-12 h-12 rounded-full" src={image} alt="Image" />;
}
