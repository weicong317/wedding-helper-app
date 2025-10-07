export interface Homestays {
  date: string;
  homestays: homestay[];
}

interface homestay {
  locationName?: string;
  location: string;
  checkInDT: string;
  checkOutDT: string;
  wazeUrl: string;
  googleMapUrl: string;
  detailUrl: string;
  allowableRoles: string[];
}
