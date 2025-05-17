import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';


const AddTutorials = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
  
    const name = e.target.name.value;
    // const email = e.target.email.value;
    const imageURL = e.target.imageURL.value;
    const language = e.target.language.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const review = parseFloat(e.target.review.value || 0);
  
    if (review < 0 || review > 5) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Review',
        text: 'Review must be between 0 and 5.',
      });
      return;
    }
  
    const addTutorial = {
      name, 
      email: user.email,
      application_email: user.email,  // ✅ এটা যোগ করো 
      imageURL, 
      language, 
      price, 
      description, 
      review
    }
    // console.log(name, email, imageURL, language, price, description, review);
  
    fetch('https://tutor-hub-server-xi.vercel.app/tutorials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({
      //   // name,
      //   // email,
      //   // imageURL,
      //   // language,
      //   // price,
      //   // description,
      //   // review
      //   addTutorial
      // }
      // body: JSON.stringify(addTutorial)
      body: JSON.stringify(addTutorial)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Tutorial Added Successfully!',
            icon: 'success'
          });
          e.target.reset();
        }
      })
      .catch(error => console.error('Error:', error));
  }
  
    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md my-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Tutorial</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <label className="block font-medium">Your Name</label>
                <input
                    type="text"
                    name='name'
                    placeholder="Your Name"
                    className="w-full border p-2 rounded bg-gray-100"
                />
                </div>
                <div>
                <label className="block font-medium">Your Email</label>
                <input
                    type="email"
                    name='email'
                    placeholder="Your Email"
                    className="w-full border p-2 rounded bg-gray-100"
                />
                </div>
                <div>
                <label className="block font-medium">Tutorial Image URL</label>
                <input
                    type="text"
                    name='imageURL'
                    placeholder="https://example.com/image.jpg"
                    className="w-full border p-2 rounded"
                />
                </div>
                <div>
                <label className="block font-medium">Language</label>
                <input
                    type="text"
                    placeholder="e.g., English"
                    name='language'
                    className="w-full border p-2 rounded"
                />
                </div>
                <div>
                <label className="block font-medium">Price ($)</label>
                <input
                    type="number"
                    placeholder="e.g., 25"
                    name='price'
                    className="w-full border p-2 rounded"
                />
                </div>
                <div>
                <label className="block font-medium">Description</label>
                <textarea
                    placeholder="Write something about this tutorial..."
                    name='description'
                    className="w-full border p-2 rounded"/>
                </div>
                <div>
                <label className="block font-medium">Review</label>
                <input
                    type="number"
                    name='review'
                    placeholder="0 to 5"
                    min="0"
                    max="5"
                    className="w-full border p-2 rounded"
                />
                </div>
                <button type="submit" className="w-full bg-orange-400 text-white py-2 rounded hover:bg-black">
                Submit Tutorial
                </button>
                
            </form>
        </div>

    );
};

export default AddTutorials;
