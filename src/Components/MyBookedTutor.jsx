import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const MyBookedTutors = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://tutor-hub-server-xi.vercel.app/bookings?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, [user]);

  const handleReview = (tutorId) => {
    fetch(`https://tutor-hub-server-xi.vercel.app/tutorials/review/${tutorId}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          alert('Thanks for your review!');
          // Reload updated review count
          setBookings(prev =>
            prev.map(item =>
              item.tutorId === tutorId
                ? { ...item, review: item.review + 1 }
                : item
            )
          );
        }
      });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Booked Tutors</h2>
      {bookings.length === 0 ? (
        <p className="text-center">No tutors booked yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {bookings.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4">
              <img src={item.image} alt="Tutor" className="rounded w-full h-48 object-cover mb-3" />
              <p><strong>Language:</strong> {item.language}</p>
              <p><strong>Price:</strong> ${item.price}</p>
              <p><strong>Review:</strong> {item.review ?? 0}</p>
              <button
                onClick={() => handleReview(item.tutorId)}
                className="mt-3 bg-orange-400 hover:bg-black text-white px-4 py-2 rounded"
              >
                Review
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookedTutors;
