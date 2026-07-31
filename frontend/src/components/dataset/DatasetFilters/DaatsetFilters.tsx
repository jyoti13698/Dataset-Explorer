import Input from "../../common/Input/Input";
import Select from "../../common/Select/Select";
import './DatasetFilters.scss'

type Props = {
    search: string;
    onSearch: (value: string) => void;
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (value: string) => void;
};

const DatasetFilters = ({
    search,
    onSearch,
    categories,
    selectedCategory,
    onCategoryChange
}: Props) => {
    return (
        <section className="dataset-filters">

            <div className="filters-left">
                <Input
                    placeholder="🔍 Search datasets..."
                    value={search}
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>

            <div className="filters-right">
                <Select
                    value={selectedCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                >
                    <option value="">All Categories</option>

                    {categories.map((category) => (
                        <option
                            key={category}
                            value={category}
                        >
                            {category}
                        </option>
                    ))}
                </Select>
            </div>

        </section>
    );
};

export default DatasetFilters;