import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const baseURL = import.meta.env.VITE_API_BASE_URL;

import { 
  Users, 
  FileText, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar,
  Briefcase,
  AlertCircle 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { auth } from "@/context/firebase";

interface Application {
  _id: string;
  name: string;
  email: string;
  phone: string;
  preferredRole: string;
  status: string;
  applicationDate: string;
  experience: string;
  skills: string;
  coverLetter: string;
  resumeFileName?: string;
}

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

const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [jobPositions, setJobPositions] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [editingJob, setEditingJob] = useState<JobPosition | null>(null);
  const [isJobDialogOpen, setIsJobDialogOpen] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    department: "",
    location: "",
    type: "full-time",
    description: "",
    requirements: [""],
    responsibilities: [""],
    salary: "",
    experience: "",
    benefits: [""],
    isActive: true
  });
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user?.email?.toLowerCase() === "contactus@sisunitech.com") {
      // Admin verified ✅
      fetchApplications();
      fetchJobPositions();
    } else {
      navigate("/login"); // ❌ Not admin or not logged in
    }
  });

  return () => unsubscribe(); // Cleanup
}, [navigate]);


  const fetchApplications = async () => {
    try {
      // Admin should fetch ALL applications without any email filter
      const response = await axios.get(`${baseURL}/api/applications/all`);
      
      if (response.data.success) {
        setApplications(response.data.applications);
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
      toast({
        title: "Error",
        description: "Failed to fetch applications",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchJobPositions = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/jobs`);
      if (response.data.success) {
        setJobPositions(response.data.jobs);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast({
        title: "Error",
        description: "Failed to fetch job positions",
        variant: "destructive",
      });
    }
  };

  const updateApplicationStatus = async (applicationId: string, newStatus: string) => {
    try {
      const response = await axios.put(
        `${baseURL}/api/applications/${applicationId}`,
        { status: newStatus }
      );

      if (response.data.success) {
        setApplications(prev => 
          prev.map(app => 
            app._id === applicationId ? { ...app, status: newStatus } : app
          )
        );
        toast({
          title: "Status Updated",
          description: `Application status changed to ${newStatus}`,
        });
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Error",
        description: "Failed to update application status",
        variant: "destructive",
      });
    }
  };

  const deleteApplication = async (applicationId: string) => {
    try {
      const response = await axios.delete(
        `${baseURL}/api/applications/${applicationId}`
      );

      if (response.data.success) {
        setApplications(prev => prev.filter(app => app._id !== applicationId));
        toast({
          title: "Application Deleted",
          description: "Application has been successfully deleted",
        });
      }
    } catch (error) {
      console.error("Error deleting application:", error);
      toast({
        title: "Error",
        description: "Failed to delete application",
        variant: "destructive",
      });
    }
  };

  const handleCreateJob = () => {
    const createJob = async () => {
      try {
        const userEmail = getAuth().currentUser?.email || "admin";
        const jobData = {
          ...newJob,
          requirements: newJob.requirements.filter(req => req.trim() !== ''),
          responsibilities: newJob.responsibilities.filter(resp => resp.trim() !== ''),
          benefits: newJob.benefits.filter(benefit => benefit.trim() !== ''),
          createdBy: userEmail
        };

        const response = await axios.post(`${baseURL}/api/jobs`, jobData);
        
        if (response.data.success) {
          setJobPositions(prev => [response.data.job, ...prev]);
          setNewJob({
            title: "",
            department: "",
            location: "",
            type: "full-time",
            description: "",
            requirements: [""],
            responsibilities: [""],
            salary: "",
            experience: "",
            benefits: [""],
            isActive: true
          });
          setIsJobDialogOpen(false);
          
          toast({
            title: "Job Created",
            description: "New job position has been created successfully",
          });
        }
      } catch (error) {
        console.error("Error creating job:", error);
        toast({
          title: "Error",
          description: "Failed to create job position",
          variant: "destructive",
        });
      }
    };
    
    createJob();
  };

  const handleUpdateJob = () => {
    if (!editingJob) return;
    
    const updateJob = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail') || 'admin';
        const jobData = {
          ...editingJob,
          updatedBy: userEmail
        };

        const response = await axios.put(`${baseURL}/api/jobs/${editingJob._id}`, jobData);
        
        if (response.data.success) {
          setJobPositions(prev => 
            prev.map(job => 
              job._id === editingJob._id ? response.data.job : job
            )
          );
          setEditingJob(null);
          
          toast({
            title: "Job Updated",
            description: "Job position has been updated successfully",
          });
        }
      } catch (error) {
        console.error("Error updating job:", error);
        toast({
          title: "Error",
          description: "Failed to update job position",
          variant: "destructive",
        });
      }
    };
    
    updateJob();
  };

  const handleDeleteJob = (jobId: string) => {
    const deleteJob = async () => {
      try {
        const response = await axios.delete(`${baseURL}/api/jobs/${jobId}`);
        
        if (response.data.success) {
          setJobPositions(prev => prev.filter(job => job._id !== jobId));
          
          toast({
            title: "Job Deleted",
            description: "Job position has been deleted successfully",
          });
        }
      } catch (error) {
        console.error("Error deleting job:", error);
        toast({
          title: "Error",
          description: "Failed to delete job position",
          variant: "destructive",
        });
      }
    };
    
    deleteJob();
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'reviewed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'interview': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'hired': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-purple-600">Loading dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Admin Dashboard</h1>
          <p className="text-xl text-purple-600">Manage job applications and positions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-purple-600">Total Applications</p>
                  <p className="text-2xl font-bold text-purple-800">{applications.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-blue-600">Pending Review</p>
                  <p className="text-2xl font-bold text-blue-800">
                    {applications.filter(app => app.status === 'pending').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Briefcase className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-green-600">Active Jobs</p>
                  <p className="text-2xl font-bold text-green-800">
                    {jobPositions.filter(job => job.isActive).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-orange-600">This Month</p>
                  <p className="text-2xl font-bold text-orange-800">
                    {applications.filter(app => 
                      new Date(app.applicationDate).getMonth() === new Date().getMonth()
                    ).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-purple-100">
            <TabsTrigger value="applications" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              Applications
            </TabsTrigger>
            <TabsTrigger value="jobs" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              Job Positions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="applications" className="space-y-6">
            {applications.length === 0 ? (
              <Card className="text-center py-12 border-purple-200">
                <CardContent>
                  <FileText className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">No Applications</h3>
                  <p className="text-purple-600">No job applications have been submitted yet.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {applications.map((application) => (
                  <Card key={application._id} className="border-purple-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-purple-800">{application.name}</CardTitle>
                          <CardDescription className="flex items-center mt-2">
                            <span className="mr-4">{application.email}</span>
                            <span className="mr-4">{application.phone}</span>
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(application.applicationDate).toLocaleDateString()}
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(application.status)}>
                            {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                          </Badge>
                          <Select
                            value={application.status}
                            onValueChange={(value) => updateApplicationStatus(application._id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="reviewed">Reviewed</SelectItem>
                              <SelectItem value="interview">Interview</SelectItem>
                              <SelectItem value="hired">Hired</SelectItem>
                              <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-purple-600 font-medium">Preferred Role</p>
                          <p className="text-gray-700">{application.preferredRole}</p>
                        </div>
                        <div>
                          <p className="text-sm text-purple-600 font-medium">Experience</p>
                          <p className="text-gray-700">{application.experience}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm text-purple-600 font-medium mb-1">Skills</p>
                        <p className="text-gray-700 text-sm">{application.skills}</p>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setSelectedApplication(application)}
                                className="border-purple-200 text-purple-600 hover:bg-purple-50"
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Application Details</DialogTitle>
                                <DialogDescription>
                                  Full application information for {selectedApplication?.name}
                                </DialogDescription>
                              </DialogHeader>
                              {selectedApplication && (
                                <div className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <Label>Name</Label>
                                      <p className="text-sm">{selectedApplication.name}</p>
                                    </div>
                                    <div>
                                      <Label>Email</Label>
                                      <p className="text-sm">{selectedApplication.email}</p>
                                    </div>
                                    <div>
                                      <Label>Phone</Label>
                                      <p className="text-sm">{selectedApplication.phone}</p>
                                    </div>
                                    <div>
                                      <Label>Preferred Role</Label>
                                      <p className="text-sm">{selectedApplication.preferredRole}</p>
                                    </div>
                                  </div>
                                  <div>
                                    <Label>Experience</Label>
                                    <p className="text-sm">{selectedApplication.experience}</p>
                                  </div>
                                  <div>
                                    <Label>Skills</Label>
                                    <p className="text-sm">{selectedApplication.skills}</p>
                                  </div>
                                  <div>
                                    <Label>Cover Letter</Label>
                                    <p className="text-sm">{selectedApplication.coverLetter}</p>
                                  </div>
                                  {selectedApplication.resumeFileName && (
                                    <div>
                                      <Label>Resume</Label>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => window.open(`${baseURL}/uploads/resumes/${selectedApplication.resumeFileName}`, '_blank')}
                                        className="ml-2"
                                      >
                                        <Eye className="h-4 w-4 mr-2" />
                                        View Resume
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>

                          {application.resumeFileName && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(`${baseURL}/uploads/resumes/${application.resumeFileName}`, '_blank')}
                              className="border-blue-200 text-blue-600 hover:bg-blue-50"
                            >
                              <FileText className="h-4 w-4 mr-2" />
                              Resume
                            </Button>
                          )}
                        </div>
                        
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-red-200 text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle className="flex items-center">
                                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                                Delete Application
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete the application from {application.name}? 
                                This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => deleteApplication(application._id)}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-purple-800">Job Positions</h2>
              <Dialog open={isJobDialogOpen} onOpenChange={(value) => {
                setIsJobDialogOpen(value);
                if (!value) {
                  setEditingJob(null);
                  // Reset form when closing
                  setNewJob({
                    title: "",
                    department: "",
                    location: "",
                    type: "full-time",
                    description: "",
                    requirements: [""],
                    responsibilities: [""],
                    salary: "",
                    experience: "",
                    benefits: [""],
                    isActive: true
                  });
                }
              }}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Job
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingJob ? 'Edit Job Position' : 'Create New Job Position'}</DialogTitle>
                    <DialogDescription>
                      {editingJob ? 'Update job details and requirements' : 'Add a new job opening to attract candidates'}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Job Title</Label>
                        <Input
                          id="title"
                          value={editingJob ? editingJob.title : newJob.title}
                          onChange={(e) => {
                            if (editingJob) {
                              setEditingJob(prev => prev ? ({ ...prev, title: e.target.value }) : null);
                            } else {
                              setNewJob(prev => ({ ...prev, title: e.target.value }));
                            }
                          }}
                          placeholder="e.g. Senior Developer"
                        />
                      </div>
                      <div>
                        <Label htmlFor="department">Department</Label>
                        <Input
                          id="department"
                          value={editingJob ? editingJob.department : newJob.department}
                          onChange={(e) => {
                            if (editingJob) {
                              setEditingJob(prev => prev ? ({ ...prev, department: e.target.value }) : null);
                            } else {
                              setNewJob(prev => ({ ...prev, department: e.target.value }));
                            }
                          }}
                          placeholder="e.g. Engineering"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={editingJob ? editingJob.location : newJob.location}
                          onChange={(e) => {
                            if (editingJob) {
                              setEditingJob(prev => prev ? ({ ...prev, location: e.target.value }) : null);
                            } else {
                              setNewJob(prev => ({ ...prev, location: e.target.value }));
                            }
                          }}
                          placeholder="e.g. Remote, Hybrid"
                        />
                      </div>
                      <div>
                        <Label htmlFor="type">Job Type</Label>
                        <Select 
                          value={editingJob ? editingJob.type : newJob.type} 
                          onValueChange={(value) => {
                            if (editingJob) {
                              setEditingJob(prev => prev ? ({ ...prev, type: value }) : null);
                            } else {
                              setNewJob(prev => ({ ...prev, type: value }));
                            }
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full Time</SelectItem>
                            <SelectItem value="part-time">Part Time</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            <SelectItem value="internship">Internship</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="salary">Salary Range</Label>
                      <Input
                        id="salary"
                        value={editingJob ? editingJob.salary : newJob.salary}
                        onChange={(e) => {
                          if (editingJob) {
                            setEditingJob(prev => prev ? ({ ...prev, salary: e.target.value }) : null);
                          } else {
                            setNewJob(prev => ({ ...prev, salary: e.target.value }));
                          }
                        }}
                        placeholder="e.g. ₹10-15 LPA"
                      />
                    </div>
                    <div>
                      <Label htmlFor="experience">Experience Required</Label>
                      <Input
                        id="experience"
                        value={editingJob ? editingJob.experience : newJob.experience}
                        onChange={(e) => {
                          if (editingJob) {
                            setEditingJob(prev => prev ? ({ ...prev, experience: e.target.value }) : null);
                          } else {
                            setNewJob(prev => ({ ...prev, experience: e.target.value }));
                          }
                        }}
                        placeholder="e.g. 2-4 years"
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">Job Description</Label>
                      <Textarea
                        id="description"
                        value={editingJob ? editingJob.description : newJob.description}
                        onChange={(e) => {
                          if (editingJob) {
                            setEditingJob(prev => prev ? ({ ...prev, description: e.target.value }) : null);
                          } else {
                            setNewJob(prev => ({ ...prev, description: e.target.value }));
                          }
                        }}
                        placeholder="Describe the role and responsibilities..."
                        rows={4}
                      />
                    </div>
                    <div>
                      <Label>Requirements</Label>
                      {(editingJob ? editingJob.requirements : newJob.requirements).map((req, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <Input
                            value={req}
                            onChange={(e) => {
                              if (editingJob) {
                                const newReqs = [...editingJob.requirements];
                                newReqs[index] = e.target.value;
                                setEditingJob(prev => prev ? ({ ...prev, requirements: newReqs }) : null);
                              } else {
                                const newReqs = [...newJob.requirements];
                                newReqs[index] = e.target.value;
                                setNewJob(prev => ({ ...prev, requirements: newReqs }));
                              }
                            }}
                            placeholder="Enter requirement"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              if (editingJob) {
                                const newReqs = editingJob.requirements.filter((_, i) => i !== index);
                                setEditingJob(prev => prev ? ({ ...prev, requirements: newReqs }) : null);
                              } else {
                                const newReqs = newJob.requirements.filter((_, i) => i !== index);
                                setNewJob(prev => ({ ...prev, requirements: newReqs }));
                              }
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (editingJob) {
                            setEditingJob(prev => prev ? ({ ...prev, requirements: [...prev.requirements, ""] }) : null);
                          } else {
                            setNewJob(prev => ({ ...prev, requirements: [...prev.requirements, ""] }));
                          }
                        }}
                      >
                        Add Requirement
                      </Button>
                    </div>
                    <div>
                      <Label>Responsibilities</Label>
                      {(editingJob ? editingJob.responsibilities : newJob.responsibilities).map((resp, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <Input
                            value={resp}
                            onChange={(e) => {
                              if (editingJob) {
                                const newResps = [...editingJob.responsibilities];
                                newResps[index] = e.target.value;
                                setEditingJob(prev => prev ? ({ ...prev, responsibilities: newResps }) : null);
                              } else {
                                const newResps = [...newJob.responsibilities];
                                newResps[index] = e.target.value;
                                setNewJob(prev => ({ ...prev, responsibilities: newResps }));
                              }
                            }}
                            placeholder="Enter responsibility"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              if (editingJob) {
                                const newResps = editingJob.responsibilities.filter((_, i) => i !== index);
                                setEditingJob(prev => prev ? ({ ...prev, responsibilities: newResps }) : null);
                              } else {
                                const newResps = newJob.responsibilities.filter((_, i) => i !== index);
                                setNewJob(prev => ({ ...prev, responsibilities: newResps }));
                              }
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (editingJob) {
                            setEditingJob(prev => prev ? ({ ...prev, responsibilities: [...prev.responsibilities, ""] }) : null);
                          } else {
                            setNewJob(prev => ({ ...prev, responsibilities: [...prev.responsibilities, ""] }));
                          }
                        }}
                      >
                        Add Responsibility
                      </Button>
                    </div>
                    <div>
                      <Label>Benefits</Label>
                      {(editingJob ? editingJob.benefits : newJob.benefits).map((benefit, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <Input
                            value={benefit}
                            onChange={(e) => {
                              if (editingJob) {
                                const newBenefits = [...editingJob.benefits];
                                newBenefits[index] = e.target.value;
                                setEditingJob(prev => prev ? ({ ...prev, benefits: newBenefits }) : null);
                              } else {
                                const newBenefits = [...newJob.benefits];
                                newBenefits[index] = e.target.value;
                                setNewJob(prev => ({ ...prev, benefits: newBenefits }));
                              }
                            }}
                            placeholder="Enter benefit"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              if (editingJob) {
                                const newBenefits = editingJob.benefits.filter((_, i) => i !== index);
                                setEditingJob(prev => prev ? ({ ...prev, benefits: newBenefits }) : null);
                              } else {
                                const newBenefits = newJob.benefits.filter((_, i) => i !== index);
                                setNewJob(prev => ({ ...prev, benefits: newBenefits }));
                              }
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (editingJob) {
                            setEditingJob(prev => prev ? ({ ...prev, benefits: [...prev.benefits, ""] }) : null);
                          } else {
                            setNewJob(prev => ({ ...prev, benefits: [...prev.benefits, ""] }));
                          }
                        }}
                      >
                        Add Benefit
                      </Button>
                    </div>
                    {editingJob && (
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="edit-active"
                          checked={editingJob.isActive}
                          onChange={(e) => setEditingJob(prev => prev ? ({ ...prev, isActive: e.target.checked }) : null)}
                          className="rounded"
                        />
                        <Label htmlFor="edit-active">Active Position</Label>
                      </div>
                    )}
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsJobDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button 
                      onClick={editingJob ? handleUpdateJob : handleCreateJob} 
                      className="bg-gradient-to-r from-purple-600 to-blue-600"
                    >
                      {editingJob ? 'Update Job' : 'Create Job'}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-6">
              {jobPositions.map((job) => (
                <Card key={job._id} className="border-purple-200">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-purple-800">{job.title}</CardTitle>
                        <CardDescription>
                          {job.department} • {job.location} • {job.type} • {job.salary}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={job.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                          {job.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setEditingJob(job);
                                setIsJobDialogOpen(true);
                              }}
                              className="border-purple-200 text-purple-600"
                            >
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                          </DialogTrigger>
                        </Dialog>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-red-200 text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle className="flex items-center">
                                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                                Delete Job Position
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete the "{job.title}" position? 
                                This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDeleteJob(job._id)}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-purple-600 font-medium mb-1">Description</p>
                        <p className="text-gray-700 text-sm">{job.description}</p>
                      </div>
                      <div>
                        <p className="text-sm text-purple-600 font-medium mb-1">Requirements</p>
                        <ul className="text-gray-700 text-sm space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index}>• {req}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm text-purple-600 font-medium mb-1">Responsibilities</p>
                        <ul className="text-gray-700 text-sm space-y-1">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index}>• {resp}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-xs text-gray-500">
                        Created on {new Date(job.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;