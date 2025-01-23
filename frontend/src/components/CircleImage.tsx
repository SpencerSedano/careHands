export default function CircleImage({ image }: { image: string }) {
  return <img className="w-12 h-12 rounded-full" src={image} alt="Image" />;
}
