import React, { useContext, useRef, useEffect } from 'react'
import lottie from 'lottie-web';
import Logo from '../assets/imgs/ahmed.jpg'
import Typical from 'react-typical'
import GuestContext from '../Context/guestContext/guestContext'

const steps = [
    'Hello 👋', 1000,
    'I am Ahmed Hameed', 1000,
    'I am front end devloper', 1000,
     
];    
function Home() {
    const {backMode} = useContext(GuestContext)
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/lottiefiles/lf30_editor_uwwmzgzg.json')
        })
    }, [])
    return (
        < >
            <div className="">
                <div className="flex flex-row items-center justify-around  w-full  flex-wrap  h-screen  mt-16 px-8  ">
                    {/* Home text */}
                    <div >
                        <h1 className={` text-2xl  font-one && ${ backMode === "light"? 'text-hover' : 'text-textcolor '}`}><span> <i className="fa fa-angle-left "></i></span>html<i className="fa fa-angle-right"></i></h1>
                        <h1 className={` text-2xl pl-2 font-one && ${ backMode === "light"? 'text-hover' : 'text-textcolor '}`}><span> <i className="fa fa-angle-left "></i></span>body<i className="fa fa-angle-right"></i></h1>
                        <h1 className={` text-2xl pl-6 font-one && ${ backMode === "light"? 'text-hover' : 'text-textcolor '}`}><span> <i className="fa fa-angle-left "></i></span>h1<i className="fa fa-angle-right"></i></h1>
                        <h3 className="text-4xl my-6  font-Poppins font-bold  font-three text-textcolor  " >I am Ahmed Hameed  </h3>

                         <h3 className="text-4xl my-6  font-Poppins font-bold  font-three text-textcolor" >  <Typical wrapper="span" steps={steps} loop={1} /></h3>
                         <h1 className={` text-2xl pl-6 font-one && ${ backMode === "light"? 'text-hover' : 'text-textcolor '}`}><span> <i className="fa fa-angle-left "></i></span>h1/<i className="fa fa-angle-right"></i></h1>
                    


                         <h1 className={` text-2xl pl-8 font-one && ${ backMode === "light"? 'text-hover' : 'text-textcolor '}`}><span> <i className="fa fa-angle-left "></i></span>button<i className="fa fa-angle-right"></i></h1>

                         <button className="shadow bg-hover hover:bg-hover focus:shadow-outline focus:outline-none text-slidbarcolor  font-bold py-2 px-4 rounded" type="submit">
              donlowed cv
                   </button>
                         <h1 className={` text-2xl pl-8 font-one && ${ backMode === "light"? 'text-hover' : 'text-textcolor '}`}><span> <i className="fa fa-angle-left "></i></span>button/<i className="fa fa-angle-right"></i></h1>

                    
                      <h1 className={` text-2xl pl-2 font-one && ${ backMode === "light"? 'text-hover' : 'text-textcolor '}`}><span> <i className="fa fa-angle-left "></i></span>body/<i className="fa fa-angle-right"></i></h1>
                         <h1 className={` text-2xl  font-one && ${ backMode === "light"? 'text-hover' : 'text-textcolor '}`}><span> <i className="fa fa-angle-left "></i></span>html/<i className="fa fa-angle-right"></i></h1>
                
                    </div>
                    <div className="" >
                    <div className="rounded-full h-full w-full flex items-center justify-center sm:w-auto px-16  " ref={container}></div> 

                        {/* <img src={Logo} alt="logo" className="rounded-full h-full w-full flex items-center justify-center sm:w-auto px-16  " /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
