import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary"
};

export default function CTAButton({
  href,
  children,
  className = "",
  variant = "default"
}: CTAButtonProps) {
  const variants = {
    default: [
      "border border-white/35 bg-white/5 text-white",
      "hover:bg-white/10",
    ].join(" "),
    primary: [
      "border border-[#4F5CF9] bg-[#4F5CF9] text-white",
      "hover:bg-[#4451ea] hover:border-[#4451ea]",
      "shadow-[0_10px_30px_rgba(79,92,249,0.22)]",
    ].join(" "),
  };

  return (
    <Link
      href={href}
      className={[
        variants[variant],
        "inline-flex items-center gap-2 rounded-full border py-2 pr-2.5 pl-4",
        "font-heading text-white backdrop-blur-sm transition max-w-fit",
        className,
      ].join(" ")}
    >
      <span className="pt-0.5">{children}</span>
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-black text-sm">
        <ArrowUpRightIcon strokeWidth={2.5} className={`w-3 h-3 ${variant === 'default' ? "" : "text-[#4451ea]"}`} />
      </span>
    </Link>
  );
}