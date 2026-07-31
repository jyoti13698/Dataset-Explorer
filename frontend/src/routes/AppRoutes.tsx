import { Routes, Route } from "react-router-dom";
import DatasetExplorer from "../pages/DatasetExplorer/DatasetExplorer";
import DatasetDetails from "../pages/DatasetDetails/DatasetDetails";
import Categories from "../pages/Categories/Categories";
import About from "../pages/About/About";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DatasetExplorer />} />
            <Route path="/datasets/:id" element={<DatasetDetails />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default AppRoutes;