import * as FA from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '@/styles';
import { Link } from 'react-router-dom';

interface InfoListCardProps {
    Color: string;
    Icon: FA.IconDefinition; //->This is an example FA.faserver
    IconColor?: colors;
    Title: string;
    ListItems: string[];
    ButtonText: string;
    ButtonLink: string;
    ExtraInfo: string;
}

/** *InfoListCard Component
    *This component is used to display a card with a title, icon, list of items, and a button
    *It is designed to be used in a dashboard or overview page
    *@param {CardTitleProps} props - The properties for the CardTitle component
    *@returns {JSX.Element} - The rendered CardTitle component
*/

export default function InfoListCard({ Color, Icon, IconColor, Title, ListItems, ButtonText, ButtonLink, ExtraInfo }: InfoListCardProps) {
    if (!IconColor) {
        IconColor = Color;
    }
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden module-card">
            <div className={`p-6 ${Color}`}
            >
                <div className="flex items-center space-x-4">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                        <FontAwesomeIcon className="text-xl" icon={Icon} size='2x' color={IconColor} />
                    </div>
                    <h3 className="text-white text-xl font-bold">{Title}</h3>
                </div>
            </div>
            <div className="p-6">
                <ul className="mb-4 text-gray-600 pl-0">
                    {ListItems.map((item, index) => (
                        <li key={index} className="flex items-start mb-2">
                            <FontAwesomeIcon className="text-green-600 mt-1 mr-2" icon={FA.faCheckCircle} />
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between items-center">
                    <Link to={ButtonLink}>
                        <button className="bg-white text-blue-700 hover:text-blue-700 font-medium flex items-center">
                            {ButtonText}
                            <FontAwesomeIcon className="ml-2 text-sm" icon={FA.faArrowRight} />
                        </button>
                    </Link>
                    <div
                        className={`px-3 py-1 rounded-full text-sm ${Color} text-blue-900`}
                    >
                        {ExtraInfo}
                    </div>
                </div>
            </div>
        </div>
    )
}