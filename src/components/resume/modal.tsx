/**
 * Nextjs Parallel Intercepting Route for rendering Resume Modal
 * @author Muhammad Rowaha
 */
"use client";
import Resume from "@/components/resume";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "@mui/system/styled";

const StyledModal = styled(Modal)(({theme}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem"
}))

export const dynamic = 'force-dynamic';

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