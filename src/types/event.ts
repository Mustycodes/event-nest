export interface EventSession {
  id: string;
  name: string;
  presenter: string;
  duration: string;
  level: string;
  abstract: string;
}
export interface Event {
  id: string;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  category: string;
  organizer: string;
  isFeatured: boolean;
  location?: {
    address: string;
    city: string;
    country: string;
  };
  onlineUrl?: string;
  sessions: EventSession[];
}