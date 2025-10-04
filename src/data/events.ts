import { roleMapping } from "./roles";

export const eventDates = [
  { date: "18Oct", allowableRoles: [roleMapping.colleagues, roleMapping.relativesKuchingIpoh, roleMapping.admin] },
  { date: "19Oct", allowableRoles: [roleMapping.colleagues, roleMapping.relativesKuchingIpoh, roleMapping.admin] },
  {
    date: "24Oct",
    allowableRoles: [
      roleMapping.relativesIpoh,
      roleMapping.relativesKuchingIpoh,
      roleMapping.admin,
      roleMapping.brother,
      roleMapping.sister,
      roleMapping.noWeddingDinner,
    ],
  },
  {
    date: "25Oct",
    allowableRoles: [
      roleMapping.relativesIpoh,
      roleMapping.relativesKuchingIpoh,
      roleMapping.admin,
      roleMapping.brother,
      roleMapping.sister,
    ],
  },
];
export const allEvents = [
  {
    date: "18Oct",
    events: [
      {
        title: "dinner",
        locationName: "topspot",
        location: "off, Jln Padungan, 93100 Kuching, Sarawak (Topspot Food Court/Bangunan UTC Kuching)",
        start: "7.00pm (19:00)",
        wazeUrl: "https://waze.com/ul/hw2q2z5k40",
        googleMapUrl: "https://maps.app.goo.gl/Gm9ygoPBfWPEfLNy6",
        allowableRoles: [roleMapping.colleagues, roleMapping.relativesKuchingIpoh, roleMapping.admin],
      },
    ],
  },
  {
    date: "19Oct",
    events: [
      {
        title: "weddingTraditionalCeremony",
        locationName: "brideHome",
        location: "17, Jalan Kampung Sungai Apong Baru, Sungai Apong, 93450 Kuching, Sarawak",
        start: "8.00am (08:00)",
        wazeUrl:
          "https://ul.waze.com/ul?place=ChIJi56q-FGm-zERolBSN3RXthA&ll=1.54353770%2C110.38452510&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
        googleMapUrl: "https://maps.app.goo.gl/LBcDxZgfiRYnSnfU9",
        allowableRoles: [roleMapping.colleagues, roleMapping.relativesKuchingIpoh, roleMapping.admin],
      },
      {
        title: "weddingDinner",
        locationName: "shangrila",
        location: "Rooftop City One Megamall, 93350 Kuching, Sarawak (Seafood Shangri-la City One)",
        start: "7.00pm (19:00)",
        entry: "6.30pm (18:30)",
        wazeUrl: "https://maps.app.goo.gl/6Hu5zkfvgVdKB8yy8",
        googleMapUrl: "https://maps.app.goo.gl/6Hu5zkfvgVdKB8yy8",
        allowableRoles: [roleMapping.colleagues, roleMapping.relativesKuchingIpoh, roleMapping.admin],
      },
    ],
  },
  {
    date: "24Oct",
    events: [
      {
        title: "weddingPreEvent",
        locationName: "brideHome",
        location: "2, Selasar Bendahara, TAMAN BENDAHARA, 31650 Ipoh, Perak (Ipoh MJ Boutique House)",
        start: "7.00pm (19:00)",
        wazeUrl: "https://waze.com/ul/hw2q2z5k40",
        googleMapUrl: "https://maps.app.goo.gl/Gm9ygoPBfWPEfLNy6",
        allowableRoles: [
          roleMapping.relativesIpoh,
          roleMapping.relativesKuchingIpoh,
          roleMapping.admin,
          roleMapping.brother,
          roleMapping.sister,
          roleMapping.noWeddingDinner,
        ],
      },
    ],
  },
  {
    date: "25Oct",
    events: [
      {
        title: "wedding",
        locationName: "brideHome",
        location: "2, Selasar Bendahara, Taman Bendahara, 31650 Ipoh, Perak (Ipoh MJ Boutique House)",
        start: "8.00am (08:00)",
        wazeUrl: "https://waze.com/ul/hw2q2z5k40",
        googleMapUrl: "https://maps.app.goo.gl/Gm9ygoPBfWPEfLNy6",
        allowableRoles: [
          roleMapping.relativesIpoh,
          roleMapping.relativesKuchingIpoh,
          roleMapping.admin,
          roleMapping.brother,
          roleMapping.sister,
        ],
      },
      {
        title: "weddingTraditionalCeremony",
        locationName: "groomHome",
        location: "14, Lintasan Kledang Timur 4, Bandar Baru, Menglembu, 31450 Ipoh, Perak",
        start: "11.00am (11:00)",
        wazeUrl: "https://waze.com/ul/hw2q2z5k40",
        googleMapUrl: "https://maps.app.goo.gl/Gm9ygoPBfWPEfLNy6",
        allowableRoles: [
          roleMapping.relativesIpoh,
          roleMapping.relativesKuchingIpoh,
          roleMapping.admin,
          roleMapping.brother,
          roleMapping.sister,
        ],
      },
      {
        title: "weddingDinner",
        locationName: "yukSouHin",
        location: "292, Jalan Sultan Idris Shah, 30000 Ipoh, Perak (Weil Hotel)",
        start: "7.00pm (19:00)",
        entry: "6.30pm (18:30)",
        wazeUrl: "https://waze.com/ul/hw2q2z5k40",
        googleMapUrl: "https://maps.app.goo.gl/Gm9ygoPBfWPEfLNy6",
        allowableRoles: [
          roleMapping.relativesIpoh,
          roleMapping.relativesKuchingIpoh,
          roleMapping.admin,
          roleMapping.brother,
          roleMapping.sister,
        ],
      },
    ],
  },
];
