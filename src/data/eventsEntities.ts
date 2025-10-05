export interface EventDates {
  date: string;
  allowableRoles: string[];
}

export interface Events {
  date: string;
  events: Event[];
}

interface Event {
  title: string[];
  locationName?: string;
  location: string;
  start: string;
  entry?: string;
  wazeUrl: string;
  googleMapUrl: string;
  allowableRoles: string[];
}
