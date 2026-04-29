import newStar from "../../assets/newStar.png"

function Footer(){
    return(
        <footer className="bg-blackBg text-white w-full h-130 p-4 flex flex-col gap-16">
            <div className="w-full h-full bg-amber-600 flex flex-col gap-8">
                <div className="w-full h-109 flex flex-col gap-8 bg-amber-200">
                    <div className="flex w-83 flex-col gap-2.5">
                        <img src={newStar} className="w-23 h-22" alt="" />
                        <p className="text-whiteColor">
                            OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof.
                        </p>
                    </div>
                    <div className="w-full h-full flex flex-col gap-8 bg-amber-500">
                        <div className="flex justify-between w-full h-35.5 bg-gray-300">
                            <div className="">
                                asdf
                                <br />
                                asdf
                                <br />
                                asdf
                                <br />
                                asdf
                                <br />
                                asdf
                                <br />
                                asdf
                                <br />
                            </div>
                            <div className="w-40.75">
                                asdf
                                <br />
                                asdf
                                <br />
                                asdf
                                <br />
                                asdf
                            </div>
                        </div>
                        <div className="">
                            <span>asdfasdf</span>
                            <br />
                            <p>icons icons icons icons icons </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    son kisim
                </div>
            </div>
        </footer>
    )
}
export default Footer;