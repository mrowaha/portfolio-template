'use server';
import contactSchema from "@/lib/schema/contact";
import { env } from "@/utils/env";
import nodemailer from "nodemailer";

export default async function sendEmail(formData: FormData) {
  const info = contactSchema.safeParse({
    email: formData.get('email'),
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    message: formData.get('message'), 
  }); 

  if (!info.success) {
    return {
      success: false,
      errors: info.error.flatten().fieldErrors
    }
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
      user: env.APP_EMAIL,
      pass: env.APP_PASSWORD
    }
  })

  try {
    await transporter.sendMail({
      from: `"Message bot" <${env.APP_EMAIL}>`,
      to: env.APP_EMAIL,
      subject: `Message from ${info.data.firstName} ${info.data.lastName} <${info.data.email}>`,
      text: info.data.message,
    })
    return {
      success: true
    }
  } catch (err) {
    return {
      errors: ["Internal Server Error"]
    }
  }
}