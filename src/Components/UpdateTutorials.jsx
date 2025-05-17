import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateTutorials = () => {
  const tutorial = useLoaderData();
  const navigate = useNavigate();

  const { _id, name, email, imageURL, language, price, description, review } = tutorial;

  const handleUpdate = e => {
    e.preventDefault();
    const updatedTutorial = {
        name,
        email,
      imageURL: e.target.imageURL.value,
      language: e.target.language.value,
      price: e.target.price.value,
      description: e.target.description.value,
      review 
    };

    fetch(`https://tutor-hub-server-xi.vercel.app/tutorials/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTutorial)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Tutorial updated successfully!',
            icon: 'success'
          });
          navigate('/MyTutorials');
        }
      });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md my-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Update Tutorial: {name} </h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium">Your Name</label>
          <input
            type="text"
            defaultValue={name}
            name="name"
            readOnly
            className="w-full border p-2 rounded bg-gray-200"
          />
        </div>
        <div>
          <label className="block font-medium">Your Email</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            readOnly
            className="w-full border p-2 rounded bg-gray-200"
          />
        </div>
        <div>
          <label className="block font-medium">Tutorial Image URL</label>
          <input
            type="text"
            name="imageURL"
            defaultValue={imageURL}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Language</label>
          <input
            type="text"
            name="language"
            defaultValue={language}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Price ($)</label>
          <input
            type="number"
            name="price"
            defaultValue={price}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            defaultValue={description}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Review</label>
          <input
            type="number"
            name="review"
            value={review}
            disabled
            className="w-full border p-2 rounded bg-gray-200"
          />
        </div>
        <button type="submit" className="w-full bg-orange-400 text-white py-2 rounded hover:bg-black">
          Update Tutorial
        </button>
      </form>
    </div>
  );
};

export default UpdateTutorials;
