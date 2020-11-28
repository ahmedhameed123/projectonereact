import React, { useReducer,useEffect } from 'react'
 import GuestContext from './guestContext';
import guestReducer from './guestReducer';
import {
 
  SUS_THEM,
  Active_NAV
  
} from '../types'

const GuestState = (props) => {
  const intialState = {
 
    backMode:localStorage.getItem("backMode") || 'light',  
    active: false,  

  
  }
  const [state, dispatch] = useReducer(guestReducer, intialState)

  useEffect(() => {
    localStorage.setItem('backMode',  state.backMode)
   }, [ state.backMode]);
const darkMode = async () => {
  try {
    dispatch({
      type: SUS_THEM,
      
    })
  } catch (err) {
    console.log("err");
  }
}



const activenav = async () => {
  try {
    dispatch({
      type: Active_NAV,
      
    })
  } catch (err) {
    console.log("err");
  }
}









  return (
    <GuestContext.Provider value={{
 
      backMode: state.backMode,
      active: state.active,

      activenav,
      darkMode
    }} >
      {props.children}
    </GuestContext.Provider >
  )
}

export default GuestState
