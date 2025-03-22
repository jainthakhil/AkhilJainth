// import React from 'react'
// import waveimg from '../media/images/student.gif'
// import wavevideo from '../media/images/student.mp4'

// const ProfileGreetMessage = (props) => {
//   return (
//     <div className='greet-message w-[250px] h-[100px] flex items-center justify-start bg-white rounded-2xl shadow-lg p-4'>
//     {/* <img src={waveimg} alt="" className='h-16 aspect-square mr-8' draggable='false'/> */}
//     <video src={wavevideo} loop onmouseover="this.play()" onmouseout="this.pause(); this.currentTime=0;"></video>
//         <div className="message-cont h-full ">
//             <p className='text-sm'>Hello, I am</p>
//             <h2 className='text-[2.5rem] font-semibold'>{props.name}</h2>
//         </div>

//     </div>
//   )
// }

// export default ProfileGreetMessage


// import React, { useRef } from "react";
// import wavevideo from "../media/images/student.mp4";

// const ProfileGreetMessage = (props) => {
//   const videoRef = useRef(null);

//   return (
//     <div className="greet-message w-[250px] h-[100px] flex items-center justify-start bg-white rounded-2xl shadow-lg p-4">
//       {/* Video with hover play effect */}
//       <video
//         ref={videoRef}
//         src={wavevideo}
//         loop
//         muted
//         className="h-20 aspect-square mr-4"
//         onMouseEnter={() => videoRef.current.play()}
//         onMouseLeave={() => {
//           videoRef.current.pause();
//           videoRef.current.currentTime = 0;
//           videoRef.current.playbackRate = 1.5;
//         }}
//       ></video>

//       <div className="message-cont h-full">
//         <p className="text-sm">Hello, I am</p>
//         <h2 className="text-[2.5rem] font-semibold">{props.name}</h2>
//       </div>
//     </div>
//   );
// };

// export default ProfileGreetMessage;


import React, { useRef } from "react";
import wavevideo from "../media/images/student.mp4";

const ProfileGreetMessage = (props) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.playbackRate = 1.5; // Adjust speed
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="greet-message w-[250px] h-[100px] flex items-center justify-start bg-white rounded-2xl shadow-lg p-4 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={wavevideo}
        loop
        muted
        className="h-20 aspect-square mr-4"
      ></video>

      <div className="message-cont h-full">
        <p className="text-sm">Hello, I am</p>
        <h2 className="text-[2.5rem] font-semibold">{props.name}</h2>
      </div>
    </div>
  );
};

export default ProfileGreetMessage;
