import React, { useContext } from 'react'
import GuestContext from '../Context/guestContext/guestContext'
import { Link } from 'react-router-dom'
function Work() {
    const { backMode } = useContext(GuestContext)
    return (
        < >
            <div className=" pt-16">
                <h1 className={` text-6xl text-center font-two && ${backMode === "light" ? 'text-hover' : 'text-textcolor '}`}>
                    my work</h1>
                <div className="flex justify-between flex-wrap w-full px-8">

                    <div className="py-3">
                        <div className={` rounded   shadow max-w-md mx-auto && ${backMode === "light" ? 'bg-slidbarcolor ' : 'bg-white'}`}>
                            <section>
                                <img src="http://lorempixel.com/700/450/nature/5/" />
                                <p className="text-sm text-gray-600 p-4">Omnis consectetur voluptatem labore aut et vel itaque recusandae. Et molestiae iure qui et nihil minus nes ciunt.</p>
                            </section>
                            <footer className="p-4">
                                <Link to="#" className="px-4 py-2 rounded-lg bg-hover hover:shadow-md font-bold text-slidbarcolor">Live Dome</Link>

                                <Link to="#" className="float-right mr-3 ">
                                    <i className="fab fa-github text-hover text-3xl"></i>
                                </Link>
                            </footer>
                        </div>
                    </div>


                    <div className="py-3">
                        <div className={` rounded   shadow max-w-md mx-auto && ${backMode === "light" ? 'bg-slidbarcolor ' : 'bg-white'}`}>
                            <section>
                                <img src="http://lorempixel.com/700/450/nature/5/" />
                                <p className="text-sm text-gray-600 p-4">Omnis consectetur voluptatem labore aut et vel itaque recusandae. Et molestiae iure qui et nihil minus nes ciunt.</p>
                            </section>
                            <footer className="p-4">
                                <Link to="#" className="px-4 py-2 rounded-lg bg-hover hover:shadow-md font-bold text-slidbarcolor">Live Dome</Link>

                                <Link to="#" className="float-right mr-3 ">
                                <i className="fab fa-github text-hover text-3xl"></i>             
                              </Link>
                            </footer>
                        </div>
                    </div>

                 
              
                    <div className="py-3">
                        <div className={` rounded   shadow max-w-md mx-auto && ${backMode === "light" ? 'bg-slidbarcolor ' : 'bg-white'}`}>
                            <section>
                                <img src="http://lorempixel.com/700/450/nature/5/" />
                                <p className="text-sm text-gray-600 p-4">Omnis consectetur voluptatem labore aut et vel itaque recusandae. Et molestiae iure qui et nihil minus nes ciunt.</p>
                            </section>
                            <footer className="p-4">
                                <Link to="#" className="px-4 py-2 rounded-lg bg-hover hover:shadow-md font-bold text-slidbarcolor">Live Dome</Link>

                                <Link to="#" className="float-right mr-3 ">
                                <i className="fab fa-github text-hover text-3xl"></i>             
                              </Link>
                            </footer>
                        </div>
                    </div>

                 
              



                </div>
            </div>
        </>
    )
}

export default Work
