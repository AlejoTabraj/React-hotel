import React from 'react';
import { Hero } from '../component/Hero';
import { Banner } from '../component/Banner';
import { Link } from 'react-router-dom';

export const Rooms = () => {
    return (
        <Hero hero='roomsHero'>
            <Banner title='Habitaciones' >
                <Link to='/' className='btn-primary'>Inicio</Link>
            </Banner>
        </Hero>
    )
}
