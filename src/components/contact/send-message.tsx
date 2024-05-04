'use client';
import * as React from "react";
import { ArrowForwardIosRounded, ErrorOutline } from "@mui/icons-material";
import { Stack, Typography, useTheme, Box, TextField, Button, Collapse, TextFieldProps, Badge, Snackbar, Alert } from "@mui/material";
import sendEmail from "@/actions/email";
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


export default function SendMessage() {
  const [showSubmitIcon, setShowSubmitIcon] = React.useState(false);
  const [formState, setFormState] = React.useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = React.useState<Errors>(start);

  const handleEmail = async(e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    flushSync(() => {
      setErrors({...start});
      setFormState("sending");
    });
    // @ts-ignore
    const data = new FormData(e.target);
    const {success, errors} = await sendEmail(data);
    if (!success) {
      // we have errors
      const errorsState : Errors = {...start};
      if ("email" in errors!) {
        errorsState.email = {success: false, message: errors.email![0]}
      }
      if ("firstName" in errors!) {
        errorsState.firstName = {success: false, message: errors.firstName![0]}
      }
      if ("lastName" in errors!) {
        errorsState.lastName = {success: false, message: errors.lastName![0]}
      }
      if ("message" in errors!) {
        errorsState.message = {success: false, message: errors.message![0]}
      }

      setErrors(errorsState);
      setFormState("error");
    } else {

      setFormState("success");
    }
  }

  return (
    <>
      <form onSubmit={handleEmail}>
        <Stack gap={2} sx={{paddingInline: "2rem"}}>
          <Typography color="#fff" variant="h4">Message</Typography>
            <ContactField 
              placeholder="First Name"
              variant="filled"
              name="firstName"
              error={!errors["firstName"].success}
              errorMessage={errors["firstName"].success === false ? errors["firstName"].message : ""}
            />
            <ContactField 
              placeholder="Last Name"
              variant="filled"
              name="lastName"
              error={!errors["lastName"].success}
              errorMessage={errors["lastName"].success === false ? errors["lastName"].message : ""}
            />
            <ContactField
              placeholder="Email"
              variant="filled"
              name="email"
              error={!errors["email"].success}
              errorMessage={errors["email"].success === false ? errors["email"].message : ""}
            />

            <ContactField 
              placeholder="Your Message"
              minRows={3}
              multiline
              variant="filled"
              name="message"
              error={!errors["message"].success}
              errorMessage={errors["message"].success === false ? errors["message"].message : ""}
            />

            <Button
              disabled={formState === "sending"}
              onMouseEnter={() => setShowSubmitIcon(true)}
              onMouseLeave={() => setShowSubmitIcon(false)}
              sx={{textTransform: "none", borderRadius: "15px", backgroundColor: "#514339", border: "1px solid rgba(18, 19, 22, 0.68)", width: "fit-content", alignSelf: "flex-end"}} variant="contained"
              type="submit"
            >
              Submit
              <Collapse in={showSubmitIcon} orientation="horizontal" sx={{position: "relative", transform: "translateY(10%)"}}>
                <ArrowForwardIosRounded />
              </Collapse>
            </Button>
        </Stack>

      </form>

      <Snackbar
        open={formState === "error" || formState === "success"}
        autoHideDuration={2500}
        onClose={() => setFormState("idle")}
      >
        <Alert severity={formState === "error" ? "error" : "success"}>
          <Typography>
            {
              formState === "error" ? "An Error Occured"
              : "Email Sent"
            }
          </Typography>
        </Alert>
      </Snackbar>    
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