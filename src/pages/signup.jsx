import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    TextField,
    Typography,
  } from "@mui/material";
  import logo from "./../assets/logo.svg";
  import logo2 from "./../assets/logo2.svg";
  import { Link } from "react-router-dom";
  const Signup = () => {
    return (
      <div className="flex h-screen ">
        <div className="bg-secondary w-full sm:flex justify-center items-center hidden">
          <img src={logo} alt="Logo" />
        </div>
        <div className="w-full px-20 2xl:px-32 flex justify-center items-center overflow-visible flex-col">
          <div className="flex gap-5 items-center w-full">
            <img src={logo2} alt="Logo" />
            <Typography variant="h4" color="primary">
              Book Rent
            </Typography>
          </div>
          <div className="flex flex-col gap-10 mt-5 w-full">
            <Typography variant="h5" color="text.primary">
              Login
              <Divider className="pt-2" />
            </Typography>
            <form className=" flex flex-col gap-5">
              <TextField
                fullWidth
                label="Email address"
                name="email"
                color="primary"
              />
              <TextField fullWidth label="password" password color="primary" />
              <FormControlLabel
                control={<Checkbox color="secondary" />}
                label="Remember me"
              />
              <Button variant="contained" color="secondary">
                Login
              </Button>
            <Typography variant="h6" color="text.primary" className="text-center">
              Haven not an account?
              <Link to="/signup" className="text-primary">
                Sign up
              </Link>
            </Typography>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Signup;
  