import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom';
import SlidBar from './Components/Slidbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Error from './pages/Error'

import GuestContext from './Context/guestContext/guestContext'
import ThemDark from './Components/ThemDark'
import ActiveNav from './Components/ActiveNav'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

function Main() {
  const { backMode, active } = useContext(GuestContext)

  return (
    <div className="flex ">

      {/*Slider Bar */}
      <div className={`w-0 sm:w-0 md:w-20 lg:w-20  ${active ? 'w-20' : 'w-0'}`}>

        <div className={`flex-shrink-0 h-screen overflow-hidden bg-slidbarcolor p-3 && ${backMode === "light" ? 'bg-slidbarcolor ' : 'bg-white'}`}>
          <SlidBar />

        </div>
      </div>

      {/*Route all of pages*/}
      <div className="w-full     ">
        <div className={`h-screen overflow-y-auto && ${backMode === "light" ? 'bg-pagescolor ' : 'bg-white'}`}>

          <div className="flex flex-col ">
            <div className="relative">
            {/* <div className=" "> */}
            <div className={`fixed    z-50 w-full  flex flex-row justify-between && ${backMode === "light" ? 'bg-pagescolor ' : 'bg-white'}`}>

            <ThemDark />
               <ActiveNav />
           
            </div>
            </div>
        
            <div>
              <Route render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={600}
                    classNames="fade"
                  >
                    <Switch location={location}>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/about' component={About} />
                      <Route exact path='/skills' component={Skills} />
                      <Route exact path='/works' component={Work} />
                      <Route exact path='/contact' component={Contact} />
                      <Route   component={Error} />

                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )} />
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Main
