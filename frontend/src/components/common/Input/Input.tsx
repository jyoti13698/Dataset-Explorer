import './Index.scss'
type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props) => {
    return (
        <input
            className="app-input"
            {...props}
        />
    );
};

export default Input;