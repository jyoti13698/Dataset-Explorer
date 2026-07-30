import Dataset from "../models/Dataset";
import { IDataset } from "../types/dataset.types";
import mongoose from "mongoose";

export const createDataset = async (payload: IDataset) => {
  return Dataset.create(payload);
};

export const getAllDatasets = async (query: any) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    category,
    organization,
    featured,
    sortBy = "createdAt",
    sortOrder = "desc",
  } = query;

  const filter: any = {};

  if (search) {
    filter.$or = [
      {
        title: {
          $regex: search,
          $options: "i",
        },
      },
      {
        description: {
          $regex: search,
          $options: "i",
        },
      },
      {
        organization: {
          $regex: search,
          $options: "i",
        },
      },
      {
        tags: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  if (category) {
    filter.category = category;
  }

  if (organization) {
    filter.organization = organization;
  }

  if (featured !== undefined) {
    filter.featured = featured === "true";
  }

  const total = await Dataset.countDocuments(filter);

  const datasets = await Dataset.find(filter)
    .sort({
      [sortBy]: sortOrder === "asc" ? 1 : -1,
    })
    .skip((Number(page) - 1) * Number(limit))
    .limit(Number(limit));

  return {
    datasets,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / Number(limit)),
    },
  };
};

export const getDatasetById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid Dataset ID");
  }

  const dataset = await Dataset.findById(id);

  if (!dataset) {
    throw new Error("Dataset not found");
  }

  return dataset;
};

export const updateDataset = async (
  id: string,
  payload: Partial<IDataset>
) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid Dataset ID");
  }

  const dataset = await Dataset.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!dataset) {
    throw new Error("Dataset not found");
  }

  return dataset;
};

export const deleteDataset = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid Dataset ID");
  }

  const dataset = await Dataset.findByIdAndDelete(id);

  if (!dataset) {
    throw new Error("Dataset not found");
  }

  return dataset;
};

export const getCategories = async () => {
  const categories = await Dataset.distinct("category");

  return categories.sort();
};

export const getOrganizations = async () => {
  const organizations = await Dataset.distinct("organization");

  return organizations.sort();
};