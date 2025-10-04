import type { ReactElement } from "react";

import { Map, MapPin } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/contexts/I18n/useI18n";

type Props = {
  title: string;
  locationName: string;
  location: string;
  timeElement: ReactElement;
  wazeUrl: string;
  googleMapUrl: string;
};

const EventCard = ({ title, locationName, location, timeElement, wazeUrl, googleMapUrl }: Props) => {
  const { t } = useI18n();

  return (
    <Card className="gap-6 text-start">
      <CardHeader>
        <CardTitle className="text-2xl underline">{title}</CardTitle>
      </CardHeader>
      <CardHeader>
        <CardTitle>{locationName}</CardTitle>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {timeElement && (
          <div className="flex flex-col gap-2">
            <div>{t("time")}:</div>
            {timeElement}
          </div>
        )}
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
      </CardContent>
    </Card>
  );
};

export default EventCard;
