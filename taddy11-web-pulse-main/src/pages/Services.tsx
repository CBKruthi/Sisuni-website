import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Shield, Cpu, Brain, CheckCircle, ArrowRight, Zap, Star } from "lucide-react";
import FloatingElements from "@/components/3d/FloatingElements";
import ParticleField from "@/components/3d/ParticleField";
import ScrollReveal from "@/components/ui/scroll-reveal";
import InteractiveCard from "@/components/ui/interactive-card";
import MagneticButton from "@/components/ui/magnetic-button";
import AnimatedCounter from "@/components/ui/animated-counter";

const services = [
  {
    icon: Code,
    title: "Custom Web Application Development",
    description: "Full-stack web applications built with modern technologies and cutting-edge frameworks",
    features: [
      "React.js & Node.js Development",
      "Responsive & Mobile-First Design",
      "Database Integration (MongoDB, PostgreSQL)",
      "API Development & Integration",
      "Cloud Deployment (AWS, Vercel, Hostinger)",
      "Performance Optimization & SEO"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript"],
    gradient: "from-blue-500 to-cyan-500",
    stats: { projects: 25, satisfaction: 98, support: 24 }
  },
  {
    icon: Shield,
    title: "Cybersecurity Projects & Solutions",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure",
    features: [
      "Security Audits & Penetration Testing",
      "Network Security Implementation",
      "Data Encryption & Protection",
      "Compliance Management (GDPR, ISO 27001)",
      "Incident Response Planning",
      "Security Awareness Training"
    ],
    technologies: ["Firewall", "VPN", "SIEM", "Encryption", "Threat Detection", "Compliance"],
    gradient: "from-red-500 to-pink-500",
    stats: { projects: 15, satisfaction: 100, support: 24 }
  },
  {
    icon: Cpu,
    title: "IoT-based Projects & Automation",
    description: "Smart automation systems that connect and optimize your business processes",
    features: [
      "Smart Home & Office Automation",
      "Industrial IoT Solutions",
      "Sensor Integration & Monitoring",
      "Real-time Data Analytics",
      "Mobile App Control Interfaces",
      "Cloud-based Device Management"
    ],
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "LoRaWAN", "Cloud IoT", "Edge Computing"],
    gradient: "from-green-500 to-emerald-500",
    stats: { projects: 20, satisfaction: 95, support: 24 }
  },
  {
    icon: Brain,
    title: "AI and Machine Learning Services",
    description: "Intelligent solutions that learn and adapt to enhance your business efficiency",
    features: [
      "Predictive Analytics & Forecasting",
      "Natural Language Processing",
      "Computer Vision Applications",
      "Recommendation Systems",
      "Chatbots & Virtual Assistants",
      "Machine Learning Model Development"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "MLOps"],
    gradient: "from-purple-500 to-indigo-500",
    stats: { projects: 12, satisfaction: 97, support: 24 }
  }
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20 relative bg-slate-900">
      <ParticleField className="opacity-30" particleCount={200} />
      
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative">
        <FloatingElements className="opacity-15" count={20} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8">
                <Zap className="w-4 h-4 mr-2" />
                Our Expertise
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 text-white">
                Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Comprehensive technology solutions designed to transform your business 
                and accelerate your digital journey with cutting-edge innovation
              </p>
              <div className="animate-bounce">
                <ArrowRight className="h-6 w-6 text-gray-400 mx-auto rotate-90" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`w-20 h-20 mb-8 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-2xl`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-6 text-white">{service.title}</h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
                        <Star className="w-5 h-5 mr-2 text-yellow-400" />
                        Key Features:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-3 group">
                            <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-10">
                      <h3 className="text-lg font-semibold mb-4 text-white">Technologies:</h3>
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <MagneticButton 
                      variant="hero" 
                      size="lg" 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-2xl"
                      asChild
                    >
                      <Link to="/contact" className="flex items-center">
                        <Zap className="w-5 h-5 mr-2" />
                        Get a Quote
                      </Link>
                    </MagneticButton>
                  </div>
                </ScrollReveal>

                {/* Enhanced Visual Card */}
                <ScrollReveal direction={index % 2 === 0 ? "right" : "left"} delay={300}>
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <InteractiveCard className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden">
                      <div className="p-8">
                        {/* Header */}
                        <div className="text-center mb-8">
                          <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-2xl`}>
                            <service.icon className="h-12 w-12 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.title.split(' ')[0]}</h3>
                          <p className="text-gray-400">Excellence in Every Project</p>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 text-center">
                          <div className="group">
                            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                              <AnimatedCounter end={service.stats.projects} suffix="+" />
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
                          </div>
                          <div className="group">
                            <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                              <AnimatedCounter end={service.stats.satisfaction} suffix="%" />
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Success Rate</div>
                          </div>
                          <div className="group">
                            <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">
                              {service.stats.support}/7
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Support</div>
                          </div>
                        </div>
                        
                        {/* Progress Bars */}
                        <div className="mt-8 space-y-4">
                          <div>
                            <div className="flex justify-between text-sm text-gray-400 mb-2">
                              <span>Quality</span>
                              <span>98%</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                              <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full w-[98%] animate-pulse"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm text-gray-400 mb-2">
                              <span>Innovation</span>
                              <span>95%</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-[95%] animate-pulse delay-300"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </InteractiveCard>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-32 bg-gradient-to-b from-transparent to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional value through our comprehensive approach and commitment to excellence
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assured",
                description: "Rigorous testing and quality control processes ensure reliable, bug-free solutions that exceed expectations.",
                icon: CheckCircle,
                color: "purple"
              },
              {
                title: "Scalable Solutions",
                description: "Built to grow with your business, our solutions can handle increased load and evolving requirements.",
                icon: Zap,
                color: "blue"
              },
              {
                title: "Ongoing Support",
                description: "Continuous monitoring, maintenance, and support to ensure optimal performance and security.",
                icon: Star,
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

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 rounded-3xl p-16 text-center text-white shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-2xl">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project and find the perfect solution for your needs. 
                Transform your business with our innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <MagneticButton 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-slate-900 hover:bg-gray-100 shadow-xl"
                  asChild
                >
                  <Link to="/contact">
                    Get Free Consultation
                  </Link>
                </MagneticButton>
                <MagneticButton 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/about">
                    Learn More About Us
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

export default Services;