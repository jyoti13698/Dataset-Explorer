type Props = {
    dataset: any;
};

const DatasetCard = ({ dataset }: Props) => {
    return (
        <div className="dataset-card">
            <h2>{dataset.title}</h2>

            <span>{dataset.category}</span>

            <p>{dataset.description}</p>

            <div>
                <span>{dataset.organization}</span>

                <button>View Details</button>
            </div>
        </div>
    );
};

export default DatasetCard;