import PropTypes from "prop-types";

const Button = ({ label, action, color }) => {
    return (
        <button
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
