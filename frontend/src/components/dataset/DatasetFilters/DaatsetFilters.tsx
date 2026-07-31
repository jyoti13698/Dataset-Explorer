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
        <div className="filters">
            <input
                placeholder="Search datasets..."
                value={search}
                onChange={(e) => onSearch(e.target.value)}
            />

            <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                <option value="">All Categories</option>

                {categories.map(category => (
                    <option key={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DatasetFilters;