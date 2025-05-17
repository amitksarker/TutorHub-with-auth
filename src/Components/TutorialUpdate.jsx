import React from 'react';

const TutorialUpdate = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl">
                <h3 className="text-xl font-semibold mb-4 text-orange-400">Update Tutorial</h3>
                <form className="space-y-4">
                <input type="text" value="John Doe" readOnly className="w-full px-4 py-2 rounded bg-gray-100 text-gray-500" />
                <input type="email" value="john@example.com" readOnly className="w-full px-4 py-2 rounded bg-gray-100 text-gray-500" />

                <input type="text" placeholder="Image URL" className="w-full px-4 py-2 rounded bg-orange-100 text-orange-500" />
                <input type="text" placeholder="Language" className="w-full px-4 py-2 rounded bg-orange-100 text-orange-500" />
                <input type="number" placeholder="Price" className="w-full px-4 py-2 rounded bg-orange-100 text-orange-500" />
                <textarea rows="3" placeholder="Description" className="w-full px-4 py-2 rounded bg-orange-100 text-orange-500" />

                <input type="number" value="5" readOnly className="w-full px-4 py-2 rounded bg-gray-100 text-gray-500" />

                <button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-lg font-medium">Update</button>
                </form>
            </div>
        </div>
    );
};

export default TutorialUpdate;