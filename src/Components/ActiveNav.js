import React,{useContext} from 'react'
import GuestContext from '../Context/guestContext/guestContext'

function ThemDark() {
    const {darkMode,backMode} = useContext(GuestContext)

    return (
        <div className=" py-8 mx-8 float-right">
 <div 
             onClick={darkMode}
        >
            <span  >
                {backMode === "light" ?<i className="fas fa-moon text-3xl" style={{ color: 'yellow' }}></i>: <i className="fas fa-sun   text-3xl text-textcolor " ></i> }
                 
            </span>
 

  </div>      
          </div>
    )
}

export default ThemDark
