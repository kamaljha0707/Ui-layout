import React from 'react'
import helpIcon from "../assets/Vector.png"
import frame from "../assets/Frame 1000002250.png"

function NavigationCard() {
  const [period, setPeriod] = React.useState(0);

  const handleChangePeriod = (index ) => {
    setPeriod(index);
  };

  return (
<div className='h-[316px] w-[720px] bg-[#363C43]  py-[18px] rounded-[18.89px] flex flex-col justify-top items-center items-top pt-6 overflow-hidden relative'>
<img src={helpIcon} className="w-[24px] h-[24px] absolute top-4 left-3" alt="help" />
<img src={frame} className=" absolute top-36 left-3" alt="Frame" />
  

<div className="rounded-[23px] relative w-[597px] py-3 bg-[#171717] p-2.5 flex items-center">
        <button
          className={`font-semibold w-full p-1.5 z-20 ${period === 0 ? 'text-white shadow-2xl shadow-black' : 'text-[#A3ADB2]  drop-shadow-2xl shadow-white'}`}
          onClick={() => handleChangePeriod(0)}
        >
          About Me
        </button>
        <button
          className={`font-semibold  w-full p-1.5 z-20 ${period === 1 ? 'text-white shadow-2xl shadow-black' : 'text-[#A3ADB2] drop-shadow-2xl shadow-white'}`}
          onClick={() => handleChangePeriod(1)}
        >
          Experiences
        </button>
        <button
          className={`font-semibold w-full p-1.5 z-20 ${period === 2 ? 'text-white shadow-2xl shadow-black' : 'text-[#A3ADB2]  drop-shadow-2xl shadow-white'}`}
          onClick={() => handleChangePeriod(2)}
        >
          Recommended
        </button>
        <div
          className="p-1.5 flex items-center justify-center absolute inset-0 w-1/3 z-10"
          style={{
            transform: `translateX(${period * 100}%)`,
            transition: "transform 0.3s",
          }}
        >
          <div className="bg-[#28292F] shadow-sm rounded-full w-full h-full"></div>
        </div>
      </div>
       
      

  <div className='content w-full h-full px-16 mt-7 overflow-y-scroll'>
    <p className='font-normal text-[20px] text-left text-[#969696] '>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. 
      <br />
   I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
   I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. 
   </p>
  </div>

</div>
  )
}

export default NavigationCard
