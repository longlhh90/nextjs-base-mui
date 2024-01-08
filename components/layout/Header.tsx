import { MenuOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import theme from "@/theme/theme";
import { useState } from "react";
import CustomDrawer from "./CustomDrawer";

export default function Header({}: {}) {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <>
      <Box id={"app-header"} sx={styles.header}>
        <Box sx={styles.pageWidth}>
          <IconButton
            id={"app-header-menu-icon"}
            sx={styles.drawerButton}
            disableRipple
            onClick={() => setOpen(true)}
            color={"primary"}
          >
            <MenuOutlined />
          </IconButton>
          <Box
            id={"app-header-logo"}
            sx={[styles.headerLogo, styles.centerLogo]}
          >
            <Image
              src={"/logo-free.png"}
              alt={"logo"}
              priority={true}
              height={1200}
              width={1200}
            />
          </Box>
        </Box>
      </Box>
      <CustomDrawer open={open} toggleDrawer={setOpen} />
    </>
  );
}

const styles = {
  pageWidth: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    margin: "auto 32px",
    padding: "12px 0",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      margin: theme.spacing(0, 0.5),
      padding: "0",
    },
  },
  header: {
    height: theme.spacing(8),
    display: "flex",
    width: "100%",
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: theme.palette.common.white,
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(6),
    },
  },
  headerLogo: {
    marginRight: "auto",
    height: "50px",
    width: "50px",
    cursor: "pointer",
  },
  centerLogo: {
    [theme.breakpoints.down("md")]: {
      height: "30px",
      width: "30px",
      position: "absolute",
      left: "calc((100vw - 30px) / 2)",
    },
  },
  drawerButton: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(2),
    borderRadius: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1.5),
    },
  },
};
