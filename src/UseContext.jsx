import React, { use, useContext, useState } from "react";
import { createContext } from "react";

export const MyContextData = createContext()

export const MyContextDataProvider = ({children})=>{
   const [empId,setEmpID] = useState("")
   const [userId,setUserId]=useState("")
  return(
     <MyContextData.Provider value={{empId,setEmpID,userId,setUserId}}>
      {children}
     </MyContextData.Provider>
  )
}
export const useMyContextData = ()=> useContext(MyContextData)
