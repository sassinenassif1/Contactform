// ====================================================================
// VV Clinical Center — Patient Registration Form
// Config: set your endpoint + Google review URL below.
// ====================================================================

const CONFIG = {
  // Where the form data is POSTed (JSON). Replace with your endpoint
  // (Formspree, Google Apps Script, your own API, n8n webhook, …).
  // Leave empty to just log the payload to the console for testing.
  submitEndpoint: '',

  // Google review URL for your clinic.
  // Get your Place ID at: https://developers.google.com/maps/documentation/places/web-service/place-id
  // Then the review URL is: https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID_HERE',
};

// ====================================================================
// Country codes (Middle East prioritised, then the rest A→Z)
// ====================================================================
const COUNTRY_CODES = [
  // Most common for VV Clinical Center patients
  { code: '+961', flag: '🇱🇧', name: 'Lebanon' },
  { code: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: '+974', flag: '🇶🇦', name: 'Qatar' },
  { code: '+973', flag: '🇧🇭', name: 'Bahrain' },
  { code: '+968', flag: '🇴🇲', name: 'Oman' },
  { code: '+962', flag: '🇯🇴', name: 'Jordan' },
  { code: '+963', flag: '🇸🇾', name: 'Syria' },
  { code: '+964', flag: '🇮🇶', name: 'Iraq' },
  { code: '+20',  flag: '🇪🇬', name: 'Egypt' },
  { code: '+970', flag: '🇵🇸', name: 'Palestine' },
  { code: '+967', flag: '🇾🇪', name: 'Yemen' },
  { code: '+218', flag: '🇱🇾', name: 'Libya' },
  { code: '+216', flag: '🇹🇳', name: 'Tunisia' },
  { code: '+213', flag: '🇩🇿', name: 'Algeria' },
  { code: '+212', flag: '🇲🇦', name: 'Morocco' },
  { code: '+98',  flag: '🇮🇷', name: 'Iran' },
  { code: '+90',  flag: '🇹🇷', name: 'Turkey' },

  // Frequently-used international
  { code: '+1',   flag: '🇺🇸', name: 'United States' },
  { code: '+1',   flag: '🇨🇦', name: 'Canada' },
  { code: '+44',  flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+33',  flag: '🇫🇷', name: 'France' },
  { code: '+49',  flag: '🇩🇪', name: 'Germany' },
  { code: '+39',  flag: '🇮🇹', name: 'Italy' },
  { code: '+34',  flag: '🇪🇸', name: 'Spain' },
  { code: '+31',  flag: '🇳🇱', name: 'Netherlands' },
  { code: '+32',  flag: '🇧🇪', name: 'Belgium' },
  { code: '+41',  flag: '🇨🇭', name: 'Switzerland' },
  { code: '+43',  flag: '🇦🇹', name: 'Austria' },
  { code: '+30',  flag: '🇬🇷', name: 'Greece' },
  { code: '+351', flag: '🇵🇹', name: 'Portugal' },
  { code: '+46',  flag: '🇸🇪', name: 'Sweden' },
  { code: '+47',  flag: '🇳🇴', name: 'Norway' },
  { code: '+45',  flag: '🇩🇰', name: 'Denmark' },
  { code: '+358', flag: '🇫🇮', name: 'Finland' },
  { code: '+353', flag: '🇮🇪', name: 'Ireland' },
  { code: '+48',  flag: '🇵🇱', name: 'Poland' },
  { code: '+420', flag: '🇨🇿', name: 'Czech Republic' },
  { code: '+36',  flag: '🇭🇺', name: 'Hungary' },
  { code: '+40',  flag: '🇷🇴', name: 'Romania' },
  { code: '+7',   flag: '🇷🇺', name: 'Russia' },
  { code: '+380', flag: '🇺🇦', name: 'Ukraine' },
  { code: '+61',  flag: '🇦🇺', name: 'Australia' },
  { code: '+64',  flag: '🇳🇿', name: 'New Zealand' },
  { code: '+81',  flag: '🇯🇵', name: 'Japan' },
  { code: '+82',  flag: '🇰🇷', name: 'South Korea' },
  { code: '+86',  flag: '🇨🇳', name: 'China' },
  { code: '+852', flag: '🇭🇰', name: 'Hong Kong' },
  { code: '+65',  flag: '🇸🇬', name: 'Singapore' },
  { code: '+60',  flag: '🇲🇾', name: 'Malaysia' },
  { code: '+66',  flag: '🇹🇭', name: 'Thailand' },
  { code: '+62',  flag: '🇮🇩', name: 'Indonesia' },
  { code: '+63',  flag: '🇵🇭', name: 'Philippines' },
  { code: '+84',  flag: '🇻🇳', name: 'Vietnam' },
  { code: '+91',  flag: '🇮🇳', name: 'India' },
  { code: '+92',  flag: '🇵🇰', name: 'Pakistan' },
  { code: '+880', flag: '🇧🇩', name: 'Bangladesh' },
  { code: '+27',  flag: '🇿🇦', name: 'South Africa' },
  { code: '+234', flag: '🇳🇬', name: 'Nigeria' },
  { code: '+254', flag: '🇰🇪', name: 'Kenya' },
  { code: '+55',  flag: '🇧🇷', name: 'Brazil' },
  { code: '+54',  flag: '🇦🇷', name: 'Argentina' },
  { code: '+52',  flag: '🇲🇽', name: 'Mexico' },
];

function populateCountryCodes() {
  const selects = document.querySelectorAll('#phone1Code, #phone2Code');
  selects.forEach((sel) => {
    sel.innerHTML = COUNTRY_CODES.map(
      (c, i) =>
        `<option value="${c.code}"${c.code === '+961' && i === 0 ? ' selected' : ''}>${c.flag} ${c.code}</option>`
    ).join('');
  });
}

// ====================================================================
// i18n strings
// ====================================================================
const I18N = {
  en: {
    'title': 'Patient Registration',
    'subtitle': 'Welcome to VV Clinical Center. Please fill in your details so we can serve you better.',
    'section.personal': 'Personal Information',
    'section.medical': 'Medical Questionnaire',
    'section.prefs': 'A Few More Questions',
    'section.review': 'Leave Us a Review',
    'field.firstName': 'First Name',
    'field.lastName': 'Family Name',
    'field.dob': 'Date of Birth',
    'field.gender': 'Gender',
    'field.phone1': 'Phone (WhatsApp)',
    'field.phone2': 'Alternate Phone',
    'field.email': 'Email',
    'field.address': 'Address',
    'optional': '(optional)',
    'opt.select': 'Select…',
    'opt.female': 'Female',
    'opt.male': 'Male',
    'opt.other': 'Prefer not to say',
    'medical.hint': 'All answers are confidential and used only for your safe treatment.',
    'med.smoke': 'Do you smoke?',
    'med.allergies': 'Any allergies?',
    'med.diabetes': 'Diabetes?',
    'med.heart': 'Heart problems?',
    'med.pregnant': 'Currently pregnant or breastfeeding?',
    'med.children': 'Do you have children under 18?',
    'med.notes': 'Any other medical conditions or medications we should know about?',
    'yes': 'Yes',
    'no': 'No',
    'na': 'N/A',
    'prefs.hint': 'Helps us offer you the right services at the right time.',
    'field.hearAbout': 'How did you hear about us?',
    'opt.friend': 'Friend / Family',
    'opt.instagram': 'Instagram',
    'opt.facebook': 'Facebook',
    'opt.google': 'Google Search',
    'opt.tiktok': 'TikTok',
    'opt.walk': 'Walk-in / Sign',
    'opt.other2': 'Other',
    'field.lastVisit': 'Last dental visit',
    'opt.lv1': 'Less than 6 months',
    'opt.lv2': '6–12 months',
    'opt.lv3': '1–2 years',
    'opt.lv4': 'More than 2 years',
    'opt.lv5': 'Never',
    'field.interests': "I'm interested in",
    'checkAll': '(check all that apply)',
    'int.cleaning': 'Cleaning & Hygiene',
    'int.whitening': 'Whitening',
    'int.ortho': 'Orthodontics / Aligners',
    'int.implants': 'Implants',
    'int.cosmetic': 'Cosmetic / Veneers',
    'int.pediatric': 'Pediatric Dentistry',
    'int.rootcanal': 'Root Canal',
    'int.emergency': 'Emergency Care',
    'field.insurance': 'Insurance provider',
    'field.occupation': 'Occupation',
    'field.apptTime': 'Preferred appointment time',
    'opt.tm1': 'Weekday morning',
    'opt.tm2': 'Weekday afternoon',
    'opt.tm3': 'Weekday evening',
    'opt.tm4': 'Weekend',
    'field.contactPref': 'Best way to reach you',
    'opt.ch1': 'WhatsApp',
    'opt.ch2': 'Phone call',
    'opt.ch3': 'SMS',
    'opt.ch4': 'Email',
    'consent.marketing': "I'd like to receive appointment reminders, offers and health tips from VV Clinical Center.",
    'review.hint': "If you've visited us before, your feedback means the world. You can also share it on Google in one click.",
    'field.review': 'Your review',
    'review.placeholder': 'What did you love? Anything we can improve?',
    'review.postGoogle': 'Post my review on Google',
    'review.googleNote': "We'll copy your review to your clipboard and open Google so you can paste & submit.",
    'submit': 'Submit Registration',
    'footer': 'Your information is kept private and used only by VV Clinical Center.',
    'success.title': 'Thank you!',
    'success.body': "Your registration has been received. We'll be in touch soon.",
    'close': 'Close',
    'alert.required': 'Please fill in all required fields.',
    'alert.error': 'Something went wrong. Please try again or call the clinic.',
    'alert.copied': 'Review copied! Opening Google…',
    'alert.noReview': 'Please write your review first.',
  },
  ar: {
    'title': 'تسجيل المريض',
    'subtitle': 'أهلاً بكم في VV Clinical Center. الرجاء ملء بياناتكم لنتمكن من خدمتكم بشكل أفضل.',
    'section.personal': 'المعلومات الشخصية',
    'section.medical': 'الاستبيان الطبي',
    'section.prefs': 'بعض الأسئلة الإضافية',
    'section.review': 'اترك لنا تقييماً',
    'field.firstName': 'الاسم',
    'field.lastName': 'الكنية',
    'field.dob': 'تاريخ الميلاد',
    'field.gender': 'الجنس',
    'field.phone1': 'رقم الهاتف (واتساب)',
    'field.phone2': 'رقم هاتف آخر',
    'field.email': 'البريد الإلكتروني',
    'field.address': 'العنوان',
    'optional': '(اختياري)',
    'opt.select': 'اختر…',
    'opt.female': 'أنثى',
    'opt.male': 'ذكر',
    'opt.other': 'أفضل عدم الإفصاح',
    'medical.hint': 'جميع الإجابات سرية وتُستخدم فقط لضمان علاجك بأمان.',
    'med.smoke': 'هل تدخن؟',
    'med.allergies': 'هل لديك حساسية؟',
    'med.diabetes': 'هل لديك سكري؟',
    'med.heart': 'هل لديك مشاكل في القلب؟',
    'med.pregnant': 'هل أنتِ حامل أو مرضعة حالياً؟',
    'med.children': 'هل لديك أطفال تحت سن 18؟',
    'med.notes': 'هل هناك حالات طبية أو أدوية أخرى يجب أن نعرفها؟',
    'yes': 'نعم',
    'no': 'لا',
    'na': 'لا ينطبق',
    'prefs.hint': 'تساعدنا هذه الأسئلة على تقديم الخدمة المناسبة في الوقت المناسب.',
    'field.hearAbout': 'كيف سمعت عنا؟',
    'opt.friend': 'صديق / عائلة',
    'opt.instagram': 'انستغرام',
    'opt.facebook': 'فيسبوك',
    'opt.google': 'بحث غوغل',
    'opt.tiktok': 'تيك توك',
    'opt.walk': 'مرور / لافتة',
    'opt.other2': 'أخرى',
    'field.lastVisit': 'آخر زيارة لطبيب الأسنان',
    'opt.lv1': 'أقل من 6 أشهر',
    'opt.lv2': '6 إلى 12 شهراً',
    'opt.lv3': 'سنة إلى سنتين',
    'opt.lv4': 'أكثر من سنتين',
    'opt.lv5': 'أبداً',
    'field.interests': 'أنا مهتم بـ',
    'checkAll': '(اختر كل ما ينطبق)',
    'int.cleaning': 'التنظيف والعناية',
    'int.whitening': 'التبييض',
    'int.ortho': 'تقويم الأسنان',
    'int.implants': 'زراعة الأسنان',
    'int.cosmetic': 'تجميل / فينير',
    'int.pediatric': 'طب أسنان الأطفال',
    'int.rootcanal': 'علاج العصب',
    'int.emergency': 'حالات الطوارئ',
    'field.insurance': 'شركة التأمين',
    'field.occupation': 'المهنة',
    'field.apptTime': 'الوقت المفضل للموعد',
    'opt.tm1': 'صباح أيام الأسبوع',
    'opt.tm2': 'بعد ظهر أيام الأسبوع',
    'opt.tm3': 'مساء أيام الأسبوع',
    'opt.tm4': 'عطلة نهاية الأسبوع',
    'field.contactPref': 'أفضل طريقة للتواصل معك',
    'opt.ch1': 'واتساب',
    'opt.ch2': 'مكالمة هاتفية',
    'opt.ch3': 'رسالة نصية',
    'opt.ch4': 'بريد إلكتروني',
    'consent.marketing': 'أرغب في تلقي تذكيرات المواعيد والعروض ونصائح صحية من VV Clinical Center.',
    'review.hint': 'إذا كنت قد زرتنا من قبل، فإن رأيك يهمنا كثيراً. يمكنك أيضاً مشاركته على غوغل بضغطة واحدة.',
    'field.review': 'تقييمك',
    'review.placeholder': 'ما الذي أعجبك؟ هل هناك ما يمكننا تحسينه؟',
    'review.postGoogle': 'انشر تقييمي على غوغل',
    'review.googleNote': 'سننسخ تقييمك إلى الحافظة ونفتح غوغل لتلصقه وترسله.',
    'submit': 'إرسال التسجيل',
    'footer': 'معلوماتك محفوظة بسرية ولا يستخدمها سوى VV Clinical Center.',
    'success.title': 'شكراً لك!',
    'success.body': 'تم استلام تسجيلك. سنتواصل معك قريباً.',
    'close': 'إغلاق',
    'alert.required': 'الرجاء ملء جميع الحقول المطلوبة.',
    'alert.error': 'حدث خطأ. الرجاء المحاولة مجدداً أو الاتصال بالعيادة.',
    'alert.copied': 'تم نسخ التقييم! جاري فتح غوغل…',
    'alert.noReview': 'الرجاء كتابة تقييمك أولاً.',
  },
};

// ====================================================================
// Language handling
// ====================================================================
let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const dict = I18N[lang];
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('.lang-toggle button').forEach((b) => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  try { localStorage.setItem('vv_lang', lang); } catch {}
}

// ====================================================================
// Form submission
// ====================================================================
function collectFormData(form) {
  const fd = new FormData(form);
  const data = {};
  for (const [key, value] of fd.entries()) {
    if (data[key] === undefined) {
      data[key] = value;
    } else if (Array.isArray(data[key])) {
      data[key].push(value);
    } else {
      data[key] = [data[key], value];
    }
  }
  // Combine country code + phone into E.164-ish strings
  if (data.phone1) data.phone1Full = `${data.phone1Code || ''} ${data.phone1}`.trim();
  if (data.phone2) data.phone2Full = `${data.phone2Code || ''} ${data.phone2}`.trim();
  data._submittedAt = new Date().toISOString();
  data._language = currentLang;
  return data;
}

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const payload = collectFormData(form);
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.6';

  try {
    if (CONFIG.submitEndpoint) {
      const res = await fetch(CONFIG.submitEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Network');
    } else {
      console.log('[VV Form Submission]', payload);
      await new Promise((r) => setTimeout(r, 600));
    }
    showSuccess();
    form.reset();
  } catch (err) {
    alert(I18N[currentLang]['alert.error']);
  } finally {
    submitBtn.disabled = false;
    submitBtn.style.opacity = '';
  }
}

function showSuccess() {
  document.getElementById('success-modal').hidden = false;
}

// ====================================================================
// Google review handoff
// ====================================================================
async function postToGoogle() {
  const reviewText = document.getElementById('reviewText').value.trim();
  if (!reviewText) {
    alert(I18N[currentLang]['alert.noReview']);
    return;
  }
  try {
    await navigator.clipboard.writeText(reviewText);
  } catch {
    // clipboard failed silently — Google page still opens
  }
  alert(I18N[currentLang]['alert.copied']);
  window.open(CONFIG.googleReviewUrl, '_blank', 'noopener');
}

// ====================================================================
// Init
// ====================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Populate country code dropdowns
  populateCountryCodes();

  // Restore language
  let saved = 'en';
  try { saved = localStorage.getItem('vv_lang') || 'en'; } catch {}
  applyLanguage(saved);

  // Language toggle
  document.querySelectorAll('.lang-toggle button').forEach((b) => {
    b.addEventListener('click', () => applyLanguage(b.dataset.lang));
  });

  // Form submit
  document.getElementById('registration-form').addEventListener('submit', handleSubmit);

  // Google review button
  document.getElementById('post-google').addEventListener('click', postToGoogle);

  // Close modal
  document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('success-modal').hidden = true;
  });
});
