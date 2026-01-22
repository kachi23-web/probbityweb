// Email service configuration
export const emailConfig = {
  // EmailJS Configuration (Recommended for client-side)
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
  },
  
  // Formspree Configuration (Alternative)
  formspree: {
    formId: import.meta.env.VITE_FORMSPREE_FORM_ID || 'your_form_id',
    endpoint: `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID || 'your_form_id'}`,
  },
  
  // Custom API Configuration
  api: {
    endpoint: import.meta.env.VITE_API_ENDPOINT || '/api/contact',
  },
};

// Email template for reference
export const emailTemplate = `
Hi {{to_name}},

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the Probbity Tech contact form.
Reply directly to this email to respond to the sender.
`;