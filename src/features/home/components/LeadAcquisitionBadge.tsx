type LeadAcquisitionBadgeProps = {
  headingLines: string[];
  bodyPrefix: string;
  bodyHighlight: string;
  bodySuffixLines: string[];
  className?: string;
};

export default function LeadAcquisitionBadge({
  headingLines,
  bodyPrefix,
  bodyHighlight,
  bodySuffixLines,
  className = "",
}: LeadAcquisitionBadgeProps) {
  return (
    <div
      className={[
        "flex aspect-square w-full max-w-[760px] flex-col justify-center rounded-full",
        "bg-[radial-gradient(circle_at_48%_28%,#33344f_0%,#303149_55%,#56546a_100%)]",
        "px-[14%] text-white shadow-[0_34px_90px_rgba(0,0,0,0.28)]",
        className,
      ].join(" ")}
    >
      <h2 className="font-heading text-[clamp(52px,7vw,100px)] font-light leading-[0.96]">
        {headingLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>

      <p className="mt-7 font-heading text-[clamp(32px,4.6vw,60px)] font-light leading-[0.98]">
        <span className="block">{bodyPrefix}</span>
        <strong className="block font-bold">{bodyHighlight}</strong>
        {bodySuffixLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}
