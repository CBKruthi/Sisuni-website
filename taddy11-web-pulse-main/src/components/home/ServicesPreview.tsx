import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Shield, Cpu, Brain, ArrowRight } from "lucide-react";
import InteractiveCard from "@/components/ui/interactive-card";
import ScrollReveal from "@/components/ui/scroll-reveal";
import MagneticButton from "@/components/ui/magnetic-button";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and responsive design.",
    gradient: "from-blue-500 to-cyan-500",
    features: ["React & Node.js", "Cloud Deployment", "API Integration"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    gradient: "from-red-500 to-pink-500",
    features: ["Penetration Testing", "Security Audits", "Compliance"]
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Smart automation systems that connect and optimize your business processes.",
    gradient: "from-green-500 to-emerald-500",
    features: ["Smart Automation", "Sensor Integration", "Real-time Analytics"]
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that learn and adapt to enhance your business efficiency.",
    gradient: "from-purple-500 to-indigo-500",
    features: ["Predictive Analytics", "NLP", "Computer Vision"]
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Our Expertise
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Comprehensive <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we deliver end-to-end technology solutions 
              that transform businesses and create exceptional digital experiences.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 200}>
              <InteractiveCard className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                <div className="p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-2xl group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </InteractiveCard>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={800}>
          <div className="text-center">
            <MagneticButton 
              variant="hero" 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-2xl hover:shadow-purple-500/25"
              asChild
            >
              <Link to="/services" className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                View All Services
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesPreview;