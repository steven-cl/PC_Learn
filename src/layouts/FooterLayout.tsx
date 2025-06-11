import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <footer className="bg-gray-700 text-white pt-4 pb-4">

            {/* Company Info */}
            <div className="mt-8 text-center px-4">
                <h3 className="text-lg md:text-xl font-bold text-[var(--tech-blue)]">PC Learn</h3>
                <p className="text-sm text-gray-200 mt-1">
                    Aprende con nosotros - Los mejores en computadoras
                </p>
            </div>

            {/* Social Icons */}
            <div className="mt-10 px-6 text-center">
                <h4 className="text-base md:text-lg font-semibold mb-3">Síguenos en redes</h4>
                <div className="flex justify-center space-x-6">
                    <a href="https://facebook.com/castillsteven12" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebookF} className="text-xl hover:text-blue-700" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-blue-500" />
                    </a>
                    <a href="https://instagram.com/cast_stv123" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-pink-500" />
                    </a>
                    <a href="https://github.com/steven-cl/PC_Learn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-black" />
                    </a>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-blue-200 mt-8 pt-3 pb-2 text-center text-xs md:text-sm px-4 text-gray-300">
                © {new Date().getFullYear()} PC Learn. Todos los derechos reservados.
            </div>
        </footer>
    );
}
