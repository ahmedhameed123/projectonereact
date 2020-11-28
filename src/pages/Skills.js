import React, { useContext, useRef, useEffect } from 'react'
import lottie from 'lottie-web';
import GuestContext from '../Context/guestContext/guestContext'

function Skills() {
    const { backMode } = useContext(GuestContext)
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/lottiefiles/34525-working-and-drinking-coffee-in-office.json')
        })
    }, [])
    return (
        < >
            <div className="">
                <div className="flex flex-row items-center justify-around  w-full flex-wrap  h-screen  mt-16 sm:flex-col  ">
                    {/* Skills text */}
                    <div  className="lg:w-4/12	 sm:w-full px-16  ">
                    <h1 className={` text-6xl  font-two && ${backMode === "light" ? 'text-hover' : 'text-textcolor '}`}>
                        Skills &  Experience 
                     </h1>
                        <p className={` text-2xl  font-three && ${backMode === "light" ? 'text-hover' : 'text-textcolor '}`}>
                        The main area of my expertise is front end development (client side of the web).
                                            </p>
                    <p className={` text-2xl  font-three && ${backMode === "light" ? 'text-hover' : 'text-textcolor '}`}>
                    HTML, CSS, JS (TypeScript), building small and medium web apps with Angular 2+, custom plugins, features, animations, and coding interactive layouts.
                    </p>
                    <p className={` text-2xl  font-three && ${backMode === "light" ? 'text-hover' : 'text-textcolor '}`}>
                    I have also full-stack developer experience with open source CMS like (WordPress, Drupal, Magento, Keystone.js and other)           
                             </p>
                  
                      </div>


                    {/* Skills anmation */}
                    <div className="lg:w-8/12 sm:w-full	" >
                         <div className="rounded-full h-full w-full flex items-center justify-center sm:w-auto px-16  " ref={container}></div> 

\                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
