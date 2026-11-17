import React, { useState, useEffect, useMemo } from 'react';
import { enquiryService } from './services/api';

export default function App() {
  const [enquiries, setEnquiries] = useState([]);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Mobile App Development');

  useEffect(() => {
    enquiryService.getEnquiries()
      .then(res => {
        if (res.success && res.enquiries) setEnquiries(res.enquiries);
      })
      .catch(err => console.log('Loaded in dev mode'));
  }, []);

  return (
    <div className="min-h-screen bg-[#050814] text-slate-100">
      {/* For full standalone experience, open frontend/index.html */}
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold gradient-text-indigo mb-4">
          Deligo Technologies
        </h1>
        <p className="text-slate-300 mb-8">
          Next-Gen Software Engineering, Mobile Apps & AI Solutions.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/index.html" className="px-6 py-3 rounded-xl bg-indigo-600 font-bold text-white hover:bg-indigo-500">
            Open Full Production UI
          </a>
        </div>
      </div>
    </div>
  );
}

