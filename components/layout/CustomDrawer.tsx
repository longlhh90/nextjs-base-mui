import theme from "@/theme/theme";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import {
  AutoStoriesOutlined,
  CloseOutlined,
  HelpOutline,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

type CustomDrawerProps = {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
};
export default function CustomDrawer({
  open,
  toggleDrawer,
}: CustomDrawerProps) {
  return (
    <Drawer anchor={"left"} open={open} onClose={() => toggleDrawer(false)}>
      <Box sx={styles.drawerContainer}>
        <Box sx={styles.drawerActionsContainer}>
          <Box sx={[styles.headerLogo]}>
            <Box width={50} height={50}>
              <Image
                src={"/logo-free.png"}
                alt={"logo"}
                priority={true}
                height={1200}
                width={1200}
              />
            </Box>
          </Box>
          <IconButton
            sx={styles.drawerButton}
            disableRipple
            onClick={() => toggleDrawer(false)}
            color={"primary"}
          >
            <CloseOutlined />
          </IconButton>
        </Box>

        <Divider style={{ margin: theme.spacing(3, 0) }} />
        <Link href={"/"} passHref>
          <ListItem disablePadding>
            <ListItemButton color={"primary"}>
              <ListItemIcon>
                <HelpOutline color={"primary"} />
              </ListItemIcon>
              <Typography variant={"button"} color={"primary"}>
                Help Centre
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href={"/"} passHref>
          <ListItem disablePadding>
            <ListItemButton color={"primary"}>
              <ListItemIcon>
                <AutoStoriesOutlined color={"primary"} />
              </ListItemIcon>
              <Typography variant={"button"} color={"primary"}>
                Our Policies
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>
      </Box>
    </Drawer>
  );
}

const styles = {
  drawerButton: {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1.5),
    },
  },
  drawerContainer: {
    width: theme.spacing(50),
    maxWidth: theme.spacing(50),
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      maxWidth: "100%",
    },
  },
  drawerActionsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
    },
  },
  headerLogo: {
    marginRight: "auto",
    height: "32px",
    width: "77.56px",
    cursor: "pointer",
  },
};
