import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, Play, Sparkles, Zap } from "lucide-react";
import CubeScene from "@/components/3d/CubeScene";
import FloatingElements from "@/components/3d/FloatingElements";
import MagneticButton from "@/components/ui/magnetic-button";
import AnimatedCounter from "@/components/ui/animated-counter";
import ScrollReveal from "@/components/ui/scroll-reveal";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <FloatingElements className="opacity-40" />
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Text content */}
        <ScrollReveal direction="left">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              Building Digital Futures Since 2024
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white mb-2 animate-fade-in">We Create</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in delay-300">
                Digital Magic
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in delay-500">
              Sisuni Tech delivers cutting-edge web solutions, cybersecurity, IoT automation, 
              and AI/ML services. Empowering businesses with innovative technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16 animate-fade-in delay-700">
              <MagneticButton 
                variant="hero" 
                size="lg" 
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-2xl hover:shadow-purple-500/25"
                asChild
              >
                <Link to="/services" className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-spin-fast" />
                  Explore Services
                </Link>
              </MagneticButton>
              
              <MagneticButton 
                variant="outline" 
                size="lg" 
                className="group border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <Link to="/teddy11" className="flex items-center">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Meet Taddy 11
                </Link>
              </MagneticButton>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in delay-1000">
              <div className="text-center group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={24} suffix="/7" />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Support</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={5} suffix="★" />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Client Rating</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right side - Enhanced 3D Scene */}
        <ScrollReveal direction="right" delay={300}>
          <div className="relative h-[700px] lg:h-[800px]">
            {/* Glowing Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl"></div>
            
            {/* 3D Scene */}
            <CubeScene className="relative z-10" />
            
            {/* Floating Info Cards */}
            <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white animate-float">
              <div className="text-2xl font-bold text-purple-400">AI/ML</div>
              <div className="text-sm opacity-80">Powered Solutions</div>
            </div>
            
            <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white animate-float delay-500">
              <div className="text-2xl font-bold text-blue-400">IoT</div>
              <div className="text-sm opacity-80">Smart Automation</div>
            </div>
            
            <div className="absolute bottom-20 left-6 bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white animate-float delay-1000">
              <div className="text-2xl font-bold text-green-400">24/7</div>
              <div className="text-sm opacity-80">Security</div>
            </div>

            {/* Interactive Hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-sm text-white/70 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 animate-pulse">
                ✨ Click and interact with the cubes!
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;