# Contact Form Setup Guide

Your contact form is now integrated with email services! Here are three options to make it fully functional:

## Option 1: EmailJS (Recommended - Free & Easy)

### Setup Steps:
1. **Create EmailJS Account**: Go to [emailjs.com](https://www.emailjs.com/) and sign up
2. **Create Email Service**: 
   - Add your email provider (Gmail, Outlook, etc.)
   - Note the Service ID
3. **Create Email Template**:
   - Use these template variables: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{subject}}`, `{{message}}`
   - Note the Template ID
4. **Get Public Key**: From your EmailJS dashboard
5. **Set Environment Variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your EmailJS credentials
   ```

### Template Example:
```
Subject: New Contact Form Submission - {{subject}}

Hi Probbity Tech Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

## Option 2: Formspree (Alternative)

### Setup Steps:
1. **Create Formspree Account**: Go to [formspree.io](https://formspree.io/)
2. **Create New Form**: Get your form ID
3. **Update Service**: In `src/services/emailService.ts`, change the import to use `sendContactEmailToFormspree`
4. **Set Environment Variable**:
   ```bash
   VITE_FORMSPREE_FORM_ID=your_form_id
   ```

## Option 3: Custom Backend API

### Setup Steps:
1. **Create API Endpoint**: `/api/contact` that accepts POST requests
2. **Update Service**: In `src/services/emailService.ts`, change the import to use `sendContactEmailToAPI`
3. **Set Environment Variable**:
   ```bash
   VITE_API_ENDPOINT=https://your-api.com/contact
   ```

## Current Features ✅

- ✅ Form validation (required fields, email format)
- ✅ Loading states and error handling
- ✅ Toast notifications for success/error
- ✅ Form reset after successful submission
- ✅ Responsive design
- ✅ Accessibility features

## Testing

1. Fill out the contact form
2. Check your email service for received messages
3. Verify error handling by testing with invalid data

## Troubleshooting

- **CORS Issues**: Make sure your email service allows requests from your domain
- **Environment Variables**: Ensure they start with `VITE_` for Vite to include them
- **EmailJS Limits**: Free tier has monthly limits, upgrade if needed
- **Console Errors**: Check browser console for detailed error messages

## Security Notes

- Never expose private keys in frontend code
- Use environment variables for all sensitive data
- Consider rate limiting for production use
- Validate all inputs on both client and server side