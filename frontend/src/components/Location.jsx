import React from "react";

function Location() {
  const locations = ["City 1", "City 2", "City 3", "City 4"];
  return (
    <div className="w-96 h-96">
      <div class='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div>
          <h2 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
            Locations of Cameras:
          </h2>
          <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
            {locations.map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Location;
