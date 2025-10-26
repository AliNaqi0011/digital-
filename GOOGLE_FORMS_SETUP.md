# Google Forms Email Integration Setup

## 📋 Current Status
- ✅ Google Form URL updated in career page
- ✅ Webhook API endpoint created at `/api/webhook`
- ✅ Email templates prepared for admin and applicant

## 🔧 Setup Instructions

### Step 1: Configure Google Form
1. Open your Google Form: https://docs.google.com/forms/d/e/1FAIpQLScC43nvTUZAx9aHcjO6VgoRpn_aUesG-FAB6p-WNp_4-wuXmw/edit
2. Ensure form has these fields:
   - Name (required)
   - Email (required)
   - Phone
   - Position/Job Title
   - Experience/Skills

### Step 2: Set up Google Apps Script
1. In Google Form, click "More" (3 dots) → "Script editor"
2. Replace default code with:

```javascript
function onFormSubmit(e) {
  const responses = e.response.getItemResponses();
  const formData = {};
  
  // Map form responses
  responses.forEach(response => {
    const question = response.getItem().getTitle();
    const answer = response.getResponse();
    
    // Map questions to field names
    if (question.toLowerCase().includes('name')) {
      formData.name = answer;
    } else if (question.toLowerCase().includes('email')) {
      formData.email = answer;
    } else if (question.toLowerCase().includes('phone')) {
      formData.phone = answer;
    } else if (question.toLowerCase().includes('position') || question.toLowerCase().includes('job')) {
      formData.position = answer;
    } else if (question.toLowerCase().includes('experience') || question.toLowerCase().includes('skill')) {
      formData.experience = answer;
    }
  });
  
  // Send to webhook
  const webhookUrl = 'https://your-domain.com/api/webhook'; // Replace with your domain
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    payload: JSON.stringify(formData)
  };
  
  try {
    UrlFetchApp.fetch(webhookUrl, options);
  } catch (error) {
    console.error('Webhook error:', error);
  }
}
```

### Step 3: Set up Trigger
1. In Apps Script, click "Triggers" (clock icon)
2. Click "Add Trigger"
3. Choose:
   - Function: `onFormSubmit`
   - Event source: "From form"
   - Event type: "On form submit"
4. Save

### Step 4: Email Service Integration
To actually send emails, integrate with an email service:

#### Option 1: SendGrid
```bash
npm install @sendgrid/mail
```

#### Option 2: Nodemailer with Gmail
```bash
npm install nodemailer
```

#### Option 3: Mailgun
```bash
npm install mailgun-js
```

## 📧 Email Flow
1. User fills Google Form
2. Google Apps Script triggers webhook
3. Webhook sends email to admin (creativexperts10@gmail.com)
4. Webhook sends confirmation email to applicant
5. Both parties receive instant notifications

## 🔒 Security Notes
- Webhook endpoint validates incoming data
- Email templates are sanitized
- Rate limiting should be implemented in production
- Consider adding CAPTCHA to prevent spam

## 🚀 Production Deployment
1. Deploy website to production domain
2. Update webhook URL in Google Apps Script
3. Configure email service API keys
4. Test complete flow end-to-end