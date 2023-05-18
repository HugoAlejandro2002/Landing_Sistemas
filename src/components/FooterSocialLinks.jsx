import React from 'react'
import { socialLinks } from '../data/data'

export const FooterSocialLinks = (props) => {

    return (
        <ul className="footer-icons">
            <ul className="nav-icons">
                {
                    socialLinks.map((socialLinks) => {
                        return (
                            <li key={socialLinks.id}>
                                <a href={`https://www.${socialLinks.link}.com`} target="_blank" className="footer-icon"
                                ><i className={`fab fa-${socialLinks.link}`}></i
                                ></a>
                            </li>

                        )
                    })
                }

            </ul>
        </ul>
    )
}
