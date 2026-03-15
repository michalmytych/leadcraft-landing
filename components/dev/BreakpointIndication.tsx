export default function BreakpointIndicator({ className = "" }: { className: string }) {
    return <div className={`absolute -top-4 -left-2 xl:bg-red-600 lg:bg-orange-500 md:bg-yellow-500 sm:bg-lime-400 text-black text-3xl font-bold w-4 h-4 ${className}`}></div>;
}