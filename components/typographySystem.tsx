import * as React from "react";
import { useTheme } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

const TypographySystem = () => {
  const theme = useTheme();
  return (
    <Box>
      {Object.keys(theme.typography).map(
        (level: keyof typeof theme.typography) => (
          <Typography key={level} level={level} textAlign="center">
            {level}
          </Typography>
        )
      )}
    </Box>
  );
};

export default TypographySystem;
