import { useEffect, useState } from "react";

import MainLayout from "../../components/layout/MainLayout/MainLayout";
import DatasetFilters from "../../components/dataset/DatasetFilters/DaatsetFilters";
import DatasetStats from "../../components/dataset/DatasetStats/DatasetStats";
import DatasetTable from "../../components/dataset/DatasetTable/DatasetTable";
import Pagination from "../../components/common/Pagination";

import {
    getCategories,
    getDatasets,
    getOrganizations
} from "../../api/dataset.api";

import type { Dataset } from "../../types/dataset.types";

const DatasetExplorer = () => {
    const [datasets, setDatasets] = useState<Dataset[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [organizations, setOrganizations] = useState<string[]>([]);

    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("");

    const [page, setPage] = useState(1);

    const [pagination, setPagination] = useState({
        page: 1,
        totalPages: 1,
        totalRecords: 0
    });


    /**
     * Debounce search input
     */
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
            setPage(1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [search]);


    const loadData = async () => {
        try {
            const [datasetRes, categoryRes, organizationRes] =
                await Promise.all([
                    getDatasets({
                        page,
                        pageSize: 10,
                        search: debouncedSearch,
                        category: selectedCategory
                    }),
                    getCategories(),
                    getOrganizations()
                ]);


            setDatasets(datasetRes.data.data.datasets);

            setPagination(datasetRes.data.data.pagination);

            setCategories(categoryRes.data.data);

            setOrganizations(organizationRes.data.data);

        } catch (error) {
            console.error("Error loading datasets:", error);
        }
    };


    useEffect(() => {
        loadData();
    }, [page, debouncedSearch, selectedCategory]);


    return (
        <MainLayout>

            <DatasetStats
                datasets={datasets}
                categories={categories}
                organizations={organizations}
                total={pagination}
            />


            <DatasetFilters
                search={search}
                onSearch={setSearch}
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={(value) => {
                    setSelectedCategory(value);
                    setPage(1);
                }}
            />


            <DatasetTable
                datasets={datasets}
            />


            <Pagination
                page={pagination.page}
                totalPages={pagination.totalPages}
                onPageChange={setPage}
            />

        </MainLayout>
    );
};

export default DatasetExplorer;