
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ExpertApplicationRequest {
  firstName: string;
  lastName: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email }: ExpertApplicationRequest = await req.json();

    console.log(`Sending confirmation email to ${email} for ${firstName} ${lastName}`);

    const emailResponse = await resend.emails.send({
      from: "Launch by Lunch <welcome@launchbyLunch.co>",
      to: [email],
      bcc: ["welcome@launchbyLunch.co"],
      subject: "We received your Inner Circle application!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #7c3aed; margin-bottom: 20px;">Thank you for your application!</h1>
          
          <p>Hi ${firstName},</p>
          
          <p>We've received your application to join the Inner Circle and we're excited to review it!</p>
          
          <p>Here's what happens next:</p>
          <ul>
            <li>Our team will carefully review your application</li>
            <li>We'll get back to you within 5-7 business days</li>
            <li>If selected, we'll send you next steps for joining our exclusive community</li>
          </ul>
          
          <p>Thank you for your interest in joining our community of exceptional fractional professionals.</p>
          
          <p>Best regards,<br>
          <strong>The Launch by Lunch Team</strong></p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="font-size: 12px; color: #6b7280;">
            This email was sent because you submitted an application to join Inner Circle at Launch by Lunch.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-expert-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
