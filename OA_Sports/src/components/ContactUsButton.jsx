function ContactUsButton({text,variant}){
    let baseStyle="h-11 flex justify-center items-center rounded-lg py-4.5"
    
    const variants={
        MenuButton:"w-full font-bold px-6  bg-mainYellow shadow-[0_2px_4px_0_rgba(195,255,26,1)] text-blackBg",
        HomePageButton:"w-29 h-11 bg-none text-mainYellow  border rounded-lg",
    }



    return(
        <button className={`${baseStyle} ${variants[variant]}`}>{text}</button>
    )
}
export default ContactUsButton;
