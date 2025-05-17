import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyTutorials = () => {
  const [tutorials, setTutorials] = useState([]);

  // Replace this with the actual logged-in user's email
  const userEmail = "john@example.com";

  useEffect(() => {
    // fetch(`https://tutor-hub-server-xi.vercel.app/tutorials?email=${userEmail}`)
    //   .then(res => res.json())
    //   .then(data => setTutorials(data))

    axios.get(`https://tutor-hub-server-xi.vercel.app/tutorials?email=${userEmail}`, { withCredentials: true })
    // .then(res => console.log(setTutorials(res.data)))
     .then(res => {
      setTutorials(res.data);
      console.log(res.data);
    })
    .catch(error => console.error("Error fetching tutorials:", error));
}, [userEmail]);



// useEffect(() => {
//   // প্রথমে টোকেন নিবো
//   axios.post('https://tutor-hub-server-xi.vercel.app/jwt', 
//     { email: userEmail },
//     { withCredentials: true }
//   )
//   .then(res => {
//     const token = res.data.token;  // টোকেন ধরলাম

//     // এখন টোকেন দিয়ে tutorial আনবো
//     axios.get(`https://tutor-hub-server-xi.vercel.app/tutorials?email=${userEmail}`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       },
//       withCredentials: true
//     })
//     .then(res => setTutorials(res.data))
//     .catch(error => console.error("Error fetching tutorials:", error));
//   })
//   .catch(error => console.error("Error fetching token:", error));
// }, [userEmail]);


  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tutor-hub-server-xi.vercel.app/tutorials/${_id}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Tutor has been deleted.",
              icon: "success"
            });
            setTutorials( prev => prev.filter(tutorial => tutorial._id !== _id));
          }
        })
      }
    });
  }

  return (
    <div className="max-w-6xl mx-auto mt-12 p-4">
      <h2 className="text-3xl font-bold text-center text-orange-400 mb-6">My Tutorials:  {tutorials.length} </h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="table-auto w-full text-sm text-left text-gray-700">
          <thead className="bg-orange-400 text-white">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Language</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Review</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map((tutorial, index) => (
              <tr key={index} className="border-b hover:bg-orange-50">
                <td className="px-4 py-3 font-medium">{tutorial.name}</td>
                <td className="px-4 py-3">
                <img
                  src={tutorial.imageURL?.trim() ? tutorial.imageURL : '/default.png'}
                  alt="tutorial" className="rounded-lg w-12 h-12 object-cover"/>


                </td>
                <td className="px-4 py-3">{tutorial.language}</td>
                <td className="px-4 py-3">${tutorial.price}</td>
                <td className="px-4 py-3">{tutorial.description}</td>
                <td className="px-4 py-3">{tutorial.review}</td>
                <td className="px-4 py-3 space-x-2">
                <Link to={`/UpdateTutorials/${tutorial._id}`}>
                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded-lg">
                    Update
                  </button>
                </Link>
                                
                  <button 
                  onClick={() => handleDelete(tutorial._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {tutorials.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No tutorials added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorials;
