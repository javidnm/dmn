export const emails = {
    query: (email: string, name: string, message: string) => `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2>Contact Form Submission</h2>
    <p><strong>Full Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>

    <hr>
    <p>This email was sent from the contact form on your website.</p>
  </div>`,
};