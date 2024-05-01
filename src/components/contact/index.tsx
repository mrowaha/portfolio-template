'use client';

import { z } from "zod";
import { ArrowForward, ArrowForwardIosRounded, ErrorOutline, Instagram, Mail } from "@mui/icons-material";
import { Stack, Typography, useTheme, Box, FilledInput, TextField, Grid, Button, Collapse, Popover, FormControl, TextFieldProps, Badge, Snackbar, Alert } from "@mui/material";
import * as React from "react";

import contactSchema from "@/lib/schema/contact";
import { flushSync } from "react-dom";

type Error = {success: true} | {success: false, message: string}

type Errors = {
  firstName: Error;
  lastName:  Error;
  email: Error;
  message: Error;
}

const start : Errors = {
  firstName: {success: true},
  lastName: {success: true},
  email: {success: true},
  message: {success: true}
};

export default function Contact() {
  const theme = useTheme();
  const [showSubmitIcon, setShowSubmitIcon] = React.useState(false);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [errors, setErrors] = React.useState<Errors>(start);
  
  const [emailStatus, setEmailStatus] = React.useState<"success" | "error" | "loading" | "idle">("idle");
  const [emailMessage, setEmailMessage] = React.useState<string>("");

  const handleEmail = async () => {};
  return (
    <>
    <Box
      sx={{
        paddingBlock: "3rem",
        background: `${theme.palette.common.tpurple}aa`,
      }}
    >
      <FormControl sx={{width: "100%"}}>
        <Stack gap={2} sx={{
          margin: "auto",
          width: {
            md: "50%",
            xs: "80%"
          }}}
        >
          <Typography color="#fff" variant="h4">Get In Touch With Us</Typography>
            <Grid container gap={2} justifyContent="space-between">
              <Grid item xs={12} md={5.5}>
                <ContactField 
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  variant="filled"
                  error={!errors["firstName"].success}
                  errorMessage={errors["firstName"].success === false ? errors["firstName"].message : ""}
                />
              </Grid>
              <Grid item xs={12} md={5.5}>
                <ContactField 
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  variant="filled"
                  error={!errors["lastName"].success}
                  errorMessage={errors["lastName"].success === false ? errors["lastName"].message : ""}
                />
              </Grid>
            </Grid>
            
            <ContactField
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="filled"
              error={!errors["email"].success}
              errorMessage={errors["email"].success === false ? errors["email"].message : ""}
            />

            <ContactField 
              placeholder="Your Message"
              minRows={3}
              multiline
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              variant="filled"
              error={!errors["message"].success}
              errorMessage={errors["message"].success === false ? errors["message"].message : ""}
            />

            <Button 
              onMouseEnter={() => setShowSubmitIcon(true)}
              onMouseLeave={() => setShowSubmitIcon(false)}
              sx={{textTransform: "none", borderRadius: "15px", backgroundColor: "#514339", border: "1px solid rgba(18, 19, 22, 0.68)", width: "fit-content", alignSelf: "flex-end"}} variant="contained"
              onClick={handleEmail}
              disabled={emailStatus === "loading"}
            >
              Submit
              <Collapse in={showSubmitIcon} orientation="horizontal" sx={{position: "relative", transform: "translateY(10%)"}}>
                <ArrowForwardIosRounded />
              </Collapse>
            </Button>
        </Stack>
      </FormControl>
    </Box>
   </>
  )
}


interface ContactFieldProps extends TextFieldProps<"filled"> {
  errorMessage? :string
}

function ContactField(props: ContactFieldProps) {
  const {sx, ...rest} = props;
  const theme = useTheme();

  return (
      <Stack sx={{position: "relative"}}>
        <TextField 
          {...rest}
          sx={{...sx, 
            background: "#fff",
          }}
          inputProps={{
            style: {color: props.error? theme.palette.error.main : theme.palette.primary.main}
          }}
          variant="filled"
          size="small"
          required
          fullWidth
        />
        {
          props.error && <Box sx={{position: "absolute", top: -10, right: 0}}>
            <Badge badgeContent={<ErrorOutline style={{fill: theme.palette.error.main}} />}>

            </Badge>
          </Box>
        }
        {
          props.error && <Typography variant="body2" sx={{padding: "0.5rem"}} color={theme.palette.error.main}>{props.errorMessage}</Typography>
        }
      </Stack>      
  )
}