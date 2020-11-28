import React, { useContext, useRef, useEffect } from 'react'
import lottie from 'lottie-web';
import GuestContext from '../Context/guestContext/guestContext'

function About() {
    const { backMode } = useContext(GuestContext)
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/lottiefiles/lf30_editor_tem5zc2m.json')
        })
    }, [])
    return (
        < >
            <div className="">
                <div className="flex flex-row items-center justify-around  w-full flex-wrap  h-screen  mt-16 sm:flex-col  ">
                    {/* about text */}
                    <div  className="lg:w-6/12	 sm:w-full  px-8">
                    <h1 className={` text-6xl  font-two && ${backMode === "light" ? 'text-hover' : 'text-textcolor '}`}>
                        About me
                     </h1>
                        <p className={` text-2xl  font-three && ${backMode === "light" ? 'text-hover' : 'text-textcolor '}`}>
                            Professionally connected with the web development industry and information technology for many years.
                    </p>
                    <p className={` text-2xl  font-three && ${backMode === "light" ? 'text-hover' : 'text-textcolor '}`}>
                    Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor <br/>
                    activities, TV series and, recently, English literature. A family person, father of two fractious boys, therefore <br/>
                    remote employment is preferred.  </p>
                      </div>


                    {/* about anmation */}
                    <div className="lg:w-6/12 sm:w-full	" >
                        <div className="rounded-full h-full w-full flex items-center justify-center sm:w-auto px-16  " ref={container}></div>

\                    </div>
                </div>
            </div>
        </>
    )
}

export default About
