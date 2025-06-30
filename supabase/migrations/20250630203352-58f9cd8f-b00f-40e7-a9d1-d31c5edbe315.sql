
-- Create table for expert applications
CREATE TABLE public.expert_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  website TEXT,
  fractional_experience TEXT NOT NULL,
  has_newsletter TEXT NOT NULL CHECK (has_newsletter IN ('yes', 'no')),
  linkedin TEXT,
  professional_brand TEXT NOT NULL,
  marketing_time TEXT NOT NULL,
  success_definition TEXT NOT NULL CHECK (success_definition IN ('remain-fractional', 'find-fulltime', 'find-cofounder', 'other')),
  success_other TEXT
);

-- Add Row Level Security (RLS) - making it publicly accessible for form submissions
ALTER TABLE public.expert_applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert applications (public form)
CREATE POLICY "Anyone can submit expert applications" 
  ON public.expert_applications 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to prevent public reading of applications (admin only access)
CREATE POLICY "No public read access to expert applications" 
  ON public.expert_applications 
  FOR SELECT 
  USING (false);
