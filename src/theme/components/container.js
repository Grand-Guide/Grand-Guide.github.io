import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// define custom sizes
const sizes = {
  xs: defineStyle({
  maxw: "1200px",
  W: "100%",
  mX: "auto",
 }),
};

// export the component theme
const Container = defineStyleConfig({
sizes,
defaultProps: { size: "xs" },
});
export default Container;