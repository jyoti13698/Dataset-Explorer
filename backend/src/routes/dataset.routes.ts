import { Router } from "express";
import * as datasetController from "../controllers/dataset.controller";

const router = Router();

router.get("/meta/categories", datasetController.getCategories);

router.get("/meta/organizations", datasetController.getOrganizations);


router.post("/", datasetController.createDataset);

router.get("/", datasetController.getAllDatasets);

router.get("/:id", datasetController.getDatasetById);

router.put("/:id", datasetController.updateDataset);

router.delete("/:id", datasetController.deleteDataset);

export default router;