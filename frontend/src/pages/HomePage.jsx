import React from "react";
import StatCard from "../components/Card";

function HomePage() {
  return (
    <div>
      <div className='mb-1'>
        <h1 className='text-3xl font-semibold text-gray-800 mb-1'>Overview</h1>
      </div>

      <div className='flex'>
        <StatCard
          title='Total Users'
          number='500'
        />
        <StatCard
          title='Active Users'
          number='250'
        />
      </div>
    </div>
  );
}

export default HomePage;
