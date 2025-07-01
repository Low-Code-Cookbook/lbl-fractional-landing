
-- Create a function to notify when expert status changes to active
CREATE OR REPLACE FUNCTION notify_expert_status_change()
RETURNS TRIGGER AS $$
BEGIN
  -- Only trigger when status changes to 'active'
  IF NEW.status = 'active' AND (OLD.status IS NULL OR OLD.status != 'active') THEN
    -- Call the edge function to send the email
    PERFORM net.http_post(
      url := 'https://edqjskmaorvfxluojsth.supabase.co/functions/v1/send-expert-activation',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkcWpza21hb3J2ZnhsdW9qc3RoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODk5NjMxOSwiZXhwIjoyMDY0NTcyMzE5fQ.VmEUo2VGfKYQh2SWXlJZCHNQ3KftqUiUxpRSCMnN4sI"}'::jsonb,
      body := json_build_object(
        'firstName', NEW.first_name,
        'lastName', NEW.last_name,
        'email', NEW.email
      )::text
    );
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
DROP TRIGGER IF EXISTS expert_status_change_trigger ON public.expert_applications;
CREATE TRIGGER expert_status_change_trigger
  AFTER UPDATE ON public.expert_applications
  FOR EACH ROW
  EXECUTE FUNCTION notify_expert_status_change();

-- Enable the pg_net extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_net;
