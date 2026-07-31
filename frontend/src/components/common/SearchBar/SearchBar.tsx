import Input from "../Input/Input";

type Props = {
    value: string;
    onSearch: (value: string) => void;
};

const SearchBar = ({ value, onSearch }: Props) => {
    return (
        <Input
            value={value}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search datasets..."
        />
    );
};

export default SearchBar;