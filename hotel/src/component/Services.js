import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import { Title } from './Title'

export default class Services extends Component {
    state={
        services: [{
            icon: <FaCocktail/>,
            title: 'Barra Libre',
            info: 'View the documentation for further usage examples and how to use icons from other packageeach Icon package has i'
                 },
                 {
            icon: <FaHiking/>,
            title: 'Barra Libre',
            info: 'View the documentation for further usage examples and how to use icons from other packageeach Icon package has i'
                 },
                {
            icon: <FaShuttleVan/>,
            title: 'Barra Libre',
            info: 'View the documentation for further usage examples and how to use icons from other packageeach Icon package has i'
                },
            {
            icon: <FaBeer/>,
            title: 'Barra Libre',
            info: 'View the documentation for further usage examples and how to use icons from other packageeach Icon package has i'
              
            }]
    }
    render() {
        return (
            <section className='services'>
                <Title title='Servicios'></Title>
                <div className='services-center'>
                    {this.state.services.map( (item, i) => {
                        return <article key={i}>
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
