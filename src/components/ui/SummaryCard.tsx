import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import colors from '@/styles';

interface SummaryCardProps {
    icon: IconDefinition;
    title: string;
    description: string;
    onClick?: () => void;
    iconColor?: string;
}

export default function SummaryCard({
    icon,
    title,
    description,
    onClick,
    iconColor = colors.projectOrange,
}: SummaryCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            <div className="pt-0 px-5 pb-4">
                <div className="flex justify-between">
                    <h3 className="text-xl font-bold text-[var(--tech-blue)] flex items-center">
                        <FontAwesomeIcon icon={icon} className="mr-3" style={{ color: iconColor }} />
                        {title}
                    </h3>
                </div>
                <p className="text-[var(--neutral-gray)] my-1 ml-1 mb-3">{description}</p>
            </div>
        </div>
    );
}
