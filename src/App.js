import Main from './Main'
import GuestState from './Context/guestContext/GuestState'
import React, { useState, useEffect } from 'react'
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loding, setloding] = useState(false);

  useEffect(() => {
    setloding(true)
    setTimeout(() => {
      setloding(false)

    }, 1000)
  }, []);
  return (
    <>
      {
        loding ?
        <div class="flex flex-col h-screen my-auto items-center justify-center    bg-slidbarcolor">

          <RingLoader
            size={200}
            color={"#08fdd8"}
            loading={loding}
          />
          </div>

          :
          <GuestState>
            <Main />
          </GuestState>
      }

    </>
  );
}

export default App;
