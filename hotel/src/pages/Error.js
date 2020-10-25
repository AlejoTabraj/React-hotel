import React from 'react';
import { Hero } from '../component/Hero';
import { Banner } from '../component/Banner';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <Hero>
            <Banner title='404' subtitle='página no encontrada'>
                <Link to='/' className='btn-primary'>Inicio</Link>
            </Banner>
        </Hero>
    )
}
