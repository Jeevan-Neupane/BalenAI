import React from "react";

const SuspectTable = ({ suspects }) => {
  // Array of data
  

  return (
    <div className='relative overflow-x-auto mr-6'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th
              scope='col'
              className='px-6 py-3'
            >
              SN
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Date
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Time
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Location
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Image
            </th>
          </tr>
        </thead>
        <tbody>
          {suspects?.map((item, index) => (
            <tr
              key={index}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
            >
              <td className='px-6 py-4'>{index + 1}</td>
              <td className='px-6 py-4'>{item.date}</td>
              <td className='px-6 py-4'>{item.time}</td>
              <td className='px-6 py-4'>{item.location}</td>
              <td className='px-6 py-4'>
                <img
                  src={item.image}
                  alt={`Image ${index}`}
                  className='w-16 h-16 object-cover'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuspectTable;
