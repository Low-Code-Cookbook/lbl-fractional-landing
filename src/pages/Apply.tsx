import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  website: z.string().url("Please enter a valid website URL").optional().or(z.literal("")),
  fractionalExperience: z.string().min(50, "Please provide at least 50 characters describing your experience"),
  hasNewsletter: z.enum(["yes", "no"], {
    required_error: "Please select whether you have a newsletter",
  }),
  linkedIn: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
  professionalBrand: z.string().min(50, "Please provide at least 50 characters about your professional brand"),
  marketingTime: z.string().min(1, "Please specify the percentage of time spent on marketing"),
  successDefinition: z.enum(["remain-fractional", "find-fulltime", "find-cofounder", "other"], {
    required_error: "Please select what success means to you",
  }),
  successOther: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Apply = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      website: "",
      fractionalExperience: "",
      hasNewsletter: "no",
      linkedIn: "",
      professionalBrand: "",
      marketingTime: "",
      successDefinition: undefined,
      successOther: "",
    },
  });

  const watchSuccessDefinition = form.watch("successDefinition");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Insert the application data into Supabase
      const { error } = await supabase
        .from('expert_applications')
        .insert([
          {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            website: data.website || null,
            fractional_experience: data.fractionalExperience,
            has_newsletter: data.hasNewsletter,
            linkedin: data.linkedIn || null,
            professional_brand: data.professionalBrand,
            marketing_time: data.marketingTime,
            success_definition: data.successDefinition,
            success_other: data.successOther || null,
          }
        ]);

      if (error) {
        console.error('Error submitting application:', error);
        toast({
          title: "Error",
          description: "There was a problem submitting your application. Please try again.",
          variant: "destructive",
        });
      } else {
        console.log("Application submitted successfully:", data);
        toast({
          title: "Application Submitted!",
          description: "Thank you for your application. We'll review it and get back to you soon.",
        });
        form.reset();
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Apply to Join Inner Circle
          </h1>
          <p className="text-xl text-gray-600">
            We're looking for exceptional fractional professionals to join our exclusive community.
          </p>
        </div>

        {/* Application Form */}
        <Card>
          <CardHeader>
            <CardTitle>Membership Application</CardTitle>
            <CardDescription>
              Please fill out all fields below. We review each application carefully.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://yourwebsite.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Professional Experience */}
                <FormField
                  control={form.control}
                  name="fractionalExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fractional/Expert Experience</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your fractional or expert experience. What services do you provide? What industries do you work in? What makes you unique?"
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hasNewsletter"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Do you have a newsletter?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="newsletter-yes" />
                            <Label htmlFor="newsletter-yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="newsletter-no" />
                            <Label htmlFor="newsletter-no">No</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="linkedIn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="professionalBrand"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Professional Brand</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How do you think about or value your professional brand? What does it represent and how do you cultivate it?"
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="marketingTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Marketing Time Investment</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., 20% or 10 hours per week"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Success Definition */}
                <FormField
                  control={form.control}
                  name="successDefinition"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>What does success look like for you?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="remain-fractional" id="success-fractional" />
                            <Label htmlFor="success-fractional">Remain fractional and grow my practice</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="find-fulltime" id="success-fulltime" />
                            <Label htmlFor="success-fulltime">Find a full-time position</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="find-cofounder" id="success-cofounder" />
                            <Label htmlFor="success-cofounder">Find a new co-founder to team with</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="success-other" />
                            <Label htmlFor="success-other">Other</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {watchSuccessDefinition === "other" && (
                  <FormField
                    control={form.control}
                    name="successOther"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Please specify what success means to you</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your definition of success..."
                            className="min-h-[80px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Apply;
