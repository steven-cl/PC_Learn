import * as FA from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '@src/styles';

export default function Home() {
    return (
        <div className="bg- mx-auto pages">
            <div className="container shadow-lg bg-primary">
                <h1>Home Page</h1>
            </div>
            <FontAwesomeIcon icon={FA.faMicrochip} size='2x' color={colors.primary}/>
        </div>
    )
}