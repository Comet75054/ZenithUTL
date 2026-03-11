import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Menu, X, ChevronRight, HardHat, ShieldCheck, MapPin, 
  Activity, Zap, FileText, Calendar, ArrowRight, Phone, Mail, Clock
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
                <Activity className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl text-slate-900 tracking-tight">
                ZENITH<span className="text-brand-600">UTILITIES</span>
              </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">About Us</a>
            <a href="#capabilities" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Capabilities</a>
            <a href="#contact" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Contact</a>
            <a href="#contact" className="bg-brand-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-700 transition-colors flex items-center gap-2">
              Client Portal <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-md">About Us</a>
            <a href="#capabilities" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-md">Capabilities</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-md">Contact</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-brand-600 font-medium hover:bg-brand-50 rounded-md">Client Portal</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Map scroll progress to animation values
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0, 0.3, 0.85]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [35, 55]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Move from center to right

  return (
    <div ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888087425-ce81dfc46928?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Directional Drilling Operations" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl xl:max-w-3xl relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-400 font-medium text-sm mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              <span>Next-Generation Trenchless Technology</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-300">Connectivity.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 font-light leading-relaxed max-w-2xl">
              Smart People. Better Decisions. We specialize in the precision installation of underground utility infrastructure, leveraging data-driven HDD technology for minimal disruption and maximum efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-900/20">
                Request a Consultation <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#capabilities" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-medium text-lg transition-all flex items-center justify-center">
                Explore Capabilities
              </a>
            </div>
          </motion.div>

          {/* Vermeer 23x30 Image Placement with Scroll Animation */}
          <motion.div
            style={{ opacity, x, rotateY }}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-lg xl:max-w-xl z-0"
          >
            <div className="relative">
              {/* 3D Lighting/Glow Effect behind the machine */}
              <div className="absolute inset-0 bg-brand-500/30 blur-[80px] rounded-full transform scale-90"></div>
              <div className="absolute -inset-10 bg-emerald-500/10 blur-[100px] rounded-full"></div>
              
              <img 
                src="/vermeer.png" 
                alt="Vermeer 23x30 Directional Drill" 
                className="relative w-full h-auto object-contain z-10 
                           drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] 
                           contrast-125 saturate-110 brightness-105"
                style={{ 
                  transformStyle: 'preserve-3d'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              A Forward-Thinking, Technology-Based Construction Firm
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Zenith Utilities, we don't just dig. We engineer pathways for the future. Our reputation is built on a foundation of precision, utilizing the latest in trenchless technology to deliver complex fiber optic networks in the most challenging environments.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Strategic Footprint</h4>
                  <p className="text-slate-600">Operating from our new Dallas headquarters at 5473 Blair Rd, we are positioned to serve enterprise clients across the region with rapid deployment capabilities.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Zero-Incident Commitment</h4>
                  <p className="text-slate-600">Safety isn't a buzzword; it's our operating system. We strictly adhere to "811 Call Before You Dig" protocols and utilize non-destructive vacuum excavation (potholing) to guarantee a secure work environment.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Construction Safety" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <HardHat className="w-8 h-8 text-brand-600" />
                <span className="text-3xl font-bold text-slate-900">100%</span>
              </div>
              <p className="text-sm font-medium text-slate-600">Utility verification compliance on every single project.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const features = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Trenchless Technology (HDD)",
      description: "Horizontal Directional Drilling allows us to install fiber beneath roads, waterways, and urban environments without surface disruption or costly restorations."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Advanced Equipment Fleet",
      description: "Utilizing right-sized, high-power equipment like the Vermeer D23x30 S3, delivering 24,000 lbs of thrust to navigate challenging conditions compactly."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Precision Tracking & Navigation",
      description: "No 'intuitive' drilling. We use walk-over electronic locating systems (DigiTrak Falcon F2/F5+) to continuously monitor depth, pitch, and orientation in real-time."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "As-Built Documentation",
      description: "Professional 'Log-While-Drilling' (LWD) reports. Cloud-based data provides rod-by-rod visualizations, GPS coordinates, and utility annotations."
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Core Capabilities</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Fiber Optic Conduit Installation</h3>
          <p className="text-lg text-slate-600">
            We pull heavily from our technical expertise to build trust with enterprise clients, ensuring every installation is precise, documented, and flawless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleScheduleSubmit = () => {
    if (!selectedDate || !selectedTime) return;
    setIsSubmitting(true);
    // Simulate API call to Google Workspace Calendar
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 1500);
  };

  // Generate next 5 business days for the mock calendar
  const getNextDays = () => {
    const days = [];
    let currentDate = new Date();
    while (days.length < 5) {
      currentDate.setDate(currentDate.getDate() + 1);
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        days.push(new Date(currentDate));
      }
    }
    return days;
  };

  const availableDays = getNextDays();
  const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          
          <div className="lg:col-span-2">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Get Started</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Request a Meeting</h3>
            <p className="text-lg text-slate-600 mb-8">
              Ready to discuss your next infrastructure project? Book a site visit, bid review, or initial consultation with our project managers.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Headquarters</h4>
                  <p className="text-slate-600">5473 Blair Rd Ste 100 PMB 741156<br/>Dallas, TX, 75231-4227</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-brand-600" />
                <div>
                  <h4 className="font-semibold text-slate-900">Phone</h4>
                  <p className="text-slate-600">(214) 233-5604</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-brand-600" />
                <div>
                  <h4 className="font-semibold text-slate-900">Email</h4>
                  <p className="text-slate-600">info@zenithutilities.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-600" /> Operating Hours
              </h4>
              <p className="text-slate-600 text-sm">Monday - Friday: 7:00 AM - 6:00 PM<br/>Emergency Services: 24/7</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 overflow-hidden relative min-h-[600px]">
              
              {/* Step 1: Intake Form */}
              <motion.div 
                initial={false}
                animate={{ 
                  x: step === 1 ? 0 : '-100%', 
                  opacity: step === 1 ? 1 : 0,
                  pointerEvents: step === 1 ? 'auto' : 'none'
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 p-8 overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold text-slate-900">Project Intake Form</h4>
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Step 1 of 2</span>
                </div>
                <form className="space-y-6" onSubmit={handleIntakeSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Location / Address</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="City, State or specific address" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Estimated Bore Length (ft)</label>
                      <input type="number" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="e.g. 500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Required Pipe Diameter</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white">
                        <option>Select diameter...</option>
                        <option>2" Conduit</option>
                        <option>4" Conduit</option>
                        <option>Multiple Conduits</option>
                        <option>Other / Unsure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Additional Details</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none" placeholder="Soil conditions, timeline, etc..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-slate-900 text-white font-medium py-4 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" /> Continue to Scheduling
                  </button>
                </form>
              </motion.div>

              {/* Step 2: Google Calendar Scheduling */}
              <motion.div 
                initial={false}
                animate={{ 
                  x: step === 2 ? 0 : step > 2 ? '-100%' : '100%', 
                  opacity: step === 2 ? 1 : 0,
                  pointerEvents: step === 2 ? 'auto' : 'none'
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 p-8 overflow-y-auto bg-white"
              >
                <div className="flex items-center justify-between mb-6">
                  <button onClick={() => setStep(1)} className="text-slate-500 hover:text-slate-900 flex items-center gap-1 text-sm font-medium transition-colors">
                    <ChevronRight className="w-4 h-4 rotate-180" /> Back
                  </button>
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Step 2 of 2</span>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Select a Time</h4>
                  <p className="text-slate-600">Choose a time for your initial consultation via Google Meet.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Date Selection */}
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-600" /> Available Dates
                    </h5>
                    <div className="space-y-2">
                      {availableDays.map((date, i) => {
                        const dateStr = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
                        return (
                          <button
                            key={i}
                            onClick={() => { setSelectedDate(dateStr); setSelectedTime(null); }}
                            className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                              selectedDate === dateStr 
                                ? 'border-brand-500 bg-brand-50 text-brand-700 font-medium' 
                                : 'border-slate-200 hover:border-brand-300 text-slate-700'
                            }`}
                          >
                            {dateStr}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-600" /> Available Times
                    </h5>
                    {selectedDate ? (
                      <div className="space-y-2">
                        {timeSlots.map((time, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedTime(time)}
                            className={`w-full text-center px-4 py-3 rounded-lg border transition-all ${
                              selectedTime === time 
                                ? 'border-brand-500 bg-brand-600 text-white font-medium shadow-md shadow-brand-500/20' 
                                : 'border-slate-200 hover:border-brand-300 text-slate-700'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center p-6 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-sm text-center">
                        Select a date first to see available times.
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button 
                    onClick={handleScheduleSubmit}
                    disabled={!selectedDate || !selectedTime || isSubmitting}
                    className="w-full bg-brand-600 disabled:bg-slate-300 text-white font-medium py-4 rounded-lg hover:bg-brand-700 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Scheduling...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Confirm Appointment <ArrowRight className="w-5 h-5" />
                      </span>
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Step 3: Success / Google Meet Link */}
              <motion.div 
                initial={false}
                animate={{ 
                  x: step === 3 ? 0 : '100%', 
                  opacity: step === 3 ? 1 : 0,
                  pointerEvents: step === 3 ? 'auto' : 'none'
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center bg-white"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-10 h-10 text-emerald-600" />
                </div>
                <h4 className="text-3xl font-bold text-slate-900 mb-4">Meeting Confirmed!</h4>
                <p className="text-lg text-slate-600 mb-8 max-w-md">
                  Your consultation is scheduled for <strong>{selectedDate} at {selectedTime}</strong>. A calendar invitation has been sent to your email.
                </p>
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 w-full max-w-md mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4 text-slate-900 font-semibold">
                    <Zap className="w-5 h-5 text-brand-600" /> Google Meet Details
                  </div>
                  <a 
                    href="#" 
                    className="block w-full bg-white border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all rounded-lg p-4 text-brand-600 font-medium break-all"
                  >
                    meet.google.com/znt-util-mtg
                  </a>
                  <p className="text-sm text-slate-500 mt-4">
                    Click the link above to join the video call at the scheduled time.
                  </p>
                </div>

                <button 
                  onClick={() => {
                    setStep(1);
                    setSelectedDate(null);
                    setSelectedTime(null);
                  }}
                  className="text-slate-600 font-medium hover:text-brand-600 transition-colors"
                >
                  Schedule another meeting
                </button>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <Activity className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                ZENITH<span className="text-brand-600">UTILITIES</span>
              </span>
            </div>
            <p className="max-w-sm mb-6">
              Building the future of connectivity with smart people and better decisions. Precision underground utility infrastructure.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#capabilities" className="hover:text-brand-400 transition-colors">Capabilities</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Client Portal Login</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Subcontractor Portal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Safety Protocols</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Zenith Utilities LLC. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm">
            <span>Designed for Enterprise Connectivity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
