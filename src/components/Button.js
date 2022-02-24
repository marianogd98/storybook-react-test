import PropTypes from "prop-types"

function Button({ label, backgroundColor = "red", borderRadius = "yes", color = "white", size = "md", handleClick }) {
  
  let fontColor = "white"
  if (color === "black") fontColor = "black"
  
  let radius = 25
  if (borderRadius === "no") radius = 0
  
  let scale = 1
  if (size === "xs") scale = 0.6
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  if (size === "xl") scale = 2.25
  
  const style = {
    backgroundColor,
    color: `${fontColor}`,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "0.5px solid",
    borderRadius: `${radius}px`,
  }
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.oneOf(["white", "black"]),
  borderRadius: PropTypes.oneOf(["yes", "no"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  handleClick: PropTypes.func,
}

export default Button
