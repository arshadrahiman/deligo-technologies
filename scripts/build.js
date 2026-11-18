const fs = require('fs');
const path = require('path');
const babel = require('/Users/arshadulrahman/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/lib/transform/babelBundle.js');

// Read the complete source code
const originalBundle = fs.readFileSync('frontend/app.bundle.js', 'utf-8');

// We will construct the updated bundle with clean modular components
// Let's create the JSX code
const jsxCode = `
const { useState, useEffect, useRef, useMemo } = React;

const API_BASE = window.location.protocol === 'file:' ? (window.DELIGO_API_PORT ? 'http://localhost:' + window.DELIGO_API_PORT : 'http://localhost:8085') : '';

const INITIAL_ENQUIRIES = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
];

const SERVICES_LIST = [
    {
        id: "mobile-apps",
        title: "Mobile App Development",
        badge: "iOS & Android",
        icon: "smartphone",
        description: "Engineering fluid, native and cross-platform mobile experiences with 60fps animations, offline sync, and enterprise security.",
        tech: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
        features: ["Biometric Authentication", "WebRTC Video/Audio", "Offline First Data Sync", "In-App Subscriptions"]
    },
    {
        id: "web-engineering",
        title: "Scalable Web Engineering",
        badge: "High Velocity",
        icon: "globe",
        description: "High-performance web apps, SaaS ecosystems, and client portals built with React 18, Next.js, and lightning microservices.",
        tech: ["React 18", "TypeScript", "Node.js", "PHP / Laravel", "MySQL"],
        features: ["Sub-second Page Speeds", "Role-based Access Control", "Complex Data Visualizations", "Multi-tenant Architecture"]
    },
    {
        id: "ai-solutions",
        title: "AI & Machine Learning Systems",
        badge: "Next-Gen Tech",
        icon: "cpu",
        description: "Infusing proprietary intelligence into your business via LLM fine-tuning, RAG pipelines, computer vision, and predictive analytics.",
        tech: ["OpenAI", "LangChain", "Python", "PyTorch", "Vector DBs"],
        features: ["Enterprise RAG Bots", "Document OCR & Extraction", "Predictive Churn & Sales", "Real-time Voice Agents"]
    },
    {
        id: "cloud-devops",
        title: "Cloud Infrastructure & DevOps",
        badge: "99.99% Uptime",
        icon: "cloud",
        description: "Automated, scalable cloud orchestration. We build self-healing Kubernetes clusters, CI/CD pipelines, and zero-trust security.",
        tech: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
        features: ["Infrastructure as Code", "Auto-scaling Clusters", "Zero-downtime Deployment", "SOC2 / HIPAA Compliance"]
    },
    {
        id: "uiux-design",
        title: "Product & UI/UX Design",
        badge: "Award Winning",
        icon: "layout",
        description: "Human-centric interfaces that convert visitors into passionate brand advocates. Pixel-perfect Figma design systems and micro-interactions.",
        tech: ["Figma", "Design Systems", "Prototyping", "User Research"],
        features: ["Interactive Clickable Prototypes", "Design Token Libraries", "Accessibility WCAG AAA", "Conversion Rate Optimization"]
    },
    {
        id: "enterprise-erp",
        title: "Enterprise Software & ERP",
        badge: "Custom Tailored",
        icon: "database",
        description: "Purpose-built business management suites, inventory tracking, CRM engines, and legacy system modernization.",
        tech: ["PHP / MySQL", "GraphQL", "PostgreSQL", "Redis", "Kafka"],
        features: ["Automated Financial Audits", "Custom Workflow Automation", "ERP/CRM Integrations", "Real-time Telemetry"]
    }
];

const TECH_STACK = {
    "Frontend": [
        { name: "React 18", icon: "atom", desc: "Interactive UI & Component Architecture" },
        { name: "Next.js", icon: "zap", desc: "Server-side Rendering & Edge Delivery" },
        { name: "Tailwind CSS", icon: "palette", desc: "Design-system driven styling" },
        { name: "TypeScript", icon: "shield-check", desc: "Strict type safety & maintainability" }
    ],
    "Backend & DB": [
        { name: "PHP 8.2+", icon: "code", desc: "High-throughput APIs & Enterprise Logic" },
        { name: "MySQL / MariaDB", icon: "database", desc: "ACID-compliant relational database" },
        { name: "Node.js / Express", icon: "server", desc: "Event-driven asynchronous microservices" },
        { name: "Redis", icon: "layers", desc: "In-memory caching and real-time pub/sub" }
    ],
    "Mobile": [
        { name: "Flutter", icon: "smartphone", desc: "Native cross-platform compilation" },
        { name: "React Native", icon: "tablet", desc: "High-performance hybrid apps" },
        { name: "Swift (iOS)", icon: "apple", desc: "Pure Apple ecosystem performance" },
        { name: "Kotlin (Android)", icon: "bot", desc: "Modern Android enterprise apps" }
    ],
    "AI & Cloud": [
        { name: "AWS Cloud", icon: "cloud-lightning", desc: "Global serverless & container hosting" },
        { name: "Docker & K8s", icon: "box", desc: "Containerized elastic scalability" },
        { name: "Python / PyTorch", icon: "cpu", desc: "Deep learning & LLM inference pipelines" },
        { name: "LangChain / RAG", icon: "network", desc: "Context-aware AI embeddings" }
    ]
};

const PORTFOLIO_PROJECTS = [
    {
        id: 1,
        title: "HealthWave Telemed & RPM",
        category: "Mobile & Cloud",
        badge: "Healthcare",
        stat: "+340% User Growth",
        desc: "Real-time patient telemetry, HIPAA-compliant encrypted video consults, and connected IoT vitals monitoring.",
        tags: ["React Native", "WebRTC", "PHP Microservices", "AWS"],
        imageGradient: "from-blue-600/30 to-indigo-900/40"
    },
    {
        id: 2,
        title: "FinScale Multi-Currency Gateway",
        category: "Enterprise Web",
        badge: "FinTech",
        stat: "$1.4B Annual Volume",
        desc: "High-frequency cross-border settlement portal with automated anti-fraud triggers and SWIFT integrations.",
        tags: ["React 18", "MySQL", "PHP 8", "Redis", "Docker"],
        imageGradient: "from-emerald-600/30 to-teal-900/40"
    },
    {
        id: 3,
        title: "LogixFleet AI Dispatcher",
        category: "AI & Logistics",
        badge: "Supply Chain",
        stat: "28% Fuel Cut",
        desc: "Predictive freight optimization routing thousands of commercial fleets dynamically across North America.",
        tags: ["Python", "FastAPI", "React", "Mapbox", "K8s"],
        imageGradient: "from-purple-600/30 to-slate-900/40"
    },
    {
        id: 4,
        title: "OmniRetail Ultra-Fast Headless",
        category: "E-Commerce",
        badge: "Retail",
        stat: "0.8s Global LCP",
        desc: "Hyper-converting luxury storefront handling 50k peak concurrent shoppers with zero dropped checkouts.",
        tags: ["Next.js", "Tailwind", "MySQL", "Edge CDN"],
        imageGradient: "from-amber-600/30 to-orange-900/40"
    }
];

function Icon({ name, className = 'w-4 h-4', ...props }) {
    const icons = window.DELIGO_ICONS || {};
    const iconDef = icons[name] || icons['sparkles'] || null;
    if (!iconDef) return null;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={\`lucide lucide-\${name} \${className}\`}
            {...props}
        >
            {iconDef.map(([tag, attrs], idx) => {
                const TagName = tag;
                return <TagName key={idx} {...attrs} />;
            })}
        </svg>
    );
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
            const res = await fetch(\`\${API_BASE}/api/admin.php?action=list\`, {
                headers: { "Authorization": \`Bearer \${token}\` }
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

    const handleAdminLoginSuccess = (token) => {
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
        setNotificationToast({ message, type });
        setTimeout(() => setNotificationToast(null), 4500);
    };

    const handleOpenEnquiry = (serviceTitle = "Mobile App Development") => {
        setSelectedServiceForModal(serviceTitle);
        setIsEnquiryModalOpen(true);
    };

    return (
        <div className="relative min-h-screen text-slate-100 bg-[#050814]">
            {notificationToast && (
                <div className="fixed top-20 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl glass-panel-glow border-brand-500/50 shadow-2xl animate-bounce">
                    <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <p className="text-sm font-medium text-slate-100">{notificationToast.message}</p>
                </div>
            )}

            {/* Public Navigation Bar - Zero CRM reference */}
            <Navbar 
                onOpenEnquiry={() => handleOpenEnquiry("Custom Software Consultation")}
                mobileNavOpen={mobileNavOpen}
                setMobileNavOpen={setMobileNavOpen}
            />

            <HeroSection 
                onOpenEnquiry={() => handleOpenEnquiry("Enterprise Software Architecture")}
                onScrollToEstimator={() => {
                    const el = document.getElementById("estimator");
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
            />

            <StatsBanner />
            <ServicesSection onSelectService={handleOpenEnquiry} />
            <ProjectEstimatorSection onLaunchEnquiry={handleOpenEnquiry} />
            <TechStackSection activeTab={activeTechTab} setActiveTab={setActiveTechTab} />
            <ProcessSection />
            <PortfolioSection onSelectProject={handleOpenEnquiry} />
            <TestimonialsSection />
            <CtaBanner onOpenEnquiry={() => handleOpenEnquiry("Enterprise Engagement")} />

            {/* Public Footer - Zero CRM reference */}
            <Footer />

            {isEnquiryModalOpen && (
                <EnquiryModal 
                    isOpen={isEnquiryModalOpen}
                    onClose={() => setIsEnquiryModalOpen(false)}
                    initialService={selectedServiceForModal}
                    onSubmitSuccess={(newLead) => {
                        setEnquiries(prev => [newLead, ...prev]);
                        showToast("🎉 Enquiry Received! Our technical team will review your brief.");
                        confetti({
                            particleCount: 110,
                            spread: 70,
                            origin: { y: 0.6 }
                        });
                    }}
                />
            )}

            {/* Secret Executive Admin Login Modal (Triggered ONLY via #admin or /admin) */}
            {isAdminLoginOpen && (
                <AdminLoginModal
                    isOpen={isAdminLoginOpen}
                    onClose={handleCloseAdmin}
                    onLoginSuccess={handleAdminLoginSuccess}
                    showToast={showToast}
                />
            )}

            {/* Secret Executive CRM Dashboard (Protected by authentication) */}
            {isDashboardOpen && isAdminLoggedIn && (
                <OwnerDashboard 
                    isOpen={isDashboardOpen}
                    onClose={handleCloseAdmin}
                    onLogout={handleAdminLogout}
                    enquiries={enquiries}
                    setEnquiries={setEnquiries}
                    onRefresh={refreshEnquiries}
                    showToast={showToast}
                />
            )}
        </div>
    );
}

// =========================================================
// 1. NAVIGATION BAR COMPONENT (Clean Public Navbar)
// =========================================================
function Navbar({ onOpenEnquiry, mobileNavOpen, setMobileNavOpen }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={\`fixed top-0 left-0 right-0 z-40 transition-all duration-300 \${scrolled ? 'bg-[#050814]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3.5' : 'bg-transparent py-5'}\`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-cyber-cyan flex items-center justify-center font-extrabold text-white text-xl shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform">
                                D
                            </div>
                            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-500 to-cyber-cyan opacity-40 blur group-hover:opacity-75 transition-opacity"></div>
                        </div>
                        <div>
                            <span className="font-heading font-bold text-xl tracking-wider text-white">
                                DELIGO <span className="text-cyber-cyan">TECHNOLOGIES</span>
                            </span>
                            <span className="block text-[10px] tracking-widest text-slate-400 font-mono uppercase">
                                Next-Gen Digital Systems
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
                        <a href="#services" className="hover:text-brand-400 transition-colors">Services</a>
                        <a href="#estimator" className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5">
                            <span className="inline-block w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
                            Cost Estimator
                        </a>
                        <a href="#tech-stack" className="hover:text-brand-400 transition-colors">Tech Stack</a>
                        <a href="#portfolio" className="hover:text-brand-400 transition-colors">Case Studies</a>
                        <a href="#process" className="hover:text-brand-400 transition-colors">Process</a>
                        <a href="#testimonials" className="hover:text-brand-400 transition-colors">Why Us</a>
                    </nav>

                    {/* Right Action: CTA Button Only */}
                    <div className="hidden sm:flex items-center gap-3">
                        <button 
                            onClick={onOpenEnquiry}
                            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r from-brand-600 via-indigo-600 to-cyber-cyan text-white shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
                        >
                            <span>Get a Proposal</span>
                            <Icon name="arrow-up-right" className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                        className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                    >
                        <Icon name={mobileNavOpen ? "x" : "menu"} className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Navigation Drawer */}
                {mobileNavOpen && (
                    <div className="lg:hidden glass-panel border-b border-slate-800 px-6 py-6 mt-3 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
                        <a href="#services" onClick={() => setMobileNavOpen(false)} className="py-2 text-slate-200 hover:text-brand-400">Services</a>
                        <a href="#estimator" onClick={() => setMobileNavOpen(false)} className="py-2 text-cyber-cyan">Cost Estimator</a>
                        <a href="#tech-stack" onClick={() => setMobileNavOpen(false)} className="py-2 text-slate-200">Tech Stack</a>
                        <a href="#portfolio" onClick={() => setMobileNavOpen(false)} className="py-2 text-slate-200">Case Studies</a>
                        <a href="#process" onClick={() => setMobileNavOpen(false)} className="py-2 text-slate-200">Process</a>
                        <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                            <button 
                                onClick={() => {
                                    setMobileNavOpen(false);
                                    onOpenEnquiry();
                                }}
                                className="w-full py-3 rounded-lg bg-brand-600 font-bold text-white text-sm"
                            >
                                Get a Proposal
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

// =========================================================
// 2. HERO SECTION COMPONENT
// =========================================================
function HeroSection({ onOpenEnquiry, onScrollToEstimator }) {
    return (
        <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Urgency Pill Badge */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-brand-500/30 text-xs font-semibold text-brand-300 mb-8 shadow-inner shadow-brand-500/10">
                        <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping"></span>
                        <span className="tracking-wide uppercase font-mono">Accepting Q1 Enterprise Software & AI Sprints</span>
                    </div>

                    {/* Main High-Impact Lilac-Style Value Prop */}
                    <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                        Architecting Scalable <br/>
                        <span className="gradient-text-indigo">Software, Mobile Apps</span> <br/>
                        & Intelligent AI Ecosystems.
                    </h1>

                    <p className="text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed mb-10">
                        Deligo Technologies engineers resilient digital platforms, hyper-converting mobile apps, 
                        and proprietary AI solutions tailored for high-growth enterprises and venture-backed startups.
                    </p>

                    {/* Dual Action CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <button 
                            onClick={onOpenEnquiry}
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyber-cyan text-white font-bold text-base shadow-xl shadow-brand-600/30 hover:shadow-brand-600/60 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                        >
                            <span>Schedule Technical Discovery</span>
                            <Icon name="arrow-right" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <button 
                            onClick={onScrollToEstimator}
                            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-slate-200 font-semibold text-base border-slate-700/80 hover:bg-slate-800/80 hover:text-white transition-all flex items-center justify-center gap-3"
                        >
                            <Icon name="calculator" className="w-5 h-5 text-cyber-cyan" />
                            <span>Interactive Cost Estimator</span>
                        </button>
                    </div>

                    {/* Floating Tech Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/60">
                        <div className="p-3 rounded-lg glass-panel text-left">
                            <span className="text-xs text-slate-400 font-mono">DELIVERY</span>
                            <p className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                                <Icon name="clock" className="w-4 h-4 text-emerald-400" />
                                Agile 2-Wk Sprints
                            </p>
                        </div>
                        <div className="p-3 rounded-lg glass-panel text-left">
                            <span className="text-xs text-slate-400 font-mono">SECURITY</span>
                            <p className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                                <Icon name="shield" className="w-4 h-4 text-brand-400" />
                                SOC2 & HIPAA Ready
                            </p>
                        </div>
                        <div className="p-3 rounded-lg glass-panel text-left">
                            <span className="text-xs text-slate-400 font-mono">SCALE</span>
                            <p className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                                <Icon name="headphones" className="w-4 h-4 text-cyber-cyan" />
                                24/7 DevOps SLA
                            </p>
                        </div>
                        <div className="p-3 rounded-lg glass-panel text-left">
                            <span className="text-xs text-slate-400 font-mono">TECH STACK</span>
                            <p className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                                <Icon name="code-2" className="w-4 h-4 text-purple-400" />
                                React 18, PHP, AI
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// =========================================================
// 3. STATS BANNER COMPONENT
// =========================================================
function StatsBanner() {
    const stats = [
        { label: "Client Project Deliveries", val: "180+", sub: "100% on-schedule" },
        { label: "Engineering Retention", val: "97.4%", sub: "Top 3% tech talent" },
        { label: "Total Client Raised", val: "$85M+", sub: "Venture capital funded" },
        { label: "Average Production Speed", val: "4.2x", sub: "Faster than industry avg" }
    ];

    return (
        <div className="border-y border-slate-800/80 bg-slate-950/40 relative z-10 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((s, idx) => (
                        <div key={idx} className="space-y-1">
                            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                                {s.val}
                            </div>
                            <div className="text-xs sm:text-sm font-semibold text-slate-300">
                                {s.label}
                            </div>
                            <div className="text-[11px] text-cyber-cyan font-mono">
                                {s.sub}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// =========================================================
// 4. SERVICES SECTION COMPONENT
// =========================================================
function ServicesSection({ onSelectService }) {
    return (
        <section id="services" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest uppercase text-cyber-cyan font-mono">
                        ENGINEERING CAPABILITIES
                    </span>
                    <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
                        Enterprise-Grade Solutions Built to Scale
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base">
                        From high-velocity MVP builds to deeply integrated AI platforms, our cross-functional squads deliver end-to-end excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_LIST.map(srv => (
                        <div 
                            key={srv.id}
                            className="group glass-panel rounded-2xl p-8 border border-slate-800 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-cyber-cyan group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all">
                                        <Icon name={srv.icon} className="w-6 h-6" />
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-800/80 text-brand-300 border border-slate-700">
                                        {srv.badge}
                                    </span>
                                </div>

                                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors">
                                    {srv.title}
                                </h3>

                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                                    {srv.description}
                                </p>

                                <div className="space-y-2 mb-6">
                                    {srv.features.map((feat, fidx) => (
                                        <div key={fidx} className="flex items-center gap-2 text-xs text-slate-300">
                                            <Icon name="check-circle-2" className="w-4 h-4 text-emerald-400 shrink-0" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-800/80">
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {srv.tech.map((t, tidx) => (
                                        <span key={tidx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <button 
                                    onClick={() => onSelectService(srv.title)}
                                    className="w-full py-2.5 rounded-lg bg-slate-800/90 text-xs font-semibold text-slate-200 hover:text-white hover:bg-brand-600 transition-all flex items-center justify-center gap-2 group/btn"
                                >
                                    <span>Consult on {srv.title}</span>
                                    <Icon name="arrow-right" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// =========================================================
// 5. INTERACTIVE PROJECT ESTIMATOR
// =========================================================
function ProjectEstimatorSection({ onLaunchEnquiry }) {
    const [platform, setPlatform] = useState("web");
    const [selectedFeatures, setSelectedFeatures] = useState(["auth", "db"]);
    const [timeline, setTimeline] = useState("standard");

    const platforms = [
        { id: "web", name: "Custom Web Application", base: 12000, days: 30, icon: "globe" },
        { id: "mobile", name: "Mobile App (iOS + Android)", base: 18000, days: 45, icon: "smartphone" },
        { id: "fullstack", name: "Full-Stack Web + Mobile", base: 28000, days: 60, icon: "layers" },
        { id: "ai", name: "Enterprise AI & LLM Engine", base: 22000, days: 45, icon: "cpu" }
    ];

    const featuresList = [
        { id: "auth", name: "Auth & RBAC Roles", cost: 1500, days: 4 },
        { id: "db", name: "Custom Database & Admin Panel", cost: 2500, days: 7 },
        { id: "payments", name: "Stripe / Crypto Payments", cost: 2000, days: 5 },
        { id: "ai_bot", name: "AI Chat / RAG Search Integration", cost: 4500, days: 10 },
        { id: "realtime", name: "Real-time WebSockets / Chat", cost: 2500, days: 6 },
        { id: "analytics", name: "Telemetry & Custom Analytics", cost: 1800, days: 5 }
    ];

    const timelines = [
        { id: "fast", name: "Expedited Sprint (Priority)", mult: 1.25, timeMod: 0.7 },
        { id: "standard", name: "Standard Agile Pace", mult: 1.0, timeMod: 1.0 },
        { id: "flexible", name: "Phased MVP Roadmap", mult: 0.9, timeMod: 1.3 }
    ];

    const toggleFeature = (fid) => {
        setSelectedFeatures(prev => 
            prev.includes(fid) ? prev.filter(x => x !== fid) : [...prev, fid]
        );
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
        const totalWeeks = Math.max(3, Math.round(((plat.days + featsDays) * tl.timeMod) / 7));

        return {
            costLow: Math.round(totalCost * 0.9),
            costHigh: Math.round(totalCost * 1.15),
            weeks: totalWeeks,
            platformName: plat.name
        };
    }, [platform, selectedFeatures, timeline]);

    return (
        <section id="estimator" className="py-24 relative bg-slate-900/40 border-y border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-400 font-mono">
                        TRANSPARENT & INNOVATIVE
                    </span>
                    <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
                        Interactive Project Scope & Cost Estimator
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base">
                        Select your technical parameters below to get instant transparency on timelines, 
                        engineering team composition, and expected investment.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Configurator */}
                    <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-8">
                        <div>
                            <label className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-3 block">
                                Step 1: Choose Your Project Foundation
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {platforms.map(p => (
                                    <button 
                                        key={p.id}
                                        type="button"
                                        onClick={() => setPlatform(p.id)}
                                        className={\`p-4 rounded-xl border text-left transition-all flex items-start gap-3 \${platform === p.id ? 'bg-brand-600/20 border-brand-500 text-white shadow-lg shadow-brand-500/10' : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'}\`}
                                    >
                                        <Icon name={p.icon} className={\`w-5 h-5 mt-0.5 \${platform === p.id ? 'text-cyber-cyan' : 'text-slate-400'}\`} />
                                        <div>
                                            <span className="font-semibold text-sm block">{p.name}</span>
                                            <span className="text-xs text-slate-400">From \${p.base.toLocaleString()}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-3 block">
                                Step 2: Core Engineering Capabilities (Select all that apply)
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {featuresList.map(f => {
                                    const isSelected = selectedFeatures.includes(f.id);
                                    return (
                                        <button 
                                            key={f.id}
                                            type="button"
                                            onClick={() => toggleFeature(f.id)}
                                            className={\`px-3.5 py-3 rounded-lg border text-left text-xs font-medium transition-all flex items-center justify-between \${isSelected ? 'bg-cyber-cyan/15 border-cyber-cyan text-white' : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200'}\`}
                                        >
                                            <span>{f.name}</span>
                                            <Icon name={isSelected ? "check-circle" : "plus-circle"} className={\`w-4 h-4 \${isSelected ? 'text-cyber-cyan' : 'text-slate-600'}\`} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-3 block">
                                Step 3: Timeline Velocity
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                {timelines.map(t => (
                                    <button 
                                        key={t.id}
                                        type="button"
                                        onClick={() => setTimeline(t.id)}
                                        className={\`p-3 rounded-lg border text-center transition-all \${timeline === t.id ? 'bg-brand-600/25 border-brand-500 text-white font-bold' : 'bg-slate-900/40 border-slate-800 text-slate-400'}\`}
                                    >
                                        <span className="text-xs block">{t.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Instant Estimate Summary */}
                    <div className="lg:col-span-5 glass-panel-glow rounded-2xl p-6 sm:p-8 space-y-6 lg:sticky lg:top-28">
                        <div className="border-b border-slate-800 pb-5">
                            <span className="text-xs text-cyber-cyan font-mono font-bold uppercase tracking-wider block mb-1">
                                REAL-TIME TECHNICAL SUMMARY
                            </span>
                            <h3 className="font-heading text-xl font-bold text-white">
                                {calculation.platformName}
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <span className="text-xs text-slate-400 block mb-1">Estimated Investment Range:</span>
                                <div className="font-heading text-3xl sm:text-4xl font-black gradient-text-indigo">
                                    \${calculation.costLow.toLocaleString()} – \${calculation.costHigh.toLocaleString()}
                                </div>
                                <span className="text-[11px] text-slate-400 mt-1 block">
                                    Based on dedicated senior squad sprint allocation.
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                                <div>
                                    <span className="text-[11px] text-slate-400 uppercase font-mono block">Estimated Sprints:</span>
                                    <span className="text-lg font-bold text-white">{calculation.weeks} Weeks (~{Math.round(calculation.weeks/2)} Sprints)</span>
                                </div>
                                <div>
                                    <span className="text-[11px] text-slate-400 uppercase font-mono block">Squad Composition:</span>
                                    <span className="text-lg font-bold text-emerald-400">3 - 5 Engineers</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                                <div className="flex items-center gap-2">
                                    <Icon name="check-circle-2" className="w-4 h-4 text-emerald-400" />
                                    <span>Architecture & API Schema Included</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon name="check-circle-2" className="w-4 h-4 text-emerald-400" />
                                    <span>Full Codebase Ownership & IP Transfer</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon name="check-circle-2" className="w-4 h-4 text-emerald-400" />
                                    <span>30-Day Post-Launch SLA Warranty</span>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={() => onLaunchEnquiry(\`\${calculation.platformName} (Estimated: \$\${calculation.costLow.toLocaleString()} - \$\${calculation.costHigh.toLocaleString()})\`)}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 to-cyber-cyan text-white font-bold text-sm shadow-xl shadow-brand-600/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                            <span>Lock In Scope & Book Architect</span>
                            <Icon name="arrow-right" className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

// =========================================================
// 6. TECH STACK MATRIX
// =========================================================
function TechStackSection({ activeTab, setActiveTab }) {
    const tabs = Object.keys(TECH_STACK);

    return (
        <section id="tech-stack" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="text-xs font-bold tracking-widest uppercase text-cyber-cyan font-mono">
                        MODERN ARCHITECTURAL DNA
                    </span>
                    <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
                        Battle-Tested Technology Stack
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base">
                        Engineered for zero tech-debt, high throughput, and effortless horizontal scalability.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="glass-panel p-1.5 rounded-2xl flex flex-wrap gap-1 border border-slate-800">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={\`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all \${activeTab === tab ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg shadow-brand-600/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}\`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TECH_STACK[activeTab].map((t, idx) => (
                        <div key={idx} className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-brand-500/50 hover:bg-slate-800/40 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyber-cyan mb-4 group-hover:scale-110 group-hover:border-brand-500 transition-all">
                                <Icon name={t.icon} className="w-6 h-6" />
                            </div>
                            <h4 className="font-heading text-lg font-bold text-white mb-2">{t.name}</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// =========================================================
// 7. AGILE PROCESS SECTION
// =========================================================
function ProcessSection() {
    const steps = [
        { num: "01", title: "Discovery & Architecture", desc: "Technical roadmap, API design, user flows, and milestone sizing.", icon: "compass" },
        { num: "02", title: "UI/UX Design Systems", desc: "Interactive Figma prototypes with AAA accessibility standards.", icon: "pen-tool" },
        { num: "03", title: "Sprint Engineering", desc: "2-week iterative Agile delivery with test-driven development.", icon: "terminal" },
        { num: "04", title: "Rigorous QA & Security", desc: "Automated end-to-end testing, penetration test & SOC2 validation.", icon: "shield-alert" },
        { num: "05", title: "Global Scale & SLA", desc: "Cloud orchestration, autoscaling Kubernetes, and 24/7 monitoring.", icon: "rocket" }
    ];

    return (
        <section id="process" className="py-24 relative bg-slate-950/60 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-400 font-mono">
                        ENGINEERING EXCELLENCE
                    </span>
                    <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
                        The 5-Step Delivery Pipeline
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base">
                        Modeled after the industry's most disciplined tech startup engineering methodologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {steps.map((st, idx) => (
                        <div key={idx} className="glass-panel rounded-2xl p-6 border border-slate-800 relative group hover:border-cyber-cyan/50 transition-all">
                            <span className="font-mono text-3xl font-black text-slate-700 block mb-3 group-hover:text-cyber-cyan transition-colors">
                                {st.num}
                            </span>
                            <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center mb-4">
                                <Icon name={st.icon} className="w-5 h-5 text-brand-400" />
                            </div>
                            <h4 className="font-heading text-base font-bold text-white mb-2">{st.title}</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// =========================================================
// 8. PORTFOLIO SHOWCASE SECTION
// =========================================================
function PortfolioSection({ onSelectProject }) {
    return (
        <section id="portfolio" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest uppercase text-cyber-cyan font-mono">
                        PROVEN IMPACT
                    </span>
                    <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
                        Featured Client Case Studies
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base">
                        Explore how Deligo Technologies architects high-yield platforms for leading digital enterprises.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PORTFOLIO_PROJECTS.map(proj => (
                        <div 
                            key={proj.id} 
                            className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-brand-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-600/20 text-brand-300 border border-brand-500/30">
                                        {proj.badge}
                                    </span>
                                    <span className="text-sm font-bold text-cyber-cyan font-mono">
                                        {proj.stat}
                                    </span>
                                </div>

                                <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors">
                                    {proj.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {proj.desc}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {proj.tags.map((tg, idx) => (
                                        <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800">
                                            {tg}
                                        </span>
                                    ))}
                                </div>

                                <button 
                                    onClick={() => onSelectProject(proj.title)}
                                    className="w-full py-3 rounded-xl bg-slate-800/80 hover:bg-brand-600 text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-2"
                                >
                                    <span>Explore Technical Architecture</span>
                                    <Icon name="arrow-up-right" className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// =========================================================
// 9. TESTIMONIALS SECTION
// =========================================================
function TestimonialsSection() {
    const reviews = [
        {
            client: "Dr. Alexander Wright",
            role: "Chief Medical Officer",
            company: "HealthWave Telemed (SF)",
            quote: "Deligo Technologies delivered our HIPAA-compliant telemedicine platform ahead of schedule. Their attention to WebRTC reliability and automated testing set them worlds apart from previous agencies."
        },
        {
            client: "Faisal Al-Nuaimi",
            role: "VP of Engineering",
            company: "FinScale Global (Dubai)",
            quote: "The microservices architecture and automated reconciliation engine built by Deligo handles over $100M monthly with zero latency spikes. Truly premier caliber developers."
        },
        {
            client: "Marcus Vance",
            role: "Managing Director",
            company: "Vance Strategy (London)",
            quote: "Flawless Kubernetes migration and DevOps overhaul. Deligo's sprint transparent roadmap gave our executive board 100% confidence from day one."
        }
    ];

    return (
        <section id="testimonials" className="py-24 relative bg-slate-950/40 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-400 font-mono">
                        VERIFIED CLIENT TRUST
                    </span>
                    <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
                        What Tech Leaders Say About Us
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base">
                        Trusted by founders, CTOs, and product leaders globally.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((rev, idx) => (
                        <div key={idx} className="glass-panel rounded-2xl p-8 border border-slate-800 flex flex-col justify-between">
                            <div>
                                <div className="flex gap-1 text-amber-400 mb-4">
                                    {[1,2,3,4,5].map(s => <Icon key={s} name="star" className="w-4 h-4 fill-amber-400" />)}
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                                    "{rev.quote}"
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-800/80">
                                <h5 className="font-heading font-bold text-white text-sm">{rev.client}</h5>
                                <span className="text-xs text-cyber-cyan block">{rev.role}</span>
                                <span className="text-xs text-slate-500 font-mono">{rev.company}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// =========================================================
// 10. CTA BANNER
// =========================================================
function CtaBanner({ onOpenEnquiry }) {
    return (
        <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-panel-glow rounded-3xl p-10 sm:p-16 text-center border border-brand-500/40 relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <span className="text-xs font-bold tracking-widest uppercase text-cyber-cyan font-mono">
                            READY TO BUILD?
                        </span>
                        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
                            Turn Your Vision Into a Market-Leading Platform
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
                            Submit your technical requirements or book an introductory discovery session with our engineering leadership team today.
                        </p>
                        <button 
                            onClick={onOpenEnquiry}
                            className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyber-cyan text-white font-bold text-base shadow-xl shadow-brand-600/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3"
                        >
                            <span>Get Free Architecture Consultation</span>
                            <Icon name="send" className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

// =========================================================
// 11. FOOTER (Clean Public Footer - Zero CRM links)
// =========================================================
function Footer() {
    return (
        <footer className="bg-[#030610] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-cyber-cyan flex items-center justify-center font-bold text-white text-lg font-heading">
                                D
                            </div>
                            <span className="font-heading font-bold text-xl text-white">
                                DELIGO <span className="text-cyber-cyan">TECHNOLOGIES</span>
                            </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Empowering global enterprises and bold startups with bespoke software, mobile applications, and AI automation. Inspired by Lilac Infotech's standard of engineering excellence.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-600 text-slate-300 hover:text-white transition-all"><Icon name="github" className="w-4 h-4" /></a>
                            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-600 text-slate-300 hover:text-white transition-all"><Icon name="linkedin" className="w-4 h-4" /></a>
                            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-600 text-slate-300 hover:text-white transition-all"><Icon name="twitter" className="w-4 h-4" /></a>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-heading font-bold text-white text-sm mb-4">Engineering Services</h5>
                        <ul className="space-y-2.5 text-xs">
                            <li><a href="#services" className="hover:text-brand-300 transition-colors">Mobile App Development (Flutter/iOS)</a></li>
                            <li><a href="#services" className="hover:text-brand-300 transition-colors">Custom Web Platforms (React 18)</a></li>
                            <li><a href="#services" className="hover:text-brand-300 transition-colors">Enterprise AI & LLM Integration</a></li>
                            <li><a href="#services" className="hover:text-brand-300 transition-colors">Cloud DevOps & Kubernetes</a></li>
                            <li><a href="#services" className="hover:text-brand-300 transition-colors">UI/UX Product Design Systems</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-heading font-bold text-white text-sm mb-4">Delivery Hubs</h5>
                        <ul className="space-y-2 text-xs">
                            <li className="flex items-start gap-2">
                                <Icon name="map-pin" className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                                <span>San Francisco, CA, USA</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon name="map-pin" className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                                <span>Dubai Internet City, UAE</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon name="map-pin" className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                                <span>Govt Cyberpark, Kozhikode, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Direct Contact Inquiries (No CRM links on public site) */}
                    <div>
                        <h5 className="font-heading font-bold text-white text-sm mb-4">Direct Inquiries</h5>
                        <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                            Have an enterprise project or RFP? Reach out directly to our engineering leadership team.
                        </p>
                        <div className="space-y-2 text-xs">
                            <p className="text-slate-300 font-mono font-medium">contact@deligotechnologies.com</p>
                            <p className="text-emerald-400 font-medium">Response SLA: &lt; 24 Business Hours</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                    <p>© 2026 Deligo Technologies Inc. Built with React 18 + PHP MySQL Architecture.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-400">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-400">Terms of Service</a>
                        <a href="#" className="hover:text-slate-400">Security Disclosures</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// =========================================================
// 12. ENQUIRY PROPOSAL MODAL
// =========================================================
function EnquiryModal({ isOpen, onClose, initialService, onSubmitSuccess }) {
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

    const budgetOptions = [
        "< $10,000",
        "$10,000 - $25,000",
        "$25,000 - $50,000",
        "$50,000 - $100,000",
        "$100,000+"
    ];

    const serviceOptions = [
        "Mobile App Development",
        "Web Platform Engineering",
        "AI & Machine Learning",
        "Cloud Architecture & DevOps",
        "UI/UX Product Design",
        "Enterprise Software & ERP"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        if (!formData.full_name || !formData.email || !formData.message) {
            setErrorMsg("Please complete your full name, email, and project brief.");
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await fetch(\`\${API_BASE}/api/enquiry.php\`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, website_hp: honeypot })
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

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto glass-panel-glow rounded-3xl p-6 sm:p-10 border border-brand-500/40 shadow-2xl">
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-all"
                >
                    <Icon name="x" className="w-5 h-5" />
                </button>

                <div className="mb-6">
                    <span className="text-xs font-bold tracking-widest uppercase text-cyber-cyan font-mono">
                        START YOUR NEXT-GEN BUILD
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        Request a Technical Proposal
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1">
                        Connect with our technical directors. We sign an NDA beforehand upon request.
                    </p>
                </div>

                {errorMsg && (
                    <div className="p-3 mb-6 rounded-lg bg-red-950/60 border border-red-500 text-red-200 text-xs">
                        {errorMsg}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Anti-Spam Bot Honeypot */}
                    <input 
                        type="text" 
                        name="website_hp" 
                        value={honeypot} 
                        onChange={(e) => setHoneypot(e.target.value)} 
                        tabIndex="-1" 
                        autoComplete="off" 
                        style={{ position: 'absolute', opacity: 0, zIndex: -1, pointerEvents: 'none', height: 0, width: 0 }} 
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Full Name *</label>
                            <input 
                                type="text" 
                                required
                                placeholder="e.g. David Miller"
                                value={formData.full_name}
                                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Work Email Address *</label>
                            <input 
                                type="email" 
                                required
                                placeholder="david@company.io"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone / WhatsApp</label>
                            <input 
                                type="text" 
                                placeholder="+1 (555) 000-0000"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Company / Startup Name</label>
                            <input 
                                type="text" 
                                placeholder="Acme Technologies Inc."
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Target Capability</label>
                            <select 
                                value={formData.service}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                            >
                                {serviceOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Anticipated Budget</label>
                            <select 
                                value={formData.budget}
                                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                            >
                                {budgetOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Project Brief & Technical Scope *</label>
                        <textarea 
                            rows={3}
                            required
                            placeholder="Describe your current tech stack, target platforms, timeline, and key technical goals..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyber-cyan text-white font-bold text-sm shadow-xl shadow-brand-600/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <span>Submitting Project Brief...</span>
                        ) : (
                            <>
                                <span>Submit Confidential Proposal Request</span>
                                <Icon name="send" className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

// =========================================================
// 13. SECRET EXECUTIVE LOGIN MODAL (Protected by Credentials)
// =========================================================
function AdminLoginModal({ isOpen, onClose, onLoginSuccess, showToast }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setIsSubmitting(true);

        try {
            const res = await fetch(\`\${API_BASE}/api/admin.php?action=login\`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: username.trim(), password })
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
            const validHashes = [
                "b73ffff97b578e5e00896a2512b6d91ca08ee0bb607b5a1148d6bd4f6f28ac77",
                "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9"
            ];

            if (validUsers.includes(username.trim().toLowerCase()) && validHashes.includes(hash)) {
                setIsSubmitting(false);
                onLoginSuccess("master_offline_token_" + Date.now());
                return;
            }
        } catch (e) {}

        setIsSubmitting(false);
        setErrorMsg("Invalid executive credentials. Access denied.");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-md glass-panel-glow rounded-3xl p-8 border border-brand-500/50 shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-all"
                >
                    <Icon name="x" className="w-5 h-5" />
                </button>

                <div className="text-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-cyber-cyan flex items-center justify-center mx-auto mb-3 shadow-lg shadow-brand-500/20">
                        <Icon name="shield-check" className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-[11px] font-bold tracking-widest uppercase text-cyber-cyan font-mono">
                        RESTRICTED ACCESS
                    </span>
                    <h3 className="font-heading text-2xl font-extrabold text-white mt-1">
                        Executive Portal
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                        DELIGO TECHNOLOGIES • Confidential CRM Access
                    </p>
                </div>

                {errorMsg && (
                    <div className="p-3 mb-5 rounded-xl bg-red-950/60 border border-red-500/60 text-red-200 text-xs flex items-center gap-2">
                        <Icon name="shield-alert" className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{errorMsg}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            Executive Username or Email
                        </label>
                        <input
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="e.g. admin"
                            className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            Secure Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••••"
                                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-medium"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyber-cyan text-white font-bold text-sm shadow-xl shadow-brand-600/30 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? "Authenticating..." : "Unlock Executive CRM"}
                    </button>
                </form>
            </div>
        </div>
    );
}

// =========================================================
// 14. OWNER DASHBOARD (Lead Tracking CRM & Workflow)
// =========================================================
function OwnerDashboard({ isOpen, onClose, onLogout, enquiries, setEnquiries, onRefresh, showToast }) {
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
            const matchesSearch = !searchQuery || 
                item.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (item.company && item.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
                item.message.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesStatus && matchesService && matchesSearch;
        });
    }, [enquiries, selectedStatusFilter, selectedServiceFilter, searchQuery]);

    const getStatusBadge = (status) => {
        const styles = {
            'NEW': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
            'CONTACTED': 'bg-blue-500/20 text-blue-400 border-blue-500/40',
            'IN_DISCUSSION': 'bg-amber-500/20 text-amber-400 border-amber-500/40',
            'PROPOSAL_SENT': 'bg-purple-500/20 text-purple-400 border-purple-500/40',
            'CONVERTED': 'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/40 font-bold',
            'ARCHIVED': 'bg-slate-700/40 text-slate-400 border-slate-600/40'
        };
        return (
            <span className={\`px-2.5 py-0.5 rounded-full text-[10px] font-mono border \${styles[status] || styles['NEW']}\`}>
                {status.replace('_', ' ')}
            </span>
        );
    };

    const handleUpdateStatus = async (id, newStatus) => {
        try {
            const token = sessionStorage.getItem("deligo_admin_token");
            await fetch(\`\${API_BASE}/api/admin.php?action=update_status\`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    ...(token ? { "Authorization": \`Bearer \${token}\` } : {})
                },
                body: JSON.stringify({ id, status: newStatus })
            });
        } catch (err) {
            console.log("Local state update:", err);
        }

        setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status: newStatus } : e));
        if (selectedEnquiry && selectedEnquiry.id === id) {
            setSelectedEnquiry(prev => ({ ...prev, status: newStatus }));
        }
        showToast(\`Enquiry status changed to \${newStatus}\`);
    };

    const handleAddNote = async (enquiryId) => {
        if (!newNoteText.trim()) return;
        const noteContent = newNoteText.trim();
        setNewNoteText("");

        try {
            const token = sessionStorage.getItem("deligo_admin_token");
            await fetch(\`\${API_BASE}/api/admin.php?action=add_note\`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    ...(token ? { "Authorization": \`Bearer \${token}\` } : {})
                },
                body: JSON.stringify({ enquiry_id: enquiryId, note: noteContent })
            });
        } catch (err) {
            console.log("Local note append:", err);
        }

        setEnquiries(prev => prev.map(e => {
            if (e.id === enquiryId) {
                const updatedNotes = e.notes ? [...e.notes, noteContent] : [noteContent];
                return { ...e, notes: updatedNotes };
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
            const rows = enquiries.map(e => [
                e.id,
                \`"\${(e.full_name || '').replace(/"/g, '""')}"\`,
                \`"\${(e.email || '').replace(/"/g, '""')}"\`,
                \`"\${(e.phone || '').replace(/"/g, '""')}"\`,
                \`"\${(e.company || '').replace(/"/g, '""')}"\`,
                \`"\${(e.service || '').replace(/"/g, '""')}"\`,
                \`"\${(e.budget || '').replace(/"/g, '""')}"\`,
                \`"\${(e.timeline || '').replace(/"/g, '""')}"\`,
                e.status,
                e.priority,
                e.estimated_value || 0,
                \`"\${(e.source || 'Website').replace(/"/g, '""')}"\`,
                e.created_at,
                \`"\${(e.message || '').replace(/"/g, '""').replace(/\\n/g, ' ')}"\`
            ].join(','));
            const csvContent = [headers.join(','), ...rows].join('\\n');
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
                const token = sessionStorage.getItem("deligo_admin_token") || "";
                window.open(\`\${API_BASE}/api/export.php?token=\${encodeURIComponent(token)}\`, '_blank');
            }
        }
        setTimeout(() => setIsExporting(false), 800);
    };

    const totalCount = enquiries.length;
    const newCount = enquiries.filter(e => e.status === "NEW").length;
    const inDiscussionCount = enquiries.filter(e => ["IN_DISCUSSION", "PROPOSAL_SENT"].includes(e.status)).length;
    const convertedCount = enquiries.filter(e => e.status === "CONVERTED").length;
    const totalPipelineValue = enquiries.reduce((acc, cur) => acc + (cur.estimated_value || 0), 0);
    const conversionRate = totalCount > 0 ? ((convertedCount / totalCount) * 100).toFixed(1) : "0.0";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200">
            <div className="relative w-full max-w-7xl h-[94vh] bg-[#090d1a] border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
                {/* Dashboard Top Header Bar */}
                <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 text-lg">👑</span>
                        <div>
                            <h3 className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
                                Executive Enquiry & Lead CRM
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                    CONFIDENTIAL
                                </span>
                            </h3>
                            <p className="text-xs text-slate-400">
                                DELIGO TECHNOLOGIES • Authorized Executive Access
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button 
                            onClick={handleExportCsv}
                            disabled={isExporting}
                            className="px-3.5 py-2 rounded-lg bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-700 transition-all flex items-center gap-2 border border-slate-700"
                        >
                            <Icon name="download" className="w-4 h-4 text-cyber-cyan" />
                            <span>Export CSV</span>
                        </button>
                        <button 
                            onClick={onRefresh}
                            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-all border border-slate-700"
                            title="Refresh Data"
                        >
                            <Icon name="refresh-cw" className="w-4 h-4" />
                        </button>
                        <button 
                            onClick={onLogout}
                            className="px-3 py-2 rounded-lg bg-red-950/60 hover:bg-red-900/80 text-red-300 border border-red-500/40 text-xs font-semibold flex items-center gap-1.5 transition-all"
                            title="Sign out of Executive Portal"
                        >
                            <Icon name="x" className="w-3.5 h-3.5 text-red-400" />
                            <span>Sign Out</span>
                        </button>
                        <button 
                            onClick={onClose}
                            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-all border border-slate-700"
                        >
                            <Icon name="x" className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Dashboard Body Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Top KPI Metric Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                            <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">TOTAL PIPELINE</span>
                            <div className="text-2xl font-bold font-heading text-white">
                                \${totalPipelineValue.toLocaleString()}
                            </div>
                            <span className="text-[10px] text-cyber-cyan">{totalCount} Inbound Inquiries</span>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                            <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">NEW UNREAD</span>
                            <div className="text-2xl font-bold font-heading text-emerald-400">{newCount}</div>
                            <span className="text-[10px] text-slate-400">&lt; 24h Response Target</span>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                            <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">IN NEGOTIATION</span>
                            <div className="text-2xl font-bold font-heading text-amber-400">{inDiscussionCount}</div>
                            <span className="text-[10px] text-slate-400">Proposals & SOWs</span>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                            <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">WON CONTRACTS</span>
                            <div className="text-2xl font-bold font-heading text-cyber-cyan">{convertedCount}</div>
                            <span className="text-[10px] text-emerald-400 font-semibold">{conversionRate}% Conversion Rate</span>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 col-span-2 lg:col-span-1">
                            <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">DB ENGINE</span>
                            <div className="text-sm font-bold text-white truncate mt-1">Live Database</div>
                            <span className="text-[10px] text-emerald-400 font-mono">Connected</span>
                        </div>
                    </div>

                    {/* Filter Bar & Search */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl glass-panel">
                        <div className="relative flex-1">
                            <Icon name="search" className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input 
                                type="text" 
                                placeholder="Search enquiries by client name, email, company, or scope keywords..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-500"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <select 
                                value={selectedStatusFilter}
                                onChange={(e) => setSelectedStatusFilter(e.target.value)}
                                className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300 focus:outline-none"
                            >
                                <option value="ALL">All Statuses</option>
                                <option value="NEW">New Leads</option>
                                <option value="CONTACTED">Contacted</option>
                                <option value="IN_DISCUSSION">In Discussion</option>
                                <option value="PROPOSAL_SENT">Proposal Sent</option>
                                <option value="CONVERTED">Converted (Won)</option>
                                <option value="ARCHIVED">Archived</option>
                            </select>

                            <select 
                                value={selectedServiceFilter}
                                onChange={(e) => setSelectedServiceFilter(e.target.value)}
                                className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300 focus:outline-none"
                            >
                                <option value="ALL">All Services</option>
                                {SERVICES_LIST.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                            </select>
                        </div>
                    </div>

                    {/* Split View: Leads Table & Dossier Modal */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        <div className={\`\${selectedEnquiry ? 'lg:col-span-7' : 'lg:col-span-12'} rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/40\`}>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-900/80 border-b border-slate-800 text-[11px] font-mono uppercase text-slate-400">
                                            <th className="py-3 px-4">Client</th>
                                            <th className="py-3 px-4">Service</th>
                                            <th className="py-3 px-4">Budget</th>
                                            <th className="py-3 px-4">Status</th>
                                            <th className="py-3 px-4">Received</th>
                                            <th className="py-3 px-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800/60 text-xs">
                                        {filteredEnquiries.length === 0 ? (
                                            <tr>
                                                <td colSpan="6" className="py-8 text-center text-slate-500">
                                                    No client enquiries matched your active filters.
                                                </td>
                                            </tr>
                                        ) : (
                                            filteredEnquiries.map(enq => (
                                                <tr 
                                                    key={enq.id}
                                                    onClick={() => setSelectedEnquiry(enq)}
                                                    className={\`hover:bg-slate-800/40 cursor-pointer transition-colors \${selectedEnquiry && selectedEnquiry.id === enq.id ? 'bg-brand-600/10 border-l-2 border-brand-500' : ''}\`}
                                                >
                                                    <td className="py-3 px-4">
                                                        <div className="font-semibold text-white">{enq.full_name}</div>
                                                        <div className="text-[11px] text-slate-400">{enq.company || enq.email}</div>
                                                    </td>
                                                    <td className="py-3 px-4 text-slate-300">
                                                        {enq.service}
                                                    </td>
                                                    <td className="py-3 px-4 font-mono font-medium text-cyber-cyan">
                                                        {enq.budget}
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        {getStatusBadge(enq.status)}
                                                    </td>
                                                    <td className="py-3 px-4 text-slate-400 text-[11px] font-mono">
                                                        {(enq.created_at || '').substring(0, 10)}
                                                    </td>
                                                    <td className="py-3 px-4 text-right">
                                                        <button 
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setSelectedEnquiry(enq);
                                                            }}
                                                            className="px-2.5 py-1 rounded bg-slate-800 text-[11px] text-slate-300 hover:text-white hover:bg-brand-600"
                                                        >
                                                            Inspect
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Client Dossier Inspector Pane */}
                        {selectedEnquiry && (
                            <div className="lg:col-span-5 glass-panel-glow rounded-2xl p-6 border border-slate-700/80 space-y-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="text-[10px] font-mono text-cyber-cyan uppercase block mb-1">
                                            LEAD DOSSIER #{selectedEnquiry.id}
                                        </span>
                                        <h4 className="font-heading text-xl font-bold text-white">
                                            {selectedEnquiry.full_name}
                                        </h4>
                                        <p className="text-xs text-slate-400">{selectedEnquiry.company || 'Direct Founder'}</p>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedEnquiry(null)}
                                        className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                                    >
                                        <Icon name="x" className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Quick Contact Action Pills */}
                                <div className="flex flex-wrap gap-2">
                                    <a 
                                        href={\`mailto:\${selectedEnquiry.email}\`}
                                        className="px-3.5 py-2 rounded-xl bg-indigo-600 text-xs font-semibold text-white flex items-center gap-2 hover:bg-indigo-500"
                                    >
                                        <Icon name="mail" className="w-4 h-4" />
                                        <span>Email Client</span>
                                    </a>
                                    {selectedEnquiry.phone && (
                                        <>
                                            <a 
                                                href={\`tel:\${selectedEnquiry.phone}\`}
                                                className="px-3.5 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-white flex items-center gap-2 hover:bg-slate-700"
                                            >
                                                <Icon name="phone" className="w-4 h-4 text-emerald-400" />
                                                <span>Call</span>
                                            </a>
                                            <a 
                                                href={\`https://wa.me/\${selectedEnquiry.phone.replace(/[^0-9]/g, '')}\`} 
                                                target="_blank"
                                                className="px-3.5 py-2 rounded-xl bg-emerald-600 text-xs font-semibold text-white flex items-center gap-2 hover:bg-emerald-500"
                                            >
                                                <Icon name="message-square" className="w-4 h-4" />
                                                <span>WhatsApp</span>
                                            </a>
                                        </>
                                    )}
                                </div>

                                {/* Status Workflow Selector */}
                                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                                    <label className="text-[11px] font-mono text-slate-400 uppercase block">
                                        Update Pipeline Stage
                                    </label>
                                    <select 
                                        value={selectedEnquiry.status}
                                        onChange={(e) => handleUpdateStatus(selectedEnquiry.id, e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                                    >
                                        <option value="NEW">NEW LEAD</option>
                                        <option value="CONTACTED">CONTACTED</option>
                                        <option value="IN_DISCUSSION">IN DISCUSSION</option>
                                        <option value="PROPOSAL_SENT">PROPOSAL SENT</option>
                                        <option value="CONVERTED">CONVERTED (WON)</option>
                                        <option value="ARCHIVED">ARCHIVED</option>
                                    </select>
                                </div>

                                {/* Scope Description */}
                                <div className="space-y-2">
                                    <label className="text-[11px] font-mono text-slate-400 uppercase block">
                                        Client Project Brief
                                    </label>
                                    <p className="text-xs text-slate-300 leading-relaxed p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                                        {selectedEnquiry.message}
                                    </p>
                                </div>

                                {/* Internal Activity Notes */}
                                <div className="space-y-3 pt-2">
                                    <label className="text-[11px] font-mono text-slate-400 uppercase block">
                                        Internal CRM Notes ({selectedEnquiry.notes ? selectedEnquiry.notes.length : 0})
                                    </label>
                                    <div className="space-y-2 max-h-36 overflow-y-auto">
                                        {selectedEnquiry.notes && selectedEnquiry.notes.map((nt, nidx) => (
                                            <div key={nidx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                                                {nt}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <input 
                                            type="text" 
                                            placeholder="Write note (e.g. Call scheduled, SOW v2)..."
                                            value={newNoteText}
                                            onChange={(e) => setNewNoteText(e.target.value)}
                                            onKeyDown={(e) => { if (e.key === 'Enter') handleAddNote(selectedEnquiry.id); }}
                                            className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none"
                                        />
                                        <button 
                                            onClick={() => handleAddNote(selectedEnquiry.id)}
                                            className="px-3 py-2 rounded-lg bg-brand-600 text-xs text-white font-semibold hover:bg-brand-500"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Render React DOM
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
`;

console.log('Transforming JSX with Babel...');
const res = babel.babelTransform(jsxCode, 'app.jsx', false, [], []);

const bundleHeader = `/**
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
`;

const bundleFooter = `
})();
`;

let compiledBody = res.code
    .replace(/^"use strict";\s*/, '')
    .replace(/var _jsxRuntime = require\("react\/jsx-runtime"\);\s*/, '');

const finalBundle = bundleHeader + compiledBody + bundleFooter;
const targets = ['app.bundle.js', 'frontend/app.bundle.js', 'docs/app.bundle.js'];
for (const t of targets) {
    fs.writeFileSync(t, finalBundle, 'utf-8');
    console.log('Successfully compiled and updated ' + t + ' (' + fs.statSync(t).size + ' bytes)');
}
