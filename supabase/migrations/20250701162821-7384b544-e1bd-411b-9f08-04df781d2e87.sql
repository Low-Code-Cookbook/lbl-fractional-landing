
-- Add status field to expert_applications table
ALTER TABLE public.expert_applications 
ADD COLUMN status TEXT NOT NULL DEFAULT 'new' 
CHECK (status IN ('new', 'on_hold', 'active'));
