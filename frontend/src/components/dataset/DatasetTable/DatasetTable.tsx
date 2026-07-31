import "./DatasetTable.scss";
import { useNavigate } from "react-router-dom";
import type { Dataset } from "../../../types/dataset.types";

type Props = {
    datasets: Dataset[];
};

const DatasetTable = ({ datasets }: Props) => {
    const navigate = useNavigate();
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
                                <span className="badge">
                                    {dataset.category}
                                </span>
                            </td>

                            <td>{dataset.organization}</td>

                            <td>{dataset.year}</td>

                            <td>
                                {dataset.featured ? "⭐" : "-"}
                            </td>

                            <td>
                                <button
                                    className="view-btn"
                                    onClick={() => navigate(`/datasets/${dataset._id}`)}
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DatasetTable;