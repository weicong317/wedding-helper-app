import EventCard from "@/components/EventCard";
import ImagePopup from "@/components/ImagePopUp";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useI18n } from "@/contexts/I18n/useI18n";
import { useRole } from "@/contexts/Role/useRole";
import { allEvents, eventDates } from "@/data/events";

const App = () => {
  const { t } = useI18n();
  const { value } = useRole();

  const today = new Date();
  const dayOfMonth = today.getDate();
  const allowableDates = eventDates
    .filter((eventDate) => eventDate.allowableRoles.includes(value))
    .filter((eventDate) => {
      const eventDay = parseInt(eventDate.date, 10);
      return eventDay >= dayOfMonth;
    });

  return (
    <>
      <LanguageSwitcher />
      {!value && <div className="text-center text-5xl">{t("noPermission")}</div>}
      {value && (
        <>
          {!!allowableDates.length && (
            <>
              <ImagePopup />
              <div className="flex items-center flex-col gap-8 text-center px-4 pt-0 pb-6">
                <div className="text-4xl">{t("welcome")}</div>
                <div className="text-2xl">{t("description")}</div>
                <Tabs defaultValue={allowableDates[0].date} className="w-full items-center">
                  <TabsList className="gap-1">
                    {allowableDates.map((eventDate) => (
                      <TabsTrigger key={`${eventDate.date}-trigger`} value={eventDate.date}>
                        {t(eventDate.date)}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {allowableDates.map((eventDate) => (
                    <TabsContent key={`${eventDate.date}-content`} value={eventDate.date} className="w-full">
                      <Card className="gap-2">
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {allEvents
                            .filter((eventDay) => eventDay.date === eventDate.date)
                            .flatMap((eventDay) => eventDay.events)
                            .filter((event) => event.allowableRoles.includes(value))
                            .map((event) => {
                              return (
                                <EventCard
                                  title={event.title.map(t).join("/")}
                                  locationName={event.locationName ? t(event.locationName) : undefined}
                                  location={event.location}
                                  timeElement={
                                    <>
                                      <div>
                                        {t("start")}: {event.start}
                                      </div>
                                      {event.entry && (
                                        <div>
                                          {t("entry")}: {event.entry}
                                        </div>
                                      )}
                                    </>
                                  }
                                  wazeUrl={event.wazeUrl}
                                  googleMapUrl={event.googleMapUrl}
                                />
                              );
                            })}
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </>
          )}
          {!allowableDates.length && <div className="text-center text-5xl">{t("thankYou")}</div>}
        </>
      )}
    </>
  );
};

export default App;
