function Title({start,center,end,ForInterestedCard}){
    return(
        <span className="font-platypiItalic text-3xl md:text-5xl text-whiteColor">{start} <span className="text-mainYellow">{center}</span> {end}</span>
    )
}
export default Title;