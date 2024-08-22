const baseStyle = {
    color: "white.a700",
    fontFamily: "Inter",
};
    const sizes = {
    headingxs: {
    fontSize: "13px",
    fontWeight: 600,
    fontstyle: "bold",
    },
    headings: {
    fontSize: "14px",
    fontWeight: 700,
    fontStyle: "bold",
    },
    headingmd: {
    fontSize: "18px",
    fontweight: 900,
    fontStyle: "bold",
    },
    headingg: {
    fontSize: "41px",
    fontWeight: 700,
    fontStyle: "bold",
    },
    headingxl: {
    fontSize: "43px",
    fontWeight: 700,
    fontStyle: "bold",
    },
    heading2xl: {
    fontSize: "64px",
    fontWeight: 700,
    fontstyle: "bold",
    },
};
    const defaultProps = {
    size: "headingxs",
};

const Heading = {
baseStyle,
sizes,
defaultProps,
};
export default Heading;