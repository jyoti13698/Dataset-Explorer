import Input from "../Input/Input";

type Props = {
    value: string;
    onSearch: (value: string) => void;
};

const SearchBar = ({ value, onSearch }: Props) => {
    return (
        <Input
            value={value}
            onChange={onSearch}
            placeholder="Search datasets..."
        />
    );
};

export default SearchBar;