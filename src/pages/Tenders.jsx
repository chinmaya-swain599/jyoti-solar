import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFileDownload, 
  FaChevronDown, 
  FaCheckCircle, 
  FaBriefcase, 
  FaCalendarAlt, 
  FaTag, 
  FaSearch, 
  FaMapMarkerAlt, 
  FaUserCheck, 
  FaClock, 
  FaCheck, 
  FaExclamationTriangle, 
  FaEnvelope, 
  FaUpload, 
  FaBuilding, 
  FaRegFileAlt, 
  FaInfoCircle, 
  FaFileSignature,
  FaTimes,
  FaRedo
} from 'react-icons/fa';
import { MdOutlineHowToVote, MdNotificationsActive, MdTrendingUp, MdClose, MdCloudUpload } from 'react-icons/md';

// Live Ticker Announcements Data
const ANNOUNCEMENTS = [
  '⚡ [Extension] Bid submission deadline for Rajasthan Mega Park (TND-2026-002) is extended to 12 Nov 2026.',
  '📋 [Clarification] Pre-bid query responses released for Central Inverters Procurement (TND-2026-003). Download revised Annexure B.',
  '🏆 [Update] Technical evaluation completed for Odisha Secretariat 10 MW Project (TND-2026-001). Price bids opening on 25 Oct.',
  '💡 [Notice] Pre-bid query meeting for Charanka 100 MW (TND-2026-004) scheduled on 10 Aug 2026 via Zoom. Register now.',
];

const SECTORS = ['All', 'Government', 'Utility', 'Industrial', 'O&M'];
const STATUSES = ['All', 'Open', 'Upcoming', 'Closed'];

const TENDERS = [
  {
    id: 'TND-2026-001',
    title: 'Supply, Installation & Commissioning of 10 MW Ground-Mounted Solar Plant',
    subtitle: 'Government Secretariat Complex, Odisha',
    deadline: '15 Oct 2026',
    status: 'Open',
    type: 'Government',
    value: '₹42 Cr',
    location: 'Bhubaneswar, Odisha',
    description: 'EPC contract for a high-efficiency ground-mounted solar photovoltaic system with advanced grid-synchronization and smart SCADA monitoring systems for the Government Secretariat Complex.',
    scope: [
      'Design, engineering, procurement, and testing of 10 MW solar array.',
      'Civil works including leveling, piling, and structure erection.',
      'Installation of high-efficiency Mono PERC half-cut modules (540Wp+).',
      'Integration of smart inverter stations and 33kV outdoor switchyard.',
      'Comprehensive grid interfacing and net-metering approvals.',
      'Comprehensive Operations & Maintenance (O&M) for 5 years post-commissioning.'
    ],
    timeline: {
      published: '05 Jun 2026',
      preBid: '25 Jun 2026',
      submission: '15 Oct 2026',
      techOpening: '18 Oct 2026',
      financialOpening: '25 Oct 2026'
    },
    documents: [
      'Pre-Qualification Bid Document (Envelope-I)',
      'Technical Bid Proposal & Capacity Certificates (Envelope-II)',
      'Financial Price Bid Schedule / BOQ (Envelope-III)',
      'Earnest Money Deposit (EMD) Guarantee'
    ],
    contact: {
      name: 'Dr. Alok Mohanty',
      role: 'Chief Procurement Officer',
      email: 'a.mohanty@jyotisolar.com'
    },
    docSize: '12.4 MB'
  },
  {
    id: 'TND-2026-002',
    title: 'Civil & Structural Works for Rajasthan Ultra Mega Solar Park Phase II (50 MW)',
    subtitle: 'Grid Infrastructure and Erection Works',
    deadline: '02 Nov 2026',
    status: 'Open',
    type: 'Utility',
    value: '₹18 Cr',
    location: 'Bhadla, Rajasthan',
    description: 'Execution of complete civil works, module mounting structure foundations, inverter room construction, boundary fencing, and cable trenching for the 50 MW phase II Expansion.',
    scope: [
      'Site grading, clearing, and internal road development.',
      'Rammed pile foundations for module mounting structures (MMS).',
      'Erection of hot-dip galvanized steel MMS structures.',
      'Construction of pre-engineered inverter rooms and control rooms.',
      'Trenching, laying, and backfilling for DC/AC power cables.',
      'Peripheral security system, fencing, and watchtower installations.'
    ],
    timeline: {
      published: '08 Jun 2026',
      preBid: '05 Jul 2026',
      submission: '02 Nov 2026',
      techOpening: '05 Nov 2026',
      financialOpening: '12 Nov 2026'
    },
    documents: [
      'Technical Bid Proposal (Section-A)',
      'Civil Capacity Certifications & Past Projects (Section-B)',
      'Price Bid Document (BOQ Format)',
      'Performance Bank Guarantee Draft'
    ],
    contact: {
      name: 'Vikram Singh Shekhawat',
      role: 'Director - Projects (Western Zone)',
      email: 'v.singh@jyotisolar.com'
    },
    docSize: '8.8 MB'
  },
  {
    id: 'TND-2026-003',
    title: 'Procurement of Central String Inverters for Odisha Industrial Solar Project',
    subtitle: 'High-Capacity Outdoor Inverters Supply',
    deadline: '30 Sep 2026',
    status: 'Closed',
    type: 'Industrial',
    value: '₹9 Cr',
    location: 'Angul, Odisha',
    description: 'Global invitation for supply, commissioning assistance, and warranty support of outdoor central/string inverters rated at 3.125 MW, 1500V DC operating capability.',
    scope: [
      'Supply of 16 units of 3.125 MW 1500V DC smart central/string inverters.',
      'Factory acceptance testing (FAT) witness arrangements.',
      'Transportation to site with transit insurance.',
      'Supervision of commissioning and integration testing.',
      'Supply of critical spares and maintenance kits for 5 years.',
      'Comprehensive product warranty and SLA contract.'
    ],
    timeline: {
      published: '01 May 2026',
      preBid: '20 May 2026',
      submission: '30 Sep 2026',
      techOpening: '03 Oct 2026',
      financialOpening: '10 Oct 2026'
    },
    documents: [
      'Inverter Technical Datasheets & Compliance Matrix',
      'OEM Certification and Warranty Authorization Letter',
      'Price Bid Submission Form',
      'Quality & Test Standard Certifications (IEC 62109, etc.)'
    ],
    contact: {
      name: 'P. K. Patnaik',
      role: 'Head of Supply Chain & Logistics',
      email: 'p.patnaik@jyotisolar.com'
    },
    docSize: '15.2 MB'
  },
  {
    id: 'TND-2026-004',
    title: 'O&M Contract — 5-Year Comprehensive AMC for Gujarat Solar Park (100 MW)',
    subtitle: 'Operations, Preventive Maintenance, and Cleaning Systems',
    deadline: '20 Dec 2026',
    status: 'Upcoming',
    type: 'O&M',
    value: '₹15 Cr',
    location: 'Charanka, Gujarat',
    description: 'Comprehensive operations and maintenance works of the 100 MW PV plant including daily solar panel washing, vegetation control, pyranometer calibration, inverter service, and substation maintenance.',
    scope: [
      '24/7 control room operations and monitoring via SCADA.',
      'Scheduled dry/wet panel cleaning cycle (twice monthly) using automated/robotic systems.',
      'Thermography scans of PV modules and DC combiner boxes every six months.',
      'Preventive maintenance of 33/220kV substation transformers and switchgears.',
      'Security services and vegetation control across the 400-acre site.',
      'Guaranteed Generation Performance (PR ratio maintenance) penalty/bonus clause.'
    ],
    timeline: {
      published: '15 Jul 2026',
      preBid: '10 Aug 2026',
      submission: '20 Dec 2026',
      techOpening: '23 Dec 2026',
      financialOpening: '30 Dec 2026'
    },
    documents: [
      'Operations Experience Profile & SCADA Capabilities',
      'Manpower Deployment Plan & Tool Kit Declarations',
      'Price Bid Proposal',
      'HSE (Health, Safety, Environment) Management Plan'
    ],
    contact: {
      name: 'R. K. Shah',
      role: 'VP - Operations & Maintenance',
      email: 'r.shah@jyotisolar.com'
    },
    docSize: '10.5 MB'
  }
];

const statusStyles = {
  Open:     'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20',
  Closed:   'bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20',
  Upcoming: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20',
};

const Tenders = () => {
  // Navigation & Filtering States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [openAccordion, setOpenAccordion] = useState(null);

  // Active News Ticker state
  const [activeAnnouncementIdx, setActiveAnnouncementIdx] = useState(0);

  // Simulated Document Download State
  const [downloadingId, setDownloadingId] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // Eligibility Checker State
  const [checkerForm, setCheckerForm] = useState({
    capacity: '',
    turnover: '',
    iso9001: false,
    iso14001: false,
    mnre: false,
    blacklisted: 'no'
  });
  const [checkerResult, setCheckerResult] = useState(null);

  // Bid Submission Modal State
  const [activeApplyTender, setActiveApplyTender] = useState(null);
  const [submissionStep, setSubmissionStep] = useState(1);
  const [submitForm, setSubmitForm] = useState({
    companyName: '',
    email: '',
    phone: '',
    gstin: '',
    vendorCode: '',
    techFileName: '',
    priceFileName: '',
    agreed: false,
    signature: ''
  });
  const [uploadProgress, setUploadProgress] = useState({ tech: 0, price: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationId, setConfirmationId] = useState('');

  // Ticker Auto-Rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAnnouncementIdx((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handler for parsing currency string e.g. "₹42 Cr" -> 42
  const parseVal = (valStr) => {
    const match = valStr.match(/₹(\d+)\s*Cr/);
    return match ? parseFloat(match[1]) : 0;
  };

  // Filter & Sort Logic
  const filteredTenders = TENDERS.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'All' || t.type === selectedSector;
    const matchesStatus = selectedStatus === 'All' || t.status === selectedStatus;

    return matchesSearch && matchesSector && matchesStatus;
  }).sort((a, b) => {
    if (sortBy === 'value-desc') return parseVal(b.value) - parseVal(a.value);
    if (sortBy === 'value-asc') return parseVal(a.value) - parseVal(b.value);
    if (sortBy === 'deadline-near') return new Date(a.deadline + ' 2026') - new Date(b.deadline + ' 2026');
    if (sortBy === 'deadline-far') return new Date(b.deadline + ' 2026') - new Date(a.deadline + ' 2026');
    return 0; // default (no sort)
  });

  // Calculate Metrics
  const activeTendersCount = TENDERS.filter(t => t.status === 'Open').length;
  const upcomingTendersCount = TENDERS.filter(t => t.status === 'Upcoming').length;
  const portfolioVal = TENDERS.reduce((acc, curr) => {
    if (curr.status !== 'Closed') {
      return acc + parseVal(curr.value);
    }
    return acc;
  }, 0);

  // Mock File Download Handler
  const handleDownloadSpecs = (tender) => {
    if (downloadingId) return;
    setDownloadingId(tender.id);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadingId(null);
            // Simulate actual browser file trigger
            const element = document.createElement('a');
            const file = new Blob([`Jyoti Solar Power Limited\nOfficial Tender Specifications: ${tender.id}\nTitle: ${tender.title}\nBudget: ${tender.value}\nGenerated verification token: SECURE-TND-${Math.random().toString(36).substr(2, 9).toUpperCase()}`], {type: 'text/plain'});
            element.href = URL.createObjectURL(file);
            element.download = `${tender.id}_specifications.txt`;
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
          }, 600);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  // Pre-qualification Checker Submitter
  const handleCheckEligibility = (e) => {
    e.preventDefault();
    const capacityNum = parseFloat(checkerForm.capacity) || 0;
    const turnoverNum = parseFloat(checkerForm.turnover) || 0;
    
    const errors = [];
    if (capacityNum < 20) {
      errors.push('Minimum solar capacity installed in the last 5 years must be at least 20 MW (Your input: ' + capacityNum + ' MW).');
    }
    if (turnoverNum < 50) {
      errors.push('Average annual turnover in the last 3 financial years must be at least ₹50 Crore (Your input: ₹' + turnoverNum + ' Cr).');
    }
    if (!checkerForm.iso9001 || !checkerForm.iso14001 || !checkerForm.mnre) {
      errors.push('All mandatory certifications (ISO 9001, ISO 14001, and MNRE/SECI registration) are required.');
    }
    if (checkerForm.blacklisted === 'yes') {
      errors.push('Your firm must not be blacklisted by any central/state government authority or PSU.');
    }

    setCheckerResult({
      eligible: errors.length === 0,
      errors
    });
  };

  const resetChecker = () => {
    setCheckerForm({
      capacity: '',
      turnover: '',
      iso9001: false,
      iso14001: false,
      mnre: false,
      blacklisted: 'no'
    });
    setCheckerResult(null);
  };

  // Open Submission Modal Handler
  const openApplyModal = (tender) => {
    setActiveApplyTender(tender);
    setSubmissionStep(1);
    setSubmitForm({
      companyName: '',
      email: '',
      phone: '',
      gstin: '',
      vendorCode: '',
      techFileName: '',
      priceFileName: '',
      agreed: false,
      signature: ''
    });
    setUploadProgress({ tech: 0, price: 0 });
    setIsSubmitting(false);
  };

  // Mock File Upload handlers
  const handleFileUpload = (type, fileName) => {
    if (!fileName) return;
    
    // Set file name instantly
    setSubmitForm(f => ({ ...f, [`${type}FileName`]: fileName }));
    setUploadProgress(prev => ({ ...prev, [type]: 0 }));

    let prg = 0;
    const interval = setInterval(() => {
      prg += 25;
      setUploadProgress(prev => ({ ...prev, [type]: prg }));
      if (prg >= 100) {
        clearInterval(interval);
      }
    }, 150);
  };

  // Handle Submit Bid Proposal Form
  const handleSubmitBid = (e) => {
    e.preventDefault();
    if (submissionStep === 1) {
      // Validate step 1 fields
      if (!submitForm.companyName || !submitForm.email || !submitForm.phone || !submitForm.gstin) {
        alert('Please fill out all mandatory vendor profile details.');
        return;
      }
      // Simple GSTIN check validation
      const gstinPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
      if (!gstinPattern.test(submitForm.gstin.toUpperCase())) {
        alert('Please enter a valid Indian GSTIN format (e.g. 21AAAAA1111A1Z1)');
        return;
      }
      setSubmissionStep(2);
    } else if (submissionStep === 2) {
      // Validate step 2 file uploads
      if (!submitForm.techFileName || uploadProgress.tech < 100) {
        alert('Please upload and wait for technical proposal file completion.');
        return;
      }
      if (!submitForm.priceFileName || uploadProgress.price < 100) {
        alert('Please upload and wait for financial BOQ proposal file completion.');
        return;
      }
      setSubmissionStep(3);
    } else if (submissionStep === 3) {
      if (!submitForm.agreed || !submitForm.signature) {
        alert('Please accept compliance agreement and enter digital signature.');
        return;
      }
      
      // Submit action mock
      setIsSubmitting(true);
      setTimeout(() => {
        const randId = 'JYOTI-SUB-' + Math.floor(100000 + Math.random() * 900000);
        setConfirmationId(randId);
        setIsSubmitting(false);
        setSubmissionStep(4);
      }, 2000);
    }
  };

  // Mock Submission Receipt Download
  const handleDownloadReceipt = () => {
    const element = document.createElement('a');
    const content = `========================================================
            JYOTI SOLAR POWER LIMITED
     ONLINE PROCUREMENT PORTAL - BID RECEIPT
========================================================
Receipt Tracking ID : ${confirmationId}
Submission Timestamp: ${new Date().toLocaleString()}
Tender Reference ID : ${activeApplyTender?.id}
Tender Title       : ${activeApplyTender?.title}
Estimated Budget    : ${activeApplyTender?.value}

Vendor Details:
---------------
Company Name        : ${submitForm.companyName}
Contact Email       : ${submitForm.email}
Contact Phone       : ${submitForm.phone}
GSTIN Registration  : ${submitForm.gstin.toUpperCase()}
Vendor Portal Code  : ${submitForm.vendorCode || 'N/A'}

Uploaded Proposals:
-------------------
Technical Bid Document : ${submitForm.techFileName} (Verified)
Financial BOQ Proposal : ${submitForm.priceFileName} (Verified)

Status: Bid Successfully Logged & Under Electronic Vaulting.
        Awaiting Technical Committee Evaluation.
========================================================`;
    
    const file = new Blob([content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `Receipt_${activeApplyTender?.id}_${confirmationId}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-[#f4f6f9] pb-24 page-fade font-sans relative">

      {/* ─── LIVE NEWS TICKER BANNER ─── */}
      <div className="bg-[#111c30] border-b border-slate-800 text-white text-xs py-2.5 relative z-20 mt-16 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-bold text-[#f97316] uppercase tracking-wider shrink-0 bg-slate-900 px-2.5 py-1 rounded border border-slate-700">
            <MdNotificationsActive className="text-base animate-swing" /> Live Alerts
          </div>
          <div className="flex-1 overflow-hidden relative h-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAnnouncementIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 truncate text-slate-300 font-medium"
              >
                {ANNOUNCEMENTS[activeAnnouncementIdx]}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Secure Connection
          </div>
        </div>
      </div>

      {/* ─── PAGE HERO HEADER ─── */}
      <section className="pt-20 pb-20 bg-[#0f2044] relative overflow-hidden">
        {/* Background Overlay & Light effects */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&q=80"
            alt="Solar installation and management engineering"
            className="w-full h-full object-cover opacity-35 filter brightness-75 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0b162c] via-[#0f2044]/95 to-[#1a3a6b]/80" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="section-tag mb-4 inline-flex items-center text-xs tracking-widest font-extrabold text-[#f97316]">
                Smart Procurement E-Portal
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 font-hero">
                Partner with <span className="text-[#f97316] relative inline-block">Jyoti Solar
                  <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#f97316] rounded" />
                </span> for Green Infrastructure
              </h1>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 font-medium max-w-xl">
                Explore our transparent, secure procurement portal. Review technical criteria, download official specifications, and submit bids electronically.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                <span className="bg-slate-900/50 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/50 flex items-center gap-1.5 text-white">
                  🔒 ISO 27001 Certified Vault
                </span>
                <span className="bg-slate-900/50 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/50 flex items-center gap-1.5 text-white">
                  ⚖️ Transparent RFP Framework
                </span>
              </div>
            </div>

            {/* Portal Quick Summary Card */}
            <div className="lg:w-96 shrink-0 bg-slate-900/60 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#f97316]/10 rounded-full blur-xl" />
              <div className="flex items-center gap-3 mb-5 border-b border-slate-800 pb-3">
                <div className="p-2.5 bg-orange-500/10 text-[#f97316] rounded-xl border border-orange-500/20">
                  <FaBriefcase className="text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Procurement Workspace</h3>
                  <p className="text-slate-400 text-xs font-medium">Bidding System Active</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-medium">
                  <span className="text-slate-400">Portal Security Rating</span>
                  <span className="text-[#f97316] font-bold">128-bit SSL</span>
                </div>
                <div className="flex justify-between items-center text-xs font-medium border-t border-slate-800/80 pt-3">
                  <span className="text-slate-400">E-Mail submissions</span>
                  <span className="text-slate-200">tenders@jyotisolar.com</span>
                </div>
                <div className="flex justify-between items-center text-xs font-medium border-t border-slate-800/80 pt-3">
                  <span className="text-slate-400">Next Scheduled Opening</span>
                  <span className="text-emerald-400 font-bold">18 Oct 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DASHBOARD STATS / METRICS GRID ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { label: 'Active Tenders', value: activeTendersCount, sub: 'Currently accepting proposals', icon: FaClock, color: 'text-orange-500 bg-orange-500/10 border-orange-500/20' },
            { label: 'Upcoming Opportunities', value: upcomingTendersCount, sub: 'In pipeline / RFP design', icon: FaCalendarAlt, color: 'text-amber-600 bg-amber-500/10 border-amber-500/20' },
            { label: 'Opportunity Budget', value: `₹${portfolioVal} Cr`, sub: 'Cumulative active tender budgets', icon: MdTrendingUp, color: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
            { label: 'Registered Contractors', value: '340+ Vendors', sub: 'Verified & active supply list', icon: FaUserCheck, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-lg flex items-center justify-between hover:shadow-xl transition-all"
            >
              <div className="space-y-1">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{item.label}</p>
                <h3 className="text-2xl font-extrabold text-[#0f2044] tracking-tight">{item.value}</h3>
                <p className="text-slate-500 text-[11px] font-medium">{item.sub}</p>
              </div>
              <div className={`p-4 rounded-xl border ${item.color}`}>
                <item.icon className="text-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── MAIN WEB PORTAL CONTENT AREA ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Left Column (2/3) - Tenders Explorer */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* SEARCH AND FILTERS BAR */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                {/* Search Bar */}
                <div className="relative w-full flex-1">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Search by tender ID, title, keyword or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#f97316] focus:bg-white rounded-xl py-3 pl-11 pr-10 text-sm text-[#0f2044] font-medium placeholder-slate-400 focus:outline-none transition-all shadow-inner"
                  />
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')} 
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <FaTimes className="text-xs" />
                    </button>
                  )}
                </div>

                {/* Sort Dropdown */}
                <div className="w-full md:w-56 shrink-0">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#f97316] focus:bg-white rounded-xl py-3 px-4 text-sm text-[#0f2044] font-semibold focus:outline-none transition-all appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px' }}
                  >
                    <option value="default">↕ Sort: Reference Order</option>
                    <option value="value-desc">💰 Budget: High to Low</option>
                    <option value="value-asc">💰 Budget: Low to High</option>
                    <option value="deadline-near">⏳ Deadline: Nearest First</option>
                    <option value="deadline-far">⏳ Deadline: Furthest First</option>
                  </select>
                </div>
              </div>

              {/* Filters grid */}
              <div className="flex flex-col gap-3.5 pt-3 border-t border-slate-100">
                {/* Sector Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider w-14">Sector:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {SECTORS.map((sector) => (
                      <button
                        key={sector}
                        onClick={() => setSelectedSector(sector)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          selectedSector === sector
                            ? 'bg-[#0f2044] text-white border-[#0f2044] shadow-sm'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {sector}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider w-14">Status:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {STATUSES.map((status) => (
                      <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          selectedStatus === status
                            ? 'bg-[#f97316] text-white border-[#f97316] shadow-sm'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* TENDER LIST EXPORTER */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-black text-[#0f2044] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f97316] animate-pulse" />
                  Available Tender Bulletins ({filteredTenders.length})
                </h3>
                {searchTerm || selectedSector !== 'All' || selectedStatus !== 'All' ? (
                  <button 
                    onClick={() => { setSearchTerm(''); setSelectedSector('All'); setSelectedStatus('All'); setSortBy('default'); }}
                    className="text-xs font-semibold text-[#f97316] hover:underline flex items-center gap-1.5"
                  >
                    <FaRedo className="text-[10px]" /> Reset Filter Search
                  </button>
                ) : null}
              </div>

              <AnimatePresence mode="popLayout">
                {filteredTenders.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-white border border-slate-200 rounded-2xl p-12 text-center"
                  >
                    <FaExclamationTriangle className="text-[#f97316] text-4xl mx-auto mb-4" />
                    <h4 className="text-base font-bold text-[#0f2044] mb-1">No Active Tenders Match Search Filters</h4>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto mb-4">
                      Try adjusting keywords, selecting another sector, or clearing active filters to view all contracts.
                    </p>
                    <button
                      onClick={() => { setSearchTerm(''); setSelectedSector('All'); setSelectedStatus('All'); setSortBy('default'); }}
                      className="px-5 py-2 bg-[#0f2044] text-white font-bold rounded-xl hover:bg-[#1a3a6b] transition-all text-xs"
                    >
                      Clear Search Filters
                    </button>
                  </motion.div>
                ) : (
                  filteredTenders.map((tender, i) => {
                    const isExpanded = openAccordion === tender.id;
                    return (
                      <motion.div
                        key={tender.id}
                        layout="position"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all accent-bar"
                        style={{ borderLeftColor: tender.status === 'Open' ? '#10b981' : tender.status === 'Upcoming' ? '#f59e0b' : '#f43f5e' }}
                      >
                        {/* Header Area */}
                        <div 
                          onClick={() => setOpenAccordion(isExpanded ? null : tender.id)}
                          className="p-5 sm:p-6 cursor-pointer select-none hover:bg-slate-50/50 transition-colors"
                        >
                          <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                            <div className="space-y-2 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-[10px] font-extrabold text-[#f97316] bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                                  {tender.id}
                                </span>
                                <span className="text-[10px] text-slate-500 border border-slate-200 bg-slate-50 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider flex items-center gap-1">
                                  <FaTag className="text-[8px]" /> {tender.type}
                                </span>
                                <span className="text-[10px] text-slate-500 border border-slate-200 bg-slate-50 px-2 py-0.5 rounded-md font-bold flex items-center gap-1">
                                  <FaMapMarkerAlt className="text-[8px] text-[#f97316]" /> {tender.location}
                                </span>
                              </div>
                              <h3 className="text-[#0f2044] font-bold text-base md:text-lg leading-snug">
                                {tender.title}
                              </h3>
                              <p className="text-slate-400 text-xs font-semibold">{tender.subtitle}</p>
                            </div>
                            
                            <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-3 shrink-0">
                              <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full border tracking-wide uppercase ${statusStyles[tender.status]}`}>
                                {tender.status}
                              </span>
                              <div className="text-right">
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Est. Budget</p>
                                <p className="text-[#0f2044] font-black text-lg">{tender.value}</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100 text-xs text-slate-500">
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 font-medium">
                              <span className="flex items-center gap-1.5"><FaCalendarAlt className="text-[#f97316]" /> Submission Deadline: <strong>{tender.deadline}</strong></span>
                            </div>
                            <span className="text-[#f97316] font-bold flex items-center gap-1">
                              {isExpanded ? 'Collapse Specifications' : 'Expand Details'} 
                              <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                <FaChevronDown className="text-[10px]" />
                              </motion.span>
                            </span>
                          </div>
                        </div>

                        {/* Collapsible Panel details */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden bg-slate-50/70 border-t border-slate-100"
                            >
                              <div className="p-5 sm:p-6 space-y-6 text-sm text-[#0f2044]">
                                {/* Description */}
                                <div className="space-y-2">
                                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                                    <FaInfoCircle className="text-slate-500" /> Overview &amp; Project Description
                                  </h4>
                                  <p className="text-slate-600 leading-relaxed text-sm">
                                    {tender.description}
                                  </p>
                                </div>

                                {/* Scope grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                  <div className="space-y-3 bg-white p-4.5 rounded-xl border border-slate-200/80">
                                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#0f2044] border-b border-slate-100 pb-2 flex items-center gap-1.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Scope of Work
                                    </h4>
                                    <ul className="space-y-2">
                                      {tender.scope.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                                          <FaCheck className="text-emerald-500 text-[10px] mt-0.5 shrink-0" />
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Documents & Schedule */}
                                  <div className="space-y-4">
                                    {/* Document Checklist */}
                                    <div className="bg-white p-4.5 rounded-xl border border-slate-200/80 space-y-3">
                                      <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#0f2044] border-b border-slate-100 pb-2 flex items-center gap-1.5">
                                        <FaRegFileAlt className="text-slate-500" /> Required Bid Documents
                                      </h4>
                                      <ul className="space-y-2">
                                        {tender.documents.map((doc, idx) => (
                                          <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-600">
                                            <span className="w-4 h-4 rounded bg-slate-100 text-[#0f2044] font-bold flex items-center justify-center text-[9px] border border-slate-200 shrink-0">
                                              {idx + 1}
                                            </span>
                                            <span>{doc}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                                {/* Bidding Schedule timeline */}
                                <div className="bg-white p-4.5 rounded-xl border border-slate-200/80 space-y-3">
                                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#0f2044] border-b border-slate-100 pb-2 flex items-center gap-1.5">
                                    <FaCalendarAlt className="text-slate-500" /> Procurement Milestone Schedule
                                  </h4>
                                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 text-center">
                                    {[
                                      { label: 'RFP Release', val: tender.timeline.published },
                                      { label: 'Pre-Bid Meet', val: tender.timeline.preBid },
                                      { label: 'Submission Due', val: tender.timeline.submission, highlight: true },
                                      { label: 'Tech Bid Open', val: tender.timeline.techOpening },
                                      { label: 'Price Bid Open', val: tender.timeline.financialOpening }
                                    ].map((milestone, idx) => (
                                      <div key={idx} className={`p-2.5 rounded-lg border text-xs ${milestone.highlight ? 'bg-orange-50 border-orange-200/80' : 'bg-slate-50 border-slate-100'}`}>
                                        <p className="text-slate-400 font-bold text-[9px] uppercase tracking-wider mb-1">{milestone.label}</p>
                                        <p className={`font-bold ${milestone.highlight ? 'text-[#f97316]' : 'text-[#0f2044]'}`}>{milestone.val}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Contact Person & Action Foot */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-white border border-slate-200/80 rounded-xl p-4.5">
                                  <div className="flex items-center gap-3 w-full sm:w-auto">
                                    <span className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 font-bold shrink-0">
                                      👤
                                    </span>
                                    <div>
                                      <p className="font-bold text-xs text-[#0f2044]">{tender.contact.name}</p>
                                      <p className="text-slate-500 text-[11px] font-medium">{tender.contact.role}</p>
                                      <a href={`mailto:${tender.contact.email}`} className="text-xs text-[#f97316] font-bold hover:underline flex items-center gap-1 mt-0.5">
                                        <FaEnvelope className="text-[10px]" /> {tender.contact.email}
                                      </a>
                                    </div>
                                  </div>

                                  {/* Bid CTA buttons */}
                                  <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
                                    {/* Download Spec Button */}
                                    {tender.status !== 'Closed' && (
                                      <button
                                        onClick={() => handleDownloadSpecs(tender)}
                                        disabled={downloadingId !== null}
                                        className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer w-full sm:w-auto min-w-[155px]"
                                      >
                                        {downloadingId === tender.id ? (
                                          <div className="flex items-center gap-2">
                                            <svg className="animate-spin h-3.5 w-3.5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span className="font-mono text-slate-500">Downloading {downloadProgress}%</span>
                                          </div>
                                        ) : (
                                          <>
                                            <FaFileDownload className="text-slate-400" />
                                            Download Specs ({tender.docSize})
                                          </>
                                        )}
                                      </button>
                                    )}

                                    {/* Action button */}
                                    {tender.status === 'Open' ? (
                                      <button 
                                        onClick={() => openApplyModal(tender)}
                                        className="flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#f97316] rounded-xl hover:bg-[#ea6a0a] transition-all shadow-md shadow-orange-300/30 cursor-pointer w-full sm:w-auto"
                                      >
                                        <MdOutlineHowToVote className="text-sm" /> Apply Online &amp; Upload Bid
                                      </button>
                                    ) : tender.status === 'Upcoming' ? (
                                      <button 
                                        disabled
                                        className="flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-400 bg-slate-100 border border-slate-200 rounded-xl cursor-not-allowed w-full sm:w-auto"
                                      >
                                        <FaClock /> Submission Portal Opens Soon
                                      </button>
                                    ) : (
                                      <span className="text-xs font-bold text-rose-500 bg-rose-50 border border-rose-100 rounded-xl px-4 py-2.5 flex items-center gap-1.5 w-full sm:w-auto justify-center">
                                        🚫 Submission Window Closed
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column (1/3) - Qualification & Quiz Widgets */}
          <div className="space-y-6">

            {/* PRE-QUALIFICATION CHECKER WIDGET */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm sticky top-28">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <FaBriefcase className="text-[#f97316] text-xl" />
                <h3 className="font-extrabold text-base text-[#0f2044]">Vendor Qualification Audit</h3>
              </div>
              
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                Self-evaluate your eligibility before bidding. Meeting these benchmarks is critical to clear technical review.
              </p>

              {checkerResult === null ? (
                <form onSubmit={handleCheckEligibility} className="space-y-4">
                  {/* Capacity input */}
                  <div>
                    <label className="block text-[10px] font-extrabold text-[#0f2044] mb-1.5 uppercase tracking-wider">
                      Solar projects installed (Last 5 Yrs)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        required
                        placeholder="e.g. 25"
                        min="0"
                        value={checkerForm.capacity}
                        onChange={(e) => setCheckerForm({ ...checkerForm, capacity: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#f97316] rounded-xl py-2.5 px-3.5 text-xs text-[#0f2044] font-semibold focus:outline-none transition-all"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-extrabold text-[10px]">MW</span>
                    </div>
                  </div>

                  {/* Turnover input */}
                  <div>
                    <label className="block text-[10px] font-extrabold text-[#0f2044] mb-1.5 uppercase tracking-wider">
                      Avg. Annual Turnover (Last 3 Yrs)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        required
                        placeholder="e.g. 60"
                        min="0"
                        value={checkerForm.turnover}
                        onChange={(e) => setCheckerForm({ ...checkerForm, turnover: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#f97316] rounded-xl py-2.5 px-3.5 text-xs text-[#0f2044] font-semibold focus:outline-none transition-all"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-extrabold text-[10px]">₹ CRORE</span>
                    </div>
                  </div>

                  {/* Certifications Checklist */}
                  <div className="space-y-2.5 pt-1">
                    <label className="block text-[10px] font-extrabold text-[#0f2044] uppercase tracking-wider">
                      Compliance Certifications
                    </label>
                    
                    {[
                      { key: 'iso9001', label: 'ISO 9001:2015 Quality Management' },
                      { key: 'iso14001', label: 'ISO 14001:2015 Environment' },
                      { key: 'mnre', label: 'Active MNRE / SECI Vendor Registration' }
                    ].map((cert) => (
                      <label key={cert.key} className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-slate-600 select-none">
                        <input
                          type="checkbox"
                          checked={checkerForm[cert.key]}
                          onChange={(e) => setCheckerForm({ ...checkerForm, [cert.key]: e.target.checked })}
                          className="w-4 h-4 rounded text-orange-500 focus:ring-0 border-slate-300"
                        />
                        <span>{cert.label}</span>
                      </label>
                    ))}
                  </div>

                  {/* Blacklisting Clause */}
                  <div className="pt-1">
                    <label className="block text-[10px] font-extrabold text-[#0f2044] mb-1.5 uppercase tracking-wider">
                      Firm Blacklisted or Debarred?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-600">
                        <input
                          type="radio"
                          name="blacklisted"
                          checked={checkerForm.blacklisted === 'no'}
                          onChange={() => setCheckerForm({ ...checkerForm, blacklisted: 'no' })}
                          className="w-4 h-4 text-orange-500 focus:ring-0 border-slate-300"
                        />
                        <span>No (Eligible)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-600">
                        <input
                          type="radio"
                          name="blacklisted"
                          checked={checkerForm.blacklisted === 'yes'}
                          onChange={() => setCheckerForm({ ...checkerForm, blacklisted: 'yes' })}
                          className="w-4 h-4 text-orange-500 focus:ring-0 border-slate-300"
                        />
                        <span className="text-red-500">Yes (Debarred)</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit evaluation */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#0f2044] hover:bg-[#1a3a6b] text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    Evaluate Compatibility
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4 text-center py-2"
                >
                  {checkerResult.eligible ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4.5 text-center">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-500 text-xl mx-auto mb-3 animate-bounce">
                        <FaCheckCircle />
                      </div>
                      <h4 className="font-extrabold text-sm text-emerald-800 mb-1">Pre-Qualification Met!</h4>
                      <p className="text-[11px] text-emerald-700 leading-normal mb-3">
                        Your parameters satisfy all technical and commercial criteria for current RFPs.
                      </p>
                      <span className="text-[10px] font-bold text-[#f97316] bg-white border border-orange-200 rounded-lg px-3 py-1.5 inline-block">
                        Ready to Bid 🚀
                      </span>
                    </div>
                  ) : (
                    <div className="bg-rose-50 border border-rose-200 rounded-xl p-4.5 text-left">
                      <div className="w-10 h-10 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-500 text-lg mb-3">
                        <FaExclamationTriangle />
                      </div>
                      <h4 className="font-extrabold text-sm text-rose-800 mb-1.5">Deficiencies Detected</h4>
                      <p className="text-[11px] text-rose-600 leading-normal mb-3">
                        Our technical committee will reject bids missing these baseline constraints:
                      </p>
                      <ul className="space-y-2 border-t border-rose-100 pt-2.5">
                        {checkerResult.errors.map((err, idx) => (
                          <li key={idx} className="text-[10px] text-rose-700 flex items-start gap-1.5 leading-normal">
                            <span className="shrink-0 text-red-500 font-bold">•</span>
                            <span>{err}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    onClick={resetChecker}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer border border-slate-200"
                  >
                    Reset Evaluator
                  </button>
                </motion.div>
              )}

              {/* Secure Registration Info */}
              <div className="mt-6 p-4.5 bg-[#0f2044] rounded-xl text-white">
                <div className="flex items-center gap-2 font-bold text-xs mb-1.5 text-slate-100">
                  <MdOutlineHowToVote className="text-[#f97316] text-base" /> Register as a Vendor
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Submit credentials and CA-audited statements to <strong className="text-[#f97316]">tenders@jyotisolar.com</strong> to get registered in our contractor records.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ─── ONLINE BID SUBMISSION MODAL ─── */}
      <AnimatePresence>
        {activeApplyTender && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark glass Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { if (submissionStep !== 4) setActiveApplyTender(null); }}
              className="absolute inset-0 bg-[#070e1b]/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]"
            >
              
              {/* Modal Header */}
              <div className="bg-[#0f2044] text-white p-5 flex justify-between items-center shrink-0">
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold text-[#f97316] bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded uppercase tracking-wider">
                    Bid Proposal Submission
                  </span>
                  <h3 className="font-extrabold text-sm md:text-base leading-tight text-white pr-6">
                    {activeApplyTender.id}: {activeApplyTender.title}
                  </h3>
                </div>
                {submissionStep !== 4 && (
                  <button 
                    onClick={() => setActiveApplyTender(null)}
                    className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              {/* Progress Stepper */}
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex justify-between items-center shrink-0 text-xs font-semibold text-slate-400">
                {[
                  { step: 1, label: 'Profile' },
                  { step: 2, label: 'Upload' },
                  { step: 3, label: 'Declaration' },
                  { step: 4, label: 'Receipt' }
                ].map((s, idx) => (
                  <React.Fragment key={s.step}>
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs border transition-all ${
                        submissionStep === s.step
                          ? 'bg-[#f97316] text-white border-[#f97316] shadow-sm scale-110'
                          : submissionStep > s.step
                            ? 'bg-emerald-500 text-white border-emerald-500'
                            : 'bg-white text-slate-400 border-slate-200'
                      }`}>
                        {submissionStep > s.step ? <FaCheck className="text-[10px]" /> : s.step}
                      </span>
                      <span className={submissionStep === s.step ? 'text-[#0f2044] font-bold' : 'font-medium'}>
                        {s.label}
                      </span>
                    </div>
                    {idx < 3 && <div className={`flex-1 h-0.5 mx-2 min-w-[20px] transition-all ${submissionStep > s.step ? 'bg-emerald-500' : 'bg-slate-200'}`} />}
                  </React.Fragment>
                ))}
              </div>

              {/* Scrollable Form Body */}
              <div className="p-6 overflow-y-auto flex-1">
                
                <form onSubmit={handleSubmitBid} className="space-y-5">
                  
                  {/* STEP 1: VENDOR PROFILE */}
                  {submissionStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <div className="bg-blue-50/50 border border-blue-200/50 p-4 rounded-xl flex gap-3 text-xs text-blue-800 leading-normal">
                        <FaInfoCircle className="text-blue-600 text-lg shrink-0 mt-0.5" />
                        <div>
                          <strong>Pre-Qualification Disclaimer:</strong> By proceeding, you confirm that your company meets all technical, financial, and certification criteria detailed in the RFP specifications document.
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-extrabold text-[#0f2044] mb-1.5 uppercase tracking-wider">Company Registered Name *</label>
                          <div className="relative">
                            <FaBuilding className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="text"
                              required
                              placeholder="e.g. Apex Solar Infra Pvt Ltd"
                              value={submitForm.companyName}
                              onChange={(e) => setSubmitForm({ ...submitForm, companyName: e.target.value })}
                              className="w-full bg-slate-50 border border-slate-200 focus:border-[#f97316] focus:bg-white rounded-xl py-2.5 pl-10 pr-3.5 text-xs text-[#0f2044] font-semibold focus:outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-extrabold text-[#0f2044] mb-1.5 uppercase tracking-wider">Indian GSTIN Number *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 21AAAAA1111A1Z1"
                            maxLength="15"
                            value={submitForm.gstin}
                            onChange={(e) => setSubmitForm({ ...submitForm, gstin: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 focus:border-[#f97316] focus:bg-white rounded-xl py-2.5 px-3.5 text-xs text-[#0f2044] font-semibold focus:outline-none transition-all uppercase"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-extrabold text-[#0f2044] mb-1.5 uppercase tracking-wider">Contact Email Address *</label>
                          <div className="relative">
                            <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="email"
                              required
                              placeholder="e.g. bidding@apexsolar.in"
                              value={submitForm.email}
                              onChange={(e) => setSubmitForm({ ...submitForm, email: e.target.value })}
                              className="w-full bg-slate-50 border border-slate-200 focus:border-[#f97316] focus:bg-white rounded-xl py-2.5 pl-10 pr-3.5 text-xs text-[#0f2044] font-semibold focus:outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-extrabold text-[#0f2044] mb-1.5 uppercase tracking-wider">Contact Mobile Number *</label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 9876543210"
                            pattern="[0-9]{10}"
                            value={submitForm.phone}
                            onChange={(e) => setSubmitForm({ ...submitForm, phone: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 focus:border-[#f97316] focus:bg-white rounded-xl py-2.5 px-3.5 text-xs text-[#0f2044] font-semibold focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-extrabold text-[#0f2044] mb-1.5 uppercase tracking-wider">Registered Vendor Code (Optional)</label>
                        <input
                          type="text"
                          placeholder="e.g. JYOTI-VEND-839"
                          value={submitForm.vendorCode}
                          onChange={(e) => setSubmitForm({ ...submitForm, vendorCode: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-[#f97316] focus:bg-white rounded-xl py-2.5 px-3.5 text-xs text-[#0f2044] font-semibold focus:outline-none transition-all uppercase"
                        />
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="submit"
                          className="px-6 py-3 bg-[#f97316] hover:bg-[#ea6a0a] text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md"
                        >
                          Next: Upload Documents
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: DOCUMENTS UPLOADS */}
                  {submissionStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-5"
                    >
                      <p className="text-slate-500 text-xs">
                        Please upload your proposal documents. Supported formats: PDF, ZIP (Max 25MB). Use unique file naming including your firm name.
                      </p>

                      {/* Technical Bid upload */}
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-extrabold text-xs text-[#0f2044] uppercase tracking-wider">Envelope 1: Technical Proposal &amp; Qualifications *</h4>
                            <p className="text-[10px] text-slate-400 font-medium">Must include past project certifications, CA audits and EMD guarantee proof.</p>
                          </div>
                        </div>

                        {!submitForm.techFileName ? (
                          <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:bg-slate-100/50 hover:border-slate-400 transition-all relative">
                            <input
                              type="file"
                              required
                              accept=".pdf,.zip"
                              onChange={(e) => handleFileUpload('tech', e.target.files[0]?.name)}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <MdCloudUpload className="text-[#f97316] text-3xl mx-auto mb-2" />
                            <p className="text-xs font-bold text-slate-600">Drag &amp; drop file here, or <span className="text-[#f97316]">browse files</span></p>
                          </div>
                        ) : (
                          <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-xl bg-orange-50 p-2 rounded border border-orange-100 text-[#f97316]">📄</span>
                              <div>
                                <p className="text-xs font-bold text-[#0f2044] truncate max-w-[280px] sm:max-w-md">{submitForm.techFileName}</p>
                                {uploadProgress.tech < 100 ? (
                                  <div className="w-48 bg-slate-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                                    <div className="bg-orange-500 h-full transition-all" style={{ width: `${uploadProgress.tech}%` }} />
                                  </div>
                                ) : (
                                  <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-1 mt-0.5">
                                    <FaCheckCircle /> Upload Complete
                                  </span>
                                )}
                              </div>
                            </div>
                            {uploadProgress.tech === 100 && (
                              <button 
                                onClick={() => setSubmitForm(f => ({ ...f, techFileName: '' }))}
                                className="text-slate-400 hover:text-red-500 p-1.5 rounded hover:bg-slate-50"
                              >
                                <FaTimes />
                              </button>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Financial Bid upload */}
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-extrabold text-xs text-[#0f2044] uppercase tracking-wider">Envelope 2: Price Bid BOQ Schedule *</h4>
                            <p className="text-[10px] text-slate-400 font-medium">Must be uploaded strictly in standard BOQ Excel/PDF format only.</p>
                          </div>
                        </div>

                        {!submitForm.priceFileName ? (
                          <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:bg-slate-100/50 hover:border-slate-400 transition-all relative">
                            <input
                              type="file"
                              required
                              accept=".xlsx,.xls,.pdf"
                              onChange={(e) => handleFileUpload('price', e.target.files[0]?.name)}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <MdCloudUpload className="text-[#f97316] text-3xl mx-auto mb-2" />
                            <p className="text-xs font-bold text-slate-600">Drag &amp; drop file here, or <span className="text-[#f97316]">browse files</span></p>
                          </div>
                        ) : (
                          <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-xl bg-orange-50 p-2 rounded border border-orange-100 text-[#f97316]">📊</span>
                              <div>
                                <p className="text-xs font-bold text-[#0f2044] truncate max-w-[280px] sm:max-w-md">{submitForm.priceFileName}</p>
                                {uploadProgress.price < 100 ? (
                                  <div className="w-48 bg-slate-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                                    <div className="bg-orange-500 h-full transition-all" style={{ width: `${uploadProgress.price}%` }} />
                                  </div>
                                ) : (
                                  <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-1 mt-0.5">
                                    <FaCheckCircle /> Upload Complete
                                  </span>
                                )}
                              </div>
                            </div>
                            {uploadProgress.price === 100 && (
                              <button 
                                onClick={() => setSubmitForm(f => ({ ...f, priceFileName: '' }))}
                                className="text-slate-400 hover:text-red-500 p-1.5 rounded hover:bg-slate-50"
                              >
                                <FaTimes />
                              </button>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => setSubmissionStep(1)}
                          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer border border-slate-200"
                        >
                          Back to Profile
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-[#f97316] hover:bg-[#ea6a0a] text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md"
                        >
                          Next: Review Declaration
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: DECLARATION */}
                  {submissionStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-5"
                    >
                      <h4 className="font-extrabold text-xs text-[#0f2044] uppercase tracking-wider">Legal Compliance Declarations</h4>
                      
                      <div className="border border-slate-200 rounded-xl bg-slate-50 p-4 max-h-48 overflow-y-auto text-[11px] text-slate-500 leading-normal space-y-2.5">
                        <p>1. We declare that all technical capacity certifications and audited CA reports submitted herewith represent authentic facts, and no certificates have been forged or falsely structured.</p>
                        <p>2. We confirm that our bidding organization is not blacklisted, debarred or temporarily suspended by any Indian public sector undertaking (PSU), State government, or Central agency.</p>
                        <p>3. We authorize Jyoti Solar Power Limited to verify our financial credit record, previous EPC project sites, and vendor codes with respective agencies.</p>
                        <p>4. We understand that submitting incorrect information, fake bank guarantees or bidding in collusion will result in immediate disqualification, forfeiture of EMD and potential blacklisting.</p>
                      </div>

                      <label className="flex items-start gap-3 cursor-pointer text-xs font-semibold text-[#0f2044] select-none leading-normal">
                        <input
                          type="checkbox"
                          required
                          checked={submitForm.agreed}
                          onChange={(e) => setSubmitForm({ ...submitForm, agreed: e.target.checked })}
                          className="w-4 h-4 rounded text-orange-500 border-slate-300 mt-0.5 shrink-0"
                        />
                        <span>We hereby certify and agree to all compliance terms and conditions specified in the procurement guidelines. *</span>
                      </label>

                      <div>
                        <label className="block text-[10px] font-extrabold text-[#0f2044] mb-1.5 uppercase tracking-wider">Digital Signature Authorization (Enter Full Name) *</label>
                        <div className="relative">
                          <FaFileSignature className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rajesh Sharma, Managing Director"
                            value={submitForm.signature}
                            onChange={(e) => setSubmitForm({ ...submitForm, signature: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 focus:border-[#f97316] focus:bg-white rounded-xl py-2.5 pl-10 pr-3.5 text-xs text-[#0f2044] font-semibold focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => setSubmissionStep(2)}
                          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer border border-slate-200"
                        >
                          Back to Uploads
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Securing Bid Vault...
                            </>
                          ) : (
                            <>Confirm &amp; Encrypt Bid</>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4: CONFIRMATION RECEIPT */}
                  {submissionStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-4 space-y-5"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-500 text-3xl mx-auto animate-bounce">
                        <FaCheck />
                      </div>

                      <div className="space-y-1.5">
                        <h4 className="font-extrabold text-lg text-emerald-800">Bid Proposal Successfully Submitted!</h4>
                        <p className="text-slate-500 text-xs font-medium">Your bid has been encrypted, time-stamped and stored in our procurement vault.</p>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left max-w-md mx-auto text-xs space-y-2 text-[#0f2044]">
                        <div className="flex justify-between font-medium"><span className="text-slate-400">Submission ID:</span><strong className="font-mono text-xs">{confirmationId}</strong></div>
                        <div className="flex justify-between font-medium border-t border-slate-100 pt-2"><span className="text-slate-400">Tender Reference:</span><strong>{activeApplyTender.id}</strong></div>
                        <div className="flex justify-between font-medium border-t border-slate-100 pt-2"><span className="text-slate-400">Time-Stamp Logging:</span><strong>{new Date().toLocaleString()}</strong></div>
                        <div className="flex justify-between font-medium border-t border-slate-100 pt-2"><span className="text-slate-400">Authorized Signature:</span><strong>{submitForm.signature}</strong></div>
                        <div className="flex justify-between font-medium border-t border-slate-100 pt-2"><span className="text-slate-400">Status:</span><span className="text-orange-500 font-bold">Encrypted - Awaiting Technical Evaluation</span></div>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3">
                        <button
                          type="button"
                          onClick={handleDownloadReceipt}
                          className="w-full sm:w-auto px-5 py-2.5 bg-[#0f2044] hover:bg-[#1a3a6b] text-white font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <FaFileDownload /> Download Submission Receipt
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveApplyTender(null)}
                          className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer border border-slate-200"
                        >
                          Close Portal Window
                        </button>
                      </div>
                    </motion.div>
                  )}

                </form>

              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Tenders;
