import React from 'react'
import tour1 from "../assets/tour-1.jpeg"
import tour2 from "../assets/tour-2.jpeg"
import tour3 from "../assets/tour-3.jpeg"
import tour4 from "../assets/tour-4.jpeg"
import { Title } from './Title'
import { tours } from '../data/data'
import { Tour } from './Tour'

const Tours = () => {
    return (
        <section className="section" id="oportunidades">

            <Title title={'Explora las'} subTitle={'Oportunidades'}/>
         
            <div className="section-center featured-center">
                {
                    tours.map((tour) => {
                        return(
                            <Tour {...tour} key={tour.id}/>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Tours