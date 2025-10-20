import type { EventDates, Events } from "./eventsEntities";
import { roleMapping } from "./roles";

export const eventDates: EventDates[] = [
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
export const allEvents: Events[] = [
  {
    date: "18Oct",
    events: [
      {
        title: ["dinner"],
        locationName: "topspot",
        location: "off, Jln Padungan, 93100 Kuching, Sarawak (Topspot Food Court/Bangunan UTC Kuching)",
        start: "7.00pm (19:00)",
        wazeUrl:
          "https://www.waze.com/en/live-map/directions/topspot-food-court-jalan-bukit-mata-kuching?place=w.72351760.723189916.5017904",
        googleMapUrl: "https://maps.app.goo.gl/DANtZqBr1VJGRXmi8",
        allowableRoles: [roleMapping.colleagues, roleMapping.relativesKuchingIpoh, roleMapping.admin],
      },
    ],
  },
  {
    date: "19Oct",
    events: [
      {
        title: ["breakfast", "lunch"],
        locationName: "brideHome",
        location: "17, Jalan Kampung Sungai Apong Baru, Sungai Apong, 93450 Kuching, Sarawak",
        start: "9.00am (09:00)",
        wazeUrl:
          "https://www.waze.com/en/live-map/directions/my/sarawak/kuching/17,-jalan-kampung-sungai-apong-baru?place=ChIJi56q-FGm-zERolBSN3RXthA",
        googleMapUrl: "https://maps.app.goo.gl/T1iKbrnPYq1SojEk8",
        allowableRoles: [roleMapping.colleagues, roleMapping.relativesKuchingIpoh, roleMapping.admin],
      },
      {
        title: ["weddingDinner"],
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
        title: ["weddingPreEvent"],
        location: "2, Selasar Bendahara, Taman Bendahara, 31650 Ipoh, Perak (Ipoh MJ Boutique House)",
        start: "7.00pm (19:00)",
        wazeUrl:
          "https://www.waze.com/en/live-map/directions/my/perak/ipoh/2,-selasar-bendahara?place=ChIJncYM7nPsyjERfxDyfRF5co4",
        googleMapUrl: "https://maps.app.goo.gl/GXHrNxdTFV1eZe6WA",
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
        title: ["wedding"],
        locationName: "brideHome",
        location: "2, Selasar Bendahara, Taman Bendahara, 31650 Ipoh, Perak (Ipoh MJ Boutique House)",
        start: "9.00am (09:00)",
        wazeUrl:
          "https://www.waze.com/en/live-map/directions/my/perak/ipoh/2,-selasar-bendahara?place=ChIJncYM7nPsyjERfxDyfRF5co4",
        googleMapUrl: "https://maps.app.goo.gl/GXHrNxdTFV1eZe6WA",
        allowableRoles: [
          roleMapping.relativesIpoh,
          roleMapping.relativesKuchingIpoh,
          roleMapping.admin,
          roleMapping.brother,
          roleMapping.sister,
        ],
      },
      {
        title: ["weddingTraditionalCeremony", "lunch"],
        locationName: "groomHome",
        location: "14, Lintasan Kledang Timur 4, Bandar Baru, Menglembu, 31450 Ipoh, Perak",
        start: "11.00am (11:00)",
        wazeUrl:
          "https://www.waze.com/en/live-map/directions/my/perak/ipoh/14,-lintasan-kledang-timur-8?place=ChIJAfbbxMHryjERZLc-JyKjmcU",
        googleMapUrl: "https://maps.app.goo.gl/9hjL8D1dE2T88KneA",
        allowableRoles: [
          roleMapping.relativesIpoh,
          roleMapping.relativesKuchingIpoh,
          roleMapping.admin,
          roleMapping.brother,
          roleMapping.sister,
        ],
      },
      {
        title: ["weddingDinner"],
        locationName: "yukSouHin",
        location: "292, Jalan Sultan Idris Shah, 30000 Ipoh, Perak (Weil Hotel)",
        start: "7.00pm (19:00)",
        entry: "6.30pm (18:30)",
        wazeUrl:
          "https://www.waze.com/en/live-map/directions/weil-hotel-jalan-sultan-idris-shah-292-ipoh?place=w.66256942.662503883.3803410",
        googleMapUrl: "https://maps.app.goo.gl/nBeShXkuJc1VUoYZA",
        allowableRoles: [
          roleMapping.relativesIpoh,
          roleMapping.relativesKuchingIpoh,
          roleMapping.admin,
          roleMapping.brother,
          roleMapping.sister,
          roleMapping.onlyWeddingDinner,
        ],
      },
    ],
  },
];
