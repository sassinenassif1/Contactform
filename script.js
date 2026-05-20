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
// Country codes — full ITU list, alphabetical. Lebanon is the default.
// ====================================================================
const COUNTRY_CODES = [
  { code: '+93',   name: 'Afghanistan' },
  { code: '+355',  name: 'Albania' },
  { code: '+213',  name: 'Algeria' },
  { code: '+1684', name: 'American Samoa' },
  { code: '+376',  name: 'Andorra' },
  { code: '+244',  name: 'Angola' },
  { code: '+1264', name: 'Anguilla' },
  { code: '+1268', name: 'Antigua and Barbuda' },
  { code: '+54',   name: 'Argentina' },
  { code: '+374',  name: 'Armenia' },
  { code: '+297',  name: 'Aruba' },
  { code: '+61',   name: 'Australia' },
  { code: '+43',   name: 'Austria' },
  { code: '+994',  name: 'Azerbaijan' },
  { code: '+1242', name: 'Bahamas' },
  { code: '+973',  name: 'Bahrain' },
  { code: '+880',  name: 'Bangladesh' },
  { code: '+1246', name: 'Barbados' },
  { code: '+375',  name: 'Belarus' },
  { code: '+32',   name: 'Belgium' },
  { code: '+501',  name: 'Belize' },
  { code: '+229',  name: 'Benin' },
  { code: '+1441', name: 'Bermuda' },
  { code: '+975',  name: 'Bhutan' },
  { code: '+591',  name: 'Bolivia' },
  { code: '+387',  name: 'Bosnia and Herzegovina' },
  { code: '+267',  name: 'Botswana' },
  { code: '+55',   name: 'Brazil' },
  { code: '+246',  name: 'British Indian Ocean Territory' },
  { code: '+1284', name: 'British Virgin Islands' },
  { code: '+673',  name: 'Brunei' },
  { code: '+359',  name: 'Bulgaria' },
  { code: '+226',  name: 'Burkina Faso' },
  { code: '+257',  name: 'Burundi' },
  { code: '+855',  name: 'Cambodia' },
  { code: '+237',  name: 'Cameroon' },
  { code: '+1',    name: 'Canada' },
  { code: '+238',  name: 'Cape Verde' },
  { code: '+1345', name: 'Cayman Islands' },
  { code: '+236',  name: 'Central African Republic' },
  { code: '+235',  name: 'Chad' },
  { code: '+56',   name: 'Chile' },
  { code: '+86',   name: 'China' },
  { code: '+57',   name: 'Colombia' },
  { code: '+269',  name: 'Comoros' },
  { code: '+682',  name: 'Cook Islands' },
  { code: '+506',  name: 'Costa Rica' },
  { code: '+385',  name: 'Croatia' },
  { code: '+53',   name: 'Cuba' },
  { code: '+599',  name: 'Curaçao' },
  { code: '+357',  name: 'Cyprus' },
  { code: '+420',  name: 'Czech Republic' },
  { code: '+243',  name: 'Democratic Republic of the Congo' },
  { code: '+45',   name: 'Denmark' },
  { code: '+253',  name: 'Djibouti' },
  { code: '+1767', name: 'Dominica' },
  { code: '+1809', name: 'Dominican Republic' },
  { code: '+670',  name: 'East Timor' },
  { code: '+593',  name: 'Ecuador' },
  { code: '+20',   name: 'Egypt' },
  { code: '+503',  name: 'El Salvador' },
  { code: '+240',  name: 'Equatorial Guinea' },
  { code: '+291',  name: 'Eritrea' },
  { code: '+372',  name: 'Estonia' },
  { code: '+268',  name: 'Eswatini' },
  { code: '+251',  name: 'Ethiopia' },
  { code: '+500',  name: 'Falkland Islands' },
  { code: '+298',  name: 'Faroe Islands' },
  { code: '+679',  name: 'Fiji' },
  { code: '+358',  name: 'Finland' },
  { code: '+33',   name: 'France' },
  { code: '+594',  name: 'French Guiana' },
  { code: '+689',  name: 'French Polynesia' },
  { code: '+241',  name: 'Gabon' },
  { code: '+220',  name: 'Gambia' },
  { code: '+995',  name: 'Georgia' },
  { code: '+49',   name: 'Germany' },
  { code: '+233',  name: 'Ghana' },
  { code: '+350',  name: 'Gibraltar' },
  { code: '+30',   name: 'Greece' },
  { code: '+299',  name: 'Greenland' },
  { code: '+1473', name: 'Grenada' },
  { code: '+590',  name: 'Guadeloupe' },
  { code: '+1671', name: 'Guam' },
  { code: '+502',  name: 'Guatemala' },
  { code: '+44',   name: 'Guernsey' },
  { code: '+224',  name: 'Guinea' },
  { code: '+245',  name: 'Guinea-Bissau' },
  { code: '+592',  name: 'Guyana' },
  { code: '+509',  name: 'Haiti' },
  { code: '+504',  name: 'Honduras' },
  { code: '+852',  name: 'Hong Kong' },
  { code: '+36',   name: 'Hungary' },
  { code: '+354',  name: 'Iceland' },
  { code: '+91',   name: 'India' },
  { code: '+62',   name: 'Indonesia' },
  { code: '+98',   name: 'Iran' },
  { code: '+964',  name: 'Iraq' },
  { code: '+353',  name: 'Ireland' },
  { code: '+44',   name: 'Isle of Man' },
  { code: '+972',  name: 'Israel' },
  { code: '+39',   name: 'Italy' },
  { code: '+225',  name: 'Ivory Coast' },
  { code: '+1876', name: 'Jamaica' },
  { code: '+81',   name: 'Japan' },
  { code: '+44',   name: 'Jersey' },
  { code: '+962',  name: 'Jordan' },
  { code: '+7',    name: 'Kazakhstan' },
  { code: '+254',  name: 'Kenya' },
  { code: '+686',  name: 'Kiribati' },
  { code: '+383',  name: 'Kosovo' },
  { code: '+965',  name: 'Kuwait' },
  { code: '+996',  name: 'Kyrgyzstan' },
  { code: '+856',  name: 'Laos' },
  { code: '+371',  name: 'Latvia' },
  { code: '+961',  name: 'Lebanon' },
  { code: '+266',  name: 'Lesotho' },
  { code: '+231',  name: 'Liberia' },
  { code: '+218',  name: 'Libya' },
  { code: '+423',  name: 'Liechtenstein' },
  { code: '+370',  name: 'Lithuania' },
  { code: '+352',  name: 'Luxembourg' },
  { code: '+853',  name: 'Macau' },
  { code: '+261',  name: 'Madagascar' },
  { code: '+265',  name: 'Malawi' },
  { code: '+60',   name: 'Malaysia' },
  { code: '+960',  name: 'Maldives' },
  { code: '+223',  name: 'Mali' },
  { code: '+356',  name: 'Malta' },
  { code: '+692',  name: 'Marshall Islands' },
  { code: '+596',  name: 'Martinique' },
  { code: '+222',  name: 'Mauritania' },
  { code: '+230',  name: 'Mauritius' },
  { code: '+262',  name: 'Mayotte' },
  { code: '+52',   name: 'Mexico' },
  { code: '+691',  name: 'Micronesia' },
  { code: '+373',  name: 'Moldova' },
  { code: '+377',  name: 'Monaco' },
  { code: '+976',  name: 'Mongolia' },
  { code: '+382',  name: 'Montenegro' },
  { code: '+1664', name: 'Montserrat' },
  { code: '+212',  name: 'Morocco' },
  { code: '+258',  name: 'Mozambique' },
  { code: '+95',   name: 'Myanmar' },
  { code: '+264',  name: 'Namibia' },
  { code: '+674',  name: 'Nauru' },
  { code: '+977',  name: 'Nepal' },
  { code: '+31',   name: 'Netherlands' },
  { code: '+687',  name: 'New Caledonia' },
  { code: '+64',   name: 'New Zealand' },
  { code: '+505',  name: 'Nicaragua' },
  { code: '+227',  name: 'Niger' },
  { code: '+234',  name: 'Nigeria' },
  { code: '+683',  name: 'Niue' },
  { code: '+850',  name: 'North Korea' },
  { code: '+389',  name: 'North Macedonia' },
  { code: '+1670', name: 'Northern Mariana Islands' },
  { code: '+47',   name: 'Norway' },
  { code: '+968',  name: 'Oman' },
  { code: '+92',   name: 'Pakistan' },
  { code: '+680',  name: 'Palau' },
  { code: '+970',  name: 'Palestine' },
  { code: '+507',  name: 'Panama' },
  { code: '+675',  name: 'Papua New Guinea' },
  { code: '+595',  name: 'Paraguay' },
  { code: '+51',   name: 'Peru' },
  { code: '+63',   name: 'Philippines' },
  { code: '+48',   name: 'Poland' },
  { code: '+351',  name: 'Portugal' },
  { code: '+1787', name: 'Puerto Rico' },
  { code: '+974',  name: 'Qatar' },
  { code: '+242',  name: 'Republic of the Congo' },
  { code: '+262',  name: 'Réunion' },
  { code: '+40',   name: 'Romania' },
  { code: '+7',    name: 'Russia' },
  { code: '+250',  name: 'Rwanda' },
  { code: '+590',  name: 'Saint Barthélemy' },
  { code: '+290',  name: 'Saint Helena' },
  { code: '+1869', name: 'Saint Kitts and Nevis' },
  { code: '+1758', name: 'Saint Lucia' },
  { code: '+590',  name: 'Saint Martin' },
  { code: '+508',  name: 'Saint Pierre and Miquelon' },
  { code: '+1784', name: 'Saint Vincent and the Grenadines' },
  { code: '+685',  name: 'Samoa' },
  { code: '+378',  name: 'San Marino' },
  { code: '+239',  name: 'São Tomé and Príncipe' },
  { code: '+966',  name: 'Saudi Arabia' },
  { code: '+221',  name: 'Senegal' },
  { code: '+381',  name: 'Serbia' },
  { code: '+248',  name: 'Seychelles' },
  { code: '+232',  name: 'Sierra Leone' },
  { code: '+65',   name: 'Singapore' },
  { code: '+1721', name: 'Sint Maarten' },
  { code: '+421',  name: 'Slovakia' },
  { code: '+386',  name: 'Slovenia' },
  { code: '+677',  name: 'Solomon Islands' },
  { code: '+252',  name: 'Somalia' },
  { code: '+27',   name: 'South Africa' },
  { code: '+82',   name: 'South Korea' },
  { code: '+211',  name: 'South Sudan' },
  { code: '+34',   name: 'Spain' },
  { code: '+94',   name: 'Sri Lanka' },
  { code: '+249',  name: 'Sudan' },
  { code: '+597',  name: 'Suriname' },
  { code: '+46',   name: 'Sweden' },
  { code: '+41',   name: 'Switzerland' },
  { code: '+963',  name: 'Syria' },
  { code: '+886',  name: 'Taiwan' },
  { code: '+992',  name: 'Tajikistan' },
  { code: '+255',  name: 'Tanzania' },
  { code: '+66',   name: 'Thailand' },
  { code: '+228',  name: 'Togo' },
  { code: '+690',  name: 'Tokelau' },
  { code: '+676',  name: 'Tonga' },
  { code: '+1868', name: 'Trinidad and Tobago' },
  { code: '+216',  name: 'Tunisia' },
  { code: '+90',   name: 'Turkey' },
  { code: '+993',  name: 'Turkmenistan' },
  { code: '+1649', name: 'Turks and Caicos Islands' },
  { code: '+688',  name: 'Tuvalu' },
  { code: '+256',  name: 'Uganda' },
  { code: '+380',  name: 'Ukraine' },
  { code: '+971',  name: 'United Arab Emirates' },
  { code: '+44',   name: 'United Kingdom' },
  { code: '+1',    name: 'United States' },
  { code: '+598',  name: 'Uruguay' },
  { code: '+998',  name: 'Uzbekistan' },
  { code: '+678',  name: 'Vanuatu' },
  { code: '+379',  name: 'Vatican City' },
  { code: '+58',   name: 'Venezuela' },
  { code: '+84',   name: 'Vietnam' },
  { code: '+1340', name: 'U.S. Virgin Islands' },
  { code: '+681',  name: 'Wallis and Futuna' },
  { code: '+212',  name: 'Western Sahara' },
  { code: '+967',  name: 'Yemen' },
  { code: '+260',  name: 'Zambia' },
  { code: '+263',  name: 'Zimbabwe' },
];

function populateCountryCodes() {
  const selects = document.querySelectorAll('#phone1Code, #phone2Code');
  selects.forEach((sel) => {
    sel.innerHTML = COUNTRY_CODES.map(
      (c) =>
        `<option value="${c.code}"${c.name === 'Lebanon' ? ' selected' : ''}>${c.code}  ${c.name}</option>`
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
