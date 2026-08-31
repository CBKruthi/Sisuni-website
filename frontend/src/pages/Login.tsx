// import { useState } from "react";
// import axios from "axios";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/components/ui/use-toast";
// import { Mail, Lock } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "@/context/AuthContext";
// import Logo from "@/components/ui/logo"; // This should be logo image-only

// const baseURL = import.meta.env.VITE_API_BASE_URL;

// const LoginForm = () => {
//   const { toast } = useToast();
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       toast({
//         title: "All fields are required",
//         variant: "destructive",
//       });
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await axios.post(`${baseURL}/api/auth/login`, formData);

//       const { token, user } = res.data;
//       login(user.email, user.isAdmin);

//       toast({
//         title: "Login Successful",
//         description: `Welcome, ${user.name}`,
//       });

//       navigate("/career");
//     } catch (err: any) {
//       toast({
//         title: "Login Failed",
//         description: err.response?.data?.message || "Something went wrong",
//         variant: "destructive",
//       });
//     } finally {
//       setLoading(false);
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
//           <CardTitle className="text-2xl">Login</CardTitle>
//           <CardDescription className="text-muted-foreground">
//             Login to your account
//           </CardDescription>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label htmlFor="email" className="text-purple-700">Email Address</Label>
//                 <div className="relative mt-1">
//                   <Mail className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
//                   <Input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="your.email@example.com"
//                     className="pl-10 border-purple-200 focus:border-purple-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <Label htmlFor="password" className="text-purple-700">Password</Label>
//                 <div className="relative mt-1">
//                   <Lock className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
//                 <Input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="••••••••"
//                   className="pl-10 pr-10 border-purple-200 focus:border-purple-500"
//                 />
//               </div>
//             </div>

//             <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
//                  disabled={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//     </div>
//   );
// };

// export default LoginForm;









// import { useState } from "react";
// import axios from "axios";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";
// import { Mail, Lock } from "lucide-react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "@/context/AuthContext";
// import Logo from "@/components/ui/logo";

// const baseURL = import.meta.env.VITE_API_BASE_URL;

// const LoginForm = () => {
//   const { toast } = useToast();
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.email || !formData.password) {
//       toast({ title: "All fields are required", variant: "destructive" });
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await axios.post(`${baseURL}/api/auth/login`, formData);
//       const { user } = res.data;
//       login(user.email, user.isAdmin);
//       toast({
//         title: "Login Successful",
//         description: `Welcome, ${user.name}`,
//       });
//       navigate("/career");
//     } catch (err: any) {
//       toast({
//         title: "Login Failed",
//         description: err.response?.data?.message || "Something went wrong",
//         variant: "destructive",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="pt-24 pb-8">
//       <Card className="max-w-md mx-auto p-6 shadow-xl border border-gray-300 rounded-2xl">
//         <CardHeader className="text-center">
//           <div className="flex justify-center mb-2">
//             <Logo size="md" showText={false} className="w-16 h-16" />
//           </div>
//           <CardTitle className="text-2xl">Login</CardTitle>
//           <CardDescription>Login to your Sisuni Tech account</CardDescription>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label htmlFor="email">Email</Label>
//               <div className="relative mt-1">
//                 <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
//                 <Input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="you@example.com"
//                   className="pl-10"
//                 />
//               </div>
//             </div>

//             <div>
//               <Label htmlFor="password">Password</Label>
//               <div className="relative mt-1">
//                 <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
//                 <Input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="••••••••"
//                   className="pl-10"
//                 />
//               </div>
//             </div>

//             <Button type="submit" className="w-full" disabled={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </Button>

//             <p className="mt-4 text-center text-sm text-gray-600">
//               New here?{" "}
//               <Link to="/signup" className="text-purple-600 hover:text-purple-800 font-medium">
//                 Create an account
//               </Link>
//             </p>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default LoginForm;



import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/ui/logo";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/context/firebase";

const LoginForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const isAdminEmail = (email: string) =>
    email.toLowerCase() === "contactus@sisunitech.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast({ title: "All fields are required", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;
      const email = user.email || "";
      const isAdmin = isAdminEmail(email);

      login(email, isAdmin);

      toast({
        title: "Login Successful",
        description: `Welcome, ${user.displayName || email}`,
      });

      navigate("/career");
    } catch (err: any) {
      toast({
        title: "Login Failed",
        description: err.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-md mx-auto px-4 py-20">
        <Card className="shadow-tech border-purple-200">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Logo size="lg" showText={false} className="w-30 h-30" />
            </div>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription className="text-muted-foreground">
              Login to your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-purple-700">
                  Email Address
                </Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="pl-10 border-purple-200 focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password" className="text-purple-700">
                  Password
                </Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="pl-10 pr-10 border-purple-200 focus:border-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-purple-400 hover:text-purple-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;





