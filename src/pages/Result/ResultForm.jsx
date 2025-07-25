import React from "react";

const ResultForm = () => {
  return (
    <div className="py-20 pt-30 flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Result Checker
        </h2>

        <form className="space-y-6">
          {/* Enrollment Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enrollment Number
            </label>
            <input
              type="text"
              placeholder="Enter enrollment number"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResultForm;
