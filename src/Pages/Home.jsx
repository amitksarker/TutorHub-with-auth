import React from 'react';
import Banner from '../Components/Banner';
import Stats from '../Components/Stats';
import LanguageCategory from '../Components/LanguageCategory';
import HowToWork from '../Components/HowToWork';
import ContactForm from '../Components/ContactForm';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <LanguageCategory></LanguageCategory>
            <HowToWork></HowToWork>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;