// Email service utility
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface CareerApplicationData {
  name: string;
  email: string;
  phone?: string;
  position: string;
  resume?: File;
}

// Simulate email sending - In production, integrate with services like:
// - SendGrid
// - Mailgun  
// - AWS SES
// - Nodemailer with SMTP
export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, this would make an actual API call to your email service
    console.log('Contact form submission:', data);
    
    // Simulate success/failure
    return Math.random() > 0.1; // 90% success rate
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

export async function sendCareerApplicationEmail(data: CareerApplicationData): Promise<boolean> {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, this would make an actual API call to your email service
    console.log('Career application submission:', data);
    
    // Simulate success/failure
    return Math.random() > 0.1; // 90% success rate
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

// Email templates
export const emailTemplates = {
  contactConfirmation: (name: string) => ({
    subject: 'Thank you for contacting YOUR DIGITAL CHOICE',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>Our team is excited to learn more about your project and discuss how we can help bring your vision to life.</p>
        <br>
        <p>Best regards,<br>The YOUR DIGITAL CHOICE Team</p>
      </div>
    `
  }),
  
  careerConfirmation: (name: string, position: string) => ({
    subject: 'Application Received - YOUR DIGITAL CHOICE',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Application Received</h2>
        <p>Dear ${name},</p>
        <p>Thank you for your interest in the ${position} position at YOUR DIGITAL CHOICE.</p>
        <p>We have received your application and will review it carefully. If your qualifications match our requirements, we will contact you within 1-2 weeks.</p>
        <br>
        <p>Best regards,<br>The YOUR DIGITAL CHOICE HR Team</p>
      </div>
    `
  })
};