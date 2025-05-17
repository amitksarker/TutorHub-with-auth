import React from 'react';

const HowToWork = () => {
    return (
        <div className='px-4 py-12 bg-gray-50'>
            <div className='flex flex-col items-center my-6'>
                <h1 className='font-bold text-4xl text-center text-gray-800 mb-10'>How It Works</h1>

                {/* Card Section */}
                <div className='flex flex-wrap justify-center gap-6'>
                    {/* Card 1 */}
                    <div className="card bg-white w-full sm:w-80 md:w-96 shadow-md hover:shadow-xl transition rounded-2xl overflow-hidden">
                        <figure>
                            <img
                                src="https://i.ibb.co/LX9kyzJW/pexels-rdne-7414212.jpg"
                                alt="Find a Tutor"
                                className="w-full h-64 object-cover"
                            />
                        </figure>
                        <div className="card-body p-5">
                            <h2 className="card-title text-xl text-gray-700 mb-2">Browse & Choose Tutor</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Browse tutors by category or subject. View their profile, expertise, and ratings to find the perfect match for your learning goals.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card bg-white w-full sm:w-80 md:w-96 shadow-md hover:shadow-xl transition rounded-2xl overflow-hidden">
                        <div className="card-body p-5">
                            <h2 className="card-title text-xl text-gray-700 mb-2">Book a Session</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Once you've selected a tutor, book a session instantly. You'll receive confirmation and the tutor will be notified.
                            </p>
                        </div>
                        <figure>
                            <img
                                src="https://i.ibb.co/cS3dSg2q/pexels-rdne-7414008.jpg"
                                alt="Book Session"
                                className="w-full h-64 object-cover"
                            />
                        </figure>
                    </div>

                    {/* Card 3 */}
                    <div className="card bg-white w-full sm:w-80 md:w-96 shadow-md hover:shadow-xl transition rounded-2xl overflow-hidden">
                        <figure>
                            <img
                                src="https://i.ibb.co/SVWCkqN/dell-8pb7-Hq539-Zw-unsplash.jpg"
                                alt="Start Learning"
                                className="w-full h-64 object-cover"
                            />
                        </figure>
                        <div className="card-body p-5">
                            <h2 className="card-title text-xl text-gray-700 mb-2">Start Learning</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Join your session at the scheduled time and start learning. Don't forget to leave a review to help others find great tutors too!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToWork;
