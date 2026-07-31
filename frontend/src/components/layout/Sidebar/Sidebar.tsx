import {
    Database,
    Grid2x2,
    Info,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <aside className="sidebar">

            <div className="sidebar-header">

                <div className="logo">
                    <Database size={24} />
                </div>

                <div>
                    <h2>Dataset Explorer</h2>
                    <p>Open Data Portal</p>
                </div>

            </div>

            <nav className="sidebar-nav">

                <NavLink to="/" end>
                    <Database size={20} />
                    <span>Datasets</span>
                </NavLink>

                <NavLink to="/categories">
                    <Grid2x2 size={20} />
                    <span>Categories</span>
                </NavLink>

                <NavLink to="/about">
                    <Info size={20} />
                    <span>About</span>
                </NavLink>

            </nav>

        </aside>
    );
};

export default Sidebar;