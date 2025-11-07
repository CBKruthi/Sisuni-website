import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ui/scroll-reveal";
import InteractiveCard from "@/components/ui/interactive-card";
import MagneticButton from "@/components/ui/magnetic-button";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("subject", formData.subject);
      form.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Failed to send",
          description: data.message || "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("Web3Forms error:", error);
      toast({
        title: "Error!",
        description: error?.message || "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-slate-900">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8">
                <MessageCircle className="w-4 h-4 mr-2" />
                Let's Connect
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 text-white">
                Get in <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your business with innovative technology solutions? 
                Let's discuss your project and bring your vision to life with cutting-edge innovation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <ScrollReveal direction="left">
              <div className="lg:col-span-1">
                <div className="space-y-10">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                      <Zap className="w-8 h-8 mr-3 text-purple-400" />
                      Contact Information
                    </h2>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                      We're here to help you succeed. Reach out through any of these channels 
                      and we'll respond as quickly as possible with personalized solutions.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <InteractiveCard className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30">
                      <div className="p-6 flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-white">Email Us</h3>
                          <p className="text-purple-400 font-medium">Contactus@sisunitech.com</p>
                          <p className="text-sm text-gray-400 mt-1">We'll respond within 24 hours</p>
                        </div>
                      </div>
                    </InteractiveCard>

                    <InteractiveCard className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30">
                      <div className="p-6 flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-white">Call Us</h3>
                          <p className="text-blue-400 font-medium">+91 9900086862</p>
                          <p className="text-blue-400 font-medium">+91 9900086863</p>
                          <p className="text-sm text-gray-400 mt-1">Mon-Fri 9AM-6PM IST</p>
                        </div>
                      </div>
                    </InteractiveCard>

                    <InteractiveCard className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/30">
                      <div className="p-6 flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-green-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-white">Visit Us</h3>
                          <p className="text-green-400 font-medium text-sm leading-relaxed">
                            No.45/b, Subham Complex, 1st A Main 2nd Floor,<br />
                            JP Nagar 3rd Phase, Bangalore, Karnataka 560078
                          </p>
                          <p className="text-sm text-gray-400 mt-2">Serving clients globally</p>
                        </div>
                      </div>
                    </InteractiveCard>

                    <InteractiveCard className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-500/30">
                      <div className="p-6 flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-white">Business Hours</h3>
                          <p className="text-yellow-400 font-medium">Monday - Friday</p>
                          <p className="text-sm text-gray-400 mt-1">9:00 AM - 6:00 PM IST</p>
                        </div>
                      </div>
                    </InteractiveCard>
                  </div>

                  <InteractiveCard className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-white/20 shadow-xl">
                    <div className="p-6">
                      <h3 className="font-semibold mb-3 text-white flex items-center">
                        <Mail className="w-5 h-5 mr-2 text-purple-400" />
                        Careers
                      </h3>
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                        Interested in joining our innovative team? Send your resume to:
                      </p>
                      <p className="text-purple-400 font-medium">careers@sisuni.tech</p>
                    </div>
                  </InteractiveCard>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right" delay={300}>
              <div className="lg:col-span-2">
                <InteractiveCard className="bg-white/5 backdrop-blur-sm border border-white/20 shadow-2xl">
                  <CardHeader className="pb-8">
                    <CardTitle className="text-3xl text-white flex items-center">
                      <Send className="w-8 h-8 mr-3 text-purple-400" />
                      Send us a Message
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-lg">
                      Fill out the form below and we'll get back to you as soon as possible with a personalized response.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-white font-medium">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                            className="mt-2 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:bg-white/10 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-white font-medium">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            required
                            className="mt-2 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:bg-white/10 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-white font-medium">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          required
                          className="mt-2 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:bg-white/10 transition-all duration-300"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-white font-medium">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project, requirements, or any questions you have..."
                          required
                          className="mt-2 min-h-[150px] bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:bg-white/10 transition-all duration-300 resize-none"
                        />
                      </div>

                      <MagneticButton 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-2xl"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </MagneticButton>
                    </form>
                  </CardContent>
                </InteractiveCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-32 bg-gradient-to-b from-transparent to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">What Can We Help You With?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the service that best fits your needs and let's create something amazing together
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Web Development", description: "Custom web applications and websites", gradient: "from-blue-500 to-cyan-500" },
              { title: "Cybersecurity", description: "Security audits and protection solutions", gradient: "from-red-500 to-pink-500" },
              { title: "IoT Solutions", description: "Smart automation and IoT projects", gradient: "from-green-500 to-emerald-500" },
              { title: "AI & ML", description: "Machine learning and AI solutions", gradient: "from-purple-500 to-indigo-500" }
            ].map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 150}>
                <InteractiveCard className="text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 cursor-pointer group">
                  <div className="p-8">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-xl group-hover:shadow-glow transition-all duration-300`}>
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </div>
                </InteractiveCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Quick answers to common questions about our services and processes
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex web applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! We offer comprehensive support packages including maintenance, security updates, and feature enhancements. Our support is available 24/7 for critical issues."
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Absolutely. We specialize in integrating with existing systems and can help modernize your current infrastructure while maintaining compatibility with your business processes."
              },
              {
                question: "What's included in your cybersecurity services?",
                answer: "Our cybersecurity services include security audits, penetration testing, firewall configuration, data encryption, compliance management, and ongoing monitoring to protect against threats."
              }
            ].map((faq, index) => (
              <ScrollReveal key={faq.question} delay={index * 100}>
                <InteractiveCard className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20">
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </InteractiveCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;