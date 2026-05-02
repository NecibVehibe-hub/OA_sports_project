function OurNumberTalksCard({title,underTitle,text}){
    return(
        <div className="min-w-63.25 min-h-64 rounded-lg flex flex-col gap-4 p-3 bg-blackBg 3xl:rounded-[28px] 3xl:justify-center 3xl:max-w-100">
            <div className="flex flex-col gap-1">
                <span className="text-mainYellow font-platypiItalic font-bold text-3xl 3xl:text-5xl">{title}</span>
                <span className="text-openYellow font-platypiItalic text-2xl 3xl:text-[40px] ">{underTitle}</span>
            </div>
            <span className="text-whiteColor 3xl:text-2xl">
                {text}
            </span>
        </div>
    )
}
export default OurNumberTalksCard;