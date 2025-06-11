import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FA from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SimpleModuleCardProps {
    icon: IconDefinition;
    iconBackgroundColor: string;
    title: string;
    description: string;
    buttonText: string;
    buttonColor?: string;
}

export default function SimpleModuleCard({
    icon,
    iconBackgroundColor,
    title,
    description,
    buttonText,
    buttonColor = 'text-[var(--tech-blue)]',
}: SimpleModuleCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex">
            <div className={`w-1/3 ${iconBackgroundColor} flex items-center justify-center`}>
                <FontAwesomeIcon icon={icon} className="text-white" size="3x" />
            </div>
            <div className="w-2/3 p-6">
                <h3 className="font-bold text-lg text-[var(--neutral-gray)] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm mb-4">{description}</p>
                <button className={`bg-white ${buttonColor} text-sm hover:text-blue-700 font-medium flex items-center`}>
                    {buttonText}
                    <FontAwesomeIcon icon={FA.faArrowRight} className="ml-2 text-xs" />
                </button>
            </div>
        </div>
    );
}
