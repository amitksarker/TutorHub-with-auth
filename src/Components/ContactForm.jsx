import React from 'react';

const SuccessStories = () => {
    return (
        <div className="bg-orange-400 text-white px-4 py-14">
            <div className="text-center mb-12">
                <h1 className="font-bold text-4xl">Success Stories</h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Discover how TutorHub has helped our users reach their full potential!
                </p>
            </div>

            {/* Cards Section */}
            <div className="flex flex-wrap justify-center gap-8">
                {/* Story 1 */}
                <div className="w-full sm:w-80 bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                    <figure>
                        <img
                            src="https://i.ibb.co/C5x8JZV/ra-dragon-2n-Ce-Ve-FWA-c-unsplash.jpg"
                            alt="Student Success"
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="p-6">
                        <h2 className="font-semibold text-xl">John's Academic Success</h2>
                        <p className="mt-4 text-base">
                            "Thanks to my tutor from TutorHub, I went from failing my exams to acing them! The support I received was invaluable."
                        </p>
                        <p className="italic text-right mt-6">- John Doe, Engineering Student</p>
                    </div>
                </div>

                {/* Story 2 */}
                <div className="w-full sm:w-80 bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                    <figure>
                        <img
                            src="https://i.ibb.co/YLK06NG/ab-fhm-Rqh-D-d-Yg-unsplash.jpg"
                            alt="Career Growth"
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="p-6">
                        <h2 className="font-semibold text-xl">Sarah's Career Growth</h2>
                        <p className="mt-4 text-base">
                            "Taking coding lessons on TutorHub gave me the skills to land my first job as a software developer!"
                        </p>
                        <p className="italic text-right mt-6">- Sarah Lee, Software Developer</p>
                    </div>
                </div>

                {/* Story 3 */}
                <div className="w-full sm:w-80 bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                    <figure>
                        <img
                            src="https://i.ibb.co/bPThKP0/alex-perez-AIfb-Uyzh-Kz0-unsplash.jpg"
                            alt="Tutor Success"
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="p-6">
                        <h2 className="font-semibold text-xl">Mike's Tutor Journey</h2>
                        <p className="mt-4 text-base">
                            "Being a tutor on TutorHub has allowed me to share my passion for teaching and help students achieve their dreams."
                        </p>
                        <p className="italic text-right mt-6">- Mike Johnson, Math Tutor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStories;
