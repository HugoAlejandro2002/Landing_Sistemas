import React from 'react'
import { FooterIcons } from './FooterIcons';
import { FooterSocialLinks } from './FooterSocialLinks';

export const Footer = () => {
    return (
        <footer class="section footer">

            <FooterIcons />
            <FooterSocialLinks />

            <p class="copyright">
                copyright &copy; UPB ingenieria de Sistemas Company
                <span id="date"></span> Derechos reservados
            </p>
        </footer>
    )
};

export default Footer;