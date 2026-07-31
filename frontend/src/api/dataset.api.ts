import api from "./axios";

export const getDatasets = (params?: any) =>
  api.get("/datasets", { params });

export const getDataset = (id: string) =>
  api.get(`/datasets/${id}`);

export const createDataset = (payload: any) =>
  api.post("/datasets", payload);

export const updateDataset = (id: string, payload: any) =>
  api.put(`/datasets/${id}`, payload);

export const deleteDataset = (id: string) =>
  api.delete(`/datasets/${id}`);

export const getCategories = () =>
  api.get("/datasets/meta/categories");

export const getOrganizations = () =>
    api.get("/datasets/meta/organizations");

export const getDatasetById = (id: string) =>
  api.get(`/datasets/${id}`);