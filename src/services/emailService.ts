import emailjs from '@emailjs/browser';
import { emailConfig } from '@/config/email';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    // Initialize EmailJS (only needs to be done once)
    emailjs.init(emailConfig.emailjs.publicKey);

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      subject: formData.subject || 'Contact Form Submission',
      message: formData.message,
      to_name: 'Probbity Tech Team',
      reply_to: formData.email,
    };

    // Send email
    const response = await emailjs.send(
      emailConfig.emailjs.serviceId,
      emailConfig.emailjs.templateId,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};

// Alternative: Simple fetch to your own backend API
export const sendContactEmailToAPI = async (formData: ContactFormData): Promise<void> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.message || 'Failed to send message');
    }
  } catch (error) {
    console.error('API error:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};

// Fallback: Send to a form service like Formspree
export const sendContactEmailToFormspree = async (formData: ContactFormData): Promise<void> => {
  try {
    const response = await fetch('https://formspree.io/f/mqeeodyn', { // Replace with your Formspree form ID
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Formspree error:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};