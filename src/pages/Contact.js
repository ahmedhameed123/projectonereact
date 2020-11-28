import React from 'react'

function Contact() {
  return (
    <div className=" pt-16">
      <div className="max-w-screen-md mx-auto p-5">
        <div className="text-center mb-16">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
            Contact
      </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-textcolor">
            Get In <span className="text-hover">Touch</span>
          </h3>
        </div>

        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
      </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-hover rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
             </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
      </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-hover rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Email Address
      </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-hover rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Your Message
      </label>
              <textarea rows="10" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-hover rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

              </textarea>
            </div>
            <div className="flex justify-between w-full px-3">
             
              <button className="shadow bg-hover hover:bg-hover focus:shadow-outline focus:outline-none text-slidbarcolor  font-bold py-2 px-6 rounded" type="submit">
                Send Message
                   </button>
            </div>

          </div>

        </form>
      </div>

 
    </div>
  )
}

export default Contact
