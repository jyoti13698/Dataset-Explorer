import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout/MainLayout";
import { getDatasetById } from "../../api/dataset.api";
import { useNavigate } from "react-router-dom";
import type { Dataset } from "../../types/dataset.types";

import "./DatasetDetails.scss";

const DatasetDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [dataset, setDataset] = useState<Dataset | null>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (id) {
            loadDataset(id);
        }

    }, [id]);

    const loadDataset = async (datasetId: string) => {

        try {

            const response = await getDatasetById(datasetId);

            setDataset(response.data.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (
            <MainLayout>
                Loading...
            </MainLayout>
        );

    }

    if (!dataset) {

        return (
            <MainLayout>
                Dataset not found
            </MainLayout>
        );

    }

    return (

        <MainLayout>

            <div className="dataset-details">

                <button
                    className="back-btn"
                    onClick={() => navigate(-1)}
                >
                    ← Back to Datasets
                </button>

                <section className="hero">

                    <div>

                        <span className="badge">
                            {dataset.category}
                        </span>

                        <h1>{dataset.title}</h1>

                        <p>{dataset.description}</p>

                    </div>

                </section>

                <section className="content">

                    <div className="card">

                        <h2>Description</h2>

                        <p>{dataset.description}</p>

                    </div>

                    <div className="card">

                        <h2>Tags</h2>

                        <div className="tags">

                            {dataset.tags.map((tag) => (

                                <span key={tag}>
                                    {tag}
                                </span>

                            ))}

                        </div>

                    </div>

                    <div className="card">

                        <h2>Dataset Information</h2>

                        <div className="info">

                            <div>
                                <label>Organization</label>
                                <span>{dataset.organization}</span>
                            </div>

                            <div>
                                <label>Category</label>
                                <span>{dataset.category}</span>
                            </div>

                            <div>
                                <label>Year</label>
                                <span>{dataset.year}</span>
                            </div>

                            <div>
                                <label>Featured</label>
                                <span>{dataset.featured ? "Yes" : "No"}</span>
                            </div>

                        </div>

                    </div>

                </section>

            </div>

        </MainLayout>

    );

};

export default DatasetDetails;