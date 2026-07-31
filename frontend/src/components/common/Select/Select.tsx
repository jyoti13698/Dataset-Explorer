type Props = React.SelectHTMLAttributes<HTMLSelectElement>;
import './Select.scss';

const Select = (props: Props) => {
    return (
        <select
            className="app-select"
            {...props}
        />
    );
};

export default Select;