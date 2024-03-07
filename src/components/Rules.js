import "../App.css";

const Rules = ({onClose})=>{
    return (
       <div className="rules">
        <div><h2>How to Play This Game</h2></div>
        <div>
            <p>
                Select Any Number <br/>
                Click On Device Image <br />
                Afetr click on dice , if selected number is equal to dice number you will get same point as dice if you get wrong guess then 2 point will be deducted.
            </p>
            <button onClick={onClose}>Close</button>
        </div>
       </div>  
    )
}
export default Rules;
