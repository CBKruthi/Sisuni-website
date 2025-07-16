import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
const baseURL = import.meta.env.VITE_API_BASE_URL;

import { 
  X,
  TrendingUp,
  Search,
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Send, 
  Upload,
  Briefcase,
  CheckCircle,
  Star,
  Award,
  Heart,
  Coffee,
  Zap
} from "lucide-react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface JobPosition {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary: string;
  experience: string;
  benefits: string[];
  isActive: boolean;
  createdAt: string;
}

const Career = () => {
  const { toast } = useToast();
  const [jobs, setJobs] = useState<JobPosition[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    experience: "",
    skills: "",
    coverLetter: "",
    preferredRole: "",
    availability: "",
    expectedSalary: ""
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/jobs/public`);
      if (response.data.success) {
        setJobs(response.data.jobs);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast({
        title: "Error",
        description: "Failed to fetch job positions",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });
    
    if (resumeFile) {
      submitData.append('resume', resumeFile);
    }

    try {
      const response = await axios.post(
        `${baseURL}/api/applications/general`,
        submitData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.success) {
        toast({
          title: "Application Submitted!",
          description: "Thank you for your interest. We'll review your application and get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          linkedIn: "",
          portfolio: "",
          experience: "",
          skills: "",
          coverLetter: "",
          preferredRole: "",
          availability: "",
          expectedSalary: ""
        });
        setResumeFile(null);
        setIsDialogOpen(false);
      }
    } catch (error: any) {
      console.error("Error submitting application:", error);
      toast({
        title: "Submission Failed",
        description: error.response?.data?.message || "Please try again later",
        variant: "destructive",
      });
    }
  };

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible PTO and remote work options"
    },
    {
      icon: Award,
      title: "Growth & Learning",
      description: "Professional development budget and training"
    },
    {
      icon: Zap,
      title: "Modern Tools",
      description: "Latest equipment and cutting-edge technology"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-purple-600">Loading career opportunities...</p>
          </div>
        </div>
      </div>
    );
  }




// shnliusenlvkrsdnb

<div className="max-w-7xl mx-auto px-4 py-20">
  <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Open Positions</h2>

  {jobs.length === 0 ? (
    <p className="text-center text-purple-600">Currently no open positions. Please check back later.</p>
  ) : (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <Card key={job._id} className="border border-purple-200 shadow-sm">
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
            <CardDescription className="text-sm text-gray-500">
              {job.department} · {job.location} · {job.type}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-700">
            <p><strong>Experience:</strong> {job.experience}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p className="text-gray-600">{job.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )}
</div>







  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Join Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build the future of technology with us. We're looking for passionate individuals 
              who want to make a difference in the world of innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" size="lg">
                    <Send className="h-5 w-5 mr-2" />
                    Apply Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Submit Your Application</DialogTitle>
                    <DialogDescription>
                      Fill out the form below to apply for a position at Sisuni Tech
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-purple-200 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-purple-200 focus:border-purple-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="border-purple-200 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredRole">Preferred Role *</Label>
                        <Select value={formData.preferredRole} onValueChange={(value) => setFormData(prev => ({ ...prev, preferredRole: value }))}>
                          <SelectTrigger className="border-purple-200 focus:border-purple-500">
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                          <SelectContent>
                            {jobs.map((job) => (
                              <SelectItem key={job._id} value={job.title}>
                                {job.title}
                              </SelectItem>
                            ))}
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                        <Input
                          id="linkedIn"
                          name="linkedIn"
                          value={formData.linkedIn}
                          onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="border-purple-200 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="portfolio">Portfolio/Website</Label>
                        <Input
                          id="portfolio"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          placeholder="https://yourportfolio.com"
                          className="border-purple-200 focus:border-purple-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="experience">Years of Experience *</Label>
                        <Select value={formData.experience} onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                          <SelectTrigger className="border-purple-200 focus:border-purple-500">
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="availability">Availability *</Label>
                        <Select value={formData.availability} onValueChange={(value) => setFormData(prev => ({ ...prev, availability: value }))}>
                          <SelectTrigger className="border-purple-200 focus:border-purple-500">
                            <SelectValue placeholder="Select availability" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate</SelectItem>
                            <SelectItem value="2-weeks">2 weeks notice</SelectItem>
                            <SelectItem value="1-month">1 month notice</SelectItem>
                            <SelectItem value="2-months">2+ months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="expectedSalary">Expected Salary</Label>
                      <Input
                        id="expectedSalary"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleInputChange}
                        placeholder="e.g., $80,000 - $100,000"
                        className="border-purple-200 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="skills">Key Skills *</Label>
                      <Textarea
                        id="skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        placeholder="List your key technical skills, programming languages, frameworks, etc."
                        required
                        className="border-purple-200 focus:border-purple-500"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="coverLetter">Cover Letter *</Label>
                      <Textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                        required
                        className="border-purple-200 focus:border-purple-500"
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="resume">Resume (PDF, DOC) *</Label>
                      <Input
                        id="resume"
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="border-purple-200 focus:border-purple-500"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      size="lg"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Submit Application
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              {/* <Button variant="outline" size="lg"  className="border-purple-200 text-purple-600 hover:bg-purple-50">
                View Open Positions
              </Button> */}
            </div>
          </div>
        </div>
      </section>









<section id="positions" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-14">
      <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6 shadow-sm">
        <TrendingUp className="w-4 h-4 mr-2" />
        We're Hiring
      </div>
      <h2 className="text-4xl font-extrabold text-purple-800 mb-3">Open Positions</h2>
      <p className="text-lg text-gray-600">
        Find the perfect role that matches your skills and passion
      </p>
    </div>

    {jobs.length === 0 ? (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Search className="w-8 h-8 text-purple-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">No positions available</h3>
        <p className="text-gray-500 max-w-md mx-auto">Please check back later for new opportunities.</p>
      </div>
    ) : (
      <div className="space-y-10">
        {jobs.filter(job => job.isActive).map(job => (
          <div
            key={job._id}
            className="w-full bg-white/90 backdrop-blur-md border border-purple-100 p-8 rounded-3xl shadow-md hover:shadow-[0_0_40px_rgba(168,85,247,0.2),0_0_60px_rgba(59,130,246,0.15)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {job.department} &middot; {job.location}
                </p>
                <p className="text-sm text-gray-700 mb-4">{job.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-purple-500" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-blue-500" />
                    {job.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-purple-400" />
                    {job.salary}
                  </span>
                </div>
                <span className="text-xs text-gray-400">
                  Posted: {new Date(job.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="flex-shrink-0 mt-4 md:mt-0">
                <button
                  onClick={() => setSelectedJob(selectedJob?._id === job._id ? null : job)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition hover:scale-[1.03]"
                >
                  {selectedJob?._id === job._id ? "Hide Details" : "View Details"}
                </button>
              </div>
            </div>

            {selectedJob?._id === job._id && (
  <div className="mt-8 relative bg-white border border-purple-200 rounded-2xl p-6 shadow-inner text-sm text-gray-700">
    {/* ❌ Close Button */}
    <button
      onClick={() => setSelectedJob(null)}
      className="absolute top-4 right-4 text-purple-500 hover:text-red-500 transition-colors"
      aria-label="Close details"
    >
      <X className="w-5 h-5" />
    </button>

    {/* Placeholder for job details */}
    <div className="space-y-6 text-left">
  {job.requirements && (
    <div>
      <h4 className="text-purple-700 font-semibold mb-2">Requirements</h4>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {job.requirements.map((item, idx) => (
          <li key={`req-${idx}`}>{item}</li>
        ))}
      </ul>
    </div>
  )}

  {job.responsibilities && (
    <div>
      <h4 className="text-blue-700 font-semibold mb-2">Responsibilities</h4>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {job.responsibilities.map((item, idx) => (
          <li key={`resp-${idx}`}>{item}</li>
        ))}
      </ul>
    </div>
  )}

  {job.benefits && (
    <div>
      <h4 className="text-green-700 font-semibold mb-2">Benefits</h4>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {job.benefits.map((item, idx) => (
          <li key={`ben-${idx}`}>{item}</li>
        ))}
      </ul>
    </div>
  )}
</div>

  </div>
)}

          </div>
        ))}
      </div>
    )}
  </div>
</section>










      {/* Why Join Us */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Sisuni Tech?</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        We offer more than just a job – we provide a platform for growth, innovation, and impact
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.map((benefit) => (
        <Card
          key={benefit.title}
          className="text-center border-purple-100 transform transition-all duration-300 ease-in-out
                     hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:scale-[1.03]"
        >
          <CardHeader>
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 
                flex items-center justify-center transform transition-transform duration-300 hover:rotate-45">
  <benefit.icon className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-purple-800 animate-bounce-slow">{benefit.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{benefit.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>




      {/* CTA Section */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div
      className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-[0.98]"
    >
      <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
      <p className="text-xl mb-8 opacity-90">
        We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
      </p>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            size="lg"
            className="transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            onClick={() => setFormData(prev => ({ ...prev, preferredRole: "General Application" }))}
          >
            Submit General Application
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  </div>
</section>
    </div>
  );
};

export default Career;