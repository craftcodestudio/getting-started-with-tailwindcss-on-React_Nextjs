import {RiWechatFill} from "@remixicon/react";
import React from 'react';

function Tailwindcss() {
  return (
    <>
      <h3 className="">Using TailwindCSS Utility Classes Approach</h3>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 ">
        <div className="shrink-0">
          <RiWechatFill 
                  className="h-12 w-12"
                  color="skyblue" //default color to specify here...
          />
        </div>
        <div className="">
          <div className="text-xl font-medium text-black">Let's Chat</div>
          <p className="text-slate-500">We made it</p>
        </div>
      </div>
    </>
  )
}

export default Tailwindcss