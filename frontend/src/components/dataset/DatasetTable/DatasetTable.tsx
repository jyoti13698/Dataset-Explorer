import "./DatasetTable.scss";
import { useNavigate } from "react-router-dom";
import type { Dataset } from "../../../types/dataset.types";
import Button from "../../common/Button";
import Badge from "../../common/Badge";
import NoDataFound from "../../../pages/NotFound/NotFound";


type Props = {
    datasets: Dataset[];
    onClearFilters?: () => void;
};

const DatasetTable = ({ datasets, onClearFilters }: Props) => {
    const navigate = useNavigate();

    if (!datasets.length) {
        return (
            <NoDataFound
                onButtonClick={onClearFilters}
            />
        );
    }

    return (
        <div className="dataset-table">
            <table>
                <thead>
                    <tr>
                        <th>Dataset Name</th>
                        <th>Category</th>
                        <th>Organization</th>
                        <th>Year</th>
                        <th>Featured</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {datasets.map((dataset) => (
                        <tr key={dataset._id}>
                            <td>
                                <div className="dataset-name">
                                    <h4>{dataset.title}</h4>
                                    <p>{dataset.description}</p>
                                </div>
                            </td>

                            <td>
                                <Badge text={dataset.category} />
                            </td>

                            <td>{dataset.organization}</td>

                            <td>{dataset.year}</td>

                            <td>{dataset.featured ? "⭐" : "-"}</td>

                            <td>
                                <Button
                                    type="button"
                                    onClick={() => navigate(`/datasets/${dataset._id}`)}
                                >
                                    View
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DatasetTable;