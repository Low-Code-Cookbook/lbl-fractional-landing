
-- Add the open_to_clients column to the expert_applications table
ALTER TABLE public.expert_applications 
ADD COLUMN open_to_clients text NOT NULL DEFAULT 'no';
