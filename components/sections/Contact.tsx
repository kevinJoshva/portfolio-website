'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PERSONAL_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { fadeInUp } from '@/lib/animations';
import {
  Mail,
  MapPin,
  Send,
  Github,
  Gitlab,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileDown,
  ExternalLink,
  MessageSquare,
  Info,
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [requiresMailClient, setRequiresMailClient] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Generate mailto link with pre-filled inputs
  const mailtoUrl = `mailto:${PERSONAL_INFO.socialLinks.email}?subject=${encodeURIComponent(
    formData.subject || 'Mobile App Inquiry'
  )}&body=${encodeURIComponent(
    `Hello Kevin,\n\nMy name is ${formData.name || '[Your Name]'}.\n\nMessage:\n${
      formData.message || ''
    }\n\nBest regards,\n${formData.name || ''}\nEmail: ${formData.email || ''}`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setFeedbackMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormStatus('error');
      setFeedbackMessage('Please enter a valid email address.');
      return;
    }

    setFormStatus('loading');
    setFeedbackMessage('');
    setRequiresMailClient(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus('success');
        setFeedbackMessage(result.message);
        if (result.requiresMailClient) {
          setRequiresMailClient(true);
        } else {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            honeypot: '',
          });
        }
      } else {
        setFormStatus('error');
        setFeedbackMessage(result.message || 'Something went wrong. Please email directly.');
      }
    } catch (err) {
      setFormStatus('error');
      setFeedbackMessage('Unable to reach server. Please click "Open in Email App" below.');
      setRequiresMailClient(true);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Heading and Description from Master Prompt */}
        <SectionHeading
          eyebrow="COMMUNICATION & INQUIRIES"
          title="Let's Build"
          highlightText="Something Useful"
          subtitle="I'm interested in mobile application development opportunities, collaborative projects, and solving practical software problems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 bg-slate-900/60 backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-accent" />
                <span>Send a Message</span>
              </h3>
              <a
                href={mailtoUrl}
                className="text-xs font-mono text-brand-accent hover:underline flex items-center gap-1"
              >
                <span>Direct Mailto</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Anti-spam honeypot */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  value={formData.honeypot}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              {/* Name field */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                >
                  Your Name <span className="text-rose-400">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors"
                />
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                >
                  Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors"
                />
              </div>

              {/* Subject field */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                >
                  Subject <span className="text-rose-400">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Mobile app inquiry / Full-time role"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors"
                />
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                >
                  Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your mobile application project, scope, or timeline..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors resize-none"
                />
              </div>

              {/* Feedback Alert */}
              {formStatus === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>{feedbackMessage}</span>
                  </div>
                  {requiresMailClient && (
                    <div className="pt-2 border-t border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <span className="text-[11px] text-slate-300">
                        Deliver directly via your desktop/mobile mail client:
                      </span>
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open in Email App</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{feedbackMessage}</span>
                  </div>
                  <a
                    href={mailtoUrl}
                    className="text-xs font-mono text-white underline hover:text-rose-200"
                  >
                    Send via Email App
                  </a>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-medium text-sm shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Validating...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Form</span>
                    </>
                  )}
                </button>

                <a
                  href={mailtoUrl}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-950 border border-white/[0.12] text-slate-200 font-medium text-sm hover:border-brand-accent/50 hover:text-white active:scale-[0.98] transition-all"
                >
                  <Mail className="w-4 h-4 text-brand-accent" />
                  <span>Open in Email App</span>
                </a>
              </div>

              {/* Honest note regarding mail infrastructure */}
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                <Info className="w-3 h-3 text-slate-400 shrink-0" />
                <span>
                  Direct email dispatch: messages are routed to{' '}
                  <strong className="text-slate-400 font-mono">{PERSONAL_INFO.socialLinks.email}</strong>
                </span>
              </div>
            </form>
          </motion.div>

          {/* Right: Direct Information, Resume & Verified Profiles */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Contact Details */}
            <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/[0.08] space-y-5">
              <h4 className="text-base font-bold text-white tracking-tight">
                Direct Contact Details
              </h4>

              <div className="space-y-4 text-sm">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-accent shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted">Primary Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.socialLinks.email}`}
                      className="text-white hover:text-brand-accent font-medium transition-colors break-all"
                    >
                      {PERSONAL_INFO.socialLinks.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-accent shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted">Current Location</div>
                    <div className="text-white font-medium">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Download in Contact Section per requirements */}
              <div className="pt-4 border-t border-white/[0.06]">
                <Button
                  variant="secondary"
                  size="md"
                  href={PERSONAL_INFO.resumeUrl}
                  download="Kevin_T_Resume.pdf"
                  icon={FileDown}
                  className="w-full justify-center"
                >
                  Download Kevin T&apos;s Resume
                </Button>
              </div>
            </div>

            {/* Verified Profiles */}
            <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/[0.08] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                Verified Code Repositories
              </h4>

              <a
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] hover:border-brand-accent/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-brand-accent transition-colors" />
                  <div>
                    <div className="text-xs font-semibold text-white">GitHub</div>
                    <div className="text-[11px] font-mono text-muted">@kevinJoshva</div>
                  </div>
                </div>
                <span className="text-xs text-brand-accent group-hover:translate-x-1 transition-transform">
                  Visit &rarr;
                </span>
              </a>

              <a
                href={PERSONAL_INFO.socialLinks.gitlab}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] hover:border-orange-500/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Gitlab className="w-5 h-5 text-slate-300 group-hover:text-orange-400 transition-colors" />
                  <div>
                    <div className="text-xs font-semibold text-white">GitLab</div>
                    <div className="text-[11px] font-mono text-muted">@kevinjesus2162004</div>
                  </div>
                </div>
                <span className="text-xs text-brand-accent group-hover:translate-x-1 transition-transform">
                  Visit &rarr;
                </span>
              </a>

              {/* LinkedIn: Rendered only when a verified URL is provided */}
              {PERSONAL_INFO.socialLinks.linkedin && (
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                    <div>
                      <div className="text-xs font-semibold text-white">LinkedIn</div>
                      <div className="text-[11px] font-mono text-muted">Professional Profile</div>
                    </div>
                  </div>
                  <span className="text-xs text-brand-accent group-hover:translate-x-1 transition-transform">
                    Visit &rarr;
                  </span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
