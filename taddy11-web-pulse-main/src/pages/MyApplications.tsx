import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { FileText, Trash2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

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

const MyApplications = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // ✅ Fetch user email from Firebase Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setUserEmail(user.email);
      } else {
        navigate("/login"); // Redirect to login if no user
      }
    });

    return () => unsubscribe();
  }, [navigate]);
useEffect(() => {
  if (userEmail) {
    fetchApplications(userEmail);
  }
}, [userEmail]);

const fetchApplications = async (email: string) => {
  try {
    const response = await fetch(`${baseURL}/api/applications/by-email/${encodeURIComponent(email)}`);
    const data = await response.json();
    console.log("Applications fetched:", data);

    setApplications(data.applications || []); // ✅ set the fetched data into state
    setLoading(false);     // ✅ disable loading spinner
  } catch (error) {
    console.error("Error fetching applications:", error);
    toast({
      title: "Error",
      description: "Failed to fetch applications",
      variant: "destructive",
    });
    setLoading(false); // still stop loading even if there's an error
  }
};



  // ✅ Delete handler
  const handleDelete = async (applicationId: string) => {
    try {
      const response = await axios.delete(
        `${baseURL}/api/applications/${applicationId}`
      );
      if (response.data.success) {
        setApplications((prev) =>
          prev.filter((app) => app._id !== applicationId)
        );
        toast({
          title: "Application Deleted",
          description: "Your application has been successfully deleted",
        });
      }
    } catch (error: any) {
      console.error("❌ Error deleting application:", error);
      toast({
        title: "Error",
        description: "Failed to delete application",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "reviewed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "interview":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "hired":
        return "bg-green-100 text-green-800 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-purple-600">Loading your applications...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-purple-800 mb-10">
            My Applications
          </h1>
          <p className="text-xl text-purple-600">
            Track and manage your job applications
          </p>
        </div>

        {applications.length === 0 ? (
          <Card className="text-center h-[250px] px-4 py-4 border-purple-200 overflow-hidden">
            <CardContent>
              <FileText className="h-8 w-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                No Applications Found
              </h3>
              <p className="text-purple-600 mb-6">
                You haven't submitted any applications yet.
              </p>
              <Button
                onClick={() => navigate("/career")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Browse Jobs
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {applications.map((application) => (
              <Card
                key={application._id}
                className="border-purple-200 transition-all transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              >
                <CardHeader className="pb-0">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base text-purple-800">
                      {application.preferredRole}
                    </CardTitle>
                    <Badge
                      className={`text-xs ${getStatusColor(application.status)}`}
                    >
                      {application.status.charAt(0).toUpperCase() +
                        application.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-purple-600 font-medium">
                        Experience
                      </p>
                      <p className="text-gray-700">{application.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm text-purple-600 font-medium">
                        Skills
                      </p>
                      <p className="text-gray-700">{application.skills}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-purple-600 font-medium mb-1">
                      Cover Letter
                    </p>
                    <p className="text-gray-700 text-sm line-clamp-3">
                      {application.coverLetter}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {application.resumeFileName && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            window.open(
                              `${baseURL}/uploads/resumes/${application.resumeFileName}`,
                              "_blank"
                            )
                          }
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
                            Are you sure you want to delete this application for{" "}
                            <strong>{application.preferredRole}</strong>? This
                            action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(application._id)}
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
      </div>
    </div>
  );
};

export default MyApplications;
