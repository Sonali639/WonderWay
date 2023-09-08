import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { login, signup } from "../../redux/login/losiAction";

export default function AlertDialog(props) {
  const [useDetails, setUseDetails] = React.useState({
    Email: "",
    Username: "",
    Password: "",
  });
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.losi.user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUseDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // console.log(useDetails);

  const handleSubmit = () => {
    if (props.title === "Login") {
      if(userData.length==0){
        alert("Invalid Email or Password")
      }
      userData.map((item) => {
        if (item.Email === useDetails.Email && item.Password === useDetails.Password) {
         alert("Login Successful");
          dispatch(login(useDetails));
        }
        else if(item.Email !== useDetails.Email || item.Password !== useDetails.Password){
          alert("Invalid Email or Password")
        }
      
        })
    } 
    
    else {
      if(useDetails.Email=="" || useDetails.Username=="" || useDetails.Password==""){
        alert("Please fill all the fields")
      }
      else{
        dispatch(signup(useDetails));
        alert("Signup Successful");
      }
    
    }
  };

  return (
    <Box>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ textAlign: "center", fontSize: "26px", fontWeight: "bold" }}
        >
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ p: 1 }}>
            <FormControl fullWidth>
              {props.fields.map((item) => (
                <Box sx={{ py: 1, display: "flex" }} key={item.id}>
                  {item.icon}
                  <TextField
                    id="filled-basic"
                    label={item.label}
                    name={item.label}
                    onChange={handleInputChange}
                    variant="standard"
                    sx={{ borderBottom: "0px", width: "300px" }}
                    size="large"
                  />
                </Box>
              ))}

              <Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        transform: "scale(0.6)",
                      }}
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "14px", color: "grey" }}
                    >
                      Remember me
                    </Typography>
                  }
                />
              </Box>

              <Stack spacing={2} sx={{ py: 3 }} direction="row">
                <Button
                  variant="contained"
                  type="submit"
                  onClick={handleSubmit}
                  sx={{
                    py: 1,
                    width: "100%",
                    borderRadius: "0%",
                    backgroundColor: "#000",
                    borderColor: "#000",
                    "&:hover": {
                      backgroundColor: "#373737",
                      borderColor: "#373737",
                      boxShadow: "none",
                    },
                    "&:active": {
                      boxShadow: "none",
                      backgroundColor: "#000",
                      borderColor: "#000",
                    },
                    "&:focus": {
                      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
                    },
                  }}
                >
                  {props.btntext}
                </Button>
              </Stack>
            </FormControl>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </Box>
  );
}
