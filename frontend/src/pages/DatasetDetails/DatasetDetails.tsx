import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout/MainLayout";
import { getDatasetById } from "../../api/dataset.api";
import { useNavigate } from "react-router-dom";
import type { Dataset } from "../../types/dataset.types";

import "./DatasetDetails.scss";
import Loader from "../../components/common/Loader";
import Badge from "../../components/common/Badge";
import NoDataFound from "../NotFound/NotFound";
import Card from "../../components/common/Card";

const DatasetDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [dataset, setDataset] = useState<Dataset | null>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadDataset = async () => {
            try {
                const response = await getDatasetById(id!);
                setDataset(response.data.data);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        loadDataset();
    }, [id]);


    if (loading) {
        return (
            <MainLayout>
                <Loader />
            </MainLayout>
        );
    }

    if (!dataset) {

        return (
            <MainLayout>
               <NoDataFound />
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
                        <Badge text={dataset.category} />

                        <h1>{dataset.title}</h1>

                        <p>{dataset.description}</p>

                    </div>

                </section>

                <section className="content">
                    <Card className="card" children={ 
                        <>
                            <h2>Description</h2>

                            <p>{dataset.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quidem placeat quas recusandae ut asperiores dolore neque magnam. Laudantium tempore cum nihil a placeat perspiciatis dignissimos deserunt sapiente aperiam expedita.</p>
                        </>
                    } />

                    <Card className="card" children={
                        <>
                            <h2>Tags</h2>
                            <div className="tags">
                                {dataset.tags.map((tag) => (
                                    <span key={tag}>
                                        {tag}
                                    </span>

                                ))}

                            </div>
                        </>
                    } />

                    <Card className={"card"} children={
                        <>
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

                                <div>
                                    <label>License</label>
                                    <span>{dataset.license}</span>
                                </div>

                                <div>
                                    <label>Geography</label>
                                    <span>{dataset.geography}</span>
                                </div>
                                <div>
                                    <label>Source</label>
                                    <span>{dataset.source}</span>
                                </div>
                                <div>
                                    <label>File Name</label>
                                    <span>{dataset.resources[0]?.name}</span>
                                </div>
                                <div>
                                    <label>File Format</label>
                                    <span>{dataset.resources[0]?.format}</span>
                                </div>
                                <div>
                                    <label>Website</label>
                                    <span>{dataset.resources[0]?.url}</span>
                                </div>
                                <div>
                                    <label>Update Frequency</label>
                                    <span>{dataset.updateFrequency}</span>
                                </div>

                            </div>
                        </>
                    } />
                </section>

            </div>

        </MainLayout>

    );

};

export default DatasetDetails;