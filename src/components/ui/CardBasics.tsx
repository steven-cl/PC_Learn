import * as FA from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CardBasics{
    Icon: FA.IconDefinition;
    Title: string;
    ListItems: string[];
}

export default function CardBasics({ Icon, Title, ListItems}: CardBasics) {
    return (
        <div className="md:w-1/2">
            <div className="bg-blue-100 rounded-lg p-4 border border-blue-200">
                <h3 className="font-bold text-[var(--tech-blue)] mb-3 flex items-center">
                    <FontAwesomeIcon className="mr-2" icon={Icon} /> 
                    {Title}
                </h3>   
                <ul className="space-y-2 text-[var(--neutral-gray)]">
                    {ListItems.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                            {item}
                        </li>
                    ))}
                </ul>                                           
            </div>
        </div>
    );
}