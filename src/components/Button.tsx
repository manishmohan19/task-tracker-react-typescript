import PropTypes from "prop-types";

interface IProps {
    text:string,
    color:string,
    onAdd:any
}

const Button = ({ text, color, onAdd }:IProps) => {
  return (
    <button onClick={onAdd} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
export default Button;
