import { createContext, useState } from "react";

const CalContext=createContext({})
export function CalContextProvider({children}){
  const [FirstNumber,setFirstNumber]=useState("")  
  const [Operator,setOperator]=useState('')
  const [Out,setOut]=useState("")
  const [History,setHistory]=useState([])
  const [OpenModal,setOpenModal]=useState(false)

  function handelnumber(number){
    
    if(Operator===""){
      setFirstNumber(prev=>prev+number)
      setOut("")
    }else{
      setOut(prev=>prev+number)
    }
    
  }

  function handelOperator(Operat){
    if(!Operator && Operat==="X²"){
      console.log(Out)
      setFirstNumber(prev=>Out!=="" ? Out**2 : prev**2)
      setOut("")
    }
    if(!Operator && Operat==="√"){
      setFirstNumber(prev=>Out!=="" ? Out**0.5 : prev**0.5)
      setOut("")
    }

    if((Operat!=="AC" && Operat!=="X²")&& Operat!=="√"){
      setOperator(Operat)
    }else if(Operat!=="X²" && Operat!=="√"){
      setFirstNumber("")
      setOperator("")
    }
    if(Out!=="" && FirstNumber===""){
    setFirstNumber(Out)
    setOut("")
  }
  }
  function hadnelEqual(){
    
    const num1=+FirstNumber
    const num2=+Out
    let OutNum=0
    if(Operator==="+"){
      setOut(num1 + num2)
      OutNum=num1 + num2
    }else if(Operator==="-"){
      setOut(num1 - num2)
      OutNum=num1 - num2
    }else if(Operator==="×"){
      setOut(num1 * num2)
      OutNum=num1 * num2
    }else if(Operator==="/"){
      setOut(num1 / num2)
      OutNum=num1 / num2
    }
    setHistory(prev=>[...prev,num1+Operator+num2+"="+OutNum])

    setFirstNumber("")
    setOperator("")
  }


  function handelModal(){
    setOpenModal(prev=>!prev)
  }
  function RemoveHistory(){
    setHistory([])
  }
  const ValueCTX={
    FirstNumber,
    Out,
    Operator,
    OpenModal,
    History,
    RemoveHistory,
    handelModal,
    handelOperator,
    hadnelEqual,
    handelnumber,
  }
  return(
    <CalContext.Provider value={ValueCTX}>
        {children}
    </CalContext.Provider>
  )
}
export default CalContext