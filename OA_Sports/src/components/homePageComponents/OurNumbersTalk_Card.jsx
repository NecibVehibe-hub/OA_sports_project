function OurNumberTalksCard({title,underTitle,text}){
    return(
        <div className="min-w-63.25 min-h-64 rounded-lg flex flex-col gap-4 p-3 bg-blackBg">
            <div className="flex flex-col gap-1 ">
                <span className="text-mainYellow font-platypiItalic font-bold text-3xl">{title}</span>
                <span className="text-openYellow font-platypiItalic text-2xl ">{underTitle}</span>
            </div>
            <span className="text-whiteColor">
                {text}
            </span>
        </div>
    )
}
export default OurNumberTalksCard;