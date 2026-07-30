import { Router } from "express";
import * as datasetController from "../controllers/dataset.controller";

const router = Router();

/*
|--------------------------------------------------------------------------
| Metadata Routes
|--------------------------------------------------------------------------
*/

router.get("/meta/categories", datasetController.getCategories);

router.get("/meta/organizations", datasetController.getOrganizations);

/*
|--------------------------------------------------------------------------
| Dataset CRUD
|--------------------------------------------------------------------------
*/

router.post("/", datasetController.createDataset);

router.get("/", datasetController.getAllDatasets);

router.get("/:id", datasetController.getDatasetById);

router.put("/:id", datasetController.updateDataset);

router.delete("/:id", datasetController.deleteDataset);

export default router;