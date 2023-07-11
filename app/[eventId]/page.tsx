import EventDetails from "@components/EventDetails";
import { eventDetailsPageProp } from "@lib/shared/types";

const EventDetailsPage = ({ params }: eventDetailsPageProp) => {
  const { eventId } = params;

  return <EventDetails eventId={eventId} />;
};

export default EventDetailsPage;
