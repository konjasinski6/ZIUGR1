export interface Reservation {
  id?: string;
  guest_name: string;
  email: string;
  phone: string;
  party_size: number;
  reservation_date: string;
  reservation_time: string;
  special_requests?: string;
  created_at?: string;
}
