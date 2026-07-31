import DatasetCard from "../DatasetCard/DatasetCard";

type Props = {
    datasets: any[];
};

const DatasetGrid = ({ datasets }: Props) => {
    return (
        <div className="dataset-grid">
            {datasets.map(dataset => (
                <DatasetCard
                    key={dataset._id}
                    dataset={dataset}
                />
            ))}
        </div>
    );
};

export default DatasetGrid;