import { useColorScheme } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import * as React from "react";

export default function ModeButton() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // to avoid layout shift, render a placeholder button
    return <Button variant="outlined" color="neutral" sx={{ width: 120 }} />;
  }
  return (
    <Button
      variant="outlined"
      color="neutral"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? "light" : "dark"}
    </Button>
  );
}
