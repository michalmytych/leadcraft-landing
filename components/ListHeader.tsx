type ListHeaderPropsType = {
    elementNumber: number;
    title: string;
};

export default function ListHeader({
    elementNumber,
    title
}: ListHeaderPropsType) {
    return <div className="bg-black">
        <div className="relative">
            <div className="absolute bg-white h-12 w-12 rounded-full font-heading text-black">
                
            </div>
        </div>
    </div>
}