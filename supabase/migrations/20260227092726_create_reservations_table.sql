/*
  # Create reservations table

  1. New Tables
    - `reservations`
      - `id` (uuid, primary key) - Unique identifier for each reservation
      - `guest_name` (text) - Name of the person making the reservation
      - `email` (text) - Contact email address
      - `phone` (text) - Contact phone number
      - `party_size` (integer) - Number of guests
      - `reservation_date` (date) - Date of the reservation
      - `reservation_time` (time) - Time of the reservation
      - `special_requests` (text, optional) - Any special requests or notes
      - `created_at` (timestamptz) - When the reservation was created
  
  2. Security
    - Enable RLS on `reservations` table
    - Add policy for anyone to create reservations (public access)
    - Add policy for authenticated users to view all reservations
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  guest_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  party_size integer NOT NULL CHECK (party_size > 0 AND party_size <= 20),
  reservation_date date NOT NULL,
  reservation_time time NOT NULL,
  special_requests text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create reservations"
  ON reservations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view reservations"
  ON reservations
  FOR SELECT
  TO authenticated
  USING (true);