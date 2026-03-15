import LogoBlack from "@/assets/logos/logo-black.svg";
import LogoWhite from "@/assets/logos/logo-white.svg";

type LogoProps = {
  variant?: "black" | "white";
  className?: string;
};

export default function Logo({
  variant = "black",
  className = ""
}: LogoProps) {
  const Component = variant === "white" ? LogoWhite : LogoBlack;

  return <Component className={`h-8 w-auto block ${className}`} />;
}