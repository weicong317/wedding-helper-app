import type { Homestays } from "./homestaysEntities";
import { roleMapping } from "./roles";

export const allHomestays: Homestays[] = [
  {
    date: "18Oct",
    homestays: [
      {
        locationName: "Ray's Place, near Spring Mall, BMC, Swinburne",
        location: "1404, Jalan Uplands 1404 Jalan upland, Kuching, Sarawak 93300, Malaysia",
        checkInDT: "18th Oct, 3.00pm (15:00)",
        checkOutDT: "20th Oct, 12.00pm (12:00)",
        wazeUrl:
          "https://ul.waze.com/ul?place=ChIJO_gWO6Cn-zER_5LaN8osNeo&ll=1.53654300%2C110.35556220&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
        googleMapUrl: "https://maps.app.goo.gl/iDBUuSZcbDTz4nrh8",
        detailUrl: "https://www.airbnb.com/l/wvhjjPIk?s=67&unique_share_id=28ee305a-648d-4ce8-903f-120c96b5fe74",
        allowableRoles: [roleMapping.colleagues, roleMapping.admin],
      },
    ],
  },
  {
    date: "24Oct",
    homestays: [
      {
        locationName: "Casa Anderson Ipoh",
        location: "A-06-03, Anderson Condominium Ipoh, 30300 Ipoh, Malaysia",
        checkInDT: "24th Oct, 3.00pm (15:00)",
        checkOutDT: "26th Oct, 12.00pm (12:00)",
        wazeUrl:
          "https://ul.waze.com/ul?place=ChIJF9QnJQDtyjERVpnkdaWOdYc&ll=4.60894060%2C101.09119240&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
        googleMapUrl: "https://maps.app.goo.gl/fP3dC8YKf8T9oKZLA",
        detailUrl:
          "https://secure.booking.com/confirmation.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaKEBiAEBmAEzuAEHyAEM2AED6AEB-AEBiAIBqAIBuAKF_pPHBsACAdICJGQ3YjdlNzY4LWVjZjItNDdiYy1hZGRiLWI3NWZiMDIzZDEwZdgCAeACAQ&auth_key=iGPIVa3esYHxSHE5&source=mytrips",
        allowableRoles: [roleMapping.brother, roleMapping.admin],
      },
      {
        locationName: "Ipoh Cozy Stay Near Town & Park",
        location: "C-14-02, Anderson Condominium Ipoh, 30300 Ipoh, Malaysia",
        checkInDT: "24th Oct, 3.00pm (15:00)",
        checkOutDT: "26th Oct, 11.30pm (11:30)",
        wazeUrl:
          "https://ul.waze.com/ul?place=ChIJF9QnJQDtyjERVpnkdaWOdYc&ll=4.60894060%2C101.09119240&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
        googleMapUrl: "https://maps.app.goo.gl/fP3dC8YKf8T9oKZLA",
        detailUrl:
          "https://secure.booking.com/confirmation.en-us.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaKEBiAEBmAEzuAEHyAEM2AED6AEB-AEBiAIBqAIBuAKF_pPHBsACAdICJGQ3YjdlNzY4LWVjZjItNDdiYy1hZGRiLWI3NWZiMDIzZDEwZdgCAeACAQ&auth_key=p5JR6v8PHfAhNW7Q&source=mytrips",
        allowableRoles: [roleMapping.sister, roleMapping.admin],
      },
    ],
  },
];
