import React from 'react';
import { Hero } from '../component/Hero';
import{ Banner } from '../component/Banner';
import { Link } from 'react-router-dom';
import Services  from '../component/Services'

export const Home = () => {
    return (
        <>
            <Hero>
                <Banner title='Habitaciones Suavecitas' subtitle='Habitaciones para mascotas'>
                    <Link to='/rooms' className='btn-primary'>Habitaciones</Link>
                </Banner>
            </Hero>
            <Services></Services>
        </>
    )
}
