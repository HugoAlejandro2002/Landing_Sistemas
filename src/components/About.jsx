import React from 'react'
import about from '../assets/about.jpeg'
import { Title } from './Title'

const About = () => {
    return (
        <section className="section" id="acerca">

            <Title title={' Acerca de la Ingeniería de '} subTitle={'Sistemas Computacionales'} />

            <div className="section-center about-center">
                <div className="about-img">
                    <img
                        src={about}
                        className="about-photo"
                        alt=""
                    />
                </div>
                <article className="about-info">
                    <h3>Descubre el fascinante mundo de la Ingeniería de Sistemas</h3>
                    <p>
                        En la UPB, nos enorgullece ofrecer un programa de Ingeniería de Sistemas Computacionales
                        diseñado para formar profesionales altamente capacitados en el campo de la tecnología.

                    </p>
                    <p>
                        Nuestro enfoque se basa en la combinación de conocimientos teóricos y prácticos,
                        brindando a nuestros estudiantes las habilidades necesarias para enfrentar los desafíos del
                        mundo digital en constante evolución.
                    </p>
                    <a href="#" className="btn">Más</a>
                </article>
            </div>
        </section>
    )
}

export default About