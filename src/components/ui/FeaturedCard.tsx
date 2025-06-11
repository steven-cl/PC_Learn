import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as FA from '@fortawesome/free-solid-svg-icons';
import colors from '@/styles'; 

interface Tag {
    label: string;
    icon: IconDefinition;
}

interface FeaturedCardProps {
    icon: IconDefinition;
    title: string;
    description: string;
    tags: Tag[];
    badgeText?: string;
    onTutorialClick?: () => void;
    onDownloadClick?: () => void;
    onShareClick?: () => void;
}

export default function FeaturedCard({
    icon,
    title,
    description,
    tags,
    badgeText = 'Destacado',
    onTutorialClick,
    onDownloadClick,
    onShareClick,
}: FeaturedCardProps) {
    return (
        <div className="bg-white h-145 rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--tech-blue)] to-blue-600 flex items-center justify-center">
                    <div className="relative">
                        <div className="absolute top-0 right-0 bg-[var(--project-orange)] text-white text-xl font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                            {badgeText}
                        </div>
                        <FontAwesomeIcon icon={icon} className="text-white text-7xl opacity-30" size="5x" />
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold text-[var(--tech-blue)] mb-2">{title}</h3>
                <p className="text-[var(--neutral-gray)] mb-4">{description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-[var(--tech-blue)] px-3 py-1 rounded-full text-sm flex items-center"
                        >
                            <FontAwesomeIcon icon={tag.icon} className="mr-1" />
                            {tag.label}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    <button
                        onClick={onTutorialClick}
                        className="bg-[var(--tech-blue)] hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium flex items-center"
                    >
                        <FontAwesomeIcon icon={FA.faBookOpen} className="mr-2" />
                        Ver Tutorial
                    </button>
                    <div className="flex space-x-3">
                        <button onClick={onDownloadClick} className="hover:text-[var(--tech-blue)]">
                            <FontAwesomeIcon icon={FA.faDownload} color={colors.neutralGray} />
                        </button>
                        <button onClick={onShareClick} className="hover:text-[var(--tech-blue)]">
                            <FontAwesomeIcon icon={FA.faShareAlt} color={colors.neutralGray} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
