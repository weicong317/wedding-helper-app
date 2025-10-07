import { BookAlert, Map, MapPin } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/contexts/I18n/useI18n";

type Props = {
  locationName?: string;
  location: string;
  checkInDT: string;
  checkOutDT: string;
  wazeUrl: string;
  googleMapUrl: string;
  detailUrl: string;
};

const StayCard = ({ locationName, location, checkInDT, checkOutDT, wazeUrl, googleMapUrl, detailUrl }: Props) => {
  const { t } = useI18n();

  return (
    <Card className="gap-6 text-start">
      <CardHeader>
        <CardTitle className="text-2xl underline">Homestay</CardTitle>
      </CardHeader>
      <CardHeader>
        <CardTitle>{locationName}</CardTitle>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div>Check in: {checkInDT}</div>
          <div>Check out: {checkOutDT}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div>{t("navigation")}:</div>
          <a href={wazeUrl} target="_blank" className="underline text-blue-500 flex gap-2">
            <Map />
            Waze
          </a>
          <a href={googleMapUrl} target="_blank" className="underline text-blue-500 flex gap-2">
            <MapPin />
            Google Map
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <div>{t("detail")}:</div>
          <a href={detailUrl} target="_blank" className="underline text-blue-500 flex gap-2">
            <BookAlert />
            Homestay
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default StayCard;
