// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   ShieldCheck,
// } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import Logo from "@/components/ui/logo";
// import axios from "axios";

// const baseURL = import.meta.env.VITE_API_BASE_URL;

// const Signup = () => {
//   const { toast } = useToast();
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     otp: "",
//   });

//   const [otpSent, setOtpSent] = useState(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSendOtp = async () => {
//     try {
//       const res = await axios.post(`${baseURL}/api/auth/send-otp`, {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       });

//       if (res.status === 200) {
//         setOtpSent(true);
//         toast({
//           title: "OTP Sent",
//           description: "Check your email for the verification code.",
//         });
//       }
//     } catch (err: any) {
//       toast({
//         title: "Failed to send OTP",
//         description: err.response?.data?.message || "Try again.",
//         variant: "destructive",
//       });
//     }
//   };

//   const handleVerifyAndSignup = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(`${baseURL}/api/auth/verify-otp`, {
//         email: formData.email,
//         otp: formData.otp,
//       });

//       if (res.status === 200) {
//         toast({
//           title: "Signup Successful",
//           description: "Welcome to Sisuni Tech!",
//         });
//         navigate("/career");
//       } else {
//         toast({
//           title: "OTP Verification Failed",
//           description: res.data.message || "Try again.",
//           variant: "destructive",
//         });
//       }
//     } catch (err: any) {
//       toast({
//         title: "Error",
//         description: err.response?.data?.message || "OTP verification failed",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-blue-50">
//       <div className="max-w-md mx-auto px-4 py-20">
//         <Card className="shadow-tech border-purple-200">
//           <CardHeader className="text-center">
//             <div className="flex justify-center mb-4">
//             <Logo size="lg" showText={false} className="w-30 h-30" />
//           </div>
//             <CardTitle className="text-2xl text-purple-800">Create Account</CardTitle>
//             <CardDescription>Join the Sisuni Tech team</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleVerifyAndSignup} className="space-y-6">
//               <div>
//                 <Label htmlFor="name" className="text-purple-700">Full Name</Label>
//                 <div className="relative mt-1">
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Your full name"
//                     className="pl-3 border-purple-200 focus:border-purple-500"
//                     required
//                     disabled={otpSent}
//                   />
//                 </div>
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




// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Link, useNavigate } from "react-router-dom";
// import { Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import Logo from "@/components/ui/logo";
// import axios from "axios";
// import {signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword, getAuth} from "firebase/auth"
// import { app } from "../context/firebase";

// function Registration(){
//    const [email,setEmail]=useState('');
//    const [password,setPassword]=useState('');
//    const [loginError,setLoginError]=useState('');

//    const auth=getAuth(app);

//    const HandleSignUp=async(e)=>{
//     try{
//       await createUserWithEmailAndPassword(auth,email,password);
//       console.log("SignUp done");
//     }
//    }
// }


// const baseURL = import.meta.env.VITE_API_BASE_URL;

// const Signup = () => {
//   const { toast } = useToast();
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     otp: "",
//   });
//   const [otpSent, setOtpSent] = useState(false);
//   const [sending, setSending] = useState(false);
//   const [verifying, setVerifying] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//   };

//   const handleSendOtp = async () => {
//     if (!formData.name || !formData.email || !formData.password) {
//       toast({
//         title: "Missing details",
//         description: "Please fill name, email & password before requesting OTP.",
//         variant: "destructive",
//       });
//       return;
//     }
//     setSending(true);
//     try {
//       const res = await axios.post(`${baseURL}/api/auth/send-otp`, {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       });
//       if (res.data?.success || res.status === 200) {
//         setOtpSent(true);
//         toast({
//           title: "OTP Sent",
//           description: "Check your email for the verification code.",
//         });
//       } else {
//         toast({
//           title: "Failed to send OTP",
//           description: res.data?.message || "Try again.",
//           variant: "destructive",
//         });
//       }
//     } catch (err: any) {
//       toast({
//         title: "Failed to send OTP",
//         description: err.response?.data?.message || "Try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setSending(false);
//     }
//   };

//   const handleVerifyAndSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.otp) {
//       toast({
//         title: "Missing OTP",
//         description: "Enter the code sent to your email.",
//         variant: "destructive",
//       });
//       return;
//     }
//     setVerifying(true);
//     try {
//       const res = await axios.post(`${baseURL}/api/auth/verify-otp`, {
//         email: formData.email,
//         otp: formData.otp,
//       });
//       if (res.data?.success || res.status === 200) {
//         toast({
//           title: "Signup Successful",
//           description: "Welcome to Sisuni Tech!",
//         });
//         navigate("/career");
//       } else {
//         toast({
//           title: "OTP Verification Failed",
//           description: res.data?.message || "Try again.",
//           variant: "destructive",
//         });
//       }
//     } catch (err: any) {
//       toast({
//         title: "OTP Verification Failed",
//         description: err.response?.data?.message || "Try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setVerifying(false);
//     }
//   };

//   return (
//     <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-blue-50">
//       <div className="max-w-md mx-auto px-4 py-20">
//         <Card className="shadow-tech border-purple-200">
//           <CardHeader className="text-center">
//             <div className="flex justify-center mb-4">
//               <Logo size="lg" showText={false} className="w-24 h-24" />
//             </div>
//             <CardTitle className="text-2xl text-purple-800">Create Account</CardTitle>
//             <CardDescription>Join the Sisuni Tech team</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleVerifyAndSignup} className="space-y-6">
//               <div>
//                 <Label htmlFor="name" className="text-purple-700">
//                   Full Name
//                 </Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder="Your full name"
//                   className="mt-1 pl-3 border-purple-200 focus:border-purple-500"
//                   required
//                   disabled={otpSent}
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="email" className="text-purple-700">
//                   Email Address
//                 </Label>
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
//                 <Label htmlFor="password" className="text-purple-700">
//                   Password
//                 </Label>
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
//                     onClick={() => setShowPassword((v) => !v)}
//                     className="absolute right-3 top-3 text-purple-400 hover:text-purple-600"
//                   >
//                     {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>
//               </div>

//               <div>
//                 <button>Continue with google </button>
//               </div>

//               {!otpSent && (
//                 <Button
//                   type="button"
//                   onClick={handleSendOtp}
//                   className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
//                   disabled={sending}
//                 >
//                   {sending ? "Sending..." : "Send OTP"}
//                 </Button>
//               )}

//               {otpSent && (
//                 <>
//                   <div>
//                     <Label htmlFor="otp" className="text-purple-700">
//                       Enter OTP
//                     </Label>
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
//                     disabled={verifying}
//                   >
//                     {verifying ? "Verifying..." : "Create Account"}
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






// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "@/context/firebase";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { Mail, Lock, Eye, EyeOff } from "lucide-react";
// import Logo from "@/components/ui/logo"; // Replace with your actual logo component path

// const Signup = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         formData.email,
//         formData.password
//       );

//       await updateProfile(userCredential.user, {
//         displayName: formData.name,
//       });

//       navigate("/login");
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center py-10 px-4">
//       <Card className="w-full max-w-md rounded-2xl shadow-xl border border-purple-200 bg-white">
//         <CardHeader className="text-center pb-2">
//           <div className="flex justify-center mb-4">
//             <Logo size="lg" showText={false} className="h-12 w-auto" />
//           </div>
//           <CardTitle className="text-2xl font-semibold text-purple-800">Create Account</CardTitle>
//           <CardDescription className="text-gray-500">Join the Sisuni Tech team</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSignup} className="space-y-5">
//             {/* Name */}
//             <div>
//               <Label htmlFor="name" className="text-sm text-purple-700 font-medium">
//                 Full Name
//               </Label>
//               <Input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Your full name"
//                 className="mt-1"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <Label htmlFor="email" className="text-sm text-purple-700 font-medium">
//                 Email Address
//               </Label>
//               <div className="relative mt-1">
//                 <Mail className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="you@example.com"
//                   className="pl-10"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <Label htmlFor="password" className="text-sm text-purple-700 font-medium">
//                 Password
//               </Label>
//               <div className="relative mt-1">
//                 <Lock className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
//                 <Input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   placeholder="Create a strong password"
//                   className="pl-10 pr-10"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-3 text-purple-400 hover:text-purple-600"
//                 >
//                   {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                 </button>
//               </div>
//             </div>

//             {/* Submit */}
//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
//             >
//               Create Account
//             </Button>
//           </form>

//           {/* Error Message */}
//           {error && <p className="text-red-600 text-sm mt-2 text-center">{error}</p>}

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link to="/login" className="text-purple-600 hover:text-purple-800 font-medium">
//                 Login here
//               </Link>
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Signup;






import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import { auth } from "@/context/firebase";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Logo from "@/components/ui/logo";



const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // 🔄 Check for redirected Google login result
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          console.log("Redirected Google User:", result.user);
          navigate("/career");
        }
      })
      .catch((error) => {
        console.error("Redirect error:", error.message);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });

      navigate("/login");
    } catch (err: any) {
      setError(err.message);
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center py-10 px-4">
      <Card className="w-full max-w-md rounded-2xl shadow-xl border border-purple-200 bg-white">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <Logo size="lg" showText={false} className="h-12 w-auto" />
          </div>
          <CardTitle className="text-2xl font-semibold text-purple-800">Create Account</CardTitle>
          <CardDescription className="text-gray-500">Join the Sisuni Tech team</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-sm text-purple-700 font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm text-purple-700 font-medium">
                Email Address
              </Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="text-sm text-purple-700 font-medium">
                Password
              </Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a strong password"
                  className="pl-10 pr-10"
                  required
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

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Create Account
            </Button>
          </form>

          {error && <p className="text-red-600 text-sm mt-2 text-center">{error}</p>}

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
  );
};

export default Signup;











// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Link, useNavigate } from "react-router-dom";
// import { Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import Logo from "@/components/ui/logo";
// import axios from "axios";

// const baseURL = import.meta.env.VITE_API_BASE_URL;

// const Signup = () => {
//   const { toast } = useToast();
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     otp: "",
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSendOtp = async () => {
//     try {
//       const res = await axios.post(`${baseURL}/api/auth/send-otp`, {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       });

//       if (res.status === 200) {
//         setOtpSent(true);
//         toast({
//           title: "OTP Sent",
//           description: "Check your email for the verification code.",
//         });
//       }
//     } catch (err: any) {
//       toast({
//         title: "Failed to send OTP",
//         description: err.response?.data?.message || "Try again.",
//         variant: "destructive",
//       });
//     }
//   };

//   const handleVerifyAndSignup = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(`${baseURL}/api/auth/verify-otp`, {
//         email: formData.email,
//         otp: formData.otp,
//       });

//       if (res.status === 200) {
//         toast({
//           title: "Signup Successful",
//           description: "Welcome to Sisuni Tech!",
//         });
//         navigate("/career");
//       } else {
//         toast({
//           title: "OTP Verification Failed",
//           description: res.data.message || "Try again.",
//           variant: "destructive",
//         });
//       }
//     } catch (err: any) {
//       toast({
//         title: "Error",
//         description: err.response?.data?.message || "OTP verification failed",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center py-10 px-4">
//       <Card className="w-full max-w-md rounded-2xl shadow-xl border border-purple-200 bg-white">
//         <CardHeader className="text-center pb-2">
//           <div className="flex justify-center mb-4">
//             <Logo size="lg" showText={false} className="h-12 w-auto" />
//           </div>
//           <CardTitle className="text-2xl font-semibold text-purple-800">Create Account</CardTitle>
//           <CardDescription className="text-gray-500">Join the Sisuni Tech team</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleVerifyAndSignup} className="space-y-5">
//             {/* Name */}
//             <div>
//               <Label htmlFor="name" className="text-sm text-purple-700 font-medium">
//                 Full Name
//               </Label>
//               <Input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Your full name"
//                 className="mt-1"
//                 required
//                 disabled={otpSent}
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <Label htmlFor="email" className="text-sm text-purple-700 font-medium">
//                 Email Address
//               </Label>
//               <div className="relative mt-1">
//                 <Mail className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="you@example.com"
//                   className="pl-10"
//                   required
//                   disabled={otpSent}
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <Label htmlFor="password" className="text-sm text-purple-700 font-medium">
//                 Password
//               </Label>
//               <div className="relative mt-1">
//                 <Lock className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
//                 <Input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   placeholder="Create a strong password"
//                   className="pl-10 pr-10"
//                   required
//                   disabled={otpSent}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-3 text-purple-400 hover:text-purple-600"
//                 >
//                   {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                 </button>
//               </div>
//             </div>

//             {/* Send OTP */}
//             {!otpSent && (
//               <Button
//                 type="button"
//                 onClick={handleSendOtp}
//                 className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
//               >
//                 Send OTP
//               </Button>
//             )}

//             {/* OTP and Submit */}
//             {otpSent && (
//               <>
//                 <div>
//                   <Label htmlFor="otp" className="text-sm text-purple-700 font-medium">
//                     Enter OTP
//                   </Label>
//                   <div className="relative mt-1">
//                     <ShieldCheck className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
//                     <Input
//                       id="otp"
//                       name="otp"
//                       type="text"
//                       value={formData.otp}
//                       onChange={handleInputChange}
//                       placeholder="6-digit code"
//                       className="pl-10"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
//                 >
//                   Create Account
//                 </Button>
//               </>
//             )}
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link to="/login" className="text-purple-600 hover:text-purple-800 font-medium">
//                 Login here
//               </Link>
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Signup;

