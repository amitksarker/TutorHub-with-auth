import React from 'react';

const Stats = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 my-4'>
            <h1 className='font-bold text-2xl text-center'> Stats </h1>

            <div className="stats shadow">
            <div className="stat place-items-center">
                
                <div className="stat-value">120+</div>
                <div className="stat-title">Total Tutors</div>
                {/* <div className="stat-desc">From January 1st to February 1st</div> */}
            </div>

            <div className="stat place-items-center">
                
                <div className="stat-value text-secondary">890+</div>
                <div className="stat-title">Total Reviews</div>
                {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
            </div>

            <div className="stat place-items-center">
                
                <div className="stat-value">15+</div>
                <div className="stat-title"> Languages Available </div>
                {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>

            <div className="stat place-items-center">
                
                <div className="stat-value">4500+</div>
                <div className="stat-title"> Registered Users </div>
                {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>
            </div>
        </div>
    );
};

export default Stats;