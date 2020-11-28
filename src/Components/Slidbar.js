import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/imgs/logo.png'
import GuestContext from '../Context/guestContext/guestContext'

function SlidBar() {
  const {activenav} = useContext(GuestContext)

  return (
    <div className=" flex flex-col  items-center justify-between h-full align-center ">
      {/* Start Image Logo */}
      <img src={Logo} alt="logo" style={{ width: "#50px", height: "50px" }} />
      {/* End Image Logo */}

      {/* Start List NavLink   Pages */}
      <div>
 
        <ul className="list-none  text-center  " >
          <li className="pt-6 " > <NavLink className=" flex flex-col text-textcolor hover:text-hove    " onClick={activenav} activeStyle={{ color: 'Cyan' }} exact to='/'>
            <i className="fa fa-home text-2xl "></i> <span className="text-1xl">home</span> </NavLink  >
          </li>

          <li className="pt-6 "> <NavLink className=" flex flex-col text-textcolor hover:text-hover " onClick={activenav} activeStyle={{ color: ' Cyan' }} to='/about'>
            <i className="fa fa-user text-2xl "></i> <span className="text-1xl">about</span> </NavLink  >
          </li>

          <li className="pt-6 "> <NavLink className=" flex flex-col text-textcolor hover:text-hover " onClick={activenav} activeStyle={{ color: 'Cyan' }} to='/skills'>
            <i className="fa fa-gear text-2xl "></i> <span className="text-1xl">skills</span> </NavLink  >
          </li>

          <li className="pt-6 "> <NavLink className=" flex flex-col text-textcolor hover:text-hover " onClick={activenav} activeStyle={{ color: 'Cyan' }} to='/works'>
            <i className="fa fa-eye text-2xl "></i> <span className="text-1xl"> work</span> </NavLink  >
          </li>

          <li className="pt-6 "> <NavLink className=" flex flex-col text-textcolor hover:text-hover " onClick={activenav} activeStyle={{ color: 'Cyan' }} to='/contact'>
            <i className="fa fa-envelope text-2xl "></i> <span className="text-1xl">contact</span> </NavLink  >
          </li>
        </ul>

      </div>
      {/* End List NavLink   Pages */}

      {/* Start The Contact */}
      <div>
        <div className=" flex flex-col  items-center justify-between  h-full align-center ">
          <NavLink to="/"><i className="fa fa-linkedin-in text-9xl text-center text-textcolor hover:text-hover text-xl pb-3"></i> </NavLink  >
          <NavLink to="/"><i className="fa fa-github text-9xl text-center text-textcolor hover:text-hover text-xl  pb-3"></i> </NavLink  >
          <NavLink to="/"><i className="fa fa-facebook text-9xl text-center text-textcolor hover:text-hover text-xl  pb-3"></i> </NavLink  >
          <NavLink to="/"><i className="fa fa-instagram text-9xl text-center text-textcolor hover:text-hover text-xl  pb-3"></i> </NavLink  >
        </div>
      </div>
       {/* End The Contact */}
    </div>
  )
}

export default SlidBar
