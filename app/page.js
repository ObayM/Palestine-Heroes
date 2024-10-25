'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const leaders = [
    

  {
      "Name": "إسماعيل أبو شنب",
      "image_url": "https://upload.wikimedia.org/wikipedia/ar/a/a1/%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84_%D8%A3%D8%A8%D9%88_%D8%B4%D9%86%D8%A8.jpg",
      "date_of_birth": "1950",
      "date_of_death": "August 21, 2003",
      "short_description": "A senior political leader in Hamas, assassinated by an Israeli airstrike in 2003."
  },
  {
      "Name": "عبد العزيز الرنتيسي",
      "image_url": "https://upload.wikimedia.org/wikipedia/ar/0/07/Abdel_Aziz_al-Rantissi.jpg",
      "date_of_birth": "October 23, 1947",
      "date_of_death": "April 17, 2004",
      "short_description": "One of the co-founders of Hamas and a prominent leader, assassinated by Israel in 2004."
  },
  {
      "Name": "صلاح شحادة",
      "image_url": "data:image/jpeg;base64,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",
      "date_of_birth": "1953",
      "date_of_death": "July 22, 2002",
      "short_description": "A commander in Hamas’ military wing, known for his role in resistance activities, killed in an Israeli airstrike."
  },
  {
      "Name": "خالد مشعل",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Khaled_Meshaal_01_%28cropped%29.jpg/372px-Khaled_Meshaal_01_%28cropped%29.jpg",
      "date_of_birth": "May 28, 1956",
      "date_of_death": "Unkown",
      "short_description": "A prominent political leader in Hamas, survived an assassination attempt by Israel in 1997."
  },
  {
      "Name": "إسماعيل هنية",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/03-03-2020_Ismail_Haniyeh_%28cropped%29.jpg/338px-03-03-2020_Ismail_Haniyeh_%28cropped%29.jpg",
      "date_of_birth": "January 29, 1963",
      "date_of_death": "Unkown",
      "short_description": "A senior Hamas leader and current head of the Hamas Political Bureau."
  },
  {
      "Name": "جمال منصور",
      "image_url": "https://upload.wikimedia.org/wikipedia/ar/c/ca/JamalMansur.jpg",
      "date_of_birth": "1960",
      "date_of_death": "July 31, 2001",
      "short_description": "A senior Hamas political leader, killed in an Israeli airstrike in 2001."
  },
  {
      "Name": "يحيى السنوار",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/3/36/Yahya_al-Sinwar_2011_crop.JPG",
      "date_of_birth": "1962",
      "date_of_death": "Unkown",
      "short_description": "Leader of Hamas in Gaza and a founding member of its military wing."
  },
  {
      "Name": "صالح العاروري",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2022-09-13_Russia%E2%80%93Hamas_meeting_%2810%29_%28cropped%29.jpg/377px-2022-09-13_Russia%E2%80%93Hamas_meeting_%2810%29_%28cropped%29.jpg",
      "date_of_birth": "1966",
      "date_of_death": "Unkown",
      "short_description": "A senior Hamas leader responsible for its operations in the West Bank."
  },
  {
      "Name": "موسى أبو مرزوق",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/2022-09-13_Russia%E2%80%93Hamas_meeting_%2811%29_%28cropped%29.jpg/377px-2022-09-13_Russia%E2%80%93Hamas_meeting_%2811%29_%28cropped%29.jpg",
      "date_of_birth": "1951",
      "date_of_death": "Unkown",
      "short_description": "Deputy chairman of the Hamas Political Bureau."
  }

];


const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="relative">
        <div className="absolute inset-0 flex flex-col">
          <div className="h-1/3 bg-black" />
          <div className="h-1/3 bg-white" />
          <div className="h-1/3 bg-green-600" />
          <div className="absolute left-0 h-full w-[30%] bg-red-600" />
        </div>
        
        <div className="relative backdrop-blur-sm bg-black/30 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4 text-center">
              Palestinian Leaders
            </h1>
            <h2 className="text-3xl font-bold text-white mb-2 text-center font-arabic">
              قادة فلسطين
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {leaders.map((leader) => (
            <motion.div
              key={leader.Name}
              layoutId={leader.Name}
              onClick={() => setSelectedId(leader.Name)}
              className="cursor-pointer group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="relative pt-[120%] overflow-hidden">
                  <img
                    src={leader.image_url}
                    alt={leader.Name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 w-full p-6">
                    <h2 className="text-2xl text-right font-bold text-white mb-2">
                      {leader.Name}
                    </h2>
                    <div className="flex justify-end gap-2 text-sm">
                      <span className="bg-green-500/80 text-white px-3 py-1 rounded-full">
                        {leader.date_of_birth}
                      </span>
                      <span className="text-white">-</span>
                      <span className="bg-red-500/80 text-white px-3 py-1 rounded-full">
                        {leader.date_of_death}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-100 bg-gradient-to-br from-white to-gray-50">
                  <p className="text-gray-600 line-clamp-3">
                    {leader.short_description}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <span className="inline-flex items-center text-green-600 group-hover:text-red-600 transition-colors">
                      Read more 
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />
            <motion.div
              layoutId={selectedId}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl">
                {leaders.find(leader => leader.Name === selectedId) && (
                  <>
                    <div className="relative pt-[80%]">
                      <img
                        src={leaders.find(leader => leader.Name === selectedId).image_url}
                        alt={selectedId}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 w-full p-8">
                        <h2 className="text-4xl text-right font-bold text-white mb-4">
                          {leaders.find(leader => leader.Name === selectedId).Name}
                        </h2>
                        <div className="flex justify-end gap-3">
                          <span className="bg-green-500/90 text-white px-4 py-2 rounded-lg">
                            Born: {leaders.find(leader => leader.Name === selectedId).date_of_birth}
                          </span>
                          <span className="bg-red-500/90 text-white px-4 py-2 rounded-lg">
                            Death: {leaders.find(leader => leader.Name === selectedId).date_of_death}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-gray-600 text-lg">
                        {leaders.find(leader => leader.Name === selectedId).short_description}
                      </p>
                      <button
                        onClick={() => setSelectedId(null)}
                        className="mt-6 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Close
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;