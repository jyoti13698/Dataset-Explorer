import type { ChangeEvent } from "react";
import "./Index.scss";

type Props = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
};

const Input = ({ value, onChange, placeholder }: Props) => {
    return (
        <input
            className="app-input"
            value={value}
            placeholder={placeholder}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChange(e.target.value)
            }
        />
    );
};

export default Input;