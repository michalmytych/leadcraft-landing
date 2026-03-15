type TagProps = {
    content: string,
    className?: string
};

export default function Tag({ content, className = "" }: TagProps) {
    return <span
        key={content}
        className={`rounded-full border border-black/25 bg-zinc-200/70 px-4 py-1.5 font-content text-base leading-none text-black/60 md:text-[16px] ${className}`}
    >
        {content}
    </span>;
}