import React from "react";
import StatCard from "../components/Card";
import Location from "../components/Location";
import MotiveImages from "../components/Motive";
import Slogan from "../components/Slogan";

function HomePage() {
  const items = [
    {
      imageSrc:
        "https://c8.alamy.com/comp/2B7MAD0/this-area-is-a-smoke-free-zone-sign-with-no-smoking-symbols-2B7MAD0.jpg",
      text: "Make Smoke Free",
      description: "Prevent people from smoking in public place",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_EnwJGN6Zo_R2aOHuz1fAumDQMMiE0emMIw&usqp=CAU",
      text: "Ensure Public Health",
      description: "Everyone will be save",
    },
    // Add more items as needed
  ];
  return (
    <div className='relative'>
      <div className='mb-1'>
        <h1 className='text-3xl font-semibold  text-white mb-4'>Overview</h1>
      </div>

      <div className='flex gap-10'>
        <StatCard
          title='Total Cameras'
          number='500'
        />
        <StatCard
          title='Total Suspects'
          number='250'
        />
      </div>
      <div className='flex  mt-16  gap-36 items-center '>
        <div>
          <h1 className='text-3xl font-semibold  text-white mb-4'>Our Goal</h1>
          <MotiveImages items={items} />
        </div>
        <div>
          <h1 className='text-3xl font-semibold  text-white mb-4'>Locations</h1>
          <Location />
        </div>
      </div>
      <div className='relative'>
        <Slogan />
      </div>
    </div>
  );
}

export default HomePage;
