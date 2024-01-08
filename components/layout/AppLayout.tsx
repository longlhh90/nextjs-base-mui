import React, { ReactElement, ReactNode } from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import theme from "@/theme/theme";

export default function AppLayout({
  children,
  fullPage,
}: {
  fullPage?: boolean;
  children: ReactNode;
}): ReactElement {
  return (
    <>
      <Header />
      <Box
        id="app-layout"
        sx={{ ...styles.pageWidth, ...(fullPage ? { maxWidth: "auto" } : {}) }}
      >
        {children}
      </Box>
    </>
  );
}

const styles = {
  helpButton: {
    variant: "extended",
    position: "fixed",
    bottom: "5vh",
    right: "28px",
  },
  helpIcon: {
    paddingRight: theme.spacing(1),
  },
  pageWidth: {
    width: "100%",
    maxWidth: "1120px",
    margin: "0 auto",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
};
