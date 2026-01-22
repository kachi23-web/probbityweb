/**
 * Google Calendar Integration Service
 * Provides utilities for creating calendar events and scheduling meetings
 */

export interface CalendarEventData {
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  attendees?: string[];
}

/**
 * Creates a Google Calendar event URL that opens in a new tab
 * This allows users to add the event to their calendar without requiring OAuth
 */
export const createGoogleCalendarUrl = (eventData: CalendarEventData): string => {
  const baseUrl = 'https://calendar.google.com/calendar/render';
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: eventData.title,
    dates: `${formatDateForGoogle(eventData.startDate)}/${formatDateForGoogle(eventData.endDate)}`,
    details: eventData.description || '',
    location: eventData.location || '',
    // Add attendees if provided
    ...(eventData.attendees && eventData.attendees.length > 0 && {
      add: eventData.attendees.join(',')
    })
  });

  return `${baseUrl}?${params.toString()}`;
};

/**
 * Formats a Date object to Google Calendar's expected format (YYYYMMDDTHHMMSSZ)
 */
const formatDateForGoogle = (date: Date): string => {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
};

/**
 * Creates a consultation meeting event
 */
export const createConsultationEvent = (
  clientName: string = 'Client',
  clientEmail?: string,
  preferredDate?: Date
): string => {
  // Default to next business day at 2 PM if no date provided
  const defaultDate = getNextBusinessDay();
  defaultDate.setHours(14, 0, 0, 0); // 2:00 PM
  
  const startDate = preferredDate || defaultDate;
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour later

  const eventData: CalendarEventData = {
    title: `Technical Consultation - ${clientName}`,
    description: `Technical consultation meeting with Probbity Tech team.
    
Agenda:
- Project requirements discussion
- Technical architecture review
- Timeline and resource planning
- Q&A session

Meeting Details:
- Duration: 1 hour
- Format: Video call (link will be shared)
- Preparation: Please prepare a brief overview of your project requirements

Contact: hello@probbity.com`,
    startDate,
    endDate,
    location: 'Video Call (Link to be shared)',
    attendees: clientEmail ? [clientEmail, 'hello@probbity.com'] : ['hello@probbity.com']
  };

  return createGoogleCalendarUrl(eventData);
};

/**
 * Gets the next business day (Monday-Friday)
 */
const getNextBusinessDay = (): Date => {
  const date = new Date();
  date.setDate(date.getDate() + 1); // Start with tomorrow
  
  // If it's Saturday (6) or Sunday (0), move to Monday
  while (date.getDay() === 0 || date.getDay() === 6) {
    date.setDate(date.getDate() + 1);
  }
  
  return date;
};

/**
 * Opens Google Calendar in a new tab with the event pre-filled
 */
export const scheduleConsultation = (
  clientName?: string,
  clientEmail?: string,
  preferredDate?: Date
): void => {
  const calendarUrl = createConsultationEvent(clientName, clientEmail, preferredDate);
  window.open(calendarUrl, '_blank', 'noopener,noreferrer');
};

/**
 * Creates a Calendly-style booking URL (if you want to use Calendly instead)
 * Replace with your actual Calendly URL
 */
export const getCalendlyUrl = (): string => {
  // Replace this with your actual Calendly URL
  return 'https://calendly.com/probbity-tech/consultation';
};

/**
 * Opens Calendly booking page
 */
export const openCalendlyBooking = (): void => {
  window.open(getCalendlyUrl(), '_blank', 'noopener,noreferrer');
};