import React from 'react'
import { Title } from './Title'
import { services } from '../data/data'
import { Service } from './Service'

const Services = () => {
    return (
        <section className="section services" id="programa">
            <Title title={'Nuestro'} subTitle={'Programa Académico'}/> 
            <div className="section-center services-center">
                {
                    services.map((service) =>{
                        return(
                            <Service {...service} key={service.id}/>
                        )
                    })
                }
                
            </div>
        </section>
    )
}
export default Services