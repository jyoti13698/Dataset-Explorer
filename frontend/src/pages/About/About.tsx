import {
    Database,
    Search,
    Table,
    Layers,
    ShieldCheck,
    Server,
    Globe,
    BarChart3
} from "lucide-react";

import MainLayout from "../../components/layout/MainLayout/MainLayout";
import Card from "../../components/common/Card";

import "./About.scss";

const features = [
    {
        icon: <Database size={28} />,
        title: "Dataset Management",
        description: "Browse datasets collected from multiple public organizations with detailed metadata."
    },
    {
        icon: <Search size={28} />,
        title: "Powerful Search",
        description: "Search datasets instantly using keywords, categories and filters."
    },
    {
        icon: <Table size={28} />,
        title: "Structured Dataset View",
        description: "Explore datasets inside a responsive table with pagination and detailed pages."
    },
    {
        icon: <Layers size={28} />,
        title: "Category Explorer",
        description: "Organize datasets into meaningful categories for faster discovery."
    },
    {
        icon: <BarChart3 size={28} />,
        title: "Dataset Statistics",
        description: "Quick overview of datasets, organizations, featured datasets and categories."
    },
    {
        icon: <Server size={28} />,
        title: "REST APIs",
        description: "Backend APIs built using Node.js, Express and MongoDB."
    }
];

const About = () => {
    return (
        <MainLayout>
            <section className="about-page">

                <div className="about-hero">
                    <div>
                        <h1>About Dataset Explorer</h1>

                        <p>
                            Dataset Explorer is a centralized platform that allows users to
                            discover, search and explore open datasets collected from various
                            organizations. It provides a clean interface for browsing public
                            information with filtering, categorization and detailed metadata.
                        </p>
                    </div>

                    <div className="about-logo">
                        <Globe size={80} />
                    </div>
                </div>

                <div className="about-grid">

                    <Card className="info-card">
                        <ShieldCheck size={34} />
                        <h3>Purpose</h3>

                        <p>
                            Make public datasets easy to discover through a modern,
                            responsive and user-friendly interface.
                        </p>
                    </Card>

                    <Card className="info-card">
                        <Database size={34} />
                        <h3>Technology Stack</h3>

                        <p>
                            React • TypeScript • Node.js • Express • MongoDB • SCSS • Axios
                        </p>
                    </Card>

                    <Card className="info-card">
                        <BarChart3 size={34} />
                        <h3>Assignment Features</h3>

                        <ul>
                            <li>Dataset Listing</li>
                            <li>Dataset Details</li>
                            <li>Category Explorer</li>
                            <li>Search & Filters</li>
                            <li>Pagination</li>
                            <li>Loading & Empty States</li>
                        </ul>
                    </Card>

                </div>

                <h2 className="section-title">Key Features</h2>

                <div className="features-grid">
                    {features.map((feature) => (
                        <Card key={feature.title} className="feature-card">
                            <div className="icon">
                                {feature.icon}
                            </div>

                            <h3>{feature.title}</h3>

                            <p>{feature.description}</p>
                        </Card>
                    ))}
                </div>

                <Card className="edge-card">

                    <h2>Edge Cases Covered</h2>

                    <ul className="edge-list">
                        <li>Loader while fetching APIs</li>
                        <li>No Dataset Found screen</li>
                        <li>Responsive Desktop / Tablet / Mobile</li>
                        <li>Search & Category Filters</li>
                        <li>Server-side Pagination Ready</li>
                        <li>Dataset Details Page</li>
                        <li>Reusable Components</li>
                    </ul>

                </Card>

            </section>
        </MainLayout>
    );
};

export default About;