import React from "react";

function Location() {
  const locations = ["Satdobato", "Koteshor", "Pulchowk", "Thimi"];
  return (
    <div className="w-96 h-96">
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
            Locations of Cameras:
          </h2>
          <ul className="text-xl max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
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
