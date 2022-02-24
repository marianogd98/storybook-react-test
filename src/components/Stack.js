import PropTypes from "prop-types"

function Stack({ children, spacing = 2, direction = "row", wrap = false, flow = false }) {
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
    flexFlow: flow ? "row wrap" : "none"
  }
  return <div style={style}>{children}</div>
}

Stack.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
  flow: PropTypes.bool
}

export default Stack
