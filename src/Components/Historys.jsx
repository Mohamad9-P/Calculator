import { useContext } from "react"
import Modal from "./Modal"
import CalContext from "../Context/Calculater"

export default function Historys(){
    const {OpenModal,History,handelModal,RemoveHistory}=useContext(CalContext)
    return(
        <>
            <button className="hisbutton" onClick={handelModal}><img src="./history.png" /></button>
        <Modal open={OpenModal}>
            <div className="history">
                <div className="close">
                    <button onClick={RemoveHistory}><img src="./trash.png"/></button>
                    <button onClick={handelModal}>Close</button>
                </div>
                
                <div className="info">
                    {!History[0] ? <h2>Empty</h2> : History.map(item=>{
                        return (<h4>{item}</h4>)
                    })}
                </div>

                
            </div>
        </Modal>
        </>
    )
}