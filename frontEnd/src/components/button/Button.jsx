import "./button.style.css";

const BUTTON_TYPE_CLASSES = {
  regularForm: "regularForm",
};
//Prev and next button's component

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`  regularForm animated-border-button button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
