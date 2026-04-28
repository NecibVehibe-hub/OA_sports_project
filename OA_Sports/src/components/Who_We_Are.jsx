import Cards from "./Who_we_are_Cards";
import Title from "./Titels";
function WhoWeAre(){
    return(
        <>
            <div className="bg-black w-93.75 h-97.75 py-6 px-4 flex flex-col gap-4 ">
                <Title start={"Who"} center={"We"} end={"Are"}/>
                <div className="w-ful no-scrollbar overflow-auto h-70.75 overflow-x-auto flex gap-4 ">
                    <Cards text={"Every service we offer is meticulously designed to add value to your career and help you reach the top."}/>
                    <Cards text={"Our mission is to accompany professionals at all levels of sport, players, coaches, referees, clubs, and federations in building sustainable success through effective, long-term strategies."}/>
                    <Cards text={"Every service we offer is meticulously designed to add value to your career and help you reach the top."}/>
                </div>
            </div>
        </>
        
    )
}
export default WhoWeAre;