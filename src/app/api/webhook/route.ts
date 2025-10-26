import { NextRequest, NextResponse } from 'next/server';

// This webhook will be called when Google Form is submitted
export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Extract form data (adjust field names based on your Google Form)
    const applicantName = formData.name || formData.applicantName || 'Unknown';
    const applicantEmail = formData.email || formData.applicantEmail || '';
    const position = formData.position || formData.jobTitle || 'Unknown Position';
    const phone = formData.phone || '';
    const experience = formData.experience || '';
    
    // Admin email (website owner)
    const adminEmail = 'creativexperts10@gmail.com';
    
    // Send email to admin
    await sendEmailToAdmin({
      applicantName,
      applicantEmail,
      position,
      phone,
      experience
    });
    
    // Send confirmation email to applicant
    await sendEmailToApplicant({
      applicantName,
      applicantEmail,
      position
    });
    
    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Failed to process webhook' }, { status: 500 });
  }
}

async function sendEmailToAdmin(data: {
  applicantName: string;
  applicantEmail: string;
  position: string;
  phone: string;
  experience: string;
}) {
  // In production, integrate with email service like SendGrid, Mailgun, etc.
  console.log('📧 Email to Admin:', {
    to: 'creativexperts10@gmail.com',
    subject: `New Job Application: ${data.position}`,
    html: `
      <h2>New Job Application Received</h2>
      <p><strong>Position:</strong> ${data.position}</p>
      <p><strong>Applicant Name:</strong> ${data.applicantName}</p>
      <p><strong>Email:</strong> ${data.applicantEmail}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Experience:</strong> ${data.experience}</p>
      <p><strong>Applied At:</strong> ${new Date().toLocaleString()}</p>
    `
  });
}

async function sendEmailToApplicant(data: {
  applicantName: string;
  applicantEmail: string;
  position: string;
}) {
  // In production, integrate with email service
  console.log('📧 Email to Applicant:', {
    to: data.applicantEmail,
    subject: 'Application Received - YOUR DIGITAL CHOICE',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #ea580c;">Application Received!</h2>
        <p>Dear ${data.applicantName},</p>
        <p>Thank you for your interest in the <strong>${data.position}</strong> position at YOUR DIGITAL CHOICE.</p>
        <p>We have received your application and will review it carefully. If your qualifications match our requirements, we will contact you within 1-2 weeks.</p>
        <p>We appreciate your interest in joining our team!</p>
        <br>
        <p>Best regards,<br>
        <strong>YOUR DIGITAL CHOICE Team</strong><br>
        Email: creativexperts10@gmail.com<br>
        Phone: +92 311 4648875</p>
      </div>
    `
  });
}