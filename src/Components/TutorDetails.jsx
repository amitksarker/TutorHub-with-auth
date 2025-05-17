import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const TutorDetails = () => {
  const { details } = useParams();
  const [tutor, setTutor] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://tutor-hub-server-xi.vercel.app/tutorials/${details}`)

      .then(res => res.json())
      .then(data => setTutor(data))
      .catch(error => console.error('Error loading tutor:', error));
  }, [details]);

  const handleBook = () => {
    const bookingInfo = {
      tutorId: tutor._id.toString() ,
      image: tutor.imageURL,
      language: tutor.language,
      price: tutor.price,
      tutorEmail: tutor.email,
      email: user?.email, // in case user is null
    };

    fetch('https://tutor-hub-server-xi.vercel.app/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingInfo),
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        alert('Booking successful!');
      } else {
        alert('Something went wrong. Try again.');
      }
    })
    .catch(error => {
      console.error('Booking error:', error);
      alert('Booking failed.');
    });
  };

  if (!tutor) return <p className="text-center text-xl font-semibold mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8">
      <img src={tutor.imageURL} alt={tutor.name} className="rounded-xl w-full h-60 object-cover mb-4" />
      <h2 className="text-2xl font-bold mb-2">{tutor.name}</h2>
      <p><strong>Language:</strong> {tutor.language}</p>
      <p><strong>Description:</strong> {tutor.description}</p>
      <p><strong>Price:</strong> ${tutor.price}</p>
      <p><strong>Review:</strong> {tutor.review}</p>
      <button
        onClick={handleBook}
        className="mt-4 bg-orange-400 hover:bg-black text-white px-6 py-2 rounded"
      >
        Book
      </button>
    </div>
  );
};

export default TutorDetails;
