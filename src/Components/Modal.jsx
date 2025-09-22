import { useEffect, useRef } from "react";

export default function Modal({children,open}){
    const dialog=useRef()
    useEffect(()=>{
        if(open){
            dialog.current.showModal()
        }else if(!open){
            dialog.current.close()
        }
    },[open])
    return(
        <dialog ref={dialog} className="Modal">
            {children}
        </dialog>
    )
}