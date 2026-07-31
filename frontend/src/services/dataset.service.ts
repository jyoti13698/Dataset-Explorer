import * as api from "../api/dataset.api";

export const fetchDatasets = async () => {
    const { data } = await api.getDatasets();
    return data.data;
};

export const fetchCategories = async () => {
    const { data } = await api.getCategories();
    return data.data;
};

export const fetchOrganizations = async () => {
    const { data } = await api.getOrganizations();
    return data.data;
};