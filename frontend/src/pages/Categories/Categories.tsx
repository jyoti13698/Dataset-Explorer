import { useEffect, useMemo, useState } from "react";

import MainLayout from "../../components/layout/MainLayout/MainLayout";
import Input from "../../components/common/Input/Input";

import { getCategories, getDatasets } from "../../api/dataset.api";
import { getCategoryInfo } from "../../utils/categoryInfo";

import type { Dataset } from "../../types/dataset.types";

import "./Categories.scss";

const Categories = () => {


    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState<string[]>([]);
    const [datasets, setDatasets] = useState<Dataset[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const [categoryRes, datasetRes] = await Promise.all([
            getCategories(),
            getDatasets ({})
        ]);

        setCategories(categoryRes.data.data);
        setDatasets(datasetRes.data.datasets);
    };

    const filteredCategories = useMemo(() => {
        return categories.filter((category) =>
            category.toLowerCase().includes(search.toLowerCase())
        );
    }, [categories, search]);

    return (
        <MainLayout>

            <div className="categories-header">

                <div>
                    <h1>Categories</h1>
                    <p>Browse datasets grouped by category.</p>
                </div>

                <div className="categories-count">
                    {categories.length} Categories
                </div>

            </div>

            <Input
                placeholder="Search category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="categories-grid">

                {filteredCategories.map((category) => {

                    const info = getCategoryInfo(category);

                    const Icon = info.icon;

                    const count = datasets?.filter(
                        (dataset) => dataset.category === category
                    ).length;

                    return (
                        <div
                            className="category-card"
                            key={category}
                        >

                            <div className="category-icon">
                                <Icon size={28} />
                            </div>

                            <h3>{category}</h3>

                            <p>{info.description}</p>

                            <div className="category-footer">

                                <span>{count} datasets</span>
                            </div>

                        </div>
                    );
                })}

            </div>

        </MainLayout>
    );
};

export default Categories;