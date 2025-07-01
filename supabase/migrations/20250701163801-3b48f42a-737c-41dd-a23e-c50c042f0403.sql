
-- First, ensure pg_net extension is enabled
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Update the function to use the correct pg_net syntax
CREATE OR REPLACE FUNCTION notify_expert_status_change()
RETURNS TRIGGER AS $$
BEGIN
  -- Only trigger when status changes to 'active'
  IF NEW.status = 'active' AND (OLD.status IS NULL OR OLD.status != 'active') THEN
    -- Call the edge function to send the email using pg_net
    PERFORM net.http_post(
      url := 'https://edqjskmaorvfxluojsth.supabase.co/functions/v1/send-expert-activation',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkcWpza21hb3J2ZnhsdW9qc3RoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODk5NjMxOSwiZXhwIjoyMDY0NTcyMzE5fQ.VmEUo2VGfKYQh2SWXlJZCHNQ3KftqUiUxpRSCMnN4sI'
      ),
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
