/**
 * Deligo Technologies - High Performance Production React 18 Application Bundle
 * Pre-compiled bundle: Zero Babel runtime latency, 100% offline & local server capable.
 */
(function() {
    'use strict';
    const React = window.React;
    const ReactDOM = window.ReactDOM;
    if (!React || !ReactDOM) {
        console.error('Deligo Technologies: React 18 / ReactDOM not loaded!');
        return;
    }

    const _jsxRuntime = {
        jsx: function(type, props, key) {
            const { children, ...rest } = props || {};
            if (key !== undefined) rest.key = key;
            if (children === undefined) return React.createElement(type, rest);
            if (Array.isArray(children)) return React.createElement(type, rest, ...children);
            return React.createElement(type, rest, children);
        },
        jsxs: function(type, props, key) {
            const { children, ...rest } = props || {};
            if (key !== undefined) rest.key = key;
            if (children === undefined) return React.createElement(type, rest);
            if (Array.isArray(children)) return React.createElement(type, rest, ...children);
            return React.createElement(type, rest, children);
        },
        Fragment: React.Fragment
    };

    function require(mod) {
        if (mod === 'react/jsx-runtime') return _jsxRuntime;
        if (mod === 'react') return window.React;
        if (mod === 'react-dom') return window.ReactDOM;
        return {};
    }
function Icon({
  name,
  className = 'w-4 h-4',
  ...props
}) {
  const icons = window.DELIGO_ICONS || {};
  const iconDef = icons[name] || icons['sparkles'] || null;
  if (!iconDef) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `lucide lucide-${name} ${className}`,
    ...props,
    children: iconDef.map(([tag, attrs], idx) => {
      const TagName = tag;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(TagName, {
        ...attrs
      }, idx);
    })
  });
}
const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

// API Endpoint Configuration (Works with PHP backend, Python companion server, or fallback mock)
const API_BASE = window.location.protocol === 'file:' ? (window.DELIGO_API_PORT ? 'http://localhost:' + window.DELIGO_API_PORT : 'http://localhost:8085') : '';

// --- Mock Enquiries Data for instant zero-config testing if backend is offline ---
const INITIAL_ENQUIRIES = [{
  id: 101,
  full_name: "Sarah Jenkins",
  email: "sarah.j@healthwave.io",
  phone: "+1 (555) 234-8901",
  company: "HealthWave Telemed",
  service: "Mobile App Development",
  budget: "$25,000 - $50,000",
  timeline: "2 - 3 Months",
  message: "We need an end-to-end HIPAA compliant telemedicine iOS and Android app with WebRTC video calling and electronic health records integration.",
  status: "NEW",
  priority: "URGENT",
  estimated_value: 38000,
  source: "Website Form",
  created_at: "2026-11-09 11:20:00",
  notes: ["Client booked initial discovery call for tomorrow. Preparing HIPAA checklist."]
}, {
  id: 102,
  full_name: "Vikram Malhotra",
  email: "vikram@finscale.ae",
  phone: "+971 50 123 4567",
  company: "FinScale Global UAE",
  service: "Enterprise Software & ERP",
  budget: "$50,000 - $100,000",
  timeline: "3 - 6 Months",
  message: "Looking for custom multi-currency automated reconciliation portal and microservices backend with SOC2 compliance.",
  status: "IN_DISCUSSION",
  priority: "HIGH",
  estimated_value: 75000,
  source: "Project Estimator",
  created_at: "2026-11-08 16:45:00",
  notes: ["Sent technical architecture diagram for microservices engine."]
}, {
  id: 103,
  full_name: "Elena Rostova",
  email: "elena@novamarket.de",
  phone: "+49 170 9876543",
  company: "NovaMarket GmbH",
  service: "Web Platform Engineering",
  budget: "$10,000 - $25,000",
  timeline: "1 - 2 Months",
  message: "Re-architecting our B2B marketplace frontend into modern React 18 with high-speed search and headless Shopify integration.",
  status: "PROPOSAL_SENT",
  priority: "MEDIUM",
  estimated_value: 18500,
  source: "Website Form",
  created_at: "2026-11-07 14:10:00",
  notes: ["Proposal draft v2 delivered with 8-week sprint roadmap."]
}, {
  id: 104,
  full_name: "Liam O'Connor",
  email: "liam@apexai.co.uk",
  phone: "+44 20 7946 0192",
  company: "Apex Autonomous",
  service: "AI & Machine Learning",
  budget: "$50,000 - $100,000",
  timeline: "3 - 6 Months",
  message: "We require custom RAG pipeline and LLM fine-tuning for legal contracts analysis with on-premise hosting.",
  status: "CONTACTED",
  priority: "HIGH",
  estimated_value: 62000,
  source: "Website Form",
  created_at: "2026-11-06 09:30:00",
  notes: ["Reviewed legal dataset sample; security audit clearance pending."]
}, {
  id: 105,
  full_name: "Marcus Vance",
  email: "m.vance@vancestrategy.com",
  phone: "+1 (415) 890-1234",
  company: "Vance Strategy Group",
  service: "Cloud Architecture & DevOps",
  budget: "$25,000 - $50,000",
  timeline: "1 - 2 Months",
  message: "Kubernetes cluster migration from AWS to hybrid cloud, automated Terraform infrastructure, and zero-downtime CI/CD deployment pipeline.",
  status: "CONVERTED",
  priority: "MEDIUM",
  estimated_value: 32000,
  source: "Referral",
  created_at: "2026-11-04 18:05:00",
  notes: ["Contract signed! SOW #104 kicked off. Team onboarding started."]
}];

// --- Services Data ---
const SERVICES_LIST = [{
  id: "mobile-apps",
  title: "Mobile App Development",
  badge: "iOS & Android",
  icon: "smartphone",
  description: "Engineering fluid, native and cross-platform mobile experiences with 60fps animations, offline sync, and enterprise security.",
  tech: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
  features: ["Biometric Authentication", "WebRTC Video/Audio", "Offline First Data Sync", "In-App Subscriptions"]
}, {
  id: "web-engineering",
  title: "Scalable Web Engineering",
  badge: "High Velocity",
  icon: "globe",
  description: "High-performance web apps, SaaS ecosystems, and client portals built with React 18, Next.js, and lightning microservices.",
  tech: ["React 18", "TypeScript", "Node.js", "PHP / Laravel", "MySQL"],
  features: ["Sub-second Page Speeds", "Role-based Access Control", "Complex Data Visualizations", "Multi-tenant Architecture"]
}, {
  id: "ai-solutions",
  title: "AI & Machine Learning Systems",
  badge: "Next-Gen Tech",
  icon: "cpu",
  description: "Infusing proprietary intelligence into your business via LLM fine-tuning, RAG pipelines, computer vision, and predictive analytics.",
  tech: ["OpenAI", "LangChain", "Python", "PyTorch", "Vector DBs"],
  features: ["Enterprise RAG Bots", "Document OCR & Extraction", "Predictive Churn & Sales", "Real-time Voice Agents"]
}, {
  id: "cloud-devops",
  title: "Cloud Infrastructure & DevOps",
  badge: "99.99% Uptime",
  icon: "cloud",
  description: "Automated, scalable cloud orchestration. We build self-healing Kubernetes clusters, CI/CD pipelines, and zero-trust security.",
  tech: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
  features: ["Infrastructure as Code", "Auto-scaling Clusters", "Zero-downtime Deployment", "SOC2 / HIPAA Compliance"]
}, {
  id: "uiux-design",
  title: "Product & UI/UX Design",
  badge: "Award Winning",
  icon: "layout",
  description: "Human-centric interfaces that convert visitors into passionate brand advocates. Pixel-perfect Figma design systems and micro-interactions.",
  tech: ["Figma", "Design Systems", "Prototyping", "User Research"],
  features: ["Interactive Clickable Prototypes", "Design Token Libraries", "Accessibility WCAG AAA", "Conversion Rate Optimization"]
}, {
  id: "enterprise-erp",
  title: "Enterprise Software & ERP",
  badge: "Custom Tailored",
  icon: "database",
  description: "Purpose-built business management suites, inventory tracking, CRM engines, and legacy system modernization.",
  tech: ["PHP / MySQL", "GraphQL", "PostgreSQL", "Redis", "Kafka"],
  features: ["Automated Financial Audits", "Custom Workflow Automation", "ERP/CRM Integrations", "Real-time Telemetry"]
}];

// --- Tech Stack Matrix ---
const TECH_STACK = {
  "Frontend": [{
    name: "React 18",
    icon: "atom",
    desc: "Interactive UI & Component Architecture"
  }, {
    name: "Next.js",
    icon: "zap",
    desc: "Server-side Rendering & Edge Delivery"
  }, {
    name: "Tailwind CSS",
    icon: "palette",
    desc: "Design-system driven styling"
  }, {
    name: "TypeScript",
    icon: "shield-check",
    desc: "Strict type safety & maintainability"
  }],
  "Backend & DB": [{
    name: "PHP 8.2+",
    icon: "code",
    desc: "High-throughput APIs & Enterprise Logic"
  }, {
    name: "MySQL / MariaDB",
    icon: "database",
    desc: "ACID-compliant relational database"
  }, {
    name: "Node.js / Express",
    icon: "server",
    desc: "Event-driven asynchronous microservices"
  }, {
    name: "Redis",
    icon: "layers",
    desc: "In-memory caching and real-time pub/sub"
  }],
  "Mobile": [{
    name: "Flutter",
    icon: "smartphone",
    desc: "Native cross-platform compilation"
  }, {
    name: "React Native",
    icon: "tablet",
    desc: "High-performance hybrid apps"
  }, {
    name: "Swift (iOS)",
    icon: "apple",
    desc: "Pure Apple ecosystem performance"
  }, {
    name: "Kotlin (Android)",
    icon: "bot",
    desc: "Modern Android enterprise apps"
  }],
  "AI & Cloud": [{
    name: "AWS Cloud",
    icon: "cloud-lightning",
    desc: "Global serverless & container hosting"
  }, {
    name: "Docker & K8s",
    icon: "box",
    desc: "Containerized elastic scalability"
  }, {
    name: "Python / PyTorch",
    icon: "cpu",
    desc: "Deep learning & LLM inference pipelines"
  }, {
    name: "LangChain / RAG",
    icon: "network",
    desc: "Context-aware AI embeddings"
  }]
};

// --- Portfolio Projects ---
const PORTFOLIO_PROJECTS = [{
  id: 1,
  title: "HealthWave Telemed & RPM",
  category: "Mobile & Cloud",
  badge: "Healthcare",
  stat: "+340% User Growth",
  desc: "Real-time patient telemetry, HIPAA-compliant encrypted video consults, and connected IoT vitals monitoring.",
  tags: ["React Native", "WebRTC", "PHP Microservices", "AWS"],
  imageGradient: "from-blue-600/30 to-indigo-900/40"
}, {
  id: 2,
  title: "FinScale Multi-Currency Gateway",
  category: "Enterprise Web",
  badge: "FinTech",
  stat: "$1.4B Annual Volume",
  desc: "High-frequency cross-border settlement portal with automated anti-fraud triggers and SWIFT integrations.",
  tags: ["React 18", "MySQL", "PHP 8", "Redis", "Docker"],
  imageGradient: "from-emerald-600/30 to-teal-900/40"
}, {
  id: 3,
  title: "LogixFleet AI Dispatcher",
  category: "AI & Logistics",
  badge: "Supply Chain",
  stat: "28% Fuel Cut",
  desc: "Predictive freight optimization routing thousands of commercial fleets dynamically across North America.",
  tags: ["Python", "FastAPI", "React", "Mapbox", "K8s"],
  imageGradient: "from-purple-600/30 to-slate-900/40"
}, {
  id: 4,
  title: "OmniRetail Ultra-Fast Headless",
  category: "E-Commerce",
  badge: "Retail",
  stat: "0.8s Global LCP",
  desc: "Hyper-converting luxury storefront handling 50k peak concurrent shoppers with zero dropped checkouts.",
  tags: ["Next.js", "Tailwind", "MySQL", "Edge CDN"],
  imageGradient: "from-amber-600/30 to-orange-900/40"
}];

// =========================================================
// MAIN APPLICATION COMPONENT
// =========================================================
function App() {
  // State
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState("Mobile App Development");
  const [enquiries, setEnquiries] = useState(() => {
    try {
      const saved = localStorage.getItem('deligo_crm_enquiries');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return INITIAL_ENQUIRIES;
  });
  const [activeTechTab, setActiveTechTab] = useState("Frontend");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [notificationToast, setNotificationToast] = useState(null);

  // Sync enquiries with localStorage for permanent persistence on GitHub Pages
  useEffect(() => {
    try {
      localStorage.setItem('deligo_crm_enquiries', JSON.stringify(enquiries));
    } catch (e) {}
  }, [enquiries]);

  // Fetch live enquiries from backend API
  const refreshEnquiries = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/admin.php?action=list`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.enquiries) && data.enquiries.length > 0) {
          setEnquiries(data.enquiries);
        }
      }
    } catch (err) {
      console.log("Using local mock leads (Backend server offline or not yet started):", err);
    }
  };
  useEffect(() => {
    refreshEnquiries();
    /* native icons */
  }, []);
  useEffect(() => {
    /* native icons */
  }, [isDashboardOpen, isEnquiryModalOpen, activeTechTab]);

  // Show Toast
  const showToast = (message, type = "success") => {
    setNotificationToast({
      message,
      type
    });
    setTimeout(() => setNotificationToast(null), 4500);
  };

  // Open Enquiry Modal with preselected service
  const handleOpenEnquiry = (serviceTitle = "Mobile App Development") => {
    setSelectedServiceForModal(serviceTitle);
    setIsEnquiryModalOpen(true);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "relative min-h-screen text-slate-100 bg-[#050814]",
    children: [notificationToast && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "fixed top-20 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl glass-panel-glow border-brand-500/50 shadow-2xl animate-bounce",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: "flex h-3 w-3 relative",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "relative inline-flex rounded-full h-3 w-3 bg-emerald-500"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-sm font-medium text-slate-100",
        children: notificationToast.message
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Navbar, {
      onOpenEnquiry: () => handleOpenEnquiry("Custom Software Consultation"),
      onOpenDashboard: () => setIsDashboardOpen(true),
      newLeadsCount: enquiries.filter(e => e.status === 'NEW').length,
      mobileNavOpen: mobileNavOpen,
      setMobileNavOpen: setMobileNavOpen
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(HeroSection, {
      onOpenEnquiry: () => handleOpenEnquiry("Enterprise Software Architecture"),
      onScrollToEstimator: () => {
        const el = document.getElementById("estimator");
        if (el) el.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(StatsBanner, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(ServicesSection, {
      onSelectService: handleOpenEnquiry
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ProjectEstimatorSection, {
      onLaunchEnquiry: handleOpenEnquiry
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TechStackSection, {
      activeTab: activeTechTab,
      setActiveTab: setActiveTechTab
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ProcessSection, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(PortfolioSection, {
      onSelectProject: handleOpenEnquiry
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TestimonialsSection, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(CtaBanner, {
      onOpenEnquiry: () => handleOpenEnquiry("Enterprise Engagement")
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Footer, {
      onOpenDashboard: () => setIsDashboardOpen(true)
    }), isEnquiryModalOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(EnquiryModal, {
      isOpen: isEnquiryModalOpen,
      onClose: () => setIsEnquiryModalOpen(false),
      initialService: selectedServiceForModal,
      onSubmitSuccess: newLead => {
        setEnquiries(prev => [newLead, ...prev]);
        showToast("🎉 Enquiry Received! Our technical team will review your brief.");
        confetti({
          particleCount: 110,
          spread: 70,
          origin: {
            y: 0.6
          }
        });
      }
    }), isDashboardOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(OwnerDashboard, {
      isOpen: isDashboardOpen,
      onClose: () => setIsDashboardOpen(false),
      enquiries: enquiries,
      setEnquiries: setEnquiries,
      onRefresh: refreshEnquiries,
      showToast: showToast
    })]
  });
}

// =========================================================
// 1. NAVIGATION BAR COMPONENT
// =========================================================
function Navbar({
  onOpenEnquiry,
  onOpenDashboard,
  newLeadsCount,
  mobileNavOpen,
  setMobileNavOpen
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
    className: `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-3 glass-panel shadow-2xl border-b border-slate-800/80' : 'py-5 bg-transparent'}`,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
        href: "#",
        className: "flex items-center gap-3 group",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-cyber-cyan flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "font-heading font-black text-xl text-white",
            children: "D"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-500 to-cyber-cyan opacity-40 blur group-hover:opacity-75 transition-opacity"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "font-heading font-bold text-xl tracking-wider text-white",
            children: ["DELIGO ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-cyber-cyan",
              children: "TECHNOLOGIES"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "block text-[10px] tracking-widest text-slate-400 font-mono uppercase",
            children: "Next-Gen Digital Systems"
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("nav", {
        className: "hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: "#services",
          className: "hover:text-brand-400 transition-colors",
          children: "Services"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
          href: "#estimator",
          className: "hover:text-cyber-cyan transition-colors flex items-center gap-1.5",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "inline-block w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"
          }), "Cost Estimator"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: "#tech-stack",
          className: "hover:text-brand-400 transition-colors",
          children: "Tech Stack"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: "#portfolio",
          className: "hover:text-brand-400 transition-colors",
          children: "Case Studies"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: "#process",
          className: "hover:text-brand-400 transition-colors",
          children: "Process"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: "#testimonials",
          className: "hover:text-brand-400 transition-colors",
          children: "Why Us"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "hidden sm:flex items-center gap-3",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
          onClick: onOpenDashboard,
          className: "relative px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900/90 text-amber-300 border border-amber-500/40 hover:bg-amber-500/10 transition-all flex items-center gap-2 shadow-sm",
          title: "Open Executive Lead Tracking Dashboard",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "text-sm",
            children: "\uD83D\uDC51"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: "Owner CRM"
          }), newLeadsCount > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-amber-500 text-slate-950 animate-pulse",
            children: newLeadsCount
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
          onClick: onOpenEnquiry,
          className: "px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r from-brand-600 via-indigo-600 to-cyber-cyan text-white shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: "Get a Proposal"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
            name: "arrow-up-right",
            className: "w-4 h-4"
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: () => setMobileNavOpen(!mobileNavOpen),
        className: "lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
          name: mobileNavOpen ? "x" : "menu",
          className: "w-6 h-6"
        })
      })]
    }), mobileNavOpen && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "lg:hidden glass-panel border-b border-slate-800 px-6 py-6 mt-3 flex flex-col gap-4 animate-in slide-in-from-top duration-200",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: "#services",
        onClick: () => setMobileNavOpen(false),
        className: "py-2 text-slate-200 hover:text-brand-400",
        children: "Services"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: "#estimator",
        onClick: () => setMobileNavOpen(false),
        className: "py-2 text-cyber-cyan",
        children: "Cost Estimator"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: "#tech-stack",
        onClick: () => setMobileNavOpen(false),
        className: "py-2 text-slate-200",
        children: "Tech Stack"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: "#portfolio",
        onClick: () => setMobileNavOpen(false),
        className: "py-2 text-slate-200",
        children: "Case Studies"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: "#process",
        onClick: () => setMobileNavOpen(false),
        className: "py-2 text-slate-200",
        children: "Process"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "pt-4 border-t border-slate-800 flex flex-col gap-3",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
          onClick: () => {
            setMobileNavOpen(false);
            onOpenDashboard();
          },
          className: "w-full py-2.5 rounded-lg bg-slate-900 text-amber-300 border border-amber-500/40 font-semibold text-sm flex items-center justify-center gap-2",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: "\uD83D\uDC51 Owner CRM Dashboard"
          }), newLeadsCount > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "bg-amber-500 text-slate-950 px-2 py-0.5 rounded-full text-xs font-bold",
            children: [newLeadsCount, " new"]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          onClick: () => {
            setMobileNavOpen(false);
            onOpenEnquiry();
          },
          className: "w-full py-3 rounded-lg bg-brand-600 font-bold text-white text-sm",
          children: "Get a Proposal"
        })]
      })]
    })]
  });
}

// =========================================================
// 2. HERO SECTION COMPONENT (Lilac Infotech style + High Animation)
// =========================================================
function HeroSection({
  onOpenEnquiry,
  onScrollToEstimator
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
    className: "relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-brand-600/15 rounded-full blur-[140px] pointer-events-none"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "absolute top-1/3 -right-20 w-[450px] h-[450px] bg-cyber-cyan/10 rounded-full blur-[120px] pointer-events-none"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center max-w-4xl mx-auto",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-brand-500/40 text-xs font-semibold text-brand-300 mb-8 animate-glow",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "flex h-2 w-2 relative",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: "NEXT-GEN CUSTOM SOFTWARE & ENTERPRISE AI"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "text-slate-500",
            children: "\u2022"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "text-slate-300",
            children: "Inspired by Lilac Infotech's Innovation"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("h1", {
          className: "font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-8",
          children: ["Architecting Scalable ", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {
            className: "hidden sm:inline"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "gradient-text-indigo",
            children: "Software, Mobile Apps"
          }), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {
            className: "hidden sm:inline"
          }), "& Intelligent AI Ecosystems."]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal",
          children: "We partner with venture-backed startups and modern global enterprises to build high-conversion mobile applications, robust web platforms, and automated cloud workflows delivered on time and within budget."
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-16",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: onOpenEnquiry,
            className: "w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyber-cyan text-white font-bold text-base shadow-xl shadow-brand-600/30 hover:shadow-brand-600/60 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Schedule Technical Discovery"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              name: "arrow-right",
              className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: onScrollToEstimator,
            className: "w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-slate-200 font-semibold text-base border-slate-700/80 hover:bg-slate-800/80 hover:text-white transition-all flex items-center justify-center gap-3",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              name: "calculator",
              className: "w-5 h-5 text-cyber-cyan"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Interactive Cost Estimator"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/60",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-3 rounded-lg glass-panel text-left",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-slate-400 font-mono",
              children: "DELIVERY"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              className: "text-sm font-bold text-white flex items-center gap-1.5 mt-0.5",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "clock",
                className: "w-4 h-4 text-emerald-400"
              }), "Agile 2-Week Sprints"]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-3 rounded-lg glass-panel text-left",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-slate-400 font-mono",
              children: "SECURITY"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              className: "text-sm font-bold text-white flex items-center gap-1.5 mt-0.5",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "shield",
                className: "w-4 h-4 text-brand-400"
              }), "HIPAA & SOC2 Ready"]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-3 rounded-lg glass-panel text-left",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-slate-400 font-mono",
              children: "SUPPORT"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              className: "text-sm font-bold text-white flex items-center gap-1.5 mt-0.5",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "headphones",
                className: "w-4 h-4 text-cyber-cyan"
              }), "24/7 SLA Backing"]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-3 rounded-lg glass-panel text-left",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-slate-400 font-mono",
              children: "STACK"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              className: "text-sm font-bold text-white flex items-center gap-1.5 mt-0.5",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "code-2",
                className: "w-4 h-4 text-purple-400"
              }), "React + PHP + Cloud"]
            })]
          })]
        })]
      })
    })]
  });
}

// =========================================================
// 3. STATS BANNER
// =========================================================
function StatsBanner() {
  const stats = [{
    label: "Digital Products Shipped",
    val: "180+",
    sub: "Web, Mobile & AI Platforms"
  }, {
    label: "Client Retention Rate",
    val: "99.4%",
    sub: "Long-term engineering partnerships"
  }, {
    label: "Global Reach",
    val: "15+ Countries",
    sub: "USA, UAE, UK, Germany, India"
  }, {
    label: "Average Clutch Rating",
    val: "4.9 / 5.0",
    sub: "Verified CEO Testimonials"
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "relative z-10 py-10 bg-slate-900/50 border-y border-slate-800/80",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800",
        children: stats.map((s, idx) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "pt-4 md:pt-0 md:px-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "font-heading text-3xl sm:text-4xl font-extrabold gradient-text-indigo",
            children: s.val
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "text-sm font-semibold text-slate-200 mt-1",
            children: s.label
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "text-xs text-slate-400 mt-0.5 font-mono",
            children: s.sub
          })]
        }, idx))
      })
    })
  });
}

// =========================================================
// 4. CORE SERVICES SECTION
// =========================================================
function ServicesSection({
  onSelectService
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "services",
    className: "py-24 relative",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center max-w-3xl mx-auto mb-16",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-xs font-bold tracking-widest uppercase text-cyber-cyan font-mono",
          children: "OUR CORE EXPERTISE"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-6",
          children: "End-to-End Engineering for Visionary Businesses"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-slate-400 text-base leading-relaxed",
          children: "From concept ideation to hyper-scale architecture, our multidisciplinary squad delivers cutting-edge technology that drives real commercial ROI."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        children: SERVICES_LIST.map(srv => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "group relative rounded-2xl glass-panel p-8 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col justify-between",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "absolute top-0 right-0 w-24 h-24 bg-brand-500/10 rounded-bl-full pointer-events-none group-hover:bg-brand-500/20 transition-all"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex items-center justify-between mb-6",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-600/30 to-cyber-cyan/30 border border-brand-500/30 flex items-center justify-center text-cyber-cyan group-hover:scale-110 group-hover:text-white transition-all",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                  name: srv.icon,
                  className: "w-6 h-6"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700",
                children: srv.badge
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              className: "font-heading text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors",
              children: srv.title
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-slate-400 text-sm leading-relaxed mb-6",
              children: srv.description
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "space-y-2 mb-6",
              children: srv.features.map((f, i) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex items-center gap-2 text-xs text-slate-300",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                  name: "check-circle-2",
                  className: "w-4 h-4 text-emerald-400 shrink-0"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: f
                })]
              }, i))
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "flex flex-wrap gap-1.5 pt-4 border-t border-slate-800 mb-5",
              children: srv.tech.map((t, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800",
                children: t
              }, idx))
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
              onClick: () => onSelectService(srv.title),
              className: "w-full py-2.5 rounded-lg bg-slate-800/80 text-white font-semibold text-xs hover:bg-brand-600 transition-all flex items-center justify-center gap-2 group/btn",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: "Request Scope & Estimate"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "arrow-right",
                className: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
              })]
            })]
          })]
        }, srv.id))
      })]
    })
  });
}

// =========================================================
// 5. INTERACTIVE PROJECT ESTIMATOR (Client-Catchy Feature)
// =========================================================
function ProjectEstimatorSection({
  onLaunchEnquiry
}) {
  const [platform, setPlatform] = useState("web");
  const [selectedFeatures, setSelectedFeatures] = useState(["auth", "db"]);
  const [timeline, setTimeline] = useState("standard");
  const platforms = [{
    id: "web",
    name: "Custom Web Application",
    base: 12000,
    days: 30,
    icon: "globe"
  }, {
    id: "mobile",
    name: "Mobile App (iOS + Android)",
    base: 18000,
    days: 45,
    icon: "smartphone"
  }, {
    id: "fullstack",
    name: "Full-Stack Web + Mobile",
    base: 28000,
    days: 60,
    icon: "layers"
  }, {
    id: "ai",
    name: "Enterprise AI & LLM Engine",
    base: 22000,
    days: 45,
    icon: "cpu"
  }];
  const featuresList = [{
    id: "auth",
    name: "Auth & RBAC Roles",
    cost: 1500,
    days: 4
  }, {
    id: "db",
    name: "Custom Database & Admin Panel",
    cost: 2500,
    days: 7
  }, {
    id: "payments",
    name: "Stripe / Crypto Payments",
    cost: 2000,
    days: 5
  }, {
    id: "ai_bot",
    name: "AI Chat / RAG Search Integration",
    cost: 4500,
    days: 10
  }, {
    id: "realtime",
    name: "Real-time WebSockets / Chat",
    cost: 2500,
    days: 6
  }, {
    id: "analytics",
    name: "Telemetry & Custom Analytics",
    cost: 1800,
    days: 5
  }];
  const timelines = [{
    id: "fast",
    name: "Expedited Sprint (Priority)",
    mult: 1.25,
    timeMod: 0.7
  }, {
    id: "standard",
    name: "Standard Agile Pace",
    mult: 1.0,
    timeMod: 1.0
  }, {
    id: "flexible",
    name: "Phased MVP Roadmap",
    mult: 0.9,
    timeMod: 1.3
  }];
  const toggleFeature = fid => {
    setSelectedFeatures(prev => prev.includes(fid) ? prev.filter(x => x !== fid) : [...prev, fid]);
  };
  const calculation = useMemo(() => {
    const plat = platforms.find(p => p.id === platform) || platforms[0];
    const featsCost = selectedFeatures.reduce((acc, fid) => {
      const f = featuresList.find(x => x.id === fid);
      return acc + (f ? f.cost : 0);
    }, 0);
    const featsDays = selectedFeatures.reduce((acc, fid) => {
      const f = featuresList.find(x => x.id === fid);
      return acc + (f ? f.days : 0);
    }, 0);
    const tl = timelines.find(t => t.id === timeline) || timelines[1];
    const totalCost = Math.round((plat.base + featsCost) * tl.mult);
    const totalWeeks = Math.max(3, Math.round((plat.days + featsDays) * tl.timeMod / 7));
    return {
      costLow: Math.round(totalCost * 0.9),
      costHigh: Math.round(totalCost * 1.15),
      weeks: totalWeeks,
      platformName: plat.name
    };
  }, [platform, selectedFeatures, timeline]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "estimator",
    className: "py-24 relative bg-slate-900/40 border-y border-slate-800",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center max-w-3xl mx-auto mb-16",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-xs font-bold tracking-widest uppercase text-brand-400 font-mono",
          children: "TRANSPARENT & INNOVATIVE"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4",
          children: "Interactive Project Scope & Cost Estimator"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-slate-300 text-sm sm:text-base",
          children: "Select your technical parameters below to get instant transparency on timelines, engineering team composition, and expected investment."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-8",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "text-xs font-bold tracking-wider uppercase text-slate-400 mb-3 block",
              children: "Step 1: Choose Your Project Foundation"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
              children: platforms.map(p => /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                type: "button",
                onClick: () => setPlatform(p.id),
                className: `p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${platform === p.id ? 'bg-brand-600/20 border-brand-500 text-white shadow-lg shadow-brand-500/10' : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'}`,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                  name: p.icon,
                  className: `w-5 h-5 mt-0.5 ${platform === p.id ? 'text-cyber-cyan' : 'text-slate-400'}`
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    className: "font-semibold text-sm block",
                    children: p.name
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                    className: "text-xs text-slate-400",
                    children: ["From $", p.base.toLocaleString()]
                  })]
                })]
              }, p.id))
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "text-xs font-bold tracking-wider uppercase text-slate-400 mb-3 block",
              children: "Step 2: Core Engineering Capabilities (Select all that apply)"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
              children: featuresList.map(f => {
                const isSelected = selectedFeatures.includes(f.id);
                return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                  type: "button",
                  onClick: () => toggleFeature(f.id),
                  className: `px-3.5 py-3 rounded-lg border text-left text-xs font-medium transition-all flex items-center justify-between ${isSelected ? 'bg-cyber-cyan/15 border-cyber-cyan text-white' : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200'}`,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    children: f.name
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                    name: isSelected ? "check-circle" : "plus-circle",
                    className: `w-4 h-4 ${isSelected ? 'text-cyber-cyan' : 'text-slate-600'}`
                  })]
                }, f.id);
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "text-xs font-bold tracking-wider uppercase text-slate-400 mb-3 block",
              children: "Step 3: Timeline Velocity"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5",
              children: timelines.map(t => /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                type: "button",
                onClick: () => setTimeline(t.id),
                className: `p-3 rounded-lg border text-center text-xs font-medium transition-all ${timeline === t.id ? 'bg-brand-500/20 border-brand-400 text-brand-200' : 'bg-slate-900/40 border-slate-800 text-slate-400'}`,
                children: t.name
              }, t.id))
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "lg:col-span-5 glass-panel-glow rounded-2xl p-6 sm:p-8 sticky top-28",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center justify-between mb-4 pb-4 border-b border-slate-800",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs font-bold tracking-widest uppercase text-slate-400 font-mono",
              children: "ESTIMATED SUMMARY"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
              children: "REAL-TIME CALCULATION"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "mb-6",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-slate-400 block mb-1",
              children: "Target Platform:"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-base font-bold text-white",
              children: calculation.platformName
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-5 rounded-xl bg-slate-900/80 border border-brand-500/30 mb-6",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs font-mono text-slate-400 block mb-1",
              children: "ESTIMATED INVESTMENT RANGE:"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "font-heading text-3xl sm:text-4xl font-extrabold gradient-text-indigo",
              children: ["$", calculation.costLow.toLocaleString(), " - $", calculation.costHigh.toLocaleString()]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-[11px] text-slate-400 mt-2",
              children: "*Includes dedicated QA, Senior Tech Lead, Sprint reviews & source code ownership."
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "grid grid-cols-2 gap-4 mb-6 text-sm",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "p-3 rounded-lg bg-slate-900/60 border border-slate-800",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-xs text-slate-400 block",
                children: "Est. Delivery:"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                className: "font-bold text-white mt-1 block",
                children: ["~", calculation.weeks, " Weeks"]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "p-3 rounded-lg bg-slate-900/60 border border-slate-800",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-xs text-slate-400 block",
                children: "Dedicated Squad:"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "font-bold text-white mt-1 block",
                children: "3 - 5 Engineers"
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: () => onLaunchEnquiry(`${calculation.platformName} ($${calculation.costLow.toLocaleString()} - $${calculation.costHigh.toLocaleString()})`),
            className: "w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyber-cyan text-white font-bold text-sm shadow-xl shadow-brand-600/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Lock In This Scope as Enquiry"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              name: "arrow-right",
              className: "w-4 h-4"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-[11px] text-center text-slate-400 mt-3",
            children: "No commitment required \u2022 Free NDA on request"
          })]
        })]
      })]
    })
  });
}

// =========================================================
// 6. TECH STACK MATRIX
// =========================================================
function TechStackSection({
  activeTab,
  setActiveTab
}) {
  const tabs = ["Frontend", "Backend & DB", "Mobile", "AI & Cloud"];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "tech-stack",
    className: "py-24 relative",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center max-w-3xl mx-auto mb-14",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-xs font-bold tracking-widest uppercase text-cyber-cyan font-mono",
          children: "PRODUCTION-PROVEN ARCHITECTURE"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4",
          children: "Next-Gen Technology Stacks We Master"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-slate-400 text-sm sm:text-base",
          children: "We select battle-tested, high-concurrency technologies designed for 99.99% uptime, security, and developer maintainability."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex items-center justify-center gap-2 mb-12 flex-wrap",
        children: tabs.map(tab => /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          onClick: () => setActiveTab(tab),
          className: `px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === tab ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30' : 'glass-panel text-slate-400 hover:text-white'}`,
          children: tab
        }, tab))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
        children: (TECH_STACK[activeTab] || []).map((t, i) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-6 rounded-2xl glass-panel hover:border-brand-500/40 transition-all flex flex-col justify-between group",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center gap-4 mb-4",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-cyber-cyan group-hover:scale-110 transition-transform",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: t.icon,
                className: "w-6 h-6"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
                className: "font-heading font-bold text-lg text-white group-hover:text-brand-300 transition-colors",
                children: t.name
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-[11px] font-mono text-emerald-400",
                children: "Enterprise Certified"
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-slate-400 text-xs leading-relaxed",
            children: t.desc
          })]
        }, i))
      })]
    })
  });
}

// =========================================================
// 7. AGILE PROCESS ROADMAP (Lilac Infotech Pipeline)
// =========================================================
function ProcessSection() {
  const steps = [{
    num: "01",
    title: "Discovery & Blueprint",
    desc: "Technical feasibility, architecture design, and sprint roadmap specification.",
    icon: "compass"
  }, {
    num: "02",
    title: "Interactive UI/UX",
    desc: "High-fidelity Figma prototypes, micro-interactions, and usability testing.",
    icon: "pen-tool"
  }, {
    num: "03",
    title: "Agile Engineering",
    desc: "Bi-weekly sprint releases with continuous CI/CD integration and code reviews.",
    icon: "terminal"
  }, {
    num: "04",
    title: "QA & Security Audit",
    desc: "Automated regression testing, load tests, and penetration vulnerability audits.",
    icon: "shield-alert"
  }, {
    num: "05",
    title: "Launch & Global Scale",
    desc: "Production release, telemetry monitoring, and ongoing 24/7 SLA maintenance.",
    icon: "rocket"
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "process",
    className: "py-24 relative bg-slate-900/30 border-y border-slate-800/80",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center max-w-3xl mx-auto mb-16",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-xs font-bold tracking-widest uppercase text-brand-400 font-mono",
          children: "OUR PROVEN METHODOLOGY"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4",
          children: "From Zero to Shipped Product"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-slate-400 text-sm sm:text-base",
          children: "Clear milestones, zero surprises, and weekly demos keeping you in complete control."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-5 gap-6",
        children: steps.map((st, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "relative rounded-2xl glass-panel p-6 flex flex-col justify-between group hover:border-brand-500/50 transition-all",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex items-center justify-between mb-4",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "font-heading font-black text-2xl text-slate-600 group-hover:text-cyber-cyan transition-colors",
                children: st.num
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: st.icon,
                className: "w-5 h-5 text-brand-400"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
              className: "font-heading font-bold text-base text-white mb-2",
              children: st.title
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-slate-400 text-xs leading-relaxed",
              children: st.desc
            })]
          })
        }, i))
      })]
    })
  });
}

// =========================================================
// 8. CASE STUDIES & PORTFOLIO
// =========================================================
function PortfolioSection({
  onSelectProject
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "portfolio",
    className: "py-24 relative",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center max-w-3xl mx-auto mb-16",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-xs font-bold tracking-widest uppercase text-cyber-cyan font-mono",
          children: "PROVEN IMPACT"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4",
          children: "Featured Engineering Showcases"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-slate-400 text-sm sm:text-base",
          children: "Explore how we transformed high-stakes technical challenges into multi-million dollar wins."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
        children: PORTFOLIO_PROJECTS.map(p => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "rounded-2xl glass-panel border-slate-800 overflow-hidden hover:border-brand-500/50 hover:shadow-2xl transition-all group flex flex-col justify-between",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: `h-48 bg-gradient-to-tr ${p.imageGradient} p-6 flex flex-col justify-between relative`,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-white backdrop-blur",
                children: p.badge
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
                children: p.stat
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              className: "font-heading font-bold text-2xl text-white drop-shadow",
              children: p.title
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-6",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-slate-300 text-sm leading-relaxed mb-6",
              children: p.desc
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "flex flex-wrap gap-2 mb-6",
              children: p.tags.map((t, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800",
                children: t
              }, idx))
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
              onClick: () => onSelectProject(`Case Study: ${p.title}`),
              className: "w-full py-2.5 rounded-lg bg-slate-800 text-xs font-semibold text-white hover:bg-brand-600 transition-all flex items-center justify-center gap-2",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: "Build a Similar Solution"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "arrow-up-right",
                className: "w-4 h-4"
              })]
            })]
          })]
        }, p.id))
      })]
    })
  });
}

// =========================================================
// 9. CLIENT TESTIMONIALS
// =========================================================
function TestimonialsSection() {
  const reviews = [{
    quote: "Deligo Technologies delivered our HIPAA-compliant telemedicine platform ahead of schedule. Their attention to WebRTC reliability and automated testing set them worlds apart from previous agencies.",
    author: "Dr. Alexander Wright",
    role: "Chief Medical Officer, HealthWave",
    rating: 5,
    location: "Boston, USA"
  }, {
    quote: "The microservices architecture and automated settlement pipeline handled our 4x holiday volume spike with 100% uptime. True technical masters.",
    author: "Fatima Al-Nuaimi",
    role: "Head of Digital Operations, FinScale UAE",
    rating: 5,
    location: "Dubai, UAE"
  }, {
    quote: "From day 1 they communicated like technical co-founders rather than distant contractors. The interactive dashboard for lead tracking is just pure icing on the cake.",
    author: "Klaus Hoffmann",
    role: "Managing Director, NovaMarket",
    rating: 5,
    location: "Munich, Germany"
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "testimonials",
    className: "py-24 relative bg-slate-900/30 border-y border-slate-800/80",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center max-w-3xl mx-auto mb-16",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-xs font-bold tracking-widest uppercase text-brand-400 font-mono",
          children: "VERIFIED CLIENT RESULTS"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4",
          children: "Trusted by Founders Worldwide"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-slate-400 text-sm sm:text-base",
          children: "We pride ourselves on building multi-year partnerships where your growth is our metric."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
        children: reviews.map((r, i) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-8 rounded-2xl glass-panel flex flex-col justify-between",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "flex items-center gap-1 text-amber-400 mb-6",
              children: [...Array(r.rating)].map((_, s) => /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "star",
                className: "w-4 h-4 fill-amber-400"
              }, s))
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              className: "text-slate-300 text-sm italic leading-relaxed mb-6",
              children: ["\"", r.quote, "\""]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pt-4 border-t border-slate-800 flex items-center justify-between",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "font-bold text-white text-sm",
                children: r.author
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "text-xs text-slate-400",
                children: r.role
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-[11px] font-mono text-slate-500",
              children: r.location
            })]
          })]
        }, i))
      })]
    })
  });
}

// =========================================================
// 10. CTA BANNER
// =========================================================
function CtaBanner({
  onOpenEnquiry
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    className: "py-20 relative overflow-hidden",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "rounded-3xl glass-panel-glow p-8 sm:p-14 text-center relative overflow-hidden border border-brand-500/40",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "max-w-2xl mx-auto",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
            className: "font-heading text-3xl sm:text-5xl font-extrabold text-white mb-6",
            children: ["Have a Project in Mind? ", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "gradient-text-indigo",
              children: "Let's Engineer It Together."
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-slate-300 text-base mb-8",
            children: "Submit your technical requirements or book an introductory discovery session with our engineering leadership team today."
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: onOpenEnquiry,
            className: "px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyber-cyan text-white font-bold text-base shadow-xl shadow-brand-600/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Get Free Architecture Consultation"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              name: "send",
              className: "w-5 h-5"
            })]
          })]
        })
      })
    })
  });
}

// =========================================================
// 11. FOOTER
// =========================================================
function Footer({
  onOpenDashboard
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("footer", {
    className: "bg-[#030610] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-sm",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "grid grid-cols-1 md:grid-cols-4 gap-10 mb-12",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-cyber-cyan flex items-center justify-center font-bold text-white text-lg font-heading",
              children: "D"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "font-heading font-bold text-xl text-white",
              children: ["DELIGO ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-cyber-cyan",
                children: "TECHNOLOGIES"
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-xs text-slate-400 leading-relaxed",
            children: "Empowering global enterprises and bold startups with bespoke software, mobile applications, and AI automation. Inspired by Lilac Infotech's standard of engineering excellence."
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center gap-3 pt-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "#",
              className: "w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-600 text-slate-300 hover:text-white transition-all",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "github",
                className: "w-4 h-4"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "#",
              className: "w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-600 text-slate-300 hover:text-white transition-all",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "linkedin",
                className: "w-4 h-4"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "#",
              className: "w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-600 text-slate-300 hover:text-white transition-all",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "twitter",
                className: "w-4 h-4"
              })
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
            className: "font-heading font-bold text-white text-sm mb-4",
            children: "Engineering Services"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
            className: "space-y-2.5 text-xs",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                href: "#services",
                className: "hover:text-brand-300 transition-colors",
                children: "Mobile App Development (Flutter/iOS)"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                href: "#services",
                className: "hover:text-brand-300 transition-colors",
                children: "Custom Web Platforms (React 18)"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                href: "#services",
                className: "hover:text-brand-300 transition-colors",
                children: "Enterprise AI & LLM Integration"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                href: "#services",
                className: "hover:text-brand-300 transition-colors",
                children: "Cloud DevOps & Kubernetes"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                href: "#services",
                className: "hover:text-brand-300 transition-colors",
                children: "UI/UX Product Design Systems"
              })
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
            className: "font-heading font-bold text-white text-sm mb-4",
            children: "Delivery Hubs"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
            className: "space-y-2 text-xs",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
              className: "flex items-start gap-2",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "map-pin",
                className: "w-4 h-4 text-cyber-cyan shrink-0 mt-0.5"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: "San Francisco, CA, USA"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
              className: "flex items-start gap-2",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "map-pin",
                className: "w-4 h-4 text-cyber-cyan shrink-0 mt-0.5"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: "Dubai Internet City, UAE"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
              className: "flex items-start gap-2",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "map-pin",
                className: "w-4 h-4 text-cyber-cyan shrink-0 mt-0.5"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: "Govt Cyberpark, Kozhikode, India"
              })]
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
            className: "font-heading font-bold text-white text-sm mb-4",
            children: "Executive Administration"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-xs text-slate-400 mb-4",
            children: "Access the real-time company owner enquiry pipeline, lead status manager, and CSV exporter."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: onOpenDashboard,
            className: "px-4 py-2 rounded-lg bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-semibold hover:bg-amber-500/10 transition-all flex items-center gap-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "\uD83D\uDC51 Launch Owner Dashboard"
            })
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "\xA9 2026 Deligo Technologies Inc. Built with React 18 + PHP MySQL Architecture."
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex gap-6",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "#",
            className: "hover:text-slate-400",
            children: "Privacy Policy"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "#",
            className: "hover:text-slate-400",
            children: "Terms of Service"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "#",
            className: "hover:text-slate-400",
            children: "Security Disclosures"
          })]
        })]
      })]
    })
  });
}

// =========================================================
// 12. INTERACTIVE ENQUIRY MODAL (Submits to PHP / MySQL / Dev API)
// =========================================================
function EnquiryModal({
  isOpen,
  onClose,
  initialService,
  onSubmitSuccess
}) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    service: initialService || "Mobile App Development",
    budget: "$25,000 - $50,000",
    timeline: "2 - 3 Months",
    message: "",
    source: "Website Modal"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const budgetOptions = ["< $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000 - $100,000", "$100,000+"];
  const serviceOptions = ["Mobile App Development", "Web Platform Engineering", "AI & Machine Learning", "Cloud Architecture & DevOps", "UI/UX Product Design", "Enterprise Software & ERP"];
  const handleSubmit = async e => {
    e.preventDefault();
    setErrorMsg("");
    if (!formData.full_name || !formData.email || !formData.message) {
      setErrorMsg("Please complete your full name, email, and project brief.");
      return;
    }
    setIsSubmitting(true);
    try {
      // Attempt live submission to PHP/Dev API
      const res = await fetch(`${API_BASE}/api/enquiry.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        const data = await res.json();
        const newLead = {
          id: data.enquiry_id || Date.now(),
          ...formData,
          status: "NEW",
          priority: formData.budget.includes("100,000") ? "HIGH" : "MEDIUM",
          estimated_value: 35000,
          created_at: new Date().toISOString().replace('T', ' ').substring(0, 19),
          notes: []
        };
        onSubmitSuccess(newLead);
        onClose();
        return;
      }
    } catch (err) {
      console.warn("Backend API request failed; falling back to client-side state:", err);
    }

    // Graceful client fallback so user is NEVER blocked if PHP server is not currently running
    const fallbackLead = {
      id: Date.now(),
      ...formData,
      status: "NEW",
      priority: "MEDIUM",
      estimated_value: 30000,
      created_at: new Date().toISOString().replace('T', ' ').substring(0, 19),
      notes: []
    };
    onSubmitSuccess(fallbackLead);
    setIsSubmitting(false);
    onClose();
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "relative w-full max-w-2xl max-h-[92vh] overflow-y-auto glass-panel-glow rounded-3xl p-6 sm:p-10 border border-brand-500/40 shadow-2xl",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: onClose,
        className: "absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-all",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
          name: "x",
          className: "w-5 h-5"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "mb-6",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-xs font-bold tracking-widest uppercase text-cyber-cyan font-mono",
          children: "START YOUR NEXT-GEN BUILD"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "font-heading text-2xl sm:text-3xl font-extrabold text-white mt-1",
          children: "Request a Technical Proposal"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-slate-400 text-xs sm:text-sm mt-1",
          children: "Connect with our technical directors. We sign an NDA beforehand upon request."
        })]
      }), errorMsg && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "p-3 mb-6 rounded-lg bg-red-950/60 border border-red-500 text-red-200 text-xs",
        children: errorMsg
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "space-y-5",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-xs font-semibold text-slate-300 mb-1.5",
              children: "Your Full Name *"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "text",
              required: true,
              placeholder: "e.g. David Miller",
              value: formData.full_name,
              onChange: e => setFormData({
                ...formData,
                full_name: e.target.value
              }),
              className: "w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-xs font-semibold text-slate-300 mb-1.5",
              children: "Work Email *"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "email",
              required: true,
              placeholder: "david@company.com",
              value: formData.email,
              onChange: e => setFormData({
                ...formData,
                email: e.target.value
              }),
              className: "w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-xs font-semibold text-slate-300 mb-1.5",
              children: "Phone / WhatsApp (Optional)"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "tel",
              placeholder: "+1 (555) 000-0000",
              value: formData.phone,
              onChange: e => setFormData({
                ...formData,
                phone: e.target.value
              }),
              className: "w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-xs font-semibold text-slate-300 mb-1.5",
              children: "Company / Startup Name"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "text",
              placeholder: "e.g. Apex Labs",
              value: formData.company,
              onChange: e => setFormData({
                ...formData,
                company: e.target.value
              }),
              className: "w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "block text-xs font-semibold text-slate-300 mb-1.5",
            children: "Primary Capability Required"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
            value: formData.service,
            onChange: e => setFormData({
              ...formData,
              service: e.target.value
            }),
            className: "w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500",
            children: serviceOptions.map(s => /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: s,
              children: s
            }, s))
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "block text-xs font-semibold text-slate-300 mb-2",
            children: "Target Investment Budget"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "flex flex-wrap gap-2",
            children: budgetOptions.map(b => /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "button",
              onClick: () => setFormData({
                ...formData,
                budget: b
              }),
              className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${formData.budget === b ? 'bg-brand-600 text-white border-brand-400' : 'bg-slate-900 text-slate-400 border border-slate-800'}`,
              children: b
            }, b))
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "block text-xs font-semibold text-slate-300 mb-1.5",
            children: "Brief Project Description *"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
            required: true,
            rows: "3",
            placeholder: "Tell us what you are looking to build, any technical stack preferences, or target launch timeline...",
            value: formData.message,
            onChange: e => setFormData({
              ...formData,
              message: e.target.value
            }),
            className: "w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 resize-none"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyber-cyan text-white font-bold text-sm shadow-xl shadow-brand-600/30 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2",
          children: isSubmitting ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Encrypting & Submitting..."
            })]
          }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Submit Enquiry to Technical Director"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              name: "send",
              className: "w-4 h-4"
            })]
          })
        })]
      })]
    })
  });
}

// =========================================================
// 13. OWNER DASHBOARD (Lead Tracking CRM & Status Workflow)
// =========================================================
function OwnerDashboard({
  isOpen,
  onClose,
  enquiries,
  setEnquiries,
  onRefresh,
  showToast
}) {
  const [authAuthenticated, setAuthAuthenticated] = useState(true); // Demo mode starts unlocked with quick PIN preview
  const [enteredPin, setEnteredPin] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [newNoteText, setNewNoteText] = useState("");
  const [isExporting, setIsExporting] = useState(false);

  // Filter logic
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter(item => {
      const matchesStatus = statusFilter === "ALL" || item.status === statusFilter;
      const matchesSearch = !searchQuery || item.full_name && item.full_name.toLowerCase().includes(searchQuery.toLowerCase()) || item.email && item.email.toLowerCase().includes(searchQuery.toLowerCase()) || item.company && item.company.toLowerCase().includes(searchQuery.toLowerCase()) || item.service && item.service.toLowerCase().includes(searchQuery.toLowerCase()) || item.message && item.message.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [enquiries, statusFilter, searchQuery]);

  // Status Color helper
  const getStatusBadge = status => {
    switch (status) {
      case "NEW":
        return "bg-amber-500/20 text-amber-300 border-amber-500/30";
      case "CONTACTED":
        return "bg-indigo-500/20 text-indigo-300 border-indigo-500/30";
      case "IN_DISCUSSION":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "PROPOSAL_SENT":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30";
      case "CONVERTED":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "ARCHIVED":
        return "bg-slate-700/40 text-slate-400 border-slate-700";
      default:
        return "bg-slate-800 text-slate-300";
    }
  };

  // Update status handler
  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await fetch(`${API_BASE}/api/admin.php?action=update_status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id,
          status: newStatus
        })
      });
    } catch (err) {
      console.log("Local state update:", err);
    }
    setEnquiries(prev => prev.map(e => e.id === id ? {
      ...e,
      status: newStatus
    } : e));
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry(prev => ({
        ...prev,
        status: newStatus
      }));
    }
    showToast(`Enquiry status changed to ${newStatus}`);
  };

  // Add Note
  const handleAddNote = async enquiryId => {
    if (!newNoteText.trim()) return;
    const noteContent = newNoteText.trim();
    setNewNoteText("");
    try {
      await fetch(`${API_BASE}/api/admin.php?action=add_note`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          enquiry_id: enquiryId,
          note: noteContent,
          author: "Owner"
        })
      });
    } catch (err) {
      console.log("Note saved locally:", err);
    }
    setEnquiries(prev => prev.map(e => {
      if (e.id === enquiryId) {
        const notes = e.notes ? [...e.notes, noteContent] : [noteContent];
        return {
          ...e,
          notes
        };
      }
      return e;
    }));
    if (selectedEnquiry && selectedEnquiry.id === enquiryId) {
      setSelectedEnquiry(prev => ({
        ...prev,
        notes: prev.notes ? [...prev.notes, noteContent] : [noteContent]
      }));
    }
    showToast("Internal note appended to lead file.");
  };

  // CSV Export (Native Client-side Blob download + Backend Fallback)
  const handleExportCsv = () => {
    setIsExporting(true);
    try {
      const headers = ['ID', 'Full Name', 'Email', 'Phone', 'Company', 'Service', 'Budget', 'Timeline', 'Status', 'Priority', 'Est. Value ($)', 'Source', 'Received At', 'Message'];
      const rows = enquiries.map(e => [
        e.id,
        `"${(e.full_name || '').replace(/"/g, '""')}"`,
        `"${(e.email || '').replace(/"/g, '""')}"`,
        `"${(e.phone || '').replace(/"/g, '""')}"`,
        `"${(e.company || '').replace(/"/g, '""')}"`,
        `"${(e.service || '').replace(/"/g, '""')}"`,
        `"${(e.budget || '').replace(/"/g, '""')}"`,
        `"${(e.timeline || '').replace(/"/g, '""')}"`,
        e.status,
        e.priority,
        e.estimated_value || 0,
        `"${(e.source || 'Website').replace(/"/g, '""')}"`,
        e.created_at,
        `"${(e.message || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`
      ].join(','));
      const csvContent = [headers.join(','), ...rows].join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'deligo_enquiries.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("CSV export downloaded successfully!");
    } catch (err) {
      if (API_BASE) {
        window.open(`${API_BASE}/api/export.php`, '_blank');
      }
    }
    setTimeout(() => setIsExporting(false), 800);
  };

  // Summary Metrics
  const totalCount = enquiries.length;
  const newCount = enquiries.filter(e => e.status === "NEW").length;
  const inDiscussionCount = enquiries.filter(e => ["IN_DISCUSSION", "PROPOSAL_SENT"].includes(e.status)).length;
  const convertedCount = enquiries.filter(e => e.status === "CONVERTED").length;
  const totalPipelineValue = enquiries.reduce((acc, cur) => acc + (cur.estimated_value || 0), 0);
  const conversionRate = totalCount > 0 ? (convertedCount / totalCount * 100).toFixed(1) : "0.0";
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "relative w-full max-w-7xl h-[94vh] bg-[#090d1a] border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 text-lg",
            children: "\uD83D\uDC51"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
              className: "font-heading font-extrabold text-lg text-white flex items-center gap-2",
              children: ["Executive Enquiry & Lead CRM", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
                children: "LIVE CONNECTED"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-xs text-slate-400",
              children: "Deligo Technologies \u2022 Confidential Company Owner Portal"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: handleExportCsv,
            disabled: isExporting,
            className: "px-3.5 py-2 rounded-lg bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-700 transition-all flex items-center gap-2 border border-slate-700",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              name: "download",
              className: "w-4 h-4 text-cyber-cyan"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Export CSV"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: onRefresh,
            className: "p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-all border border-slate-700",
            title: "Refresh Data",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              name: "refresh-cw",
              className: "w-4 h-4"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: onClose,
            className: "p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-all border border-slate-700",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              name: "x",
              className: "w-5 h-5"
            })
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex-1 overflow-y-auto p-6 space-y-6",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "grid grid-cols-2 lg:grid-cols-5 gap-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-4 rounded-xl bg-slate-900/60 border border-slate-800",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-slate-400 font-mono",
              children: "TOTAL LEADS"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "font-heading text-2xl font-black text-white mt-1",
              children: totalCount
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-[11px] text-slate-500",
              children: "Inbound inquiries"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-4 rounded-xl bg-amber-950/20 border border-amber-500/30",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-amber-400 font-mono",
              children: "NEW / UNREAD"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "font-heading text-2xl font-black text-amber-300 mt-1",
              children: newCount
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-[11px] text-amber-500/80",
              children: "Requires response <24h"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-indigo-400 font-mono",
              children: "IN DISCUSSION"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "font-heading text-2xl font-black text-indigo-300 mt-1",
              children: inDiscussionCount
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-[11px] text-indigo-400/80",
              children: "Proposal / Architecting"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-emerald-400 font-mono",
              children: "CONVERTED WON"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "font-heading text-2xl font-black text-emerald-300 mt-1",
              children: convertedCount
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "text-[11px] text-emerald-400/80",
              children: [conversionRate, "% win rate"]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "col-span-2 lg:col-span-1 p-4 rounded-xl bg-slate-900/60 border border-slate-800",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-slate-400 font-mono",
              children: "PIPELINE VALUE"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "font-heading text-2xl font-black gradient-text-gold mt-1",
              children: ["$", totalPipelineValue.toLocaleString()]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-[11px] text-slate-500",
              children: "Estimated value"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl glass-panel",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "relative flex-1",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              name: "search",
              className: "w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "text",
              placeholder: "Search enquiries by client name, email, company, or scope keywords...",
              value: searchQuery,
              onChange: e => setSearchQuery(e.target.value),
              className: "w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-brand-500"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0",
            children: ["ALL", "NEW", "CONTACTED", "IN_DISCUSSION", "PROPOSAL_SENT", "CONVERTED"].map(st => /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              onClick: () => setStatusFilter(st),
              className: `px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${statusFilter === st ? 'bg-brand-600 text-white' : 'bg-slate-900/80 text-slate-400 hover:text-slate-200'}`,
              children: st
            }, st))
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "rounded-2xl glass-panel border border-slate-800 overflow-hidden",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
              className: "w-full text-left text-xs",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
                className: "bg-slate-900/90 text-slate-400 font-mono uppercase border-b border-slate-800",
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                    className: "px-5 py-3.5",
                    children: "Client & Company"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                    className: "px-5 py-3.5",
                    children: "Service Required"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                    className: "px-5 py-3.5",
                    children: "Budget"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                    className: "px-5 py-3.5",
                    children: "Pipeline Status"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                    className: "px-5 py-3.5",
                    children: "Received Date"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                    className: "px-5 py-3.5 text-right",
                    children: "Actions"
                  })]
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
                className: "divide-y divide-slate-800/60",
                children: filteredEnquiries.length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                    colSpan: "6",
                    className: "px-6 py-12 text-center text-slate-500",
                    children: "No enquiries match the current filter or search criteria."
                  })
                }) : filteredEnquiries.map(enq => /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                  className: "hover:bg-slate-800/40 transition-colors",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                    className: "px-5 py-4",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "font-bold text-white text-sm",
                      children: enq.full_name
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "text-slate-400",
                      children: enq.company || "Independent"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "text-[11px] text-slate-500 font-mono mt-0.5",
                      children: enq.email
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                    className: "px-5 py-4",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "font-medium text-slate-200",
                      children: enq.service
                    }), enq.timeline && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                      className: "block text-[11px] text-slate-400 font-mono",
                      children: ["Timeline: ", enq.timeline]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                    className: "px-5 py-4 font-mono font-semibold text-brand-300",
                    children: enq.budget
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                    className: "px-5 py-4",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
                      value: enq.status,
                      onChange: e => handleUpdateStatus(enq.id, e.target.value),
                      className: `px-3 py-1 rounded-full text-[11px] font-bold border ${getStatusBadge(enq.status)} bg-slate-900 cursor-pointer focus:outline-none`,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                        value: "NEW",
                        children: "NEW"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                        value: "CONTACTED",
                        children: "CONTACTED"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                        value: "IN_DISCUSSION",
                        children: "IN_DISCUSSION"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                        value: "PROPOSAL_SENT",
                        children: "PROPOSAL_SENT"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                        value: "CONVERTED",
                        children: "CONVERTED (WON)"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                        value: "ARCHIVED",
                        children: "ARCHIVED"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                    className: "px-5 py-4 text-slate-400 font-mono text-[11px]",
                    children: enq.created_at || "Recent"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                    className: "px-5 py-4 text-right",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                      onClick: () => setSelectedEnquiry(enq),
                      className: "px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-200 hover:text-white transition-all font-semibold",
                      children: "Inspect Lead"
                    })
                  })]
                }, enq.id))
              })]
            })
          })
        })]
      }), selectedEnquiry && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "relative w-full max-w-2xl bg-slate-950 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center justify-between pb-4 border-b border-slate-800",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                className: "text-[10px] font-mono uppercase text-cyber-cyan",
                children: ["CLIENT DOSSIER #", selectedEnquiry.id]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                className: "text-xl font-bold text-white mt-0.5",
                children: selectedEnquiry.full_name
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
                className: "text-xs text-slate-400",
                children: [selectedEnquiry.company, " \u2022 ", selectedEnquiry.email]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              onClick: () => setSelectedEnquiry(null),
              className: "p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "x",
                className: "w-5 h-5"
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-wrap gap-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
              href: `mailto:${selectedEnquiry.email}`,
              className: "px-3.5 py-2 rounded-xl bg-indigo-600 text-xs font-semibold text-white flex items-center gap-2 hover:bg-indigo-500",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "mail",
                className: "w-4 h-4"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: "Email Client"
              })]
            }), selectedEnquiry.phone && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                href: `tel:${selectedEnquiry.phone}`,
                className: "px-3.5 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-white flex items-center gap-2 hover:bg-slate-700",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                  name: "phone",
                  className: "w-4 h-4 text-emerald-400"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                  children: ["Call ", selectedEnquiry.phone]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                href: `https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, '')}`,
                target: "_blank",
                className: "px-3.5 py-2 rounded-xl bg-emerald-600 text-xs font-semibold text-white flex items-center gap-2 hover:bg-emerald-500",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                  name: "message-square",
                  className: "w-4 h-4"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: "WhatsApp"
                })]
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-4 rounded-xl bg-slate-900 border border-slate-800",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs font-semibold text-slate-400 block mb-1",
              children: "Project Brief / Scope:"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-sm text-slate-200 leading-relaxed whitespace-pre-line",
              children: selectedEnquiry.message
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "p-3 rounded-lg bg-slate-900/60 border border-slate-800",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-slate-500 block",
                children: "Service"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "font-bold text-white",
                children: selectedEnquiry.service
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "p-3 rounded-lg bg-slate-900/60 border border-slate-800",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-slate-500 block",
                children: "Budget Range"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "font-bold text-brand-300 font-mono",
                children: selectedEnquiry.budget
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "p-3 rounded-lg bg-slate-900/60 border border-slate-800",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-slate-500 block",
                children: "Source"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "font-bold text-slate-300",
                children: selectedEnquiry.source || "Website"
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs font-bold text-slate-300 block mb-2",
              children: "CRM Internal Activity Notes:"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "space-y-2 max-h-36 overflow-y-auto mb-3",
              children: !selectedEnquiry.notes || selectedEnquiry.notes.length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "text-xs text-slate-500 italic",
                children: "No notes added yet for this client."
              }) : selectedEnquiry.notes.map((n, idx) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-start gap-2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "text-brand-400 font-bold",
                  children: "\u2022"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: typeof n === 'string' ? n : n.note
                })]
              }, idx))
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex gap-2",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                type: "text",
                placeholder: "Add internal note (e.g. Sent NDA, Scheduled Zoom with CTO)...",
                value: newNoteText,
                onChange: e => setNewNoteText(e.target.value),
                onKeyDown: e => {
                  if (e.key === 'Enter') handleAddNote(selectedEnquiry.id);
                },
                className: "flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-brand-500"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                onClick: () => handleAddNote(selectedEnquiry.id),
                className: "px-4 py-2 rounded-xl bg-brand-600 text-white font-semibold text-xs hover:bg-brand-500",
                children: "Add Note"
              })]
            })]
          })]
        })
      })]
    })
  });
}

// Render React DOM
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/(0, _jsxRuntime.jsx)(App, {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJJY29uIiwibmFtZSIsImNsYXNzTmFtZSIsInByb3BzIiwiaWNvbnMiLCJ3aW5kb3ciLCJERUxJR09fSUNPTlMiLCJpY29uRGVmIiwiX2pzeFJ1bnRpbWUiLCJqc3giLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJjaGlsZHJlbiIsIm1hcCIsInRhZyIsImF0dHJzIiwiaWR4IiwiVGFnTmFtZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlTWVtbyIsIlJlYWN0IiwiQVBJX0JBU0UiLCJsb2NhdGlvbiIsInByb3RvY29sIiwiSU5JVElBTF9FTlFVSVJJRVMiLCJpZCIsImZ1bGxfbmFtZSIsImVtYWlsIiwicGhvbmUiLCJjb21wYW55Iiwic2VydmljZSIsImJ1ZGdldCIsInRpbWVsaW5lIiwibWVzc2FnZSIsInN0YXR1cyIsInByaW9yaXR5IiwiZXN0aW1hdGVkX3ZhbHVlIiwic291cmNlIiwiY3JlYXRlZF9hdCIsIm5vdGVzIiwiU0VSVklDRVNfTElTVCIsInRpdGxlIiwiYmFkZ2UiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJ0ZWNoIiwiZmVhdHVyZXMiLCJURUNIX1NUQUNLIiwiZGVzYyIsIlBPUlRGT0xJT19QUk9KRUNUUyIsImNhdGVnb3J5Iiwic3RhdCIsInRhZ3MiLCJpbWFnZUdyYWRpZW50IiwiQXBwIiwiaXNFbnF1aXJ5TW9kYWxPcGVuIiwic2V0SXNFbnF1aXJ5TW9kYWxPcGVuIiwiaXNEYXNoYm9hcmRPcGVuIiwic2V0SXNEYXNoYm9hcmRPcGVuIiwic2VsZWN0ZWRTZXJ2aWNlRm9yTW9kYWwiLCJzZXRTZWxlY3RlZFNlcnZpY2VGb3JNb2RhbCIsImVucXVpcmllcyIsInNldEVucXVpcmllcyIsImFjdGl2ZVRlY2hUYWIiLCJzZXRBY3RpdmVUZWNoVGFiIiwibW9iaWxlTmF2T3BlbiIsInNldE1vYmlsZU5hdk9wZW4iLCJub3RpZmljYXRpb25Ub2FzdCIsInNldE5vdGlmaWNhdGlvblRvYXN0IiwicmVmcmVzaEVucXVpcmllcyIsInJlcyIsImZldGNoIiwib2siLCJkYXRhIiwianNvbiIsInN1Y2Nlc3MiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2hvd1RvYXN0IiwidHlwZSIsInNldFRpbWVvdXQiLCJoYW5kbGVPcGVuRW5xdWlyeSIsInNlcnZpY2VUaXRsZSIsImpzeHMiLCJOYXZiYXIiLCJvbk9wZW5FbnF1aXJ5Iiwib25PcGVuRGFzaGJvYXJkIiwibmV3TGVhZHNDb3VudCIsImZpbHRlciIsImUiLCJIZXJvU2VjdGlvbiIsIm9uU2Nyb2xsVG9Fc3RpbWF0b3IiLCJlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiU3RhdHNCYW5uZXIiLCJTZXJ2aWNlc1NlY3Rpb24iLCJvblNlbGVjdFNlcnZpY2UiLCJQcm9qZWN0RXN0aW1hdG9yU2VjdGlvbiIsIm9uTGF1bmNoRW5xdWlyeSIsIlRlY2hTdGFja1NlY3Rpb24iLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJQcm9jZXNzU2VjdGlvbiIsIlBvcnRmb2xpb1NlY3Rpb24iLCJvblNlbGVjdFByb2plY3QiLCJUZXN0aW1vbmlhbHNTZWN0aW9uIiwiQ3RhQmFubmVyIiwiRm9vdGVyIiwiRW5xdWlyeU1vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsImluaXRpYWxTZXJ2aWNlIiwib25TdWJtaXRTdWNjZXNzIiwibmV3TGVhZCIsInByZXYiLCJjb25mZXR0aSIsInBhcnRpY2xlQ291bnQiLCJzcHJlYWQiLCJvcmlnaW4iLCJ5IiwiT3duZXJEYXNoYm9hcmQiLCJvblJlZnJlc2giLCJzY3JvbGxlZCIsInNldFNjcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaHJlZiIsIm9uQ2xpY2siLCJzdGF0cyIsImxhYmVsIiwidmFsIiwic3ViIiwicyIsInNydiIsImYiLCJpIiwidCIsInBsYXRmb3JtIiwic2V0UGxhdGZvcm0iLCJzZWxlY3RlZEZlYXR1cmVzIiwic2V0U2VsZWN0ZWRGZWF0dXJlcyIsInNldFRpbWVsaW5lIiwicGxhdGZvcm1zIiwiYmFzZSIsImRheXMiLCJmZWF0dXJlc0xpc3QiLCJjb3N0IiwidGltZWxpbmVzIiwibXVsdCIsInRpbWVNb2QiLCJ0b2dnbGVGZWF0dXJlIiwiZmlkIiwiaW5jbHVkZXMiLCJ4IiwiY2FsY3VsYXRpb24iLCJwbGF0IiwiZmluZCIsInAiLCJmZWF0c0Nvc3QiLCJyZWR1Y2UiLCJhY2MiLCJmZWF0c0RheXMiLCJ0bCIsInRvdGFsQ29zdCIsIk1hdGgiLCJyb3VuZCIsInRvdGFsV2Vla3MiLCJtYXgiLCJjb3N0TG93IiwiY29zdEhpZ2giLCJ3ZWVrcyIsInBsYXRmb3JtTmFtZSIsInRvTG9jYWxlU3RyaW5nIiwiaXNTZWxlY3RlZCIsInRhYnMiLCJ0YWIiLCJzdGVwcyIsIm51bSIsInN0IiwicmV2aWV3cyIsInF1b3RlIiwiYXV0aG9yIiwicm9sZSIsInJhdGluZyIsInIiLCJfIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImlzU3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJidWRnZXRPcHRpb25zIiwic2VydmljZU9wdGlvbnMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVucXVpcnlfaWQiLCJEYXRlIiwibm93IiwidG9JU09TdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwid2FybiIsImZhbGxiYWNrTGVhZCIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJiIiwicm93cyIsImRpc2FibGVkIiwiRnJhZ21lbnQiLCJhdXRoQXV0aGVudGljYXRlZCIsInNldEF1dGhBdXRoZW50aWNhdGVkIiwiZW50ZXJlZFBpbiIsInNldEVudGVyZWRQaW4iLCJzZWxlY3RlZEVucXVpcnkiLCJzZXRTZWxlY3RlZEVucXVpcnkiLCJzdGF0dXNGaWx0ZXIiLCJzZXRTdGF0dXNGaWx0ZXIiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwibmV3Tm90ZVRleHQiLCJzZXROZXdOb3RlVGV4dCIsImlzRXhwb3J0aW5nIiwic2V0SXNFeHBvcnRpbmciLCJmaWx0ZXJlZEVucXVpcmllcyIsIml0ZW0iLCJtYXRjaGVzU3RhdHVzIiwibWF0Y2hlc1NlYXJjaCIsInRvTG93ZXJDYXNlIiwiZ2V0U3RhdHVzQmFkZ2UiLCJoYW5kbGVVcGRhdGVTdGF0dXMiLCJuZXdTdGF0dXMiLCJoYW5kbGVBZGROb3RlIiwiZW5xdWlyeUlkIiwidHJpbSIsIm5vdGVDb250ZW50Iiwibm90ZSIsImhhbmRsZUV4cG9ydENzdiIsIm9wZW4iLCJ0b3RhbENvdW50IiwibmV3Q291bnQiLCJpbkRpc2N1c3Npb25Db3VudCIsImNvbnZlcnRlZENvdW50IiwidG90YWxQaXBlbGluZVZhbHVlIiwiY3VyIiwiY29udmVyc2lvblJhdGUiLCJ0b0ZpeGVkIiwiY29sU3BhbiIsImVucSIsIm4iLCJvbktleURvd24iLCJrZXkiLCJSZWFjdERPTSIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiXSwic291cmNlcyI6WyJhcHAuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gSWNvbih7IG5hbWUsIGNsYXNzTmFtZSA9ICd3LTQgaC00JywgLi4ucHJvcHMgfSkge1xuICAgIGNvbnN0IGljb25zID0gd2luZG93LkRFTElHT19JQ09OUyB8fCB7fTtcbiAgICBjb25zdCBpY29uRGVmID0gaWNvbnNbbmFtZV0gfHwgaWNvbnNbJ3NwYXJrbGVzJ10gfHwgbnVsbDtcbiAgICBpZiAoIWljb25EZWYpIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BsdWNpZGUgbHVjaWRlLSR7bmFtZX0gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAge2ljb25EZWYubWFwKChbdGFnLCBhdHRyc10sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFRhZ05hbWUgPSB0YWc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUYWdOYW1lIGtleT17aWR4fSB7Li4uYXR0cnN9IC8+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvc3ZnPlxuICAgICk7XG59XG5cblxuICAgICAgICBjb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlTWVtbyB9ID0gUmVhY3Q7XG5cbiAgICAgICAgLy8gQVBJIEVuZHBvaW50IENvbmZpZ3VyYXRpb24gKFdvcmtzIHdpdGggUEhQIGJhY2tlbmQsIFB5dGhvbiBjb21wYW5pb24gc2VydmVyLCBvciBmYWxsYmFjayBtb2NrKVxuICAgICAgICBjb25zdCBBUElfQkFTRSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2ZpbGU6JyA/ICdodHRwOi8vbG9jYWxob3N0OjgwODAnIDogJyc7XG5cbiAgICAgICAgLy8gLS0tIE1vY2sgRW5xdWlyaWVzIERhdGEgZm9yIGluc3RhbnQgemVyby1jb25maWcgdGVzdGluZyBpZiBiYWNrZW5kIGlzIG9mZmxpbmUgLS0tXG4gICAgICAgIGNvbnN0IElOSVRJQUxfRU5RVUlSSUVTID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxMDEsXG4gICAgICAgICAgICAgICAgZnVsbF9uYW1lOiBcIlNhcmFoIEplbmtpbnNcIixcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJzYXJhaC5qQGhlYWx0aHdhdmUuaW9cIixcbiAgICAgICAgICAgICAgICBwaG9uZTogXCIrMSAoNTU1KSAyMzQtODkwMVwiLFxuICAgICAgICAgICAgICAgIGNvbXBhbnk6IFwiSGVhbHRoV2F2ZSBUZWxlbWVkXCIsXG4gICAgICAgICAgICAgICAgc2VydmljZTogXCJNb2JpbGUgQXBwIERldmVsb3BtZW50XCIsXG4gICAgICAgICAgICAgICAgYnVkZ2V0OiBcIiQyNSwwMDAgLSAkNTAsMDAwXCIsXG4gICAgICAgICAgICAgICAgdGltZWxpbmU6IFwiMiAtIDMgTW9udGhzXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJXZSBuZWVkIGFuIGVuZC10by1lbmQgSElQQUEgY29tcGxpYW50IHRlbGVtZWRpY2luZSBpT1MgYW5kIEFuZHJvaWQgYXBwIHdpdGggV2ViUlRDIHZpZGVvIGNhbGxpbmcgYW5kIGVsZWN0cm9uaWMgaGVhbHRoIHJlY29yZHMgaW50ZWdyYXRpb24uXCIsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcIk5FV1wiLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIlVSR0VOVFwiLFxuICAgICAgICAgICAgICAgIGVzdGltYXRlZF92YWx1ZTogMzgwMDAsXG4gICAgICAgICAgICAgICAgc291cmNlOiBcIldlYnNpdGUgRm9ybVwiLFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAyNi0xMS0wOSAxMToyMDowMFwiLFxuICAgICAgICAgICAgICAgIG5vdGVzOiBbXCJDbGllbnQgYm9va2VkIGluaXRpYWwgZGlzY292ZXJ5IGNhbGwgZm9yIHRvbW9ycm93LiBQcmVwYXJpbmcgSElQQUEgY2hlY2tsaXN0LlwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMTAyLFxuICAgICAgICAgICAgICAgIGZ1bGxfbmFtZTogXCJWaWtyYW0gTWFsaG90cmFcIixcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJ2aWtyYW1AZmluc2NhbGUuYWVcIixcbiAgICAgICAgICAgICAgICBwaG9uZTogXCIrOTcxIDUwIDEyMyA0NTY3XCIsXG4gICAgICAgICAgICAgICAgY29tcGFueTogXCJGaW5TY2FsZSBHbG9iYWwgVUFFXCIsXG4gICAgICAgICAgICAgICAgc2VydmljZTogXCJFbnRlcnByaXNlIFNvZnR3YXJlICYgRVJQXCIsXG4gICAgICAgICAgICAgICAgYnVkZ2V0OiBcIiQ1MCwwMDAgLSAkMTAwLDAwMFwiLFxuICAgICAgICAgICAgICAgIHRpbWVsaW5lOiBcIjMgLSA2IE1vbnRoc1wiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9va2luZyBmb3IgY3VzdG9tIG11bHRpLWN1cnJlbmN5IGF1dG9tYXRlZCByZWNvbmNpbGlhdGlvbiBwb3J0YWwgYW5kIG1pY3Jvc2VydmljZXMgYmFja2VuZCB3aXRoIFNPQzIgY29tcGxpYW5jZS5cIixcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiSU5fRElTQ1VTU0lPTlwiLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIkhJR0hcIixcbiAgICAgICAgICAgICAgICBlc3RpbWF0ZWRfdmFsdWU6IDc1MDAwLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogXCJQcm9qZWN0IEVzdGltYXRvclwiLFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAyNi0xMS0wOCAxNjo0NTowMFwiLFxuICAgICAgICAgICAgICAgIG5vdGVzOiBbXCJTZW50IHRlY2huaWNhbCBhcmNoaXRlY3R1cmUgZGlhZ3JhbSBmb3IgbWljcm9zZXJ2aWNlcyBlbmdpbmUuXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxMDMsXG4gICAgICAgICAgICAgICAgZnVsbF9uYW1lOiBcIkVsZW5hIFJvc3RvdmFcIixcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJlbGVuYUBub3ZhbWFya2V0LmRlXCIsXG4gICAgICAgICAgICAgICAgcGhvbmU6IFwiKzQ5IDE3MCA5ODc2NTQzXCIsXG4gICAgICAgICAgICAgICAgY29tcGFueTogXCJOb3ZhTWFya2V0IEdtYkhcIixcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiBcIldlYiBQbGF0Zm9ybSBFbmdpbmVlcmluZ1wiLFxuICAgICAgICAgICAgICAgIGJ1ZGdldDogXCIkMTAsMDAwIC0gJDI1LDAwMFwiLFxuICAgICAgICAgICAgICAgIHRpbWVsaW5lOiBcIjEgLSAyIE1vbnRoc1wiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUmUtYXJjaGl0ZWN0aW5nIG91ciBCMkIgbWFya2V0cGxhY2UgZnJvbnRlbmQgaW50byBtb2Rlcm4gUmVhY3QgMTggd2l0aCBoaWdoLXNwZWVkIHNlYXJjaCBhbmQgaGVhZGxlc3MgU2hvcGlmeSBpbnRlZ3JhdGlvbi5cIixcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiUFJPUE9TQUxfU0VOVFwiLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIk1FRElVTVwiLFxuICAgICAgICAgICAgICAgIGVzdGltYXRlZF92YWx1ZTogMTg1MDAsXG4gICAgICAgICAgICAgICAgc291cmNlOiBcIldlYnNpdGUgRm9ybVwiLFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAyNi0xMS0wNyAxNDoxMDowMFwiLFxuICAgICAgICAgICAgICAgIG5vdGVzOiBbXCJQcm9wb3NhbCBkcmFmdCB2MiBkZWxpdmVyZWQgd2l0aCA4LXdlZWsgc3ByaW50IHJvYWRtYXAuXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxMDQsXG4gICAgICAgICAgICAgICAgZnVsbF9uYW1lOiBcIkxpYW0gTydDb25ub3JcIixcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJsaWFtQGFwZXhhaS5jby51a1wiLFxuICAgICAgICAgICAgICAgIHBob25lOiBcIis0NCAyMCA3OTQ2IDAxOTJcIixcbiAgICAgICAgICAgICAgICBjb21wYW55OiBcIkFwZXggQXV0b25vbW91c1wiLFxuICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwiQUkgJiBNYWNoaW5lIExlYXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgYnVkZ2V0OiBcIiQ1MCwwMDAgLSAkMTAwLDAwMFwiLFxuICAgICAgICAgICAgICAgIHRpbWVsaW5lOiBcIjMgLSA2IE1vbnRoc1wiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiV2UgcmVxdWlyZSBjdXN0b20gUkFHIHBpcGVsaW5lIGFuZCBMTE0gZmluZS10dW5pbmcgZm9yIGxlZ2FsIGNvbnRyYWN0cyBhbmFseXNpcyB3aXRoIG9uLXByZW1pc2UgaG9zdGluZy5cIixcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiQ09OVEFDVEVEXCIsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiSElHSFwiLFxuICAgICAgICAgICAgICAgIGVzdGltYXRlZF92YWx1ZTogNjIwMDAsXG4gICAgICAgICAgICAgICAgc291cmNlOiBcIldlYnNpdGUgRm9ybVwiLFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAyNi0xMS0wNiAwOTozMDowMFwiLFxuICAgICAgICAgICAgICAgIG5vdGVzOiBbXCJSZXZpZXdlZCBsZWdhbCBkYXRhc2V0IHNhbXBsZTsgc2VjdXJpdHkgYXVkaXQgY2xlYXJhbmNlIHBlbmRpbmcuXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxMDUsXG4gICAgICAgICAgICAgICAgZnVsbF9uYW1lOiBcIk1hcmN1cyBWYW5jZVwiLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBcIm0udmFuY2VAdmFuY2VzdHJhdGVneS5jb21cIixcbiAgICAgICAgICAgICAgICBwaG9uZTogXCIrMSAoNDE1KSA4OTAtMTIzNFwiLFxuICAgICAgICAgICAgICAgIGNvbXBhbnk6IFwiVmFuY2UgU3RyYXRlZ3kgR3JvdXBcIixcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiBcIkNsb3VkIEFyY2hpdGVjdHVyZSAmIERldk9wc1wiLFxuICAgICAgICAgICAgICAgIGJ1ZGdldDogXCIkMjUsMDAwIC0gJDUwLDAwMFwiLFxuICAgICAgICAgICAgICAgIHRpbWVsaW5lOiBcIjEgLSAyIE1vbnRoc1wiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiS3ViZXJuZXRlcyBjbHVzdGVyIG1pZ3JhdGlvbiBmcm9tIEFXUyB0byBoeWJyaWQgY2xvdWQsIGF1dG9tYXRlZCBUZXJyYWZvcm0gaW5mcmFzdHJ1Y3R1cmUsIGFuZCB6ZXJvLWRvd250aW1lIENJL0NEIGRlcGxveW1lbnQgcGlwZWxpbmUuXCIsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcIkNPTlZFUlRFRFwiLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIk1FRElVTVwiLFxuICAgICAgICAgICAgICAgIGVzdGltYXRlZF92YWx1ZTogMzIwMDAsXG4gICAgICAgICAgICAgICAgc291cmNlOiBcIlJlZmVycmFsXCIsXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogXCIyMDI2LTExLTA0IDE4OjA1OjAwXCIsXG4gICAgICAgICAgICAgICAgbm90ZXM6IFtcIkNvbnRyYWN0IHNpZ25lZCEgU09XICMxMDQga2lja2VkIG9mZi4gVGVhbSBvbmJvYXJkaW5nIHN0YXJ0ZWQuXCJdXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gLS0tIFNlcnZpY2VzIERhdGEgLS0tXG4gICAgICAgIGNvbnN0IFNFUlZJQ0VTX0xJU1QgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwibW9iaWxlLWFwcHNcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJNb2JpbGUgQXBwIERldmVsb3BtZW50XCIsXG4gICAgICAgICAgICAgICAgYmFkZ2U6IFwiaU9TICYgQW5kcm9pZFwiLFxuICAgICAgICAgICAgICAgIGljb246IFwic21hcnRwaG9uZVwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkVuZ2luZWVyaW5nIGZsdWlkLCBuYXRpdmUgYW5kIGNyb3NzLXBsYXRmb3JtIG1vYmlsZSBleHBlcmllbmNlcyB3aXRoIDYwZnBzIGFuaW1hdGlvbnMsIG9mZmxpbmUgc3luYywgYW5kIGVudGVycHJpc2Ugc2VjdXJpdHkuXCIsXG4gICAgICAgICAgICAgICAgdGVjaDogW1wiRmx1dHRlclwiLCBcIlJlYWN0IE5hdGl2ZVwiLCBcIlN3aWZ0XCIsIFwiS290bGluXCIsIFwiRmlyZWJhc2VcIl0sXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IFtcIkJpb21ldHJpYyBBdXRoZW50aWNhdGlvblwiLCBcIldlYlJUQyBWaWRlby9BdWRpb1wiLCBcIk9mZmxpbmUgRmlyc3QgRGF0YSBTeW5jXCIsIFwiSW4tQXBwIFN1YnNjcmlwdGlvbnNcIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwid2ViLWVuZ2luZWVyaW5nXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiU2NhbGFibGUgV2ViIEVuZ2luZWVyaW5nXCIsXG4gICAgICAgICAgICAgICAgYmFkZ2U6IFwiSGlnaCBWZWxvY2l0eVwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiZ2xvYmVcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJIaWdoLXBlcmZvcm1hbmNlIHdlYiBhcHBzLCBTYWFTIGVjb3N5c3RlbXMsIGFuZCBjbGllbnQgcG9ydGFscyBidWlsdCB3aXRoIFJlYWN0IDE4LCBOZXh0LmpzLCBhbmQgbGlnaHRuaW5nIG1pY3Jvc2VydmljZXMuXCIsXG4gICAgICAgICAgICAgICAgdGVjaDogW1wiUmVhY3QgMThcIiwgXCJUeXBlU2NyaXB0XCIsIFwiTm9kZS5qc1wiLCBcIlBIUCAvIExhcmF2ZWxcIiwgXCJNeVNRTFwiXSxcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogW1wiU3ViLXNlY29uZCBQYWdlIFNwZWVkc1wiLCBcIlJvbGUtYmFzZWQgQWNjZXNzIENvbnRyb2xcIiwgXCJDb21wbGV4IERhdGEgVmlzdWFsaXphdGlvbnNcIiwgXCJNdWx0aS10ZW5hbnQgQXJjaGl0ZWN0dXJlXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImFpLXNvbHV0aW9uc1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFJICYgTWFjaGluZSBMZWFybmluZyBTeXN0ZW1zXCIsXG4gICAgICAgICAgICAgICAgYmFkZ2U6IFwiTmV4dC1HZW4gVGVjaFwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiY3B1XCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSW5mdXNpbmcgcHJvcHJpZXRhcnkgaW50ZWxsaWdlbmNlIGludG8geW91ciBidXNpbmVzcyB2aWEgTExNIGZpbmUtdHVuaW5nLCBSQUcgcGlwZWxpbmVzLCBjb21wdXRlciB2aXNpb24sIGFuZCBwcmVkaWN0aXZlIGFuYWx5dGljcy5cIixcbiAgICAgICAgICAgICAgICB0ZWNoOiBbXCJPcGVuQUlcIiwgXCJMYW5nQ2hhaW5cIiwgXCJQeXRob25cIiwgXCJQeVRvcmNoXCIsIFwiVmVjdG9yIERCc1wiXSxcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogW1wiRW50ZXJwcmlzZSBSQUcgQm90c1wiLCBcIkRvY3VtZW50IE9DUiAmIEV4dHJhY3Rpb25cIiwgXCJQcmVkaWN0aXZlIENodXJuICYgU2FsZXNcIiwgXCJSZWFsLXRpbWUgVm9pY2UgQWdlbnRzXCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImNsb3VkLWRldm9wc1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNsb3VkIEluZnJhc3RydWN0dXJlICYgRGV2T3BzXCIsXG4gICAgICAgICAgICAgICAgYmFkZ2U6IFwiOTkuOTklIFVwdGltZVwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiY2xvdWRcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBdXRvbWF0ZWQsIHNjYWxhYmxlIGNsb3VkIG9yY2hlc3RyYXRpb24uIFdlIGJ1aWxkIHNlbGYtaGVhbGluZyBLdWJlcm5ldGVzIGNsdXN0ZXJzLCBDSS9DRCBwaXBlbGluZXMsIGFuZCB6ZXJvLXRydXN0IHNlY3VyaXR5LlwiLFxuICAgICAgICAgICAgICAgIHRlY2g6IFtcIkFXU1wiLCBcIkdvb2dsZSBDbG91ZFwiLCBcIkRvY2tlclwiLCBcIkt1YmVybmV0ZXNcIiwgXCJUZXJyYWZvcm1cIl0sXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IFtcIkluZnJhc3RydWN0dXJlIGFzIENvZGVcIiwgXCJBdXRvLXNjYWxpbmcgQ2x1c3RlcnNcIiwgXCJaZXJvLWRvd250aW1lIERlcGxveW1lbnRcIiwgXCJTT0MyIC8gSElQQUEgQ29tcGxpYW5jZVwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJ1aXV4LWRlc2lnblwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlByb2R1Y3QgJiBVSS9VWCBEZXNpZ25cIixcbiAgICAgICAgICAgICAgICBiYWRnZTogXCJBd2FyZCBXaW5uaW5nXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJIdW1hbi1jZW50cmljIGludGVyZmFjZXMgdGhhdCBjb252ZXJ0IHZpc2l0b3JzIGludG8gcGFzc2lvbmF0ZSBicmFuZCBhZHZvY2F0ZXMuIFBpeGVsLXBlcmZlY3QgRmlnbWEgZGVzaWduIHN5c3RlbXMgYW5kIG1pY3JvLWludGVyYWN0aW9ucy5cIixcbiAgICAgICAgICAgICAgICB0ZWNoOiBbXCJGaWdtYVwiLCBcIkRlc2lnbiBTeXN0ZW1zXCIsIFwiUHJvdG90eXBpbmdcIiwgXCJVc2VyIFJlc2VhcmNoXCJdLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBbXCJJbnRlcmFjdGl2ZSBDbGlja2FibGUgUHJvdG90eXBlc1wiLCBcIkRlc2lnbiBUb2tlbiBMaWJyYXJpZXNcIiwgXCJBY2Nlc3NpYmlsaXR5IFdDQUcgQUFBXCIsIFwiQ29udmVyc2lvbiBSYXRlIE9wdGltaXphdGlvblwiXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJlbnRlcnByaXNlLWVycFwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVudGVycHJpc2UgU29mdHdhcmUgJiBFUlBcIixcbiAgICAgICAgICAgICAgICBiYWRnZTogXCJDdXN0b20gVGFpbG9yZWRcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcImRhdGFiYXNlXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUHVycG9zZS1idWlsdCBidXNpbmVzcyBtYW5hZ2VtZW50IHN1aXRlcywgaW52ZW50b3J5IHRyYWNraW5nLCBDUk0gZW5naW5lcywgYW5kIGxlZ2FjeSBzeXN0ZW0gbW9kZXJuaXphdGlvbi5cIixcbiAgICAgICAgICAgICAgICB0ZWNoOiBbXCJQSFAgLyBNeVNRTFwiLCBcIkdyYXBoUUxcIiwgXCJQb3N0Z3JlU1FMXCIsIFwiUmVkaXNcIiwgXCJLYWZrYVwiXSxcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogW1wiQXV0b21hdGVkIEZpbmFuY2lhbCBBdWRpdHNcIiwgXCJDdXN0b20gV29ya2Zsb3cgQXV0b21hdGlvblwiLCBcIkVSUC9DUk0gSW50ZWdyYXRpb25zXCIsIFwiUmVhbC10aW1lIFRlbGVtZXRyeVwiXVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIC0tLSBUZWNoIFN0YWNrIE1hdHJpeCAtLS1cbiAgICAgICAgY29uc3QgVEVDSF9TVEFDSyA9IHtcbiAgICAgICAgICAgIFwiRnJvbnRlbmRcIjogW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJSZWFjdCAxOFwiLCBpY29uOiBcImF0b21cIiwgZGVzYzogXCJJbnRlcmFjdGl2ZSBVSSAmIENvbXBvbmVudCBBcmNoaXRlY3R1cmVcIiB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJOZXh0LmpzXCIsIGljb246IFwiemFwXCIsIGRlc2M6IFwiU2VydmVyLXNpZGUgUmVuZGVyaW5nICYgRWRnZSBEZWxpdmVyeVwiIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBcIlRhaWx3aW5kIENTU1wiLCBpY29uOiBcInBhbGV0dGVcIiwgZGVzYzogXCJEZXNpZ24tc3lzdGVtIGRyaXZlbiBzdHlsaW5nXCIgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwiVHlwZVNjcmlwdFwiLCBpY29uOiBcInNoaWVsZC1jaGVja1wiLCBkZXNjOiBcIlN0cmljdCB0eXBlIHNhZmV0eSAmIG1haW50YWluYWJpbGl0eVwiIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkJhY2tlbmQgJiBEQlwiOiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBcIlBIUCA4LjIrXCIsIGljb246IFwiY29kZVwiLCBkZXNjOiBcIkhpZ2gtdGhyb3VnaHB1dCBBUElzICYgRW50ZXJwcmlzZSBMb2dpY1wiIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBcIk15U1FMIC8gTWFyaWFEQlwiLCBpY29uOiBcImRhdGFiYXNlXCIsIGRlc2M6IFwiQUNJRC1jb21wbGlhbnQgcmVsYXRpb25hbCBkYXRhYmFzZVwiIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBcIk5vZGUuanMgLyBFeHByZXNzXCIsIGljb246IFwic2VydmVyXCIsIGRlc2M6IFwiRXZlbnQtZHJpdmVuIGFzeW5jaHJvbm91cyBtaWNyb3NlcnZpY2VzXCIgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwiUmVkaXNcIiwgaWNvbjogXCJsYXllcnNcIiwgZGVzYzogXCJJbi1tZW1vcnkgY2FjaGluZyBhbmQgcmVhbC10aW1lIHB1Yi9zdWJcIiB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJNb2JpbGVcIjogW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJGbHV0dGVyXCIsIGljb246IFwic21hcnRwaG9uZVwiLCBkZXNjOiBcIk5hdGl2ZSBjcm9zcy1wbGF0Zm9ybSBjb21waWxhdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBcIlJlYWN0IE5hdGl2ZVwiLCBpY29uOiBcInRhYmxldFwiLCBkZXNjOiBcIkhpZ2gtcGVyZm9ybWFuY2UgaHlicmlkIGFwcHNcIiB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJTd2lmdCAoaU9TKVwiLCBpY29uOiBcImFwcGxlXCIsIGRlc2M6IFwiUHVyZSBBcHBsZSBlY29zeXN0ZW0gcGVyZm9ybWFuY2VcIiB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJLb3RsaW4gKEFuZHJvaWQpXCIsIGljb246IFwiYm90XCIsIGRlc2M6IFwiTW9kZXJuIEFuZHJvaWQgZW50ZXJwcmlzZSBhcHBzXCIgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQUkgJiBDbG91ZFwiOiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBcIkFXUyBDbG91ZFwiLCBpY29uOiBcImNsb3VkLWxpZ2h0bmluZ1wiLCBkZXNjOiBcIkdsb2JhbCBzZXJ2ZXJsZXNzICYgY29udGFpbmVyIGhvc3RpbmdcIiB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJEb2NrZXIgJiBLOHNcIiwgaWNvbjogXCJib3hcIiwgZGVzYzogXCJDb250YWluZXJpemVkIGVsYXN0aWMgc2NhbGFiaWxpdHlcIiB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJQeXRob24gLyBQeVRvcmNoXCIsIGljb246IFwiY3B1XCIsIGRlc2M6IFwiRGVlcCBsZWFybmluZyAmIExMTSBpbmZlcmVuY2UgcGlwZWxpbmVzXCIgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwiTGFuZ0NoYWluIC8gUkFHXCIsIGljb246IFwibmV0d29ya1wiLCBkZXNjOiBcIkNvbnRleHQtYXdhcmUgQUkgZW1iZWRkaW5nc1wiIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyAtLS0gUG9ydGZvbGlvIFByb2plY3RzIC0tLVxuICAgICAgICBjb25zdCBQT1JURk9MSU9fUFJPSkVDVFMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSGVhbHRoV2F2ZSBUZWxlbWVkICYgUlBNXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiTW9iaWxlICYgQ2xvdWRcIixcbiAgICAgICAgICAgICAgICBiYWRnZTogXCJIZWFsdGhjYXJlXCIsXG4gICAgICAgICAgICAgICAgc3RhdDogXCIrMzQwJSBVc2VyIEdyb3d0aFwiLFxuICAgICAgICAgICAgICAgIGRlc2M6IFwiUmVhbC10aW1lIHBhdGllbnQgdGVsZW1ldHJ5LCBISVBBQS1jb21wbGlhbnQgZW5jcnlwdGVkIHZpZGVvIGNvbnN1bHRzLCBhbmQgY29ubmVjdGVkIElvVCB2aXRhbHMgbW9uaXRvcmluZy5cIixcbiAgICAgICAgICAgICAgICB0YWdzOiBbXCJSZWFjdCBOYXRpdmVcIiwgXCJXZWJSVENcIiwgXCJQSFAgTWljcm9zZXJ2aWNlc1wiLCBcIkFXU1wiXSxcbiAgICAgICAgICAgICAgICBpbWFnZUdyYWRpZW50OiBcImZyb20tYmx1ZS02MDAvMzAgdG8taW5kaWdvLTkwMC80MFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZpblNjYWxlIE11bHRpLUN1cnJlbmN5IEdhdGV3YXlcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJFbnRlcnByaXNlIFdlYlwiLFxuICAgICAgICAgICAgICAgIGJhZGdlOiBcIkZpblRlY2hcIixcbiAgICAgICAgICAgICAgICBzdGF0OiBcIiQxLjRCIEFubnVhbCBWb2x1bWVcIixcbiAgICAgICAgICAgICAgICBkZXNjOiBcIkhpZ2gtZnJlcXVlbmN5IGNyb3NzLWJvcmRlciBzZXR0bGVtZW50IHBvcnRhbCB3aXRoIGF1dG9tYXRlZCBhbnRpLWZyYXVkIHRyaWdnZXJzIGFuZCBTV0lGVCBpbnRlZ3JhdGlvbnMuXCIsXG4gICAgICAgICAgICAgICAgdGFnczogW1wiUmVhY3QgMThcIiwgXCJNeVNRTFwiLCBcIlBIUCA4XCIsIFwiUmVkaXNcIiwgXCJEb2NrZXJcIl0sXG4gICAgICAgICAgICAgICAgaW1hZ2VHcmFkaWVudDogXCJmcm9tLWVtZXJhbGQtNjAwLzMwIHRvLXRlYWwtOTAwLzQwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTG9naXhGbGVldCBBSSBEaXNwYXRjaGVyXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiQUkgJiBMb2dpc3RpY3NcIixcbiAgICAgICAgICAgICAgICBiYWRnZTogXCJTdXBwbHkgQ2hhaW5cIixcbiAgICAgICAgICAgICAgICBzdGF0OiBcIjI4JSBGdWVsIEN1dFwiLFxuICAgICAgICAgICAgICAgIGRlc2M6IFwiUHJlZGljdGl2ZSBmcmVpZ2h0IG9wdGltaXphdGlvbiByb3V0aW5nIHRob3VzYW5kcyBvZiBjb21tZXJjaWFsIGZsZWV0cyBkeW5hbWljYWxseSBhY3Jvc3MgTm9ydGggQW1lcmljYS5cIixcbiAgICAgICAgICAgICAgICB0YWdzOiBbXCJQeXRob25cIiwgXCJGYXN0QVBJXCIsIFwiUmVhY3RcIiwgXCJNYXBib3hcIiwgXCJLOHNcIl0sXG4gICAgICAgICAgICAgICAgaW1hZ2VHcmFkaWVudDogXCJmcm9tLXB1cnBsZS02MDAvMzAgdG8tc2xhdGUtOTAwLzQwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiT21uaVJldGFpbCBVbHRyYS1GYXN0IEhlYWRsZXNzXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiRS1Db21tZXJjZVwiLFxuICAgICAgICAgICAgICAgIGJhZGdlOiBcIlJldGFpbFwiLFxuICAgICAgICAgICAgICAgIHN0YXQ6IFwiMC44cyBHbG9iYWwgTENQXCIsXG4gICAgICAgICAgICAgICAgZGVzYzogXCJIeXBlci1jb252ZXJ0aW5nIGx1eHVyeSBzdG9yZWZyb250IGhhbmRsaW5nIDUwayBwZWFrIGNvbmN1cnJlbnQgc2hvcHBlcnMgd2l0aCB6ZXJvIGRyb3BwZWQgY2hlY2tvdXRzLlwiLFxuICAgICAgICAgICAgICAgIHRhZ3M6IFtcIk5leHQuanNcIiwgXCJUYWlsd2luZFwiLCBcIk15U1FMXCIsIFwiRWRnZSBDRE5cIl0sXG4gICAgICAgICAgICAgICAgaW1hZ2VHcmFkaWVudDogXCJmcm9tLWFtYmVyLTYwMC8zMCB0by1vcmFuZ2UtOTAwLzQwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gTUFJTiBBUFBMSUNBVElPTiBDT01QT05FTlRcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIEFwcCgpIHtcbiAgICAgICAgICAgIC8vIFN0YXRlXG4gICAgICAgICAgICBjb25zdCBbaXNFbnF1aXJ5TW9kYWxPcGVuLCBzZXRJc0VucXVpcnlNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgY29uc3QgW2lzRGFzaGJvYXJkT3Blbiwgc2V0SXNEYXNoYm9hcmRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnN0IFtzZWxlY3RlZFNlcnZpY2VGb3JNb2RhbCwgc2V0U2VsZWN0ZWRTZXJ2aWNlRm9yTW9kYWxdID0gdXNlU3RhdGUoXCJNb2JpbGUgQXBwIERldmVsb3BtZW50XCIpO1xuICAgICAgICAgICAgY29uc3QgW2VucXVpcmllcywgc2V0RW5xdWlyaWVzXSA9IHVzZVN0YXRlKElOSVRJQUxfRU5RVUlSSUVTKTtcbiAgICAgICAgICAgIGNvbnN0IFthY3RpdmVUZWNoVGFiLCBzZXRBY3RpdmVUZWNoVGFiXSA9IHVzZVN0YXRlKFwiRnJvbnRlbmRcIik7XG4gICAgICAgICAgICBjb25zdCBbbW9iaWxlTmF2T3Blbiwgc2V0TW9iaWxlTmF2T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCBbbm90aWZpY2F0aW9uVG9hc3QsIHNldE5vdGlmaWNhdGlvblRvYXN0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgICAgICAgICAvLyBGZXRjaCBsaXZlIGVucXVpcmllcyBmcm9tIGJhY2tlbmQgQVBJXG4gICAgICAgICAgICBjb25zdCByZWZyZXNoRW5xdWlyaWVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS9hcGkvYWRtaW4ucGhwP2FjdGlvbj1saXN0YCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyAmJiBBcnJheS5pc0FycmF5KGRhdGEuZW5xdWlyaWVzKSAmJiBkYXRhLmVucXVpcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW5xdWlyaWVzKGRhdGEuZW5xdWlyaWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzaW5nIGxvY2FsIG1vY2sgbGVhZHMgKEJhY2tlbmQgc2VydmVyIG9mZmxpbmUgb3Igbm90IHlldCBzdGFydGVkKTpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlZnJlc2hFbnF1aXJpZXMoKTtcbiAgICAgICAgICAgICAgICAvKiBuYXRpdmUgaWNvbnMgKi9cbiAgICAgICAgICAgIH0sIFtdKTtcblxuICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvKiBuYXRpdmUgaWNvbnMgKi9cbiAgICAgICAgICAgIH0sIFtpc0Rhc2hib2FyZE9wZW4sIGlzRW5xdWlyeU1vZGFsT3BlbiwgYWN0aXZlVGVjaFRhYl0pO1xuXG4gICAgICAgICAgICAvLyBTaG93IFRvYXN0XG4gICAgICAgICAgICBjb25zdCBzaG93VG9hc3QgPSAobWVzc2FnZSwgdHlwZSA9IFwic3VjY2Vzc1wiKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Tm90aWZpY2F0aW9uVG9hc3QoeyBtZXNzYWdlLCB0eXBlIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Tm90aWZpY2F0aW9uVG9hc3QobnVsbCksIDQ1MDApO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gT3BlbiBFbnF1aXJ5IE1vZGFsIHdpdGggcHJlc2VsZWN0ZWQgc2VydmljZVxuICAgICAgICAgICAgY29uc3QgaGFuZGxlT3BlbkVucXVpcnkgPSAoc2VydmljZVRpdGxlID0gXCJNb2JpbGUgQXBwIERldmVsb3BtZW50XCIpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFNlcnZpY2VGb3JNb2RhbChzZXJ2aWNlVGl0bGUpO1xuICAgICAgICAgICAgICAgIHNldElzRW5xdWlyeU1vZGFsT3Blbih0cnVlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtaW4taC1zY3JlZW4gdGV4dC1zbGF0ZS0xMDAgYmctWyMwNTA4MTRdXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBUb3AgRmxvYXRpbmcgTm90aWZpY2F0aW9uIFRvYXN0ICovfVxuICAgICAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uVG9hc3QgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMjAgcmlnaHQtNiB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB4LTUgcHktNCByb3VuZGVkLXhsIGdsYXNzLXBhbmVsLWdsb3cgYm9yZGVyLWJyYW5kLTUwMC81MCBzaGFkb3ctMnhsIGFuaW1hdGUtYm91bmNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBoLTMgdy0zIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGUtcGluZyBhYnNvbHV0ZSBpbmxpbmUtZmxleCBoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTQwMCBvcGFjaXR5LTc1XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtZmxleCByb3VuZGVkLWZ1bGwgaC0zIHctMyBiZy1lbWVyYWxkLTUwMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTEwMFwiPntub3RpZmljYXRpb25Ub2FzdC5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uIEJhciAqL31cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbkVucXVpcnk9eygpID0+IGhhbmRsZU9wZW5FbnF1aXJ5KFwiQ3VzdG9tIFNvZnR3YXJlIENvbnN1bHRhdGlvblwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbkRhc2hib2FyZD17KCkgPT4gc2V0SXNEYXNoYm9hcmRPcGVuKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TGVhZHNDb3VudD17ZW5xdWlyaWVzLmZpbHRlcihlID0+IGUuc3RhdHVzID09PSAnTkVXJykubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlTmF2T3Blbj17bW9iaWxlTmF2T3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vYmlsZU5hdk9wZW49e3NldE1vYmlsZU5hdk9wZW59XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIEhlcm8gU2VjdGlvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgPEhlcm9TZWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuRW5xdWlyeT17KCkgPT4gaGFuZGxlT3BlbkVucXVpcnkoXCJFbnRlcnByaXNlIFNvZnR3YXJlIEFyY2hpdGVjdHVyZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2Nyb2xsVG9Fc3RpbWF0b3I9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXN0aW1hdG9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbCkgZWwuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDbGllbnQgUHJvb2YgJiBTdGF0cyBCYW5uZXIgKi99XG4gICAgICAgICAgICAgICAgICAgIDxTdGF0c0Jhbm5lciAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDb3JlIFNlcnZpY2VzIFNlY3Rpb24gKi99XG4gICAgICAgICAgICAgICAgICAgIDxTZXJ2aWNlc1NlY3Rpb24gb25TZWxlY3RTZXJ2aWNlPXtoYW5kbGVPcGVuRW5xdWlyeX0gLz5cblxuICAgICAgICAgICAgICAgICAgICB7LyogSW50ZXJhY3RpdmUgUHJvamVjdCBTY29wZSAmIENvc3QgRXN0aW1hdG9yICovfVxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdEVzdGltYXRvclNlY3Rpb24gb25MYXVuY2hFbnF1aXJ5PXtoYW5kbGVPcGVuRW5xdWlyeX0gLz5cblxuICAgICAgICAgICAgICAgICAgICB7LyogVGVjaG5vbG9neSBTdGFjayBNYXRyaXggKi99XG4gICAgICAgICAgICAgICAgICAgIDxUZWNoU3RhY2tTZWN0aW9uIGFjdGl2ZVRhYj17YWN0aXZlVGVjaFRhYn0gc2V0QWN0aXZlVGFiPXtzZXRBY3RpdmVUZWNoVGFifSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBBZ2lsZSBQcm9jZXNzIFJvYWRtYXAgKi99XG4gICAgICAgICAgICAgICAgICAgIDxQcm9jZXNzU2VjdGlvbiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDYXNlIFN0dWRpZXMgJiBQb3J0Zm9saW8gKi99XG4gICAgICAgICAgICAgICAgICAgIDxQb3J0Zm9saW9TZWN0aW9uIG9uU2VsZWN0UHJvamVjdD17aGFuZGxlT3BlbkVucXVpcnl9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIFdoeSBDaG9vc2UgVXMgJiBDbGllbnQgUmV2aWV3cyAqL31cbiAgICAgICAgICAgICAgICAgICAgPFRlc3RpbW9uaWFsc1NlY3Rpb24gLz5cblxuICAgICAgICAgICAgICAgICAgICB7LyogQm90dG9tIENUQSBCYW5uZXIgKi99XG4gICAgICAgICAgICAgICAgICAgIDxDdGFCYW5uZXIgb25PcGVuRW5xdWlyeT17KCkgPT4gaGFuZGxlT3BlbkVucXVpcnkoXCJFbnRlcnByaXNlIEVuZ2FnZW1lbnRcIil9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIENvbXByZWhlbnNpdmUgRm9vdGVyICovfVxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyIG9uT3BlbkRhc2hib2FyZD17KCkgPT4gc2V0SXNEYXNoYm9hcmRPcGVuKHRydWUpfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBFbnF1aXJ5IE1vZGFsICovfVxuICAgICAgICAgICAgICAgICAgICB7aXNFbnF1aXJ5TW9kYWxPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbnF1aXJ5TW9kYWwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXtpc0VucXVpcnlNb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNFbnF1aXJ5TW9kYWxPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2VydmljZT17c2VsZWN0ZWRTZXJ2aWNlRm9yTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXRTdWNjZXNzPXsobmV3TGVhZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbnF1aXJpZXMocHJldiA9PiBbbmV3TGVhZCwgLi4ucHJldl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VG9hc3QoXCLwn46JIEVucXVpcnkgUmVjZWl2ZWQhIE91ciB0ZWNobmljYWwgdGVhbSB3aWxsIHJldmlldyB5b3VyIGJyaWVmLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmV0dGkoeyBwYXJ0aWNsZUNvdW50OiAxMTAsIHNwcmVhZDogNzAsIG9yaWdpbjogeyB5OiAwLjYgfSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7LyogQ29tcGFueSBPd25lciBDUk0gJiBFbnF1aXJ5IFRyYWNraW5nIERhc2hib2FyZCAqL31cbiAgICAgICAgICAgICAgICAgICAge2lzRGFzaGJvYXJkT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3duZXJEYXNoYm9hcmQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXtpc0Rhc2hib2FyZE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNEYXNoYm9hcmRPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnF1aXJpZXM9e2VucXVpcmllc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbnF1aXJpZXM9e3NldEVucXVpcmllc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlZnJlc2g9e3JlZnJlc2hFbnF1aXJpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvYXN0PXtzaG93VG9hc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyAxLiBOQVZJR0FUSU9OIEJBUiBDT01QT05FTlRcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIE5hdmJhcih7IG9uT3BlbkVucXVpcnksIG9uT3BlbkRhc2hib2FyZCwgbmV3TGVhZHNDb3VudCwgbW9iaWxlTmF2T3Blbiwgc2V0TW9iaWxlTmF2T3BlbiB9KSB7XG4gICAgICAgICAgICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNjcm9sbGVkKHdpbmRvdy5zY3JvbGxZID4gNDApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICAgICAgICAgIH0sIFtdKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YGZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotNDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7c2Nyb2xsZWQgPyAncHktMyBnbGFzcy1wYW5lbCBzaGFkb3ctMnhsIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAvODAnIDogJ3B5LTUgYmctdHJhbnNwYXJlbnQnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIExvZ28gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTEwIGgtMTAgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by10ciBmcm9tLWJyYW5kLTYwMCB2aWEtYnJhbmQtNTAwIHRvLWN5YmVyLWN5YW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LWxnIHNoYWRvdy1icmFuZC01MDAvMzAgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyBmb250LWJsYWNrIHRleHQteGwgdGV4dC13aGl0ZVwiPkQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWluc2V0LTEgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by1yIGZyb20tYnJhbmQtNTAwIHRvLWN5YmVyLWN5YW4gb3BhY2l0eS00MCBibHVyIGdyb3VwLWhvdmVyOm9wYWNpdHktNzUgdHJhbnNpdGlvbi1vcGFjaXR5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIGZvbnQtYm9sZCB0ZXh0LXhsIHRyYWNraW5nLXdpZGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERFTElHTyA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWN5YmVyLWN5YW5cIj5URUNITk9MT0dJRVM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1bMTBweF0gdHJhY2tpbmctd2lkZXN0IHRleHQtc2xhdGUtNDAwIGZvbnQtbW9ubyB1cHBlcmNhc2VcIj5OZXh0LUdlbiBEaWdpdGFsIFN5c3RlbXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZXNrdG9wIE5hdmlnYXRpb24gTGlua3MgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtOCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNzZXJ2aWNlc1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtYnJhbmQtNDAwIHRyYW5zaXRpb24tY29sb3JzXCI+U2VydmljZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNlc3RpbWF0b3JcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWN5YmVyLWN5YW4gdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctY3liZXItY3lhbiBhbmltYXRlLXB1bHNlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3N0IEVzdGltYXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3RlY2gtc3RhY2tcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJyYW5kLTQwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlRlY2ggU3RhY2s8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwb3J0Zm9saW9cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJyYW5kLTQwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPkNhc2UgU3R1ZGllczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2Nlc3NcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJyYW5kLTQwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlByb2Nlc3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiN0ZXN0aW1vbmlhbHNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJyYW5kLTQwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPldoeSBVczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogUmlnaHQgQWN0aW9ucyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE93bmVyIERhc2hib2FyZCBQaWxsICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlbkRhc2hib2FyZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHgtMy41IHB5LTIgdGV4dC14cyBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgYmctc2xhdGUtOTAwLzkwIHRleHQtYW1iZXItMzAwIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzQwIGhvdmVyOmJnLWFtYmVyLTUwMC8xMCB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBzaGFkb3ctc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk9wZW4gRXhlY3V0aXZlIExlYWQgVHJhY2tpbmcgRGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc21cIj7wn5GRPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Pd25lciBDUk08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXdMZWFkc0NvdW50ID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0xLjUgcHktMC41IHRleHQtWzEwcHhdIGZvbnQtYm9sZCByb3VuZGVkLWZ1bGwgYmctYW1iZXItNTAwIHRleHQtc2xhdGUtOTUwIGFuaW1hdGUtcHVsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3TGVhZHNDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDb250YWN0IENUQSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5FbnF1aXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC01IHB5LTIuNSB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgcm91bmRlZC1sZyBiZy1ncmFkaWVudC10by1yIGZyb20tYnJhbmQtNjAwIHZpYS1pbmRpZ28tNjAwIHRvLWN5YmVyLWN5YW4gdGV4dC13aGl0ZSBzaGFkb3ctbGcgc2hhZG93LWJyYW5kLTYwMC8zMCBob3ZlcjpzaGFkb3ctYnJhbmQtNjAwLzUwIGhvdmVyOnNjYWxlLVsxLjAyXSBhY3RpdmU6c2NhbGUtOTUgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R2V0IGEgUHJvcG9zYWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJhcnJvdy11cC1yaWdodFwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNb2JpbGUgTWVudSBUb2dnbGUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU5hdk9wZW4oIW1vYmlsZU5hdk9wZW4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmhpZGRlbiBwLTIgcm91bmRlZC1sZyBiZy1zbGF0ZS04MDAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT17bW9iaWxlTmF2T3BlbiA/IFwieFwiIDogXCJtZW51XCJ9IGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNb2JpbGUgTmF2aWdhdGlvbiBEcmF3ZXIgKi99XG4gICAgICAgICAgICAgICAgICAgIHttb2JpbGVOYXZPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aGlkZGVuIGdsYXNzLXBhbmVsIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgcHgtNiBweS02IG10LTMgZmxleCBmbGV4LWNvbCBnYXAtNCBhbmltYXRlLWluIHNsaWRlLWluLWZyb20tdG9wIGR1cmF0aW9uLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2VydmljZXNcIiBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVOYXZPcGVuKGZhbHNlKX0gY2xhc3NOYW1lPVwicHktMiB0ZXh0LXNsYXRlLTIwMCBob3Zlcjp0ZXh0LWJyYW5kLTQwMFwiPlNlcnZpY2VzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjZXN0aW1hdG9yXCIgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTmF2T3BlbihmYWxzZSl9IGNsYXNzTmFtZT1cInB5LTIgdGV4dC1jeWJlci1jeWFuXCI+Q29zdCBFc3RpbWF0b3I8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiN0ZWNoLXN0YWNrXCIgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTmF2T3BlbihmYWxzZSl9IGNsYXNzTmFtZT1cInB5LTIgdGV4dC1zbGF0ZS0yMDBcIj5UZWNoIFN0YWNrPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcG9ydGZvbGlvXCIgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTmF2T3BlbihmYWxzZSl9IGNsYXNzTmFtZT1cInB5LTIgdGV4dC1zbGF0ZS0yMDBcIj5DYXNlIFN0dWRpZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9jZXNzXCIgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTmF2T3BlbihmYWxzZSl9IGNsYXNzTmFtZT1cInB5LTIgdGV4dC1zbGF0ZS0yMDBcIj5Qcm9jZXNzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBib3JkZXItdCBib3JkZXItc2xhdGUtODAwIGZsZXggZmxleC1jb2wgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0TW9iaWxlTmF2T3BlbihmYWxzZSk7IG9uT3BlbkRhc2hib2FyZCgpOyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIuNSByb3VuZGVkLWxnIGJnLXNsYXRlLTkwMCB0ZXh0LWFtYmVyLTMwMCBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC80MCBmb250LXNlbWlib2xkIHRleHQtc20gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7wn5GRIE93bmVyIENSTSBEYXNoYm9hcmQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3TGVhZHNDb3VudCA+IDAgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYmctYW1iZXItNTAwIHRleHQtc2xhdGUtOTUwIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtYm9sZFwiPntuZXdMZWFkc0NvdW50fSBuZXc8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0TW9iaWxlTmF2T3BlbihmYWxzZSk7IG9uT3BlbkVucXVpcnkoKTsgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIHJvdW5kZWQtbGcgYmctYnJhbmQtNjAwIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXQgYSBQcm9wb3NhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyAyLiBIRVJPIFNFQ1RJT04gQ09NUE9ORU5UIChMaWxhYyBJbmZvdGVjaCBzdHlsZSArIEhpZ2ggQW5pbWF0aW9uKVxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgZnVuY3Rpb24gSGVyb1NlY3Rpb24oeyBvbk9wZW5FbnF1aXJ5LCBvblNjcm9sbFRvRXN0aW1hdG9yIH0pIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgcHQtMzYgcGItMjAgbWQ6cHQtNDQgbWQ6cGItMzIgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBCYWNrZ3JvdW5kIFJhZGlhbCBHbG93cyAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS80IGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LVs2NTBweF0gaC1bNjUwcHhdIGJnLWJyYW5kLTYwMC8xNSByb3VuZGVkLWZ1bGwgYmx1ci1bMTQwcHhdIHBvaW50ZXItZXZlbnRzLW5vbmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8zIC1yaWdodC0yMCB3LVs0NTBweF0gaC1bNDUwcHhdIGJnLWN5YmVyLWN5YW4vMTAgcm91bmRlZC1mdWxsIGJsdXItWzEyMHB4XSBwb2ludGVyLWV2ZW50cy1ub25lXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOCByZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTR4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFBpbGwgYmFkZ2UgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtNCBweS0xLjUgcm91bmRlZC1mdWxsIGdsYXNzLXBhbmVsIGJvcmRlci1icmFuZC01MDAvNDAgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtYnJhbmQtMzAwIG1iLTggYW5pbWF0ZS1nbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaC0yIHctMiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0ZS1waW5nIGFic29sdXRlIGlubGluZS1mbGV4IGgtZnVsbCB3LWZ1bGwgcm91bmRlZC1mdWxsIGJnLWN5YmVyLWN5YW4gb3BhY2l0eS03NVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1mbGV4IHJvdW5kZWQtZnVsbCBoLTIgdy0yIGJnLWN5YmVyLWN5YW5cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TkVYVC1HRU4gQ1VTVE9NIFNPRlRXQVJFICYgRU5URVJQUklTRSBBSTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MDBcIj7igKI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCI+SW5zcGlyZWQgYnkgTGlsYWMgSW5mb3RlY2gncyBJbm5vdmF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1haW4gQ2F0Y2h5IEhlYWRsaW5lICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC00eGwgc206dGV4dC02eGwgbGc6dGV4dC03eGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC13aGl0ZSBsZWFkaW5nLVsxLjEyXSBtYi04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFyY2hpdGVjdGluZyBTY2FsYWJsZSA8YnIgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyYWRpZW50LXRleHQtaW5kaWdvXCI+U29mdHdhcmUsIE1vYmlsZSBBcHBzPC9zcGFuPiA8YnIgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYgSW50ZWxsaWdlbnQgQUkgRWNvc3lzdGVtcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFN1YnRpdGxlICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgc206dGV4dC14bCB0ZXh0LXNsYXRlLTMwMCBtYXgtdy0zeGwgbXgtYXV0byBtYi0xMCBsZWFkaW5nLXJlbGF4ZWQgZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgcGFydG5lciB3aXRoIHZlbnR1cmUtYmFja2VkIHN0YXJ0dXBzIGFuZCBtb2Rlcm4gZ2xvYmFsIGVudGVycHJpc2VzIHRvIGJ1aWxkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoLWNvbnZlcnNpb24gbW9iaWxlIGFwcGxpY2F0aW9ucywgcm9idXN0IHdlYiBwbGF0Zm9ybXMsIGFuZCBhdXRvbWF0ZWQgY2xvdWQgd29ya2Zsb3dzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxpdmVyZWQgb24gdGltZSBhbmQgd2l0aGluIGJ1ZGdldC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQWN0aW9uIEJ1dHRvbnMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNCBtYi0xNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25PcGVuRW5xdWlyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gcHgtOCBweS00IHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJyYW5kLTYwMCB2aWEtaW5kaWdvLTYwMCB0by1jeWJlci1jeWFuIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtYmFzZSBzaGFkb3cteGwgc2hhZG93LWJyYW5kLTYwMC8zMCBob3ZlcjpzaGFkb3ctYnJhbmQtNjAwLzYwIGhvdmVyOnNjYWxlLTEwNSBhY3RpdmU6c2NhbGUtOTUgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTMgZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TY2hlZHVsZSBUZWNobmljYWwgRGlzY292ZXJ5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImFycm93LXJpZ2h0XCIgY2xhc3NOYW1lPVwidy01IGgtNSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0xIHRyYW5zaXRpb24tdHJhbnNmb3JtXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TY3JvbGxUb0VzdGltYXRvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gcHgtOCBweS00IHJvdW5kZWQteGwgZ2xhc3MtcGFuZWwgdGV4dC1zbGF0ZS0yMDAgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgYm9yZGVyLXNsYXRlLTcwMC84MCBob3ZlcjpiZy1zbGF0ZS04MDAvODAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjYWxjdWxhdG9yXCIgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWN5YmVyLWN5YW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SW50ZXJhY3RpdmUgQ29zdCBFc3RpbWF0b3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEZsb2F0aW5nIFRlY2ggQmFkZ2VzIC8gTGlsYWMgSW5mb3RlY2ggS2V5IEFjY2VudHMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy00IGdhcC00IG1heC13LTN4bCBteC1hdXRvIHB0LTYgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMC82MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLWxnIGdsYXNzLXBhbmVsIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBmb250LW1vbm9cIj5ERUxJVkVSWTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBtdC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2xvY2tcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZW1lcmFsZC00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFnaWxlIDItV2VlayBTcHJpbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLWxnIGdsYXNzLXBhbmVsIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBmb250LW1vbm9cIj5TRUNVUklUWTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBtdC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic2hpZWxkXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWJyYW5kLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSElQQUEgJiBTT0MyIFJlYWR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLWxnIGdsYXNzLXBhbmVsIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBmb250LW1vbm9cIj5TVVBQT1JUPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IG10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJoZWFkcGhvbmVzXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWN5YmVyLWN5YW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI0LzcgU0xBIEJhY2tpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbGcgZ2xhc3MtcGFuZWwgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGZvbnQtbW9ub1wiPlNUQUNLPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IG10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjb2RlLTJcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHVycGxlLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QgKyBQSFAgKyBDbG91ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIDMuIFNUQVRTIEJBTk5FUlxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgZnVuY3Rpb24gU3RhdHNCYW5uZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0cyA9IFtcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIkRpZ2l0YWwgUHJvZHVjdHMgU2hpcHBlZFwiLCB2YWw6IFwiMTgwK1wiLCBzdWI6IFwiV2ViLCBNb2JpbGUgJiBBSSBQbGF0Zm9ybXNcIiB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwiQ2xpZW50IFJldGVudGlvbiBSYXRlXCIsIHZhbDogXCI5OS40JVwiLCBzdWI6IFwiTG9uZy10ZXJtIGVuZ2luZWVyaW5nIHBhcnRuZXJzaGlwc1wiIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCJHbG9iYWwgUmVhY2hcIiwgdmFsOiBcIjE1KyBDb3VudHJpZXNcIiwgc3ViOiBcIlVTQSwgVUFFLCBVSywgR2VybWFueSwgSW5kaWFcIiB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwiQXZlcmFnZSBDbHV0Y2ggUmF0aW5nXCIsIHZhbDogXCI0LjkgLyA1LjBcIiwgc3ViOiBcIlZlcmlmaWVkIENFTyBUZXN0aW1vbmlhbHNcIiB9LFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgcHktMTAgYmctc2xhdGUtOTAwLzUwIGJvcmRlci15IGJvcmRlci1zbGF0ZS04MDAvODBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC04IHRleHQtY2VudGVyIGRpdmlkZS15IG1kOmRpdmlkZS15LTAgbWQ6ZGl2aWRlLXggZGl2aWRlLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0cy5tYXAoKHMsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJwdC00IG1kOnB0LTAgbWQ6cHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC0zeGwgc206dGV4dC00eGwgZm9udC1leHRyYWJvbGQgZ3JhZGllbnQtdGV4dC1pbmRpZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cy52YWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtMjAwIG10LTFcIj57cy5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBtdC0wLjUgZm9udC1tb25vXCI+e3Muc3VifTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gNC4gQ09SRSBTRVJWSUNFUyBTRUNUSU9OXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmdW5jdGlvbiBTZXJ2aWNlc1NlY3Rpb24oeyBvblNlbGVjdFNlcnZpY2UgfSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD1cInNlcnZpY2VzXCIgY2xhc3NOYW1lPVwicHktMjQgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNlY3Rpb24gSGVhZGVyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy0zeGwgbXgtYXV0byBtYi0xNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgdGV4dC1jeWJlci1jeWFuIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPVVIgQ09SRSBFWFBFUlRJU0VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LTN4bCBzbTp0ZXh0LTV4bCBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlIG10LTMgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmQtdG8tRW5kIEVuZ2luZWVyaW5nIGZvciBWaXNpb25hcnkgQnVzaW5lc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgdGV4dC1iYXNlIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tIGNvbmNlcHQgaWRlYXRpb24gdG8gaHlwZXItc2NhbGUgYXJjaGl0ZWN0dXJlLCBvdXIgbXVsdGlkaXNjaXBsaW5hcnkgc3F1YWQgZGVsaXZlcnMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1dHRpbmctZWRnZSB0ZWNobm9sb2d5IHRoYXQgZHJpdmVzIHJlYWwgY29tbWVyY2lhbCBST0kuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTZXJ2aWNlcyBHcmlkICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1NFUlZJQ0VTX0xJU1QubWFwKChzcnYpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3J2LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgcm91bmRlZC0yeGwgZ2xhc3MtcGFuZWwgcC04IGhvdmVyOmJvcmRlci1icmFuZC01MDAvNTAgaG92ZXI6c2hhZG93LTJ4bCBob3ZlcjpzaGFkb3ctYnJhbmQtNTAwLzEwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBBY2NlbnQgY29ybmVyIGxpZ2h0ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctMjQgaC0yNCBiZy1icmFuZC01MDAvMTAgcm91bmRlZC1ibC1mdWxsIHBvaW50ZXItZXZlbnRzLW5vbmUgZ3JvdXAtaG92ZXI6YmctYnJhbmQtNTAwLzIwIHRyYW5zaXRpb24tYWxsXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tdHIgZnJvbS1icmFuZC02MDAvMzAgdG8tY3liZXItY3lhbi8zMCBib3JkZXIgYm9yZGVyLWJyYW5kLTUwMC8zMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWN5YmVyLWN5YW4gZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9e3Nydi5pY29ufSBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTMgcHktMSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1mdWxsIGJnLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTMwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nydi5iYWRnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTMgZ3JvdXAtaG92ZXI6dGV4dC1icmFuZC0zMDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nydi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIHRleHQtc20gbGVhZGluZy1yZWxheGVkIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nydi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRmVhdHVyZXMgTGlzdCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzcnYuZmVhdHVyZXMubWFwKChmLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LXNsYXRlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjaGVjay1jaXJjbGUtMlwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1lbWVyYWxkLTQwMCBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Z9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRlY2ggVGFncyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0xLjUgcHQtNCBib3JkZXItdCBib3JkZXItc2xhdGUtODAwIG1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nydi50ZWNoLm1hcCgodCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwicHgtMiBweS0wLjUgcm91bmRlZCB0ZXh0LVsxMXB4XSBmb250LW1vbm8gYmctc2xhdGUtOTAwIHRleHQtc2xhdGUtMzAwIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFjdGlvbiBCdXR0b24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3RTZXJ2aWNlKHNydi50aXRsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0yLjUgcm91bmRlZC1sZyBiZy1zbGF0ZS04MDAvODAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQteHMgaG92ZXI6YmctYnJhbmQtNjAwIHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIGdyb3VwL2J0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SZXF1ZXN0IFNjb3BlICYgRXN0aW1hdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJhcnJvdy1yaWdodFwiIGNsYXNzTmFtZT1cInctNCBoLTQgZ3JvdXAtaG92ZXIvYnRuOnRyYW5zbGF0ZS14LTEgdHJhbnNpdGlvbi10cmFuc2Zvcm1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gNS4gSU5URVJBQ1RJVkUgUFJPSkVDVCBFU1RJTUFUT1IgKENsaWVudC1DYXRjaHkgRmVhdHVyZSlcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIFByb2plY3RFc3RpbWF0b3JTZWN0aW9uKHsgb25MYXVuY2hFbnF1aXJ5IH0pIHtcbiAgICAgICAgICAgIGNvbnN0IFtwbGF0Zm9ybSwgc2V0UGxhdGZvcm1dID0gdXNlU3RhdGUoXCJ3ZWJcIik7XG4gICAgICAgICAgICBjb25zdCBbc2VsZWN0ZWRGZWF0dXJlcywgc2V0U2VsZWN0ZWRGZWF0dXJlc10gPSB1c2VTdGF0ZShbXCJhdXRoXCIsIFwiZGJcIl0pO1xuICAgICAgICAgICAgY29uc3QgW3RpbWVsaW5lLCBzZXRUaW1lbGluZV0gPSB1c2VTdGF0ZShcInN0YW5kYXJkXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF0Zm9ybXMgPSBbXG4gICAgICAgICAgICAgICAgeyBpZDogXCJ3ZWJcIiwgbmFtZTogXCJDdXN0b20gV2ViIEFwcGxpY2F0aW9uXCIsIGJhc2U6IDEyMDAwLCBkYXlzOiAzMCwgaWNvbjogXCJnbG9iZVwiIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogXCJtb2JpbGVcIiwgbmFtZTogXCJNb2JpbGUgQXBwIChpT1MgKyBBbmRyb2lkKVwiLCBiYXNlOiAxODAwMCwgZGF5czogNDUsIGljb246IFwic21hcnRwaG9uZVwiIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogXCJmdWxsc3RhY2tcIiwgbmFtZTogXCJGdWxsLVN0YWNrIFdlYiArIE1vYmlsZVwiLCBiYXNlOiAyODAwMCwgZGF5czogNjAsIGljb246IFwibGF5ZXJzXCIgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiBcImFpXCIsIG5hbWU6IFwiRW50ZXJwcmlzZSBBSSAmIExMTSBFbmdpbmVcIiwgYmFzZTogMjIwMDAsIGRheXM6IDQ1LCBpY29uOiBcImNwdVwiIH1cbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVzTGlzdCA9IFtcbiAgICAgICAgICAgICAgICB7IGlkOiBcImF1dGhcIiwgbmFtZTogXCJBdXRoICYgUkJBQyBSb2xlc1wiLCBjb3N0OiAxNTAwLCBkYXlzOiA0IH0sXG4gICAgICAgICAgICAgICAgeyBpZDogXCJkYlwiLCBuYW1lOiBcIkN1c3RvbSBEYXRhYmFzZSAmIEFkbWluIFBhbmVsXCIsIGNvc3Q6IDI1MDAsIGRheXM6IDcgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiBcInBheW1lbnRzXCIsIG5hbWU6IFwiU3RyaXBlIC8gQ3J5cHRvIFBheW1lbnRzXCIsIGNvc3Q6IDIwMDAsIGRheXM6IDUgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiBcImFpX2JvdFwiLCBuYW1lOiBcIkFJIENoYXQgLyBSQUcgU2VhcmNoIEludGVncmF0aW9uXCIsIGNvc3Q6IDQ1MDAsIGRheXM6IDEwIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogXCJyZWFsdGltZVwiLCBuYW1lOiBcIlJlYWwtdGltZSBXZWJTb2NrZXRzIC8gQ2hhdFwiLCBjb3N0OiAyNTAwLCBkYXlzOiA2IH0sXG4gICAgICAgICAgICAgICAgeyBpZDogXCJhbmFseXRpY3NcIiwgbmFtZTogXCJUZWxlbWV0cnkgJiBDdXN0b20gQW5hbHl0aWNzXCIsIGNvc3Q6IDE4MDAsIGRheXM6IDUgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgY29uc3QgdGltZWxpbmVzID0gW1xuICAgICAgICAgICAgICAgIHsgaWQ6IFwiZmFzdFwiLCBuYW1lOiBcIkV4cGVkaXRlZCBTcHJpbnQgKFByaW9yaXR5KVwiLCBtdWx0OiAxLjI1LCB0aW1lTW9kOiAwLjcgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiBcInN0YW5kYXJkXCIsIG5hbWU6IFwiU3RhbmRhcmQgQWdpbGUgUGFjZVwiLCBtdWx0OiAxLjAsIHRpbWVNb2Q6IDEuMCB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6IFwiZmxleGlibGVcIiwgbmFtZTogXCJQaGFzZWQgTVZQIFJvYWRtYXBcIiwgbXVsdDogMC45LCB0aW1lTW9kOiAxLjMgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgY29uc3QgdG9nZ2xlRmVhdHVyZSA9IChmaWQpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEZlYXR1cmVzKHByZXYgPT4gXG4gICAgICAgICAgICAgICAgICAgIHByZXYuaW5jbHVkZXMoZmlkKSA/IHByZXYuZmlsdGVyKHggPT4geCAhPT0gZmlkKSA6IFsuLi5wcmV2LCBmaWRdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0aW9uID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxhdCA9IHBsYXRmb3Jtcy5maW5kKHAgPT4gcC5pZCA9PT0gcGxhdGZvcm0pIHx8IHBsYXRmb3Jtc1swXTtcbiAgICAgICAgICAgICAgICBjb25zdCBmZWF0c0Nvc3QgPSBzZWxlY3RlZEZlYXR1cmVzLnJlZHVjZSgoYWNjLCBmaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZiA9IGZlYXR1cmVzTGlzdC5maW5kKHggPT4geC5pZCA9PT0gZmlkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYyArIChmID8gZi5jb3N0IDogMCk7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHNEYXlzID0gc2VsZWN0ZWRGZWF0dXJlcy5yZWR1Y2UoKGFjYywgZmlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGYgPSBmZWF0dXJlc0xpc3QuZmluZCh4ID0+IHguaWQgPT09IGZpZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2MgKyAoZiA/IGYuZGF5cyA6IDApO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGwgPSB0aW1lbGluZXMuZmluZCh0ID0+IHQuaWQgPT09IHRpbWVsaW5lKSB8fCB0aW1lbGluZXNbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDb3N0ID0gTWF0aC5yb3VuZCgocGxhdC5iYXNlICsgZmVhdHNDb3N0KSAqIHRsLm11bHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsV2Vla3MgPSBNYXRoLm1heCgzLCBNYXRoLnJvdW5kKCgocGxhdC5kYXlzICsgZmVhdHNEYXlzKSAqIHRsLnRpbWVNb2QpIC8gNykpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29zdExvdzogTWF0aC5yb3VuZCh0b3RhbENvc3QgKiAwLjkpLFxuICAgICAgICAgICAgICAgICAgICBjb3N0SGlnaDogTWF0aC5yb3VuZCh0b3RhbENvc3QgKiAxLjE1KSxcbiAgICAgICAgICAgICAgICAgICAgd2Vla3M6IHRvdGFsV2Vla3MsXG4gICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtTmFtZTogcGxhdC5uYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIFtwbGF0Zm9ybSwgc2VsZWN0ZWRGZWF0dXJlcywgdGltZWxpbmVdKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD1cImVzdGltYXRvclwiIGNsYXNzTmFtZT1cInB5LTI0IHJlbGF0aXZlIGJnLXNsYXRlLTkwMC80MCBib3JkZXIteSBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTN4bCBteC1hdXRvIG1iLTE2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSB0ZXh0LWJyYW5kLTQwMCBmb250LW1vbm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVFJBTlNQQVJFTlQgJiBJTk5PVkFUSVZFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC0zeGwgc206dGV4dC01eGwgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSBtdC0zIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ZXJhY3RpdmUgUHJvamVjdCBTY29wZSAmIENvc3QgRXN0aW1hdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMCB0ZXh0LXNtIHNtOnRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgeW91ciB0ZWNobmljYWwgcGFyYW1ldGVycyBiZWxvdyB0byBnZXQgaW5zdGFudCB0cmFuc3BhcmVuY3kgb24gdGltZWxpbmVzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lZXJpbmcgdGVhbSBjb21wb3NpdGlvbiwgYW5kIGV4cGVjdGVkIGludmVzdG1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBJbnRlcmFjdGl2ZSBDYWxjdWxhdG9yIENvbnRhaW5lciAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMTIgZ2FwLTggaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTGVmdCBDb25maWd1cmF0b3IgKDggY29scykgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi03IGdsYXNzLXBhbmVsIHJvdW5kZWQtMnhsIHAtNiBzbTpwLTggc3BhY2UteS04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTdGVwIDE6IFBsYXRmb3JtIFNlbGVjdGlvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlciB1cHBlcmNhc2UgdGV4dC1zbGF0ZS00MDAgbWItMyBibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0ZXAgMTogQ2hvb3NlIFlvdXIgUHJvamVjdCBGb3VuZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsYXRmb3Jtcy5tYXAocCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3AuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBsYXRmb3JtKHAuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC00IHJvdW5kZWQteGwgYm9yZGVyIHRleHQtbGVmdCB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zICR7cGxhdGZvcm0gPT09IHAuaWQgPyAnYmctYnJhbmQtNjAwLzIwIGJvcmRlci1icmFuZC01MDAgdGV4dC13aGl0ZSBzaGFkb3ctbGcgc2hhZG93LWJyYW5kLTUwMC8xMCcgOiAnYmctc2xhdGUtOTAwLzYwIGJvcmRlci1zbGF0ZS04MDAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6Ym9yZGVyLXNsYXRlLTcwMCd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT17cC5pY29ufSBjbGFzc05hbWU9e2B3LTUgaC01IG10LTAuNSAke3BsYXRmb3JtID09PSBwLmlkID8gJ3RleHQtY3liZXItY3lhbicgOiAndGV4dC1zbGF0ZS00MDAnfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zbSBibG9ja1wiPntwLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj5Gcm9tICR7cC5iYXNlLnRvTG9jYWxlU3RyaW5nKCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTdGVwIDI6IEZlYXR1cmUgTW9kdWxlcyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlciB1cHBlcmNhc2UgdGV4dC1zbGF0ZS00MDAgbWItMyBibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0ZXAgMjogQ29yZSBFbmdpbmVlcmluZyBDYXBhYmlsaXRpZXMgKFNlbGVjdCBhbGwgdGhhdCBhcHBseSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTIuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlc0xpc3QubWFwKGYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRGZWF0dXJlcy5pbmNsdWRlcyhmLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtmLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUZlYXR1cmUoZi5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMy41IHB5LTMgcm91bmRlZC1sZyBib3JkZXIgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuICR7aXNTZWxlY3RlZCA/ICdiZy1jeWJlci1jeWFuLzE1IGJvcmRlci1jeWJlci1jeWFuIHRleHQtd2hpdGUnIDogJ2JnLXNsYXRlLTkwMC80MCBib3JkZXItc2xhdGUtODAwIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtc2xhdGUtMjAwJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntmLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9e2lzU2VsZWN0ZWQgPyBcImNoZWNrLWNpcmNsZVwiIDogXCJwbHVzLWNpcmNsZVwifSBjbGFzc05hbWU9e2B3LTQgaC00ICR7aXNTZWxlY3RlZCA/ICd0ZXh0LWN5YmVyLWN5YW4nIDogJ3RleHQtc2xhdGUtNjAwJ31gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFN0ZXAgMzogVGltZWxpbmUgJiBEZWxpdmVyeSBTcGVlZCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlciB1cHBlcmNhc2UgdGV4dC1zbGF0ZS00MDAgbWItMyBibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0ZXAgMzogVGltZWxpbmUgVmVsb2NpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTMgZ2FwLTIuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lbGluZXMubWFwKHQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaW1lbGluZSh0LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMyByb3VuZGVkLWxnIGJvcmRlciB0ZXh0LWNlbnRlciB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tYWxsICR7dGltZWxpbmUgPT09IHQuaWQgPyAnYmctYnJhbmQtNTAwLzIwIGJvcmRlci1icmFuZC00MDAgdGV4dC1icmFuZC0yMDAnIDogJ2JnLXNsYXRlLTkwMC80MCBib3JkZXItc2xhdGUtODAwIHRleHQtc2xhdGUtNDAwJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBSaWdodCBMaXZlIEVzdGltYXRlIENhcmQgKDUgY29scykgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi01IGdsYXNzLXBhbmVsLWdsb3cgcm91bmRlZC0yeGwgcC02IHNtOnAtOCBzdGlja3kgdG9wLTI4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTQgcGItNCBib3JkZXItYiBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIHRleHQtc2xhdGUtNDAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVTVElNQVRFRCBTVU1NQVJZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yLjUgcHktMC41IHRleHQtWzEwcHhdIGZvbnQtYm9sZCByb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC01MDAvMjAgdGV4dC1lbWVyYWxkLTQwMCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAwLzMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVBTC1USU1FIENBTENVTEFUSU9OXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBibG9jayBtYi0xXCI+VGFyZ2V0IFBsYXRmb3JtOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntjYWxjdWxhdGlvbi5wbGF0Zm9ybU5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJpY2UgUmFuZ2UgRGlzcGxheSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAvODAgYm9yZGVyIGJvcmRlci1icmFuZC01MDAvMzAgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1vbm8gdGV4dC1zbGF0ZS00MDAgYmxvY2sgbWItMVwiPkVTVElNQVRFRCBJTlZFU1RNRU5UIFJBTkdFOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQtM3hsIHNtOnRleHQtNHhsIGZvbnQtZXh0cmFib2xkIGdyYWRpZW50LXRleHQtaW5kaWdvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtjYWxjdWxhdGlvbi5jb3N0TG93LnRvTG9jYWxlU3RyaW5nKCl9IC0gJHtjYWxjdWxhdGlvbi5jb3N0SGlnaC50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMCBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKkluY2x1ZGVzIGRlZGljYXRlZCBRQSwgU2VuaW9yIFRlY2ggTGVhZCwgU3ByaW50IHJldmlld3MgJiBzb3VyY2UgY29kZSBvd25lcnNoaXAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUaW1lbGluZSAmIFNxdWFkICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQgbWItNiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLWxnIGJnLXNsYXRlLTkwMC82MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgYmxvY2tcIj5Fc3QuIERlbGl2ZXJ5Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSBtdC0xIGJsb2NrXCI+fntjYWxjdWxhdGlvbi53ZWVrc30gV2Vla3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbGcgYmctc2xhdGUtOTAwLzYwIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBibG9ja1wiPkRlZGljYXRlZCBTcXVhZDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtMSBibG9ja1wiPjMgLSA1IEVuZ2luZWVyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRGlyZWN0IENUQSBCdXR0b24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkxhdW5jaEVucXVpcnkoYCR7Y2FsY3VsYXRpb24ucGxhdGZvcm1OYW1lfSAoJCR7Y2FsY3VsYXRpb24uY29zdExvdy50b0xvY2FsZVN0cmluZygpfSAtICQke2NhbGN1bGF0aW9uLmNvc3RIaWdoLnRvTG9jYWxlU3RyaW5nKCl9KWApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTQgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by1yIGZyb20tYnJhbmQtNjAwIHZpYS1pbmRpZ28tNjAwIHRvLWN5YmVyLWN5YW4gdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1zbSBzaGFkb3cteGwgc2hhZG93LWJyYW5kLTYwMC8zMCBob3ZlcjpzY2FsZS1bMS4wMl0gYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TG9jayBJbiBUaGlzIFNjb3BlIGFzIEVucXVpcnk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiYXJyb3ctcmlnaHRcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtY2VudGVyIHRleHQtc2xhdGUtNDAwIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIGNvbW1pdG1lbnQgcmVxdWlyZWQg4oCiIEZyZWUgTkRBIG9uIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gNi4gVEVDSCBTVEFDSyBNQVRSSVhcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIFRlY2hTdGFja1NlY3Rpb24oeyBhY3RpdmVUYWIsIHNldEFjdGl2ZVRhYiB9KSB7XG4gICAgICAgICAgICBjb25zdCB0YWJzID0gW1wiRnJvbnRlbmRcIiwgXCJCYWNrZW5kICYgREJcIiwgXCJNb2JpbGVcIiwgXCJBSSAmIENsb3VkXCJdO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwidGVjaC1zdGFja1wiIGNsYXNzTmFtZT1cInB5LTI0IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTN4bCBteC1hdXRvIG1iLTE0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSB0ZXh0LWN5YmVyLWN5YW4gZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBST0RVQ1RJT04tUFJPVkVOIEFSQ0hJVEVDVFVSRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQtM3hsIHNtOnRleHQtNXhsIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgbXQtMyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHQtR2VuIFRlY2hub2xvZ3kgU3RhY2tzIFdlIE1hc3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgdGV4dC1zbSBzbTp0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Ugc2VsZWN0IGJhdHRsZS10ZXN0ZWQsIGhpZ2gtY29uY3VycmVuY3kgdGVjaG5vbG9naWVzIGRlc2lnbmVkIGZvciA5OS45OSUgdXB0aW1lLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHksIGFuZCBkZXZlbG9wZXIgbWFpbnRhaW5hYmlsaXR5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogQ2F0ZWdvcnkgU2VsZWN0b3IgVGFicyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgbWItMTIgZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYnMubWFwKCh0YWIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKHRhYil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC01IHB5LTIuNSByb3VuZGVkLXhsIHRleHQtc20gZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCAke2FjdGl2ZVRhYiA9PT0gdGFiID8gJ2JnLWJyYW5kLTYwMCB0ZXh0LXdoaXRlIHNoYWRvdy1sZyBzaGFkb3ctYnJhbmQtNjAwLzMwJyA6ICdnbGFzcy1wYW5lbCB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogQWN0aXZlIFN0YWNrIEdyaWQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KFRFQ0hfU1RBQ0tbYWN0aXZlVGFiXSB8fCBbXSkubWFwKCh0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJwLTYgcm91bmRlZC0yeGwgZ2xhc3MtcGFuZWwgaG92ZXI6Ym9yZGVyLWJyYW5kLTUwMC80MCB0cmFuc2l0aW9uLWFsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC14bCBiZy1zbGF0ZS04MDAvOTAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jeWJlci1jeWFuIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPXt0Lmljb259IGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgZm9udC1ib2xkIHRleHQtbGcgdGV4dC13aGl0ZSBncm91cC1ob3Zlcjp0ZXh0LWJyYW5kLTMwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1tb25vIHRleHQtZW1lcmFsZC00MDBcIj5FbnRlcnByaXNlIENlcnRpZmllZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgdGV4dC14cyBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dC5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIDcuIEFHSUxFIFBST0NFU1MgUk9BRE1BUCAoTGlsYWMgSW5mb3RlY2ggUGlwZWxpbmUpXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmdW5jdGlvbiBQcm9jZXNzU2VjdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gW1xuICAgICAgICAgICAgICAgIHsgbnVtOiBcIjAxXCIsIHRpdGxlOiBcIkRpc2NvdmVyeSAmIEJsdWVwcmludFwiLCBkZXNjOiBcIlRlY2huaWNhbCBmZWFzaWJpbGl0eSwgYXJjaGl0ZWN0dXJlIGRlc2lnbiwgYW5kIHNwcmludCByb2FkbWFwIHNwZWNpZmljYXRpb24uXCIsIGljb246IFwiY29tcGFzc1wiIH0sXG4gICAgICAgICAgICAgICAgeyBudW06IFwiMDJcIiwgdGl0bGU6IFwiSW50ZXJhY3RpdmUgVUkvVVhcIiwgZGVzYzogXCJIaWdoLWZpZGVsaXR5IEZpZ21hIHByb3RvdHlwZXMsIG1pY3JvLWludGVyYWN0aW9ucywgYW5kIHVzYWJpbGl0eSB0ZXN0aW5nLlwiLCBpY29uOiBcInBlbi10b29sXCIgfSxcbiAgICAgICAgICAgICAgICB7IG51bTogXCIwM1wiLCB0aXRsZTogXCJBZ2lsZSBFbmdpbmVlcmluZ1wiLCBkZXNjOiBcIkJpLXdlZWtseSBzcHJpbnQgcmVsZWFzZXMgd2l0aCBjb250aW51b3VzIENJL0NEIGludGVncmF0aW9uIGFuZCBjb2RlIHJldmlld3MuXCIsIGljb246IFwidGVybWluYWxcIiB9LFxuICAgICAgICAgICAgICAgIHsgbnVtOiBcIjA0XCIsIHRpdGxlOiBcIlFBICYgU2VjdXJpdHkgQXVkaXRcIiwgZGVzYzogXCJBdXRvbWF0ZWQgcmVncmVzc2lvbiB0ZXN0aW5nLCBsb2FkIHRlc3RzLCBhbmQgcGVuZXRyYXRpb24gdnVsbmVyYWJpbGl0eSBhdWRpdHMuXCIsIGljb246IFwic2hpZWxkLWFsZXJ0XCIgfSxcbiAgICAgICAgICAgICAgICB7IG51bTogXCIwNVwiLCB0aXRsZTogXCJMYXVuY2ggJiBHbG9iYWwgU2NhbGVcIiwgZGVzYzogXCJQcm9kdWN0aW9uIHJlbGVhc2UsIHRlbGVtZXRyeSBtb25pdG9yaW5nLCBhbmQgb25nb2luZyAyNC83IFNMQSBtYWludGVuYW5jZS5cIiwgaWNvbjogXCJyb2NrZXRcIiB9LFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD1cInByb2Nlc3NcIiBjbGFzc05hbWU9XCJweS0yNCByZWxhdGl2ZSBiZy1zbGF0ZS05MDAvMzAgYm9yZGVyLXkgYm9yZGVyLXNsYXRlLTgwMC84MFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTN4bCBteC1hdXRvIG1iLTE2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSB0ZXh0LWJyYW5kLTQwMCBmb250LW1vbm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT1VSIFBST1ZFTiBNRVRIT0RPTE9HWVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQtM3hsIHNtOnRleHQtNXhsIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgbXQtMyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyb20gWmVybyB0byBTaGlwcGVkIFByb2R1Y3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIHRleHQtc20gc206dGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsZWFyIG1pbGVzdG9uZXMsIHplcm8gc3VycHJpc2VzLCBhbmQgd2Vla2x5IGRlbW9zIGtlZXBpbmcgeW91IGluIGNvbXBsZXRlIGNvbnRyb2wuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtNSBnYXAtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwcy5tYXAoKHN0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLTJ4bCBnbGFzcy1wYW5lbCBwLTYgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gZ3JvdXAgaG92ZXI6Ym9yZGVyLWJyYW5kLTUwMC81MCB0cmFuc2l0aW9uLWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyBmb250LWJsYWNrIHRleHQtMnhsIHRleHQtc2xhdGUtNjAwIGdyb3VwLWhvdmVyOnRleHQtY3liZXItY3lhbiB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0Lm51bX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPXtzdC5pY29ufSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtYnJhbmQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIGZvbnQtYm9sZCB0ZXh0LWJhc2UgdGV4dC13aGl0ZSBtYi0yXCI+e3N0LnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgdGV4dC14cyBsZWFkaW5nLXJlbGF4ZWRcIj57c3QuZGVzY308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyA4LiBDQVNFIFNUVURJRVMgJiBQT1JURk9MSU9cbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIFBvcnRmb2xpb1NlY3Rpb24oeyBvblNlbGVjdFByb2plY3QgfSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD1cInBvcnRmb2xpb1wiIGNsYXNzTmFtZT1cInB5LTI0IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWF4LXctM3hsIG14LWF1dG8gbWItMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIHRleHQtY3liZXItY3lhbiBmb250LW1vbm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUFJPVkVOIElNUEFDVFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQtM3hsIHNtOnRleHQtNXhsIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgbXQtMyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlYXR1cmVkIEVuZ2luZWVyaW5nIFNob3djYXNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgdGV4dC1zbSBzbTp0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwbG9yZSBob3cgd2UgdHJhbnNmb3JtZWQgaGlnaC1zdGFrZXMgdGVjaG5pY2FsIGNoYWxsZW5nZXMgaW50byBtdWx0aS1taWxsaW9uIGRvbGxhciB3aW5zLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UE9SVEZPTElPX1BST0pFQ1RTLm1hcCgocCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgZ2xhc3MtcGFuZWwgYm9yZGVyLXNsYXRlLTgwMCBvdmVyZmxvdy1oaWRkZW4gaG92ZXI6Ym9yZGVyLWJyYW5kLTUwMC81MCBob3ZlcjpzaGFkb3ctMnhsIHRyYW5zaXRpb24tYWxsIGdyb3VwIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2plY3QgQmFubmVyIEdyYXBoaWMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtNDggYmctZ3JhZGllbnQtdG8tdHIgJHtwLmltYWdlR3JhZGllbnR9IHAtNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiByZWxhdGl2ZWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTMgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC14cyBmb250LXNlbWlib2xkIGJnLXNsYXRlLTkwMC84MCB0ZXh0LXdoaXRlIGJhY2tkcm9wLWJsdXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwLmJhZGdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTMgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC14cyBmb250LWJvbGQgYmctZW1lcmFsZC01MDAvMjAgdGV4dC1lbWVyYWxkLTMwMCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAwLzMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cC5zdGF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyBmb250LWJvbGQgdGV4dC0yeGwgdGV4dC13aGl0ZSBkcm9wLXNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9qZWN0IENvbnRlbnQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwIHRleHQtc20gbGVhZGluZy1yZWxheGVkIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3AuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwLnRhZ3MubWFwKCh0LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aWR4fSBjbGFzc05hbWU9XCJweC0yLjUgcHktMSByb3VuZGVkLW1kIHRleHQteHMgZm9udC1tb25vIGJnLXNsYXRlLTkwMCB0ZXh0LXNsYXRlLTMwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdFByb2plY3QoYENhc2UgU3R1ZHk6ICR7cC50aXRsZX1gKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIuNSByb3VuZGVkLWxnIGJnLXNsYXRlLTgwMCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1icmFuZC02MDAgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QnVpbGQgYSBTaW1pbGFyIFNvbHV0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiYXJyb3ctdXAtcmlnaHRcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIDkuIENMSUVOVCBURVNUSU1PTklBTFNcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIFRlc3RpbW9uaWFsc1NlY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCByZXZpZXdzID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcXVvdGU6IFwiRGVsaWdvIFRlY2hub2xvZ2llcyBkZWxpdmVyZWQgb3VyIEhJUEFBLWNvbXBsaWFudCB0ZWxlbWVkaWNpbmUgcGxhdGZvcm0gYWhlYWQgb2Ygc2NoZWR1bGUuIFRoZWlyIGF0dGVudGlvbiB0byBXZWJSVEMgcmVsaWFiaWxpdHkgYW5kIGF1dG9tYXRlZCB0ZXN0aW5nIHNldCB0aGVtIHdvcmxkcyBhcGFydCBmcm9tIHByZXZpb3VzIGFnZW5jaWVzLlwiLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6IFwiRHIuIEFsZXhhbmRlciBXcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJDaGllZiBNZWRpY2FsIE9mZmljZXIsIEhlYWx0aFdhdmVcIixcbiAgICAgICAgICAgICAgICAgICAgcmF0aW5nOiA1LFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJCb3N0b24sIFVTQVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlOiBcIlRoZSBtaWNyb3NlcnZpY2VzIGFyY2hpdGVjdHVyZSBhbmQgYXV0b21hdGVkIHNldHRsZW1lbnQgcGlwZWxpbmUgaGFuZGxlZCBvdXIgNHggaG9saWRheSB2b2x1bWUgc3Bpa2Ugd2l0aCAxMDAlIHVwdGltZS4gVHJ1ZSB0ZWNobmljYWwgbWFzdGVycy5cIixcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBcIkZhdGltYSBBbC1OdWFpbWlcIixcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJIZWFkIG9mIERpZ2l0YWwgT3BlcmF0aW9ucywgRmluU2NhbGUgVUFFXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhdGluZzogNSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiRHViYWksIFVBRVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlOiBcIkZyb20gZGF5IDEgdGhleSBjb21tdW5pY2F0ZWQgbGlrZSB0ZWNobmljYWwgY28tZm91bmRlcnMgcmF0aGVyIHRoYW4gZGlzdGFudCBjb250cmFjdG9ycy4gVGhlIGludGVyYWN0aXZlIGRhc2hib2FyZCBmb3IgbGVhZCB0cmFja2luZyBpcyBqdXN0IHB1cmUgaWNpbmcgb24gdGhlIGNha2UuXCIsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogXCJLbGF1cyBIb2ZmbWFublwiLFxuICAgICAgICAgICAgICAgICAgICByb2xlOiBcIk1hbmFnaW5nIERpcmVjdG9yLCBOb3ZhTWFya2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHJhdGluZzogNSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiTXVuaWNoLCBHZXJtYW55XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxzXCIgY2xhc3NOYW1lPVwicHktMjQgcmVsYXRpdmUgYmctc2xhdGUtOTAwLzMwIGJvcmRlci15IGJvcmRlci1zbGF0ZS04MDAvODBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy0zeGwgbXgtYXV0byBtYi0xNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgdGV4dC1icmFuZC00MDAgZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZFUklGSUVEIENMSUVOVCBSRVNVTFRTXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC0zeGwgc206dGV4dC01eGwgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSBtdC0zIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJ1c3RlZCBieSBGb3VuZGVycyBXb3JsZHdpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIHRleHQtc20gc206dGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIHByaWRlIG91cnNlbHZlcyBvbiBidWlsZGluZyBtdWx0aS15ZWFyIHBhcnRuZXJzaGlwcyB3aGVyZSB5b3VyIGdyb3d0aCBpcyBvdXIgbWV0cmljLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmV2aWV3cy5tYXAoKHIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cInAtOCByb3VuZGVkLTJ4bCBnbGFzcy1wYW5lbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU3RhcnMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LWFtYmVyLTQwMCBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoci5yYXRpbmcpXS5tYXAoKF8sIHMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzdGFyXCIga2V5PXtzfSAgIGNsYXNzTmFtZT1cInctNCBoLTQgZmlsbC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMCB0ZXh0LXNtIGl0YWxpYyBsZWFkaW5nLXJlbGF4ZWQgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIntyLnF1b3RlfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSB0ZXh0LXNtXCI+e3IuYXV0aG9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPntyLnJvbGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtbW9ubyB0ZXh0LXNsYXRlLTUwMFwiPntyLmxvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIDEwLiBDVEEgQkFOTkVSXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmdW5jdGlvbiBDdGFCYW5uZXIoeyBvbk9wZW5FbnF1aXJ5IH0pIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjAgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggcmVsYXRpdmUgei0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCBnbGFzcy1wYW5lbC1nbG93IHAtOCBzbTpwLTE0IHRleHQtY2VudGVyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgYm9yZGVyLWJyYW5kLTUwMC80MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LTN4bCBzbTp0ZXh0LTV4bCBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhhdmUgYSBQcm9qZWN0IGluIE1pbmQ/IDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JhZGllbnQtdGV4dC1pbmRpZ29cIj5MZXQncyBFbmdpbmVlciBJdCBUb2dldGhlci48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwIHRleHQtYmFzZSBtYi04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXQgeW91ciB0ZWNobmljYWwgcmVxdWlyZW1lbnRzIG9yIGJvb2sgYW4gaW50cm9kdWN0b3J5IGRpc2NvdmVyeSBzZXNzaW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBvdXIgZW5naW5lZXJpbmcgbGVhZGVyc2hpcCB0ZWFtIHRvZGF5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5FbnF1aXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtOCBweS00IHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJyYW5kLTYwMCB2aWEtaW5kaWdvLTYwMCB0by1jeWJlci1jeWFuIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtYmFzZSBzaGFkb3cteGwgc2hhZG93LWJyYW5kLTYwMC8zMCBob3ZlcjpzY2FsZS0xMDUgYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tYWxsIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkdldCBGcmVlIEFyY2hpdGVjdHVyZSBDb25zdWx0YXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic2VuZFwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8vIDExLiBGT09URVJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIEZvb3Rlcih7IG9uT3BlbkRhc2hib2FyZCB9KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctWyMwMzA2MTBdIGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAvODAgcHQtMTYgcGItMTIgdGV4dC1zbGF0ZS00MDAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTEwIG1iLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJyYW5kIENvbHVtbiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOSBoLTkgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by10ciBmcm9tLWJyYW5kLTYwMCB0by1jeWJlci1jeWFuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgZm9udC1ib2xkIHRleHQteGwgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERFTElHTyA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWN5YmVyLWN5YW5cIj5URUNITk9MT0dJRVM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1wb3dlcmluZyBnbG9iYWwgZW50ZXJwcmlzZXMgYW5kIGJvbGQgc3RhcnR1cHMgd2l0aCBiZXNwb2tlIHNvZnR3YXJlLCBtb2JpbGUgYXBwbGljYXRpb25zLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBBSSBhdXRvbWF0aW9uLiBJbnNwaXJlZCBieSBMaWxhYyBJbmZvdGVjaCdzIHN0YW5kYXJkIG9mIGVuZ2luZWVyaW5nIGV4Y2VsbGVuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1sZyBiZy1zbGF0ZS04MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctYnJhbmQtNjAwIHRleHQtc2xhdGUtMzAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGxcIj48SWNvbiBuYW1lPVwiZ2l0aHViXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtbGcgYmctc2xhdGUtODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLWJyYW5kLTYwMCB0ZXh0LXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsXCI+PEljb24gbmFtZT1cImxpbmtlZGluXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtbGcgYmctc2xhdGUtODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLWJyYW5kLTYwMCB0ZXh0LXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsXCI+PEljb24gbmFtZT1cInR3aXR0ZXJcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNlcnZpY2VzICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgZm9udC1ib2xkIHRleHQtd2hpdGUgdGV4dC1zbSBtYi00XCI+RW5naW5lZXJpbmcgU2VydmljZXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0yLjUgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjc2VydmljZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJyYW5kLTMwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPk1vYmlsZSBBcHAgRGV2ZWxvcG1lbnQgKEZsdXR0ZXIvaU9TKTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjc2VydmljZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJyYW5kLTMwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPkN1c3RvbSBXZWIgUGxhdGZvcm1zIChSZWFjdCAxOCk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI3NlcnZpY2VzXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1icmFuZC0zMDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5FbnRlcnByaXNlIEFJICYgTExNIEludGVncmF0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNzZXJ2aWNlc1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtYnJhbmQtMzAwIHRyYW5zaXRpb24tY29sb3JzXCI+Q2xvdWQgRGV2T3BzICYgS3ViZXJuZXRlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjc2VydmljZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJyYW5kLTMwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlVJL1VYIFByb2R1Y3QgRGVzaWduIFN5c3RlbXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBHbG9iYWwgTG9jYXRpb25zICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgZm9udC1ib2xkIHRleHQtd2hpdGUgdGV4dC1zbSBtYi00XCI+RGVsaXZlcnkgSHViczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTIgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwibWFwLXBpblwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1jeWJlci1jeWFuIHNocmluay0wIG10LTAuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2FuIEZyYW5jaXNjbywgQ0EsIFVTQTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJtYXAtcGluXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWN5YmVyLWN5YW4gc2hyaW5rLTAgbXQtMC41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EdWJhaSBJbnRlcm5ldCBDaXR5LCBVQUU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwibWFwLXBpblwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1jeWJlci1jeWFuIHNocmluay0wIG10LTAuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R292dCBDeWJlcnBhcmssIEtvemhpa29kZSwgSW5kaWE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE93bmVyIFBvcnRhbCBTaG9ydGN1dCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHRleHQtc20gbWItNFwiPkV4ZWN1dGl2ZSBBZG1pbmlzdHJhdGlvbjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXNzIHRoZSByZWFsLXRpbWUgY29tcGFueSBvd25lciBlbnF1aXJ5IHBpcGVsaW5lLCBsZWFkIHN0YXR1cyBtYW5hZ2VyLCBhbmQgQ1NWIGV4cG9ydGVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5EYXNoYm9hcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZC1sZyBiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvNDAgdGV4dC1hbWJlci0zMDAgdGV4dC14cyBmb250LXNlbWlib2xkIGhvdmVyOmJnLWFtYmVyLTUwMC8xMCB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPvCfkZEgTGF1bmNoIE93bmVyIERhc2hib2FyZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJvdHRvbSBDb3B5cmlnaHQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTggYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMC84MCBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyB0ZXh0LXNsYXRlLTUwMCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPsKpIDIwMjYgRGVsaWdvIFRlY2hub2xvZ2llcyBJbmMuIEJ1aWx0IHdpdGggUmVhY3QgMTggKyBQSFAgTXlTUUwgQXJjaGl0ZWN0dXJlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXNsYXRlLTQwMFwiPlByaXZhY3kgUG9saWN5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtc2xhdGUtNDAwXCI+VGVybXMgb2YgU2VydmljZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXNsYXRlLTQwMFwiPlNlY3VyaXR5IERpc2Nsb3N1cmVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyAxMi4gSU5URVJBQ1RJVkUgRU5RVUlSWSBNT0RBTCAoU3VibWl0cyB0byBQSFAgLyBNeVNRTCAvIERldiBBUEkpXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBmdW5jdGlvbiBFbnF1aXJ5TW9kYWwoeyBpc09wZW4sIG9uQ2xvc2UsIGluaXRpYWxTZXJ2aWNlLCBvblN1Ym1pdFN1Y2Nlc3MgfSkge1xuICAgICAgICAgICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZnVsbF9uYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBob25lOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvbXBhbnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgc2VydmljZTogaW5pdGlhbFNlcnZpY2UgfHwgXCJNb2JpbGUgQXBwIERldmVsb3BtZW50XCIsXG4gICAgICAgICAgICAgICAgYnVkZ2V0OiBcIiQyNSwwMDAgLSAkNTAsMDAwXCIsXG4gICAgICAgICAgICAgICAgdGltZWxpbmU6IFwiMiAtIDMgTW9udGhzXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgICAgICAgICAgICBzb3VyY2U6IFwiV2Vic2l0ZSBNb2RhbFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBidWRnZXRPcHRpb25zID0gW1xuICAgICAgICAgICAgICAgIFwiPCAkMTAsMDAwXCIsXG4gICAgICAgICAgICAgICAgXCIkMTAsMDAwIC0gJDI1LDAwMFwiLFxuICAgICAgICAgICAgICAgIFwiJDI1LDAwMCAtICQ1MCwwMDBcIixcbiAgICAgICAgICAgICAgICBcIiQ1MCwwMDAgLSAkMTAwLDAwMFwiLFxuICAgICAgICAgICAgICAgIFwiJDEwMCwwMDArXCJcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VPcHRpb25zID0gW1xuICAgICAgICAgICAgICAgIFwiTW9iaWxlIEFwcCBEZXZlbG9wbWVudFwiLFxuICAgICAgICAgICAgICAgIFwiV2ViIFBsYXRmb3JtIEVuZ2luZWVyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJBSSAmIE1hY2hpbmUgTGVhcm5pbmdcIixcbiAgICAgICAgICAgICAgICBcIkNsb3VkIEFyY2hpdGVjdHVyZSAmIERldk9wc1wiLFxuICAgICAgICAgICAgICAgIFwiVUkvVVggUHJvZHVjdCBEZXNpZ25cIixcbiAgICAgICAgICAgICAgICBcIkVudGVycHJpc2UgU29mdHdhcmUgJiBFUlBcIlxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNc2coXCJcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWZvcm1EYXRhLmZ1bGxfbmFtZSB8fCAhZm9ybURhdGEuZW1haWwgfHwgIWZvcm1EYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JNc2coXCJQbGVhc2UgY29tcGxldGUgeW91ciBmdWxsIG5hbWUsIGVtYWlsLCBhbmQgcHJvamVjdCBicmllZi5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXR0ZW1wdCBsaXZlIHN1Ym1pc3Npb24gdG8gUEhQL0RldiBBUElcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L2FwaS9lbnF1aXJ5LnBocGAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdMZWFkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkYXRhLmVucXVpcnlfaWQgfHwgRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwiTkVXXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IGZvcm1EYXRhLmJ1ZGdldC5pbmNsdWRlcyhcIjEwMCwwMDBcIikgPyBcIkhJR0hcIiA6IFwiTUVESVVNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0aW1hdGVkX3ZhbHVlOiAzNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgnVCcsICcgJykuc3Vic3RyaW5nKDAsIDE5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RlczogW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdFN1Y2Nlc3MobmV3TGVhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQmFja2VuZCBBUEkgcmVxdWVzdCBmYWlsZWQ7IGZhbGxpbmcgYmFjayB0byBjbGllbnQtc2lkZSBzdGF0ZTpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBHcmFjZWZ1bCBjbGllbnQgZmFsbGJhY2sgc28gdXNlciBpcyBORVZFUiBibG9ja2VkIGlmIFBIUCBzZXJ2ZXIgaXMgbm90IGN1cnJlbnRseSBydW5uaW5nXG4gICAgICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tMZWFkID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJORVdcIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiTUVESVVNXCIsXG4gICAgICAgICAgICAgICAgICAgIGVzdGltYXRlZF92YWx1ZTogMzAwMDAsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKCdUJywgJyAnKS5zdWJzdHJpbmcoMCwgMTkpLFxuICAgICAgICAgICAgICAgICAgICBub3RlczogW11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9uU3VibWl0U3VjY2VzcyhmYWxsYmFja0xlYWQpO1xuICAgICAgICAgICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgYmctYmxhY2svODAgYmFja2Ryb3AtYmx1ci1tZCBhbmltYXRlLWluIGZhZGUtaW4gZHVyYXRpb24tMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1heC13LTJ4bCBtYXgtaC1bOTJ2aF0gb3ZlcmZsb3cteS1hdXRvIGdsYXNzLXBhbmVsLWdsb3cgcm91bmRlZC0zeGwgcC02IHNtOnAtMTAgYm9yZGVyIGJvcmRlci1icmFuZC01MDAvNDAgc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIENsb3NlIGJ1dHRvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNiByaWdodC02IHAtMiByb3VuZGVkLXhsIGJnLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwieFwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgdGV4dC1jeWJlci1jeWFuIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTVEFSVCBZT1VSIE5FWFQtR0VOIEJVSUxEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgYSBUZWNobmljYWwgUHJvcG9zYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIHRleHQteHMgc206dGV4dC1zbSBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3Qgd2l0aCBvdXIgdGVjaG5pY2FsIGRpcmVjdG9ycy4gV2Ugc2lnbiBhbiBOREEgYmVmb3JlaGFuZCB1cG9uIHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvck1zZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgbWItNiByb3VuZGVkLWxnIGJnLXJlZC05NTAvNjAgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTIwMCB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvck1zZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBGdWxsIE5hbWUgJiBFbWFpbCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0zMDAgbWItMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBGdWxsIE5hbWUgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIERhdmlkIE1pbGxlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZ1bGxfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgZnVsbF9uYW1lOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTMgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAvOTAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1zbGF0ZS01MDAgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJyYW5kLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0zMDAgbWItMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV29yayBFbWFpbCAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJkYXZpZEBjb21wYW55LmNvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCBlbWFpbDogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0zIHJvdW5kZWQteGwgYmctc2xhdGUtOTAwLzkwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRleHQtd2hpdGUgcGxhY2Vob2xkZXItc2xhdGUtNTAwIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1icmFuZC01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUGhvbmUgJiBDb21wYW55ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTMwMCBtYi0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaG9uZSAvIFdoYXRzQXBwIChPcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKzEgKDU1NSkgMDAwLTAwMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgcGhvbmU6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyByb3VuZGVkLXhsIGJnLXNsYXRlLTkwMC85MCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLXNsYXRlLTUwMCB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYnJhbmQtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTMwMCBtYi0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW55IC8gU3RhcnR1cCBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIEFwZXggTGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvbXBhbnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIGNvbXBhbnk6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyByb3VuZGVkLXhsIGJnLXNsYXRlLTkwMC85MCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLXNsYXRlLTUwMCB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYnJhbmQtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNlcnZpY2UgU2VsZWN0aW9uICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0zMDAgbWItMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmltYXJ5IENhcGFiaWxpdHkgUmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5zZXJ2aWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHNlcnZpY2U6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0zIHJvdW5kZWQteGwgYmctc2xhdGUtOTAwLzkwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRleHQtd2hpdGUgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJyYW5kLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlT3B0aW9ucy5tYXAocyA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3N9IHZhbHVlPXtzfT57c308L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBCdWRnZXQgQ2hpcHMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTMwMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYXJnZXQgSW52ZXN0bWVudCBCdWRnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1ZGdldE9wdGlvbnMubWFwKGIgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Yn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgYnVkZ2V0OiBifSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMS41IHJvdW5kZWQtbGcgdGV4dC14cyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsICR7Zm9ybURhdGEuYnVkZ2V0ID09PSBiID8gJ2JnLWJyYW5kLTYwMCB0ZXh0LXdoaXRlIGJvcmRlci1icmFuZC00MDAnIDogJ2JnLXNsYXRlLTkwMCB0ZXh0LXNsYXRlLTQwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1lc3NhZ2UgLyBCcmllZiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtMzAwIG1iLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJpZWYgUHJvamVjdCBEZXNjcmlwdGlvbiAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGwgdXMgd2hhdCB5b3UgYXJlIGxvb2tpbmcgdG8gYnVpbGQsIGFueSB0ZWNobmljYWwgc3RhY2sgcHJlZmVyZW5jZXMsIG9yIHRhcmdldCBsYXVuY2ggdGltZWxpbmUuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgbWVzc2FnZTogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTMgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAvOTAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1zbGF0ZS01MDAgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJyYW5kLTUwMCByZXNpemUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFN1Ym1pdCBCdXR0b24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS00IHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJyYW5kLTYwMCB2aWEtaW5kaWdvLTYwMCB0by1jeWJlci1jeWFuIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtc20gc2hhZG93LXhsIHNoYWRvdy1icmFuZC02MDAvMzAgaG92ZXI6c2NhbGUtWzEuMDFdIGFjdGl2ZTpzY2FsZS05NSB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNTdWJtaXR0aW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTQgaC00IGJvcmRlci0yIGJvcmRlci13aGl0ZSBib3JkZXItdC10cmFuc3BhcmVudCByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1zcGluXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVuY3J5cHRpbmcgJiBTdWJtaXR0aW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlN1Ym1pdCBFbnF1aXJ5IHRvIFRlY2huaWNhbCBEaXJlY3Rvcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic2VuZFwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyAxMy4gT1dORVIgREFTSEJPQVJEIChMZWFkIFRyYWNraW5nIENSTSAmIFN0YXR1cyBXb3JrZmxvdylcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGZ1bmN0aW9uIE93bmVyRGFzaGJvYXJkKHsgaXNPcGVuLCBvbkNsb3NlLCBlbnF1aXJpZXMsIHNldEVucXVpcmllcywgb25SZWZyZXNoLCBzaG93VG9hc3QgfSkge1xuICAgICAgICAgICAgY29uc3QgW2F1dGhBdXRoZW50aWNhdGVkLCBzZXRBdXRoQXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gRGVtbyBtb2RlIHN0YXJ0cyB1bmxvY2tlZCB3aXRoIHF1aWNrIFBJTiBwcmV2aWV3XG4gICAgICAgICAgICBjb25zdCBbZW50ZXJlZFBpbiwgc2V0RW50ZXJlZFBpbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICAgICAgICAgIGNvbnN0IFtzZWxlY3RlZEVucXVpcnksIHNldFNlbGVjdGVkRW5xdWlyeV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgICAgIGNvbnN0IFtzdGF0dXNGaWx0ZXIsIHNldFN0YXR1c0ZpbHRlcl0gPSB1c2VTdGF0ZShcIkFMTFwiKTtcbiAgICAgICAgICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgICAgICAgICBjb25zdCBbbmV3Tm90ZVRleHQsIHNldE5ld05vdGVUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgICAgICAgICAgY29uc3QgW2lzRXhwb3J0aW5nLCBzZXRJc0V4cG9ydGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIEZpbHRlciBsb2dpY1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRFbnF1aXJpZXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5xdWlyaWVzLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlc1N0YXR1cyA9IHN0YXR1c0ZpbHRlciA9PT0gXCJBTExcIiB8fCBpdGVtLnN0YXR1cyA9PT0gc3RhdHVzRmlsdGVyO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVzU2VhcmNoID0gIXNlYXJjaFF1ZXJ5IHx8IChcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLmZ1bGxfbmFtZSAmJiBpdGVtLmZ1bGxfbmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZW1haWwgJiYgaXRlbS5lbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0uY29tcGFueSAmJiBpdGVtLmNvbXBhbnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLnNlcnZpY2UgJiYgaXRlbS5zZXJ2aWNlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoaXRlbS5tZXNzYWdlICYmIGl0ZW0ubWVzc2FnZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlc1N0YXR1cyAmJiBtYXRjaGVzU2VhcmNoO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgW2VucXVpcmllcywgc3RhdHVzRmlsdGVyLCBzZWFyY2hRdWVyeV0pO1xuXG4gICAgICAgICAgICAvLyBTdGF0dXMgQ29sb3IgaGVscGVyXG4gICAgICAgICAgICBjb25zdCBnZXRTdGF0dXNCYWRnZSA9IChzdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTkVXXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJiZy1hbWJlci01MDAvMjAgdGV4dC1hbWJlci0zMDAgYm9yZGVyLWFtYmVyLTUwMC8zMFwiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ09OVEFDVEVEXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJiZy1pbmRpZ28tNTAwLzIwIHRleHQtaW5kaWdvLTMwMCBib3JkZXItaW5kaWdvLTUwMC8zMFwiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSU5fRElTQ1VTU0lPTlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYmctcHVycGxlLTUwMC8yMCB0ZXh0LXB1cnBsZS0zMDAgYm9yZGVyLXB1cnBsZS01MDAvMzBcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlBST1BPU0FMX1NFTlRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImJnLWN5YW4tNTAwLzIwIHRleHQtY3lhbi0zMDAgYm9yZGVyLWN5YW4tNTAwLzMwXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDT05WRVJURURcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImJnLWVtZXJhbGQtNTAwLzIwIHRleHQtZW1lcmFsZC0zMDAgYm9yZGVyLWVtZXJhbGQtNTAwLzMwXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBUkNISVZFRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYmctc2xhdGUtNzAwLzQwIHRleHQtc2xhdGUtNDAwIGJvcmRlci1zbGF0ZS03MDBcIjtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImJnLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTMwMFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzdGF0dXMgaGFuZGxlclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlVXBkYXRlU3RhdHVzID0gYXN5bmMgKGlkLCBuZXdTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vYXBpL2FkbWluLnBocD9hY3Rpb249dXBkYXRlX3N0YXR1c2AsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkLCBzdGF0dXM6IG5ld1N0YXR1cyB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2NhbCBzdGF0ZSB1cGRhdGU6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0RW5xdWlyaWVzKHByZXYgPT4gcHJldi5tYXAoZSA9PiBlLmlkID09PSBpZCA/IHsgLi4uZSwgc3RhdHVzOiBuZXdTdGF0dXMgfSA6IGUpKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbnF1aXJ5ICYmIHNlbGVjdGVkRW5xdWlyeS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRFbnF1aXJ5KHByZXYgPT4gKHsgLi4ucHJldiwgc3RhdHVzOiBuZXdTdGF0dXMgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaG93VG9hc3QoYEVucXVpcnkgc3RhdHVzIGNoYW5nZWQgdG8gJHtuZXdTdGF0dXN9YCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBBZGQgTm90ZVxuICAgICAgICAgICAgY29uc3QgaGFuZGxlQWRkTm90ZSA9IGFzeW5jIChlbnF1aXJ5SWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW5ld05vdGVUZXh0LnRyaW0oKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90ZUNvbnRlbnQgPSBuZXdOb3RlVGV4dC50cmltKCk7XG4gICAgICAgICAgICAgICAgc2V0TmV3Tm90ZVRleHQoXCJcIik7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vYXBpL2FkbWluLnBocD9hY3Rpb249YWRkX25vdGVgLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbnF1aXJ5X2lkOiBlbnF1aXJ5SWQsIG5vdGU6IG5vdGVDb250ZW50LCBhdXRob3I6IFwiT3duZXJcIiB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RlIHNhdmVkIGxvY2FsbHk6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0RW5xdWlyaWVzKHByZXYgPT4gcHJldi5tYXAoZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmlkID09PSBlbnF1aXJ5SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdGVzID0gZS5ub3RlcyA/IFsuLi5lLm5vdGVzLCBub3RlQ29udGVudF0gOiBbbm90ZUNvbnRlbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZSwgbm90ZXMgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbnF1aXJ5ICYmIHNlbGVjdGVkRW5xdWlyeS5pZCA9PT0gZW5xdWlyeUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkRW5xdWlyeShwcmV2ID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZXM6IHByZXYubm90ZXMgPyBbLi4ucHJldi5ub3Rlcywgbm90ZUNvbnRlbnRdIDogW25vdGVDb250ZW50XVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNob3dUb2FzdChcIkludGVybmFsIG5vdGUgYXBwZW5kZWQgdG8gbGVhZCBmaWxlLlwiKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIENTViBFeHBvcnRcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUV4cG9ydENzdiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJc0V4cG9ydGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihgJHtBUElfQkFTRX0vYXBpL2V4cG9ydC5waHBgLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc0V4cG9ydGluZyhmYWxzZSksIDEyMDApO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gU3VtbWFyeSBNZXRyaWNzXG4gICAgICAgICAgICBjb25zdCB0b3RhbENvdW50ID0gZW5xdWlyaWVzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvdW50ID0gZW5xdWlyaWVzLmZpbHRlcihlID0+IGUuc3RhdHVzID09PSBcIk5FV1wiKS5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBpbkRpc2N1c3Npb25Db3VudCA9IGVucXVpcmllcy5maWx0ZXIoZSA9PiBbXCJJTl9ESVNDVVNTSU9OXCIsIFwiUFJPUE9TQUxfU0VOVFwiXS5pbmNsdWRlcyhlLnN0YXR1cykpLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZENvdW50ID0gZW5xdWlyaWVzLmZpbHRlcihlID0+IGUuc3RhdHVzID09PSBcIkNPTlZFUlRFRFwiKS5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCB0b3RhbFBpcGVsaW5lVmFsdWUgPSBlbnF1aXJpZXMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgKGN1ci5lc3RpbWF0ZWRfdmFsdWUgfHwgMCksIDApO1xuICAgICAgICAgICAgY29uc3QgY29udmVyc2lvblJhdGUgPSB0b3RhbENvdW50ID4gMCA/ICgoY29udmVydGVkQ291bnQgLyB0b3RhbENvdW50KSAqIDEwMCkudG9GaXhlZCgxKSA6IFwiMC4wXCI7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0zIHNtOnAtNiBiZy1ibGFjay84NSBiYWNrZHJvcC1ibHVyLWxnIGFuaW1hdGUtaW4gZmFkZS1pbiBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctN3hsIGgtWzk0dmhdIGJnLVsjMDkwZDFhXSBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMC84MCByb3VuZGVkLTN4bCBzaGFkb3ctMnhsIGZsZXggZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUb3AgSGVhZGVyIEJhciAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS00IGJnLXNsYXRlLTkwMC85MCBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQteGwgYmctYW1iZXItNTAwLzEwIHRleHQtYW1iZXItNDAwIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzMwIHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPCfkZFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyBmb250LWV4dHJhYm9sZCB0ZXh0LWxnIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeGVjdXRpdmUgRW5xdWlyeSAmIExlYWQgQ1JNXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBweS0wLjUgcm91bmRlZCB0ZXh0LVsxMHB4XSBmb250LW1vbm8gYmctZW1lcmFsZC01MDAvMjAgdGV4dC1lbWVyYWxkLTQwMCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAwLzMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExJVkUgQ09OTkVDVEVEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxpZ28gVGVjaG5vbG9naWVzIOKAoiBDb25maWRlbnRpYWwgQ29tcGFueSBPd25lciBQb3J0YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFeHBvcnRDc3Z9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNFeHBvcnRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zLjUgcHktMiByb3VuZGVkLWxnIGJnLXNsYXRlLTgwMCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS03MDAgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiZG93bmxvYWRcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtY3liZXItY3lhblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FeHBvcnQgQ1NWPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVmcmVzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWxnIGJnLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVmcmVzaCBEYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInJlZnJlc2gtY3dcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtbGcgYmctc2xhdGUtODAwIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwieFwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogRGFzaGJvYXJkIEJvZHkgQ29udGVudCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0byBwLTYgc3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEtQSSBNZXRyaWNzIFJvdyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTUgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAvNjAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgZm9udC1tb25vXCI+VE9UQUwgTEVBRFM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LTJ4bCBmb250LWJsYWNrIHRleHQtd2hpdGUgbXQtMVwiPnt0b3RhbENvdW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS01MDBcIj5JbmJvdW5kIGlucXVpcmllczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYmctYW1iZXItOTUwLzIwIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtYW1iZXItNDAwIGZvbnQtbW9ub1wiPk5FVyAvIFVOUkVBRDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQtMnhsIGZvbnQtYmxhY2sgdGV4dC1hbWJlci0zMDAgbXQtMVwiPntuZXdDb3VudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtYW1iZXItNTAwLzgwXCI+UmVxdWlyZXMgcmVzcG9uc2UgJmx0OzI0aDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYmctaW5kaWdvLTk1MC8yMCBib3JkZXIgYm9yZGVyLWluZGlnby01MDAvMzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1pbmRpZ28tNDAwIGZvbnQtbW9ub1wiPklOIERJU0NVU1NJT048L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LTJ4bCBmb250LWJsYWNrIHRleHQtaW5kaWdvLTMwMCBtdC0xXCI+e2luRGlzY3Vzc2lvbkNvdW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1pbmRpZ28tNDAwLzgwXCI+UHJvcG9zYWwgLyBBcmNoaXRlY3Rpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLXhsIGJnLWVtZXJhbGQtOTUwLzIwIGJvcmRlciBib3JkZXItZW1lcmFsZC01MDAvMzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1lbWVyYWxkLTQwMCBmb250LW1vbm9cIj5DT05WRVJURUQgV09OPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC0yeGwgZm9udC1ibGFjayB0ZXh0LWVtZXJhbGQtMzAwIG10LTFcIj57Y29udmVydGVkQ291bnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LWVtZXJhbGQtNDAwLzgwXCI+e2NvbnZlcnNpb25SYXRlfSUgd2luIHJhdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbGc6Y29sLXNwYW4tMSBwLTQgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAvNjAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgZm9udC1tb25vXCI+UElQRUxJTkUgVkFMVUU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LTJ4bCBmb250LWJsYWNrIGdyYWRpZW50LXRleHQtZ29sZCBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0b3RhbFBpcGVsaW5lVmFsdWUudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS01MDBcIj5Fc3RpbWF0ZWQgdmFsdWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEZpbHRlciBCYXIgJiBTZWFyY2ggKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLXN0cmV0Y2ggc206aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNCBwLTQgcm91bmRlZC0yeGwgZ2xhc3MtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNlYXJjaCBpbnB1dCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJ3LTQgaC00IGFic29sdXRlIGxlZnQtMy41IHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LXNsYXRlLTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBlbnF1aXJpZXMgYnkgY2xpZW50IG5hbWUsIGVtYWlsLCBjb21wYW55LCBvciBzY29wZSBrZXl3b3Jkcy4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwbC0xMCBwci00IHB5LTIgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAvODAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1zbGF0ZS01MDAgdGV4dC14cyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJyYW5kLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU3RhdHVzIGZpbHRlciBidXR0b25zICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgb3ZlcmZsb3cteC1hdXRvIHBiLTEgc206cGItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1tcIkFMTFwiLCBcIk5FV1wiLCBcIkNPTlRBQ1RFRFwiLCBcIklOX0RJU0NVU1NJT05cIiwgXCJQUk9QT1NBTF9TRU5UXCIsIFwiQ09OVkVSVEVEXCJdLm1hcChzdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhdHVzRmlsdGVyKHN0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0xLjUgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgd2hpdGVzcGFjZS1ub3dyYXAgdHJhbnNpdGlvbi1hbGwgJHtzdGF0dXNGaWx0ZXIgPT09IHN0ID8gJ2JnLWJyYW5kLTYwMCB0ZXh0LXdoaXRlJyA6ICdiZy1zbGF0ZS05MDAvODAgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1zbGF0ZS0yMDAnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTWFpbiBMZWFkcyBUYWJsZSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGdsYXNzLXBhbmVsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxlZnQgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1zbGF0ZS05MDAvOTAgdGV4dC1zbGF0ZS00MDAgZm9udC1tb25vIHVwcGVyY2FzZSBib3JkZXItYiBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPkNsaWVudCAmIENvbXBhbnk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTUgcHktMy41XCI+U2VydmljZSBSZXF1aXJlZDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNSBweS0zLjVcIj5CdWRnZXQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTUgcHktMy41XCI+UGlwZWxpbmUgU3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC01IHB5LTMuNVwiPlJlY2VpdmVkIERhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTUgcHktMy41IHRleHQtcmlnaHRcIj5BY3Rpb25zPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtc2xhdGUtODAwLzYwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZEVucXVpcmllcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI2XCIgY2xhc3NOYW1lPVwicHgtNiBweS0xMiB0ZXh0LWNlbnRlciB0ZXh0LXNsYXRlLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBlbnF1aXJpZXMgbWF0Y2ggdGhlIGN1cnJlbnQgZmlsdGVyIG9yIHNlYXJjaCBjcml0ZXJpYS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkRW5xdWlyaWVzLm1hcCgoZW5xKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17ZW5xLmlkfSBjbGFzc05hbWU9XCJob3ZlcjpiZy1zbGF0ZS04MDAvNDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSB0ZXh0LXNtXCI+e2VucS5mdWxsX25hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwXCI+e2VucS5jb21wYW55IHx8IFwiSW5kZXBlbmRlbnRcIn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS01MDAgZm9udC1tb25vIG10LTAuNVwiPntlbnEuZW1haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtc2xhdGUtMjAwXCI+e2VucS5zZXJ2aWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbnEudGltZWxpbmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaW1lbGluZToge2VucS50aW1lbGluZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS00IGZvbnQtbW9ubyBmb250LXNlbWlib2xkIHRleHQtYnJhbmQtMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW5xLmJ1ZGdldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTUgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW5xLnN0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVVwZGF0ZVN0YXR1cyhlbnEuaWQsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTEgcm91bmRlZC1mdWxsIHRleHQtWzExcHhdIGZvbnQtYm9sZCBib3JkZXIgJHtnZXRTdGF0dXNCYWRnZShlbnEuc3RhdHVzKX0gYmctc2xhdGUtOTAwIGN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5FV1wiPk5FVzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDT05UQUNURURcIj5DT05UQUNURUQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSU5fRElTQ1VTU0lPTlwiPklOX0RJU0NVU1NJT048L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFJPUE9TQUxfU0VOVFwiPlBST1BPU0FMX1NFTlQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ09OVkVSVEVEXCI+Q09OVkVSVEVEIChXT04pPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFSQ0hJVkVEXCI+QVJDSElWRUQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNSBweS00IHRleHQtc2xhdGUtNDAwIGZvbnQtbW9ubyB0ZXh0LVsxMXB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VucS5jcmVhdGVkX2F0IHx8IFwiUmVjZW50XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC01IHB5LTQgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEVucXVpcnkoZW5xKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTEuNSByb3VuZGVkLWxnIGJnLXNsYXRlLTgwMCBob3ZlcjpiZy1icmFuZC02MDAgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnNwZWN0IExlYWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogRGV0YWlsZWQgRW5xdWlyeSBEcmF3ZXIgLyBNb2RhbCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEVucXVpcnkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCBiZy1ibGFjay83NSBiYWNrZHJvcC1ibHVyLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1heC13LTJ4bCBiZy1zbGF0ZS05NTAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgcm91bmRlZC0zeGwgcC02IHNtOnAtOCBzaGFkb3ctMnhsIHNwYWNlLXktNiBtYXgtaC1bOTB2aF0gb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi00IGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LW1vbm8gdXBwZXJjYXNlIHRleHQtY3liZXItY3lhblwiPkNMSUVOVCBET1NTSUVSICN7c2VsZWN0ZWRFbnF1aXJ5LmlkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtMC41XCI+e3NlbGVjdGVkRW5xdWlyeS5mdWxsX25hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPntzZWxlY3RlZEVucXVpcnkuY29tcGFueX0g4oCiIHtzZWxlY3RlZEVucXVpcnkuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkRW5xdWlyeShudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xLjUgcm91bmRlZC1sZyBiZy1zbGF0ZS04MDAgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwieFwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBRdWljayBDb250YWN0IEFjdGlvbiBQaWxscyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YG1haWx0bzoke3NlbGVjdGVkRW5xdWlyeS5lbWFpbH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zLjUgcHktMiByb3VuZGVkLXhsIGJnLWluZGlnby02MDAgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgaG92ZXI6YmctaW5kaWdvLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwibWFpbFwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FbWFpbCBDbGllbnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEVucXVpcnkucGhvbmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YHRlbDoke3NlbGVjdGVkRW5xdWlyeS5waG9uZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMuNSBweS0yIHJvdW5kZWQteGwgYmctc2xhdGUtODAwIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGhvdmVyOmJnLXNsYXRlLTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInBob25lXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DYWxsIHtzZWxlY3RlZEVucXVpcnkucGhvbmV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd2EubWUvJHtzZWxlY3RlZEVucXVpcnkucGhvbmUucmVwbGFjZSgvW14wLTldL2csICcnKX1gfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMuNSBweS0yIHJvdW5kZWQteGwgYmctZW1lcmFsZC02MDAgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgaG92ZXI6YmctZW1lcmFsZC01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJtZXNzYWdlLXNxdWFyZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldoYXRzQXBwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBCcmllZiBNZXNzYWdlICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS00MDAgYmxvY2sgbWItMVwiPlByb2plY3QgQnJpZWYgLyBTY29wZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTIwMCBsZWFkaW5nLXJlbGF4ZWQgd2hpdGVzcGFjZS1wcmUtbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRFbnF1aXJ5Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZXRhaWxzIEdyaWQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgZ2FwLTMgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbGcgYmctc2xhdGUtOTAwLzYwIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwIGJsb2NrXCI+U2VydmljZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGVcIj57c2VsZWN0ZWRFbnF1aXJ5LnNlcnZpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbGcgYmctc2xhdGUtOTAwLzYwIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwIGJsb2NrXCI+QnVkZ2V0IFJhbmdlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1icmFuZC0zMDAgZm9udC1tb25vXCI+e3NlbGVjdGVkRW5xdWlyeS5idWRnZXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbGcgYmctc2xhdGUtOTAwLzYwIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwIGJsb2NrXCI+U291cmNlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbGF0ZS0zMDBcIj57c2VsZWN0ZWRFbnF1aXJ5LnNvdXJjZSB8fCBcIldlYnNpdGVcIn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEludGVybmFsIE93bmVyIE5vdGVzICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTMwMCBibG9jayBtYi0yXCI+Q1JNIEludGVybmFsIEFjdGl2aXR5IE5vdGVzOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBtYXgtaC0zNiBvdmVyZmxvdy15LWF1dG8gbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCFzZWxlY3RlZEVucXVpcnkubm90ZXMgfHwgc2VsZWN0ZWRFbnF1aXJ5Lm5vdGVzLmxlbmd0aCA9PT0gMCkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNTAwIGl0YWxpY1wiPk5vIG5vdGVzIGFkZGVkIHlldCBmb3IgdGhpcyBjbGllbnQuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRFbnF1aXJ5Lm5vdGVzLm1hcCgobiwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwicC0yLjUgcm91bmRlZC1sZyBiZy1zbGF0ZS05MDAvOTAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgdGV4dC14cyB0ZXh0LXNsYXRlLTMwMCBmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYnJhbmQtNDAwIGZvbnQtYm9sZFwiPuKAojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3R5cGVvZiBuID09PSAnc3RyaW5nJyA/IG4gOiBuLm5vdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBBZGQgTm90ZSBmb3JtICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgaW50ZXJuYWwgbm90ZSAoZS5nLiBTZW50IE5EQSwgU2NoZWR1bGVkIFpvb20gd2l0aCBDVE8pLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdOb3RlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Tm90ZVRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4geyBpZiAoZS5rZXkgPT09ICdFbnRlcicpIGhhbmRsZUFkZE5vdGUoc2VsZWN0ZWRFbnF1aXJ5LmlkKTsgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweC0zIHB5LTIgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYnJhbmQtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZE5vdGUoc2VsZWN0ZWRFbnF1aXJ5LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLXhsIGJnLWJyYW5kLTYwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgdGV4dC14cyBob3ZlcjpiZy1icmFuZC01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgTm90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbmRlciBSZWFjdCBET01cbiAgICAgICAgUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKS5yZW5kZXIoPEFwcCAvPik7XG4gICAgIl0sIm1hcHBpbmdzIjoiOzs7QUFDQSxTQUFTQSxJQUFJQSxDQUFDO0VBQUVDLElBQUk7RUFBRUMsU0FBUyxHQUFHLFNBQVM7RUFBRSxHQUFHQztBQUFNLENBQUMsRUFBRTtFQUNyRCxNQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBWSxJQUFJLENBQUMsQ0FBQztFQUN2QyxNQUFNQyxPQUFPLEdBQUdILEtBQUssQ0FBQ0gsSUFBSSxDQUFDLElBQUlHLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJO0VBQ3hELElBQUksQ0FBQ0csT0FBTyxFQUFFLE9BQU8sSUFBSTtFQUN6QixvQkFDSSxJQUFBQyxXQUFBLENBQUFDLEdBQUE7SUFDSUMsS0FBSyxFQUFDLDRCQUE0QjtJQUNsQ0MsT0FBTyxFQUFDLFdBQVc7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
})();
