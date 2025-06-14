import React from 'react'
import { education } from "../../constants";
const Education = () => {
  return (
   <section
        id="education"
        className="py-24 px-6 sm:px-12 md:px-20 lg:px-36 font-sans bg-skills-gradient"
      >
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white">Education</h2>
          <div className="w-24 h-1 mx-auto mt-3" style={{
            background: ' linear-gradient(90deg,#0d83fd,#a855f7)',
            boxShadow: '0 0 2px ##0d83fd, 0 0 2px #0d83fd, 0 0 40px #0d83fd '
          }}></div>
          <p className="text-gray-400 mt-4 text-lg font-medium">
            A timeline of my academic journey and growth through various institutions.
          </p>
        </div>
  
        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white z-0"></div>
  
          {education.map((edu, index) => {
            const isLeft = index % 2 === 0;
  
            return (
              <div
                key={edu.id}
                className={`relative mb-5 flex flex-col sm:flex-row items-center ${isLeft ? "sm:justify-start" : "sm:justify-end"
                  }`}
              >
                {/* Timeline Dot with Logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#0d83fd] w-14 h-14 rounded-full z-10 flex items-center justify-center shadow-lg">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-10 h-10 object-contain rounded-full"
                  />
                </div>
  
                {/* Experience Card */}
                <div
                  className={`mt-20 sm:mt-0 sm:w-1/2 w-full px-4 sm:px-0 ${isLeft ? "sm:pr-12" : "sm:pl-12"
                    }`}
                >
                  <div className="bg-gray-900 border border-white rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] p-6 hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white rounded-md p-1">
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                        <p className="text-sm text-gray-300">{edu.school}</p>
                        <p className="text-xs text-gray-500">{edu.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 ">{edu.grade}</p>
                     <p className="text-md text-gray-300 text-justify ">{edu.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
  )
}

export default Education