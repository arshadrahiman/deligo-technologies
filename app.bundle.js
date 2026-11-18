/**
 * DELIGO TECHNOLOGIES - High Performance Production React 18 Application Bundle
 * Pre-compiled bundle: Zero Babel runtime latency, 100% offline & local server capable.
 */
(function() {
    'use strict';
    const React = window.React;
    const ReactDOM = window.ReactDOM;
    if (!React || !ReactDOM) {
        console.error('DELIGO TECHNOLOGIES: React 18 / ReactDOM not loaded!');
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
const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;
const API_BASE = window.location.protocol === 'file:' ? window.DELIGO_API_PORT ? 'http://localhost:' + window.DELIGO_API_PORT : 'http://localhost:8085' : '';
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

// =========================================================
// MAIN APPLICATION COMPONENT
// =========================================================
function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    try {
      return sessionStorage.getItem("deligo_admin_auth") === "true";
    } catch (e) {
      return false;
    }
  });
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

  // Sync enquiries with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('deligo_crm_enquiries', JSON.stringify(enquiries));
    } catch (e) {}
  }, [enquiries]);

  // Fetch live enquiries from backend API
  const refreshEnquiries = async () => {
    try {
      const token = sessionStorage.getItem("deligo_admin_token");
      if (!token) return;
      const res = await fetch(`${API_BASE}/api/admin.php?action=list`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.enquiries) && data.enquiries.length > 0) {
          setEnquiries(data.enquiries);
        }
      }
    } catch (err) {
      console.log("Using local mock leads:", err);
    }
  };
  useEffect(() => {
    refreshEnquiries();
  }, []);

  // Check secret URL path or hash to open admin portal
  const checkAdminRoute = () => {
    const h = (window.location.hash || "").toLowerCase();
    const s = (window.location.search || "").toLowerCase();
    const p = (window.location.pathname || "").toLowerCase();
    const isAdmin = h.includes("admin") || h.includes("crm") || s.includes("admin") || s.includes("crm") || p.endsWith("/admin") || p.endsWith("/admin/");
    if (isAdmin) {
      if (isAdminLoggedIn) {
        setIsDashboardOpen(true);
        setIsAdminLoginOpen(false);
      } else {
        setIsAdminLoginOpen(true);
        setIsDashboardOpen(false);
      }
    }
  };
  useEffect(() => {
    checkAdminRoute();
    window.addEventListener("hashchange", checkAdminRoute);
    window.addEventListener("popstate", checkAdminRoute);
    return () => {
      window.removeEventListener("hashchange", checkAdminRoute);
      window.removeEventListener("popstate", checkAdminRoute);
    };
  }, [isAdminLoggedIn]);
  const handleAdminLoginSuccess = token => {
    try {
      sessionStorage.setItem("deligo_admin_auth", "true");
      sessionStorage.setItem("deligo_admin_token", token);
    } catch (e) {}
    setIsAdminLoggedIn(true);
    setIsAdminLoginOpen(false);
    setIsDashboardOpen(true);
    showToast("Authenticated as Executive Administrator");
  };
  const handleAdminLogout = () => {
    try {
      sessionStorage.removeItem("deligo_admin_auth");
      sessionStorage.removeItem("deligo_admin_token");
    } catch (e) {}
    setIsAdminLoggedIn(false);
    setIsDashboardOpen(false);
    setIsAdminLoginOpen(false);
    if (window.location.hash.includes("admin") || window.location.hash.includes("crm")) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    showToast("Signed out of Executive Portal");
  };
  const handleCloseAdmin = () => {
    setIsDashboardOpen(false);
    setIsAdminLoginOpen(false);
    if (window.location.hash.includes("admin") || window.location.hash.includes("crm")) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };
  const showToast = (message, type = "success") => {
    setNotificationToast({
      message,
      type
    });
    setTimeout(() => setNotificationToast(null), 4500);
  };
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Footer, {}), isEnquiryModalOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(EnquiryModal, {
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
    }), isAdminLoginOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(AdminLoginModal, {
      isOpen: isAdminLoginOpen,
      onClose: handleCloseAdmin,
      onLoginSuccess: handleAdminLoginSuccess,
      showToast: showToast
    }), isDashboardOpen && isAdminLoggedIn && /*#__PURE__*/(0, _jsxRuntime.jsx)(OwnerDashboard, {
      isOpen: isDashboardOpen,
      onClose: handleCloseAdmin,
      onLogout: handleAdminLogout,
      enquiries: enquiries,
      setEnquiries: setEnquiries,
      onRefresh: refreshEnquiries,
      showToast: showToast
    })]
  });
}

// =========================================================
// 1. NAVIGATION BAR COMPONENT (Clean Public Navbar)
// =========================================================
function Navbar({
  onOpenEnquiry,
  mobileNavOpen,
  setMobileNavOpen
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("header", {
    className: `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#050814]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3.5' : 'bg-transparent py-5'}`,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
          href: "#",
          className: "flex items-center gap-3 group",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "relative",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-cyber-cyan flex items-center justify-center font-extrabold text-white text-xl shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform",
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
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "hidden sm:flex items-center gap-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: onOpenEnquiry,
            className: "px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r from-brand-600 via-indigo-600 to-cyber-cyan text-white shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Get a Proposal"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              name: "arrow-up-right",
              className: "w-4 h-4"
            })]
          })
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
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "pt-4 border-t border-slate-800 flex flex-col gap-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: () => {
              setMobileNavOpen(false);
              onOpenEnquiry();
            },
            className: "w-full py-3 rounded-lg bg-brand-600 font-bold text-white text-sm",
            children: "Get a Proposal"
          })
        })]
      })]
    })
  });
}

// =========================================================
// 2. HERO SECTION COMPONENT
// =========================================================
function HeroSection({
  onOpenEnquiry,
  onScrollToEstimator
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    className: "relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center max-w-4xl mx-auto",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-brand-500/30 text-xs font-semibold text-brand-300 mb-8 shadow-inner shadow-brand-500/10",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "w-2 h-2 rounded-full bg-cyber-cyan animate-ping"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "tracking-wide uppercase font-mono",
            children: "Accepting Q1 Enterprise Software & AI Sprints"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("h1", {
          className: "font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6",
          children: ["Architecting Scalable ", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "gradient-text-indigo",
            children: "Software, Mobile Apps"
          }), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "& Intelligent AI Ecosystems."]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed mb-10",
          children: "Deligo Technologies engineers resilient digital platforms, hyper-converting mobile apps, and proprietary AI solutions tailored for high-growth enterprises and venture-backed startups."
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
              }), "Agile 2-Wk Sprints"]
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
              }), "SOC2 & HIPAA Ready"]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-3 rounded-lg glass-panel text-left",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-slate-400 font-mono",
              children: "SCALE"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              className: "text-sm font-bold text-white flex items-center gap-1.5 mt-0.5",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "headphones",
                className: "w-4 h-4 text-cyber-cyan"
              }), "24/7 DevOps SLA"]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-3 rounded-lg glass-panel text-left",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-slate-400 font-mono",
              children: "TECH STACK"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              className: "text-sm font-bold text-white flex items-center gap-1.5 mt-0.5",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "code-2",
                className: "w-4 h-4 text-purple-400"
              }), "React 18, PHP, AI"]
            })]
          })]
        })]
      })
    })
  });
}

// =========================================================
// 3. STATS BANNER COMPONENT
// =========================================================
function StatsBanner() {
  const stats = [{
    label: "Client Project Deliveries",
    val: "180+",
    sub: "100% on-schedule"
  }, {
    label: "Engineering Retention",
    val: "97.4%",
    sub: "Top 3% tech talent"
  }, {
    label: "Total Client Raised",
    val: "$85M+",
    sub: "Venture capital funded"
  }, {
    label: "Average Production Speed",
    val: "4.2x",
    sub: "Faster than industry avg"
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "border-y border-slate-800/80 bg-slate-950/40 relative z-10 py-10",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
        children: stats.map((s, idx) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "space-y-1",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "font-heading text-3xl sm:text-4xl font-extrabold text-white",
            children: s.val
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "text-xs sm:text-sm font-semibold text-slate-300",
            children: s.label
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "text-[11px] text-cyber-cyan font-mono",
            children: s.sub
          })]
        }, idx))
      })
    })
  });
}

// =========================================================
// 4. SERVICES SECTION COMPONENT
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
          children: "ENGINEERING CAPABILITIES"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4",
          children: "Enterprise-Grade Solutions Built to Scale"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-slate-300 text-sm sm:text-base",
          children: "From high-velocity MVP builds to deeply integrated AI platforms, our cross-functional squads deliver end-to-end excellence."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        children: SERVICES_LIST.map(srv => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "group glass-panel rounded-2xl p-8 border border-slate-800 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col justify-between",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex items-center justify-between mb-6",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "w-12 h-12 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-cyber-cyan group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                  name: srv.icon,
                  className: "w-6 h-6"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-800/80 text-brand-300 border border-slate-700",
                children: srv.badge
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              className: "font-heading text-xl font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors",
              children: srv.title
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-slate-400 text-xs sm:text-sm leading-relaxed mb-6",
              children: srv.description
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "space-y-2 mb-6",
              children: srv.features.map((feat, fidx) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex items-center gap-2 text-xs text-slate-300",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                  name: "check-circle-2",
                  className: "w-4 h-4 text-emerald-400 shrink-0"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: feat
                })]
              }, fidx))
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pt-6 border-t border-slate-800/80",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "flex flex-wrap gap-1.5 mb-5",
              children: srv.tech.map((t, tidx) => /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800",
                children: t
              }, tidx))
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
              onClick: () => onSelectService(srv.title),
              className: "w-full py-2.5 rounded-lg bg-slate-800/90 text-xs font-semibold text-slate-200 hover:text-white hover:bg-brand-600 transition-all flex items-center justify-center gap-2 group/btn",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                children: ["Consult on ", srv.title]
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
// 5. INTERACTIVE PROJECT ESTIMATOR
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
                className: `p-3 rounded-lg border text-center transition-all ${timeline === t.id ? 'bg-brand-600/25 border-brand-500 text-white font-bold' : 'bg-slate-900/40 border-slate-800 text-slate-400'}`,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "text-xs block",
                  children: t.name
                })
              }, t.id))
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "lg:col-span-5 glass-panel-glow rounded-2xl p-6 sm:p-8 space-y-6 lg:sticky lg:top-28",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "border-b border-slate-800 pb-5",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-cyber-cyan font-mono font-bold uppercase tracking-wider block mb-1",
              children: "REAL-TIME TECHNICAL SUMMARY"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              className: "font-heading text-xl font-bold text-white",
              children: calculation.platformName
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "space-y-4",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-xs text-slate-400 block mb-1",
                children: "Estimated Investment Range:"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "font-heading text-3xl sm:text-4xl font-black gradient-text-indigo",
                children: ["$", calculation.costLow.toLocaleString(), " \u2013 $", calculation.costHigh.toLocaleString()]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-[11px] text-slate-400 mt-1 block",
                children: "Based on dedicated senior squad sprint allocation."
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "text-[11px] text-slate-400 uppercase font-mono block",
                  children: "Estimated Sprints:"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                  className: "text-lg font-bold text-white",
                  children: [calculation.weeks, " Weeks (~", Math.round(calculation.weeks / 2), " Sprints)"]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "text-[11px] text-slate-400 uppercase font-mono block",
                  children: "Squad Composition:"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "text-lg font-bold text-emerald-400",
                  children: "3 - 5 Engineers"
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                  name: "check-circle-2",
                  className: "w-4 h-4 text-emerald-400"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: "Architecture & API Schema Included"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                  name: "check-circle-2",
                  className: "w-4 h-4 text-emerald-400"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: "Full Codebase Ownership & IP Transfer"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                  name: "check-circle-2",
                  className: "w-4 h-4 text-emerald-400"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: "30-Day Post-Launch SLA Warranty"
                })]
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: () => onLaunchEnquiry(`${calculation.platformName} (Estimated: $${calculation.costLow.toLocaleString()} - $${calculation.costHigh.toLocaleString()})`),
            className: "w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 to-cyber-cyan text-white font-bold text-sm shadow-xl shadow-brand-600/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Lock In Scope & Book Architect"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              name: "arrow-right",
              className: "w-4 h-4"
            })]
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
  const tabs = Object.keys(TECH_STACK);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "tech-stack",
    className: "py-24 relative",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center max-w-3xl mx-auto mb-14",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-xs font-bold tracking-widest uppercase text-cyber-cyan font-mono",
          children: "MODERN ARCHITECTURAL DNA"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4",
          children: "Battle-Tested Technology Stack"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-slate-300 text-sm sm:text-base",
          children: "Engineered for zero tech-debt, high throughput, and effortless horizontal scalability."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex justify-center mb-12",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "glass-panel p-1.5 rounded-2xl flex flex-wrap gap-1 border border-slate-800",
          children: tabs.map(tab => /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: () => setActiveTab(tab),
            className: `px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeTab === tab ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg shadow-brand-600/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`,
            children: tab
          }, tab))
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
        children: TECH_STACK[activeTab].map((t, idx) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "glass-panel rounded-2xl p-6 border border-slate-800 hover:border-brand-500/50 hover:bg-slate-800/40 transition-all group",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyber-cyan mb-4 group-hover:scale-110 group-hover:border-brand-500 transition-all",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              name: t.icon,
              className: "w-6 h-6"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
            className: "font-heading text-lg font-bold text-white mb-2",
            children: t.name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-xs text-slate-400 leading-relaxed",
            children: t.desc
          })]
        }, idx))
      })]
    })
  });
}

// =========================================================
// 7. AGILE PROCESS SECTION
// =========================================================
function ProcessSection() {
  const steps = [{
    num: "01",
    title: "Discovery & Architecture",
    desc: "Technical roadmap, API design, user flows, and milestone sizing.",
    icon: "compass"
  }, {
    num: "02",
    title: "UI/UX Design Systems",
    desc: "Interactive Figma prototypes with AAA accessibility standards.",
    icon: "pen-tool"
  }, {
    num: "03",
    title: "Sprint Engineering",
    desc: "2-week iterative Agile delivery with test-driven development.",
    icon: "terminal"
  }, {
    num: "04",
    title: "Rigorous QA & Security",
    desc: "Automated end-to-end testing, penetration test & SOC2 validation.",
    icon: "shield-alert"
  }, {
    num: "05",
    title: "Global Scale & SLA",
    desc: "Cloud orchestration, autoscaling Kubernetes, and 24/7 monitoring.",
    icon: "rocket"
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "process",
    className: "py-24 relative bg-slate-950/60 border-t border-slate-800",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center max-w-3xl mx-auto mb-16",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-xs font-bold tracking-widest uppercase text-brand-400 font-mono",
          children: "ENGINEERING EXCELLENCE"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4",
          children: "The 5-Step Delivery Pipeline"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-slate-300 text-sm sm:text-base",
          children: "Modeled after the industry's most disciplined tech startup engineering methodologies."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-5 gap-6",
        children: steps.map((st, idx) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "glass-panel rounded-2xl p-6 border border-slate-800 relative group hover:border-cyber-cyan/50 transition-all",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "font-mono text-3xl font-black text-slate-700 block mb-3 group-hover:text-cyber-cyan transition-colors",
            children: st.num
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center mb-4",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              name: st.icon,
              className: "w-5 h-5 text-brand-400"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
            className: "font-heading text-base font-bold text-white mb-2",
            children: st.title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-xs text-slate-400 leading-relaxed",
            children: st.desc
          })]
        }, idx))
      })]
    })
  });
}

// =========================================================
// 8. PORTFOLIO SHOWCASE SECTION
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
          children: "Featured Client Case Studies"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-slate-300 text-sm sm:text-base",
          children: "Explore how Deligo Technologies architects high-yield platforms for leading digital enterprises."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
        children: PORTFOLIO_PROJECTS.map(proj => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "glass-panel rounded-3xl p-8 border border-slate-800 hover:border-brand-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex items-center justify-between mb-4",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-600/20 text-brand-300 border border-brand-500/30",
                children: proj.badge
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-sm font-bold text-cyber-cyan font-mono",
                children: proj.stat
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              className: "font-heading text-2xl font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors",
              children: proj.title
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-slate-400 text-sm leading-relaxed mb-6",
              children: proj.desc
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "flex flex-wrap gap-2 mb-6",
              children: proj.tags.map((tg, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800",
                children: tg
              }, idx))
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
              onClick: () => onSelectProject(proj.title),
              className: "w-full py-3 rounded-xl bg-slate-800/80 hover:bg-brand-600 text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-2",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: "Explore Technical Architecture"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "arrow-up-right",
                className: "w-4 h-4"
              })]
            })]
          })]
        }, proj.id))
      })]
    })
  });
}

// =========================================================
// 9. TESTIMONIALS SECTION
// =========================================================
function TestimonialsSection() {
  const reviews = [{
    client: "Dr. Alexander Wright",
    role: "Chief Medical Officer",
    company: "HealthWave Telemed (SF)",
    quote: "Deligo Technologies delivered our HIPAA-compliant telemedicine platform ahead of schedule. Their attention to WebRTC reliability and automated testing set them worlds apart from previous agencies."
  }, {
    client: "Faisal Al-Nuaimi",
    role: "VP of Engineering",
    company: "FinScale Global (Dubai)",
    quote: "The microservices architecture and automated reconciliation engine built by Deligo handles over $100M monthly with zero latency spikes. Truly premier caliber developers."
  }, {
    client: "Marcus Vance",
    role: "Managing Director",
    company: "Vance Strategy (London)",
    quote: "Flawless Kubernetes migration and DevOps overhaul. Deligo's sprint transparent roadmap gave our executive board 100% confidence from day one."
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    id: "testimonials",
    className: "py-24 relative bg-slate-950/40 border-t border-slate-800",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center max-w-3xl mx-auto mb-16",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-xs font-bold tracking-widest uppercase text-brand-400 font-mono",
          children: "VERIFIED CLIENT TRUST"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4",
          children: "What Tech Leaders Say About Us"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-slate-300 text-sm sm:text-base",
          children: "Trusted by founders, CTOs, and product leaders globally."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
        children: reviews.map((rev, idx) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "glass-panel rounded-2xl p-8 border border-slate-800 flex flex-col justify-between",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "flex gap-1 text-amber-400 mb-4",
              children: [1, 2, 3, 4, 5].map(s => /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                name: "star",
                className: "w-4 h-4 fill-amber-400"
              }, s))
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              className: "text-slate-300 text-sm leading-relaxed italic mb-6",
              children: ["\"", rev.quote, "\""]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pt-4 border-t border-slate-800/80",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
              className: "font-heading font-bold text-white text-sm",
              children: rev.client
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-cyber-cyan block",
              children: rev.role
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-slate-500 font-mono",
              children: rev.company
            })]
          })]
        }, idx))
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
    className: "py-20 relative",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "glass-panel-glow rounded-3xl p-10 sm:p-16 text-center border border-brand-500/40 relative overflow-hidden",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "relative z-10 max-w-3xl mx-auto space-y-6",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "text-xs font-bold tracking-widest uppercase text-cyber-cyan font-mono",
            children: "READY TO BUILD?"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
            className: "font-heading text-3xl sm:text-5xl font-extrabold text-white",
            children: "Turn Your Vision Into a Market-Leading Platform"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-slate-300 text-sm sm:text-base max-w-xl mx-auto",
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
// 11. FOOTER (Clean Public Footer - Zero CRM links)
// =========================================================
function Footer() {
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
            children: "Direct Inquiries"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-xs text-slate-400 mb-3 leading-relaxed",
            children: "Have an enterprise project or RFP? Reach out directly to our engineering leadership team."
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "space-y-2 text-xs",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-slate-300 font-mono font-medium",
              children: "contact@deligotechnologies.com"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-emerald-400 font-medium",
              children: "Response SLA: < 24 Business Hours"
            })]
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
// 12. ENQUIRY PROPOSAL MODAL
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
  const [honeypot, setHoneypot] = useState("");
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
      const res = await fetch(`${API_BASE}/api/enquiry.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          website_hp: honeypot
        })
      });
      if (res.ok) {
        const data = await res.json();
        const newLead = {
          id: data.enquiry_id || Date.now(),
          ...formData,
          status: 'NEW',
          priority: formData.budget.includes('100,000') ? 'HIGH' : 'MEDIUM',
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
    const fallbackLead = {
      id: Date.now(),
      ...formData,
      status: 'NEW',
      priority: 'MEDIUM',
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "text",
          name: "website_hp",
          value: honeypot,
          onChange: e => setHoneypot(e.target.value),
          tabIndex: "-1",
          autoComplete: "off",
          style: {
            position: 'absolute',
            opacity: 0,
            zIndex: -1,
            pointerEvents: 'none',
            height: 0,
            width: 0
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
              className: "w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-xs font-semibold text-slate-300 mb-1.5",
              children: "Work Email Address *"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "email",
              required: true,
              placeholder: "david@company.io",
              value: formData.email,
              onChange: e => setFormData({
                ...formData,
                email: e.target.value
              }),
              className: "w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-xs font-semibold text-slate-300 mb-1.5",
              children: "Phone / WhatsApp"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "text",
              placeholder: "+1 (555) 000-0000",
              value: formData.phone,
              onChange: e => setFormData({
                ...formData,
                phone: e.target.value
              }),
              className: "w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-xs font-semibold text-slate-300 mb-1.5",
              children: "Company / Startup Name"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "text",
              placeholder: "Acme Technologies Inc.",
              value: formData.company,
              onChange: e => setFormData({
                ...formData,
                company: e.target.value
              }),
              className: "w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-xs font-semibold text-slate-300 mb-1.5",
              children: "Target Capability"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
              value: formData.service,
              onChange: e => setFormData({
                ...formData,
                service: e.target.value
              }),
              className: "w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500",
              children: serviceOptions.map((opt, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: opt,
                children: opt
              }, i))
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "block text-xs font-semibold text-slate-300 mb-1.5",
              children: "Anticipated Budget"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
              value: formData.budget,
              onChange: e => setFormData({
                ...formData,
                budget: e.target.value
              }),
              className: "w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500",
              children: budgetOptions.map((opt, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: opt,
                children: opt
              }, i))
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "block text-xs font-semibold text-slate-300 mb-1.5",
            children: "Project Brief & Technical Scope *"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
            rows: 3,
            required: true,
            placeholder: "Describe your current tech stack, target platforms, timeline, and key technical goals...",
            value: formData.message,
            onChange: e => setFormData({
              ...formData,
              message: e.target.value
            }),
            className: "w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyber-cyan text-white font-bold text-sm shadow-xl shadow-brand-600/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2",
          children: isSubmitting ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: "Submitting Project Brief..."
          }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Submit Confidential Proposal Request"
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
// 13. SECRET EXECUTIVE LOGIN MODAL (Protected by Credentials)
// =========================================================
function AdminLoginModal({
  isOpen,
  onClose,
  onLoginSuccess,
  showToast
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  if (!isOpen) return null;
  const handleSubmit = async e => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/admin.php?action=login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username.trim(),
          password
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setIsSubmitting(false);
          onLoginSuccess(data.token || "deligo_sec_auth");
          return;
        } else {
          setErrorMsg(data.message || "Invalid executive credentials.");
          setIsSubmitting(false);
          return;
        }
      }
    } catch (err) {
      console.log("Checking master credentials...");
    }

    // Cryptographic Verification for offline / GitHub Pages (Zero plaintext passwords stored)
    try {
      const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(password));
      const hash = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
      const validUsers = ["admin", "owner", "deligo_admin", "admin@deligotechnologies.com"];
      const validHashes = ["b73ffff97b578e5e00896a2512b6d91ca08ee0bb607b5a1148d6bd4f6f28ac77", "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9"];
      if (validUsers.includes(username.trim().toLowerCase()) && validHashes.includes(hash)) {
        setIsSubmitting(false);
        onLoginSuccess("master_offline_token_" + Date.now());
        return;
      }
    } catch (e) {}
    setIsSubmitting(false);
    setErrorMsg("Invalid executive credentials. Access denied.");
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "relative w-full max-w-md glass-panel-glow rounded-3xl p-8 border border-brand-500/50 shadow-2xl",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: onClose,
        className: "absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-all",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
          name: "x",
          className: "w-5 h-5"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center mb-6",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-cyber-cyan flex items-center justify-center mx-auto mb-3 shadow-lg shadow-brand-500/20",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
            name: "shield-check",
            className: "w-8 h-8 text-white"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-[11px] font-bold tracking-widest uppercase text-cyber-cyan font-mono",
          children: "RESTRICTED ACCESS"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "font-heading text-2xl font-extrabold text-white mt-1",
          children: "Executive Portal"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-xs text-slate-400 mt-1",
          children: "DELIGO TECHNOLOGIES \u2022 Confidential CRM Access"
        })]
      }), errorMsg && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "p-3 mb-5 rounded-xl bg-red-950/60 border border-red-500/60 text-red-200 text-xs flex items-center gap-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
          name: "shield-alert",
          className: "w-4 h-4 text-red-400 shrink-0"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: errorMsg
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "space-y-4",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "block text-xs font-semibold text-slate-300 mb-1.5",
            children: "Executive Username or Email"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "text",
            required: true,
            value: username,
            onChange: e => setUsername(e.target.value),
            placeholder: "e.g. admin",
            className: "w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "block text-xs font-semibold text-slate-300 mb-1.5",
            children: "Secure Password"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "relative",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: showPassword ? "text" : "password",
              required: true,
              value: password,
              onChange: e => setPassword(e.target.value),
              placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
              className: "w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors pr-12"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "button",
              onClick: () => setShowPassword(!showPassword),
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-medium",
              children: showPassword ? "Hide" : "Show"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyber-cyan text-white font-bold text-sm shadow-xl shadow-brand-600/30 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2",
          children: isSubmitting ? "Authenticating..." : "Unlock Executive CRM"
        })]
      })]
    })
  });
}

// =========================================================
// 14. OWNER DASHBOARD (Lead Tracking CRM & Workflow)
// =========================================================
function OwnerDashboard({
  isOpen,
  onClose,
  onLogout,
  enquiries,
  setEnquiries,
  onRefresh,
  showToast
}) {
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("ALL");
  const [selectedServiceFilter, setSelectedServiceFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [newNoteText, setNewNoteText] = useState("");
  const [isExporting, setIsExporting] = useState(false);
  if (!isOpen) return null;
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter(item => {
      const matchesStatus = selectedStatusFilter === "ALL" || item.status === selectedStatusFilter;
      const matchesService = selectedServiceFilter === "ALL" || item.service === selectedServiceFilter;
      const matchesSearch = !searchQuery || item.full_name.toLowerCase().includes(searchQuery.toLowerCase()) || item.email.toLowerCase().includes(searchQuery.toLowerCase()) || item.company && item.company.toLowerCase().includes(searchQuery.toLowerCase()) || item.message.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesService && matchesSearch;
    });
  }, [enquiries, selectedStatusFilter, selectedServiceFilter, searchQuery]);
  const getStatusBadge = status => {
    const styles = {
      'NEW': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
      'CONTACTED': 'bg-blue-500/20 text-blue-400 border-blue-500/40',
      'IN_DISCUSSION': 'bg-amber-500/20 text-amber-400 border-amber-500/40',
      'PROPOSAL_SENT': 'bg-purple-500/20 text-purple-400 border-purple-500/40',
      'CONVERTED': 'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/40 font-bold',
      'ARCHIVED': 'bg-slate-700/40 text-slate-400 border-slate-600/40'
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: `px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${styles[status] || styles['NEW']}`,
      children: status.replace('_', ' ')
    });
  };
  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const token = sessionStorage.getItem("deligo_admin_token");
      await fetch(`${API_BASE}/api/admin.php?action=update_status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? {
            "Authorization": `Bearer ${token}`
          } : {})
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
  const handleAddNote = async enquiryId => {
    if (!newNoteText.trim()) return;
    const noteContent = newNoteText.trim();
    setNewNoteText("");
    try {
      const token = sessionStorage.getItem("deligo_admin_token");
      await fetch(`${API_BASE}/api/admin.php?action=add_note`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? {
            "Authorization": `Bearer ${token}`
          } : {})
        },
        body: JSON.stringify({
          enquiry_id: enquiryId,
          note: noteContent
        })
      });
    } catch (err) {
      console.log("Local note append:", err);
    }
    setEnquiries(prev => prev.map(e => {
      if (e.id === enquiryId) {
        const updatedNotes = e.notes ? [...e.notes, noteContent] : [noteContent];
        return {
          ...e,
          notes: updatedNotes
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
  const handleExportCsv = () => {
    setIsExporting(true);
    try {
      const headers = ['ID', 'Full Name', 'Email', 'Phone', 'Company', 'Service', 'Budget', 'Timeline', 'Status', 'Priority', 'Est. Value ($)', 'Source', 'Received At', 'Message'];
      const rows = enquiries.map(e => [e.id, `"${(e.full_name || '').replace(/"/g, '""')}"`, `"${(e.email || '').replace(/"/g, '""')}"`, `"${(e.phone || '').replace(/"/g, '""')}"`, `"${(e.company || '').replace(/"/g, '""')}"`, `"${(e.service || '').replace(/"/g, '""')}"`, `"${(e.budget || '').replace(/"/g, '""')}"`, `"${(e.timeline || '').replace(/"/g, '""')}"`, e.status, e.priority, e.estimated_value || 0, `"${(e.source || 'Website').replace(/"/g, '""')}"`, e.created_at, `"${(e.message || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`].join(','));
      const csvContent = [headers.join(','), ...rows].join('\n');
      const blob = new Blob([csvContent], {
        type: 'text/csv;charset=utf-8;'
      });
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
        const token = sessionStorage.getItem("deligo_admin_token") || "";
        window.open(`${API_BASE}/api/export.php?token=${encodeURIComponent(token)}`, '_blank');
      }
    }
    setTimeout(() => setIsExporting(false), 800);
  };
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
                children: "CONFIDENTIAL"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-xs text-slate-400",
              children: "DELIGO TECHNOLOGIES \u2022 Authorized Executive Access"
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
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: onLogout,
            className: "px-3 py-2 rounded-lg bg-red-950/60 hover:bg-red-900/80 text-red-300 border border-red-500/40 text-xs font-semibold flex items-center gap-1.5 transition-all",
            title: "Sign out of Executive Portal",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
              name: "x",
              className: "w-3.5 h-3.5 text-red-400"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Sign Out"
            })]
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
              className: "text-[11px] font-mono uppercase text-slate-400 block mb-1",
              children: "TOTAL PIPELINE"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "text-2xl font-bold font-heading text-white",
              children: ["$", totalPipelineValue.toLocaleString()]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "text-[10px] text-cyber-cyan",
              children: [totalCount, " Inbound Inquiries"]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-4 rounded-xl bg-slate-900/60 border border-slate-800",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-[11px] font-mono uppercase text-slate-400 block mb-1",
              children: "NEW UNREAD"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "text-2xl font-bold font-heading text-emerald-400",
              children: newCount
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-[10px] text-slate-400",
              children: "< 24h Response Target"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-4 rounded-xl bg-slate-900/60 border border-slate-800",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-[11px] font-mono uppercase text-slate-400 block mb-1",
              children: "IN NEGOTIATION"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "text-2xl font-bold font-heading text-amber-400",
              children: inDiscussionCount
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-[10px] text-slate-400",
              children: "Proposals & SOWs"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-4 rounded-xl bg-slate-900/60 border border-slate-800",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-[11px] font-mono uppercase text-slate-400 block mb-1",
              children: "WON CONTRACTS"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "text-2xl font-bold font-heading text-cyber-cyan",
              children: convertedCount
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
              className: "text-[10px] text-emerald-400 font-semibold",
              children: [conversionRate, "% Conversion Rate"]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "p-4 rounded-xl bg-slate-900/60 border border-slate-800 col-span-2 lg:col-span-1",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-[11px] font-mono uppercase text-slate-400 block mb-1",
              children: "DB ENGINE"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "text-sm font-bold text-white truncate mt-1",
              children: "Live Database"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-[10px] text-emerald-400 font-mono",
              children: "Connected"
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
              className: "w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-500"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
              value: selectedStatusFilter,
              onChange: e => setSelectedStatusFilter(e.target.value),
              className: "px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300 focus:outline-none",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: "ALL",
                children: "All Statuses"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: "NEW",
                children: "New Leads"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: "CONTACTED",
                children: "Contacted"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: "IN_DISCUSSION",
                children: "In Discussion"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: "PROPOSAL_SENT",
                children: "Proposal Sent"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: "CONVERTED",
                children: "Converted (Won)"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: "ARCHIVED",
                children: "Archived"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
              value: selectedServiceFilter,
              onChange: e => setSelectedServiceFilter(e.target.value),
              className: "px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300 focus:outline-none",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: "ALL",
                children: "All Services"
              }), SERVICES_LIST.map(s => /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                value: s.title,
                children: s.title
              }, s.id))]
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: `${selectedEnquiry ? 'lg:col-span-7' : 'lg:col-span-12'} rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/40`,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "overflow-x-auto",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
                className: "w-full text-left border-collapse",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                    className: "bg-slate-900/80 border-b border-slate-800 text-[11px] font-mono uppercase text-slate-400",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                      className: "py-3 px-4",
                      children: "Client"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                      className: "py-3 px-4",
                      children: "Service"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                      className: "py-3 px-4",
                      children: "Budget"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                      className: "py-3 px-4",
                      children: "Status"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                      className: "py-3 px-4",
                      children: "Received"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                      className: "py-3 px-4 text-right",
                      children: "Actions"
                    })]
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
                  className: "divide-y divide-slate-800/60 text-xs",
                  children: filteredEnquiries.length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                      colSpan: "6",
                      className: "py-8 text-center text-slate-500",
                      children: "No client enquiries matched your active filters."
                    })
                  }) : filteredEnquiries.map(enq => /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                    onClick: () => setSelectedEnquiry(enq),
                    className: `hover:bg-slate-800/40 cursor-pointer transition-colors ${selectedEnquiry && selectedEnquiry.id === enq.id ? 'bg-brand-600/10 border-l-2 border-brand-500' : ''}`,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                      className: "py-3 px-4",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        className: "font-semibold text-white",
                        children: enq.full_name
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        className: "text-[11px] text-slate-400",
                        children: enq.company || enq.email
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                      className: "py-3 px-4 text-slate-300",
                      children: enq.service
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                      className: "py-3 px-4 font-mono font-medium text-cyber-cyan",
                      children: enq.budget
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                      className: "py-3 px-4",
                      children: getStatusBadge(enq.status)
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                      className: "py-3 px-4 text-slate-400 text-[11px] font-mono",
                      children: (enq.created_at || '').substring(0, 10)
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                      className: "py-3 px-4 text-right",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                        onClick: e => {
                          e.stopPropagation();
                          setSelectedEnquiry(enq);
                        },
                        className: "px-2.5 py-1 rounded bg-slate-800 text-[11px] text-slate-300 hover:text-white hover:bg-brand-600",
                        children: "Inspect"
                      })
                    })]
                  }, enq.id))
                })]
              })
            })
          }), selectedEnquiry && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "lg:col-span-5 glass-panel-glow rounded-2xl p-6 border border-slate-700/80 space-y-6",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex items-start justify-between",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                  className: "text-[10px] font-mono text-cyber-cyan uppercase block mb-1",
                  children: ["LEAD DOSSIER #", selectedEnquiry.id]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
                  className: "font-heading text-xl font-bold text-white",
                  children: selectedEnquiry.full_name
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                  className: "text-xs text-slate-400",
                  children: selectedEnquiry.company || 'Direct Founder'
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
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    children: "Call"
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
              className: "p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                className: "text-[11px] font-mono text-slate-400 uppercase block",
                children: "Update Pipeline Stage"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
                value: selectedEnquiry.status,
                onChange: e => handleUpdateStatus(selectedEnquiry.id, e.target.value),
                className: "w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                  value: "NEW",
                  children: "NEW LEAD"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                  value: "CONTACTED",
                  children: "CONTACTED"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                  value: "IN_DISCUSSION",
                  children: "IN DISCUSSION"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                  value: "PROPOSAL_SENT",
                  children: "PROPOSAL SENT"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                  value: "CONVERTED",
                  children: "CONVERTED (WON)"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                  value: "ARCHIVED",
                  children: "ARCHIVED"
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "space-y-2",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                className: "text-[11px] font-mono text-slate-400 uppercase block",
                children: "Client Project Brief"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "text-xs text-slate-300 leading-relaxed p-3.5 rounded-xl bg-slate-900/60 border border-slate-800",
                children: selectedEnquiry.message
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "space-y-3 pt-2",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
                className: "text-[11px] font-mono text-slate-400 uppercase block",
                children: ["Internal CRM Notes (", selectedEnquiry.notes ? selectedEnquiry.notes.length : 0, ")"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "space-y-2 max-h-36 overflow-y-auto",
                children: selectedEnquiry.notes && selectedEnquiry.notes.map((nt, nidx) => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300",
                  children: nt
                }, nidx))
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex gap-2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  type: "text",
                  placeholder: "Write note (e.g. Call scheduled, SOW v2)...",
                  value: newNoteText,
                  onChange: e => setNewNoteText(e.target.value),
                  onKeyDown: e => {
                    if (e.key === 'Enter') handleAddNote(selectedEnquiry.id);
                  },
                  className: "flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                  onClick: () => handleAddNote(selectedEnquiry.id),
                  className: "px-3 py-2 rounded-lg bg-brand-600 text-xs text-white font-semibold hover:bg-brand-500",
                  children: "Add"
                })]
              })]
            })]
          })]
        })]
      })]
    })
  });
}

// Render React DOM
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/(0, _jsxRuntime.jsx)(App, {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZU1lbW8iLCJSZWFjdCIsIkFQSV9CQVNFIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsIkRFTElHT19BUElfUE9SVCIsIklOSVRJQUxfRU5RVUlSSUVTIiwiaWQiLCJmdWxsX25hbWUiLCJlbWFpbCIsInBob25lIiwiY29tcGFueSIsInNlcnZpY2UiLCJidWRnZXQiLCJ0aW1lbGluZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJwcmlvcml0eSIsImVzdGltYXRlZF92YWx1ZSIsInNvdXJjZSIsImNyZWF0ZWRfYXQiLCJub3RlcyIsIlNFUlZJQ0VTX0xJU1QiLCJ0aXRsZSIsImJhZGdlIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwidGVjaCIsImZlYXR1cmVzIiwiVEVDSF9TVEFDSyIsIm5hbWUiLCJkZXNjIiwiUE9SVEZPTElPX1BST0pFQ1RTIiwiY2F0ZWdvcnkiLCJzdGF0IiwidGFncyIsImltYWdlR3JhZGllbnQiLCJJY29uIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJpY29ucyIsIkRFTElHT19JQ09OUyIsImljb25EZWYiLCJfanN4UnVudGltZSIsImpzeCIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImNoaWxkcmVuIiwibWFwIiwidGFnIiwiYXR0cnMiLCJpZHgiLCJUYWdOYW1lIiwiQXBwIiwiaXNFbnF1aXJ5TW9kYWxPcGVuIiwic2V0SXNFbnF1aXJ5TW9kYWxPcGVuIiwiaXNEYXNoYm9hcmRPcGVuIiwic2V0SXNEYXNoYm9hcmRPcGVuIiwiaXNBZG1pbkxvZ2luT3BlbiIsInNldElzQWRtaW5Mb2dpbk9wZW4iLCJpc0FkbWluTG9nZ2VkSW4iLCJzZXRJc0FkbWluTG9nZ2VkSW4iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJlIiwic2VsZWN0ZWRTZXJ2aWNlRm9yTW9kYWwiLCJzZXRTZWxlY3RlZFNlcnZpY2VGb3JNb2RhbCIsImVucXVpcmllcyIsInNldEVucXVpcmllcyIsInNhdmVkIiwibG9jYWxTdG9yYWdlIiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiYWN0aXZlVGVjaFRhYiIsInNldEFjdGl2ZVRlY2hUYWIiLCJtb2JpbGVOYXZPcGVuIiwic2V0TW9iaWxlTmF2T3BlbiIsIm5vdGlmaWNhdGlvblRvYXN0Iiwic2V0Tm90aWZpY2F0aW9uVG9hc3QiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicmVmcmVzaEVucXVpcmllcyIsInRva2VuIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwib2siLCJkYXRhIiwianNvbiIsInN1Y2Nlc3MiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tBZG1pblJvdXRlIiwiaCIsImhhc2giLCJ0b0xvd2VyQ2FzZSIsInMiLCJzZWFyY2giLCJwIiwicGF0aG5hbWUiLCJpc0FkbWluIiwiaW5jbHVkZXMiLCJlbmRzV2l0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlQWRtaW5Mb2dpblN1Y2Nlc3MiLCJzaG93VG9hc3QiLCJoYW5kbGVBZG1pbkxvZ291dCIsInJlbW92ZUl0ZW0iLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiaGFuZGxlQ2xvc2VBZG1pbiIsInR5cGUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlT3BlbkVucXVpcnkiLCJzZXJ2aWNlVGl0bGUiLCJqc3hzIiwiTmF2YmFyIiwib25PcGVuRW5xdWlyeSIsIkhlcm9TZWN0aW9uIiwib25TY3JvbGxUb0VzdGltYXRvciIsImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJTdGF0c0Jhbm5lciIsIlNlcnZpY2VzU2VjdGlvbiIsIm9uU2VsZWN0U2VydmljZSIsIlByb2plY3RFc3RpbWF0b3JTZWN0aW9uIiwib25MYXVuY2hFbnF1aXJ5IiwiVGVjaFN0YWNrU2VjdGlvbiIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsIlByb2Nlc3NTZWN0aW9uIiwiUG9ydGZvbGlvU2VjdGlvbiIsIm9uU2VsZWN0UHJvamVjdCIsIlRlc3RpbW9uaWFsc1NlY3Rpb24iLCJDdGFCYW5uZXIiLCJGb290ZXIiLCJFbnF1aXJ5TW9kYWwiLCJpc09wZW4iLCJvbkNsb3NlIiwiaW5pdGlhbFNlcnZpY2UiLCJvblN1Ym1pdFN1Y2Nlc3MiLCJuZXdMZWFkIiwicHJldiIsImNvbmZldHRpIiwicGFydGljbGVDb3VudCIsInNwcmVhZCIsIm9yaWdpbiIsInkiLCJBZG1pbkxvZ2luTW9kYWwiLCJvbkxvZ2luU3VjY2VzcyIsIk93bmVyRGFzaGJvYXJkIiwib25Mb2dvdXQiLCJvblJlZnJlc2giLCJzY3JvbGxlZCIsInNldFNjcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsWSIsImhyZWYiLCJvbkNsaWNrIiwic3RhdHMiLCJsYWJlbCIsInZhbCIsInN1YiIsInNydiIsImZlYXQiLCJmaWR4IiwidCIsInRpZHgiLCJwbGF0Zm9ybSIsInNldFBsYXRmb3JtIiwic2VsZWN0ZWRGZWF0dXJlcyIsInNldFNlbGVjdGVkRmVhdHVyZXMiLCJzZXRUaW1lbGluZSIsInBsYXRmb3JtcyIsImJhc2UiLCJkYXlzIiwiZmVhdHVyZXNMaXN0IiwiY29zdCIsInRpbWVsaW5lcyIsIm11bHQiLCJ0aW1lTW9kIiwidG9nZ2xlRmVhdHVyZSIsImZpZCIsImZpbHRlciIsIngiLCJjYWxjdWxhdGlvbiIsInBsYXQiLCJmaW5kIiwiZmVhdHNDb3N0IiwicmVkdWNlIiwiYWNjIiwiZiIsImZlYXRzRGF5cyIsInRsIiwidG90YWxDb3N0IiwiTWF0aCIsInJvdW5kIiwidG90YWxXZWVrcyIsIm1heCIsImNvc3RMb3ciLCJjb3N0SGlnaCIsIndlZWtzIiwicGxhdGZvcm1OYW1lIiwidG9Mb2NhbGVTdHJpbmciLCJpc1NlbGVjdGVkIiwidGFicyIsIk9iamVjdCIsImtleXMiLCJ0YWIiLCJzdGVwcyIsIm51bSIsInN0IiwicHJvaiIsInRnIiwicmV2aWV3cyIsImNsaWVudCIsInJvbGUiLCJxdW90ZSIsInJldiIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiaG9uZXlwb3QiLCJzZXRIb25leXBvdCIsImJ1ZGdldE9wdGlvbnMiLCJzZXJ2aWNlT3B0aW9ucyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibWV0aG9kIiwiYm9keSIsIndlYnNpdGVfaHAiLCJlbnF1aXJ5X2lkIiwiRGF0ZSIsIm5vdyIsInRvSVNPU3RyaW5nIiwicmVwbGFjZSIsInN1YnN0cmluZyIsIndhcm4iLCJmYWxsYmFja0xlYWQiLCJvblN1Ym1pdCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0YWJJbmRleCIsImF1dG9Db21wbGV0ZSIsInN0eWxlIiwicG9zaXRpb24iLCJvcGFjaXR5IiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsImhlaWdodCIsIndpZHRoIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsIm9wdCIsImkiLCJyb3dzIiwiZGlzYWJsZWQiLCJGcmFnbWVudCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwidHJpbSIsImJ1ZiIsImNyeXB0byIsInN1YnRsZSIsImRpZ2VzdCIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwiZnJvbSIsIlVpbnQ4QXJyYXkiLCJiIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImpvaW4iLCJ2YWxpZFVzZXJzIiwidmFsaWRIYXNoZXMiLCJzZWxlY3RlZFN0YXR1c0ZpbHRlciIsInNldFNlbGVjdGVkU3RhdHVzRmlsdGVyIiwic2VsZWN0ZWRTZXJ2aWNlRmlsdGVyIiwic2V0U2VsZWN0ZWRTZXJ2aWNlRmlsdGVyIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInNlbGVjdGVkRW5xdWlyeSIsInNldFNlbGVjdGVkRW5xdWlyeSIsIm5ld05vdGVUZXh0Iiwic2V0TmV3Tm90ZVRleHQiLCJpc0V4cG9ydGluZyIsInNldElzRXhwb3J0aW5nIiwiZmlsdGVyZWRFbnF1aXJpZXMiLCJpdGVtIiwibWF0Y2hlc1N0YXR1cyIsIm1hdGNoZXNTZXJ2aWNlIiwibWF0Y2hlc1NlYXJjaCIsImdldFN0YXR1c0JhZGdlIiwic3R5bGVzIiwiaGFuZGxlVXBkYXRlU3RhdHVzIiwibmV3U3RhdHVzIiwiaGFuZGxlQWRkTm90ZSIsImVucXVpcnlJZCIsIm5vdGVDb250ZW50Iiwibm90ZSIsInVwZGF0ZWROb3RlcyIsImhhbmRsZUV4cG9ydENzdiIsImNzdkNvbnRlbnQiLCJibG9iIiwiQmxvYiIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImEiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJyZXZva2VPYmplY3RVUkwiLCJvcGVuIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidG90YWxDb3VudCIsIm5ld0NvdW50IiwiaW5EaXNjdXNzaW9uQ291bnQiLCJjb252ZXJ0ZWRDb3VudCIsInRvdGFsUGlwZWxpbmVWYWx1ZSIsImN1ciIsImNvbnZlcnNpb25SYXRlIiwidG9GaXhlZCIsImNvbFNwYW4iLCJlbnEiLCJzdG9wUHJvcGFnYXRpb24iLCJudCIsIm5pZHgiLCJvbktleURvd24iLCJrZXkiLCJSZWFjdERPTSIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiXSwic291cmNlcyI6WyJhcHAuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZU1lbW8gfSA9IFJlYWN0O1xuXG5jb25zdCBBUElfQkFTRSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2ZpbGU6JyA/ICh3aW5kb3cuREVMSUdPX0FQSV9QT1JUID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6JyArIHdpbmRvdy5ERUxJR09fQVBJX1BPUlQgOiAnaHR0cDovL2xvY2FsaG9zdDo4MDg1JykgOiAnJztcblxuY29uc3QgSU5JVElBTF9FTlFVSVJJRVMgPSBbXG4gICAge1xuICAgICAgICBpZDogMTAxLFxuICAgICAgICBmdWxsX25hbWU6IFwiU2FyYWggSmVua2luc1wiLFxuICAgICAgICBlbWFpbDogXCJzYXJhaC5qQGhlYWx0aHdhdmUuaW9cIixcbiAgICAgICAgcGhvbmU6IFwiKzEgKDU1NSkgMjM0LTg5MDFcIixcbiAgICAgICAgY29tcGFueTogXCJIZWFsdGhXYXZlIFRlbGVtZWRcIixcbiAgICAgICAgc2VydmljZTogXCJNb2JpbGUgQXBwIERldmVsb3BtZW50XCIsXG4gICAgICAgIGJ1ZGdldDogXCIkMjUsMDAwIC0gJDUwLDAwMFwiLFxuICAgICAgICB0aW1lbGluZTogXCIyIC0gMyBNb250aHNcIixcbiAgICAgICAgbWVzc2FnZTogXCJXZSBuZWVkIGFuIGVuZC10by1lbmQgSElQQUEgY29tcGxpYW50IHRlbGVtZWRpY2luZSBpT1MgYW5kIEFuZHJvaWQgYXBwIHdpdGggV2ViUlRDIHZpZGVvIGNhbGxpbmcgYW5kIGVsZWN0cm9uaWMgaGVhbHRoIHJlY29yZHMgaW50ZWdyYXRpb24uXCIsXG4gICAgICAgIHN0YXR1czogXCJORVdcIixcbiAgICAgICAgcHJpb3JpdHk6IFwiVVJHRU5UXCIsXG4gICAgICAgIGVzdGltYXRlZF92YWx1ZTogMzgwMDAsXG4gICAgICAgIHNvdXJjZTogXCJXZWJzaXRlIEZvcm1cIixcbiAgICAgICAgY3JlYXRlZF9hdDogXCIyMDI2LTExLTA5IDExOjIwOjAwXCIsXG4gICAgICAgIG5vdGVzOiBbXCJDbGllbnQgYm9va2VkIGluaXRpYWwgZGlzY292ZXJ5IGNhbGwgZm9yIHRvbW9ycm93LiBQcmVwYXJpbmcgSElQQUEgY2hlY2tsaXN0LlwiXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTAyLFxuICAgICAgICBmdWxsX25hbWU6IFwiVmlrcmFtIE1hbGhvdHJhXCIsXG4gICAgICAgIGVtYWlsOiBcInZpa3JhbUBmaW5zY2FsZS5hZVwiLFxuICAgICAgICBwaG9uZTogXCIrOTcxIDUwIDEyMyA0NTY3XCIsXG4gICAgICAgIGNvbXBhbnk6IFwiRmluU2NhbGUgR2xvYmFsIFVBRVwiLFxuICAgICAgICBzZXJ2aWNlOiBcIkVudGVycHJpc2UgU29mdHdhcmUgJiBFUlBcIixcbiAgICAgICAgYnVkZ2V0OiBcIiQ1MCwwMDAgLSAkMTAwLDAwMFwiLFxuICAgICAgICB0aW1lbGluZTogXCIzIC0gNiBNb250aHNcIixcbiAgICAgICAgbWVzc2FnZTogXCJMb29raW5nIGZvciBjdXN0b20gbXVsdGktY3VycmVuY3kgYXV0b21hdGVkIHJlY29uY2lsaWF0aW9uIHBvcnRhbCBhbmQgbWljcm9zZXJ2aWNlcyBiYWNrZW5kIHdpdGggU09DMiBjb21wbGlhbmNlLlwiLFxuICAgICAgICBzdGF0dXM6IFwiSU5fRElTQ1VTU0lPTlwiLFxuICAgICAgICBwcmlvcml0eTogXCJISUdIXCIsXG4gICAgICAgIGVzdGltYXRlZF92YWx1ZTogNzUwMDAsXG4gICAgICAgIHNvdXJjZTogXCJQcm9qZWN0IEVzdGltYXRvclwiLFxuICAgICAgICBjcmVhdGVkX2F0OiBcIjIwMjYtMTEtMDggMTY6NDU6MDBcIixcbiAgICAgICAgbm90ZXM6IFtcIlNlbnQgdGVjaG5pY2FsIGFyY2hpdGVjdHVyZSBkaWFncmFtIGZvciBtaWNyb3NlcnZpY2VzIGVuZ2luZS5cIl1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEwMyxcbiAgICAgICAgZnVsbF9uYW1lOiBcIkVsZW5hIFJvc3RvdmFcIixcbiAgICAgICAgZW1haWw6IFwiZWxlbmFAbm92YW1hcmtldC5kZVwiLFxuICAgICAgICBwaG9uZTogXCIrNDkgMTcwIDk4NzY1NDNcIixcbiAgICAgICAgY29tcGFueTogXCJOb3ZhTWFya2V0IEdtYkhcIixcbiAgICAgICAgc2VydmljZTogXCJXZWIgUGxhdGZvcm0gRW5naW5lZXJpbmdcIixcbiAgICAgICAgYnVkZ2V0OiBcIiQxMCwwMDAgLSAkMjUsMDAwXCIsXG4gICAgICAgIHRpbWVsaW5lOiBcIjEgLSAyIE1vbnRoc1wiLFxuICAgICAgICBtZXNzYWdlOiBcIlJlLWFyY2hpdGVjdGluZyBvdXIgQjJCIG1hcmtldHBsYWNlIGZyb250ZW5kIGludG8gbW9kZXJuIFJlYWN0IDE4IHdpdGggaGlnaC1zcGVlZCBzZWFyY2ggYW5kIGhlYWRsZXNzIFNob3BpZnkgaW50ZWdyYXRpb24uXCIsXG4gICAgICAgIHN0YXR1czogXCJQUk9QT1NBTF9TRU5UXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIk1FRElVTVwiLFxuICAgICAgICBlc3RpbWF0ZWRfdmFsdWU6IDE4NTAwLFxuICAgICAgICBzb3VyY2U6IFwiV2Vic2l0ZSBGb3JtXCIsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAyNi0xMS0wNyAxNDoxMDowMFwiLFxuICAgICAgICBub3RlczogW1wiUHJvcG9zYWwgZHJhZnQgdjIgZGVsaXZlcmVkIHdpdGggOC13ZWVrIHNwcmludCByb2FkbWFwLlwiXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTA0LFxuICAgICAgICBmdWxsX25hbWU6IFwiTGlhbSBPJ0Nvbm5vclwiLFxuICAgICAgICBlbWFpbDogXCJsaWFtQGFwZXhhaS5jby51a1wiLFxuICAgICAgICBwaG9uZTogXCIrNDQgMjAgNzk0NiAwMTkyXCIsXG4gICAgICAgIGNvbXBhbnk6IFwiQXBleCBBdXRvbm9tb3VzXCIsXG4gICAgICAgIHNlcnZpY2U6IFwiQUkgJiBNYWNoaW5lIExlYXJuaW5nXCIsXG4gICAgICAgIGJ1ZGdldDogXCIkNTAsMDAwIC0gJDEwMCwwMDBcIixcbiAgICAgICAgdGltZWxpbmU6IFwiMyAtIDYgTW9udGhzXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiV2UgcmVxdWlyZSBjdXN0b20gUkFHIHBpcGVsaW5lIGFuZCBMTE0gZmluZS10dW5pbmcgZm9yIGxlZ2FsIGNvbnRyYWN0cyBhbmFseXNpcyB3aXRoIG9uLXByZW1pc2UgaG9zdGluZy5cIixcbiAgICAgICAgc3RhdHVzOiBcIkNPTlRBQ1RFRFwiLFxuICAgICAgICBwcmlvcml0eTogXCJISUdIXCIsXG4gICAgICAgIGVzdGltYXRlZF92YWx1ZTogNjIwMDAsXG4gICAgICAgIHNvdXJjZTogXCJXZWJzaXRlIEZvcm1cIixcbiAgICAgICAgY3JlYXRlZF9hdDogXCIyMDI2LTExLTA2IDA5OjMwOjAwXCIsXG4gICAgICAgIG5vdGVzOiBbXCJSZXZpZXdlZCBsZWdhbCBkYXRhc2V0IHNhbXBsZTsgc2VjdXJpdHkgYXVkaXQgY2xlYXJhbmNlIHBlbmRpbmcuXCJdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMDUsXG4gICAgICAgIGZ1bGxfbmFtZTogXCJNYXJjdXMgVmFuY2VcIixcbiAgICAgICAgZW1haWw6IFwibS52YW5jZUB2YW5jZXN0cmF0ZWd5LmNvbVwiLFxuICAgICAgICBwaG9uZTogXCIrMSAoNDE1KSA4OTAtMTIzNFwiLFxuICAgICAgICBjb21wYW55OiBcIlZhbmNlIFN0cmF0ZWd5IEdyb3VwXCIsXG4gICAgICAgIHNlcnZpY2U6IFwiQ2xvdWQgQXJjaGl0ZWN0dXJlICYgRGV2T3BzXCIsXG4gICAgICAgIGJ1ZGdldDogXCIkMjUsMDAwIC0gJDUwLDAwMFwiLFxuICAgICAgICB0aW1lbGluZTogXCIxIC0gMiBNb250aHNcIixcbiAgICAgICAgbWVzc2FnZTogXCJLdWJlcm5ldGVzIGNsdXN0ZXIgbWlncmF0aW9uIGZyb20gQVdTIHRvIGh5YnJpZCBjbG91ZCwgYXV0b21hdGVkIFRlcnJhZm9ybSBpbmZyYXN0cnVjdHVyZSwgYW5kIHplcm8tZG93bnRpbWUgQ0kvQ0QgZGVwbG95bWVudCBwaXBlbGluZS5cIixcbiAgICAgICAgc3RhdHVzOiBcIkNPTlZFUlRFRFwiLFxuICAgICAgICBwcmlvcml0eTogXCJNRURJVU1cIixcbiAgICAgICAgZXN0aW1hdGVkX3ZhbHVlOiAzMjAwMCxcbiAgICAgICAgc291cmNlOiBcIlJlZmVycmFsXCIsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAyNi0xMS0wNCAxODowNTowMFwiLFxuICAgICAgICBub3RlczogW1wiQ29udHJhY3Qgc2lnbmVkISBTT1cgIzEwNCBraWNrZWQgb2ZmLiBUZWFtIG9uYm9hcmRpbmcgc3RhcnRlZC5cIl1cbiAgICB9XG5dO1xuXG5jb25zdCBTRVJWSUNFU19MSVNUID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IFwibW9iaWxlLWFwcHNcIixcbiAgICAgICAgdGl0bGU6IFwiTW9iaWxlIEFwcCBEZXZlbG9wbWVudFwiLFxuICAgICAgICBiYWRnZTogXCJpT1MgJiBBbmRyb2lkXCIsXG4gICAgICAgIGljb246IFwic21hcnRwaG9uZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFbmdpbmVlcmluZyBmbHVpZCwgbmF0aXZlIGFuZCBjcm9zcy1wbGF0Zm9ybSBtb2JpbGUgZXhwZXJpZW5jZXMgd2l0aCA2MGZwcyBhbmltYXRpb25zLCBvZmZsaW5lIHN5bmMsIGFuZCBlbnRlcnByaXNlIHNlY3VyaXR5LlwiLFxuICAgICAgICB0ZWNoOiBbXCJGbHV0dGVyXCIsIFwiUmVhY3QgTmF0aXZlXCIsIFwiU3dpZnRcIiwgXCJLb3RsaW5cIiwgXCJGaXJlYmFzZVwiXSxcbiAgICAgICAgZmVhdHVyZXM6IFtcIkJpb21ldHJpYyBBdXRoZW50aWNhdGlvblwiLCBcIldlYlJUQyBWaWRlby9BdWRpb1wiLCBcIk9mZmxpbmUgRmlyc3QgRGF0YSBTeW5jXCIsIFwiSW4tQXBwIFN1YnNjcmlwdGlvbnNcIl1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwid2ViLWVuZ2luZWVyaW5nXCIsXG4gICAgICAgIHRpdGxlOiBcIlNjYWxhYmxlIFdlYiBFbmdpbmVlcmluZ1wiLFxuICAgICAgICBiYWRnZTogXCJIaWdoIFZlbG9jaXR5XCIsXG4gICAgICAgIGljb246IFwiZ2xvYmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSGlnaC1wZXJmb3JtYW5jZSB3ZWIgYXBwcywgU2FhUyBlY29zeXN0ZW1zLCBhbmQgY2xpZW50IHBvcnRhbHMgYnVpbHQgd2l0aCBSZWFjdCAxOCwgTmV4dC5qcywgYW5kIGxpZ2h0bmluZyBtaWNyb3NlcnZpY2VzLlwiLFxuICAgICAgICB0ZWNoOiBbXCJSZWFjdCAxOFwiLCBcIlR5cGVTY3JpcHRcIiwgXCJOb2RlLmpzXCIsIFwiUEhQIC8gTGFyYXZlbFwiLCBcIk15U1FMXCJdLFxuICAgICAgICBmZWF0dXJlczogW1wiU3ViLXNlY29uZCBQYWdlIFNwZWVkc1wiLCBcIlJvbGUtYmFzZWQgQWNjZXNzIENvbnRyb2xcIiwgXCJDb21wbGV4IERhdGEgVmlzdWFsaXphdGlvbnNcIiwgXCJNdWx0aS10ZW5hbnQgQXJjaGl0ZWN0dXJlXCJdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcImFpLXNvbHV0aW9uc1wiLFxuICAgICAgICB0aXRsZTogXCJBSSAmIE1hY2hpbmUgTGVhcm5pbmcgU3lzdGVtc1wiLFxuICAgICAgICBiYWRnZTogXCJOZXh0LUdlbiBUZWNoXCIsXG4gICAgICAgIGljb246IFwiY3B1XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkluZnVzaW5nIHByb3ByaWV0YXJ5IGludGVsbGlnZW5jZSBpbnRvIHlvdXIgYnVzaW5lc3MgdmlhIExMTSBmaW5lLXR1bmluZywgUkFHIHBpcGVsaW5lcywgY29tcHV0ZXIgdmlzaW9uLCBhbmQgcHJlZGljdGl2ZSBhbmFseXRpY3MuXCIsXG4gICAgICAgIHRlY2g6IFtcIk9wZW5BSVwiLCBcIkxhbmdDaGFpblwiLCBcIlB5dGhvblwiLCBcIlB5VG9yY2hcIiwgXCJWZWN0b3IgREJzXCJdLFxuICAgICAgICBmZWF0dXJlczogW1wiRW50ZXJwcmlzZSBSQUcgQm90c1wiLCBcIkRvY3VtZW50IE9DUiAmIEV4dHJhY3Rpb25cIiwgXCJQcmVkaWN0aXZlIENodXJuICYgU2FsZXNcIiwgXCJSZWFsLXRpbWUgVm9pY2UgQWdlbnRzXCJdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcImNsb3VkLWRldm9wc1wiLFxuICAgICAgICB0aXRsZTogXCJDbG91ZCBJbmZyYXN0cnVjdHVyZSAmIERldk9wc1wiLFxuICAgICAgICBiYWRnZTogXCI5OS45OSUgVXB0aW1lXCIsXG4gICAgICAgIGljb246IFwiY2xvdWRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQXV0b21hdGVkLCBzY2FsYWJsZSBjbG91ZCBvcmNoZXN0cmF0aW9uLiBXZSBidWlsZCBzZWxmLWhlYWxpbmcgS3ViZXJuZXRlcyBjbHVzdGVycywgQ0kvQ0QgcGlwZWxpbmVzLCBhbmQgemVyby10cnVzdCBzZWN1cml0eS5cIixcbiAgICAgICAgdGVjaDogW1wiQVdTXCIsIFwiR29vZ2xlIENsb3VkXCIsIFwiRG9ja2VyXCIsIFwiS3ViZXJuZXRlc1wiLCBcIlRlcnJhZm9ybVwiXSxcbiAgICAgICAgZmVhdHVyZXM6IFtcIkluZnJhc3RydWN0dXJlIGFzIENvZGVcIiwgXCJBdXRvLXNjYWxpbmcgQ2x1c3RlcnNcIiwgXCJaZXJvLWRvd250aW1lIERlcGxveW1lbnRcIiwgXCJTT0MyIC8gSElQQUEgQ29tcGxpYW5jZVwiXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCJ1aXV4LWRlc2lnblwiLFxuICAgICAgICB0aXRsZTogXCJQcm9kdWN0ICYgVUkvVVggRGVzaWduXCIsXG4gICAgICAgIGJhZGdlOiBcIkF3YXJkIFdpbm5pbmdcIixcbiAgICAgICAgaWNvbjogXCJsYXlvdXRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSHVtYW4tY2VudHJpYyBpbnRlcmZhY2VzIHRoYXQgY29udmVydCB2aXNpdG9ycyBpbnRvIHBhc3Npb25hdGUgYnJhbmQgYWR2b2NhdGVzLiBQaXhlbC1wZXJmZWN0IEZpZ21hIGRlc2lnbiBzeXN0ZW1zIGFuZCBtaWNyby1pbnRlcmFjdGlvbnMuXCIsXG4gICAgICAgIHRlY2g6IFtcIkZpZ21hXCIsIFwiRGVzaWduIFN5c3RlbXNcIiwgXCJQcm90b3R5cGluZ1wiLCBcIlVzZXIgUmVzZWFyY2hcIl0sXG4gICAgICAgIGZlYXR1cmVzOiBbXCJJbnRlcmFjdGl2ZSBDbGlja2FibGUgUHJvdG90eXBlc1wiLCBcIkRlc2lnbiBUb2tlbiBMaWJyYXJpZXNcIiwgXCJBY2Nlc3NpYmlsaXR5IFdDQUcgQUFBXCIsIFwiQ29udmVyc2lvbiBSYXRlIE9wdGltaXphdGlvblwiXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCJlbnRlcnByaXNlLWVycFwiLFxuICAgICAgICB0aXRsZTogXCJFbnRlcnByaXNlIFNvZnR3YXJlICYgRVJQXCIsXG4gICAgICAgIGJhZGdlOiBcIkN1c3RvbSBUYWlsb3JlZFwiLFxuICAgICAgICBpY29uOiBcImRhdGFiYXNlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlB1cnBvc2UtYnVpbHQgYnVzaW5lc3MgbWFuYWdlbWVudCBzdWl0ZXMsIGludmVudG9yeSB0cmFja2luZywgQ1JNIGVuZ2luZXMsIGFuZCBsZWdhY3kgc3lzdGVtIG1vZGVybml6YXRpb24uXCIsXG4gICAgICAgIHRlY2g6IFtcIlBIUCAvIE15U1FMXCIsIFwiR3JhcGhRTFwiLCBcIlBvc3RncmVTUUxcIiwgXCJSZWRpc1wiLCBcIkthZmthXCJdLFxuICAgICAgICBmZWF0dXJlczogW1wiQXV0b21hdGVkIEZpbmFuY2lhbCBBdWRpdHNcIiwgXCJDdXN0b20gV29ya2Zsb3cgQXV0b21hdGlvblwiLCBcIkVSUC9DUk0gSW50ZWdyYXRpb25zXCIsIFwiUmVhbC10aW1lIFRlbGVtZXRyeVwiXVxuICAgIH1cbl07XG5cbmNvbnN0IFRFQ0hfU1RBQ0sgPSB7XG4gICAgXCJGcm9udGVuZFwiOiBbXG4gICAgICAgIHsgbmFtZTogXCJSZWFjdCAxOFwiLCBpY29uOiBcImF0b21cIiwgZGVzYzogXCJJbnRlcmFjdGl2ZSBVSSAmIENvbXBvbmVudCBBcmNoaXRlY3R1cmVcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTmV4dC5qc1wiLCBpY29uOiBcInphcFwiLCBkZXNjOiBcIlNlcnZlci1zaWRlIFJlbmRlcmluZyAmIEVkZ2UgRGVsaXZlcnlcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiVGFpbHdpbmQgQ1NTXCIsIGljb246IFwicGFsZXR0ZVwiLCBkZXNjOiBcIkRlc2lnbi1zeXN0ZW0gZHJpdmVuIHN0eWxpbmdcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiVHlwZVNjcmlwdFwiLCBpY29uOiBcInNoaWVsZC1jaGVja1wiLCBkZXNjOiBcIlN0cmljdCB0eXBlIHNhZmV0eSAmIG1haW50YWluYWJpbGl0eVwiIH1cbiAgICBdLFxuICAgIFwiQmFja2VuZCAmIERCXCI6IFtcbiAgICAgICAgeyBuYW1lOiBcIlBIUCA4LjIrXCIsIGljb246IFwiY29kZVwiLCBkZXNjOiBcIkhpZ2gtdGhyb3VnaHB1dCBBUElzICYgRW50ZXJwcmlzZSBMb2dpY1wiIH0sXG4gICAgICAgIHsgbmFtZTogXCJNeVNRTCAvIE1hcmlhREJcIiwgaWNvbjogXCJkYXRhYmFzZVwiLCBkZXNjOiBcIkFDSUQtY29tcGxpYW50IHJlbGF0aW9uYWwgZGF0YWJhc2VcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTm9kZS5qcyAvIEV4cHJlc3NcIiwgaWNvbjogXCJzZXJ2ZXJcIiwgZGVzYzogXCJFdmVudC1kcml2ZW4gYXN5bmNocm9ub3VzIG1pY3Jvc2VydmljZXNcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiUmVkaXNcIiwgaWNvbjogXCJsYXllcnNcIiwgZGVzYzogXCJJbi1tZW1vcnkgY2FjaGluZyBhbmQgcmVhbC10aW1lIHB1Yi9zdWJcIiB9XG4gICAgXSxcbiAgICBcIk1vYmlsZVwiOiBbXG4gICAgICAgIHsgbmFtZTogXCJGbHV0dGVyXCIsIGljb246IFwic21hcnRwaG9uZVwiLCBkZXNjOiBcIk5hdGl2ZSBjcm9zcy1wbGF0Zm9ybSBjb21waWxhdGlvblwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJSZWFjdCBOYXRpdmVcIiwgaWNvbjogXCJ0YWJsZXRcIiwgZGVzYzogXCJIaWdoLXBlcmZvcm1hbmNlIGh5YnJpZCBhcHBzXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlN3aWZ0IChpT1MpXCIsIGljb246IFwiYXBwbGVcIiwgZGVzYzogXCJQdXJlIEFwcGxlIGVjb3N5c3RlbSBwZXJmb3JtYW5jZVwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJLb3RsaW4gKEFuZHJvaWQpXCIsIGljb246IFwiYm90XCIsIGRlc2M6IFwiTW9kZXJuIEFuZHJvaWQgZW50ZXJwcmlzZSBhcHBzXCIgfVxuICAgIF0sXG4gICAgXCJBSSAmIENsb3VkXCI6IFtcbiAgICAgICAgeyBuYW1lOiBcIkFXUyBDbG91ZFwiLCBpY29uOiBcImNsb3VkLWxpZ2h0bmluZ1wiLCBkZXNjOiBcIkdsb2JhbCBzZXJ2ZXJsZXNzICYgY29udGFpbmVyIGhvc3RpbmdcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiRG9ja2VyICYgSzhzXCIsIGljb246IFwiYm94XCIsIGRlc2M6IFwiQ29udGFpbmVyaXplZCBlbGFzdGljIHNjYWxhYmlsaXR5XCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlB5dGhvbiAvIFB5VG9yY2hcIiwgaWNvbjogXCJjcHVcIiwgZGVzYzogXCJEZWVwIGxlYXJuaW5nICYgTExNIGluZmVyZW5jZSBwaXBlbGluZXNcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTGFuZ0NoYWluIC8gUkFHXCIsIGljb246IFwibmV0d29ya1wiLCBkZXNjOiBcIkNvbnRleHQtYXdhcmUgQUkgZW1iZWRkaW5nc1wiIH1cbiAgICBdXG59O1xuXG5jb25zdCBQT1JURk9MSU9fUFJPSkVDVFMgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6IFwiSGVhbHRoV2F2ZSBUZWxlbWVkICYgUlBNXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIk1vYmlsZSAmIENsb3VkXCIsXG4gICAgICAgIGJhZGdlOiBcIkhlYWx0aGNhcmVcIixcbiAgICAgICAgc3RhdDogXCIrMzQwJSBVc2VyIEdyb3d0aFwiLFxuICAgICAgICBkZXNjOiBcIlJlYWwtdGltZSBwYXRpZW50IHRlbGVtZXRyeSwgSElQQUEtY29tcGxpYW50IGVuY3J5cHRlZCB2aWRlbyBjb25zdWx0cywgYW5kIGNvbm5lY3RlZCBJb1Qgdml0YWxzIG1vbml0b3JpbmcuXCIsXG4gICAgICAgIHRhZ3M6IFtcIlJlYWN0IE5hdGl2ZVwiLCBcIldlYlJUQ1wiLCBcIlBIUCBNaWNyb3NlcnZpY2VzXCIsIFwiQVdTXCJdLFxuICAgICAgICBpbWFnZUdyYWRpZW50OiBcImZyb20tYmx1ZS02MDAvMzAgdG8taW5kaWdvLTkwMC80MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICB0aXRsZTogXCJGaW5TY2FsZSBNdWx0aS1DdXJyZW5jeSBHYXRld2F5XCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkVudGVycHJpc2UgV2ViXCIsXG4gICAgICAgIGJhZGdlOiBcIkZpblRlY2hcIixcbiAgICAgICAgc3RhdDogXCIkMS40QiBBbm51YWwgVm9sdW1lXCIsXG4gICAgICAgIGRlc2M6IFwiSGlnaC1mcmVxdWVuY3kgY3Jvc3MtYm9yZGVyIHNldHRsZW1lbnQgcG9ydGFsIHdpdGggYXV0b21hdGVkIGFudGktZnJhdWQgdHJpZ2dlcnMgYW5kIFNXSUZUIGludGVncmF0aW9ucy5cIixcbiAgICAgICAgdGFnczogW1wiUmVhY3QgMThcIiwgXCJNeVNRTFwiLCBcIlBIUCA4XCIsIFwiUmVkaXNcIiwgXCJEb2NrZXJcIl0sXG4gICAgICAgIGltYWdlR3JhZGllbnQ6IFwiZnJvbS1lbWVyYWxkLTYwMC8zMCB0by10ZWFsLTkwMC80MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICB0aXRsZTogXCJMb2dpeEZsZWV0IEFJIERpc3BhdGNoZXJcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiQUkgJiBMb2dpc3RpY3NcIixcbiAgICAgICAgYmFkZ2U6IFwiU3VwcGx5IENoYWluXCIsXG4gICAgICAgIHN0YXQ6IFwiMjglIEZ1ZWwgQ3V0XCIsXG4gICAgICAgIGRlc2M6IFwiUHJlZGljdGl2ZSBmcmVpZ2h0IG9wdGltaXphdGlvbiByb3V0aW5nIHRob3VzYW5kcyBvZiBjb21tZXJjaWFsIGZsZWV0cyBkeW5hbWljYWxseSBhY3Jvc3MgTm9ydGggQW1lcmljYS5cIixcbiAgICAgICAgdGFnczogW1wiUHl0aG9uXCIsIFwiRmFzdEFQSVwiLCBcIlJlYWN0XCIsIFwiTWFwYm94XCIsIFwiSzhzXCJdLFxuICAgICAgICBpbWFnZUdyYWRpZW50OiBcImZyb20tcHVycGxlLTYwMC8zMCB0by1zbGF0ZS05MDAvNDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgdGl0bGU6IFwiT21uaVJldGFpbCBVbHRyYS1GYXN0IEhlYWRsZXNzXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkUtQ29tbWVyY2VcIixcbiAgICAgICAgYmFkZ2U6IFwiUmV0YWlsXCIsXG4gICAgICAgIHN0YXQ6IFwiMC44cyBHbG9iYWwgTENQXCIsXG4gICAgICAgIGRlc2M6IFwiSHlwZXItY29udmVydGluZyBsdXh1cnkgc3RvcmVmcm9udCBoYW5kbGluZyA1MGsgcGVhayBjb25jdXJyZW50IHNob3BwZXJzIHdpdGggemVybyBkcm9wcGVkIGNoZWNrb3V0cy5cIixcbiAgICAgICAgdGFnczogW1wiTmV4dC5qc1wiLCBcIlRhaWx3aW5kXCIsIFwiTXlTUUxcIiwgXCJFZGdlIENETlwiXSxcbiAgICAgICAgaW1hZ2VHcmFkaWVudDogXCJmcm9tLWFtYmVyLTYwMC8zMCB0by1vcmFuZ2UtOTAwLzQwXCJcbiAgICB9XG5dO1xuXG5mdW5jdGlvbiBJY29uKHsgbmFtZSwgY2xhc3NOYW1lID0gJ3ctNCBoLTQnLCAuLi5wcm9wcyB9KSB7XG4gICAgY29uc3QgaWNvbnMgPSB3aW5kb3cuREVMSUdPX0lDT05TIHx8IHt9O1xuICAgIGNvbnN0IGljb25EZWYgPSBpY29uc1tuYW1lXSB8fCBpY29uc1snc3BhcmtsZXMnXSB8fCBudWxsO1xuICAgIGlmICghaWNvbkRlZikgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGx1Y2lkZSBsdWNpZGUtJHtuYW1lfSAke2NsYXNzTmFtZX1gfVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICB7aWNvbkRlZi5tYXAoKFt0YWcsIGF0dHJzXSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgVGFnTmFtZSA9IHRhZztcbiAgICAgICAgICAgICAgICByZXR1cm4gPFRhZ05hbWUga2V5PXtpZHh9IHsuLi5hdHRyc30gLz47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9zdmc+XG4gICAgKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNQUlOIEFQUExJQ0FUSU9OIENPTVBPTkVOVFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgY29uc3QgW2lzRW5xdWlyeU1vZGFsT3Blbiwgc2V0SXNFbnF1aXJ5TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNEYXNoYm9hcmRPcGVuLCBzZXRJc0Rhc2hib2FyZE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0FkbWluTG9naW5PcGVuLCBzZXRJc0FkbWluTG9naW5PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNBZG1pbkxvZ2dlZEluLCBzZXRJc0FkbWluTG9nZ2VkSW5dID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJkZWxpZ29fYWRtaW5fYXV0aFwiKSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IFtzZWxlY3RlZFNlcnZpY2VGb3JNb2RhbCwgc2V0U2VsZWN0ZWRTZXJ2aWNlRm9yTW9kYWxdID0gdXNlU3RhdGUoXCJNb2JpbGUgQXBwIERldmVsb3BtZW50XCIpO1xuICAgIGNvbnN0IFtlbnF1aXJpZXMsIHNldEVucXVpcmllc10gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZWxpZ29fY3JtX2VucXVpcmllcycpO1xuICAgICAgICAgICAgaWYgKHNhdmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShzYXZlZCk7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyc2VkKSAmJiBwYXJzZWQubGVuZ3RoID4gMCkgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgcmV0dXJuIElOSVRJQUxfRU5RVUlSSUVTO1xuICAgIH0pO1xuICAgIGNvbnN0IFthY3RpdmVUZWNoVGFiLCBzZXRBY3RpdmVUZWNoVGFiXSA9IHVzZVN0YXRlKFwiRnJvbnRlbmRcIik7XG4gICAgY29uc3QgW21vYmlsZU5hdk9wZW4sIHNldE1vYmlsZU5hdk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtub3RpZmljYXRpb25Ub2FzdCwgc2V0Tm90aWZpY2F0aW9uVG9hc3RdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvLyBTeW5jIGVucXVpcmllcyB3aXRoIGxvY2FsU3RvcmFnZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVsaWdvX2NybV9lbnF1aXJpZXMnLCBKU09OLnN0cmluZ2lmeShlbnF1aXJpZXMpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9LCBbZW5xdWlyaWVzXSk7XG5cbiAgICAvLyBGZXRjaCBsaXZlIGVucXVpcmllcyBmcm9tIGJhY2tlbmQgQVBJXG4gICAgY29uc3QgcmVmcmVzaEVucXVpcmllcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImRlbGlnb19hZG1pbl90b2tlblwiKTtcbiAgICAgICAgICAgIGlmICghdG9rZW4pIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS9hcGkvYWRtaW4ucGhwP2FjdGlvbj1saXN0YCwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHt0b2tlbn1gIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgJiYgQXJyYXkuaXNBcnJheShkYXRhLmVucXVpcmllcykgJiYgZGF0YS5lbnF1aXJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRFbnF1aXJpZXMoZGF0YS5lbnF1aXJpZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzaW5nIGxvY2FsIG1vY2sgbGVhZHM6XCIsIGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVmcmVzaEVucXVpcmllcygpO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIENoZWNrIHNlY3JldCBVUkwgcGF0aCBvciBoYXNoIHRvIG9wZW4gYWRtaW4gcG9ydGFsXG4gICAgY29uc3QgY2hlY2tBZG1pblJvdXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoID0gKHdpbmRvdy5sb2NhdGlvbi5oYXNoIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHMgPSAod2luZG93LmxvY2F0aW9uLnNlYXJjaCB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBwID0gKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBpc0FkbWluID0gaC5pbmNsdWRlcyhcImFkbWluXCIpIHx8IGguaW5jbHVkZXMoXCJjcm1cIikgfHwgcy5pbmNsdWRlcyhcImFkbWluXCIpIHx8IHMuaW5jbHVkZXMoXCJjcm1cIikgfHwgcC5lbmRzV2l0aChcIi9hZG1pblwiKSB8fCBwLmVuZHNXaXRoKFwiL2FkbWluL1wiKTtcbiAgICAgICAgaWYgKGlzQWRtaW4pIHtcbiAgICAgICAgICAgIGlmIChpc0FkbWluTG9nZ2VkSW4pIHtcbiAgICAgICAgICAgICAgICBzZXRJc0Rhc2hib2FyZE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0SXNBZG1pbkxvZ2luT3BlbihmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldElzQWRtaW5Mb2dpbk9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0SXNEYXNoYm9hcmRPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjaGVja0FkbWluUm91dGUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGNoZWNrQWRtaW5Sb3V0ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgY2hlY2tBZG1pblJvdXRlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBjaGVja0FkbWluUm91dGUpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBjaGVja0FkbWluUm91dGUpO1xuICAgICAgICB9O1xuICAgIH0sIFtpc0FkbWluTG9nZ2VkSW5dKTtcblxuICAgIGNvbnN0IGhhbmRsZUFkbWluTG9naW5TdWNjZXNzID0gKHRva2VuKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiZGVsaWdvX2FkbWluX2F1dGhcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImRlbGlnb19hZG1pbl90b2tlblwiLCB0b2tlbik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHNldElzQWRtaW5Mb2dnZWRJbih0cnVlKTtcbiAgICAgICAgc2V0SXNBZG1pbkxvZ2luT3BlbihmYWxzZSk7XG4gICAgICAgIHNldElzRGFzaGJvYXJkT3Blbih0cnVlKTtcbiAgICAgICAgc2hvd1RvYXN0KFwiQXV0aGVudGljYXRlZCBhcyBFeGVjdXRpdmUgQWRtaW5pc3RyYXRvclwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQWRtaW5Mb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiZGVsaWdvX2FkbWluX2F1dGhcIik7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiZGVsaWdvX2FkbWluX3Rva2VuXCIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICBzZXRJc0FkbWluTG9nZ2VkSW4oZmFsc2UpO1xuICAgICAgICBzZXRJc0Rhc2hib2FyZE9wZW4oZmFsc2UpO1xuICAgICAgICBzZXRJc0FkbWluTG9naW5PcGVuKGZhbHNlKTtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluY2x1ZGVzKFwiYWRtaW5cIikgfHwgd2luZG93LmxvY2F0aW9uLmhhc2guaW5jbHVkZXMoXCJjcm1cIikpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgfVxuICAgICAgICBzaG93VG9hc3QoXCJTaWduZWQgb3V0IG9mIEV4ZWN1dGl2ZSBQb3J0YWxcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlQWRtaW4gPSAoKSA9PiB7XG4gICAgICAgIHNldElzRGFzaGJvYXJkT3BlbihmYWxzZSk7XG4gICAgICAgIHNldElzQWRtaW5Mb2dpbk9wZW4oZmFsc2UpO1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2guaW5jbHVkZXMoXCJhZG1pblwiKSB8fCB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmNsdWRlcyhcImNybVwiKSkge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNob3dUb2FzdCA9IChtZXNzYWdlLCB0eXBlID0gXCJzdWNjZXNzXCIpID0+IHtcbiAgICAgICAgc2V0Tm90aWZpY2F0aW9uVG9hc3QoeyBtZXNzYWdlLCB0eXBlIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldE5vdGlmaWNhdGlvblRvYXN0KG51bGwpLCA0NTAwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlT3BlbkVucXVpcnkgPSAoc2VydmljZVRpdGxlID0gXCJNb2JpbGUgQXBwIERldmVsb3BtZW50XCIpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRTZXJ2aWNlRm9yTW9kYWwoc2VydmljZVRpdGxlKTtcbiAgICAgICAgc2V0SXNFbnF1aXJ5TW9kYWxPcGVuKHRydWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi1oLXNjcmVlbiB0ZXh0LXNsYXRlLTEwMCBiZy1bIzA1MDgxNF1cIj5cbiAgICAgICAgICAgIHtub3RpZmljYXRpb25Ub2FzdCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMjAgcmlnaHQtNiB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB4LTUgcHktNCByb3VuZGVkLXhsIGdsYXNzLXBhbmVsLWdsb3cgYm9yZGVyLWJyYW5kLTUwMC81MCBzaGFkb3ctMnhsIGFuaW1hdGUtYm91bmNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaC0zIHctMyByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0ZS1waW5nIGFic29sdXRlIGlubGluZS1mbGV4IGgtZnVsbCB3LWZ1bGwgcm91bmRlZC1mdWxsIGJnLWVtZXJhbGQtNDAwIG9wYWNpdHktNzVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtZmxleCByb3VuZGVkLWZ1bGwgaC0zIHctMyBiZy1lbWVyYWxkLTUwMFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtMTAwXCI+e25vdGlmaWNhdGlvblRvYXN0Lm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgey8qIFB1YmxpYyBOYXZpZ2F0aW9uIEJhciAtIFplcm8gQ1JNIHJlZmVyZW5jZSAqL31cbiAgICAgICAgICAgIDxOYXZiYXIgXG4gICAgICAgICAgICAgICAgb25PcGVuRW5xdWlyeT17KCkgPT4gaGFuZGxlT3BlbkVucXVpcnkoXCJDdXN0b20gU29mdHdhcmUgQ29uc3VsdGF0aW9uXCIpfVxuICAgICAgICAgICAgICAgIG1vYmlsZU5hdk9wZW49e21vYmlsZU5hdk9wZW59XG4gICAgICAgICAgICAgICAgc2V0TW9iaWxlTmF2T3Blbj17c2V0TW9iaWxlTmF2T3Blbn1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxIZXJvU2VjdGlvbiBcbiAgICAgICAgICAgICAgICBvbk9wZW5FbnF1aXJ5PXsoKSA9PiBoYW5kbGVPcGVuRW5xdWlyeShcIkVudGVycHJpc2UgU29mdHdhcmUgQXJjaGl0ZWN0dXJlXCIpfVxuICAgICAgICAgICAgICAgIG9uU2Nyb2xsVG9Fc3RpbWF0b3I9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVzdGltYXRvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsKSBlbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPFN0YXRzQmFubmVyIC8+XG4gICAgICAgICAgICA8U2VydmljZXNTZWN0aW9uIG9uU2VsZWN0U2VydmljZT17aGFuZGxlT3BlbkVucXVpcnl9IC8+XG4gICAgICAgICAgICA8UHJvamVjdEVzdGltYXRvclNlY3Rpb24gb25MYXVuY2hFbnF1aXJ5PXtoYW5kbGVPcGVuRW5xdWlyeX0gLz5cbiAgICAgICAgICAgIDxUZWNoU3RhY2tTZWN0aW9uIGFjdGl2ZVRhYj17YWN0aXZlVGVjaFRhYn0gc2V0QWN0aXZlVGFiPXtzZXRBY3RpdmVUZWNoVGFifSAvPlxuICAgICAgICAgICAgPFByb2Nlc3NTZWN0aW9uIC8+XG4gICAgICAgICAgICA8UG9ydGZvbGlvU2VjdGlvbiBvblNlbGVjdFByb2plY3Q9e2hhbmRsZU9wZW5FbnF1aXJ5fSAvPlxuICAgICAgICAgICAgPFRlc3RpbW9uaWFsc1NlY3Rpb24gLz5cbiAgICAgICAgICAgIDxDdGFCYW5uZXIgb25PcGVuRW5xdWlyeT17KCkgPT4gaGFuZGxlT3BlbkVucXVpcnkoXCJFbnRlcnByaXNlIEVuZ2FnZW1lbnRcIil9IC8+XG5cbiAgICAgICAgICAgIHsvKiBQdWJsaWMgRm9vdGVyIC0gWmVybyBDUk0gcmVmZXJlbmNlICovfVxuICAgICAgICAgICAgPEZvb3RlciAvPlxuXG4gICAgICAgICAgICB7aXNFbnF1aXJ5TW9kYWxPcGVuICYmIChcbiAgICAgICAgICAgICAgICA8RW5xdWlyeU1vZGFsIFxuICAgICAgICAgICAgICAgICAgICBpc09wZW49e2lzRW5xdWlyeU1vZGFsT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNFbnF1aXJ5TW9kYWxPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNlcnZpY2U9e3NlbGVjdGVkU2VydmljZUZvck1vZGFsfVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdFN1Y2Nlc3M9eyhuZXdMZWFkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFbnF1aXJpZXMocHJldiA9PiBbbmV3TGVhZCwgLi4ucHJldl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvYXN0KFwi8J+OiSBFbnF1aXJ5IFJlY2VpdmVkISBPdXIgdGVjaG5pY2FsIHRlYW0gd2lsbCByZXZpZXcgeW91ciBicmllZi5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25mZXR0aSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVDb3VudDogMTEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcmVhZDogNzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiB7IHk6IDAuNiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgey8qIFNlY3JldCBFeGVjdXRpdmUgQWRtaW4gTG9naW4gTW9kYWwgKFRyaWdnZXJlZCBPTkxZIHZpYSAjYWRtaW4gb3IgL2FkbWluKSAqL31cbiAgICAgICAgICAgIHtpc0FkbWluTG9naW5PcGVuICYmIChcbiAgICAgICAgICAgICAgICA8QWRtaW5Mb2dpbk1vZGFsXG4gICAgICAgICAgICAgICAgICAgIGlzT3Blbj17aXNBZG1pbkxvZ2luT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VBZG1pbn1cbiAgICAgICAgICAgICAgICAgICAgb25Mb2dpblN1Y2Nlc3M9e2hhbmRsZUFkbWluTG9naW5TdWNjZXNzfVxuICAgICAgICAgICAgICAgICAgICBzaG93VG9hc3Q9e3Nob3dUb2FzdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgey8qIFNlY3JldCBFeGVjdXRpdmUgQ1JNIERhc2hib2FyZCAoUHJvdGVjdGVkIGJ5IGF1dGhlbnRpY2F0aW9uKSAqL31cbiAgICAgICAgICAgIHtpc0Rhc2hib2FyZE9wZW4gJiYgaXNBZG1pbkxvZ2dlZEluICYmIChcbiAgICAgICAgICAgICAgICA8T3duZXJEYXNoYm9hcmQgXG4gICAgICAgICAgICAgICAgICAgIGlzT3Blbj17aXNEYXNoYm9hcmRPcGVufVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUFkbWlufVxuICAgICAgICAgICAgICAgICAgICBvbkxvZ291dD17aGFuZGxlQWRtaW5Mb2dvdXR9XG4gICAgICAgICAgICAgICAgICAgIGVucXVpcmllcz17ZW5xdWlyaWVzfVxuICAgICAgICAgICAgICAgICAgICBzZXRFbnF1aXJpZXM9e3NldEVucXVpcmllc31cbiAgICAgICAgICAgICAgICAgICAgb25SZWZyZXNoPXtyZWZyZXNoRW5xdWlyaWVzfVxuICAgICAgICAgICAgICAgICAgICBzaG93VG9hc3Q9e3Nob3dUb2FzdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAxLiBOQVZJR0FUSU9OIEJBUiBDT01QT05FTlQgKENsZWFuIFB1YmxpYyBOYXZiYXIpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIE5hdmJhcih7IG9uT3BlbkVucXVpcnksIG1vYmlsZU5hdk9wZW4sIHNldE1vYmlsZU5hdk9wZW4gfSkge1xuICAgIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4gc2V0U2Nyb2xsZWQod2luZG93LnNjcm9sbFkgPiAyMCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTQwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke3Njcm9sbGVkID8gJ2JnLVsjMDUwODE0XS85MCBiYWNrZHJvcC1ibHVyLXhsIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAvODAgc2hhZG93LTJ4bCBweS0zLjUnIDogJ2JnLXRyYW5zcGFyZW50IHB5LTUnfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBMb2dvICovfVxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by10ciBmcm9tLWJyYW5kLTYwMCB2aWEtaW5kaWdvLTYwMCB0by1jeWJlci1jeWFuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgdGV4dC14bCBzaGFkb3ctbGcgc2hhZG93LWJyYW5kLTUwMC8yNSBncm91cC1ob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWluc2V0LTEgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by1yIGZyb20tYnJhbmQtNTAwIHRvLWN5YmVyLWN5YW4gb3BhY2l0eS00MCBibHVyIGdyb3VwLWhvdmVyOm9wYWNpdHktNzUgdHJhbnNpdGlvbi1vcGFjaXR5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIGZvbnQtYm9sZCB0ZXh0LXhsIHRyYWNraW5nLXdpZGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgREVMSUdPIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY3liZXItY3lhblwiPlRFQ0hOT0xPR0lFUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1bMTBweF0gdHJhY2tpbmctd2lkZXN0IHRleHQtc2xhdGUtNDAwIGZvbnQtbW9ubyB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dC1HZW4gRGlnaXRhbCBTeXN0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICB7LyogRGVza3RvcCBOYXZpZ2F0aW9uIExpbmtzICovfVxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtOCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3NlcnZpY2VzXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1icmFuZC00MDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5TZXJ2aWNlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjZXN0aW1hdG9yXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1jeWJlci1jeWFuIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctY3liZXItY3lhbiBhbmltYXRlLXB1bHNlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvc3QgRXN0aW1hdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3RlY2gtc3RhY2tcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJyYW5kLTQwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlRlY2ggU3RhY2s8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3BvcnRmb2xpb1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtYnJhbmQtNDAwIHRyYW5zaXRpb24tY29sb3JzXCI+Q2FzZSBTdHVkaWVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9jZXNzXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1icmFuZC00MDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5Qcm9jZXNzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiN0ZXN0aW1vbmlhbHNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJyYW5kLTQwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPldoeSBVczwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIFJpZ2h0IEFjdGlvbjogQ1RBIEJ1dHRvbiBPbmx5ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5FbnF1aXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktMi41IHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciByb3VuZGVkLWxnIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1icmFuZC02MDAgdmlhLWluZGlnby02MDAgdG8tY3liZXItY3lhbiB0ZXh0LXdoaXRlIHNoYWRvdy1sZyBzaGFkb3ctYnJhbmQtNjAwLzMwIGhvdmVyOnNoYWRvdy1icmFuZC02MDAvNTAgaG92ZXI6c2NhbGUtWzEuMDJdIGFjdGl2ZTpzY2FsZS05NSB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R2V0IGEgUHJvcG9zYWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImFycm93LXVwLXJpZ2h0XCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIE1vYmlsZSBNZW51IFRvZ2dsZSAqL31cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU5hdk9wZW4oIW1vYmlsZU5hdk9wZW4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6aGlkZGVuIHAtMiByb3VuZGVkLWxnIGJnLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT17bW9iaWxlTmF2T3BlbiA/IFwieFwiIDogXCJtZW51XCJ9IGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBNb2JpbGUgTmF2aWdhdGlvbiBEcmF3ZXIgKi99XG4gICAgICAgICAgICAgICAge21vYmlsZU5hdk9wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmhpZGRlbiBnbGFzcy1wYW5lbCBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIHB4LTYgcHktNiBtdC0zIGZsZXggZmxleC1jb2wgZ2FwLTQgYW5pbWF0ZS1pbiBzbGlkZS1pbi1mcm9tLXRvcCBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2VydmljZXNcIiBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVOYXZPcGVuKGZhbHNlKX0gY2xhc3NOYW1lPVwicHktMiB0ZXh0LXNsYXRlLTIwMCBob3Zlcjp0ZXh0LWJyYW5kLTQwMFwiPlNlcnZpY2VzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNlc3RpbWF0b3JcIiBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVOYXZPcGVuKGZhbHNlKX0gY2xhc3NOYW1lPVwicHktMiB0ZXh0LWN5YmVyLWN5YW5cIj5Db3N0IEVzdGltYXRvcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjdGVjaC1zdGFja1wiIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU5hdk9wZW4oZmFsc2UpfSBjbGFzc05hbWU9XCJweS0yIHRleHQtc2xhdGUtMjAwXCI+VGVjaCBTdGFjazwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcG9ydGZvbGlvXCIgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTmF2T3BlbihmYWxzZSl9IGNsYXNzTmFtZT1cInB5LTIgdGV4dC1zbGF0ZS0yMDBcIj5DYXNlIFN0dWRpZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2Nlc3NcIiBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVOYXZPcGVuKGZhbHNlKX0gY2xhc3NOYW1lPVwicHktMiB0ZXh0LXNsYXRlLTIwMFwiPlByb2Nlc3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMCBmbGV4IGZsZXgtY29sIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlTmF2T3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5FbnF1aXJ5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIHJvdW5kZWQtbGcgYmctYnJhbmQtNjAwIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0IGEgUHJvcG9zYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gMi4gSEVSTyBTRUNUSU9OIENPTVBPTkVOVFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBIZXJvU2VjdGlvbih7IG9uT3BlbkVucXVpcnksIG9uU2Nyb2xsVG9Fc3RpbWF0b3IgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB0LTM2IHBiLTIwIG1kOnB0LTQ4IG1kOnBiLTMyIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOCByZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICB7LyogVXJnZW5jeSBQaWxsIEJhZGdlICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41IHB4LTQgcHktMS41IHJvdW5kZWQtZnVsbCBnbGFzcy1wYW5lbCBib3JkZXIgYm9yZGVyLWJyYW5kLTUwMC8zMCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1icmFuZC0zMDAgbWItOCBzaGFkb3ctaW5uZXIgc2hhZG93LWJyYW5kLTUwMC8xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctY3liZXItY3lhbiBhbmltYXRlLXBpbmdcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFja2luZy13aWRlIHVwcGVyY2FzZSBmb250LW1vbm9cIj5BY2NlcHRpbmcgUTEgRW50ZXJwcmlzZSBTb2Z0d2FyZSAmIEFJIFNwcmludHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNYWluIEhpZ2gtSW1wYWN0IExpbGFjLVN0eWxlIFZhbHVlIFByb3AgKi99XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC00eGwgc206dGV4dC02eGwgbGc6dGV4dC03eGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC13aGl0ZSBsZWFkaW5nLVsxLjFdIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFyY2hpdGVjdGluZyBTY2FsYWJsZSA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JhZGllbnQtdGV4dC1pbmRpZ29cIj5Tb2Z0d2FyZSwgTW9iaWxlIEFwcHM8L3NwYW4+IDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmIEludGVsbGlnZW50IEFJIEVjb3N5c3RlbXMuXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQteGwgdGV4dC1zbGF0ZS0zMDAgZm9udC1ub3JtYWwgbWF4LXctMnhsIG14LWF1dG8gbGVhZGluZy1yZWxheGVkIG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEZWxpZ28gVGVjaG5vbG9naWVzIGVuZ2luZWVycyByZXNpbGllbnQgZGlnaXRhbCBwbGF0Zm9ybXMsIGh5cGVyLWNvbnZlcnRpbmcgbW9iaWxlIGFwcHMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHByb3ByaWV0YXJ5IEFJIHNvbHV0aW9ucyB0YWlsb3JlZCBmb3IgaGlnaC1ncm93dGggZW50ZXJwcmlzZXMgYW5kIHZlbnR1cmUtYmFja2VkIHN0YXJ0dXBzLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIER1YWwgQWN0aW9uIENUQXMgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgbWItMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25PcGVuRW5xdWlyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIHB4LTggcHktNCByb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1icmFuZC02MDAgdmlhLWluZGlnby02MDAgdG8tY3liZXItY3lhbiB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWJhc2Ugc2hhZG93LXhsIHNoYWRvdy1icmFuZC02MDAvMzAgaG92ZXI6c2hhZG93LWJyYW5kLTYwMC82MCBob3ZlcjpzY2FsZS0xMDUgYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0zIGdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TY2hlZHVsZSBUZWNobmljYWwgRGlzY292ZXJ5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJhcnJvdy1yaWdodFwiIGNsYXNzTmFtZT1cInctNSBoLTUgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMSB0cmFuc2l0aW9uLXRyYW5zZm9ybVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblNjcm9sbFRvRXN0aW1hdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gcHgtOCBweS00IHJvdW5kZWQteGwgZ2xhc3MtcGFuZWwgdGV4dC1zbGF0ZS0yMDAgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgYm9yZGVyLXNsYXRlLTcwMC84MCBob3ZlcjpiZy1zbGF0ZS04MDAvODAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImNhbGN1bGF0b3JcIiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtY3liZXItY3lhblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SW50ZXJhY3RpdmUgQ29zdCBFc3RpbWF0b3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIEZsb2F0aW5nIFRlY2ggQmFkZ2VzICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTQgZ2FwLTQgbWF4LXctM3hsIG14LWF1dG8gcHQtNiBib3JkZXItdCBib3JkZXItc2xhdGUtODAwLzYwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLWxnIGdsYXNzLXBhbmVsIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgZm9udC1tb25vXCI+REVMSVZFUlk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IG10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2xvY2tcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZW1lcmFsZC00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ2lsZSAyLVdrIFNwcmludHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbGcgZ2xhc3MtcGFuZWwgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBmb250LW1vbm9cIj5TRUNVUklUWTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzaGllbGRcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYnJhbmQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU09DMiAmIEhJUEFBIFJlYWR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLWxnIGdsYXNzLXBhbmVsIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgZm9udC1tb25vXCI+U0NBTEU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IG10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaGVhZHBob25lc1wiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1jeWJlci1jeWFuXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjQvNyBEZXZPcHMgU0xBXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLWxnIGdsYXNzLXBhbmVsIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgZm9udC1tb25vXCI+VEVDSCBTVEFDSzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjb2RlLTJcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHVycGxlLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0IDE4LCBQSFAsIEFJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIDMuIFNUQVRTIEJBTk5FUiBDT01QT05FTlRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gU3RhdHNCYW5uZXIoKSB7XG4gICAgY29uc3Qgc3RhdHMgPSBbXG4gICAgICAgIHsgbGFiZWw6IFwiQ2xpZW50IFByb2plY3QgRGVsaXZlcmllc1wiLCB2YWw6IFwiMTgwK1wiLCBzdWI6IFwiMTAwJSBvbi1zY2hlZHVsZVwiIH0sXG4gICAgICAgIHsgbGFiZWw6IFwiRW5naW5lZXJpbmcgUmV0ZW50aW9uXCIsIHZhbDogXCI5Ny40JVwiLCBzdWI6IFwiVG9wIDMlIHRlY2ggdGFsZW50XCIgfSxcbiAgICAgICAgeyBsYWJlbDogXCJUb3RhbCBDbGllbnQgUmFpc2VkXCIsIHZhbDogXCIkODVNK1wiLCBzdWI6IFwiVmVudHVyZSBjYXBpdGFsIGZ1bmRlZFwiIH0sXG4gICAgICAgIHsgbGFiZWw6IFwiQXZlcmFnZSBQcm9kdWN0aW9uIFNwZWVkXCIsIHZhbDogXCI0LjJ4XCIsIHN1YjogXCJGYXN0ZXIgdGhhbiBpbmR1c3RyeSBhdmdcIiB9XG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXkgYm9yZGVyLXNsYXRlLTgwMC84MCBiZy1zbGF0ZS05NTAvNDAgcmVsYXRpdmUgei0xMCBweS0xMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtOCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7c3RhdHMubWFwKChzLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQtM3hsIHNtOnRleHQtNHhsIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3MudmFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3MubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LWN5YmVyLWN5YW4gZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzLnN1Yn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIDQuIFNFUlZJQ0VTIFNFQ1RJT04gQ09NUE9ORU5UXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIFNlcnZpY2VzU2VjdGlvbih7IG9uU2VsZWN0U2VydmljZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJzZXJ2aWNlc1wiIGNsYXNzTmFtZT1cInB5LTI0IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy0zeGwgbXgtYXV0byBtYi0xNlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIHRleHQtY3liZXItY3lhbiBmb250LW1vbm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVOR0lORUVSSU5HIENBUEFCSUxJVElFU1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC0zeGwgc206dGV4dC01eGwgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSBtdC0zIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVudGVycHJpc2UtR3JhZGUgU29sdXRpb25zIEJ1aWx0IHRvIFNjYWxlXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwIHRleHQtc20gc206dGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBGcm9tIGhpZ2gtdmVsb2NpdHkgTVZQIGJ1aWxkcyB0byBkZWVwbHkgaW50ZWdyYXRlZCBBSSBwbGF0Zm9ybXMsIG91ciBjcm9zcy1mdW5jdGlvbmFsIHNxdWFkcyBkZWxpdmVyIGVuZC10by1lbmQgZXhjZWxsZW5jZS5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC04XCI+XG4gICAgICAgICAgICAgICAgICAgIHtTRVJWSUNFU19MSVNULm1hcChzcnYgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Nydi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBnbGFzcy1wYW5lbCByb3VuZGVkLTJ4bCBwLTggYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgaG92ZXI6Ym9yZGVyLWJyYW5kLTUwMC81MCBob3ZlcjpzaGFkb3ctMnhsIGhvdmVyOnNoYWRvdy1icmFuZC01MDAvMTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLXhsIGJnLWJyYW5kLTYwMC8yMCBib3JkZXIgYm9yZGVyLWJyYW5kLTUwMC8zMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWN5YmVyLWN5YW4gZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIGdyb3VwLWhvdmVyOmJnLWJyYW5kLTYwMCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT17c3J2Lmljb259IGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0zIHB5LTEgcm91bmRlZC1mdWxsIHRleHQtWzEwcHhdIGZvbnQtbW9ubyBmb250LWJvbGQgYmctc2xhdGUtODAwLzgwIHRleHQtYnJhbmQtMzAwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nydi5iYWRnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTMgZ3JvdXAtaG92ZXI6dGV4dC1jeWJlci1jeWFuIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3J2LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIHRleHQteHMgc206dGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWQgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nydi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzcnYuZmVhdHVyZXMubWFwKChmZWF0LCBmaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZpZHh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgdGV4dC1zbGF0ZS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImNoZWNrLWNpcmNsZS0yXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNDAwIHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2ZlYXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAvODBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMS41IG1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzcnYudGVjaC5tYXAoKHQsIHRpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3RpZHh9IGNsYXNzTmFtZT1cInB4LTIgcHktMC41IHJvdW5kZWQgdGV4dC1bMTBweF0gZm9udC1tb25vIGJnLXNsYXRlLTkwMCB0ZXh0LXNsYXRlLTQwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0U2VydmljZShzcnYudGl0bGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIuNSByb3VuZGVkLWxnIGJnLXNsYXRlLTgwMC85MCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1icmFuZC02MDAgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgZ3JvdXAvYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29uc3VsdCBvbiB7c3J2LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJhcnJvdy1yaWdodFwiIGNsYXNzTmFtZT1cInctNCBoLTQgZ3JvdXAtaG92ZXIvYnRuOnRyYW5zbGF0ZS14LTEgdHJhbnNpdGlvbi10cmFuc2Zvcm1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA1LiBJTlRFUkFDVElWRSBQUk9KRUNUIEVTVElNQVRPUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBQcm9qZWN0RXN0aW1hdG9yU2VjdGlvbih7IG9uTGF1bmNoRW5xdWlyeSB9KSB7XG4gICAgY29uc3QgW3BsYXRmb3JtLCBzZXRQbGF0Zm9ybV0gPSB1c2VTdGF0ZShcIndlYlwiKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRGZWF0dXJlcywgc2V0U2VsZWN0ZWRGZWF0dXJlc10gPSB1c2VTdGF0ZShbXCJhdXRoXCIsIFwiZGJcIl0pO1xuICAgIGNvbnN0IFt0aW1lbGluZSwgc2V0VGltZWxpbmVdID0gdXNlU3RhdGUoXCJzdGFuZGFyZFwiKTtcblxuICAgIGNvbnN0IHBsYXRmb3JtcyA9IFtcbiAgICAgICAgeyBpZDogXCJ3ZWJcIiwgbmFtZTogXCJDdXN0b20gV2ViIEFwcGxpY2F0aW9uXCIsIGJhc2U6IDEyMDAwLCBkYXlzOiAzMCwgaWNvbjogXCJnbG9iZVwiIH0sXG4gICAgICAgIHsgaWQ6IFwibW9iaWxlXCIsIG5hbWU6IFwiTW9iaWxlIEFwcCAoaU9TICsgQW5kcm9pZClcIiwgYmFzZTogMTgwMDAsIGRheXM6IDQ1LCBpY29uOiBcInNtYXJ0cGhvbmVcIiB9LFxuICAgICAgICB7IGlkOiBcImZ1bGxzdGFja1wiLCBuYW1lOiBcIkZ1bGwtU3RhY2sgV2ViICsgTW9iaWxlXCIsIGJhc2U6IDI4MDAwLCBkYXlzOiA2MCwgaWNvbjogXCJsYXllcnNcIiB9LFxuICAgICAgICB7IGlkOiBcImFpXCIsIG5hbWU6IFwiRW50ZXJwcmlzZSBBSSAmIExMTSBFbmdpbmVcIiwgYmFzZTogMjIwMDAsIGRheXM6IDQ1LCBpY29uOiBcImNwdVwiIH1cbiAgICBdO1xuXG4gICAgY29uc3QgZmVhdHVyZXNMaXN0ID0gW1xuICAgICAgICB7IGlkOiBcImF1dGhcIiwgbmFtZTogXCJBdXRoICYgUkJBQyBSb2xlc1wiLCBjb3N0OiAxNTAwLCBkYXlzOiA0IH0sXG4gICAgICAgIHsgaWQ6IFwiZGJcIiwgbmFtZTogXCJDdXN0b20gRGF0YWJhc2UgJiBBZG1pbiBQYW5lbFwiLCBjb3N0OiAyNTAwLCBkYXlzOiA3IH0sXG4gICAgICAgIHsgaWQ6IFwicGF5bWVudHNcIiwgbmFtZTogXCJTdHJpcGUgLyBDcnlwdG8gUGF5bWVudHNcIiwgY29zdDogMjAwMCwgZGF5czogNSB9LFxuICAgICAgICB7IGlkOiBcImFpX2JvdFwiLCBuYW1lOiBcIkFJIENoYXQgLyBSQUcgU2VhcmNoIEludGVncmF0aW9uXCIsIGNvc3Q6IDQ1MDAsIGRheXM6IDEwIH0sXG4gICAgICAgIHsgaWQ6IFwicmVhbHRpbWVcIiwgbmFtZTogXCJSZWFsLXRpbWUgV2ViU29ja2V0cyAvIENoYXRcIiwgY29zdDogMjUwMCwgZGF5czogNiB9LFxuICAgICAgICB7IGlkOiBcImFuYWx5dGljc1wiLCBuYW1lOiBcIlRlbGVtZXRyeSAmIEN1c3RvbSBBbmFseXRpY3NcIiwgY29zdDogMTgwMCwgZGF5czogNSB9XG4gICAgXTtcblxuICAgIGNvbnN0IHRpbWVsaW5lcyA9IFtcbiAgICAgICAgeyBpZDogXCJmYXN0XCIsIG5hbWU6IFwiRXhwZWRpdGVkIFNwcmludCAoUHJpb3JpdHkpXCIsIG11bHQ6IDEuMjUsIHRpbWVNb2Q6IDAuNyB9LFxuICAgICAgICB7IGlkOiBcInN0YW5kYXJkXCIsIG5hbWU6IFwiU3RhbmRhcmQgQWdpbGUgUGFjZVwiLCBtdWx0OiAxLjAsIHRpbWVNb2Q6IDEuMCB9LFxuICAgICAgICB7IGlkOiBcImZsZXhpYmxlXCIsIG5hbWU6IFwiUGhhc2VkIE1WUCBSb2FkbWFwXCIsIG11bHQ6IDAuOSwgdGltZU1vZDogMS4zIH1cbiAgICBdO1xuXG4gICAgY29uc3QgdG9nZ2xlRmVhdHVyZSA9IChmaWQpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRGZWF0dXJlcyhwcmV2ID0+IFxuICAgICAgICAgICAgcHJldi5pbmNsdWRlcyhmaWQpID8gcHJldi5maWx0ZXIoeCA9PiB4ICE9PSBmaWQpIDogWy4uLnByZXYsIGZpZF1cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FsY3VsYXRpb24gPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3QgcGxhdCA9IHBsYXRmb3Jtcy5maW5kKHAgPT4gcC5pZCA9PT0gcGxhdGZvcm0pIHx8IHBsYXRmb3Jtc1swXTtcbiAgICAgICAgY29uc3QgZmVhdHNDb3N0ID0gc2VsZWN0ZWRGZWF0dXJlcy5yZWR1Y2UoKGFjYywgZmlkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmID0gZmVhdHVyZXNMaXN0LmZpbmQoeCA9PiB4LmlkID09PSBmaWQpO1xuICAgICAgICAgICAgcmV0dXJuIGFjYyArIChmID8gZi5jb3N0IDogMCk7XG4gICAgICAgIH0sIDApO1xuICAgICAgICBjb25zdCBmZWF0c0RheXMgPSBzZWxlY3RlZEZlYXR1cmVzLnJlZHVjZSgoYWNjLCBmaWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGYgPSBmZWF0dXJlc0xpc3QuZmluZCh4ID0+IHguaWQgPT09IGZpZCk7XG4gICAgICAgICAgICByZXR1cm4gYWNjICsgKGYgPyBmLmRheXMgOiAwKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgY29uc3QgdGwgPSB0aW1lbGluZXMuZmluZCh0ID0+IHQuaWQgPT09IHRpbWVsaW5lKSB8fCB0aW1lbGluZXNbMV07XG4gICAgICAgIGNvbnN0IHRvdGFsQ29zdCA9IE1hdGgucm91bmQoKHBsYXQuYmFzZSArIGZlYXRzQ29zdCkgKiB0bC5tdWx0KTtcbiAgICAgICAgY29uc3QgdG90YWxXZWVrcyA9IE1hdGgubWF4KDMsIE1hdGgucm91bmQoKChwbGF0LmRheXMgKyBmZWF0c0RheXMpICogdGwudGltZU1vZCkgLyA3KSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvc3RMb3c6IE1hdGgucm91bmQodG90YWxDb3N0ICogMC45KSxcbiAgICAgICAgICAgIGNvc3RIaWdoOiBNYXRoLnJvdW5kKHRvdGFsQ29zdCAqIDEuMTUpLFxuICAgICAgICAgICAgd2Vla3M6IHRvdGFsV2Vla3MsXG4gICAgICAgICAgICBwbGF0Zm9ybU5hbWU6IHBsYXQubmFtZVxuICAgICAgICB9O1xuICAgIH0sIFtwbGF0Zm9ybSwgc2VsZWN0ZWRGZWF0dXJlcywgdGltZWxpbmVdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiZXN0aW1hdG9yXCIgY2xhc3NOYW1lPVwicHktMjQgcmVsYXRpdmUgYmctc2xhdGUtOTAwLzQwIGJvcmRlci15IGJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTN4bCBteC1hdXRvIG1iLTE2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgdGV4dC1icmFuZC00MDAgZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUUkFOU1BBUkVOVCAmIElOTk9WQVRJVkVcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQtM3hsIHNtOnRleHQtNXhsIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgbXQtMyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbnRlcmFjdGl2ZSBQcm9qZWN0IFNjb3BlICYgQ29zdCBFc3RpbWF0b3JcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDAgdGV4dC1zbSBzbTp0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCB5b3VyIHRlY2huaWNhbCBwYXJhbWV0ZXJzIGJlbG93IHRvIGdldCBpbnN0YW50IHRyYW5zcGFyZW5jeSBvbiB0aW1lbGluZXMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lZXJpbmcgdGVhbSBjb21wb3NpdGlvbiwgYW5kIGV4cGVjdGVkIGludmVzdG1lbnQuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMTIgZ2FwLTggaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIExlZnQgQ29uZmlndXJhdG9yICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTcgZ2xhc3MtcGFuZWwgcm91bmRlZC0yeGwgcC02IHNtOnAtOCBzcGFjZS15LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZSB0ZXh0LXNsYXRlLTQwMCBtYi0zIGJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0ZXAgMTogQ2hvb3NlIFlvdXIgUHJvamVjdCBGb3VuZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BsYXRmb3Jtcy5tYXAocCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQbGF0Zm9ybShwLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTQgcm91bmRlZC14bCBib3JkZXIgdGV4dC1sZWZ0IHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtc3RhcnQgZ2FwLTMgJHtwbGF0Zm9ybSA9PT0gcC5pZCA/ICdiZy1icmFuZC02MDAvMjAgYm9yZGVyLWJyYW5kLTUwMCB0ZXh0LXdoaXRlIHNoYWRvdy1sZyBzaGFkb3ctYnJhbmQtNTAwLzEwJyA6ICdiZy1zbGF0ZS05MDAvNjAgYm9yZGVyLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTMwMCBob3Zlcjpib3JkZXItc2xhdGUtNzAwJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9e3AuaWNvbn0gY2xhc3NOYW1lPXtgdy01IGgtNSBtdC0wLjUgJHtwbGF0Zm9ybSA9PT0gcC5pZCA/ICd0ZXh0LWN5YmVyLWN5YW4nIDogJ3RleHQtc2xhdGUtNDAwJ31gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zbSBibG9ja1wiPntwLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+RnJvbSAke3AuYmFzZS50b0xvY2FsZVN0cmluZygpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlciB1cHBlcmNhc2UgdGV4dC1zbGF0ZS00MDAgbWItMyBibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGVwIDI6IENvcmUgRW5naW5lZXJpbmcgQ2FwYWJpbGl0aWVzIChTZWxlY3QgYWxsIHRoYXQgYXBwbHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTIuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZXNMaXN0Lm1hcChmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEZlYXR1cmVzLmluY2x1ZGVzKGYuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2YuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVGZWF0dXJlKGYuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zLjUgcHktMyByb3VuZGVkLWxnIGJvcmRlciB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gJHtpc1NlbGVjdGVkID8gJ2JnLWN5YmVyLWN5YW4vMTUgYm9yZGVyLWN5YmVyLWN5YW4gdGV4dC13aGl0ZScgOiAnYmctc2xhdGUtOTAwLzQwIGJvcmRlci1zbGF0ZS04MDAgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1zbGF0ZS0yMDAnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Zi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT17aXNTZWxlY3RlZCA/IFwiY2hlY2stY2lyY2xlXCIgOiBcInBsdXMtY2lyY2xlXCJ9IGNsYXNzTmFtZT17YHctNCBoLTQgJHtpc1NlbGVjdGVkID8gJ3RleHQtY3liZXItY3lhbicgOiAndGV4dC1zbGF0ZS02MDAnfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlciB1cHBlcmNhc2UgdGV4dC1zbGF0ZS00MDAgbWItMyBibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGVwIDM6IFRpbWVsaW5lIFZlbG9jaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTMgZ2FwLTIuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZWxpbmVzLm1hcCh0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRpbWVsaW5lKHQuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMyByb3VuZGVkLWxnIGJvcmRlciB0ZXh0LWNlbnRlciB0cmFuc2l0aW9uLWFsbCAke3RpbWVsaW5lID09PSB0LmlkID8gJ2JnLWJyYW5kLTYwMC8yNSBib3JkZXItYnJhbmQtNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkJyA6ICdiZy1zbGF0ZS05MDAvNDAgYm9yZGVyLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTQwMCd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGJsb2NrXCI+e3QubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIFJpZ2h0IEluc3RhbnQgRXN0aW1hdGUgU3VtbWFyeSAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi01IGdsYXNzLXBhbmVsLWdsb3cgcm91bmRlZC0yeGwgcC02IHNtOnAtOCBzcGFjZS15LTYgbGc6c3RpY2t5IGxnOnRvcC0yOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItc2xhdGUtODAwIHBiLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtY3liZXItY3lhbiBmb250LW1vbm8gZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBibG9jayBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFQUwtVElNRSBURUNITklDQUwgU1VNTUFSWVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhbGN1bGF0aW9uLnBsYXRmb3JtTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBibG9jayBtYi0xXCI+RXN0aW1hdGVkIEludmVzdG1lbnQgUmFuZ2U6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBmb250LWJsYWNrIGdyYWRpZW50LXRleHQtaW5kaWdvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2NhbGN1bGF0aW9uLmNvc3RMb3cudG9Mb2NhbGVTdHJpbmcoKX0g4oCTICR7Y2FsY3VsYXRpb24uY29zdEhpZ2gudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwIG10LTEgYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc2VkIG9uIGRlZGljYXRlZCBzZW5pb3Igc3F1YWQgc3ByaW50IGFsbG9jYXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNCBwdC00IGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAvODBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwIHVwcGVyY2FzZSBmb250LW1vbm8gYmxvY2tcIj5Fc3RpbWF0ZWQgU3ByaW50czo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+e2NhbGN1bGF0aW9uLndlZWtzfSBXZWVrcyAofntNYXRoLnJvdW5kKGNhbGN1bGF0aW9uLndlZWtzLzIpfSBTcHJpbnRzKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMCB1cHBlcmNhc2UgZm9udC1tb25vIGJsb2NrXCI+U3F1YWQgQ29tcG9zaXRpb246PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1lbWVyYWxkLTQwMFwiPjMgLSA1IEVuZ2luZWVyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMC84MCBzcGFjZS15LTIgdGV4dC14cyB0ZXh0LXNsYXRlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2hlY2stY2lyY2xlLTJcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZW1lcmFsZC00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QXJjaGl0ZWN0dXJlICYgQVBJIFNjaGVtYSBJbmNsdWRlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjaGVjay1jaXJjbGUtMlwiIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1lbWVyYWxkLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5GdWxsIENvZGViYXNlIE93bmVyc2hpcCAmIElQIFRyYW5zZmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImNoZWNrLWNpcmNsZS0yXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjMwLURheSBQb3N0LUxhdW5jaCBTTEEgV2FycmFudHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25MYXVuY2hFbnF1aXJ5KGAke2NhbGN1bGF0aW9uLnBsYXRmb3JtTmFtZX0gKEVzdGltYXRlZDogJCR7Y2FsY3VsYXRpb24uY29zdExvdy50b0xvY2FsZVN0cmluZygpfSAtICQke2NhbGN1bGF0aW9uLmNvc3RIaWdoLnRvTG9jYWxlU3RyaW5nKCl9KWApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS00IHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJyYW5kLTYwMCB0by1jeWJlci1jeWFuIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtc20gc2hhZG93LXhsIHNoYWRvdy1icmFuZC02MDAvMzAgaG92ZXI6c2NhbGUtWzEuMDJdIGFjdGl2ZTpzY2FsZS05NSB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TG9jayBJbiBTY29wZSAmIEJvb2sgQXJjaGl0ZWN0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJhcnJvdy1yaWdodFwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIDYuIFRFQ0ggU1RBQ0sgTUFUUklYXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIFRlY2hTdGFja1NlY3Rpb24oeyBhY3RpdmVUYWIsIHNldEFjdGl2ZVRhYiB9KSB7XG4gICAgY29uc3QgdGFicyA9IE9iamVjdC5rZXlzKFRFQ0hfU1RBQ0spO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJ0ZWNoLXN0YWNrXCIgY2xhc3NOYW1lPVwicHktMjQgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTN4bCBteC1hdXRvIG1iLTE0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgdGV4dC1jeWJlci1jeWFuIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTU9ERVJOIEFSQ0hJVEVDVFVSQUwgRE5BXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LTN4bCBzbTp0ZXh0LTV4bCBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlIG10LTMgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmF0dGxlLVRlc3RlZCBUZWNobm9sb2d5IFN0YWNrXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwIHRleHQtc20gc206dGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFbmdpbmVlcmVkIGZvciB6ZXJvIHRlY2gtZGVidCwgaGlnaCB0aHJvdWdocHV0LCBhbmQgZWZmb3J0bGVzcyBob3Jpem9udGFsIHNjYWxhYmlsaXR5LlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGFzcy1wYW5lbCBwLTEuNSByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtd3JhcCBnYXAtMSBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RhYnMubWFwKHRhYiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKHRhYil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTUgcHktMi41IHJvdW5kZWQteGwgdGV4dC14cyBzbTp0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1hbGwgJHthY3RpdmVUYWIgPT09IHRhYiA/ICdiZy1ncmFkaWVudC10by1yIGZyb20tYnJhbmQtNjAwIHRvLWluZGlnby02MDAgdGV4dC13aGl0ZSBzaGFkb3ctbGcgc2hhZG93LWJyYW5kLTYwMC8zMCcgOiAndGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1zbGF0ZS04MDAvNTAnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC02XCI+XG4gICAgICAgICAgICAgICAgICAgIHtURUNIX1NUQUNLW2FjdGl2ZVRhYl0ubWFwKCh0LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cImdsYXNzLXBhbmVsIHJvdW5kZWQtMnhsIHAtNiBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBob3Zlcjpib3JkZXItYnJhbmQtNTAwLzUwIGhvdmVyOmJnLXNsYXRlLTgwMC80MCB0cmFuc2l0aW9uLWFsbCBncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQteGwgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY3liZXItY3lhbiBtYi00IGdyb3VwLWhvdmVyOnNjYWxlLTExMCBncm91cC1ob3Zlcjpib3JkZXItYnJhbmQtNTAwIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9e3QuaWNvbn0gY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTJcIj57dC5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBsZWFkaW5nLXJlbGF4ZWRcIj57dC5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA3LiBBR0lMRSBQUk9DRVNTIFNFQ1RJT05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gUHJvY2Vzc1NlY3Rpb24oKSB7XG4gICAgY29uc3Qgc3RlcHMgPSBbXG4gICAgICAgIHsgbnVtOiBcIjAxXCIsIHRpdGxlOiBcIkRpc2NvdmVyeSAmIEFyY2hpdGVjdHVyZVwiLCBkZXNjOiBcIlRlY2huaWNhbCByb2FkbWFwLCBBUEkgZGVzaWduLCB1c2VyIGZsb3dzLCBhbmQgbWlsZXN0b25lIHNpemluZy5cIiwgaWNvbjogXCJjb21wYXNzXCIgfSxcbiAgICAgICAgeyBudW06IFwiMDJcIiwgdGl0bGU6IFwiVUkvVVggRGVzaWduIFN5c3RlbXNcIiwgZGVzYzogXCJJbnRlcmFjdGl2ZSBGaWdtYSBwcm90b3R5cGVzIHdpdGggQUFBIGFjY2Vzc2liaWxpdHkgc3RhbmRhcmRzLlwiLCBpY29uOiBcInBlbi10b29sXCIgfSxcbiAgICAgICAgeyBudW06IFwiMDNcIiwgdGl0bGU6IFwiU3ByaW50IEVuZ2luZWVyaW5nXCIsIGRlc2M6IFwiMi13ZWVrIGl0ZXJhdGl2ZSBBZ2lsZSBkZWxpdmVyeSB3aXRoIHRlc3QtZHJpdmVuIGRldmVsb3BtZW50LlwiLCBpY29uOiBcInRlcm1pbmFsXCIgfSxcbiAgICAgICAgeyBudW06IFwiMDRcIiwgdGl0bGU6IFwiUmlnb3JvdXMgUUEgJiBTZWN1cml0eVwiLCBkZXNjOiBcIkF1dG9tYXRlZCBlbmQtdG8tZW5kIHRlc3RpbmcsIHBlbmV0cmF0aW9uIHRlc3QgJiBTT0MyIHZhbGlkYXRpb24uXCIsIGljb246IFwic2hpZWxkLWFsZXJ0XCIgfSxcbiAgICAgICAgeyBudW06IFwiMDVcIiwgdGl0bGU6IFwiR2xvYmFsIFNjYWxlICYgU0xBXCIsIGRlc2M6IFwiQ2xvdWQgb3JjaGVzdHJhdGlvbiwgYXV0b3NjYWxpbmcgS3ViZXJuZXRlcywgYW5kIDI0LzcgbW9uaXRvcmluZy5cIiwgaWNvbjogXCJyb2NrZXRcIiB9XG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGlkPVwicHJvY2Vzc1wiIGNsYXNzTmFtZT1cInB5LTI0IHJlbGF0aXZlIGJnLXNsYXRlLTk1MC82MCBib3JkZXItdCBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy0zeGwgbXgtYXV0byBtYi0xNlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIHRleHQtYnJhbmQtNDAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRU5HSU5FRVJJTkcgRVhDRUxMRU5DRVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC0zeGwgc206dGV4dC01eGwgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSBtdC0zIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSA1LVN0ZXAgRGVsaXZlcnkgUGlwZWxpbmVcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDAgdGV4dC1zbSBzbTp0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1vZGVsZWQgYWZ0ZXIgdGhlIGluZHVzdHJ5J3MgbW9zdCBkaXNjaXBsaW5lZCB0ZWNoIHN0YXJ0dXAgZW5naW5lZXJpbmcgbWV0aG9kb2xvZ2llcy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy01IGdhcC02XCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdGVwcy5tYXAoKHN0LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cImdsYXNzLXBhbmVsIHJvdW5kZWQtMnhsIHAtNiBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCByZWxhdGl2ZSBncm91cCBob3Zlcjpib3JkZXItY3liZXItY3lhbi81MCB0cmFuc2l0aW9uLWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LTN4bCBmb250LWJsYWNrIHRleHQtc2xhdGUtNzAwIGJsb2NrIG1iLTMgZ3JvdXAtaG92ZXI6dGV4dC1jeWJlci1jeWFuIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdC5udW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtbGcgYmctc2xhdGUtOTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT17c3QuaWNvbn0gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWJyYW5kLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtd2hpdGUgbWItMlwiPntzdC50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS00MDAgbGVhZGluZy1yZWxheGVkXCI+e3N0LmRlc2N9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIDguIFBPUlRGT0xJTyBTSE9XQ0FTRSBTRUNUSU9OXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIFBvcnRmb2xpb1NlY3Rpb24oeyBvblNlbGVjdFByb2plY3QgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGlkPVwicG9ydGZvbGlvXCIgY2xhc3NOYW1lPVwicHktMjQgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTN4bCBteC1hdXRvIG1iLTE2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgdGV4dC1jeWJlci1jeWFuIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUFJPVkVOIElNUEFDVFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC0zeGwgc206dGV4dC01eGwgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSBtdC0zIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZlYXR1cmVkIENsaWVudCBDYXNlIFN0dWRpZXNcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDAgdGV4dC1zbSBzbTp0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEV4cGxvcmUgaG93IERlbGlnbyBUZWNobm9sb2dpZXMgYXJjaGl0ZWN0cyBoaWdoLXlpZWxkIHBsYXRmb3JtcyBmb3IgbGVhZGluZyBkaWdpdGFsIGVudGVycHJpc2VzLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICAgICAge1BPUlRGT0xJT19QUk9KRUNUUy5tYXAocHJvaiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvai5pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2xhc3MtcGFuZWwgcm91bmRlZC0zeGwgcC04IGJvcmRlciBib3JkZXItc2xhdGUtODAwIGhvdmVyOmJvcmRlci1icmFuZC01MDAvNDAgaG92ZXI6c2hhZG93LTJ4bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTMgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC14cyBmb250LW1vbm8gZm9udC1ib2xkIGJnLWJyYW5kLTYwMC8yMCB0ZXh0LWJyYW5kLTMwMCBib3JkZXIgYm9yZGVyLWJyYW5kLTUwMC8zMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qLmJhZGdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1jeWJlci1jeWFuIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qLnN0YXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC0yeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbWItMyBncm91cC1ob3Zlcjp0ZXh0LWN5YmVyLWN5YW4gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIHRleHQtc20gbGVhZGluZy1yZWxheGVkIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTIgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2oudGFncy5tYXAoKHRnLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwicHgtMi41IHB5LTEgcm91bmRlZC1tZCB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1zbGF0ZS05MDAvOTAgdGV4dC1zbGF0ZS0zMDAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3RQcm9qZWN0KHByb2oudGl0bGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTMgcm91bmRlZC14bCBiZy1zbGF0ZS04MDAvODAgaG92ZXI6YmctYnJhbmQtNjAwIHRleHQtc2xhdGUtMjAwIGhvdmVyOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LXhzIHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RXhwbG9yZSBUZWNobmljYWwgQXJjaGl0ZWN0dXJlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImFycm93LXVwLXJpZ2h0XCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIDkuIFRFU1RJTU9OSUFMUyBTRUNUSU9OXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIFRlc3RpbW9uaWFsc1NlY3Rpb24oKSB7XG4gICAgY29uc3QgcmV2aWV3cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY2xpZW50OiBcIkRyLiBBbGV4YW5kZXIgV3JpZ2h0XCIsXG4gICAgICAgICAgICByb2xlOiBcIkNoaWVmIE1lZGljYWwgT2ZmaWNlclwiLFxuICAgICAgICAgICAgY29tcGFueTogXCJIZWFsdGhXYXZlIFRlbGVtZWQgKFNGKVwiLFxuICAgICAgICAgICAgcXVvdGU6IFwiRGVsaWdvIFRlY2hub2xvZ2llcyBkZWxpdmVyZWQgb3VyIEhJUEFBLWNvbXBsaWFudCB0ZWxlbWVkaWNpbmUgcGxhdGZvcm0gYWhlYWQgb2Ygc2NoZWR1bGUuIFRoZWlyIGF0dGVudGlvbiB0byBXZWJSVEMgcmVsaWFiaWxpdHkgYW5kIGF1dG9tYXRlZCB0ZXN0aW5nIHNldCB0aGVtIHdvcmxkcyBhcGFydCBmcm9tIHByZXZpb3VzIGFnZW5jaWVzLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsaWVudDogXCJGYWlzYWwgQWwtTnVhaW1pXCIsXG4gICAgICAgICAgICByb2xlOiBcIlZQIG9mIEVuZ2luZWVyaW5nXCIsXG4gICAgICAgICAgICBjb21wYW55OiBcIkZpblNjYWxlIEdsb2JhbCAoRHViYWkpXCIsXG4gICAgICAgICAgICBxdW90ZTogXCJUaGUgbWljcm9zZXJ2aWNlcyBhcmNoaXRlY3R1cmUgYW5kIGF1dG9tYXRlZCByZWNvbmNpbGlhdGlvbiBlbmdpbmUgYnVpbHQgYnkgRGVsaWdvIGhhbmRsZXMgb3ZlciAkMTAwTSBtb250aGx5IHdpdGggemVybyBsYXRlbmN5IHNwaWtlcy4gVHJ1bHkgcHJlbWllciBjYWxpYmVyIGRldmVsb3BlcnMuXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2xpZW50OiBcIk1hcmN1cyBWYW5jZVwiLFxuICAgICAgICAgICAgcm9sZTogXCJNYW5hZ2luZyBEaXJlY3RvclwiLFxuICAgICAgICAgICAgY29tcGFueTogXCJWYW5jZSBTdHJhdGVneSAoTG9uZG9uKVwiLFxuICAgICAgICAgICAgcXVvdGU6IFwiRmxhd2xlc3MgS3ViZXJuZXRlcyBtaWdyYXRpb24gYW5kIERldk9wcyBvdmVyaGF1bC4gRGVsaWdvJ3Mgc3ByaW50IHRyYW5zcGFyZW50IHJvYWRtYXAgZ2F2ZSBvdXIgZXhlY3V0aXZlIGJvYXJkIDEwMCUgY29uZmlkZW5jZSBmcm9tIGRheSBvbmUuXCJcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsc1wiIGNsYXNzTmFtZT1cInB5LTI0IHJlbGF0aXZlIGJnLXNsYXRlLTk1MC80MCBib3JkZXItdCBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy0zeGwgbXgtYXV0byBtYi0xNlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIHRleHQtYnJhbmQtNDAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgVkVSSUZJRUQgQ0xJRU5UIFRSVVNUXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LTN4bCBzbTp0ZXh0LTV4bCBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlIG10LTMgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCBUZWNoIExlYWRlcnMgU2F5IEFib3V0IFVzXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwIHRleHQtc20gc206dGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUcnVzdGVkIGJ5IGZvdW5kZXJzLCBDVE9zLCBhbmQgcHJvZHVjdCBsZWFkZXJzIGdsb2JhbGx5LlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICAgICAge3Jldmlld3MubWFwKChyZXYsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiZ2xhc3MtcGFuZWwgcm91bmRlZC0yeGwgcC04IGJvcmRlciBib3JkZXItc2xhdGUtODAwIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIHRleHQtYW1iZXItNDAwIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbMSwyLDMsNCw1XS5tYXAocyA9PiA8SWNvbiBrZXk9e3N9IG5hbWU9XCJzdGFyXCIgY2xhc3NOYW1lPVwidy00IGgtNCBmaWxsLWFtYmVyLTQwMFwiIC8+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwIHRleHQtc20gbGVhZGluZy1yZWxheGVkIGl0YWxpYyBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIntyZXYucXVvdGV9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBib3JkZXItdCBib3JkZXItc2xhdGUtODAwLzgwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgZm9udC1ib2xkIHRleHQtd2hpdGUgdGV4dC1zbVwiPntyZXYuY2xpZW50fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1jeWJlci1jeWFuIGJsb2NrXCI+e3Jldi5yb2xlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTUwMCBmb250LW1vbm9cIj57cmV2LmNvbXBhbnl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIDEwLiBDVEEgQkFOTkVSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIEN0YUJhbm5lcih7IG9uT3BlbkVucXVpcnkgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTIwIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGFzcy1wYW5lbC1nbG93IHJvdW5kZWQtM3hsIHAtMTAgc206cC0xNiB0ZXh0LWNlbnRlciBib3JkZXIgYm9yZGVyLWJyYW5kLTUwMC80MCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIG1heC13LTN4bCBteC1hdXRvIHNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSB0ZXh0LWN5YmVyLWN5YW4gZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVBRFkgVE8gQlVJTEQ/XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQtM3hsIHNtOnRleHQtNXhsIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUdXJuIFlvdXIgVmlzaW9uIEludG8gYSBNYXJrZXQtTGVhZGluZyBQbGF0Zm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwIHRleHQtc20gc206dGV4dC1iYXNlIG1heC13LXhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXQgeW91ciB0ZWNobmljYWwgcmVxdWlyZW1lbnRzIG9yIGJvb2sgYW4gaW50cm9kdWN0b3J5IGRpc2NvdmVyeSBzZXNzaW9uIHdpdGggb3VyIGVuZ2luZWVyaW5nIGxlYWRlcnNoaXAgdGVhbSB0b2RheS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25PcGVuRW5xdWlyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC04IHB5LTQgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by1yIGZyb20tYnJhbmQtNjAwIHZpYS1pbmRpZ28tNjAwIHRvLWN5YmVyLWN5YW4gdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1iYXNlIHNoYWRvdy14bCBzaGFkb3ctYnJhbmQtNjAwLzMwIGhvdmVyOnNjYWxlLTEwNSBhY3RpdmU6c2NhbGUtOTUgdHJhbnNpdGlvbi1hbGwgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5HZXQgRnJlZSBBcmNoaXRlY3R1cmUgQ29uc3VsdGF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzZW5kXCIgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gMTEuIEZPT1RFUiAoQ2xlYW4gUHVibGljIEZvb3RlciAtIFplcm8gQ1JNIGxpbmtzKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBGb290ZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1bIzAzMDYxMF0gYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTgwMC84MCBwdC0xNiBwYi0xMiB0ZXh0LXNsYXRlLTQwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy00IGdhcC0xMCBtYi0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy05IGgtOSByb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLXRyIGZyb20tYnJhbmQtNjAwIHRvLWN5YmVyLWN5YW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1ib2xkIHRleHQtd2hpdGUgdGV4dC1sZyBmb250LWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyBmb250LWJvbGQgdGV4dC14bCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERFTElHTyA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWN5YmVyLWN5YW5cIj5URUNITk9MT0dJRVM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtcG93ZXJpbmcgZ2xvYmFsIGVudGVycHJpc2VzIGFuZCBib2xkIHN0YXJ0dXBzIHdpdGggYmVzcG9rZSBzb2Z0d2FyZSwgbW9iaWxlIGFwcGxpY2F0aW9ucywgYW5kIEFJIGF1dG9tYXRpb24uIEluc3BpcmVkIGJ5IExpbGFjIEluZm90ZWNoJ3Mgc3RhbmRhcmQgb2YgZW5naW5lZXJpbmcgZXhjZWxsZW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLWxnIGJnLXNsYXRlLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1icmFuZC02MDAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbFwiPjxJY29uIG5hbWU9XCJnaXRodWJcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtbGcgYmctc2xhdGUtODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLWJyYW5kLTYwMCB0ZXh0LXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsXCI+PEljb24gbmFtZT1cImxpbmtlZGluXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLWxnIGJnLXNsYXRlLTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1icmFuZC02MDAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbFwiPjxJY29uIG5hbWU9XCJ0d2l0dGVyXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHRleHQtc20gbWItNFwiPkVuZ2luZWVyaW5nIFNlcnZpY2VzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTIuNSB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjc2VydmljZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJyYW5kLTMwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPk1vYmlsZSBBcHAgRGV2ZWxvcG1lbnQgKEZsdXR0ZXIvaU9TKTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI3NlcnZpY2VzXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1icmFuZC0zMDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5DdXN0b20gV2ViIFBsYXRmb3JtcyAoUmVhY3QgMTgpPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjc2VydmljZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJyYW5kLTMwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPkVudGVycHJpc2UgQUkgJiBMTE0gSW50ZWdyYXRpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNzZXJ2aWNlc1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtYnJhbmQtMzAwIHRyYW5zaXRpb24tY29sb3JzXCI+Q2xvdWQgRGV2T3BzICYgS3ViZXJuZXRlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI3NlcnZpY2VzXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1icmFuZC0zMDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5VSS9VWCBQcm9kdWN0IERlc2lnbiBTeXN0ZW1zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyBmb250LWJvbGQgdGV4dC13aGl0ZSB0ZXh0LXNtIG1iLTRcIj5EZWxpdmVyeSBIdWJzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTIgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJtYXAtcGluXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWN5YmVyLWN5YW4gc2hyaW5rLTAgbXQtMC41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2FuIEZyYW5jaXNjbywgQ0EsIFVTQTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJtYXAtcGluXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWN5YmVyLWN5YW4gc2hyaW5rLTAgbXQtMC41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RHViYWkgSW50ZXJuZXQgQ2l0eSwgVUFFPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cIm1hcC1waW5cIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtY3liZXItY3lhbiBzaHJpbmstMCBtdC0wLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Hb3Z0IEN5YmVycGFyaywgS296aGlrb2RlLCBJbmRpYTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIERpcmVjdCBDb250YWN0IElucXVpcmllcyAoTm8gQ1JNIGxpbmtzIG9uIHB1YmxpYyBzaXRlKSAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgZm9udC1ib2xkIHRleHQtd2hpdGUgdGV4dC1zbSBtYi00XCI+RGlyZWN0IElucXVpcmllczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIG1iLTMgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGF2ZSBhbiBlbnRlcnByaXNlIHByb2plY3Qgb3IgUkZQPyBSZWFjaCBvdXQgZGlyZWN0bHkgdG8gb3VyIGVuZ2luZWVyaW5nIGxlYWRlcnNoaXAgdGVhbS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMCBmb250LW1vbm8gZm9udC1tZWRpdW1cIj5jb250YWN0QGRlbGlnb3RlY2hub2xvZ2llcy5jb208L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTQwMCBmb250LW1lZGl1bVwiPlJlc3BvbnNlIFNMQTogJmx0OyAyNCBCdXNpbmVzcyBIb3VyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOCBib3JkZXItdCBib3JkZXItc2xhdGUtODAwLzgwIGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtc2xhdGUtNTAwIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPsKpIDIwMjYgRGVsaWdvIFRlY2hub2xvZ2llcyBJbmMuIEJ1aWx0IHdpdGggUmVhY3QgMTggKyBQSFAgTXlTUUwgQXJjaGl0ZWN0dXJlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtc2xhdGUtNDAwXCI+UHJpdmFjeSBQb2xpY3k8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtc2xhdGUtNDAwXCI+VGVybXMgb2YgU2VydmljZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1zbGF0ZS00MDBcIj5TZWN1cml0eSBEaXNjbG9zdXJlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAxMi4gRU5RVUlSWSBQUk9QT1NBTCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBFbnF1aXJ5TW9kYWwoeyBpc09wZW4sIG9uQ2xvc2UsIGluaXRpYWxTZXJ2aWNlLCBvblN1Ym1pdFN1Y2Nlc3MgfSkge1xuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBmdWxsX25hbWU6IFwiXCIsXG4gICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICBwaG9uZTogXCJcIixcbiAgICAgICAgY29tcGFueTogXCJcIixcbiAgICAgICAgc2VydmljZTogaW5pdGlhbFNlcnZpY2UgfHwgXCJNb2JpbGUgQXBwIERldmVsb3BtZW50XCIsXG4gICAgICAgIGJ1ZGdldDogXCIkMjUsMDAwIC0gJDUwLDAwMFwiLFxuICAgICAgICB0aW1lbGluZTogXCIyIC0gMyBNb250aHNcIixcbiAgICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgICAgc291cmNlOiBcIldlYnNpdGUgTW9kYWxcIlxuICAgIH0pO1xuICAgIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbaG9uZXlwb3QsIHNldEhvbmV5cG90XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgYnVkZ2V0T3B0aW9ucyA9IFtcbiAgICAgICAgXCI8ICQxMCwwMDBcIixcbiAgICAgICAgXCIkMTAsMDAwIC0gJDI1LDAwMFwiLFxuICAgICAgICBcIiQyNSwwMDAgLSAkNTAsMDAwXCIsXG4gICAgICAgIFwiJDUwLDAwMCAtICQxMDAsMDAwXCIsXG4gICAgICAgIFwiJDEwMCwwMDArXCJcbiAgICBdO1xuXG4gICAgY29uc3Qgc2VydmljZU9wdGlvbnMgPSBbXG4gICAgICAgIFwiTW9iaWxlIEFwcCBEZXZlbG9wbWVudFwiLFxuICAgICAgICBcIldlYiBQbGF0Zm9ybSBFbmdpbmVlcmluZ1wiLFxuICAgICAgICBcIkFJICYgTWFjaGluZSBMZWFybmluZ1wiLFxuICAgICAgICBcIkNsb3VkIEFyY2hpdGVjdHVyZSAmIERldk9wc1wiLFxuICAgICAgICBcIlVJL1VYIFByb2R1Y3QgRGVzaWduXCIsXG4gICAgICAgIFwiRW50ZXJwcmlzZSBTb2Z0d2FyZSAmIEVSUFwiXG4gICAgXTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0RXJyb3JNc2coXCJcIik7XG5cbiAgICAgICAgaWYgKCFmb3JtRGF0YS5mdWxsX25hbWUgfHwgIWZvcm1EYXRhLmVtYWlsIHx8ICFmb3JtRGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICBzZXRFcnJvck1zZyhcIlBsZWFzZSBjb21wbGV0ZSB5b3VyIGZ1bGwgbmFtZSwgZW1haWwsIGFuZCBwcm9qZWN0IGJyaWVmLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS9hcGkvZW5xdWlyeS5waHBgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAuLi5mb3JtRGF0YSwgd2Vic2l0ZV9ocDogaG9uZXlwb3QgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xlYWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBkYXRhLmVucXVpcnlfaWQgfHwgRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ05FVycsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBmb3JtRGF0YS5idWRnZXQuaW5jbHVkZXMoJzEwMCwwMDAnKSA/ICdISUdIJyA6ICdNRURJVU0nLFxuICAgICAgICAgICAgICAgICAgICBlc3RpbWF0ZWRfdmFsdWU6IDM1MDAwLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgnVCcsICcgJykuc3Vic3RyaW5nKDAsIDE5KSxcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6IFtdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvblN1Ym1pdFN1Y2Nlc3MobmV3TGVhZCk7XG4gICAgICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJCYWNrZW5kIEFQSSByZXF1ZXN0IGZhaWxlZDsgZmFsbGluZyBiYWNrIHRvIGNsaWVudC1zaWRlIHN0YXRlOlwiLCBlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmFsbGJhY2tMZWFkID0ge1xuICAgICAgICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgIHN0YXR1czogJ05FVycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ01FRElVTScsXG4gICAgICAgICAgICBlc3RpbWF0ZWRfdmFsdWU6IDMwMDAwLFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoJ1QnLCAnICcpLnN1YnN0cmluZygwLCAxOSksXG4gICAgICAgICAgICBub3RlczogW11cbiAgICAgICAgfTtcbiAgICAgICAgb25TdWJtaXRTdWNjZXNzKGZhbGxiYWNrTGVhZCk7XG4gICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIG9uQ2xvc2UoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IGJnLWJsYWNrLzgwIGJhY2tkcm9wLWJsdXItbWQgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTIwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctMnhsIG1heC1oLVs5MnZoXSBvdmVyZmxvdy15LWF1dG8gZ2xhc3MtcGFuZWwtZ2xvdyByb3VuZGVkLTN4bCBwLTYgc206cC0xMCBib3JkZXIgYm9yZGVyLWJyYW5kLTUwMC80MCBzaGFkb3ctMnhsXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTYgcmlnaHQtNiBwLTIgcm91bmRlZC14bCBiZy1zbGF0ZS04MDAgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwieFwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgdGV4dC1jeWJlci1jeWFuIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU1RBUlQgWU9VUiBORVhULUdFTiBCVUlMRFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0IGEgVGVjaG5pY2FsIFByb3Bvc2FsXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIHRleHQteHMgc206dGV4dC1zbSBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IHdpdGggb3VyIHRlY2huaWNhbCBkaXJlY3RvcnMuIFdlIHNpZ24gYW4gTkRBIGJlZm9yZWhhbmQgdXBvbiByZXF1ZXN0LlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7ZXJyb3JNc2cgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBtYi02IHJvdW5kZWQtbGcgYmctcmVkLTk1MC82MCBib3JkZXIgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtMjAwIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvck1zZ31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNVwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogQW50aS1TcGFtIEJvdCBIb25leXBvdCAqL31cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3ZWJzaXRlX2hwXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aG9uZXlwb3R9IFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRIb25leXBvdChlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgb3BhY2l0eTogMCwgekluZGV4OiAtMSwgcG9pbnRlckV2ZW50czogJ25vbmUnLCBoZWlnaHQ6IDAsIHdpZHRoOiAwIH19IFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTMwMCBtYi0xLjVcIj5Zb3VyIEZ1bGwgTmFtZSAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBEYXZpZCBNaWxsZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZnVsbF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIGZ1bGxfbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIuNSByb3VuZGVkLXhsIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LXdoaXRlIHRleHQteHMgc206dGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJyYW5kLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtMzAwIG1iLTEuNVwiPldvcmsgRW1haWwgQWRkcmVzcyAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRhdmlkQGNvbXBhbnkuaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yLjUgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIHNtOnRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1icmFuZC01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0zMDAgbWItMS41XCI+UGhvbmUgLyBXaGF0c0FwcDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIisxICg1NTUpIDAwMC0wMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBob25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIHBob25lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMi41IHJvdW5kZWQteGwgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRleHQtd2hpdGUgdGV4dC14cyBzbTp0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYnJhbmQtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0zMDAgbWItMS41XCI+Q29tcGFueSAvIFN0YXJ0dXAgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFjbWUgVGVjaG5vbG9naWVzIEluYy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuY29tcGFueX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBjb21wYW55OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMi41IHJvdW5kZWQteGwgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRleHQtd2hpdGUgdGV4dC14cyBzbTp0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYnJhbmQtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtMzAwIG1iLTEuNVwiPlRhcmdldCBDYXBhYmlsaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuc2VydmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBzZXJ2aWNlOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMi41IHJvdW5kZWQteGwgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRleHQtd2hpdGUgdGV4dC14cyBzbTp0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYnJhbmQtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlT3B0aW9ucy5tYXAoKG9wdCwgaSkgPT4gPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHR9PntvcHR9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtMzAwIG1iLTEuNVwiPkFudGljaXBhdGVkIEJ1ZGdldDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmJ1ZGdldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBidWRnZXQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yLjUgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIHNtOnRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1icmFuZC01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1ZGdldE9wdGlvbnMubWFwKChvcHQsIGkpID0+IDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0fT57b3B0fTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0zMDAgbWItMS41XCI+UHJvamVjdCBCcmllZiAmIFRlY2huaWNhbCBTY29wZSAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB5b3VyIGN1cnJlbnQgdGVjaCBzdGFjaywgdGFyZ2V0IHBsYXRmb3JtcywgdGltZWxpbmUsIGFuZCBrZXkgdGVjaG5pY2FsIGdvYWxzLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIG1lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIuNSByb3VuZGVkLXhsIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LXdoaXRlIHRleHQteHMgc206dGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJyYW5kLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS00IHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJyYW5kLTYwMCB2aWEtaW5kaWdvLTYwMCB0by1jeWJlci1jeWFuIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtc20gc2hhZG93LXhsIHNoYWRvdy1icmFuZC02MDAvMzAgaG92ZXI6c2NhbGUtWzEuMDJdIGFjdGl2ZTpzY2FsZS05NSB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1N1Ym1pdHRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3VibWl0dGluZyBQcm9qZWN0IEJyaWVmLi4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TdWJtaXQgQ29uZmlkZW50aWFsIFByb3Bvc2FsIFJlcXVlc3Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzZW5kXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAxMy4gU0VDUkVUIEVYRUNVVElWRSBMT0dJTiBNT0RBTCAoUHJvdGVjdGVkIGJ5IENyZWRlbnRpYWxzKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBBZG1pbkxvZ2luTW9kYWwoeyBpc09wZW4sIG9uQ2xvc2UsIG9uTG9naW5TdWNjZXNzLCBzaG93VG9hc3QgfSkge1xuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0RXJyb3JNc2coXCJcIik7XG4gICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L2FwaS9hZG1pbi5waHA/YWN0aW9uPWxvZ2luYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IHVzZXJuYW1lLnRyaW0oKSwgcGFzc3dvcmQgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgb25Mb2dpblN1Y2Nlc3MoZGF0YS50b2tlbiB8fCBcImRlbGlnb19zZWNfYXV0aFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yTXNnKGRhdGEubWVzc2FnZSB8fCBcIkludmFsaWQgZXhlY3V0aXZlIGNyZWRlbnRpYWxzLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIG1hc3RlciBjcmVkZW50aWFscy4uLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyeXB0b2dyYXBoaWMgVmVyaWZpY2F0aW9uIGZvciBvZmZsaW5lIC8gR2l0SHViIFBhZ2VzIChaZXJvIHBsYWludGV4dCBwYXNzd29yZHMgc3RvcmVkKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYnVmID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtMjU2XCIsIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwYXNzd29yZCkpO1xuICAgICAgICAgICAgY29uc3QgaGFzaCA9IEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoYnVmKSkubWFwKGIgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgY29uc3QgdmFsaWRVc2VycyA9IFtcImFkbWluXCIsIFwib3duZXJcIiwgXCJkZWxpZ29fYWRtaW5cIiwgXCJhZG1pbkBkZWxpZ290ZWNobm9sb2dpZXMuY29tXCJdO1xuICAgICAgICAgICAgY29uc3QgdmFsaWRIYXNoZXMgPSBbXG4gICAgICAgICAgICAgICAgXCJiNzNmZmZmOTdiNTc4ZTVlMDA4OTZhMjUxMmI2ZDkxY2EwOGVlMGJiNjA3YjVhMTE0OGQ2YmQ0ZjZmMjhhYzc3XCIsXG4gICAgICAgICAgICAgICAgXCIyNDBiZTUxOGZhYmQyNzI0ZGRiNmYwNGVlYjFkYTU5Njc0NDhkN2U4MzFjMDhjOGZhODIyODA5Zjc0YzcyMGE5XCJcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGlmICh2YWxpZFVzZXJzLmluY2x1ZGVzKHVzZXJuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSAmJiB2YWxpZEhhc2hlcy5pbmNsdWRlcyhoYXNoKSkge1xuICAgICAgICAgICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgb25Mb2dpblN1Y2Nlc3MoXCJtYXN0ZXJfb2ZmbGluZV90b2tlbl9cIiArIERhdGUubm93KCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRFcnJvck1zZyhcIkludmFsaWQgZXhlY3V0aXZlIGNyZWRlbnRpYWxzLiBBY2Nlc3MgZGVuaWVkLlwiKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IGJnLWJsYWNrLzg1IGJhY2tkcm9wLWJsdXItbWQgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTIwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctbWQgZ2xhc3MtcGFuZWwtZ2xvdyByb3VuZGVkLTN4bCBwLTggYm9yZGVyIGJvcmRlci1icmFuZC01MDAvNTAgc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTUgcmlnaHQtNSBwLTIgcm91bmRlZC14bCBiZy1zbGF0ZS04MDAgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwieFwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNCBoLTE0IHJvdW5kZWQtMnhsIGJnLWdyYWRpZW50LXRvLXRyIGZyb20tYnJhbmQtNjAwIHRvLWN5YmVyLWN5YW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi0zIHNoYWRvdy1sZyBzaGFkb3ctYnJhbmQtNTAwLzIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic2hpZWxkLWNoZWNrXCIgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIHRleHQtY3liZXItY3lhbiBmb250LW1vbm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJFU1RSSUNURUQgQUNDRVNTXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LTJ4bCBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEV4ZWN1dGl2ZSBQb3J0YWxcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBERUxJR08gVEVDSE5PTE9HSUVTIOKAoiBDb25maWRlbnRpYWwgQ1JNIEFjY2Vzc1xuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7ZXJyb3JNc2cgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBtYi01IHJvdW5kZWQteGwgYmctcmVkLTk1MC82MCBib3JkZXIgYm9yZGVyLXJlZC01MDAvNjAgdGV4dC1yZWQtMjAwIHRleHQteHMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzaGllbGQtYWxlcnRcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcmVkLTQwMCBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZXJyb3JNc2d9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtMzAwIG1iLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4ZWN1dGl2ZSBVc2VybmFtZSBvciBFbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gYWRtaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTMgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAvOTAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgdGV4dC13aGl0ZSB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYnJhbmQtNTAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtMzAwIG1iLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlY3VyZSBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyByb3VuZGVkLXhsIGJnLXNsYXRlLTkwMC85MCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LXdoaXRlIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1icmFuZC01MDAgdHJhbnNpdGlvbi1jb2xvcnMgcHItMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0zIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dQYXNzd29yZCA/IFwiSGlkZVwiIDogXCJTaG93XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTMuNSBtdC0yIHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJyYW5kLTYwMCB2aWEtaW5kaWdvLTYwMCB0by1jeWJlci1jeWFuIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtc20gc2hhZG93LXhsIHNoYWRvdy1icmFuZC02MDAvMzAgaG92ZXI6c2NhbGUtWzEuMDJdIGFjdGl2ZTpzY2FsZS05OCB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1N1Ym1pdHRpbmcgPyBcIkF1dGhlbnRpY2F0aW5nLi4uXCIgOiBcIlVubG9jayBFeGVjdXRpdmUgQ1JNXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIDE0LiBPV05FUiBEQVNIQk9BUkQgKExlYWQgVHJhY2tpbmcgQ1JNICYgV29ya2Zsb3cpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIE93bmVyRGFzaGJvYXJkKHsgaXNPcGVuLCBvbkNsb3NlLCBvbkxvZ291dCwgZW5xdWlyaWVzLCBzZXRFbnF1aXJpZXMsIG9uUmVmcmVzaCwgc2hvd1RvYXN0IH0pIHtcbiAgICBjb25zdCBbc2VsZWN0ZWRTdGF0dXNGaWx0ZXIsIHNldFNlbGVjdGVkU3RhdHVzRmlsdGVyXSA9IHVzZVN0YXRlKFwiQUxMXCIpO1xuICAgIGNvbnN0IFtzZWxlY3RlZFNlcnZpY2VGaWx0ZXIsIHNldFNlbGVjdGVkU2VydmljZUZpbHRlcl0gPSB1c2VTdGF0ZShcIkFMTFwiKTtcbiAgICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzZWxlY3RlZEVucXVpcnksIHNldFNlbGVjdGVkRW5xdWlyeV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbmV3Tm90ZVRleHQsIHNldE5ld05vdGVUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtpc0V4cG9ydGluZywgc2V0SXNFeHBvcnRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgZmlsdGVyZWRFbnF1aXJpZXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGVucXVpcmllcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzU3RhdHVzID0gc2VsZWN0ZWRTdGF0dXNGaWx0ZXIgPT09IFwiQUxMXCIgfHwgaXRlbS5zdGF0dXMgPT09IHNlbGVjdGVkU3RhdHVzRmlsdGVyO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlc1NlcnZpY2UgPSBzZWxlY3RlZFNlcnZpY2VGaWx0ZXIgPT09IFwiQUxMXCIgfHwgaXRlbS5zZXJ2aWNlID09PSBzZWxlY3RlZFNlcnZpY2VGaWx0ZXI7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzU2VhcmNoID0gIXNlYXJjaFF1ZXJ5IHx8IFxuICAgICAgICAgICAgICAgIGl0ZW0uZnVsbF9uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICAgICAgICBpdGVtLmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICAgICAgICAoaXRlbS5jb21wYW55ICYmIGl0ZW0uY29tcGFueS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpKSB8fFxuICAgICAgICAgICAgICAgIGl0ZW0ubWVzc2FnZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNTdGF0dXMgJiYgbWF0Y2hlc1NlcnZpY2UgJiYgbWF0Y2hlc1NlYXJjaDtcbiAgICAgICAgfSk7XG4gICAgfSwgW2VucXVpcmllcywgc2VsZWN0ZWRTdGF0dXNGaWx0ZXIsIHNlbGVjdGVkU2VydmljZUZpbHRlciwgc2VhcmNoUXVlcnldKTtcblxuICAgIGNvbnN0IGdldFN0YXR1c0JhZGdlID0gKHN0YXR1cykgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICAnTkVXJzogJ2JnLWVtZXJhbGQtNTAwLzIwIHRleHQtZW1lcmFsZC00MDAgYm9yZGVyLWVtZXJhbGQtNTAwLzQwJyxcbiAgICAgICAgICAgICdDT05UQUNURUQnOiAnYmctYmx1ZS01MDAvMjAgdGV4dC1ibHVlLTQwMCBib3JkZXItYmx1ZS01MDAvNDAnLFxuICAgICAgICAgICAgJ0lOX0RJU0NVU1NJT04nOiAnYmctYW1iZXItNTAwLzIwIHRleHQtYW1iZXItNDAwIGJvcmRlci1hbWJlci01MDAvNDAnLFxuICAgICAgICAgICAgJ1BST1BPU0FMX1NFTlQnOiAnYmctcHVycGxlLTUwMC8yMCB0ZXh0LXB1cnBsZS00MDAgYm9yZGVyLXB1cnBsZS01MDAvNDAnLFxuICAgICAgICAgICAgJ0NPTlZFUlRFRCc6ICdiZy1jeWJlci1jeWFuLzIwIHRleHQtY3liZXItY3lhbiBib3JkZXItY3liZXItY3lhbi80MCBmb250LWJvbGQnLFxuICAgICAgICAgICAgJ0FSQ0hJVkVEJzogJ2JnLXNsYXRlLTcwMC80MCB0ZXh0LXNsYXRlLTQwMCBib3JkZXItc2xhdGUtNjAwLzQwJ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgcHgtMi41IHB5LTAuNSByb3VuZGVkLWZ1bGwgdGV4dC1bMTBweF0gZm9udC1tb25vIGJvcmRlciAke3N0eWxlc1tzdGF0dXNdIHx8IHN0eWxlc1snTkVXJ119YH0+XG4gICAgICAgICAgICAgICAge3N0YXR1cy5yZXBsYWNlKCdfJywgJyAnKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVXBkYXRlU3RhdHVzID0gYXN5bmMgKGlkLCBuZXdTdGF0dXMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImRlbGlnb19hZG1pbl90b2tlblwiKTtcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS9hcGkvYWRtaW4ucGhwP2FjdGlvbj11cGRhdGVfc3RhdHVzYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgICAgIC4uLih0b2tlbiA/IHsgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHt0b2tlbn1gIH0gOiB7fSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQsIHN0YXR1czogbmV3U3RhdHVzIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2FsIHN0YXRlIHVwZGF0ZTpcIiwgZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEVucXVpcmllcyhwcmV2ID0+IHByZXYubWFwKGUgPT4gZS5pZCA9PT0gaWQgPyB7IC4uLmUsIHN0YXR1czogbmV3U3RhdHVzIH0gOiBlKSk7XG4gICAgICAgIGlmIChzZWxlY3RlZEVucXVpcnkgJiYgc2VsZWN0ZWRFbnF1aXJ5LmlkID09PSBpZCkge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRFbnF1aXJ5KHByZXYgPT4gKHsgLi4ucHJldiwgc3RhdHVzOiBuZXdTdGF0dXMgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHNob3dUb2FzdChgRW5xdWlyeSBzdGF0dXMgY2hhbmdlZCB0byAke25ld1N0YXR1c31gKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQWRkTm90ZSA9IGFzeW5jIChlbnF1aXJ5SWQpID0+IHtcbiAgICAgICAgaWYgKCFuZXdOb3RlVGV4dC50cmltKCkpIHJldHVybjtcbiAgICAgICAgY29uc3Qgbm90ZUNvbnRlbnQgPSBuZXdOb3RlVGV4dC50cmltKCk7XG4gICAgICAgIHNldE5ld05vdGVUZXh0KFwiXCIpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJkZWxpZ29fYWRtaW5fdG9rZW5cIik7XG4gICAgICAgICAgICBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vYXBpL2FkbWluLnBocD9hY3Rpb249YWRkX25vdGVgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgLi4uKHRva2VuID8geyBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke3Rva2VufWAgfSA6IHt9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbnF1aXJ5X2lkOiBlbnF1aXJ5SWQsIG5vdGU6IG5vdGVDb250ZW50IH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2FsIG5vdGUgYXBwZW5kOlwiLCBlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0RW5xdWlyaWVzKHByZXYgPT4gcHJldi5tYXAoZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5pZCA9PT0gZW5xdWlyeUlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZE5vdGVzID0gZS5ub3RlcyA/IFsuLi5lLm5vdGVzLCBub3RlQ29udGVudF0gOiBbbm90ZUNvbnRlbnRdO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmUsIG5vdGVzOiB1cGRhdGVkTm90ZXMgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkRW5xdWlyeSAmJiBzZWxlY3RlZEVucXVpcnkuaWQgPT09IGVucXVpcnlJZCkge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRFbnF1aXJ5KHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIG5vdGVzOiBwcmV2Lm5vdGVzID8gWy4uLnByZXYubm90ZXMsIG5vdGVDb250ZW50XSA6IFtub3RlQ29udGVudF1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBzaG93VG9hc3QoXCJJbnRlcm5hbCBub3RlIGFwcGVuZGVkIHRvIGxlYWQgZmlsZS5cIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUV4cG9ydENzdiA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNFeHBvcnRpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gWydJRCcsICdGdWxsIE5hbWUnLCAnRW1haWwnLCAnUGhvbmUnLCAnQ29tcGFueScsICdTZXJ2aWNlJywgJ0J1ZGdldCcsICdUaW1lbGluZScsICdTdGF0dXMnLCAnUHJpb3JpdHknLCAnRXN0LiBWYWx1ZSAoJCknLCAnU291cmNlJywgJ1JlY2VpdmVkIEF0JywgJ01lc3NhZ2UnXTtcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBlbnF1aXJpZXMubWFwKGUgPT4gW1xuICAgICAgICAgICAgICAgIGUuaWQsXG4gICAgICAgICAgICAgICAgYFwiJHsoZS5mdWxsX25hbWUgfHwgJycpLnJlcGxhY2UoL1wiL2csICdcIlwiJyl9XCJgLFxuICAgICAgICAgICAgICAgIGBcIiR7KGUuZW1haWwgfHwgJycpLnJlcGxhY2UoL1wiL2csICdcIlwiJyl9XCJgLFxuICAgICAgICAgICAgICAgIGBcIiR7KGUucGhvbmUgfHwgJycpLnJlcGxhY2UoL1wiL2csICdcIlwiJyl9XCJgLFxuICAgICAgICAgICAgICAgIGBcIiR7KGUuY29tcGFueSB8fCAnJykucmVwbGFjZSgvXCIvZywgJ1wiXCInKX1cImAsXG4gICAgICAgICAgICAgICAgYFwiJHsoZS5zZXJ2aWNlIHx8ICcnKS5yZXBsYWNlKC9cIi9nLCAnXCJcIicpfVwiYCxcbiAgICAgICAgICAgICAgICBgXCIkeyhlLmJ1ZGdldCB8fCAnJykucmVwbGFjZSgvXCIvZywgJ1wiXCInKX1cImAsXG4gICAgICAgICAgICAgICAgYFwiJHsoZS50aW1lbGluZSB8fCAnJykucmVwbGFjZSgvXCIvZywgJ1wiXCInKX1cImAsXG4gICAgICAgICAgICAgICAgZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgZS5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICBlLmVzdGltYXRlZF92YWx1ZSB8fCAwLFxuICAgICAgICAgICAgICAgIGBcIiR7KGUuc291cmNlIHx8ICdXZWJzaXRlJykucmVwbGFjZSgvXCIvZywgJ1wiXCInKX1cImAsXG4gICAgICAgICAgICAgICAgZS5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgIGBcIiR7KGUubWVzc2FnZSB8fCAnJykucmVwbGFjZSgvXCIvZywgJ1wiXCInKS5yZXBsYWNlKC9cXG4vZywgJyAnKX1cImBcbiAgICAgICAgICAgIF0uam9pbignLCcpKTtcbiAgICAgICAgICAgIGNvbnN0IGNzdkNvbnRlbnQgPSBbaGVhZGVycy5qb2luKCcsJyksIC4uLnJvd3NdLmpvaW4oJ1xcbicpO1xuICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjc3ZDb250ZW50XSwgeyB0eXBlOiAndGV4dC9jc3Y7Y2hhcnNldD11dGYtODsnIH0pO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBhLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICBhLmRvd25sb2FkID0gJ2RlbGlnb19lbnF1aXJpZXMuY3N2JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgICBhLmNsaWNrKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICAgICAgc2hvd1RvYXN0KFwiQ1NWIGV4cG9ydCBkb3dubG9hZGVkIHN1Y2Nlc3NmdWxseSFcIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKEFQSV9CQVNFKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiZGVsaWdvX2FkbWluX3Rva2VuXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oYCR7QVBJX0JBU0V9L2FwaS9leHBvcnQucGhwP3Rva2VuPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRva2VuKX1gLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc0V4cG9ydGluZyhmYWxzZSksIDgwMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvdGFsQ291bnQgPSBlbnF1aXJpZXMubGVuZ3RoO1xuICAgIGNvbnN0IG5ld0NvdW50ID0gZW5xdWlyaWVzLmZpbHRlcihlID0+IGUuc3RhdHVzID09PSBcIk5FV1wiKS5sZW5ndGg7XG4gICAgY29uc3QgaW5EaXNjdXNzaW9uQ291bnQgPSBlbnF1aXJpZXMuZmlsdGVyKGUgPT4gW1wiSU5fRElTQ1VTU0lPTlwiLCBcIlBST1BPU0FMX1NFTlRcIl0uaW5jbHVkZXMoZS5zdGF0dXMpKS5sZW5ndGg7XG4gICAgY29uc3QgY29udmVydGVkQ291bnQgPSBlbnF1aXJpZXMuZmlsdGVyKGUgPT4gZS5zdGF0dXMgPT09IFwiQ09OVkVSVEVEXCIpLmxlbmd0aDtcbiAgICBjb25zdCB0b3RhbFBpcGVsaW5lVmFsdWUgPSBlbnF1aXJpZXMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgKGN1ci5lc3RpbWF0ZWRfdmFsdWUgfHwgMCksIDApO1xuICAgIGNvbnN0IGNvbnZlcnNpb25SYXRlID0gdG90YWxDb3VudCA+IDAgPyAoKGNvbnZlcnRlZENvdW50IC8gdG90YWxDb3VudCkgKiAxMDApLnRvRml4ZWQoMSkgOiBcIjAuMFwiO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0zIHNtOnAtNiBiZy1ibGFjay84NSBiYWNrZHJvcC1ibHVyLWxnIGFuaW1hdGUtaW4gZmFkZS1pbiBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1heC13LTd4bCBoLVs5NHZoXSBiZy1bIzA5MGQxYV0gYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAvODAgcm91bmRlZC0zeGwgc2hhZG93LTJ4bCBmbGV4IGZsZXgtY29sIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIHsvKiBEYXNoYm9hcmQgVG9wIEhlYWRlciBCYXIgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTQgYmctc2xhdGUtOTAwLzkwIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLXhsIGJnLWFtYmVyLTUwMC8xMCB0ZXh0LWFtYmVyLTQwMCBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8zMCB0ZXh0LWxnXCI+8J+RkTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyBmb250LWV4dHJhYm9sZCB0ZXh0LWxnIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhlY3V0aXZlIEVucXVpcnkgJiBMZWFkIENSTVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIHB5LTAuNSByb3VuZGVkIHRleHQtWzEwcHhdIGZvbnQtbW9ubyBiZy1lbWVyYWxkLTUwMC8yMCB0ZXh0LWVtZXJhbGQtNDAwIGJvcmRlciBib3JkZXItZW1lcmFsZC01MDAvMzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENPTkZJREVOVElBTFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERFTElHTyBURUNITk9MT0dJRVMg4oCiIEF1dGhvcml6ZWQgRXhlY3V0aXZlIEFjY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUV4cG9ydENzdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNFeHBvcnRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMy41IHB5LTIgcm91bmRlZC1sZyBiZy1zbGF0ZS04MDAgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtMjAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtNzAwIHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJvcmRlciBib3JkZXItc2xhdGUtNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiZG93bmxvYWRcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtY3liZXItY3lhblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RXhwb3J0IENTVjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlZnJlc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtbGcgYmctc2xhdGUtODAwIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVmcmVzaCBEYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicmVmcmVzaC1jd1wiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTG9nb3V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMiByb3VuZGVkLWxnIGJnLXJlZC05NTAvNjAgaG92ZXI6YmctcmVkLTkwMC84MCB0ZXh0LXJlZC0zMDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwLzQwIHRleHQteHMgZm9udC1zZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNpZ24gb3V0IG9mIEV4ZWN1dGl2ZSBQb3J0YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ4XCIgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1yZWQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaWduIE91dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWxnIGJnLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGJvcmRlciBib3JkZXItc2xhdGUtNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwieFwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIERhc2hib2FyZCBCb2R5IENvbnRlbnQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHAtNiBzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIFRvcCBLUEkgTWV0cmljIENhcmRzICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTUgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYmctc2xhdGUtOTAwLzYwIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1tb25vIHVwcGVyY2FzZSB0ZXh0LXNsYXRlLTQwMCBibG9jayBtYi0xXCI+VE9UQUwgUElQRUxJTkU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZm9udC1oZWFkaW5nIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0b3RhbFBpcGVsaW5lVmFsdWUudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LWN5YmVyLWN5YW5cIj57dG90YWxDb3VudH0gSW5ib3VuZCBJbnF1aXJpZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYmctc2xhdGUtOTAwLzYwIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1tb25vIHVwcGVyY2FzZSB0ZXh0LXNsYXRlLTQwMCBibG9jayBtYi0xXCI+TkVXIFVOUkVBRDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBmb250LWhlYWRpbmcgdGV4dC1lbWVyYWxkLTQwMFwiPntuZXdDb3VudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTQwMFwiPiZsdDsgMjRoIFJlc3BvbnNlIFRhcmdldDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAvNjAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSBmb250LW1vbm8gdXBwZXJjYXNlIHRleHQtc2xhdGUtNDAwIGJsb2NrIG1iLTFcIj5JTiBORUdPVElBVElPTjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBmb250LWhlYWRpbmcgdGV4dC1hbWJlci00MDBcIj57aW5EaXNjdXNzaW9uQ291bnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zbGF0ZS00MDBcIj5Qcm9wb3NhbHMgJiBTT1dzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLXhsIGJnLXNsYXRlLTkwMC82MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtbW9ubyB1cHBlcmNhc2UgdGV4dC1zbGF0ZS00MDAgYmxvY2sgbWItMVwiPldPTiBDT05UUkFDVFM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZm9udC1oZWFkaW5nIHRleHQtY3liZXItY3lhblwiPntjb252ZXJ0ZWRDb3VudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LWVtZXJhbGQtNDAwIGZvbnQtc2VtaWJvbGRcIj57Y29udmVyc2lvblJhdGV9JSBDb252ZXJzaW9uIFJhdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYmctc2xhdGUtOTAwLzYwIGJvcmRlciBib3JkZXItc2xhdGUtODAwIGNvbC1zcGFuLTIgbGc6Y29sLXNwYW4tMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtbW9ubyB1cHBlcmNhc2UgdGV4dC1zbGF0ZS00MDAgYmxvY2sgbWItMVwiPkRCIEVOR0lORTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgdHJ1bmNhdGUgbXQtMVwiPkxpdmUgRGF0YWJhc2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LWVtZXJhbGQtNDAwIGZvbnQtbW9ub1wiPkNvbm5lY3RlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogRmlsdGVyIEJhciAmIFNlYXJjaCAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLXN0cmV0Y2ggc206aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNCBwLTQgcm91bmRlZC0yeGwgZ2xhc3MtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInNlYXJjaFwiIGNsYXNzTmFtZT1cInctNCBoLTQgYWJzb2x1dGUgbGVmdC0zLjUgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHRleHQtc2xhdGUtNTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGVucXVpcmllcyBieSBjbGllbnQgbmFtZSwgZW1haWwsIGNvbXBhbnksIG9yIHNjb3BlIGtleXdvcmRzLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHBsLTEwIHByLTQgcHktMi41IHJvdW5kZWQteGwgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJyYW5kLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkU3RhdHVzRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkU3RhdHVzRmlsdGVyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0yIHJvdW5kZWQteGwgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRleHQteHMgdGV4dC1zbGF0ZS0zMDAgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBTExcIj5BbGwgU3RhdHVzZXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5FV1wiPk5ldyBMZWFkczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ09OVEFDVEVEXCI+Q29udGFjdGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJTl9ESVNDVVNTSU9OXCI+SW4gRGlzY3Vzc2lvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFJPUE9TQUxfU0VOVFwiPlByb3Bvc2FsIFNlbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNPTlZFUlRFRFwiPkNvbnZlcnRlZCAoV29uKTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQVJDSElWRURcIj5BcmNoaXZlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkU2VydmljZUZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZFNlcnZpY2VGaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTIgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgdGV4dC14cyB0ZXh0LXNsYXRlLTMwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFMTFwiPkFsbCBTZXJ2aWNlczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7U0VSVklDRVNfTElTVC5tYXAocyA9PiA8b3B0aW9uIGtleT17cy5pZH0gdmFsdWU9e3MudGl0bGV9PntzLnRpdGxlfTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIFNwbGl0IFZpZXc6IExlYWRzIFRhYmxlICYgRG9zc2llciBNb2RhbCAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0xMiBnYXAtNiBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3NlbGVjdGVkRW5xdWlyeSA/ICdsZzpjb2wtc3Bhbi03JyA6ICdsZzpjb2wtc3Bhbi0xMid9IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIG92ZXJmbG93LWhpZGRlbiBiZy1zbGF0ZS05NTAvNDBgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGVmdCBib3JkZXItY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTAwLzgwIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgdGV4dC1bMTFweF0gZm9udC1tb25vIHVwcGVyY2FzZSB0ZXh0LXNsYXRlLTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMyBweC00XCI+Q2xpZW50PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMgcHgtNFwiPlNlcnZpY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMyBweC00XCI+QnVkZ2V0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMgcHgtNFwiPlN0YXR1czwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTRcIj5SZWNlaXZlZDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTQgdGV4dC1yaWdodFwiPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1zbGF0ZS04MDAvNjAgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZEVucXVpcmllcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiNlwiIGNsYXNzTmFtZT1cInB5LTggdGV4dC1jZW50ZXIgdGV4dC1zbGF0ZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBjbGllbnQgZW5xdWlyaWVzIG1hdGNoZWQgeW91ciBhY3RpdmUgZmlsdGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRFbnF1aXJpZXMubWFwKGVucSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbnEuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRFbnF1aXJ5KGVucSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaG92ZXI6Ymctc2xhdGUtODAwLzQwIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tY29sb3JzICR7c2VsZWN0ZWRFbnF1aXJ5ICYmIHNlbGVjdGVkRW5xdWlyeS5pZCA9PT0gZW5xLmlkID8gJ2JnLWJyYW5kLTYwMC8xMCBib3JkZXItbC0yIGJvcmRlci1icmFuZC01MDAnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e2VucS5mdWxsX25hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS00MDBcIj57ZW5xLmNvbXBhbnkgfHwgZW5xLmVtYWlsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtNCB0ZXh0LXNsYXRlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW5xLnNlcnZpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC00IGZvbnQtbW9ubyBmb250LW1lZGl1bSB0ZXh0LWN5YmVyLWN5YW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VucS5idWRnZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRTdGF0dXNCYWRnZShlbnEuc3RhdHVzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTQgdGV4dC1zbGF0ZS00MDAgdGV4dC1bMTFweF0gZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZW5xLmNyZWF0ZWRfYXQgfHwgJycpLnN1YnN0cmluZygwLCAxMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC00IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEVucXVpcnkoZW5xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yLjUgcHktMSByb3VuZGVkIGJnLXNsYXRlLTgwMCB0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLWJyYW5kLTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluc3BlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIENsaWVudCBEb3NzaWVyIEluc3BlY3RvciBQYW5lICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkRW5xdWlyeSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi01IGdsYXNzLXBhbmVsLWdsb3cgcm91bmRlZC0yeGwgcC02IGJvcmRlciBib3JkZXItc2xhdGUtNzAwLzgwIHNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtbW9ubyB0ZXh0LWN5YmVyLWN5YW4gdXBwZXJjYXNlIGJsb2NrIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTEVBRCBET1NTSUVSICN7c2VsZWN0ZWRFbnF1aXJ5LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkRW5xdWlyeS5mdWxsX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+e3NlbGVjdGVkRW5xdWlyeS5jb21wYW55IHx8ICdEaXJlY3QgRm91bmRlcid9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkRW5xdWlyeShudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEuNSByb3VuZGVkLWxnIGJnLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwieFwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBRdWljayBDb250YWN0IEFjdGlvbiBQaWxscyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YG1haWx0bzoke3NlbGVjdGVkRW5xdWlyeS5lbWFpbH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMuNSBweS0yIHJvdW5kZWQteGwgYmctaW5kaWdvLTYwMCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBob3ZlcjpiZy1pbmRpZ28tNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwibWFpbFwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVtYWlsIENsaWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEVucXVpcnkucGhvbmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YHRlbDoke3NlbGVjdGVkRW5xdWlyeS5waG9uZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMy41IHB5LTIgcm91bmRlZC14bCBiZy1zbGF0ZS04MDAgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgaG92ZXI6Ymctc2xhdGUtNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInBob25lXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNhbGw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly93YS5tZS8ke3NlbGVjdGVkRW5xdWlyeS5waG9uZS5yZXBsYWNlKC9bXjAtOV0vZywgJycpfWB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMuNSBweS0yIHJvdW5kZWQteGwgYmctZW1lcmFsZC02MDAgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgaG92ZXI6YmctZW1lcmFsZC01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwibWVzc2FnZS1zcXVhcmVcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldoYXRzQXBwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU3RhdHVzIFdvcmtmbG93IFNlbGVjdG9yICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLXhsIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSBmb250LW1vbm8gdGV4dC1zbGF0ZS00MDAgdXBwZXJjYXNlIGJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlIFBpcGVsaW5lIFN0YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRFbnF1aXJ5LnN0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVVwZGF0ZVN0YXR1cyhzZWxlY3RlZEVucXVpcnkuaWQsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQtbGcgYmctc2xhdGUtOTUwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRleHQteHMgdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJORVdcIj5ORVcgTEVBRDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDT05UQUNURURcIj5DT05UQUNURUQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSU5fRElTQ1VTU0lPTlwiPklOIERJU0NVU1NJT048L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFJPUE9TQUxfU0VOVFwiPlBST1BPU0FMIFNFTlQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ09OVkVSVEVEXCI+Q09OVkVSVEVEIChXT04pPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFSQ0hJVkVEXCI+QVJDSElWRUQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU2NvcGUgRGVzY3JpcHRpb24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1tb25vIHRleHQtc2xhdGUtNDAwIHVwcGVyY2FzZSBibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsaWVudCBQcm9qZWN0IEJyaWVmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTMwMCBsZWFkaW5nLXJlbGF4ZWQgcC0zLjUgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAvNjAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRFbnF1aXJ5Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBJbnRlcm5hbCBBY3Rpdml0eSBOb3RlcyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtbW9ubyB0ZXh0LXNsYXRlLTQwMCB1cHBlcmNhc2UgYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnRlcm5hbCBDUk0gTm90ZXMgKHtzZWxlY3RlZEVucXVpcnkubm90ZXMgPyBzZWxlY3RlZEVucXVpcnkubm90ZXMubGVuZ3RoIDogMH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgbWF4LWgtMzYgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkRW5xdWlyeS5ub3RlcyAmJiBzZWxlY3RlZEVucXVpcnkubm90ZXMubWFwKChudCwgbmlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bmlkeH0gY2xhc3NOYW1lPVwicC0yLjUgcm91bmRlZC1sZyBiZy1zbGF0ZS05MDAvODAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgdGV4dC14cyB0ZXh0LXNsYXRlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge250fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIG5vdGUgKGUuZy4gQ2FsbCBzY2hlZHVsZWQsIFNPVyB2MikuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Tm90ZVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Tm90ZVRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VudGVyJykgaGFuZGxlQWRkTm90ZShzZWxlY3RlZEVucXVpcnkuaWQpOyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHgtMyBweS0yIHJvdW5kZWQtbGcgYmctc2xhdGUtOTAwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkTm90ZShzZWxlY3RlZEVucXVpcnkuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTIgcm91bmRlZC1sZyBiZy1icmFuZC02MDAgdGV4dC14cyB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctYnJhbmQtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuLy8gUmVuZGVyIFJlYWN0IERPTVxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKS5yZW5kZXIoPEFwcCAvPik7XG4iXSwibWFwcGluZ3MiOiI7OztBQUNBLE1BQU07RUFBRUEsUUFBUTtFQUFFQyxTQUFTO0VBQUVDLE1BQU07RUFBRUM7QUFBUSxDQUFDLEdBQUdDLEtBQUs7QUFFdEQsTUFBTUMsUUFBUSxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxLQUFLLE9BQU8sR0FBSUYsTUFBTSxDQUFDRyxlQUFlLEdBQUcsbUJBQW1CLEdBQUdILE1BQU0sQ0FBQ0csZUFBZSxHQUFHLHVCQUF1QixHQUFJLEVBQUU7QUFFOUosTUFBTUMsaUJBQWlCLEdBQUcsQ0FDdEI7RUFDSUMsRUFBRSxFQUFFLEdBQUc7RUFDUEMsU0FBUyxFQUFFLGVBQWU7RUFDMUJDLEtBQUssRUFBRSx1QkFBdUI7RUFDOUJDLEtBQUssRUFBRSxtQkFBbUI7RUFDMUJDLE9BQU8sRUFBRSxvQkFBb0I7RUFDN0JDLE9BQU8sRUFBRSx3QkFBd0I7RUFDakNDLE1BQU0sRUFBRSxtQkFBbUI7RUFDM0JDLFFBQVEsRUFBRSxjQUFjO0VBQ3hCQyxPQUFPLEVBQUUsNklBQTZJO0VBQ3RKQyxNQUFNLEVBQUUsS0FBSztFQUNiQyxRQUFRLEVBQUUsUUFBUTtFQUNsQkMsZUFBZSxFQUFFLEtBQUs7RUFDdEJDLE1BQU0sRUFBRSxjQUFjO0VBQ3RCQyxVQUFVLEVBQUUscUJBQXFCO0VBQ2pDQyxL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
})();
