import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, AlertCircle, Phone, ArrowUpRight, Copy, Check, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { brandConfig } from '../data/config';
import { servicesData } from '../data/servicesData';

interface ContactProps {
  selectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedService }) => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService || '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.feedback.errorRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.feedback.errorRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.feedback.errorEmail;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.feedback.errorRequired;
    }

    if (!formData.service) {
      newErrors.service = t.contact.feedback.errorService;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.feedback.errorRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate professional API transmission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(brandConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      lang === 'bn'
        ? `আসসালামু আলাইকুম রহিম ভাই, আমার নাম ${formData.name || 'ক্লায়েন্ট'}। আমি "${formData.service || 'ডিজাইন'}" প্রজেক্ট নিয়ে কথা বলতে চাই।`
        : `Hi Abdur Rahim, My name is ${formData.name || 'Client'}. I would like to inquire about "${formData.service || 'Design'}" project.`
    );
    window.open(`https://wa.me/${brandConfig.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0a0a0c] relative border-t border-white/5">
      {/* Decorative accent glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#9e1b32]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#dfb86c] mb-2">
            <span>07</span>
            <span>·</span>
            <span>{t.contact.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Direct Communication Channels & Founder Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-[#121219] border border-white/10 p-6 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#dfb86c]">
                  {t.contact.directChannels.title}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  AR DesignBD
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {lang === 'bn' ? brandConfig.founder.bn : brandConfig.founder.en} • {lang === 'bn' ? brandConfig.role.bn : brandConfig.role.en}
                </p>
                <p className="text-xs text-[#dfb86c] mt-1 flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#dfb86c]" />
                  <span>{lang === 'bn' ? brandConfig.contact.location.bn : brandConfig.contact.location.en}</span>
                </p>
              </div>

              {/* Channels List */}
              <div className="space-y-3">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${brandConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#161622] hover:bg-[#1a1a29] border border-white/5 hover:border-[#25D366]/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-[#25D366] transition-colors">
                        {t.contact.directChannels.whatsappTitle}
                      </p>
                      <p className="text-xs text-[#25D366] font-mono font-medium">
                        {brandConfig.contact.whatsappDisplay}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                {/* Direct Phone Call */}
                <a
                  href={`tel:${brandConfig.contact.phone}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#161622] hover:bg-[#1a1a29] border border-white/5 hover:border-[#dfb86c]/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#dfb86c]/20 border border-[#dfb86c]/30 flex items-center justify-center text-[#dfb86c]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-[#dfb86c] transition-colors">
                        {lang === 'bn' ? 'সরাসরি কল' : 'Direct Call'}
                      </p>
                      <p className="text-xs text-neutral-300 font-mono">
                        {brandConfig.contact.phone}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                {/* Email with copy action */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#161622] border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#9e1b32]/20 border border-[#9e1b32]/40 flex items-center justify-center text-[#f43f5e]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t.contact.directChannels.emailTitle}
                      </p>
                      <a
                        href={`mailto:${brandConfig.contact.email}`}
                        className="text-xs text-neutral-300 hover:text-white font-mono hover:underline truncate block"
                      >
                        {brandConfig.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors cursor-pointer"
                    title={lang === 'bn' ? 'ইমেইল কপি করুন' : 'Copy Email'}
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Facebook */}
                <a
                  href={brandConfig.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#161622] hover:bg-[#1a1a29] border border-white/5 hover:border-[#1877F2]/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1877F2]/20 border border-[#1877F2]/30 flex items-center justify-center text-[#1877F2]">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-[#1877F2] transition-colors">
                        {t.contact.directChannels.facebookTitle}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {t.contact.directChannels.facebookDesc}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={brandConfig.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#161622] hover:bg-[#1a1a29] border border-white/5 hover:border-[#0a66c2]/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0a66c2]/20 border border-[#0a66c2]/30 flex items-center justify-center text-[#0a66c2]">
                      <span className="font-bold text-sm">in</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-[#0a66c2] transition-colors">
                        LinkedIn Profile
                      </p>
                      <p className="text-xs text-neutral-400 font-mono">
                        linkedin.com/in/rubelboss2
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Direct WhatsApp Quick Chat Helper */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#17231c] to-[#121c17] border border-[#25D366]/20">
                <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  {lang === 'bn' ? 'জরুরি আলোচনা প্রয়োজন?' : 'Need Instant Consultation?'}
                </p>
                <p className="text-xs text-neutral-300 mt-1">
                  {lang === 'bn' ? 'সরাসরি হোয়াটসঅ্যাপে কথা বলুন এবং ৫ মিনিটের মধ্যে রেসপন্স পান।' : 'Message directly on WhatsApp for faster scoping.'}
                </p>
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="mt-3 w-full py-2 px-3 rounded-lg text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#121219] border border-white/10 p-6 sm:p-8 shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t.contact.feedback.successTitle}
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    {t.contact.feedback.successDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-lg text-xs font-semibold text-neutral-200 bg-[#191925] hover:bg-[#222233] border border-white/10 transition-colors cursor-pointer"
                  >
                    {t.contact.feedback.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        {t.contact.form.nameLabel} <span className="text-[#f43f5e]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.form.namePlaceholder}
                        className={`w-full px-4 py-3 rounded-lg bg-[#161622] text-sm text-white border transition-colors focus:outline-none ${
                          errors.name ? 'border-[#f43f5e] focus:border-[#f43f5e]' : 'border-white/10 focus:border-[#dfb86c]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-[#f43f5e] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        {t.contact.form.emailLabel} <span className="text-[#f43f5e]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.form.emailPlaceholder}
                        className={`w-full px-4 py-3 rounded-lg bg-[#161622] text-sm text-white border transition-colors focus:outline-none ${
                          errors.email ? 'border-[#f43f5e] focus:border-[#f43f5e]' : 'border-white/10 focus:border-[#dfb86c]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-[#f43f5e] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Required Service Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        {t.contact.form.phoneLabel} <span className="text-[#f43f5e]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.contact.form.phonePlaceholder}
                        className={`w-full px-4 py-3 rounded-lg bg-[#161622] text-sm text-white border transition-colors focus:outline-none ${
                          errors.phone ? 'border-[#f43f5e] focus:border-[#f43f5e]' : 'border-white/10 focus:border-[#dfb86c]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-[#f43f5e] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        {t.contact.form.serviceLabel} <span className="text-[#f43f5e]">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-[#161622] text-sm text-white border transition-colors focus:outline-none ${
                          errors.service ? 'border-[#f43f5e] focus:border-[#f43f5e]' : 'border-white/10 focus:border-[#dfb86c]'
                        }`}
                      >
                        <option value="" disabled>
                          {t.contact.form.serviceSelectDefault}
                        </option>
                        {servicesData.map((s) => {
                          const sTitle = lang === 'bn' ? s.title.bn : s.title.en;
                          return (
                            <option key={s.id} value={sTitle} className="bg-[#161622] text-white">
                              {sTitle}
                            </option>
                          );
                        })}
                      </select>
                      {errors.service && (
                        <p className="text-[11px] text-[#f43f5e] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.service}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      {t.contact.form.messageLabel} <span className="text-[#f43f5e]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.messagePlaceholder}
                      className={`w-full px-4 py-3 rounded-lg bg-[#161622] text-sm text-white border transition-colors focus:outline-none resize-none ${
                        errors.message ? 'border-[#f43f5e] focus:border-[#f43f5e]' : 'border-white/10 focus:border-[#dfb86c]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-[#f43f5e] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-6 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-[#9e1b32] to-[#7f1325] hover:from-[#be1b3b] hover:to-[#9e1b32] border border-[#f43f5e]/30 shadow-lg shadow-[#9e1b32]/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 text-[#dfb86c]" />
                      <span>{submitting ? t.contact.form.sendingBtn : t.contact.form.sendBtn}</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
