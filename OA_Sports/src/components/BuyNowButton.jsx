function BuyNowButton({text,variant}){
    let baseStyle="bg-mainYellow flex justify-center items-center h-8  py-4.5 px-6 "
    let variants={
        "mediumButton":"rounded-lg text-blackBg drop-shadow-[0_8px_16px_rgba(210,255,0,0.16)]"
    }
    return(
        <button className={`${baseStyle} ${variants[variant]}`}>{text}</button>
    )
}
export default BuyNowButton;