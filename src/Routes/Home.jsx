import React from 'react';
import Header from '../Component/Header';
import PieceOfCard from '../Component/PieceOfCard';
import ButtomOfHeroSection from '../Component/buttomOfHeroSection'

function Home(props) {
    return (
        <div className='w-full h-screen bg-white flex flex-col'>
            <Header />
            <div className='flex-1 h-screen absolute w-full'>
                <div className='bg-[#0000004b] fixed w-full h-full'></div>
                <img
                    className='w-full h-full object-top object-cover'
                    src="/di3aya.jpg"
                    alt="di3aya"
                />
            </div>
            <PieceOfCard/>
            <ButtomOfHeroSection/>
        </div>
    );
}


export default Home;