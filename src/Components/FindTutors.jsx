// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const FindTutors = () => {
//     const { language } = useParams();
//     const [tutors, setTutors] = useState([]);
//     const navigate = useNavigate();
  
//     // useEffect(() => {
//     //   let url = 'http://localhost:3000/tutorials';
//     //   if (language) {
//     //     url += `?language=${language}`;
//     //   }
//     //   fetch(url, {
//     //     method: 'GET',
//     //     credentials: 'include',  // ✅ Cookies পাঠাবে
//     //   })
//     //     .then(res => res.json())
//     //     .then(data => setTutors(data))
//     //     .catch(error => console.error('Error fetching tutors:', error));
//     // }, [language]);

//     useEffect(() => {
//     const userEmail = localStorage.getItem('email'); // ✅ Get user email from localStorage

//     let url = 'http://localhost:3000/tutorials';
//     const queryParams = [];

//     if (language) queryParams.push(`language=${language}`);
//     if (userEmail) queryParams.push(`email=${userEmail}`); // ✅ Include email in query

//     if (queryParams.length > 0) {
//       url += '?' + queryParams.join('&'); // ✅ Append both language and email
//     }

//     fetch(url, {
//       method: 'GET',
//       credentials: 'include', // ✅ Send cookies for JWT auth
//     })
//       .then(res => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then(data => setTutors(data))
//       .catch(error => console.error('Error fetching tutors:', error));
//   }, [language]); // ✅ Refetch if language changes

  
//     // useEffect(() => {
//     //   const userEmail = localStorage.getItem('email'); // 🔁 Replace this with context value if you're using AuthContext
    
//     //   let url = 'http://localhost:3000/tutorials';
//     //   const queryParams = [];
    
//     //   if (language) queryParams.push(`language=${language}`);
//     //   if (userEmail) queryParams.push(`email=${userEmail}`);
    
//     //   if (queryParams.length > 0) {
//     //     url += '?' + queryParams.join('&');
//     //   }
    
//     //   fetch(url, {
//     //     method: 'GET',
//     //     credentials: 'include',  // ✅ Cookies পাঠাবে
//     //   })
//     //     .then(res => res.json())
//     //     .then(data => setTutors(data))
//     //     .catch(error => console.error('Error fetching tutors:', error));
//     // }, [language]);
    
    
  

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center">
//         {language ? `${language} Tutors` : 'All Tutors'}
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {tutors.map((tutor, index) => (
//           <div key={index} className="bg-white p-4 rounded-xl shadow-md">
//             <img src={tutor.imageURL} alt={tutor.name} className="rounded-xl h-40 w-full object-cover mb-4" />
//             <h3 className="text-xl font-semibold">{tutor.name}</h3>
//             <p><strong>Language:</strong> {tutor.language}</p>
//             <p><strong>Price:</strong> ${tutor.price}</p>
//             <p><strong>Review:</strong> {tutor.review}</p>
//             <button
//               onClick={() => navigate(`/tutor/${tutor._id}`)}
//               className="mt-3 inline-block bg-orange-400 hover:bg-black text-white px-4 py-2 rounded">
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FindTutors;


// 2nd part


import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const FindTutors = () => {
  const { language } = useParams();
  const [tutors, setTutors] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // ✅ use context

  useEffect(() => {
    if (!user?.email) return; // ✅ wait until email is available

    let url = 'http://localhost:3000/tutorials';
    const queryParams = [];

    if (language) queryParams.push(`language=${language}`);
    queryParams.push(`email=${user.email}`);

    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }

    fetch(url, {
      method: 'GET',
      credentials: 'include', // ✅ send JWT cookie
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setTutors(data))
      .catch(error => console.error('Error fetching tutors:', error));
  }, [language, user?.email]); // ✅ trigger when user loads





  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center">
        {language ? `${language} Tutors` : 'All Tutors'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.map((tutor, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md">
            <img src={tutor.imageURL} alt={tutor.name} className="rounded-xl h-40 w-full object-cover mb-4" />
            <h3 className="text-xl font-semibold">{tutor.name}</h3>
            <p><strong>Language:</strong> {tutor.language}</p>
            <p><strong>Price:</strong> ${tutor.price}</p>
            <p><strong>Review:</strong> {tutor.review}</p>
            <button
              onClick={() => navigate(`/tutor/${tutor._id}`)}
              className="mt-3 inline-block bg-orange-400 hover:bg-black text-white px-4 py-2 rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTutors;


