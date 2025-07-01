
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ExpertActivationRequest {
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
    const { firstName, lastName, email }: ExpertActivationRequest = await req.json();

    console.log(`Sending activation email to ${email} for ${firstName} ${lastName}`);

    const emailResponse = await resend.emails.send({
      from: "Launch by Lunch <welcome@launchbylunch.co>",
      to: [email],
      bcc: ["welcome@launchbylunch.co"],
      subject: "Welcome to the Inner Circle - You're Accepted!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #7c3aed; margin-bottom: 20px;">Congratulations! You're In! 🎉</h1>
          
          <p>Hi ${firstName},</p>
          
          <p>Fantastic news! Your application to join the Inner Circle has been <strong>approved</strong>.</p>
          
          <p>Welcome to our exclusive community of exceptional fractional professionals. You're now part of a select group that represents the top tier of expertise in the fractional economy.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #7c3aed; margin-top: 0;">What happens next?</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Complete your profile setup in our member portal</li>
              <li>Join our private Slack community</li>
              <li>Access exclusive resources and templates</li>
              <li>Connect with other Inner Circle members</li>
              <li>Start receiving qualified client referrals</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://launchbylunch.co/setup" 
               style="background-color: #7c3aed; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
              Complete Your Setup
            </a>
          </div>
          
          <p>We're excited to have you as part of the Inner Circle and look forward to supporting your success as a fractional professional.</p>
          
          <p>If you have any questions during the setup process, don't hesitate to reach out to our team.</p>
          
          <p>Welcome aboard!</p>
          
          <p>Best regards,<br>
          <strong>The Launch by Lunch Team</strong></p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="font-size: 12px; color: #6b7280;">
            This email was sent because your Inner Circle application has been approved. 
            If you believe this was sent in error, please contact us immediately.
          </p>
        </div>
      `,
    });

    console.log("Activation email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-expert-activation function:", error);
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
