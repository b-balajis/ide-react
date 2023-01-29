import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Vector from "../assets/img/se-vector.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { useForm } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const theme = createTheme();
const SignIn = () => {
  const [user, setUser] = React.useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let selectUser = data.get("selectUser");
    console.log(selectUser);
    if (selectUser === "s") {
      window.location.href = "/s/";
    }
    else if (selectUser === "f"){
      window.location.href = "/f/";
    }
    else if (selectUser === "a"){
      window.location.href = "/a/";
    }
  };
    const emailvalidations = {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  };

  const passwordValidations = {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Vector})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 20,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <AccountCircleSharpIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSignIn}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                {...register("email", emailvalidations)}
              />
              {errors.email && (
                <span className="text-red">{errors.email.message}</span>
              )}
              <TextField
                label="Password"
                fullWidth
                variant="outlined"
                type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                // onChange=
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                {...register("password", passwordValidations)}
              />
              {errors.password && (
                <span className="text-red">{errors.password.message}</span>
              )}
              <FormControl
                sx={{ mt: 2, mb: 2, minWidth: 0 }}
                fullWidth
                required
              >
                <InputLabel id="selectUser">User</InputLabel>
                <Select
                  labelId="selectUser"
                  id="selectUser"
                  value={user}
                  label="User"
                  name="selectUser"
                  onChange={handleChange}
                >
                  <MenuItem value="s">Student</MenuItem>
                  <MenuItem value="f">Faculty</MenuItem>
                  <MenuItem value="a">Admin</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                name="check"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, py: 1, fontSize: "18px" }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignIn;
