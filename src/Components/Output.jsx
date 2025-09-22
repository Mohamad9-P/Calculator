import { useContext } from "react"
import CalContext from "../Context/Calculater"

export default function OutPut(){
    const {FirstNumber,Out,Operator}=useContext(CalContext)
    
    return(
        <div className="Output">
            <h1>{(FirstNumber || Out)  ? FirstNumber : 0 } </h1>
            <h2> { Operator }</h2>
            <h1> { Out} </h1>
        </div>
    )
}