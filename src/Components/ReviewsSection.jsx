import React, { useEffect, useState } from 'react';

const ReviewsSection = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tutorials', {
      credentials: 'include', // for cookies / JWT
    })
      .then((res) => res.json())
      .then((data) => {
        setTutorials(data);
      });
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Students Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tutorials.map((tutor) => (
            <div
              key={tutor._id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={tutor.imageURL}
                  alt={tutor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{tutor.name}</h4>
                  <p className="text-sm text-gray-500">{tutor.language} Tutor</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-3">
                “Great teaching experience. Recommended by many learners.”
              </p>
              <div className="text-yellow-500 text-sm">
                {"★".repeat(tutor.review)}{"☆".repeat(5 - tutor.review)}
                <span className="ml-2 text-gray-600">({tutor.review} reviews)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
