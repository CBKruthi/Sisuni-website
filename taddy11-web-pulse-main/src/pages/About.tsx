import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Rocket, Shield, Code, Brain } from "lucide-react";
import FloatingElements from "@/components/3d/FloatingElements";
import ScrollReveal from "@/components/ui/scroll-reveal";
import InteractiveCard from "@/components/ui/interactive-card";
import AnimatedCounter from "@/components/ui/animated-counter";
import MagneticButton from "@/components/ui/magnetic-button";

const About = () => {
  return (
    <div className="min-h-screen pt-20 relative bg-slate-900">
      <FloatingElements className="opacity-20" count={30} />
      
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8">
                <Rocket className="w-4 h-4 mr-2" />
                Our Story
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 text-white">
                About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Sisuni Tech</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We are a passionate team of technologists dedicated to building innovative 
                solutions that transform businesses and create meaningful digital experiences 
                that shape the future.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-8 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Rocket className="w-6 h-6" />
                  </div>
                  Our Journey
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Founded in 2024, Sisuni Tech Pvt Ltd emerged from a vision to bridge the gap 
                    between traditional business practices and cutting-edge technology. Our journey 
                    began with a simple belief: that every business deserves access to world-class 
                    digital solutions.
                  </p>
                  <p className="text-lg">
                    Starting as a small team of passionate developers and cybersecurity experts, 
                    we have grown into a comprehensive technology partner, serving clients across 
                    various industries with innovative web applications, robust security solutions, 
                    and intelligent automation systems.
                  </p>
                  <p className="text-lg">
                    Today, we're proud to be the creators of Taddy11, our flagship gaming product 
                    that showcases our commitment to excellence and innovation in the digital entertainment space.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300}>
              <InteractiveCard className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">Company Milestones</h3>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center group">
                      <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                        2024
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Founded</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                        <AnimatedCounter end={50} suffix="+" />
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">
                        <AnimatedCounter end={100} suffix="%" />
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Client Satisfaction</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform">
                        24/7
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Support</div>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-32 bg-gradient-to-b from-transparent to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 text-white">Our Foundation</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do and drive our innovation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <ScrollReveal delay={200}>
              <InteractiveCard className="text-center bg-gradient-to-br from-purple-600/10 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 h-full">
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    To empower businesses with innovative technology solutions that drive growth, 
                    enhance security, and create exceptional user experiences in the digital age.
                  </CardDescription>
                </CardContent>
              </InteractiveCard>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal delay={400}>
              <InteractiveCard className="text-center bg-gradient-to-br from-blue-600/10 to-blue-800/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 h-full">
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    To be India's leading technology partner, recognized for delivering 
                    world-class digital solutions and pioneering the future of interactive entertainment.
                  </CardDescription>
                </CardContent>
              </InteractiveCard>
            </ScrollReveal>

            {/* Values */}
            <ScrollReveal delay={600}>
              <InteractiveCard className="text-center bg-gradient-to-br from-green-600/10 to-green-800/10 backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 transition-all duration-500 h-full">
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    Innovation, integrity, excellence, and client success. We believe in 
                    building lasting relationships through trust, transparency, and exceptional service.
                  </CardDescription>
                </CardContent>
              </InteractiveCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 text-white">What Makes Us Different</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our unique approach to technology and client relationships sets us apart
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                {[
                  {
                    icon: Code,
                    title: "End-to-End Solutions",
                    description: "From concept to deployment, we handle every aspect of your digital transformation journey with precision and care."
                  },
                  {
                    icon: Shield,
                    title: "Security First",
                    description: "Every solution we build incorporates best-in-class security practices and cybersecurity expertise from the ground up."
                  },
                  {
                    icon: Brain,
                    title: "Innovation Driven",
                    description: "We stay ahead of technology trends to provide you with cutting-edge solutions that give you a competitive advantage."
                  }
                ].map((item, index) => (
                  <div key={item.title} className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300}>
              <InteractiveCard className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-white/20 shadow-2xl h-full">
                <div className="p-10 text-center h-full flex flex-col justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-2xl">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Ready to Work With Us?</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Join hundreds of satisfied clients who trust Sisuni Tech with their digital transformation journey.
                  </p>
                  <MagneticButton 
                    variant="hero" 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-2xl"
                    asChild
                  >
                    <Link to="/contact">
                      Start Your Project
                    </Link>
                  </MagneticButton>
                </div>
              </InteractiveCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gradient-to-b from-transparent to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 text-white">Our Expertise</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A diverse team of experts passionate about technology and innovation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: "Full-Stack Developers", count: 15 },
              { icon: Shield, title: "Security Experts", count: 8 },
              { icon: Brain, title: "AI/ML Engineers", count: 6 },
              { icon: Users, title: "Project Managers", count: 4 }
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 150}>
                <InteractiveCard className="text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      <AnimatedCounter end={item.count} suffix="+" />
                    </div>
                    <h3 className="text-white font-medium">{item.title}</h3>
                  </div>
                </InteractiveCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;