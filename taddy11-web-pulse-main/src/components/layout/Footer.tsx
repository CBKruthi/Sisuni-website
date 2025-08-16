import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <ScrollReveal direction="up">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Logo size="md" showText={true} />
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Building digital futures with innovative web solutions, cybersecurity, 
                IoT automation, and AI/ML services. Home of Taddy11 - the ultimate 
                skill-based rummy experience.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <a
                  href="mailto:contact@sisuni.tech"
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>Contactus@sisunitech.com</span>
                </a>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div>+91 9900086862</div>
                    <div>+91 9900086863</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center mt-1">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="text-sm leading-relaxed">
                    No.45/b, Subham Complex, 1st A Main 2nd Floor,<br />
                    JP Nagar 3rd Phase, Bangalore, Karnataka 560078
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" delay={200}>
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Taddy11", path: "/teddy11" },
                  { name: "Contact", path: "/contact" },
                  { name: "Career", path: "/career" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal direction="up" delay={400}>
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                Our Services
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Web Development</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Cybersecurity</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">IoT Solutions</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">AI & Machine Learning</li>
              </ul>
              
              {/* Newsletter Signup */}
              <div className="mt-8 p-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-lg border border-white/10">
                <h4 className="font-medium mb-2">Stay Updated</h4>
                <p className="text-sm text-gray-400 mb-3">Get the latest tech insights</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter email"
                    className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-purple-400 transition-colors"
                  />
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-500">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Section */}
        <ScrollReveal direction="up" delay={600}>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sisuni Tech Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                All systems operational
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;