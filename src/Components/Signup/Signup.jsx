import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { TfiEmail } from "react-icons/tfi";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AiOutlineLock } from "react-icons/ai";
import Typography from "@mui/material/Typography";

export default function AlertDialog(props) {
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
          {"Login"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ p: 1 }}>
            <FormControl fullWidth>
              <Box sx={{ py: 1, display: "flex" }}>
                <TfiEmail
                  style={{
                    fontSize: "18px",
                    paddingTop: "22px",
                    paddingRight: "15px",
                  }}
                />
                <TextField
                  id="filled-basic"
                  label="Email"
                  variant="standard"
                  sx={{ borderBottom: "0px", width: "300px" }}
                  size="large"
                />
              </Box>
              <Box sx={{ py: 1, display: "flex" }}>
                <AiOutlineLock
                  style={{
                    fontSize: "20px",
                    paddingTop: "20px",
                    paddingRight: "15px",
                  }}
                />
                <TextField
                  id="filled-basic"
                  label="Password"
                  variant="standard"
                  sx={{ borderBottom: "0px", width: "100%" }}
                  size="large"
                />
              </Box>

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
                  Login
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
