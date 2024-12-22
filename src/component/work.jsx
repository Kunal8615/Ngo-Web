import React from "react";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";

function WorkProfile() {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-8">Work Profile</h1>

      {/* Categories */}
      <div className="space-y-10">

        {/* Press Media Section */}
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-300 mb-4">Press Media</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chief Editor</strong>, Delhi Times News (DTN).</li>
              <li><strong>Chief Editor</strong>, Crime Free India (Group of Newspapers).</li>
              <li><strong>Chief Editor</strong>, Media Force (monthly).</li>
              <li><strong>Chief Editor</strong>, Lokpriya Delhi Times (weekly).</li>
              <li><strong>Chief Editor</strong>, Arya Sangharsh.</li>
              <li><strong>Chief Editor</strong>, Electro-Homeopathy Jagat.</li>
              <li><strong>Managing Editor</strong>, Sabki Nazar (weekly).</li>
              <li><strong>Managing Editor</strong>, Daily Bhartiya Sahara.</li>
              <li><strong>Managing Editor</strong>, Barpagga Samaj.</li>
              <li><strong>Editor Advisor</strong>, Ayurved Dhanwantari.</li>
              <li><strong>Associate Editor</strong>, Dainik Aman Ke Sipahi.</li>
            </ul>
          </div>

          {/* Images */}
          <div className="flex flex-wrap gap-4 lg:-ml-8">
            <img
              src={img1}
              alt="Press Media 1"
              className="w-full sm:w-48 h-48 object-cover rounded-lg"
            />
            <img
              src={img2}
              alt="Press Media 2"
              className="w-full sm:w-48 h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Media Organizations Section */}
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-300 mb-4">Media Organizations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chairman</strong>, National Media Force, New Delhi.</li>
              <li><strong>National Vice President</strong>, Bhartiya Anshkalik Patrakar Mahasamiti.</li>
              <li><strong>National Vice President</strong>, Newspapers & Magazines Federation of India.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 lg:-ml-8">
            <img
              src={img3}
              alt="Media Organizations 1"
              className="w-full sm:w-48 h-48 object-cover rounded-lg"
            />
            <img
              src={img4}
              alt="Media Organizations 2"
              className="w-full sm:w-48 h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* NGOs Section */}
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-300 mb-4">NGOs</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chairman</strong>, Crime Free India Bureau (CFIB).</li>
              <li><strong>Chairman</strong>, Sri Guru Ravidas Charitable Trust.</li>
              <li><strong>Chairman</strong>, Dr. Bhimrao Ambedkar Morcha.</li>
              <li><strong>National President</strong>, Akhil Bhartiya Arya Yuvak Sabha.</li>
              <li><strong>Vice President</strong>, Sri Neelkanth Mahadev Guru Ashram, Distt. Kangra (H.P.).</li>
              <li><strong>Chief Patron</strong>, Sri Guru Ravidas Dharma Sathan, R.K. Puram, New Delhi.</li>
              <li><strong>Co-opted Member</strong>, Central Committee of Sri Guru Ravidas Dharamsthan’s Delhi.</li>
              <li><strong>President</strong>, Mohalla Sudhar Samiti, Chandra Park, Kakrola, New Delhi.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 lg:-ml-8">
            <img
              src={img5}
              alt="NGOs 1"
              className="w-full sm:w-48 h-48 object-cover rounded-lg"
            />
            <img
              src={img6}
              alt="NGOs 2"
              className="w-full sm:w-48 h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Medical Organizations Section */}
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-300 mb-4">Medical Organizations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Executive Chairman</strong>, World Ayurved Research & Development Council.</li>
              <li><strong>Director (India Chapter)</strong>, World Spargic Homeopathy Organization (UK).</li>
              <li><strong>Vice President</strong>, Bhartiya Ayurved Vikas & Vishwa Vigyan Shodh Sansthan.</li>
              <li><strong>Life Member</strong>, All India Ayurved Congress, New Delhi.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 lg:-ml-8">
            <img
              src={img7}
              alt="Medical Organizations 1"
              className="w-full sm:w-48 h-48 object-cover rounded-lg"
            />
            <img
              src={img8}
              alt="Medical Organizations 2"
              className="w-full sm:w-48 h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProfile;
