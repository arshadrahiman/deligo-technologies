/**
 * Deligo Technologies - API Client Service
 * Connects frontend React components to PHP / MySQL backend endpoints.
 */

const API_BASE = import.meta.env?.VITE_API_BASE || '';

export const enquiryService = {
  // Public lead submission
  async submitEnquiry(payload) {
    const res = await fetch(`${API_BASE}/api/enquiry.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return res.json();
  },

  // Owner CRM: List all leads with optional filters
  async getEnquiries({ status = '', service = '', search = '' } = {}) {
    const params = new URLSearchParams();
    if (status && status !== 'ALL') params.append('status', status);
    if (service && service !== 'ALL') params.append('service', service);
    if (search) params.append('search', search);

    const res = await fetch(`${API_BASE}/api/admin.php?action=list&${params.toString()}`);
    return res.json();
  },

  // Owner CRM: Real-time dashboard KPI analytics
  async getStats() {
    const res = await fetch(`${API_BASE}/api/admin.php?action=stats`);
    return res.json();
  },

  // Owner CRM: Update lead status
  async updateStatus(id, newStatus) {
    const res = await fetch(`${API_BASE}/api/admin.php?action=update_status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: newStatus }),
    });
    return res.json();
  },

  // Owner CRM: Append internal note
  async addNote(enquiryId, note, author = 'Owner') {
    const res = await fetch(`${API_BASE}/api/admin.php?action=add_note`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ enquiry_id: enquiryId, note, author }),
    });
    return res.json();
  },

  // Owner CRM: CSV export URL
  getExportUrl() {
    return `${API_BASE}/api/export.php`;
  }
};

