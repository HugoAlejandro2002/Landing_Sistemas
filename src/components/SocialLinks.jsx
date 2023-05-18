import React from 'react'
import { socialLinks } from '../data/data'

export const SocialLinks = ({parentClass,subParentClass}) => {
    
    return (

        <ul className={parentClass}>
            {
                socialLinks.map((socialLinks) => {
                    return (
                        <li key={socialLinks.id}>
                            <a href={`https://www.${socialLinks.link}.com`} target="_blank" className={subParentClass}
                            ><i className={`fab fa-${socialLinks.link}`}></i
                            ></a>
                        </li>

                    )
                })
            }

        </ul>
    )
}
