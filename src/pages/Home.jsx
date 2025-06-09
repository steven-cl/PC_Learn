import * as FA from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '@/styles';
import ProductFeatures from '@layouts/ProductFeatures';

export default function Home() {
    return (
        <div className="bg-neutral-200 mx-auto pages pt-20">
            <div className="container shadow-lg bg-neutral-100 text-black align-text-middle text-center">
                <h1>Home Page</h1>
            </div>
            <FontAwesomeIcon className="pt-20" icon={FA.faMicrochip} size='2x' color={colors.primary}/>
        </div>
    )
}