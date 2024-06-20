import React from 'react'
import Header from '../Home/Header'
import OfferSlider from './OfferSlider'
import Feature from './Feature'
import CategorySection from './CategorySection'
import MostWanted from './MostWanted'
import Banner from './Banner'
import Exclusive from './Exclusive'
import Latest from './Latest'
import Explore from './Explore'
import StoreFooter from './StoreFooter'
import Footer from './../Home/Footer';


export default function Store() {
    return (
        <div className='store-page'>
            <Header></Header>
            <OfferSlider></OfferSlider>
            <Feature></Feature>
            <CategorySection></CategorySection>
            <MostWanted></MostWanted>
            <Banner></Banner>
            <Exclusive></Exclusive>
            <Latest></Latest>
            <Explore></Explore>
            <Footer></Footer>
        </div>
    )
}
