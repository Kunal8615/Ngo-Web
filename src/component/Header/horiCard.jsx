import React from 'react';
import profile from "../../images/profile.png"

function HoriCard() {
  return (
    <>
      <div className="flex justify-center items-center p-5">
      <div className="relative flex flex-col md:flex-row bg-clip-border rounded-xl border-2 bg-white text-gray-700 shadow-md w-full max-w-[72rem]">
  {/* Image Section */}
  <div className="relative w-full md:w-1/3 h-64 md:h-auto overflow-hidden bg-white rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
    <img
      src= {profile}
      className="object-cover w-full h-full"
    />
  </div>

  {/* Content Section */}
  <div className="p-6 flex flex-col justify-center w-full md:w-2/3">
    <h6 className="text-base font-semibold text-gray-700 uppercase mb-1">
      Director in Chief 
    </h6>
    <h4 className="text-2xl font-semibold text-blue-gray-900 mb-2">
      Dr. Jasbir Arya
    </h4>
    <p className="text-base text-gray-700 leading-relaxed">
      My life aim is to contribute towards building India as an economic and military superpower while maintaining its spiritual and peaceful essence. I have completed a Bachelor’s degree in Sociology and obtained professional qualifications, including a Diploma in Journalism, Ayurvedacharya (B.A.M.S.), and various degrees in Ayurvedic and naturopathic practices. I am also certified in C.E.H.M. from Britain. With experience as a Senior Journalist and Writer, I specialize in crime news and intelligence services. Additionally, I am well-versed in Ayurvedic & Herbal Medicines, Yoga, Meditation, and Naturopathy. I possess strong management and leadership skills, and I value punctuality, discipline, and a deep commitment to nationalism and humanity. I have worked across various regions of India, aiming to make a meaningful impact through my diverse expertise.
    </p>
  </div>
</div>

      </div>
    </>
  );
}

export default HoriCard;
