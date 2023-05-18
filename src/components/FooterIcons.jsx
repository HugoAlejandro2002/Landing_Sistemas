import React from 'react'
import { footerLinks } from '../data/data'

export const FooterIcons = () => {
    return (
        <ul class="footer-links">
            {
                footerLinks.map((footerLink) => {
                    return (
                        <li key={footerLink.id}>
                            <a href={`#.${footerLink.name}`} class="footer-link">{footerLink.name}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}
