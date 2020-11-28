import React,{useContext} from 'react'
import GuestContext from '../Context/guestContext/guestContext'

function ActiveNav() {
    const {backMode, activenav} = useContext(GuestContext)

    return (
        <div className="sm:block md:hidden   py-8 ml-6">
            <div   onClick={activenav} >
                <i className={`fa fa-align-right text-2xl && ${ backMode === "light"?'text-hover' : 'text-textcolor'}`}></i>
                </div>
        </div>
    )
}

export default ActiveNav
