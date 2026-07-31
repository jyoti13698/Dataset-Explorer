import {
    Database,
    Building2,
    FolderTree,
    Star
} from "lucide-react";

import Card from "../../common/Card";
import './DaatsetStats.scss'

type Props = {
    datasets: any[];
    categories: string[];
    organizations: string[];
};

const DatasetStats = ({
    datasets,
    categories,
    organizations
}: Props) => {
    return (
        <section className="dataset-stats">

            <Card className="stats-card">
                <div className="stats-icon blue">
                    <Database size={22} />
                </div>

                <div>
                    <p>Total Datasets</p>
                    <h2>{datasets.length}</h2>
                </div>
            </Card>

            <Card className="stats-card">
                <div className="stats-icon green">
                    <Building2 size={22} />
                </div>

                <div>
                    <p>Organizations</p>
                    <h2>{organizations.length}</h2>
                </div>
            </Card>

            <Card className="stats-card">
                <div className="stats-icon purple">
                    <FolderTree size={22} />
                </div>

                <div>
                    <p>Categories</p>
                    <h2>{categories.length}</h2>
                </div>
            </Card>

            <Card className="stats-card">
                <div className="stats-icon orange">
                    <Star size={22} />
                </div>

                <div>
                    <p>Featured</p>
                    <h2>{datasets.filter(d => d.featured).length}</h2>
                </div>
            </Card>

        </section>
    );
};

export default DatasetStats;