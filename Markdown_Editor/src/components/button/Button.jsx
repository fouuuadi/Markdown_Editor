import PropTypes from "prop-types";

//code fait par FOUAD LAMNAOUAR
//Un exemple de component Button que je réutilise dans tout mes projet react

const Button = ({ label, action, color }) => {
    return (
        <button className="btn"
            style={{ backgroundColor: color }}
            onClick={() => {
                action && action();
            }}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    action: PropTypes.func,
    color: PropTypes.string,
};

export default Button;
