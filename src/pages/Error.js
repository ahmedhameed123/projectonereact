import React, {  useRef, useEffect } from 'react'
import lottie from 'lottie-web';

function Error() {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/lottiefiles/lf30_editor_tsq8jbs6 (1).json')
        })
    }, [])

    return (
        <div class="flex flex-col h-screen my-auto items-center justify-center   ">

<div className="rounded-full h-full w-full flex items-center justify-center sm:w-auto px-16  " ref={container}></div> 

        </div>
    )
}

export default Error
