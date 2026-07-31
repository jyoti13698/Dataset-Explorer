import "./Select.scss";

type Option = {
    label: string;
    value: string;
};

type Props = {
    value: string;
    options: Option[];
    onChange: (value: string) => void;
};

const Select = ({ value, options, onChange }: Props) => {
    return (
        <select
            className="app-select"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {options.map((item) => (
                <option
                    key={item.value}
                    value={item.value}
                >
                    {item.label}
                </option>
            ))}
        </select>
    );
};

export default Select;