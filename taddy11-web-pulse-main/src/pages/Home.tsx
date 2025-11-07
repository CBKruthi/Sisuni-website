import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, CheckCircle, Users, Gamepad2, Trophy, Zap, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import InteractiveCard from "@/components/ui/interactive-card";
import MagneticButton from "@/components/ui/magnetic-button";
import AnimatedCounter from "@/components/ui/animated-counter";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection />
      <ServicesPreview />
      
      {/* Enhanced Taddy11 Highlight Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="text-white">
                <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8">
                  <Gamepad2 className="w-4 h-4 mr-2" />
                  Our Flagship Product
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                  Meet <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Taddy11</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Our flagship product - a revolutionary skill-based rummy game that combines traditional 
                  card game excitement with modern technology, real-money rewards, and an unparalleled gaming experience.
                </p>
                
                <div className="space-y-4 mb-10">
                  {[
                    "Advanced skill-based gameplay algorithms",
                    "Secure real-money tournaments",
                    "Fair play guarantee with AI monitoring",
                    "Cross-platform compatibility",
                    "Real-time multiplayer experience"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3 group">
                      <CheckCircle className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <MagneticButton 
                  variant="hero" 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-2xl"
                  asChild
                >
                  <Link to="/teddy11" className="flex items-center">
                    <Rocket className="w-5 h-5 mr-2" />
                    Discover Taddy11
                  </Link>
                </MagneticButton>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300}>
              <InteractiveCard className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden">
                <div className="p-10 text-center relative">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 animate-gradient-shift"></div>
                  
                  <div className="relative z-10">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl animate-glow-pulse">
                      <span className="text-white text-4xl font-bold">T11</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">Taddy11</h3>
                    <p className="text-purple-400 mb-8 text-lg font-medium">Coming Soon to App Stores</p>
                    
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="text-center group">
                        <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                          <AnimatedCounter end={1000} suffix="+" />
                        </div>
                        <div className="text-sm text-gray-400 uppercase tracking-wider">Beta Players</div>
                      </div>
                      <div className="text-center group">
                        <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                          4.8★
                        </div>
                        <div className="text-sm text-gray-400 uppercase tracking-wider">Rating</div>
                      </div>
                      <div className="text-center group">
                        <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">
                          ₹10L+
                        </div>
                        <div className="text-sm text-gray-400 uppercase tracking-wider">Prize Pool</div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                      asChild
                    >
                      <Link to="/teddy11">
                        <Trophy className="w-4 h-4 mr-2" />
                        Join Beta Program
                      </Link>
                    </Button>
                  </div>
                </div>
              </InteractiveCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-32 bg-gradient-to-b from-transparent to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Sisuni Tech</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We combine innovation, expertise, and dedication to deliver exceptional results 
                that drive your business forward in the digital age
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Expert Team",
                description: "Skilled professionals with years of experience in cutting-edge technologies and industry best practices",
                color: "purple"
              },
              {
                icon: CheckCircle,
                title: "Quality Assured",
                description: "Rigorous testing and quality control ensure reliable, secure solutions that exceed expectations",
                color: "blue"
              },
              {
                icon: Users,
                title: "Client-Focused",
                description: "Dedicated support and personalized solutions tailored to your unique business needs and goals",
                color: "green"
              }
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 200}>
                <InteractiveCard className="text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 h-full">
                  <div className="p-8">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${
                      item.color === 'purple' ? 'from-purple-600 to-purple-800' :
                      item.color === 'blue' ? 'from-blue-600 to-blue-800' :
                      'from-green-600 to-green-800'
                    } flex items-center justify-center shadow-2xl`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </InteractiveCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 rounded-3xl p-16 text-center text-white shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-2xl">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Join the digital revolution and unlock your business potential with our innovative solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <MagneticButton 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-slate-900 hover:bg-gray-100 shadow-xl"
                  asChild
                >
                  <Link to="/contact">
                    Start Your Project
                  </Link>
                </MagneticButton>
                <MagneticButton 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/services">
                    Explore Services
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;