import { Event } from "@/types/event";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  event: Event
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <article className='max-w-md border border-gray-200 hover:shadow-md rounded-lg bg-white overflow-hidden'>
      <Link href={`/events/${event.id}`}>
        <Image src={event.imageUrl} width={800} height={800} alt={event.name} />
      </Link>
      <div className='mx-3 my-2'>
        <Link href={`/events/${event.id}`} className='hover:underline'>
          <h4 className='font-semibold text-lg'>{event.name}</h4>
        </Link>
        <p className='text-sm'>
          {event.date.toLocaleDateString()} • {event.time}
        </p>
        <div className='flex items-center justify-between'>
          <p className='text-sm text-gray-500'>{event.organizer}</p>
          <p className='font-semibold text-lg text-orange-500'>
            ${event.price}
          </p>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
