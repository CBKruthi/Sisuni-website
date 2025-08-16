import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut, Sparkles } from "lucide-react";
import Logo from "@/components/ui/logo";
import { useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isLoggedIn, userEmail, isAdmin, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Teddy11", path: "/teddy11" },
    { name: "Contact", path: "/contact" },
    { name: "Career", path: "/career" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <Logo size="md" showText={true} />
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 rounded-lg group ${
                  isActive(item.path)
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/30"></div>
                )}
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    <User className="h-4 w-4 mr-2" />
                    <span className="max-w-24 truncate">{userEmail?.split("@")[0]}</span>
                    <Sparkles className="h-3 w-3 ml-2 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-slate-800/95 backdrop-blur-xl border border-white/10 text-white">
                  {!isAdmin && (
                     <DropdownMenuItem asChild className="hover:bg-white/10">
                        <Link to="/my-applications" className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                           My Applications
                        </Link>
                     </DropdownMenuItem>
                  )}

                  {isAdmin && (
                    <DropdownMenuItem asChild className="hover:bg-white/10">
                      <Link to="/admin" className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        Admin Dashboard
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem
                    onClick={() => {
                     logout();
                     navigate("/");
                    }}
                   className="text-red-400 hover:bg-red-500/10"
                  >
                  <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex space-x-3 ml-4">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                  asChild
                >
                  <Link to="/login">Login</Link>
                </Button>
                <Button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg hover:shadow-purple-500/25"
                  asChild
                >
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-purple-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                    isActive(item.path)
                      ? "text-purple-400 bg-purple-500/20 border border-purple-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 space-y-3">
                {isLoggedIn ? (
                  <div className="space-y-2">
                    {!isAdmin && (
                        <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10" asChild>
                           <Link to="/my-applications" onClick={() => setIsMobileMenuOpen(false)}>
                              My Applications
                           </Link>
                        </Button>
                    )}
                    {isAdmin && (
                      <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10" asChild>
                        <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                          Admin Dashboard
                        </Link>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-red-400 border-red-400/30 hover:bg-red-500/10"
                      onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                      navigate("/");
                    }}
                    >
                    Logout
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-white/20 text-white hover:bg-white/10"
                      asChild
                    >
                      <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                        Login
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600"
                      asChild
                    >
                      <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                        Sign Up
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;