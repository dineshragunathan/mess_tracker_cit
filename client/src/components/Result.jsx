import './Result.css';
import winner from "../assets/Images/VEG/curd_rice.jpg";

export default function Result() {

    return(
        <>
            <div className = "result-main">
                <div className = "result-center-div">
                    {/* <p>Food of the Day!</p> */}
                    <div className = "winningFood">
                        <img src = {winner} alt = "Most Voted Food item" />
                    </div>
                    <div className = 'foodDescription'>
                        <h1>~Food Name~</h1>
                    </div>
                </div>
            </div>
        </>
    )
                
}



