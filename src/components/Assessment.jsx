import React from 'react';
import SidebarSection from './SidebarSection';

const InterviewPage = () => {
  return (
    <>
    <SidebarSection/>
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="text-center mb-10">
        <h1 className="text-2xl font-semibold">Joel's AI Interview</h1>
      </header>

      <div className="container mx-auto flex gap-4">
        {/* Left Card */}
        <div className="flex flex-col w-1/2 bg-white rounded-lg shadow-md">
          <div className="p-4">
            {/* Replace with actual video component or element */}
            <div className="w-full bg-black rounded-t-lg aspect-video"></div>
          </div>
          
          {/* Coach Comments Card */}
          <div className="bg-gray-200 p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Coach Comments</h2>
            <p>Commentary and feedback here...</p>
            {/* ... other paragraphs */}
          </div>
        </div>

        {/* Right Card */}
        <div className="w-1/2 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">Assessment</h2>
          {/* Assessment content goes here */}
        </div>
      </div>
    </div>
    </>
  );
};

export default InterviewPage;
