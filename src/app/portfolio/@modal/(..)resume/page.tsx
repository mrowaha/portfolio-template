/**
 * Nextjs Parallel Intercepting Route for rendering Resume Modal
 * @author Muhammad Rowaha
 */
"use client";
import Resume from "@/components/resume";
import { Box, Modal, styled } from "@mui/material";

const StyledModal = styled(Modal)(({theme}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem"
}))

export default function ResumeModal() {
  return (
    <StyledModal open>
      <Box sx={{width: "100%", height: "100%", overflow: "scroll", background: "#fff"}}>
        <Resume 
          fileUrl="/rowaha-resume.pdf"
        />
      </Box>
    </StyledModal>
  )
}