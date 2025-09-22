import { useContext } from "react"
import CalContext from "../Context/Calculater"

const array =[{
    number:[1,2,3,4,5,6,7,8,9,0,"."],
    Operator:["AC","X²","√","/","-","×","+"],
    Equal:["="]    
}]
export default function Buttons(){
    const {handelnumber,handelOperator,hadnelEqual}=useContext(CalContext)
    return(
        <ol>

           
           
            <div className="allbutton">
                    {array[0].Operator.map((operator,index)=><div key={operator} className={index >=3 ?  `opred item-${index}` : ""}><button onClick={()=>handelOperator(operator)}>{operator}</button></div>)}
                
                    <div className="numbers ">
                        {array[0].number.map((number,index)=>
                        <div  key={index}><button onClick={()=>handelnumber(number)}>{number}</button></div>
                    )}
                     <div><button onClick={()=>hadnelEqual()}>{array[0].Equal}</button></div>
                    </div>
                
            </div>
        </ol>
    )
}