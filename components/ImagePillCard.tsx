import Image from "next/image";
import clsx from "clsx";

export type ImagePillCardProps = {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  heightClassName?: string;
};

export default function ImagePillCard({
  title,
  imageSrc,
  imageAlt = "",
  className,
  heightClassName = "h-[210px]",
}: ImagePillCardProps) {
  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden rounded-[100px] bg-black",
        heightClassName,
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={false}
        className="object-cover"
      />

      {/* Gradient od czarnego z lewej do prawej */}
      <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/45 to-transparent" />

      {/* Progressive blur po lewej stronie */}
      <div className="absolute inset-y-0 left-0 w-[68%] pointer-events-none">
        <div className="absolute inset-0 backdrop-blur-[2px] mask-[linear-gradient(to_right,black_0%,black_20%,rgba(0,0,0,0.85)_35%,rgba(0,0,0,0.45)_60%,transparent_100%)]" />
        <div className="absolute inset-0 backdrop-blur-md mask-[linear-gradient(to_right,black_0%,black_12%,rgba(0,0,0,0.8)_22%,rgba(0,0,0,0.2)_42%,transparent_60%)]" />
        <div className="absolute inset-0 bg-linear-to-r from-[#102a66]/55 via-[#1f4da8]/20 to-transparent" />
      </div>

      {/* Delikatne przyciemnienie całości dla spójności */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-10 md:px-14">
        <h2 className="max-w-105 text-white text-xl font-medium leading-[0.95] tracking-[-0.04em] md:text-2xl lg:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
