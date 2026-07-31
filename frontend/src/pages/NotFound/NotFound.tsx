import { SearchX } from "lucide-react";
import Button from "../../components/common/Button";
import './NotFound.scss'


type Props = {
    title?: string;
    description?: string;
    buttonText?: string;
    onButtonClick?: () => void;
};

const NoDataFound = ({
    title = "No datasets found",
    description = "We couldn't find any datasets matching your search or filters.",
    buttonText = "Clear Filters",
    onButtonClick
}: Props) => {
    return (
        <div className="no-data">

            <div className="no-data-icon">
                <SearchX size={54} />
            </div>

            <h2>{title}</h2>

            <p>{description}</p>

            {onButtonClick && (
                <Button onClick={onButtonClick}>
                    {buttonText}
                </Button>
            )}

        </div>
    );
};

export default NoDataFound;