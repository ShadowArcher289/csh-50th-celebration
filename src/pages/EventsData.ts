import { ScheduleEvent } from "./ScheduleEvent";

export type Day = "friday" | "saturday" | "sunday";

/**
 * Holds the data for events shown on the Schedule Page
 */
// PLACEHOLDER: Update all event times, descriptions, and locations as they are finalized
export const events: Record<Day, ScheduleEvent[]> = {
  friday: [
    {
      time: "2:00 PM - 6:00 PM",
      title: "Registration & Check-in",
      description: "Pick up your badge, swag bag, and event materials.",
      location: "CSH Floor, DSP", // PLACEHOLDER: Confirm location
      type: "activity",
    },
    {
      time: "4:00 PM - 6:00 PM",
      title: "CSH Floor Tours",
      description: "See how CSH has evolved over the years with guided tours of the floor.",
      location: "CSH Floor, DSP", // PLACEHOLDER: Confirm location
      type: "activity",
    },
    {
      time: "6:00 PM - 8:00 PM",
      title: "Welcome Reception",
      description: "Casual meet and greet with light refreshments. Reconnect with old friends!",
      location: "TBD", // PLACEHOLDER: Confirm location
      type: "social",
    },
    {
      time: "8:00 PM - Late",
      title: "Alumni Mixer",
      description: "Informal gathering for alumni to catch up over drinks.",
      location: "TBD", // PLACEHOLDER: Confirm location
      type: "social",
    },
  ],
  saturday: [
    {
      time: "8:00 AM - 10:00 AM",
      title: "Breakfast",
      description: "Start your day with a hearty breakfast and coffee.",
      location: "TBD", // PLACEHOLDER: Confirm location
      type: "food",
    },
    {
      time: "10:00 AM - 12:00 PM",
      title: "Campus Tours",
      description: "Explore RIT campus and see what's new since your time here.",
      location: "RIT Campus", // PLACEHOLDER: Confirm meeting point
      type: "activity",
    },
    {
      time: "10:00 AM - 4:00 PM",
      title: "Open House",
      description: "Drop by CSH throughout the day for demos, projects, and socializing.",
      location: "CSH Floor, DSP", // PLACEHOLDER: Confirm location
      type: "activity",
    },
    {
      time: "12:00 PM - 2:00 PM",
      title: "Lunch",
      description: "Grab lunch and continue catching up with fellow CSHers.",
      location: "TBD", // PLACEHOLDER: Confirm location
      type: "food",
    },
    {
      time: "2:00 PM - 4:00 PM",
      title: "Panel Discussions",
      description: "Hear from notable alumni about their journeys and CSH's impact.",
      location: "TBD", // PLACEHOLDER: Confirm location
      type: "activity",
    },
    {
      time: "6:00 PM - 11:00 PM",
      title: "50th Anniversary Gala Dinner",
      description: "The main event! Formal dinner, keynotes, awards, and celebration.",
      location: "VENUE", // PLACEHOLDER: Replace with actual venue name
      type: "main",
    },
  ],
  sunday: [
    {
      time: "9:00 AM - 11:00 AM",
      title: "Farewell Brunch",
      description: "Last chance to connect before departures. Share memories and contact info!",
      location: "TBD", // PLACEHOLDER: Confirm location
      type: "food",
    },
    {
      time: "11:00 AM - 1:00 PM",
      title: "Final Goodbyes",
      description: "Wrap up the weekend, grab your things, and head out.",
      location: "CSH Floor, DSP", // PLACEHOLDER: Confirm location
      type: "social",
    },
  ],
};