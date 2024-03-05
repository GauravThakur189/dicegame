import "../App.css";


const FrontPage = ({toggle})=>{
      
    return (
        <div className="container">
            <div className="image">
               <img src="/pngimg.png" alt="dice" />
            </div>
            <div>
            <div className="heading"><h1>DICE GAME</h1></div>
             <div className="button"><button onClick={toggle}>Play Now</button></div>   
                
            </div>
        </div>
    )
}

export default FrontPage;