import React, { useEffect, useState } from 'react';
import arrow from '../../src/assets/icons8-right-arrow-16.png'
import { useNavigate } from 'react-router-dom';
import bangla from '../../src/assets/language_icon/bangla.png'
import french from '../../src/assets/language_icon/bonjour.png'
import chinese from '../../src/assets/language_icon/chat.png'
import arabic from '../../src/assets/language_icon/dhad.png'
import english from '../../src/assets/language_icon/english-language.png'
import german from '../../src/assets/language_icon/german.png'
import japanese from '../../src/assets/language_icon/japanese.png'
import hindi from '../../src/assets/language_icon/ohm.png'
import spanish from '../../src/assets/language_icon/spanish.png'

const LanguageCategory = () => {

    const navigate = useNavigate();
    // const [languages, setLanguages] = useState([]);

    // useEffect( () => {
    //     fetch('http://localhost:3000/categories')
    //     .then(res => res.json())
    //     .then(data => setLanguages(data))
    // },[]);

    return (
        <div>
            <h1 className='font-bold text-2xl text-center'> Language Categories </h1>
            {/* <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                {
                    languages.map(language => (
                    <div key={language._id} 
                    onClick={() => navigate(`/find-tutors/${language.title}`)}
                        className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer'>
                        <img className='w-[48px] h-[48px] object-contain' src={language.logo} alt={language.title} />
                        <h1 className='text-lg font-semibold flex-1'> {language.title} Tutors </h1>
                        <img className='w-5 h-5' src={arrow} alt="arrow" />
                    </div>
                    ))
                }
            </div> */}
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
            <div onClick={() => navigate('/find-tutors/Bangla')}
                    className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer'>
                    <img className='w-[48px] h-[48px] object-contain' src={bangla} alt="Bangla" />
                    <h1 className='text-lg font-semibold flex-1'>Bangla Tutors</h1>
                    <img className='w-5 h-5' src={arrow} alt="arrow" />
                </div>

                <div onClick={() => navigate('/find-tutors/French')}
                    className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer'>
                    <img className='w-[48px] h-[48px] object-contain' src={french} alt="French" />
                    <h1 className='text-lg font-semibold flex-1'>French Tutors</h1>
                    <img className='w-5 h-5' src={arrow} alt="arrow" />
                </div>

                <div onClick={() => navigate('/find-tutors/Chinese')}
                    className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer'>
                    <img className='w-[48px] h-[48px] object-contain' src={chinese} alt="Chinese" />
                    <h1 className='text-lg font-semibold flex-1'>Chinese Tutors</h1>
                    <img className='w-5 h-5' src={arrow} alt="arrow" />
                </div>

                <div onClick={() => navigate('/find-tutors/Arabic')}
                    className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer'>
                    <img className='w-[48px] h-[48px] object-contain' src={arabic} alt="Arabic" />
                    <h1 className='text-lg font-semibold flex-1'>Arabic Tutors</h1>
                    <img className='w-5 h-5' src={arrow} alt="arrow" />
                </div>

                <div onClick={() => navigate('/find-tutors/English')}
                    className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer'>
                    <img className='w-[48px] h-[48px] object-contain' src={english} alt="English" />
                    <h1 className='text-lg font-semibold flex-1'>English Tutors</h1>
                    <img className='w-5 h-5' src={arrow} alt="arrow" />
                </div>

                <div onClick={() => navigate('/find-tutors/German')}
                    className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer'>
                    <img className='w-[48px] h-[48px] object-contain' src={german} alt="German" />
                    <h1 className='text-lg font-semibold flex-1'>German Tutors</h1>
                    <img className='w-5 h-5' src={arrow} alt="arrow" />
                </div>

                <div onClick={() => navigate('/find-tutors/Japanese')}
                    className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer'>
                    <img className='w-[48px] h-[48px] object-contain' src={japanese} alt="Japanese" />
                    <h1 className='text-lg font-semibold flex-1'>Japanese Tutors</h1>
                    <img className='w-5 h-5' src={arrow} alt="arrow" />
                </div>

                <div onClick={() => navigate('/find-tutors/Hindi')}
                    className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer'>
                    <img className='w-[48px] h-[48px] object-contain' src={hindi} alt="Hindi" />
                    <h1 className='text-lg font-semibold flex-1'>Hindi Tutors</h1>
                    <img className='w-5 h-5' src={arrow} alt="arrow" />
                </div>

                <div onClick={() => navigate('/find-tutors/Spanish')}
                    className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer'>
                    <img className='w-[48px] h-[48px] object-contain' src={spanish} alt="Spanish" />
                    <h1 className='text-lg font-semibold flex-1'>Spanish Tutors</h1>
                    <img className='w-5 h-5' src={arrow} alt="arrow" />
                </div>
        </div>

        </div>
    );
};

export default LanguageCategory;