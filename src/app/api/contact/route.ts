import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "info@auspicioussoft.com",
      pass: "vsyq fifl nwnq vdxb",
    },
  }); 

  try {
    await transporter.sendMail({
      from: "info@auspicioussoft.com",
      to: "info@auspicioussoft.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${data.name} ${data.surname}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Company:</b> ${data.company}</p>
        <p><b>Interest:</b> ${data.interest}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false });
  }
}