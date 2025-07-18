// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Link, useNavigate } from "react-router-dom";
// import { Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import axios from "axios";
// const baseURL = import.meta.env.VITE_API_BASE_URL;

// const Signup = () => {
//   const { toast } = useToast();
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//      name: "",  
//   email: "",
//   password: "",
//   otp: ""
//   });

//   const [otpSent, setOtpSent] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSendOtp = async () => {
//   try {
//     const res = await axios.post(`${baseURL}/api/auth/send-otp`, {
//       name: formData.name,      
//       email: formData.email,
//       password: formData.password
//     });

//     if (res.status === 200) {
//       setOtpSent(true);
//       toast({
//         title: "OTP Sent",
//         description: "Check your email for the verification code.",
//       });
//     } else {
//       toast({
//         title: "Failed to send OTP",
//         description: res.data.message || "Try again.",
//         variant: "destructive",
//       });
//     }
//   } catch (err) {
//     console.error("OTP Error:", err.response?.data || err.message);
//     toast({
//       title: "Error",
//       description: "Could not send OTP. Try again.",
//       variant: "destructive",
//     });
//   }
// };

//   const handleVerifyAndSignup = async (e: React.FormEvent) => {
//   e.preventDefault();

//   try {
//     const res = await axios.post(`${baseURL}/api/auth/signup`, {
//       name: formData.name, // ✅ include name
//       email: formData.email,
//       password: formData.password,
//       otp: formData.otp,
//     });

//     if (res.data.success) {
//       toast({
//         title: "Account Created",
//         description: "Welcome to Sisuni Tech!",
//       });
//       navigate("/career");
//     } else {
//       toast({
//         title: "Signup Failed",
//         description: res.data.message,
//         variant: "destructive",
//       });
//     }
//   } catch (err) {
//     console.error("Signup error:", err);
//     toast({
//       title: "Error",
//       description: "Signup failed. Please try again.",
//       variant: "destructive",
//     });
//   }
// };


//   return (
//     <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-blue-50">
//       <div className="max-w-md mx-auto px-4 py-20">
//         <Card className="shadow-tech border-purple-200">
//           <CardHeader className="text-center">
//             <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
//               <span className="text-white font-bold text-xl">S</span>
//             </div>
//             <CardTitle className="text-2xl text-purple-800">Create Account</CardTitle>
//             <CardDescription>Join the Sisuni Tech team</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleVerifyAndSignup} className="space-y-6">
              
              
//               <div><Label htmlFor="name" className="text-purple-700">Full Name</Label>
//                  <div className="relative mt-1">
//                      <Input
//                         id="name"
//                         name="name"
//                         type="text"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         placeholder="Your full name"
//                         className="pl-3 border-purple-200 focus:border-purple-500"
//                         required
//                         disabled={otpSent}
//                         />
//                   </div>
//               </div>
              
              
//               <div>
//                 <Label htmlFor="email" className="text-purple-700">Email Address</Label>
//                 <div className="relative mt-1">
//                   <Mail className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="your.email@example.com"
//                     className="pl-10 border-purple-200 focus:border-purple-500"
//                     required
//                     disabled={otpSent}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <Label htmlFor="password" className="text-purple-700">Password</Label>
//                 <div className="relative mt-1">
//                   <Lock className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
//                   <Input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     placeholder="Create a password"
//                     className="pl-10 pr-10 border-purple-200 focus:border-purple-500"
//                     required
//                     disabled={otpSent}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-3 text-purple-400 hover:text-purple-600"
//                   >
//                     {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>
//               </div>

//               {!otpSent && (
//                 <Button
//                   type="button"
//                   onClick={handleSendOtp}
//                   className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
//                 >
//                   Send OTP
//                 </Button>
//               )}

//               {otpSent && (
//                 <>
//                   <div>
//                     <Label htmlFor="otp" className="text-purple-700">Enter OTP</Label>
//                     <div className="relative mt-1">
//                       <ShieldCheck className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
//                       <Input
//                         id="otp"
//                         name="otp"
//                         type="text"
//                         value={formData.otp}
//                         onChange={handleInputChange}
//                         placeholder="6-digit code"
//                         className="pl-10 border-purple-200 focus:border-purple-500"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <Button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
//                   >
//                     Create Account
//                   </Button>
//                 </>
//               )}
//             </form>

//             <div className="mt-6 text-center">
//               <p className="text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <Link to="/login" className="text-purple-600 hover:text-purple-800 font-medium">
//                   Login here
//                 </Link>
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const Signup = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });

  const [otpSent, setOtpSent] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendOtp = async () => {
    try {
      const res = await axios.post(`${baseURL}/api/auth/send-otp`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (res.status === 200) {
        setOtpSent(true);
        toast({
          title: "OTP Sent",
          description: "Check your email for the verification code.",
        });
      }
    } catch (err: any) {
      toast({
        title: "Failed to send OTP",
        description: err.response?.data?.message || "Try again.",
        variant: "destructive",
      });
    }
  };

  const handleVerifyAndSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${baseURL}/api/auth/verify-otp`, {
        email: formData.email,
        otp: formData.otp,
      });

      if (res.status === 200) {
        toast({
          title: "Signup Successful",
          description: "Welcome to Sisuni Tech!",
        });
        navigate("/career");
      } else {
        toast({
          title: "OTP Verification Failed",
          description: res.data.message || "Try again.",
          variant: "destructive",
        });
      }
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.response?.data?.message || "OTP verification failed",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-md mx-auto px-4 py-20">
        <Card className="shadow-tech border-purple-200">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <CardTitle className="text-2xl text-purple-800">Create Account</CardTitle>
            <CardDescription>Join the Sisuni Tech team</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleVerifyAndSignup} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-purple-700">Full Name</Label>
                <div className="relative mt-1">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="pl-3 border-purple-200 focus:border-purple-500"
                    required
                    disabled={otpSent}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-purple-700">Email Address</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="pl-10 border-purple-200 focus:border-purple-500"
                    required
                    disabled={otpSent}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-purple-700">Password</Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password"
                    className="pl-10 pr-10 border-purple-200 focus:border-purple-500"
                    required
                    disabled={otpSent}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-purple-400 hover:text-purple-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {!otpSent && (
                <Button
                  type="button"
                  onClick={handleSendOtp}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Send OTP
                </Button>
              )}

              {otpSent && (
                <>
                  <div>
                    <Label htmlFor="otp" className="text-purple-700">Enter OTP</Label>
                    <div className="relative mt-1">
                      <ShieldCheck className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
                      <Input
                        id="otp"
                        name="otp"
                        type="text"
                        value={formData.otp}
                        onChange={handleInputChange}
                        placeholder="6-digit code"
                        className="pl-10 border-purple-200 focus:border-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Create Account
                  </Button>
                </>
              )}
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-purple-600 hover:text-purple-800 font-medium">
                  Login here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
