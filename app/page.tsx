import {RiWechatFill} from "@remixicon/react";
import Tailwindcss from "./tailwindcss";

export default function Home() {
  return (
    <>
      <h1 className="title">TailwindCSS | Utility-First Fundamentals</h1>
      
      <h3 className="title">Using Traditional CSS Approach</h3>
      <div className="chat-notify">
        <div className="chat-notify-wrap-logo">
          <RiWechatFill 
                  className="chat-notify-logo"
                  color="skyblue" //default color to specify here...
          />
        </div>
        <div className="chat-notify-content">
          <h4 className="chat-notify-title">Let's Chat</h4>
          <p className="chat-message">We made it</p>
        </div>
      </div>

      {/* this is component - Tailwindcss */}
      <div className="">
        <Tailwindcss />
      </div>
    </>
  );
}
