import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Stack, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useAuthContext } from "src/contexts/authContext";
import { login } from "src/services/auth";
import JwtProvider from "src/utils/jwt";
import CommonModal from "./Modal";
import { useSnackbar } from "notistack";
import LoadingButton from "@mui/lab/LoadingButton";
import { blue600 } from "@app/styles/variables";

interface Props {
  children: JSX.Element;
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: theme.spacing(3),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "22ch",
      },
    },
  },
}));

function Header() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const formRef = useRef<any>();
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, setIsAuthenticated, profile, onLogout, checkAuth } =
    useAuthContext();
  const [tabs] = useState([
    {
      title: "Blog",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Popular",
      href: "/popular",
    },
  ]);

  const [isVisibleAuthModal, setIsVisibleAuthModal] = useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = ["Profile", "Logout"];

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    login(formValues)
      .then((result) => {
        const { status, data } = result;
        if (status === 200) {
          setFormValues({
            email: "",
            password: "",
          });
          JwtProvider.setToken(data.accessToken);
          setIsAuthenticated(true);
          setIsVisibleAuthModal(false);
          enqueueSnackbar("Login successfully", {
            variant: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar(err?.message || "Failed to login", {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value,
    });
  };

  function stringAvatar(name: string) {
    return {
      children: name && `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <>
      <AppBar
        position="static"
        style={{
          height: 55,
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link href={"/"}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                NEWS
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {tabs.map((page, index) => (
                  <MenuItem
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{
                      backgroundColor:
                        router.pathname === page.href ? blue600 : "unset",
                    }}
                  >
                    <Link href={page.href}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {tabs.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor:
                      router.pathname === page.href ? blue600 : "unset",
                  }}
                >
                  <Link href={page.href}>
                    <Typography textAlign="center" color={"white"}>
                      {page.title}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Box>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar {...stringAvatar(profile.username)} />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {!isAuthenticated ? (
                  <MenuItem
                    key="login"
                    onClick={() => setIsVisibleAuthModal(true)}
                  >
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                ) : (
                  <>
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography
                          textAlign="center"
                          onClick={() => {
                            if (setting === "Logout") {
                              onLogout();
                            }
                          }}
                        >
                          {setting}
                        </Typography>
                      </MenuItem>
                    ))}
                  </>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <CommonModal
        isVisible={isVisibleAuthModal}
        title={"Login"}
        handleClose={() => setIsVisibleAuthModal(false)}
        footer={
          <>
            <Button>Cancel</Button>
            <LoadingButton
              loading={loading}
              variant="contained"
              onClick={() => {
                formRef.current && formRef.current.requestSubmit();
              }}
            >
              Login
            </LoadingButton>
          </>
        }
      >
        <Box mt={2}>
          <form onSubmit={onSubmit} ref={formRef}>
            <Stack spacing={2}>
              <TextField
                size="small"
                fullWidth
                id="email"
                type={"email"}
                label="Email"
                variant="outlined"
                required
                value={formValues.email}
                onChange={handleChange}
              />
              <TextField
                size="small"
                fullWidth
                id="password"
                label="Password"
                variant="outlined"
                required
                value={formValues.password}
                onChange={handleChange}
                type="password"
              />
            </Stack>
          </form>
        </Box>
      </CommonModal>
    </>
  );
}

function Footer() {
  return (
    <Box>
      <Typography textAlign={"center"} my={3}>
        Blog created by Hien Pham
      </Typography>
    </Box>
  );
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
