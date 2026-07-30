import { Request, Response } from "express";

import * as datasetService from "../services/dataset.service";

export const createDataset = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const dataset = await datasetService.createDataset(req.body);

    res.status(201).json({
      success: true,
      message: "Dataset created successfully",
      data: dataset,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllDatasets = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await datasetService.getAllDatasets(req.query);

    res.status(200).json({
      success: true,
      message: "Datasets fetched successfully",
      data: result.datasets,
      pagination: result.pagination,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDatasetById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const dataset = await datasetService.getDatasetById(req.params.id);

    res.status(200).json({
      success: true,
      data: dataset,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateDataset = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const dataset = await datasetService.updateDataset(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Dataset updated successfully",
      data: dataset,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteDataset = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await datasetService.deleteDataset(req.params.id);

    res.status(200).json({
      success: true,
      message: "Dataset deleted successfully",
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCategories = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const categories = await datasetService.getCategories();

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getOrganizations = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const organizations = await datasetService.getOrganizations();

    res.status(200).json({
      success: true,
      data: organizations,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};