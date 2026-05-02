
function Cards({text}){
    return(
        <div className="w-75 h-69 3xl:h-full 3xl:w-full rounded-2xl p-2.5 flex items-end  border-3 border-r-0 border-t-0 border-l-mainYellow border-b-mainYellow bg-[url(./assets/ball2.jpg)] bg-cover bg-center">
            <div className="w-70 min-h-28.5 py-2 px-2 flex items-center justify-center gap-10 rounded-xl backdrop-blur-md bg-white/1 3xl:py-6 3xl:px-4 3xl:w-full">
                <span className="text-mainYellow 3xl:text-2xl">{text}</span>
            </div>
        </div>
    )
}
export default Cards;